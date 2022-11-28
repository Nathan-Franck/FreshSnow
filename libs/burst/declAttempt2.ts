import { ConvertTuple, fromEntries, mapObject, toEntries } from '../utils';

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
    add(other: Statement<T>) {
        return new Statement(this.type, `(${this.code}) + ${other.code}`);
    }
    sub(other: Statement<T>) {
        return new Statement(this.type, `(${this.code}) - ${other.code}`);
    }
    mul(other: Statement<T>) {
        return new Statement(this.type, `(${this.code}) * ${other.code}`);
    }
    div(other: Statement<T>) {
        return new Statement(this.type, `(${this.code}) / ${other.code}`);
    }
    neg() {
        return new Statement(this.type, `-(${this.code})`);
    }
    combine<U extends Types>(other: Statement<U>) {
        return new Constructor(<const>[...typeBlueprints[this.type], ...typeBlueprints[other.type]], `${this.code}, ${other.code}`);
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

class Constructor<Blueprint extends readonly number[]> {
    constructor(private blueprint: Blueprint, public code: string) { }
    combine<U extends Types>(other: Statement<U>) {
        return new Constructor(<const>[...this.blueprint, ...typeBlueprints[other.type]], `${this.code}, ${other.code}`);
    }
    as<U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U) {
        return new Statement(type, `${type}(${this.code})`);
    }
}

class Literal<T extends Types> extends Statement<T> {
    constructor(
        type: T,
        values: TypeBlueprints[T] extends readonly [0]
            ? number
            : ConvertTuple<TypeBlueprints[T], number>
    ) {
        if (typeof values == 'number') {
            super(type, values.toString());
        }
        else {
            super(type, `${type}(${values.map(value => value.toString()).join(', ')})`);
        }
    }
}
class ImperiativeBlock<Scope> {
    constructor(public code: string, public scope: Scope) { }

    // Same as before but includes a legal statement that draws from the scope of the block.
    define<T extends { [key: string]: Statement<Types> }>(func: (scope: Scope) => T): ImperiativeBlock<Scope & T> {
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
        return new ImperiativeBlock(newCode, newScope as any);
    }
}

// Living example.

const floatConstants = {
    asdf: 1.0,
    qwer: 2.0,
}

const searchDirections = <const>[
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

// Test out the imperative block
console.log(new ImperiativeBlock('', {})
    .define(_ => mapObject(floatConstants, value => new Literal('float', value)))
    .define(stack => ({
        a: stack.asdf.add(stack.qwer),
        b: stack.asdf.sub(stack.qwer),
    }))
    .define(stack => ({
        d: stack.b.add(stack.b).mul(stack.asdf).neg(),
    }))
    .define(stack => ({
        vec2Example: new Literal('vec2', [0, 0])
            .aggregate(searchDirections, (previous, direction) =>
                previous.add(new Literal('vec2', direction))),
        vec3Example: stack.a.combine(stack.b).combine(stack.asdf).as('vec3'),
        mat2Example: stack.a.combine(stack.b).combine(stack.asdf).combine(stack.d).as('mat2'),
    }))
    .define(stack => ({
        result: stack.vec2Example.combine(stack.a).as('vec3')
            .add(stack.vec3Example).combine(stack.asdf).as('mat2')
            .add(stack.mat2Example),
    }))
    .code);

