# App Layout

[![npm version](https://badgen.net/npm/v/cwui-app-layout)](https://www.npmjs.com/package/cwui-app-layout)

Plain JS Web component for wrapping page content and creating app layout.
Provides a quick and easy way to get a common application layout structure done.

## Usage

Install with npm:
`npm install cwui-app-layout`

Once installed, import in your main file:

```JS
// first import library
import * as appLayout 'cwui-app-layout';

// then call the init function to register the component
appLayout.init();
```

At this point the component should be ready to use.

# Using the component

```HTML
<cwui-app-layout theme="primary-sidebar" sidebar="expanded" header="on">
    <header slot="header">
      <!-- Anything that you want to display in the header -->
      <div style="padding: 10px;">Logo</div>
    </header>
    <aside slot="sidebar">
      <!-- Anything that you want to display in the sidebar like menu items -->
      <ul>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </aside>
    <main >
      <!-- Your main content -->
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>
</cwui-app-layout>
```

## Events

- `sidebar-opened-changed` - emmited when sidebar is open/closed
- `header-visibility-changed` - emmited when header is shown/hidden

Usage:

```JS
document.querySelector('cwui-app-layout')
.addEventListener('sidebar-opened-changed',(e)=>console.log(e));
```

## Slots

- sidebar - sidebar contents goes here
- header - the header contents

## Styling

- `--app-layout-header-background` - header background color
- `--app-layout-font-family` - font family
- `--app-layout-header-height` - the height of the header (default 66px)
- `--app-layout-sidebar-background` - sidebar background color
- `--app-layout-sidebar-color` - sidebar foreground color
- `--app-layout-sidebar-width` - width of the sidebar in pixels (default 250px)
- `--app-layout-sidebar-collapsed-width` - width of the sidebar when collapsed (default 50px)
