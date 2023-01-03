import { ConvertTuple, fromEntries, mapObject, toEntries, toKeys, TuplifyUnion } from '../utils';

const mathTypeBlueprints = <const>{
    float: [0],
    vec2: [0, 0],
    vec3: [0, 0, 0],
    mat2: [0, 0, 0, 0],
    vec4: [0, 0, 0, 0],
    mat3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    mat4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};
type MathTypeBlueprints = typeof mathTypeBlueprints;
export type MathTypes = keyof typeof mathTypeBlueprints;

type ExprType<T extends string> = { type: T, ast: AST };

const mathOps = <T extends MathTypes>(type: T) => <const>{
    add: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        dyadicSymbol: '+',
        method: (other: ExprType<T>) => type,
    },
    sub: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        dyadicSymbol: '-',
        method: (other: ExprType<T>) => type,
    },
    mult: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        dyadicSymbol: '*',
        method: (other: ExprType<T>) => type,
    },
    div: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        dyadicSymbol: '/',
        method: (other: ExprType<T>) => type,
    },
    mod: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        dyadicSymbol: '%',
        method: (other: ExprType<T>) => type,
    },
    neg: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        monadicSymbol: '-',
        method: () => type,
    },
    /** https://thebookofshaders.com/glossary/?search=pow */
    pow: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (other: string) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=dot */
    dot: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: (other: ExprType<T>) => <const>'float',
    },
    /** https://thebookofshaders.com/glossary/?search=cross */
    cross: {
        validTypes: ['vec3'],
        method: (other: ExprType<T>) => <const>'vec3',
    },
    /** https://thebookofshaders.com/glossary/?search=min */
    min: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (other: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=max */
    max: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (other: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=clamp */
    clamp: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (minVal: ExprType<T>, maxVal: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=mix */
    mix: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (other: ExprType<T>, interpolation: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=step */
    step: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (interpolation: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=smoothstep */
    smoothstep: {
        validTypes: ['float', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4'],
        method: (other: ExprType<T>, interpolation: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=length */
    length: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: () => <const>'float',
    },
    /** https://thebookofshaders.com/glossary/?search=distance */
    distance: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: (other: ExprType<T>) => <const>'float',
    },
    /** https://thebookofshaders.com/glossary/?search=normalize */
    normalize: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: () => type,
    },
    /** https://thebookofshaders.com/glossary/?search=faceforward */
    faceforward: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: (incident: ExprType<T>, reference: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=reflect */
    reflect: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: (normal: ExprType<T>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=refract */
    refract: {
        validTypes: ['vec2', 'vec3', 'vec4'],
        method: (normal: ExprType<T>, eta: ExprType<'float'>) => type,
    },
    /** https://thebookofshaders.com/glossary/?search=matrixCompMult */
    matrixCompMult: {
        validTypes: ['mat2', 'mat3', 'mat4'],
        method: (other: ExprType<T>) => type,
    },
};

type MathOpsTypes = 'float' | 'vec2' | 'vec3' | 'vec4' | 'mat2' | 'mat3' | 'mat4';
type ValidExpr = { [T in MathOpsTypes]: keyof {
    [key in keyof ReturnType<typeof mathOps<T>> as T extends ReturnType<typeof mathOps<T>>[key]['validTypes'][number] ? key : never]: true
} };
type MathOpToFunc<T extends MathTypes, mathOp extends keyof ReturnType<typeof mathOps<T>>> = (...args: Parameters<ReturnType<typeof mathOps<T>>[mathOp]["method"]>) =>
    MathExpr<ReturnType<ReturnType<typeof mathOps<T>>[mathOp]["method"]>>;
type ExprExtensionMethods<T extends MathTypes> = {
    combine: Combiner<MathTypeBlueprints[T]>["combine"],
    aggregate: <U>(elements: readonly U[], func: (previous: MathExpr<T>, elem: U, index: number) => any) => MathExpr<T>
};
type ExprValidOps<T extends MathTypes> = Pick<{ [mathOp in keyof ReturnType<typeof mathOps<T>>]: MathOpToFunc<T, mathOp> }, ValidExpr[T]>;

export type MathExpr<T extends MathTypes> =
    & ExprValidOps<T>
    & ExprExtensionMethods<T>;

const mathExprs: { [T in MathTypes]: MathExpr<T> } = mapObject(mathTypeBlueprints, (_, type) => mathOps(type)) as any;

type AST = { op: string, args: AST[] } | { op: string, inner: AST } | { op: string, left: AST, right: AST } | AST[] | string;

type Combiner<Blueprint extends readonly number[]> = {
    combine: <U extends MathTypes>(other: MathExpr<U>) => Combiner<readonly [...Blueprint, ...MathTypeBlueprints[U]]>,
    as: <U extends keyof { [key in MathTypes as MathTypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U) => MathExpr<U>;
};

type CodeBlock<Scope extends Record<string, any> = {}> = {
    scope: Scope;
    ast: AST;
    define<T extends Record<string, { ast: AST, type: string }>>(
        func: (scope: { [key in keyof Scope]: Scope[key] }) => T
    ): CodeBlock<Scope & T>;
}
function codeblock<Scope extends Record<string, any> = {}>(scope: Scope = {} as Scope, ast: AST & Array<any> = []): CodeBlock<Scope> {
    return {
        scope,
        ast,
        define: function (func) {
            const statements = func(this.scope);
            const entries = toEntries(statements);
            const newScope = <const>{
                ...this.scope,
                ...fromEntries(entries.map(([key, value]) =>
                    [key, { ...value, ast: key }]))
            };
            const newAst = [...ast, ...entries.map(([key, value]) => ({ op: '=', left: `${value.type} ${key as string}`, right: value.ast }))];
            return codeblock(newScope as any, newAst) as any;
        }
    };
}

export function evalExpr(ast: AST): string {
    if (Array.isArray(ast)) {
        return ast.map(evalExpr).join(";\n");
    }
    else if (typeof ast == 'string') {
        return ast;
    }
    else if ('op' in ast) {
        if ('args' in ast) {
            return `${ast.op}(${ast.args.map(evalExpr).join(", ")})`;
        }
        else if ('inner' in ast) {
            return typeof ast.inner == 'string'
                ? `${ast.op}${evalExpr(ast.inner)}`
                : `${ast.op}(${evalExpr(ast.inner)})`;
        }
        else if ('left' in ast) {
            return typeof ast.left == 'string'
                ? `${evalExpr(ast.left)} ${ast.op} ${evalExpr(ast.right)}`
                : `(${evalExpr(ast.left)}) ${ast.op} ${evalExpr(ast.right)}`;
        }
    }
    return '';
}

function numberToFloatLiteral(value: number) {
    var string = value.toString();
    if (string.indexOf('.') == -1) {
        string += '.0';
    }
    return string;
}

type Input = {
    first: { a: true, b: true },
    second: { c: true, d: true },
}

function module<Exprs extends Record<string, any>>(exprs: Exprs) {
    function withExprs<MoreExprs extends Record<string, any>>(moreExprs: MoreExprs) {
        return module({ ...exprs, ...moreExprs });
    }
    function withBlueprints<BP extends Record<keyof Exprs, ReadonlyArray<keyof Exprs> | null>>(blueprints: BP) {

        type ConvertTuple<T> = T extends readonly [infer A, ...infer B]
            ? A extends string
            ? A extends "float"
            ? readonly [number | ExprType<A>, ...ConvertTuple<B>]
            : readonly [ExprType<A>, ...ConvertTuple<B>]
            : [] : [];

        function value<T extends keyof Exprs & string>(type: T, ...values: ConvertTuple<BP[T]>) {
            return expr(type, { op: type, args: values.map(value => typeof value == 'number' ? numberToFloatLiteral(value) : value.ast) });
        }

        function expr<T extends keyof Exprs & string>(type: T, ast: AST): Exprs[T] & ExprType<T> {
            return { ...fromEntries(toKeys(allCallables).map(key => type, ast };
        }

        return {
            value,
        }
    }
    return { withExprs, withBlueprints };
}

const shaderExprs = {
    sampler2D: {
        tex2D: (coord: ExprType<'vec2'>) => 'vec4',
    },
};

export const math = module(mathExprs)
    .withExprs(shaderExprs)
    .withBlueprints(<const>{
        sampler2D: null,
        float: ['float'],
        vec2: ['float', 'float'],
        vec3: ['float', 'float', 'float'],
        mat2: ['float', 'float', 'float', 'float'],
        vec4: ['float', 'float', 'float', 'float'],
        mat3: ['float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float'],
        mat4: ['float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float'],
    });

const resultVec4 = math.value('float', 1.5)
    .combine(math.value('vec3', 1.5, 1.5, 1.5)).as('vec4')
math.value('mat3', math.value('float', 1.5), 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5)
    .div(math.value('mat3', 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5));
const result = math.value('sampler2D')
    .tex2D(math.value('vec2', 1.5, 1.5));

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

    function isMathType(x: any): x is MathTypes {
        return x in mathTypeBlueprints;
    }

    function declareSingle<T extends any>(type: T, name: string) {
        if (isMathType(type)) {
            return { type, ast: { op: name, args: [] } };
        }
    }

    function declare<T extends Record<string, string>>(variables: T): { [key in keyof T]: ReturnType<typeof declareSingle<key>> } {
        // Take a record of variable names and types, and return a record of variable names and expressions.
        return fromEntries(toEntries(variables).map(([key, type]) => [key, declareSingle])) as any;
    }

    const testDecl = declare(<const>{ testSampler: "sampler2D", b: "vec2" });

    const block = codeblock(testDecl)
        .define(_ => mapObject(floatConstants, x => value('float', x)))
        .define($ => ({
            first: $.onePointFive.add($.two),
            second: $.onePointFive.sub($.two),
        }))
        .define($ => ({
            lotsaMaths: $.second.add($.second).mult($.onePointFive).neg(),
        }))
        .define($ => ({
            aggregationExample: value('vec2', 0, 0)
                .aggregate(searchDirections, (previous, direction) =>
                    previous.mult(value('vec2', ...direction))),
            vec3Example: value('vec3', $.first, $.second, value('float', 0)),
            vec4Example: value('vec4', $.first, $.second, $.second, value('float', 0)),
            mat2Example: value('mat2', $.first, $.second, $.onePointFive, $.lotsaMaths)
                .matrixCompMult(value('mat2', $.first, $.second, $.onePointFive, $.lotsaMaths)),
            nonExpr: { ast: <const>"hi", type: 'thinger' },
            thinger: $.testSampler.tex2D(value('vec2', 0.5, 0.5)),
        }))
        .define($ => ({
            result: $.vec3Example.combine($.second).as('vec4')
                .refract($.vec4Example, value('float', 0.5)).length(),
        }))
        .ast;

    // Console log output with pretty json
    console.log(JSON.stringify(block, null, 2));

    console.log(evalExpr(block));
}

test();