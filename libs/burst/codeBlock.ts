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
        returnType: 'T',
        glslCode: (a: string, b: string) => `(${a}) + ${b}`,
    },
    sub: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `(${a}) - ${b}`,
    },
    /** @deprecated hi there! */
    mul: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `(${a}) * ${b}`,
    },
    div: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `(${a}) / ${b}`,
    },
    mod: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `(${a}) % ${b}`,
    },
    neg: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string) => `-(${a})`,
    },
    pow: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `pow(${a}, ${b})`,
    },
    dot: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'float',
        glslCode: (a: string, b: string) => `dot(${a}, ${b})`,
    },
    cross: {
        validTypes: ['vec3'],
        returnType: 'vec3',
        glslCode: (a: string, b: string) => `cross(${a}, ${b})`,
    },
    min: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `min(${a}, ${b})`,
    },
    max: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `max(${a}, ${b})`,
    },
    clamp: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string, c: string) => `clamp(${a}, ${b}, ${c})`,
    },
    mix: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string, c: string) => `mix(${a}, ${b}, ${c})`,
    },
    step: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `step(${a}, ${b})`,
    },
    smoothstep: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        returnType: 'T',
        glslCode: (a: string, b: string, c: string) => `smoothstep(${a}, ${b}, ${c})`,
    },
    length: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'float',
        glslCode: (a: string) => `length(${a})`,
    },
    distance: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'float',
        glslCode: (a: string, b: string) => `distance(${a}, ${b})`,
    },
    normalize: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'T',
        glslCode: (a: string) => `normalize(${a})`,
    },
    faceforward: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'T',
        glslCode: (a: string, b: string, c: string) => `faceforward(${a}, ${b}, ${c})`,
    },
    reflect: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'T',
        glslCode: (a: string, b: string) => `reflect(${a}, ${b})`,
    },
    refract: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        returnType: 'T',
        glslCode: (a: string, b: string, c: string) => `refract(${a}, ${b}, ${c})`,
    },
};

type ValidTypes = { [T in MathOps[keyof MathOps]["validTypes"][number]]: keyof {
    [key in keyof MathOps as MathOps[key] extends { validTypes: infer VT } ? T extends VT[keyof VT] ? key : never : never]: true
} };
type MathOps = typeof mathOps;
type CastIfGeneric<TypesOrGeneric extends Types | 'T', T> = TypesOrGeneric extends 'T' ? T : TypesOrGeneric;
type MathOpToFunc<T extends Types, mathOp extends keyof MathOps> = (...args: Parameters<MathOps[mathOp]["glslCode"]> extends [any, ...infer Rest]
    ? ConvertTuple<Rest, Expr<T>>
    : never) =>
    Expr<CastIfGeneric<MathOps[mathOp]["returnType"], T>>;
type ExprExtensionMethods<T extends Types> = {
    ast: any,
    type: T,
    combine: Combiner<TypeBlueprints[T]>["combine"],
    aggregate: <U>(elements: readonly U[], func: (previous: Expr<T>, elem: U, index: number) => any) => Expr<T>
};
type ExprValidOps<T extends Types> = Pick<{ [mathOp in keyof MathOps]: MathOpToFunc<T, mathOp> }, ValidTypes[T]>;

export type Expr<T extends Types> =
    & ExprValidOps<T>
    & ExprExtensionMethods<T>;

export function expr<T extends Types>(type: T, ast: any): Expr<T> {
    const extensionMethods: ExprExtensionMethods<T> = {
        type,
        ast,
        combine: function (other) {
            return combiner(typeBlueprints[type], ast).combine(other);
        },
        aggregate: function (
            elements,
            func,
        ) {
            var statement = this as Expr<T>;
            for (let i = 0; i < elements.length; i++) {
                statement = func(statement, elements[i], i);
            }
            return statement;
        },
    };
    const validOps: ExprValidOps<T> = fromEntries(toKeys(mathOps)
        .map(op => (
            [op, (...args: Expr<any>[]) => {
                const returnType = mathOps[op].returnType;
                return expr(
                    returnType == 'T' ? type : returnType,
                    {
                        op,
                        args: [ast, ...args.map(a => a.ast)],
                    }
                );
            }]))) as any;
    return {
        ...validOps,
        ...extensionMethods,
    };
}

