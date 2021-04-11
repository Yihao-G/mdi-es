# Material Design Icons - ES Module Build

[![Node.js Package](https://github.com/Yihao-G/mdi-es/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Yihao-G/mdi-es/actions/workflows/npm-publish.yml)
[![npm version](https://badge.fury.io/js/mdi-es.svg)](https://badge.fury.io/js/mdi-es)

A custom ES modularised build of [Material Design Icons](https://materialdesignicons.com). This module contains all the
SVG path data for all icons. Each icon is contained in an individual module.

```commandline
npm install mdi-es
```

## ⚠ Note: This documentation assumes your Node.js supports [custom package exports](https://github.com/jkrems/proposal-pkg-exports/)

This package uses `"exports"` in `package.json`, which remaps `dist/*.js` folder to `/`. Therefore, when importing
like `import mdiAccount from 'mdi-es/mdiAccount'`, Node actual imports from `mdi-es/dist/mdiAccount.js`.

If the Node you are using doesn't have custom package exports enabled, please import
like `import mdiAccount from 'mdi-es/dist/mdiAccount.js'`.

### TypeScript

Your TypeScript may complain `TS2307: Cannot find module 'mdi-es/mdiAccount' or its corresponding type declarations.`.
This is due to the known issue of https://github.com/microsoft/TypeScript/issues/33079 and is expected to be implemented
in 4.3.

## Usage

### Import

You can load icons by importing either through the main file (`index.js`) or each individual module.

#### Through the main file

Other icons will be tree-shaken if used with a JavaScript module bundler, such as [webpack](https://webpack.js.org)
or [rollup.js](https://rollupjs.org).

```js
import { mdiAccount } from 'mdi-es'

console.log(mdiAccount) // "M...Z"
```

### Import individual module

This is useful if you are not using a JavaScript module bundler or using dynamic import, because not all icons are
imported.

```js
import mdiAccount from 'mdi-es/mdiAccount'

console.log(mdiAccount) // "M...Z"
```

### Show icon path

The imported value is a string of SVG path. It can be displayed by passing the value to the `d` attribute of `<path>`
element in an `<svg>` element.

```html
<svg viewBox="0 0 24 24">
    <path d="mdiAccount string goes here" />
</svg>
```

Here is an example of Vue component `<template>`:

```vue
<template>
    <svg viewBox="0 0 24 24" class="fill-current" :style="{ width: sizeString, height: sizeString }">
        <path :d="iconPath" />
    </svg>
</template>
```

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- React: [MaterialDesign-React](https://github.com/Templarian/MaterialDesign-React)
- SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)
- Font-Build: [MaterialDesign-Font-Build](https://github.com/Templarian/MaterialDesign-Font-Build)
- Desktop Font: [MaterialDesign-Font](https://github.com/Templarian/MaterialDesign-Font)

## Learn More

- [MaterialDesignIcons.com](https://materialdesignicons.com)
- https://github.com/Templarian/MaterialDesign
