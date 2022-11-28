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
    initializeVariables<
        T extends { [key: string]: Statement<Types> },
    // NewScope = { [key in keyof Scope | keyof T]: key extends keyof Scope ? Scope[key] : key extends keyof T ? T[key] : never }
    >(func: (scope: Scope) => T): ImperiativeBlock<T & Scope> { // 
        const statements = func(this.scope);
        const entries = toEntries(statements);
        const newScope = <const>{ ...this.scope, ...statements };
        const newCode = entries.reduce((code, [name, statement]) => {
            return `${code}
            ${statement.type} ${name as any} = ${statement.code};`;
        }, this.code);
        return new ImperiativeBlock(newCode, newScope);
    }
}

const constants = {
    c: 1.0,
}

// Test out the imperative block
console.log(new ImperiativeBlock('', {})
    .initializeVariables(_ => mapObject(constants, (value, key) => new Statement('float', key)))
    .initializeVariables(scope => ({ a: scope['c'].add(scope['c']), b: scope['c'].sub(scope['c']) }))
    .initializeVariables(({ a, b, c }) => ({ d: b.add(b).mul(c).neg() }))
    .initializeVariables(({ a, b }) => ({ vec2Example: a.combine(b).as('vec2') }))
    .initializeVariables(({ a, b, c }) => ({ vec3Example: a.combine(b).combine(c).as('vec3') }))
    .initializeVariables(({ a, b, c, d }) => ({ mat2Example: a.combine(b).combine(c).combine(d).as('mat2') }))
    .code);

