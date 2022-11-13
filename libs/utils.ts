// Stronly typed wrapper around Object.entries
export function toEntries<T extends Object>(obj: T): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as any;
}

export function toKeys<T extends Object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as any;
}