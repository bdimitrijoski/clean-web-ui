# Page Layout

[![npm version](https://badgen.net/npm/v/cwui-page-layout)](https://www.npmjs.com/package/cwui-page-layout)

Plain JS Web component for wrapping page content with slots for header and footer.

## Usage

Install with npm:
`npm install cwui-page-layout`

Once installed, import in your main file:

```JS
// first import library
import * as pageLayout 'cwui-page-layout';

// then call the init function to register the component
pageLayout.init();
```

At this point the component should be ready to use.

# Using the component

```HTML
<cwui-page-layout theme="primary-sidebar" sidebar="expanded" header="on">
    <header slot="header">
      <!-- Anything that you want to display in the header -->
      <div style="padding: 10px;">Logo</div>
    </header>

    <main >
      <!-- Your main content -->
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>

    <aside slot="appbar">
      <!-- Anything that you want to display in the sidebar like menu items -->
      <button>Save</button>
    </aside>
</cwui-page-layout>
```

## Attributes

- `appbar` - empty to be visible, `off` to be hidden
- `header` - empty to be visible, `off` to be hidden
- `theme` - optional, you can use `transparent` to make header with transparent background

## Slots

- appbar - footer, usefull for toolbars
- header - the header contents

`Note: if you don't provide a slot name, everything will be rendered inside contents part`

## Styling

- `--page-layout-background` - page background color
- `--page-layout-content-padding` - default padding is 15px
- `--page-layout-appbar-height` - the height of the footer (default 48px)
- `--page-layout-appbar-background` - footer background color
- `--page-layout-header-background` - header background color
- `--page-layout-header-height` - header height (default 115px)
