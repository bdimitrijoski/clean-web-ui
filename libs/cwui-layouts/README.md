# Layouts

[![npm version](https://badgen.net/npm/v/cwui-layouts)](https://www.npmjs.com/package/cwui-layouts)

Plain JS Toolbar Web component that provides an interface for groupping collection of commands.

## Usage

Install with npm:
`npm install cwui-toolbar`

Once installed, import in your main file:

```JS
// first import library
import * as cwToolbar 'cwui-toolbar';

// then call the init function to register the component
cwToolbar.init();
```

At this point the component should be ready to use.

# Using the component

```HTML
<cwui-toolbar theme="light" >

    <aside slot="left">
      <!-- Items here will be aligned left -->
      <button>Save</button>
    </aside>
    <aside slot="right">
      <!-- Items here will be aligned right -->
      <button>Prev</button>
      <button>Next</button>
    </aside>
</cwui-toolbar>
```

## Attributes

- `theme` - optional `light` theme can be used

## Slots

- `left` - toolbar items that will be displayed on the left side
- `right` - toolbar items that will be displayed on the left side

## Styling

- `--cw-toolbar-background` - toolbar background color
- `--cw-toolbar-padding` - default is 0px
- `--cw-toolbar-border-color` - default is transparent
- `--cw-toolbar-height` - toolbar height (default 48px)
