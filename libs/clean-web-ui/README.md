# Clean Web UI

[![npm version](https://badgen.net/npm/v/clean-web-ui)](https://www.npmjs.com/package/clean-web-ui)

Have you ever find in a situation where you or your team needs to use a set of components, but you are blocked because of the framework that is used or introduce additional dependencies to your project?

We often have moneky banana problem with frameworks. You wanted the banana but you get the gorilla with banana and the whole jungle.

Aren't you feel that we are reinventing the wheel over and over again?
We have to create the same components over and over again, so they can be compatible with the new framework that just came out. Many times, including UI framework to our project causes breaking changes, or simply you can not migrate to newer version because it requres newer version of the framework and you get stucked.

CleanWebUI is an open collection of small, simple and framework agnostic web components, written in pure Vanilla JavaScript.

The components are not having any other dependencies, which makes them perfect for integrating with any framework.

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

- [App Layout](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-app-layout/README.md)
- [Button](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-button/README.md)
- [Form Layout](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-form-layout/README.md)
- [Page Layout](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-page-layout/README.md)
- [Pagination](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-pagination/README.md)
- [Split Layout](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-split-layout/README.md)
- [Layouts](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-layouts/README.md)
- [Toolbar](https://github.com/bdimitrijoski/clean-web-ui/libs/cwui-toolbar/README.md)
