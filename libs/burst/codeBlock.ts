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
export type Types = keyof typeof typeBlueprints;

export type ValidMethods = {
    float: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2'
    | "mod" | "min" | "max" | "pow" | "lessThan" | "lessThanEqual" | "greaterThan" | "greaterThanEqual" | "equal",
    vec2: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2'
    | "mod" | "min" | "max" | "pow" | "lessThan" | "lessThanEqual" | "greaterThan" | "greaterThanEqual" | "equal",
    vec3: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2'
    | 'cross' | "mod" | "min" | "max" | "pow" | "lessThan" | "lessThanEqual" | "greaterThan" | "greaterThanEqual" | "equal",
    vec4: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2',
    mat2: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'mix' | 'step' | 'smoothstep' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2' | "matrixCompMult",
    mat3: 'add' | 'sub' | 'mul' | 'div' | 'neg' | "matrixCompMult",
    mat4: 'add' | 'sub' | 'mul' | 'div' | 'neg' | "matrixCompMult",
};

function ClassEG() {
    this.thinger = function() {
        return 1;
    }
    this.a = 37;
}

export class ExprBuilderAST<T extends Types> {
    constructor(public type: T, public ast: any) { }
    /** https://thebookofshaders.com/glossary/?search=add */
    add(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'add', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=sub */
    sub(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'sub', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=mul */
    mul(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'mul', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=div */
    div(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'div', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=neg */
    neg(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'neg', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=dot */
    dot(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'dot', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=mix */
    mix(other: ExprAST<T>, amount: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'mix', props: [this.ast, other.ast, amount.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=step */
    step(edge: ExprAST<T>, x: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'step', props: [edge.ast, x.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=smoothstep */
    smoothstep(edge0: ExprAST<T>, edge1: ExprAST<T>, x: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'smoothstep', props: [edge0.ast, edge1.ast, x.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=length */
    length(): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'length', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=distance */
    distance(other: ExprAST<T>): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'distance', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=normalize */
    normalize(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'normalize', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=faceforward */
    faceforward(N: ExprAST<T>, I: ExprAST<T>, Nref: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'faceforward', props: [N.ast, I.ast, Nref.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=reflect */
    reflect(I: ExprAST<T>, N: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'reflect', props: [I.ast, N.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=refract */
    refract(I: ExprAST<T>, N: ExprAST<T>, eta: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'refract', props: [I.ast, N.ast, eta.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=abs */
    abs(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'abs', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=sign */
    sign(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'sign', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=floor */
    floor(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'floor', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=ceil */
    ceil(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'ceil', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=fract */
    fract(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'fract', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=mod */
    mod(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'mod', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=min */
    min(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'min', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=max */
    max(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'max', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=pow */
    pow(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'pow', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=exp */
    exp(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'exp', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=log */
    log(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'log', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=exp2 */
    exp2(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'exp2', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=log2 */
    log2(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'log2', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=sqrt */
    sqrt(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'sqrt', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=inversesqrt */
    inversesqrt(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'inversesqrt', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=cross */
    cross(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'cross', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=matrixCompMult */
    matrixCompMult(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'matrixCompMult', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=lessThan */
    lessThan(other: ExprAST<T>): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'lessThan', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=lessThanEqual */
    lessThanEqual(other: ExprAST<T>): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'lessThanEqual', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=greaterThan */
    greaterThan(other: ExprAST<T>): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'greaterThan', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=greaterThanEqual */
    greaterThanEqual(other: ExprAST<T>): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'greaterThanEqual', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=equal */
    equal(other: ExprAST<T>): ExprAST<'float'> {
        return new ExprBuilderAST('float', { func: 'equal', props: [this.ast, other.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=notEqual */
    sin(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'sin', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=cos */
    cos(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'cos', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=tan */
    tan(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'tan', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=asin */
    asin(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'asin', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=acos */
    acos(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'acos', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=atan */
    atan(): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'atan', props: [this.ast] });
    }
    /** https://thebookofshaders.com/glossary/?search=atan2 */
    atan2(other: ExprAST<T>): ExprAST<T> {
        return new ExprBuilderAST(this.type, { func: 'atan2', props: [this.ast, other.ast] });
    }
    combine<U extends Types>(other: ExprAST<U>) {
        return new Combiner(typeBlueprints[this.type], this.ast).combine(other);
    }
    aggregate<U>(
        elements: readonly U[],
        func: (previous: ExprAST<T>, elem: U, index: number) => ExprAST<T>
    ): ExprAST<T> {
        var statement = this as ExprAST<T>;
        for (let i = 0; i < elements.length; i++) {
            statement = func(statement, elements[i], i);
        }
        return statement;
    }
}

export type ExprAST<T extends Types> = Pick<ExprBuilderAST<T>, ValidMethods[T] | 'combine' | 'aggregate' | 'ast' | 'type'>;
export type TestForCoverage = Exclude<keyof ExprBuilderAST<'vec3'>, ValidMethods['vec3'] | 'combine' | 'aggregate' | 'ast' | 'type'>;

class Combiner<Blueprint extends readonly number[]> {
    constructor(private blueprint: Blueprint, public ast: any) { }
    combine<U extends Types>(other: ExprAST<U>) {
        return new Combiner(<const>[...this.blueprint, ...typeBlueprints[other.type]], [...(Array.isArray(this.ast) ? this.ast : [this.ast]), other.ast]);
    }
    as<U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U): ExprAST<U> {
        return new ExprBuilderAST(type, { func: type, props: this.ast });
    }
}

namespace Block {
    export function value<T extends Types>(type: T, ...args: ConvertTuple<TypeBlueprints[T], ExprAST<'float'>>): ExprAST<T> {
        return new ExprBuilderAST(type, `${type}(${args.map(arg => arg.ast).join(', ')})`);
    }

    export function literal<T extends Types>(
        type: T,
        ...values: ConvertTuple<TypeBlueprints[T], number>
    ): ExprAST<T> {
        if (values.length == 1) {
            return new ExprBuilderAST(type, numberToFloatLiteral(values[0]));
        }
        else {
            return new ExprBuilderAST(type, `${type}(${values.map(value => numberToFloatLiteral(value)).join(', ')})`);
        }
    }

    function numberToFloatLiteral(value: number) {
        var string = value.toString();
        if (string.indexOf('.') == -1) {
            string += '.0';
        }
        return string;
    }
}
export class CodeBlock<Scope extends Record<string, any> = {}> {
    constructor(public scope: Scope = {} as Scope, public code: string = '') { }
    define<T extends Record<string, { [key in Types]: ExprAST<key> }[Types]>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): CodeBlock<Scope & T> {
        const statements = func(this.scope);
        const entries = toEntries(statements);
        const newScope = <const>{
            ...this.scope,
            ...fromEntries(entries.map(([key, value]) =>
                [key, new ExprBuilderAST(value.type, key as string)]))
        };
        const newCode = entries.reduce((code, [name, statement]) => {
            return `${code}\n\t${statement.type} ${name as any} = ${statement.ast};`;
        }, this.code);
        return new CodeBlock(newScope as any, newCode) as any;
    }
}

export function test() {
    // Living example.

    const floatConstants = {
        onePointFive: 1.5,
        two: 2.0,
    };

    const searchDirections: [number, number][] = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    console.log(new CodeBlock()
        .define(_ => mapObject(floatConstants, value => Block.literal('float', value)))
        .define($ => ({
            first: $.onePointFive.add($.two),
            second: $.onePointFive.sub($.two),
        }))
        .define($ => ({
            lotsaMaths: $.second.add($.second).mul($.onePointFive).neg(),
        }))
        .define($ => ({
            aggregationExample: Block.literal('vec2', 0, 0)
                .aggregate(searchDirections, (previous, direction) =>
                    previous.mul(Block.literal('vec2', ...direction))),
            vec3Example: Block.value('vec3', $.first, $.second, Block.literal('float', 0)),
            mat2Example: Block.value('mat2', $.first, $.second, $.onePointFive, $.lotsaMaths),
        }))
        .define($ => ({
            result: $.aggregationExample.combine($.first).as('vec3')
                .add($.vec3Example).combine($.onePointFive).as('mat2')
                .add($.mat2Example),
        }))
        .code);
}