


import { debug } from "console";
import { fromEntries, toEntries } from "../utils";

type Types = "float" | "vec2" | "vec3" | "vec4" | "mat2" | "mat3" | "mat4";
type ScopeDeclaration<T extends string> = `${T} ${string}`;
type Parameter = `${Types} ${string}`;

class Statement<T extends Types> {
    constructor(private type: T, public code: string) {}
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
}

// Imperative block of shader code, support for float, vec2, vec3, vec4, mat2, mat3, mat4
class ImperiativeBlock<Scope> {
    constructor(public code: string, public scope: Scope) { }

    // Same as before but includes a legal statement that draws from the scope of the block.
    initializeVariables<T extends { [key: string]: Types }>(variables: T, statement: (scope: Scope) => Statement<T[keyof T]>) {
        const entries = toEntries(variables);
        const scopeAdditions = fromEntries(entries.map(([name, type]) => ([name, new Statement(type, name as any)])));
        const newScope = { ...this.scope, ...scopeAdditions };
        const newCode = entries.reduce((code, [name, type]) => {
            return `${code}
            ${type} ${name as any} = ${statement(newScope as any).code};`;
        }, this.code);
        return new ImperiativeBlock(newCode, newScope);
    }
}

// Test out the imperative block
console.log(new ImperiativeBlock('', {})
    .initializeVariables({ 'c': 'float' }, _ => new Statement('float', '1.0'))
    .initializeVariables({ 'a': 'float', 'b': 'float' }, scope => scope.c.add(scope.c))
    .initializeVariables({ 'd': 'float' }, ({ a, b, c}) => b.add(b).mul(c).neg())
    .code);

