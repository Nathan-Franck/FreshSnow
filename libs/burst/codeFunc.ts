import { fromEntries, mapObject, toEntries } from "../utils";
import { CodeBlock, MathExpr, MathTypes } from "./codeBlock";

export class CodeFunc<Args extends Record<string, MathTypes>, Returns extends MathTypes>{
    code: string;
    constructor(
        args: Args,
        
        vert: (body: CodeBlock<{ [key in keyof Args]: MathExpr<Args[key]> }>) => CodeBlock<{ returns: MathExpr<Returns> }>
    ) {
        const scope = mapObject(args, (value, key) => new Expr(value, key as string)) as { [key in keyof Args]: MathExpr<Args[key]> };
        const body = declareBody(new CodeBlock(scope, ""));
        this.code = `void main(${
            Object.entries(args).map(([name, type]) => `${type} ${name}`).join(', ')
        }){${
            body.code
        }\n\treturn ${body.scope.returns.code};\n}`;
    }
}

// Living example.

console.log(new CodeFunc({ a: 'float', b: 'float' }, body => body
    .define($ => ({
        returns: $.a.combine($.b).as("vec2")
    })))
    .code);







