# Layouts

[![npm version](https://badgen.net/npm/v/cwui-layouts)](https://www.npmjs.com/package/cwui-layouts)

Plain JS Web components providing a simple way to horizontally or vertically align your HTML elements.

## Usage

Install with npm:
`npm install cwui-layouts`

Once installed, import in your main file:

```JS
// first import library
import * as cwLayouts 'cwui-layouts';

// then call the init function to register the component
cwLayouts.init();
```

At this point the component should be ready to use.

# Using the component

```HTML
<cwui-horizontal-layout spacing="auto" >

    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
    <div>Element 4</div>
</cwui-horizontal-layout>

<cwui-vertical-layout spacing="spacing-s" >

    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
    <div>Element 4</div>
</cwui-vertical-layout>
```

## Attributes

- `spacing` - Available options - [`spacing-xs`, `spacing-s`, `spacing-m`, `spacing-l`, `spacing-l`, `no-spacing`]
- `hidden` - hide the element

## Styling

- `--cw-horizontal-layout-spacing-xs` - default 4px
- `--cw-horizontal-layout-spacing-s` - default 8px
- `--cw-horizontal-layout-spacing-m` - default 16px
- `--cw-horizontal-layout-spacing-l` - default 24px
- `--cw-horizontal-layout-spacing-xl` - default 40px
