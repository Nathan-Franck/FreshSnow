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

export class ExprBuilder<T extends Types> {
    constructor(public type: T, public code: string) { }
    /** https://thebookofshaders.com/glossary/?search=add */
    add(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `(${this.code}) + ${other.code}`);
    }
    /** https://thebookofshaders.com/glossary/?search=sub */
    sub(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `(${this.code}) - ${other.code}`);
    }
    /** https://thebookofshaders.com/glossary/?search=mul */
    mul(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `(${this.code}) * ${other.code}`);
    }
    /** https://thebookofshaders.com/glossary/?search=div */
    div(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `(${this.code}) / ${other.code}`);
    }
    /** https://thebookofshaders.com/glossary/?search=neg */
    neg(): Expr<T> {
        return new ExprBuilder(this.type, `-(${this.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=mod */
    mod(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `mod(${this.code}, ${other.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=pow */
    pow(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `pow(${this.code}, ${other.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=dot */
    dot(other: Expr<T>): Expr<'float'> {
        return new ExprBuilder('float', `dot(${this.code}, ${other.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=cross */
    cross(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `cross(${this.code}, ${other.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=min */
    min(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `min(${this.code}, ${other.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=max */
    max(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `max(${this.code}, ${other.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=clamp */
    clamp(min: Expr<T>, max: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `clamp(${this.code}, ${min.code}, ${max.code})`);
    }
    /** https://thebookofshaders.com/glossary/?search=mix */
    mix(other: Expr<T>, factor: Expr<'float'>): Expr<T> {
        return new ExprBuilder(this.type, `mix(${this.code}, ${other.code}, ${factor.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=step */
    step(edge: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `step(${edge.code}, ${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=smoothstep */
    smoothstep(edge0: Expr<T>, edge1: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `smoothstep(${edge0.code}, ${edge1.code}, ${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=length */
    length(): Expr<'float'> {
        return new ExprBuilder('float', `length(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=distance */
    distance(other: Expr<T>): Expr<'float'> {
        return new ExprBuilder('float', `distance(${this.code}, ${other.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=normalize */
    normalize(): Expr<T> {
        return new ExprBuilder(this.type, `normalize(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=faceforward */
    faceforward(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `faceforward(${this.code}, ${other.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=reflect */
    reflect(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `reflect(${this.code}, ${other.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=refract */
    refract(other: Expr<T>, eta: Expr<'float'>): Expr<T> {
        return new ExprBuilder(this.type, `refract(${this.code}, ${other.code}, ${eta.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=abs */
    abs(): Expr<T> {
        return new ExprBuilder(this.type, `abs(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=sign */
    sign(): Expr<T> {
        return new ExprBuilder(this.type, `sign(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=floor */
    floor(): Expr<T> {
        return new ExprBuilder(this.type, `floor(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=ceil */
    ceil(): Expr<T> {
        return new ExprBuilder(this.type, `ceil(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=fract */
    fract(): Expr<T> {
        return new ExprBuilder(this.type, `fract(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=sqrt */
    sqrt(): Expr<T> {
        return new ExprBuilder(this.type, `sqrt(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=inversesqrt */
    inversesqrt(): Expr<T> {
        return new ExprBuilder(this.type, `inversesqrt(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=exp */
    exp(): Expr<T> {
        return new ExprBuilder(this.type, `exp(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=log */
    log(): Expr<T> {
        return new ExprBuilder(this.type, `log(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=exp2 */
    exp2(): Expr<T> {
        return new ExprBuilder(this.type, `exp2(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=log2 */
    log2(): Expr<T> {
        return new ExprBuilder(this.type, `log2(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=sin */
    sin(): Expr<T> {
        return new ExprBuilder(this.type, `sin(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=cos */
    cos(): Expr<T> {
        return new ExprBuilder(this.type, `cos(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=tan */
    tan(): Expr<T> {
        return new ExprBuilder(this.type, `tan(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=asin */
    asin(): Expr<T> {
        return new ExprBuilder(this.type, `asin(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=acos */
    acos(): Expr<T> {
        return new ExprBuilder(this.type, `acos(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=atan */
    atan(): Expr<T> {
        return new ExprBuilder(this.type, `atan(${this.code})`);
    }
    
    /** https://thebookofshaders.com/glossary/?search=atan2 */
    atan2(other: Expr<T>): Expr<T> {
        return new ExprBuilder(this.type, `atan(${this.code}, ${other.code})`);
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
export type ValidMethods = {
    float: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2',
    vec2: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2',
    vec3: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2',
    vec4: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'dot' | 'mix' | 'step' | 'smoothstep' | 'length' | 'distance' | 'normalize' | 'faceforward' | 'reflect' | 'refract' | 'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2',
    mat2: 'add' | 'sub' | 'mul' | 'div' | 'neg' | 'mix' | 'step' | 'smoothstep' |  'abs' | 'sign' | 'floor' | 'ceil' | 'fract' | 'sqrt' | 'inversesqrt' | 'exp' | 'log' | 'exp2' | 'log2' | 'sin' | 'cos' | 'tan' | 'asin' | 'acos' | 'atan' | 'atan2',
    mat3: 'add' | 'sub' | 'mul' | 'div' | 'neg',
    mat4: 'add' | 'sub' | 'mul' | 'div' | 'neg',
};

export type Expr<T extends Types> = Pick<ExprBuilder<T>, ValidMethods[T] | 'combine' | 'aggregate' | 'code' | 'type'>;

class Combiner<Blueprint extends readonly number[]> {
    constructor(private blueprint: Blueprint, public code: string) { }
    combine<U extends Types>(other: Expr<U>) {
        return new Combiner(<const>[...this.blueprint, ...typeBlueprints[other.type]], `${this.code}, ${other.code}`);
    }
    as<U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U): Expr<U> {
        return new ExprBuilder(type, `${type}(${this.code})`);
    }
}

namespace Block {
    export function value<T extends Types>(type: T, ...args: ConvertTuple<TypeBlueprints[T], Expr<'float'>>): Expr<T> {
        return new ExprBuilder(type, `${type}(${args.map(arg => arg.code).join(', ')})`);
    }

    export function literal<T extends Types>(
        type: T,
        ...values: ConvertTuple<TypeBlueprints[T], number>
    ): Expr<T> {
        if (values.length == 1) {
            return new ExprBuilder(type, numberToFloatLiteral(values[0]));
        }
        else {
            return new ExprBuilder(type, `${type}(${values.map(value => numberToFloatLiteral(value)).join(', ')})`);
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
    define<T extends Record<string, { [key in Types]: Expr<key> }[Types]>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): CodeBlock<Scope & T> {
        const statements = func(this.scope);
        const entries = toEntries(statements);
        const newScope = <const>{
            ...this.scope,
            ...fromEntries(entries.map(([key, value]) =>
                [key, new ExprBuilder(value.type, key as string)]))
        };
        const newCode = entries.reduce((code, [name, statement]) => {
            return `${code}\n\t${statement.type} ${name as any} = ${statement.code};`;
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