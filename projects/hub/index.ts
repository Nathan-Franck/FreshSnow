import { HtmlBuilder } from "../../libs/rendering/htmlBuilder";
import { ReactiveModel } from "../../libs/store/reactiveModel";

const thinger = HtmlBuilder.createChildren(document.body, {
    "first": { type: "div", attributes: { innerHTML: "Hello World!1" } },
    "second": { type: "div", attributes: { innerHTML: "Hello World!2" } },
    "switch 42": { type: "button", attributes: { innerHTML: "Switch 42" } },
});

thinger["switch 42"].addEventListener("click", () => {
    model.merge({ "42": !model.state["42"] });
});

var model = ReactiveModel.create({
    "42": true,
});

model.listen("42", state => {
    thinger.first.innerHTML = state["42"] ? "yes" : "no";
});