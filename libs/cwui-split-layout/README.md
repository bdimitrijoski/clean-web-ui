# Split Layout

[![npm version](https://badgen.net/npm/v/cwui-split-layout)](https://www.npmjs.com/package/cwui-split-layout)

Plain JS Web component that implements a master/detail user interface pattern.
On the left side you can have the list items and on the right side the details.

## Usage

Install with npm:
`npm install cwui-split-layout`

Once installed, import in your main file:

```JS
// first import library
import * as splitLayout 'cwui-split-layout';

// then call the init function to register the component
splitLayout.init();
```

At this point the component should be ready to use.

# Using the component

```HTML
<cwui-split-layout theme="primary-sidebar" sidebar="expanded" header="on">

    <aside slot="sidebar">
      <!-- Anything that you want to display in the sidebar like menu items -->
      <ul>
        <li>List item</li>
        <li>List item</li>
      </ul>
    </aside>
    <main slot="content" >
      <!-- Your main content -->
      <div style="padding: 10px;">
        <h1>Content</h1>
        <p>Web Component providing a quick and easy way to get a common application layout structure done</p>
      </div>
    </main>
</cwui-split-layout>
```

## Slots

- sidebar - list contents goes here
- content - item details will be loaded here

## Styling

- `--cw-split-layout-sidebar-width` - the width of the sidebar (default 350px)
- `--sidebar-background` - sidebar (list) background color
