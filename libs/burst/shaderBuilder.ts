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

class Statement<T extends Types> {
    constructor(public type: T, public code: string) { }
    add(other: Statement<T>): Statement<T> {
        return new Statement(this.type, `(${this.code}) + ${other.code}`);
    }
    sub(other: Statement<T>): Statement<T> {
        return new Statement(this.type, `(${this.code}) - ${other.code}`);
    }
    mul(other: Statement<T>): Statement<T> {
        return new Statement(this.type, `(${this.code}) * ${other.code}`);
    }
    div(other: Statement<T>): Statement<T> {
        return new Statement(this.type, `(${this.code}) / ${other.code}`);
    }
    neg(): Statement<T> {
        return new Statement(this.type, `-(${this.code})`);
    }
    combine<U extends Types>(other: Statement<U>) {
        return new Combiner(typeBlueprints[this.type], this.code).combine(other);
    }
    aggregate<U>(
        elements: readonly U[],
        func: (previous: Statement<T>, elem: U, index: number) => Statement<T>
    ): Statement<T> {
        var statement = this as Statement<T>;
        for (let i = 0; i < elements.length; i++) {
            statement = func(statement, elements[i], i);
        }
        return statement;
    }
}

class Combiner<Blueprint extends readonly number[]> {
    constructor(private blueprint: Blueprint, public code: string) { }
    combine<U extends Types>(other: Statement<U>) {
        return new Combiner(<const>[...this.blueprint, ...typeBlueprints[other.type]], `${this.code}, ${other.code}`);
    }
    as<U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U): Statement<U> {
        return new Statement(type, `${type}(${this.code})`);
    }
}

class Constructor<T extends Types> extends Statement<T> {
    constructor(type: T, ...args: ConvertTuple<TypeBlueprints[T], Statement<'float'>>) {
        super(type, `${type}(${args.map(arg => arg.code).join(', ')})`);
    }
}

class Literal<T extends Types> extends Statement<T> {
    constructor(
        type: T,
        ...values: ConvertTuple<TypeBlueprints[T], number>
    ) {
        if (values.length == 1) {
            super(type, values[0].toString());
        }
        else {
            super(type, `${type}(${values.map(value => value.toString()).join(', ')})`);
        }
    }
}

class ImperiativeBlock<Scope extends Record<string, any>> {
    constructor(public code: string, public scope: Scope) { }
    define<T extends Record<string, Statement<Types>>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): EvaluationCheck<ImperiativeBlock<Scope & T>, 'Scope collision on previous define for', keyof Scope & keyof T> {
        const statements = func(this.scope);
        const entries = toEntries(statements);
        const newScope = <const>{
            ...this.scope,
            ...fromEntries(entries.map(([key, value]) =>
                [key, new Statement(value.type, key as string)]))
        };
        const newCode = entries.reduce((code, [name, statement]) => {
            return `${code}
            ${statement.type} ${name as any} = ${statement.code};`;
        }, this.code);
        return new ImperiativeBlock(newCode, newScope as any) as any;
    }
}

// Living example.

const floatConstants = {
    one: 1.0,
    two: 2.0,
}

const searchDirections: [number, number][] = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

console.log(new ImperiativeBlock('', {})
    .define(_ => mapObject(floatConstants, value => new Literal('float', value)))
    .define($ => ({
        first: $.one.add($.two),
        second: $.one.sub($.two),
    }))
    .define($ => ({
        // a: $.b.add($.b).mul($.asdf).neg(),
        // b: $.b.add($.b).mul($.asdf).neg(),
        lotsaMaths: $.second.add($.second).mul($.one).neg(),
    }))
    .define($ => ({
        aggregationExample: new Literal('vec2', 0, 0)
            .aggregate(searchDirections, (previous, direction) =>
                previous.mul(new Literal('vec2', ...direction))),
        vec3Example: new Constructor('vec3', $.first, $.second, new Literal('float', 0)),
        mat2Example: new Constructor('mat2', $.first, $.second, $.one, $.lotsaMaths),
    }))
    .define($ => ({
        result: $.aggregationExample.combine($.first).as('vec3')
            .add($.vec3Example).combine($.one).as('mat2')
            .add($.mat2Example),
    }))
    .code);

