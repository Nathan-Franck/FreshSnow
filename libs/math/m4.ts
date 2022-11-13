import { v3 } from "./v3";

export type m4 = readonly [
    readonly [number, number, number, number],
    readonly [number, number, number, number],
    readonly [number, number, number, number],
    readonly [number, number, number, number],
];
export namespace m4 {
    export const perspective = (fieldOfViewInRadians: number, aspect: number, near: number, far: number): m4 => {
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        const rangeInv = 1.0 / (near - far);
        return <const>[
            [f / aspect, 0, 0, 0],
            [0, f, 0, 0],
            [0, 0, (near + far) * rangeInv, -1],
            [0, 0, near * far * rangeInv * 2, 0],
        ];
    };
    export const lookAt = (cameraPosition: v3, target: v3, up: v3): m4 => {
        const zAxis = v3.normalize(
            v3.subtract(cameraPosition, target));
        const xAxis = v3.normalize(v3.cross(up, zAxis));
        const yAxis = v3.normalize(v3.cross(zAxis, xAxis));

        return <const>[
            [xAxis[0], xAxis[1], xAxis[2], 0],
            [yAxis[0], yAxis[1], yAxis[2], 0],
            [zAxis[0], zAxis[1], zAxis[2], 0],
            [cameraPosition[0], cameraPosition[1], cameraPosition[2], 1],
        ];
    }
    export const multiply = (a: m4, b: m4): m4 => [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0] + a[0][3] * b[3][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1] + a[0][3] * b[3][1],
            a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2] + a[0][3] * b[3][2],
            a[0][0] * b[0][3] + a[0][1] * b[1][3] + a[0][2] * b[2][3] + a[0][3] * b[3][3],
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0] + a[1][3] * b[3][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1] + a[1][3] * b[3][1],
            a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2] + a[1][3] * b[3][2],
            a[1][0] * b[0][3] + a[1][1] * b[1][3] + a[1][2] * b[2][3] + a[1][3] * b[3][3],
        ],
        [
            a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0] + a[2][3] * b[3][0],
            a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1] + a[2][3] * b[3][1],
            a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2] + a[2][3] * b[3][2],
            a[2][0] * b[0][3] + a[2][1] * b[1][3] + a[2][2] * b[2][3] + a[2][3] * b[3][3],
        ],
        [
            a[3][0] * b[0][0] + a[3][1] * b[1][0] + a[3][2] * b[2][0] + a[3][3] * b[3][0],
            a[3][0] * b[0][1] + a[3][1] * b[1][1] + a[3][2] * b[2][1] + a[3][3] * b[3][1],
            a[3][0] * b[0][2] + a[3][1] * b[1][2] + a[3][2] * b[2][2] + a[3][3] * b[3][2],
            a[3][0] * b[0][3] + a[3][1] * b[1][3] + a[3][2] * b[2][3] + a[3][3] * b[3][3],
        ],
    ];

    export const inverse = (m: m4) => {
        const t00 = m[2][2] * m[3][3];
        const t01 = m[3][2] * m[2][3];
        const t02 = m[1][2] * m[3][3];
        const t03 = m[3][2] * m[1][3];
        const t04 = m[1][2] * m[2][3];
        const t05 = m[2][2] * m[1][3];
        const t06 = m[0][2] * m[3][3];
        const t07 = m[3][2] * m[0][3];
        const t08 = m[0][2] * m[2][3];
        const t09 = m[2][2] * m[0][3];
        const t10 = m[0][2] * m[1][3];
        const t11 = m[1][2] * m[0][3];
        const t12 = m[2][0] * m[3][1];
        const t13 = m[3][0] * m[2][1];
        const t14 = m[1][0] * m[3][1];
        const t15 = m[3][0] * m[1][1];
        const t16 = m[1][0] * m[2][1];
        const t17 = m[2][0] * m[1][1];
        const t18 = m[0][0] * m[3][1];
        const t19 = m[3][0] * m[0][1];
        const t20 = m[0][0] * m[2][1];
        const t21 = m[2][0] * m[0][1];
        const t22 = m[0][0] * m[1][1];
        const t23 = m[1][0] * m[0][1];
        const m00 = (t00 * m[1][1] + t03 * m[2][1] + t04 * m[3][1]) -
            (t01 * m[1][1] + t02 * m[2][1] + t05 * m[3][1]);
        const m01 = (t01 * m[0][1] + t06 * m[2][1] + t09 * m[3][1]) -
            (t00 * m[0][1] + t07 * m[2][1] + t08 * m[3][1]);
        const m02 = (t02 * m[0][1] + t07 * m[1][1] + t10 * m[3][1]) -
            (t03 * m[0][1] + t06 * m[1][1] + t11 * m[3][1]);
        const m03 = (t05 * m[0][1] + t08 * m[1][1] + t11 * m[2][1]) -
            (t04 * m[0][1] + t09 * m[1][1] + t10 * m[2][1]);
        const m10 = (t01 * m[1][0] + t02 * m[2][0] + t05 * m[3][0]) -
            (t00 * m[1][0] + t03 * m[2][0] + t04 * m[3][0]);
        const m11 = (t00 * m[0][0] + t07 * m[2][0] + t08 * m[3][0]) -
            (t01 * m[0][0] + t06 * m[2][0] + t09 * m[3][0]);
        const m12 = (t03 * m[0][0] + t06 * m[1][0] + t11 * m[3][0]) -
            (t02 * m[0][0] + t07 * m[1][0] + t10 * m[3][0]);
        const m13 = (t04 * m[0][0] + t09 * m[1][0] + t10 * m[2][0]) -
            (t05 * m[0][0] + t08 * m[1][0] + t11 * m[2][0]);
        const m20 = (t12 * m[1][3] + t15 * m[2][3] + t16 * m[3][3]) -
            (t13 * m[1][3] + t14 * m[2][3] + t17 * m[3][3]);
        const m21 = (t13 * m[0][3] + t18 * m[2][3] + t21 * m[3][3]) -
            (t12 * m[0][3] + t19 * m[2][3] + t20 * m[3][3]);
        const m22 = (t14 * m[0][3] + t19 * m[1][3] + t22 * m[3][3]) -
            (t15 * m[0][3] + t18 * m[1][3] + t23 * m[3][3]);
        const m23 = (t17 * m[0][3] + t20 * m[1][3] + t23 * m[2][3]) -
            (t16 * m[0][3] + t21 * m[1][3] + t22 * m[2][3]);
        const m30 = (t14 * m[2][2] + t17 * m[3][2] + t13 * m[1][2]) -
            (t16 * m[3][2] + t12 * m[1][2] + t15 * m[2][2]);
        const m31 = (t20 * m[3][2] + t12 * m[0][2] + t19 * m[2][2]) -
            (t18 * m[2][2] + t21 * m[3][2] + t13 * m[0][2]);
        const m32 = (t18 * m[1][2] + t23 * m[3][2] + t15 * m[0][2]) -
            (t22 * m[3][2] + t14 * m[0][2] + t19 * m[1][2]);
        const m33 = (t22 * m[2][2] + t16 * m[0][2] + t21 * m[1][2]) -
            (t20 * m[1][2] + t23 * m[2][2] + t17 * m[0][2]);
        const det = m[0][0] * m00 + m[1][0] * m01 + m[2][0] * m02 + m[3][0] * m03;
        if (det === 0) {
            return null;
        }
        return [
            [m00 / det, m10 / det, m20 / det, m30 / det],
            [m01 / det, m11 / det, m21 / det, m31 / det],
            [m02 / det, m12 / det, m22 / det, m32 / det],
            [m03 / det, m13 / det, m23 / det, m33 / det],
        ];
    }
}