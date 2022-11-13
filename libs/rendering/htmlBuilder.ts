import * as CSS from "./CSS";

/**
 *🎼  HTML style attribute description.
 */
export type Style = Readonly<CSS.Properties<number>>;

/**
 * 🎼 HTML style sheet element description.
 */
export type ClassStyle = {
    readonly name: string,
    readonly declaration: Style,
};

/**
 * 🎼 HTML tag description.
 */
export type HTMLTag<T extends keyof HTMLElementTagNameMap> = {
    type: T,
    style?: Style,
    attributes?: Partial<HTMLElementTagNameMap[T]>,
};

/**
 * 🎼 HTML SVG tag description.
 * 🪓 Uses literalAttributes since there's barriers in-place that prevent using typed Element attributes.
 */
export type SVGTag<T extends keyof SVGElementTagNameMap> = {
    readonly type: T,
    readonly style?: Style,
    readonly attributes?: Readonly<Partial<SVGElementTagNameMap[T]>>,
    readonly literal_attributes?: {
        [key: string]: any,
    },
};

export namespace HtmlBuilder {
    /**
     * 📝Generates a string that describes the provided style in a way that
     * can be used in a style attribute OR a style sheet.
     */
    export function generateStyleString(style: Style) {
        return Object.keys(style).reduce<string>((output, declarationKey) => {
            const formattedKey = declarationKey.replace(new RegExp(`([A-Z])`), match => `-${match.toLowerCase()}`);
            const value = style[declarationKey as keyof Style];
            return (
                `${output} ${formattedKey}: ${value};`);
        }, "");
    }

    /**
     * 📝Generates a string that describes the provided series of ClassStyles in a
     * style sheet format that can be inserted into a style tag's innerHtml
     */
    export function generateStyleHTML(styles: ClassStyle[]) {
        return styles.reduce<string>((output, style) =>
            `${output} ${style.name} {${
            Object.keys(style.declaration).reduce<string>((output, declarationKey) => {
                const formattedKey = declarationKey.replace(new RegExp(`([A-Z])`), match => `-${match.toLowerCase()}`);
                const value = style.declaration[declarationKey as keyof Style];
                return (
                    `${output} ${formattedKey}: ${value};`);
            }, "")
            } }`, "");
    }

    /**
     * 🎨 Assign custom attributes and style to an existing element.
     */
    export function assignToElement<T extends keyof HTMLElementTagNameMap>(
        element: HTMLElementTagNameMap[T],
        tag: Partial<HTMLTag<T>>,
    ) {
        if (tag.style != null) {
            Object.assign(element.style, tag.style);
        }
        if (tag.attributes != null) {
            Object.assign(element, tag.attributes);
        }
        return element;
    }

    /**
     * 🎨 Assign custom attributes and style to an existing element.
     */
    export function assignToElementSVG<T extends keyof SVGElementTagNameMap>(
        element: SVGElementTagNameMap[T],
        tag: Partial<SVGTag<T>>,
    ) {
        const { literal_attributes: literalAttributes, style, attributes } = tag;
        if (style != null) {
            Object.assign(element.style, style);
        }
        if (attributes != null) {
            Object.assign(element, attributes);
        }
        if (literalAttributes != null) {
            Object.keys(literalAttributes).forEach(attributeKey => element.setAttributeNS(
                null,
                attributeKey,
                literalAttributes[attributeKey]));
        }
        return element;
    }

    /**
     * ✨Create a HTMLElement and add it to the parent element.
     * Assigns mentioned members to this element after creating.
     */
    export function createChild<T extends keyof HTMLElementTagNameMap>(
        id: string,
        parent: HTMLElement,
        tag: HTMLTag<T>,
    ) {
        const child = document.createElement(tag.type);
        assignToElement(child, {
            ...tag,
            attributes: <Partial<HTMLElementTagNameMap[T]>>{
                ...tag.attributes,
                id,
            },
        });
        parent.appendChild(child);
        return child;
    }

