export type v3 = readonly [number, number, number];
export namespace v3 {
    export const normalize = (v: v3) => {
        const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
        return <const>[v[0] / length, v[1] / length, v[2] / length];
    }
    export const subtract = (a: v3, b: v3) => <const>[a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    export const cross = (a: v3, b: v3) => <const>[
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}