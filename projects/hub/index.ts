import { HtmlBuilder } from "../../libs/rendering/htmlBuilder";
import { ReactiveModel } from "../../libs/store/reactiveModel";
import { initDocumentDarkMode } from "../../libs/templates/darkMode";
import { fromEntries, map, pipe, toEntries } from "../../libs/utils";
import { projects } from "./projects";

initDocumentDarkMode();

// Take Project directory and display all buttons.
const navigationButtons = HtmlBuilder.createChildren(document.body, pipe(projects)
    .into(toEntries)
    .into(map(([name, _]) => <const>([name, { type: "button", attributes: { innerHTML: name } }])))
    .outFrom(fromEntries));

// Hook up all buttons to navigate to new pages on click.
for (const [name, button] of toEntries(navigationButtons))
    button.onclick = () => {
        window.location.href = `./${name}`;
    };


// Basic test of reactivity on UI.
const thinger = HtmlBuilder.createChildren(document.body, {
    "first": { type: "div", attributes: { innerHTML: "Hello World!1" } },
    "second": { type: "div", attributes: { innerHTML: "Hello World!2" } },
    "a42": { type: "div", attributes: { innerHTML: "Hello World!3" } },
    "switch 42": { type: "button", attributes: { innerHTML: "Switch 42" } },
});

// Hook up button to change the value of the model.
thinger["switch 42"].addEventListener("click", () => {
    model.merge({ "42": !model.state["42"] });
});

// Create a model.
var model = ReactiveModel.create({
    "42": true,
});

// Create a subscription to the model.
model.listen("42", state => {
    thinger["a42"].innerHTML = state["42"] ? "yes" : "no";
});