    /**
     * ✨ Create a list of HTMLElements and add them to the parent element.
     * Assigns mentioned members to each element after creating.
     * Assigns element id as provided by each object key.
     * Returns an object containing each provided key associated with a new HTMLElement.
     */
    export function createChildren<
        T extends {
            [key in string]: keyof HTMLElementTagNameMap
        },
        >(
            parent: HTMLElement,
            tags: {
                [key in keyof T]: HTMLTag<T[key]>
            },
    ) {
        const result = (Object.keys(tags) as (keyof T)[]).
            map(key => {
                const tag = tags[key];
                const child = document.createElement(tag.type);
                assignToElement(child, {
                    ...tag,
                    attributes: {
                        ...tag.attributes,
                        id: key,
                    }
                });
                parent.appendChild(child);
                return { key, child };
            }).
            reduce((childElements, keyChild) => ({
                ...childElements,
                [keyChild.key]: keyChild.child,
            }), {});
        return result as ({
            [key in keyof T]: HTMLElementTagNameMap[T[key]]
        });
    }

    /**
     * ✨Create a SVGElement and add it to the parent element.
     * Assigns mentioned members to this element after creating.
     */
    export function createChildSVG<T extends keyof SVGElementTagNameMap>(
        id: string,
        parent: HTMLElement | SVGElement,
        tag: SVGTag<T>,
    ) {
        const child = document.createElementNS("http://www.w3.org/2000/svg", tag.type);
        assignToElementSVG(child, {
            ...tag,
            attributes: <Partial<SVGElementTagNameMap[T]>>{
                ...tag.attributes,
                id,
            },
        });
        parent.appendChild(child);
        return child;
    }

    /**
     * ✨ Create a list of HTMLElements and add them to the parent element.
     * Assigns mentioned members to each element after creating.
     * Assigns element id as provided by each object key.
     * Returns an object containing each provided key associated with a new HTMLElement.
     */
    export function createChildrenSVG<
        Key extends string,
        T extends {
            [key in Key]: keyof SVGElementTagNameMap
        },
        >(
            parent: HTMLElement | SVGElement,
            tags: {
                [key in keyof T]: SVGTag<T[key]>
            },
    ) {
        const result = (Object.keys(tags) as (keyof T)[]).
            map(key => {
                const tag = tags[key];
                const child = document.createElementNS("http://www.w3.org/2000/svg", tag.type);
                assignToElementSVG(child, {
                    ...tag,
                    literal_attributes: {
                        ...tag.literal_attributes,
                        id: key,
                    }
                });
                parent.appendChild(child);
                return { key, child };
            }).
            reduce((childElements, keyChild) => ({
                ...childElements,
                [keyChild.key]: keyChild.child,
            }), {});
        return result as ({
            [key in keyof T]: SVGElementTagNameMap[T[key]]
        });
    }

    /**
     * ♻ Re-use existing elements from pool, assigning tag attributes.
     * If nothing is left in the pool, make a new child under the parent.
     * Recommended you use `executeRecycleProcess` to manage recycling automatically.
     */
    export function recycleElement<T extends keyof HTMLElementTagNameMap>(
        parent: HTMLElement,
        pool: HTMLElementTagNameMap[T][],
        tag: HTMLTag<T>,
    ) {
        const existing_element = pool.pop();
        if (existing_element != null) {
            assignToElement<T>(existing_element, tag);
            parent.appendChild(existing_element);
            return existing_element;
        } else {
            return createChild("recycled-element", parent, tag);
        }
    }


    /**
     * ♻ Automated pipeline for reusing elements  and removing elements that weren't reused.
     * Avoids flickering when quickly remove/add-ing elements during a state change.
     */
    export function executeRecycleProcess<T extends keyof HTMLElementTagNameMap>(
        args: SingleParentArgs<T> | MultiParentArgs<T>
    ): HTMLElementTagNameMap[T][] {
        const pool = [...args.old_elements];
        const result = "parent_element" in args ?
            args.recycle_process_single_parent(tag => recycleElement<T>(args.parent_element, pool, tag)) :
            args.recycle_process((parent, tag) => recycleElement<T>(parent, pool, tag));
        pool.forEach(child =>
            child.parentNode?.removeChild(child));
        return result;
    }
    type SingleParentArgs<T extends keyof HTMLElementTagNameMap> = {
        old_elements: readonly HTMLElementTagNameMap[T][],
        parent_element: HTMLElement,
        recycle_process_single_parent: (recycleElement: (tag: HTMLTag<T>) =>
            HTMLElementTagNameMap[T]) => HTMLElementTagNameMap[T][],
    };
    type MultiParentArgs<T extends keyof HTMLElementTagNameMap> = {
        old_elements: readonly HTMLElementTagNameMap[T][],
        recycle_process: (recycleElementPerParent: (parentElement: HTMLElement, tag: HTMLTag<T>) =>
            HTMLElementTagNameMap[T]) => HTMLElementTagNameMap[T][],
    };
}