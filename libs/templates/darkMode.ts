import { HtmlBuilder } from "../rendering/htmlBuilder";

// Dark mode.
export const initDocumentDarkMode = () => HtmlBuilder.assignToElement(document.body, {
    style: {
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
    },
});