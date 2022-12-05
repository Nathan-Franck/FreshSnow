import { ConvertTuple, fromEntries, mapObject, toEntries, toKeys } from '../utils';

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

const mathOps = <const>{
    add: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `(${a}) + ${b}`,
    },
    sub: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `(${a}) - ${b}`,
    },
    mul: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `(${a}) * ${b}`,
    },
    div: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `(${a}) / ${b}`,
    },
    mod: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `(${a}) % ${b}`,
    },
    neg: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types) => a,
        glslCode: (a: string) => `-(${a})`,
    },
    pow: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `pow(${a}, ${b})`,
    },
    dot: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types, b: Types) => <const>'float',
        glslCode: (a: string, b: string) => `dot(${a}, ${b})`,
    },
    cross: {
        validTypes: ['vec3'],
        returnType: (a: Types, b: Types) => <const>'vec3',
        glslCode: (a: string, b: string) => `cross(${a}, ${b})`,
    },
    min: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `min(${a}, ${b})`,
    },
    max: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `max(${a}, ${b})`,
    },
    clamp: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types, c: Types) => a,
        glslCode: (a: string, b: string, c: string) => `clamp(${a}, ${b}, ${c})`,
    },
    mix: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types, c: Types) => a,
        glslCode: (a: string, b: string, c: string) => `mix(${a}, ${b}, ${c})`,
    },
    step: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `step(${a}, ${b})`,
    },
    smoothstep: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: (a: Types, b: Types, c: Types) => a,
        glslCode: (a: string, b: string, c: string) => `smoothstep(${a}, ${b}, ${c})`,
    },
    length: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types) => <const>'float',
        glslCode: (a: string) => `length(${a})`,
    },
    distance: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types, b: Types) => <const>'float',
        glslCode: (a: string, b: string) => `distance(${a}, ${b})`,
    },
    normalize: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types) => a,
        glslCode: (a: string) => `normalize(${a})`,
    },
    faceforward: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types, b: Types, c: Types) => a,
        glslCode: (a: string, b: string, c: string) => `faceforward(${a}, ${b}, ${c})`,
    },
    reflect: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types, b: Types) => a,
        glslCode: (a: string, b: string) => `reflect(${a}, ${b})`,
    },
    refract: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: (a: Types, b: Types, c: Types) => a,
        glslCode: (a: string, b: string, c: string) => `refract(${a}, ${b}, ${c})`,
    },
};

type MathOps = typeof mathOps;

expr('mat4', { op: 'const', args: [1] }).add(1 as any as Expr<'mat4'>).length().neg();

export type Expr<T extends Types> = { [key in keyof MathOps as MathOps[key] extends { validTypes: infer VT }
    ? T extends VT[keyof VT]
    ? key
    : never
    : never]: (...args: Parameters<MathOps[key]["returnType"]> extends [any, ...infer Rest] ? ConvertTuple<Rest, Expr<T>> : never) => Expr<ReturnType<MathOps[key]["returnType"]>> }

export function expr<T extends Types>(type: T, ast: any) {
    // Get all math ops that are valid for this type
    const ops = fromEntries(toKeys(mathOps)
        .map(op => ([op, (...args: any[]) => expr(mathOps[op].returnType(type, ...args.map(a => a.type)), {
            op,
            args: [type, ...args.map(a => a.ast)],
        })]))) as any as Expr<T>;

    return ops;//{
    //     ...ops,
    //     type,
    //     ast,
    // };

    // combine<U extends Types>(other: Expr<U>) {
    //     return new Combiner(typeBlueprints[this.type], this.code).combine(other);
    // }
    // aggregate<U>(
    //     elements: readonly U[],
    //     func: (previous: Expr<T>, elem: U, index: number) => Expr<T>
    // ): Expr<T> {
    //     var statement = this as Expr<T>;
    //     for (let i = 0; i < elements.length; i++) {
    //         statement = func(statement, elements[i], i);
    //     }
    //     return statement;
    // }
}

// class Combiner<Blueprint extends readonly number[]> {
//     constructor(private blueprint: Blueprint, public code: string) { }
//     combine<U extends Types>(other: Expr<U>) {
//         return new Combiner(<const>[...this.blueprint, ...typeBlueprints[other.type]], `${this.code}, ${other.code}`);
//     }
//     as<U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U): Expr<U> {
//         return new Expr(type, `${type}(${this.code})`);
//     }
// }

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

export class CodeBlock<Scope extends Record<string, any> = {}> {
    constructor(public scope: Scope = {} as Scope, public code: string = '') { }
    define<T extends Record<string, Expr<Types>>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): CodeBlock<Scope & T> {
        const statements = func(this.scope);
        const entries = toEntries(statements);
        const newScope = <const>{
            ...this.scope,
            ...fromEntries(entries.map(([key, value]) =>
                [key, new Expr(value.type, key as string)]))
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
}