type Combiner<Blueprint extends readonly number[]> = {
    combine: <U extends Types>(other: Expr<U>) => Combiner<readonly [...Blueprint, ...TypeBlueprints[U]]>,
    as: <U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U) => Expr<U>;
};
function combiner<Blueprint extends readonly number[]>(blueprint: Blueprint, ast: any): Combiner<Blueprint> {
    return {
        combine: (other) => combiner(<const>[...blueprint, ...typeBlueprints[other.type]], [...(Array.isArray(ast) ? ast : [ast]), other.ast]),
        as: (type) => expr(type, { op: type, args: ast }),
    };
}

type CodeBlock<Scope extends Record<string, any> = {}> = {
    scope: Scope;
    code: string;
    define<T extends Record<string, { [key in Types]: Expr<key> }[Types]>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): CodeBlock<Scope & T>;
}
function codeblock<Scope extends Record<string, any> = {}>(scope: Scope = {} as Scope, code: string = ''): CodeBlock<Scope> {
    return {
        scope,
        code,
        define: function (func) {
            const statements = func(this.scope);
            const entries = toEntries(statements);
            const newScope = <const>{
                ...this.scope,
                ...fromEntries(entries.map(([key, value]) =>
                    [key, expr(value.type, key as string)]))
            };
            const newCode = entries.reduce((code, [name, statement]) => {
                return `${code}\n\t${statement.type} ${name as any} = ${evalExpr(statement.ast)};`;
            }, this.code);
            return codeblock(newScope as any, newCode) as any;
        }
    };
}

export function evalExpr(ast: any) {
    /*@ts-ignore*/
    const op = mathOps[ast.op];
    if (ast.op == null || op == null) return ast.code;
    /*@ts-ignore*/
    return op.glslCode(...ast.args.map(evalExpr));
}

function numberToFloatLiteral(value: number) {
    var string = value.toString();
    if (string.indexOf('.') == -1) {
        string += '.0';
    }
    return string;
}

function constant<T extends Types>(type: T, ...values: ConvertTuple<TypeBlueprints[T], number>) {
    if (values.length == 1) {
        return expr(type, numberToFloatLiteral(values[0]));
    }
    else {
        return expr(type, `${type}(${values.map(value => numberToFloatLiteral(value)).join(', ')})`);
    }
}

function value<T extends Types>(type: T, ...args: ConvertTuple<TypeBlueprints[T], Expr<'float'>>) {
    return expr(type, { op: type, args: args.map(arg => arg.ast) });
}


// Living example.
export function test() {

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
    console.log(codeblock()
        .define(_ => mapObject(floatConstants, value => constant('float', value)))
        .define($ => ({
            first: $.onePointFive.add($.two),
            second: $.onePointFive.sub($.two),
        }))
        .define($ => ({
            lotsaMaths: $.second.add($.second).mul($.onePointFive).neg(),
        }))
        .define($ => ({
            aggregationExample: constant('vec2', 0, 0)
                .aggregate(searchDirections, (previous, direction) =>
                    previous.mul(constant('vec2', ...direction))),
            vec3Example: value('vec3', $.first, $.second, constant('float', 0)),
            mat2Example: value('mat2', $.first, $.second, $.onePointFive, $.lotsaMaths),
        }))
        .define($ => ({
            result: $.vec3Example.combine($.second).as('vec4').length(),
        }))
        .code);
}

const exprExample = expr('mat4', { code: 'a' }).add(expr('mat4', { code: 'b' })).length().mul(expr('float', { code: 'c' }));
console.log(JSON.stringify(exprExample.ast));
console.log(evalExpr(exprExample.ast));