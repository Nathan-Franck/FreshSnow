import { fromEntries, mapObject, toEntries } from "../utils";

type ScopeDeclaration<T extends string> = `${T} ${string}`;
type Parameter = `${Types} ${string}`;

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

const typeBlueprints = <const>{
    float: [0],
    vec2: [0, 0],
    vec3: [0, 0, 0],
    mat2: [0, 0, 0, 0],
    vec4: [0, 0, 0, 0],
    mat3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    mat4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

type tehis = TypeBlueprints['vec2'];
type thinger = keyof { [key in Types as TypeBlueprints[key] extends readonly [0, 0, 0, 0] ? key : never]: true };

type TypeBlueprints = typeof typeBlueprints;

type Types = keyof typeof typeBlueprints;

// Imperative block of shader code, support for float, vec2, vec3, vec4, mat2, mat3, mat4
class ImperiativeBlock<Scope> {
    constructor(public code: string, public scope: Scope) { }

    // Same as before but includes a legal statement that draws from the scope of the block.
    define<
        T extends { [key: string]: Statement<Types> },
    >(func: (scope: Scope) => T): ImperiativeBlock<Scope & T> { // 
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

const constants = {
    asdf: 1.0,
}

// Test out the imperative block
console.log(new ImperiativeBlock('', {})
    .define(_ => mapObject(constants, (value, key) => new Statement('float', value.toString())))
    .define(stack => ({
        a: stack.asdf.add(stack.asdf),
        b: stack.asdf.sub(stack.asdf),
    }))
    .define(stack => ({
        d: stack.b.add(stack.b).mul(stack.asdf).neg(),
    }))
    .define(stack => ({
        vec2Example: stack.a.combine(stack.b).as('vec2'),
        vec3Example: stack.a.combine(stack.b).combine(stack.asdf).as('vec3'),
        mat2Example: stack.a.combine(stack.b).combine(stack.asdf).combine(stack.d).as('mat2'),
    }))
    .define(stack => ({
        result: stack.vec2Example.combine(stack.a).as("vec3")
            .add(stack.vec3Example).combine(stack.asdf).as("mat2")
            .add(stack.mat2Example),
    }))
    .code);

