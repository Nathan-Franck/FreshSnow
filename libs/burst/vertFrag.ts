import { mapObject } from '../utils';
import { CodeBlock, MathExpr, MathTypes } from './codeBlock';

export class VertFrag<
    Attributes extends Record<string, MathTypes>,
    Uniforms extends Record<string, MathTypes>,
    Returns extends MathTypes,
>{
    code: string;
    constructor(
        attributes: Attributes,
        uniforms: Uniforms,
        declareBody: (body: CodeBlock<ExprRecord<Attributes> & ExprRecord<Uniforms>>) =>
            CodeBlock<{ returns: MathExpr<Returns> }>
    ) {
        const scope: ExprRecord<Attributes> & ExprRecord<Uniforms> = {
            ...mapObject(attributes, (value, key) => new Expr(value, key as string)) as ExprRecord<Attributes>,
            ...mapObject(uniforms, (value, key) => new Expr(value, key as string)) as ExprRecord<Uniforms>,
        };
        const body = declareBody(new CodeBlock(scope, ''));
        const attributeCode = Object.entries(attributes).map(([name, type]) => `attribute ${type} ${name}`).join(';\n');
        const uniformCode = Object.entries(uniforms).map(([name, type]) => `uniform ${type} ${name}`).join(';\n');
        this.code = `${attributeCode
            }\n${uniformCode
            }\nvoid main(){${body.code
            }\n\treturn ${body.scope.returns.code};\n}`;
    }
}

type ExprRecord<T extends Record<string, MathTypes>> = { [key in keyof T]: MathExpr<T[key]> };

// Living example.

console.log(new VertFrag({ a: 'float', b: 'float' }, { c: 'float' }, body => body
    .define($ => ({
        returns: $.a.combine($.b).as('vec2')
    })))
    .code);