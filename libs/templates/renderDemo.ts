import { HtmlBuilder } from "../rendering/htmlBuilder";

/** Generate canvas and debug elements. */
export const renderDemo = (parent: HTMLElement) => HtmlBuilder.createChildren(parent, {
    canvas: {
        type: "canvas",
        attributes: {
            width: 800,
            height: 600,
        },
    },
    debug: {
        type: "div",
        style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            display: "none",
        },
    },
});