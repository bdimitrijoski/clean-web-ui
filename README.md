# Clean Web UI

CleanWebUi is an open collection of small, simple and framework agnostic web components, written in pure Vanilla JavaScript.
The components are independent of any framework such as Vue, Angular, React or any other dependencies, which makes them perfect for integrating with any framework.

## Quick start

Installing with npm:
`npm install clean-web-components`

In your main file:

```JS
// first import components
import * as cwui 'clean-web-components';

// register components and you are good to go
cwui.init();
```

## Using with plain HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="path-to/clean-web-components.js"></script>

</head>
<body>
    <cwui-button>Button</cwui-button>
</body>
</html>
```

# Components

- [App Layout](./libs/cwui-app-layout/README.md)
- [Button](./libs/cwui-button/README.md)
- [Form Layout](./libs/cwui-form-layout/README.md)
- [Page Layout](./libs/cwui-page-layout/README.md)
- [Pagination](./libs/cwui-pagination/README.md)
- [Split Layout](./libs/cwui-split-layout/README.md)
- [Toolbar](./libs/cwui-toolbar/README.md)
