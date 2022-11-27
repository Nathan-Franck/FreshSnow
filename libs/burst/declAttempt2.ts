import { fromEntries, toEntries } from "../utils";

type ScopeDeclaration<T extends string> = `${T} ${string}`;
type Parameter = `${Types} ${string}`;

class Statement<T extends Types> {
    constructor(public type: T, public code: string) {}
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
    constructor(private blueprint: Blueprint, public code: string) {}
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
    initializeVariables<T extends { [key: string]: Types }, NewScope = { [key in keyof Scope | keyof T]: key extends keyof Scope ? Scope[key] : key extends keyof T ? Statement<T[key]> : never }>(variables: T, statement: (scope: Scope) => Statement<T[keyof T]>): ImperiativeBlock<NewScope> {
        const entries = toEntries(variables);
        const scopeAdditions = fromEntries(entries.map(([name, type]) => ([name, new Statement(type, name as any)])));
        const newScope = <const>{ ...this.scope, ...scopeAdditions };
        const newCode = entries.reduce((code, [name, type]) => {
            return `${code}
            ${type} ${name as any} = ${statement(newScope as any).code};`;
        }, this.code);
        return new ImperiativeBlock<NewScope>(newCode, newScope);
    }
}

// Test out the imperative block
console.log(new ImperiativeBlock('', {c: new Statement('float', '1.0')})
    // .initializeVariables({ 'c': 'float' }, _ => new Statement('float', '1.0'))
    .initializeVariables({ 'a': 'float', 'b': 'float' }, scope => scope['c'].add(scope['c']))
    .initializeVariables({ 'd': 'float' }, ({ a, b, c}) => b.add(b).mul(c).neg())
    .initializeVariables({'e': 'vec2'}, ({ a, b }) => a.combine(b).as('vec2'))
    .initializeVariables({'f': 'vec3'}, ({ a, b, c }) => a.combine(b).combine(c).as('vec3'))
    .initializeVariables({'g': 'mat2'}, ({ a, b, c, d }) => a.combine(b).combine(c).combine(d).as('mat2'))
    .code);

