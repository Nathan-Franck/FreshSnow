import { HtmlBuilder } from "../rendering/htmlBuilder";

// Dark mode.
export const setDarkMode = (element: HTMLElement) => HtmlBuilder.assignToElement(element, {
    style: {
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
    },
});