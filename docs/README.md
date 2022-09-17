📢 Use this project, [contribute](https://github.com/vtex-apps/disposition-layout) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# DISPOSITION LAYOUT - 3.x

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

A layout capable of ordering components by **dragging** them on the site editor's interface, and choosing which of them are visible.

> ⚠️ WARNING: This app is not a page-builder. Always abide to Store-Framework optimization methods to ensure proper performance.

![ordering-example](https://user-images.githubusercontent.com/50715158/128493726-ebdbca35-292e-4bd3-84a1-ac01005843ec.gif)

## Configuration

1. Add `vtex.disposition-layout` in version `3.x` as a theme peer-dependency in the `manifest.json` file
2. Declare your orderable components as children of `disposition-layout`
3. Add, as prop, an array of objects with the numerical assigment of the given components; always start from `1`
4. Controlling the visibility is done via site editor, inside each item of the array list

### `disposition-layout` props

| Prop name     | Type      | Description                                                                     | Default value |
| ------------- | --------- | ------------------------------------------------------------------------------- | ------------- |
| `disposition` | `array`   | An array of objects describing, with integers, the numerical asigment and order | `undefined`   |
| `ssr`         | `boolean` | Set as `false` if you want this layout to be rendered ONLY in the client-side   | `true`        |

- `disposition` array:

| Prop name           | Type      | Description                                           |
| ------------------- | --------- | ----------------------------------------------------- |
| `order`             | `number`  | The numerical assigment for each children             |
| `show`              | `boolean` | (Optional) If the children should be rendered         |
| `__editorItemTitle` | `string`  | (Optional) Item name visible in the Admin Site Editor |

## Modus Operandi

A good implementantion is to declare the array length and numerical values corresponding to the length and order of the children array.

⚠️ Always use an ascending pattern starting from 1, as this array is correlated with the indices of the children

```json
"disposition-layout": {
    "children": [
      "flex-layout.row#one",
      "info-card#example",
      "flex-layout.row#two"
    ],
    "props": {
      "disposition": [
        {
          "order": 1
        },
        {
          "order": 2
        },
        {
          "order": 3
        }
      ]
    }
  },
```

Per example,

- 1 -> "flex-layout.row#one"
- 2 -> "info-card#example"
- 3 -> "flex-layout.row#two"

If by mistake you delete an item from the list, in site editor, remember that you can go to `configuration` and restore the original theme settings.

![configuration](https://user-images.githubusercontent.com/50715158/128494098-6d5dff5d-c909-48a7-84de-d1578544cf93.png)

## Customization

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
