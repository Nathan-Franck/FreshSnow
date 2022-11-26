import { HtmlBuilder } from "../rendering/htmlBuilder";
import { fromEntries, map, pipe, toEntries } from "../utils";

/** Directory of all projects. */
export const projects = <const>{
    'hub': true,
    '1_basic_cube': true,
    '2_pole_connector_builder': true,
};

export const navbar = (parent: HTMLElement) => {
    // Take Project directory and display all buttons.
    const navigationButtons = HtmlBuilder.createChildren(parent, pipe(projects)
        .into(toEntries)
        .into(map(([name, _]) => <const>([name, { type: "button", attributes: { innerHTML: name } }])))
        .outFrom(fromEntries));

    // Hook up all buttons to navigate to new pages on click.
    for (const [name, button] of toEntries(navigationButtons))
        button.onclick = () => {
            window.location.href = `./${name}`;
        };
};
