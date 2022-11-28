import { ConvertTuple, EvaluationCheck, fromEntries, mapObject, toEntries } from '../utils';

const typeBlueprints = <const>{
    float: [0],
    vec2: [0, 0],
    vec3: [0, 0, 0],
    mat2: [0, 0, 0, 0],
    vec4: [0, 0, 0, 0],
    mat3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    mat4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
type TypeBlueprints = typeof typeBlueprints;
type Types = keyof typeof typeBlueprints;

class Expr<T extends Types> {
    constructor(public type: T, public code: string) { }
    add(other: Expr<T>): Expr<T> {
        return new Expr(this.type, `(${this.code}) + ${other.code}`);
    }
    sub(other: Expr<T>): Expr<T> {
        return new Expr(this.type, `(${this.code}) - ${other.code}`);
    }
    mul(other: Expr<T>): Expr<T> {
        return new Expr(this.type, `(${this.code}) * ${other.code}`);
    }
    div(other: Expr<T>): Expr<T> {
        return new Expr(this.type, `(${this.code}) / ${other.code}`);
    }
    neg(): Expr<T> {
        return new Expr(this.type, `-(${this.code})`);
    }
    combine<U extends Types>(other: Expr<U>) {
        return new Combiner(typeBlueprints[this.type], this.code).combine(other);
    }
    aggregate<U>(
        elements: readonly U[],
        func: (previous: Expr<T>, elem: U, index: number) => Expr<T>
    ): Expr<T> {
        var statement = this as Expr<T>;
        for (let i = 0; i < elements.length; i++) {
            statement = func(statement, elements[i], i);
        }
        return statement;
    }
}

class Combiner<Blueprint extends readonly number[]> {
    constructor(private blueprint: Blueprint, public code: string) { }
    combine<U extends Types>(other: Expr<U>) {
        return new Combiner(<const>[...this.blueprint, ...typeBlueprints[other.type]], `${this.code}, ${other.code}`);
    }
    as<U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U): Expr<U> {
        return new Expr(type, `${type}(${this.code})`);
    }
}

class Value<T extends Types> extends Expr<T> {
    constructor(type: T, ...args: ConvertTuple<TypeBlueprints[T], Expr<'float'>>) {
        super(type, `${type}(${args.map(arg => arg.code).join(', ')})`);
    }
}

class Const<T extends Types> extends Expr<T> {
    constructor(
        type: T,
        ...values: ConvertTuple<TypeBlueprints[T], number>
    ) {
        if (values.length == 1) {
            super(type, Const.numberToFloatLiteral(values[0]));
        }
        else {
            super(type, `${type}(${values.map(value => Const.numberToFloatLiteral(value)).join(', ')})`);
        }
    }

    static numberToFloatLiteral(value: number) {
        var string = value.toString();
        if (string.indexOf('.') == -1) {
            string += '.0';
        }
        return string;
    }
}

class CodeBlock<Scope extends Record<string, any> = {}> {
    constructor(public code: string = '', public scope: Scope = {} as Scope) { }
    define<T extends Record<string, Expr<Types>>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): EvaluationCheck<CodeBlock<Scope & T>, 'Scope collision on previous define for', keyof Scope & keyof T> {
        const statements = func(this.scope);
        const entries = toEntries(statements);
        const newScope = <const>{
            ...this.scope,
            ...fromEntries(entries.map(([key, value]) =>
                [key, new Expr(value.type, key as string)]))
        };
        const newCode = entries.reduce((code, [name, statement]) => {
            return `${code}
            ${statement.type} ${name as any} = ${statement.code};`;
        }, this.code);
        return new CodeBlock(newCode, newScope as any) as any;
    }
}

// Living example.

const floatConstants = {
    onePointFive: 1.5,
    two: 2.0,
}

const searchDirections: [number, number][] = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

console.log(new CodeBlock()
    .define(_ => mapObject(floatConstants, value => new Const('float', value)))
    .define($ => ({
        first: $.onePointFive.add($.two),
        second: $.onePointFive.sub($.two),
    }))
    .define($ => ({
        lotsaMaths: $.second.add($.second).mul($.onePointFive).neg(),
    }))
    .define($ => ({
        aggregationExample: new Const('vec2', 0, 0)
            .aggregate(searchDirections, (previous, direction) =>
                previous.mul(new Const('vec2', ...direction))),
        vec3Example: new Value('vec3', $.first, $.second, new Const('float', 0)),
        mat2Example: new Value('mat2', $.first, $.second, $.onePointFive, $.lotsaMaths),
    }))
    .define($ => ({
        result: $.aggregationExample.combine($.first).as('vec3')
            .add($.vec3Example).combine($.onePointFive).as('mat2')
            .add($.mat2Example),
    }))
    .code);

