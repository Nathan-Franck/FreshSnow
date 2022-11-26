// // Example of burst-compiled declarative code
// // const vec2 = burst.decl.vector(2, "float");
// const burstable = {
//     add: (a: BurstNumber, b: BurstNumber, c: BurstNumber) => a.add(b.add(c)),
//     sub: (a: BurstNumber, b: BurstNumber) => a.sub(b),
// };

// type NumberLiteral = 



// class burst
// {
//     static compile<T>(obj: T) {
//         console.log("Compiling burstable object");
//         const result = {} as Record<
//             keyof T,
//             T[keyof T] extends (...args: any[]) => any
//                 ? (...args: Parameters<T[keyof T]>) => ReturnType<T[keyof T]>
//                 : never
//         >;
//         for (const key in obj) {
//             console.log(`Compiling burstable function ${key}`);
//             const value = obj[key];
//             console.log(typeof value);
//             if (typeof value === "function") {
//                 result[key] = burst.compileFunction(value as any);
//             }
//         }
//         return result;
//     }

//     static compileFunction<T extends (...args: any[]) => any>(func: T) {

//         console.log("Wat");
//         const funcStr = func.toString();
//         const funcBody = funcStr.substring(funcStr.indexOf("{") + 1, funcStr.lastIndexOf("}"));
//         const funcArgs = funcStr.substring(funcStr.indexOf("(") + 1, funcStr.indexOf(")")).split(",").map(x => x.trim());
//         const funcBodyBurst = funcBody.replace(/([a-zA-Z0-9_]+)\.([a-zA-Z0-9_]+)\(/g, "$1.$2Burst(");

//     }
// }

class BurstNumber
{
    constructor(public code: string) {}

    add(other: BurstNumber) {
        return new BurstNumber(`${this.code} + ${other.code}`);
    }

    sub(other: BurstNumber) {
        return new BurstNumber(`${this.code} - ${other.code}`);
    }
}


// const float2 = { x: 'f32', y: 'f32' };
// const float3 = { x: 'f32', y: 'f32', z: 'f32' };
// const float4 = { x: 'f32', y: 'f32', z: 'f32', w: 'f32' };

// const pow2 = (x: BurstableNumber) => <const>({ mul: [x, x] });

// type BurstableVector =
//     | 'float2'
//     | 'float3'
//     | 'float4'
//     | { sub: readonly [BurstableVector, BurstableVector] }
//     | { add: readonly [BurstableVector, BurstableVector] }
//     | { mul: readonly [BurstableVector, BurstableVector] }
//     | { div: readonly [BurstableVector, BurstableVector] }
//     | { dot: readonly [BurstableVector, BurstableVector] }
//     | { cross: readonly [BurstableVector, BurstableVector] }
//     | { length: readonly [BurstableVector] }
//     | { normalize: readonly [BurstableVector] }
//     | { reflect: readonly [BurstableVector, BurstableVector] }
//     | { refract: readonly [BurstableVector, BurstableVector, BurstableNumber] }

type BurstableNumber<Scope> =
    | { sub: readonly [BurstableNumber<Scope>, BurstableNumber<Scope>] }
    | { add: readonly [BurstableNumber<Scope>, BurstableNumber<Scope>] }
    | { mul: readonly [BurstableNumber<Scope>, BurstableNumber<Scope>] }
    | { div: readonly [BurstableNumber<Scope>, BurstableNumber<Scope>] }
    | { neg: readonly [BurstableNumber<Scope>] }
    | { abs: readonly [BurstableNumber<Scope>] }
    | { sqrt: readonly [BurstableNumber<Scope>] }
    | { sin: readonly [BurstableNumber<Scope>] }
    | { cos: readonly [BurstableNumber<Scope>] }
    | { tan: readonly [BurstableNumber<Scope>] }
    | { asin: readonly [BurstableNumber<Scope>] }
    | { acos: readonly [BurstableNumber<Scope>] }
    | { atan: readonly [BurstableNumber<Scope>] }
    | { atan2: readonly [BurstableNumber<Scope>, BurstableNumber<Scope>] }
    | { exp: readonly [BurstableNumber<Scope>] }
    | { log: readonly [BurstableNumber<Scope>] }
    | { log2: readonly [BurstableNumber<Scope>] }
    | { log10: readonly [BurstableNumber<Scope>] }
    | { pow: readonly [BurstableNumber<Scope>, BurstableNumber<Scope>] }
    | `argument.${string}`;

const decls = burstModule({
    add: (a: BurstableNumber


const structsDelcs = burstModule({}, {})
    .struct({
        float2: { x: 'float', y: 'float' },
        float3: { x: 'float', y: 'float', z: 'float' },
        float4: { x: 'float', y: 'float', z: 'float', w: 'float' },
    });



const functionDelcs = structsDelcs
    .function({ testReturn: [{ x: 'float' }, { x: 'scope' }] })

console.table(structsDelcs.getStructs().float2);
console.table(functionDelcs.getFunctions().testReturn);

function burstModule<Structs, Functions>(structs: Structs, functions: Functions) {
    return {
        struct: <NewStructs extends Record<string, BurstableStructSchema>>(newStructs: NewStructs) => {
            return burstModule({ ...structs, ...newStructs }, functions);
        },
        function: <NewFunctions extends Record<string, [BurstableScope, any]>>(newFunctions: NewFunctions) => {
            return burstModule<Structs, Functions & { [key in keyof NewFunctions]: [NewFunctions[key][0], ConvertScopeExpressionToPure<NewFunctions[key][0], NewFunctions[key][1]>] }>(structs, { ...functions, ...newFunctions });
        },
        getStructs: () => structs,
        getFunctions: () => functions,
    };
}

type BurstableStructSchema = Record<string, BurstableTypeSchema>;
type BurstableScope = Record<string, BurstableTypeSchema>;
type BurstableTypeSchema = keyof BurstableTypeLookup;// | `${keyof BurstableTypeLookup}[]`;
type BurstableTypeLookup = {
    'float': BurstableNumber,
    'int': BurstableNumber,
};

type BurstableFunction<Scope extends BurstableScope, Expression> = [Scope, Expression];