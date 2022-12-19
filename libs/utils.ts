/** Strictly typed wrapper for Object.entries */
export function toEntries<T extends Object>(obj: T) {
    return Object.entries(obj) as any as ReadonlyArray<readonly [keyof T, T[keyof T]]>;
}

export function toKeys<T extends Object>(obj: T) {
    return Object.keys(obj) as any as ReadonlyArray<keyof T>;
}

export function fromEntries<T extends string | number | symbol, U>(entries: ReadonlyArray<readonly [T, U]>) {
    const obj = {} as any;
    entries.forEach(entry => {
        obj[entry[0]] = entry[1];
    })
    return obj as { readonly [P in T]: U };
}

export type Pipe<T> = {
    /** Returns a new pipe with the output of a given function */
    into: <U>(fn: (input: T) => U) => Pipe<U>,
    /** Returns current output of entire combined pipe */
    outFrom: <U>(fn: (input: T) => U) => U
}

export function pipe<T>(input: T): Pipe<T> {
    return {
        into: (fn) => {
            const result = fn(input);
            return pipe(result);
        },
        outFrom: (fn) => {
            return fn(input);
        },
    }
}

/** pure map function */
export function map<T, U>(fn: (input: T) => U) {
    return (input: ReadonlyArray<T>) => input.map(fn);
}

/** pure filter function */
export function filter<T>(fn: (input: T) => boolean) {
    return (input: ReadonlyArray<T>) => input.filter(fn);
}

/** pure reduce function */
export function reduce<T, U>(fn: (acc: U, input: T) => U, initial: U) {
    return (input: ReadonlyArray<T>) => input.reduce(fn, initial);
}

export function mapObject<T extends { [key: string]: any }, U>(obj: T, func: (value: T[keyof T], key: keyof T) => U) {
    return fromEntries(toEntries(obj).map(([key, value]) => [key, func(value, key)])) as { [key in keyof T]: U };
}

export type ConvertTuple<T, U> = T extends readonly [any, ...infer B] ? readonly [U, ...ConvertTuple<B, U>]
    : T extends [any, ...infer B] ? [U, ...ConvertTuple<B, U>]
    : [];

export type EvaluationCheck<
    SuccessType,
    FailMessage extends string,
    FailType,
    FailTypeObj = { [key in FailType extends string ? FailType : never]: never }
> = keyof FailTypeObj extends never
    ? SuccessType
    : { evaluationError: `${FailMessage} ${FailType extends string ? FailType : 'unknown'}` };

// oh boy don't do this
type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
type LastOf<T> =
    UnionToIntersection<T extends any ? () => T : never> extends () => (infer R) ? R : never

// TS4.0+
type Push<T extends any[], V> = [...T, V];

// TS4.1+
export type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
    true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>

type abc = 'a' | 'b' | 'c';
type t = TuplifyUnion<abc>; // ["a", "b", "c"] 
