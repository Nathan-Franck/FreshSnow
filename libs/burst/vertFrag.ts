import { mapObject } from '../utils';
import { CodeBlock, ExprBuilder, Types } from './codeBlock';

export class VertFrag<
    Attributes extends Record<string, Types>,
    Uniforms extends Record<string, Types>,
    Returns extends Types,
>{
    code: string;
    constructor(
        attributes: Attributes,
        uniforms: Uniforms,
        declareBody: (body: CodeBlock<ExprRecord<Attributes> & ExprRecord<Uniforms>>) =>
            CodeBlock<{ returns: ExprBuilder<Returns> }>
    ) {
        const scope: ExprRecord<Attributes> & ExprRecord<Uniforms> = {
            ...mapObject(attributes, (value, key) => new ExprBuilder(value, key as string)) as ExprRecord<Attributes>,
            ...mapObject(uniforms, (value, key) => new ExprBuilder(value, key as string)) as ExprRecord<Uniforms>,
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

type ExprRecord<T extends Record<string, Types>> = { [key in keyof T]: ExprBuilder<T[key]> };

// Living example.

console.log(new VertFrag({ a: 'float', b: 'float' }, { c: 'float' }, body => body
    .define($ => ({
        returns: $.a.combine($.b).as('vec2')
    })))
    .code);