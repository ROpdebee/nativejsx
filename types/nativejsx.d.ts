/// <reference path="./jsx.d.ts" />

import type { Options as AcornOptions } from 'acorn'

type ChildType = string | HTMLElement

interface JSXOptions {
    encoding: BufferEncoding
    variablePrefix: string
    declarationType: 'var' | 'const' | 'let'
    prototypes: true | 'module' | 'inline'
    acorn: Partial<AcornOptions>
}

/**
 * @function setAttributes
 * @description
 * Sets multiple attributes at once using an object. This object
 * must map to HTML-compliant attributes.
 */
export const setAttributes: (element: Element, attributes: object) => void;

/**
 * @function appendChildren
 * @description
 * Appends multiple children at once using an array. Each child
 * should be an HTMLElement or a string. If they're not, the function
 * silently does nothing.
 */
export const appendChildren: (element: Element, children: ChildType | ChildType[]) => void;

/**
 * @function setStyles
 * @description
 * Sets CSS-based styles on any valid Element using the
 * .style DOM API.
 */
export const setStyles: (element: Element, styles: object) => void;

/**
 * @function transpile
 * @description
 * Transpiles a String containing JSX source code to JavaScript
 * enhanced with native DOM API calls that reflect the original JSX.
 *
 * @param {String} jsxSrc - JSX source code in String format.
 * @param {JSXOptions} options - User-defined compilation options.
 * @returns {String} - A String representing JSX transpiled to JavaScript.
 */
export function transpile(jsxSrc: string, options?: Partial<JSXOptions>): string;

/**
 * @function parse
 * @description
 * Transforms the JSX AST by reading the specified file and using nativejsx to
 * transpile it to valid JavaScript. This function operates asynchronously
 * and resolves through the Promise API.
 * @param {String} file - A path to and including the JSX file.
 * @param {JSXOptions} options - User-defined compilation options.
 * @returns {Promise} - A Promise that resolves when the file is read and transpiled.
 */
export function parse(file: string, options?: Partial<JSXOptions>): Promise<string>;

/**
 * @function parseSync
 * @description
 * Transforms the JSX AST by reading the specified file and using nativejsx to
 * transpile it to valid JavaScript. This function operates synchronously
 * (much like readFileSync in node.js).
 * @param {String} file - A path to and including the JSX file.
 * @param {JSXOptions} options - User-defined compilation options.
 * @returns {String} - A String containing valid JavaScript.
 */
export function parseSync(file: string, options?: Partial<JSXOptions>): string;
