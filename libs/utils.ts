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
            return  fn(input);
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