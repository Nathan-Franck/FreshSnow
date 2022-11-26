import { HtmlBuilder } from "../../libs/rendering/htmlBuilder";

const { canvas } = HtmlBuilder.createChildren(document.body, {
    canvas: {
        type: "canvas",
        attributes: {
            width: 800,
            height: 600,
        },
    }
});

const poles = [
    { base: { x: 0, y: 0, z: 4 }, extent: { x: 0, y: 3, z: 0 }},
    { base: { x: 4, y: 0, z: 2 }, extent: { x: 0, y: 3, z: 0 }},
    { base: { x: 4, y: 0, z: -2 }, extent: { x: 0, y: 3, z: 0 }},
    { base: { x: 0, y: 0, z: -4 }, extent: { x: 0, y: 3, z: 0 }},
    { base: { x: -4, y: 0, z: -2 }, extent: { x: 0, y: 3, z: 0 }},
    { base: { x: -4, y: 0, z: 6 }, extent: { x: 0, y: 3, z: 0 }},
];

const connectors = [
    [{poleIndex: 0, step: 0}, {poleIndex: 1, step: 0 }],
    [{poleIndex: 0, step: 3}, {poleIndex: 1, step: 3 }],
    [{poleIndex: 1, step: 0}, {poleIndex: 2, step: 0 }],
    [{poleIndex: 1, step: 3}, {poleIndex: 2, step: 3 }],
    [{poleIndex: 2, step: 0}, {poleIndex: 3, step: 0 }],
    [{poleIndex: 2, step: 3}, {poleIndex: 3, step: 3 }],
    [{poleIndex: 3, step: 0}, {poleIndex: 4, step: 0 }],
    [{poleIndex: 3, step: 3}, {poleIndex: 4, step: 3 }],
    [{poleIndex: 4, step: 0}, {poleIndex: 5, step: 0 }],
    [{poleIndex: 4, step: 3}, {poleIndex: 5, step: 3 }],
    [{poleIndex: 5, step: 0}, {poleIndex: 0, step: 0 }],
    [{poleIndex: 5, step: 3}, {poleIndex: 0, step: 3 }],
];

const surfaces = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11],
];
