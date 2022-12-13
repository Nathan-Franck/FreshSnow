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

type ExprType<T extends Types> = { type: T };

const mathOps = <T extends Types>(type: T) => <const>{
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
type MathOpToFunc<T extends Types, mathOp extends keyof ReturnType<typeof mathOps<T>>> = (...args: Parameters<ReturnType<typeof mathOps<T>>[mathOp]["method"]>) =>
    Expr<ReturnType<ReturnType<typeof mathOps<T>>[mathOp]["method"]>>;
type ExprExtensionMethods<T extends Types> = {
    ast: any,
    type: T,
    combine: Combiner<TypeBlueprints[T]>["combine"],
    aggregate: <U>(elements: readonly U[], func: (previous: Expr<T>, elem: U, index: number) => any) => Expr<T>
};
type ExprValidOps<T extends Types> = Pick<{ [mathOp in keyof ReturnType<typeof mathOps<T>>]: MathOpToFunc<T, mathOp> }, ValidExpr[T]>;

export type Expr<T extends Types> =
    & ExprValidOps<T>
    & ExprExtensionMethods<T>;

export function expr<T extends Types>(type: T, ast: AST): Expr<T> {
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
    const mathOpsForType = mathOps(type);
    const validOps: ExprValidOps<T> = fromEntries(toKeys(mathOpsForType)
        .map(key => (
            [key, (...args: Expr<any>[]) => {
                const op = mathOpsForType[key];
                /** @ts-ignore */
                const returnType = op.method();
                const newAst =
                    'dyadicSymbol' in op ? { op: op.dyadicSymbol, left: ast, right: args[0].ast }
                        : 'monadicSymbol' in op ? { op: op.monadicSymbol, inner: ast }
                            : { op: key, args: [ast, ...args.map(a => a.ast)] };
                return expr(returnType, newAst);
            }]))) as any;
    return {
        ...validOps,
        ...extensionMethods,
    };
}

type AST = { op: string, args: AST[] } | { op: string, inner: AST } | { op: string, left: AST, right: AST } | AST[] | string;

type Combiner<Blueprint extends readonly number[]> = {
    combine: <U extends Types>(other: Expr<U>) => Combiner<readonly [...Blueprint, ...TypeBlueprints[U]]>,
    as: <U extends keyof { [key in Types as TypeBlueprints[key] extends Blueprint ? key : never]: true }>(type: U) => Expr<U>;
};
function combiner<Blueprint extends readonly number[]>(blueprint: Blueprint, ast: AST): Combiner<Blueprint> {
    return {
        combine: (other) => combiner(<const>[...blueprint, ...typeBlueprints[other.type]], [...(Array.isArray(ast) ? ast : [ast]), other.ast]),
        as: (type) => expr(type, { op: type, args: Array.isArray(ast) ? ast : [ast] }),
    };
}

type CodeBlock<Scope extends Record<string, any> = {}> = {
    scope: Scope;
    ast: AST;
    define<T extends Record<string, { [key in Types]: Expr<key> }[Types]>>(
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
                    [key, expr(value.type, key as any as AST)]))
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

function value<T extends Types>(type: T, ...values: [number | Expr<'float'>] | ConvertTuple<TypeBlueprints[T], number | Expr<'float'>>) {
    return expr(type, { op: type, args: values.map(value => typeof value == 'number' ? numberToFloatLiteral(value) : value.ast) });
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

    const block = codeblock()
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