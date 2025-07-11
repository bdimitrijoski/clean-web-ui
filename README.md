# Clean Web UI

**Framework-free, hassle-free. Build beautiful UIs with pure Web Components.**
[![Test and Build](https://github.com/bdimitrijoski/clean-web-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/bdimitrijoski/clean-web-ui/actions/workflows/ci.yml)

[![npm (clean-web-ui)](https://img.shields.io/npm/v/clean-web-ui?label=clean-web-ui)](https://www.npmjs.com/package/clean-web-ui)

**Individual Packages**

[![npm (cwui-split-layout)](https://img.shields.io/npm/v/cwui-split-layout?label=cwui-split-layout)](https://www.npmjs.com/package/cwui-split-layout)
[![npm (cwui-layouts)](https://img.shields.io/npm/v/cwui-layouts?label=cwui-layouts)](https://www.npmjs.com/package/cwui-layouts)
[![npm (cwui-toolbar)](https://img.shields.io/npm/v/cwui-toolbar?label=cwui-toolbar)](https://www.npmjs.com/package/cwui-toolbar)
[![npm (cwui-app-layout)](https://img.shields.io/npm/v/cwui-app-layout?label=cwui-app-layout)](https://www.npmjs.com/package/cwui-app-layout)
[![npm (cwui-page-layout)](https://img.shields.io/npm/v/cwui-page-layout?label=cwui-page-layout)](https://www.npmjs.com/package/cwui-page-layout)

## 🚀 Overview

Have you ever needed a set of UI components, only to find yourself blocked by framework-specific requirements or tangled in a web of added dependencies?

> We’ve all been there. You want the banana... but end up with the gorilla, the banana, and the entire jungle. 😅

With every new JavaScript framework release, developers often face the frustrating cycle of reinventing components just to stay compatible. Migration challenges, breaking changes, and dependency overload make building UI unnecessarily complex. Shouldn’t we be solving problems—not repeating them?

## 🌱 What is CleanWebUI?

CleanWebUI is an open-source library of small, composable, and truly framework-agnostic web components—written in pure Vanilla JavaScript. No dependencies. No framework lock-in. Just clean, reusable building blocks for modern web apps.

## 🔍 Why Choose CleanWebUI?

| ✅ Feature                      | 💡 Benefit                                                   |
| ------------------------------- | ------------------------------------------------------------ |
| Zero dependencies               | No bloated bundles—just lean, fast, native components        |
| Framework-agnostic              | Works with React, Vue, Angular... or none at all             |
| Component reuse across projects | Stop reinventing the wheel every time a new framework drops  |
| Minimal footprint               | Faster load times and optimal performance                    |
| Flexibility                     | You can choose and install only the packages you want to use |

## 🧪 Example Usage

### With Typescript

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

## 📦 Available Components

- [App Layout](./libs/cwui-app-layout/README.md)
- [Button](./libs/cwui-button/README.md)
- [Form Layout](./libs/cwui-form-layout/README.md)
- [Page Layout](./libs/cwui-page-layout/README.md)
- [Pagination](./libs/cwui-pagination/README.md)
- [Split Layout](./libs/cwui-split-layout/README.md)
- [Layouts](./libs/cwui-layouts/README.md)
- [Toolbar](./libs/cwui-toolbar/README.md)

## 📘 Philosophy

CleanWebUI components are:

- 💚 Accessible by default
- 📱 Mobile-friendly and responsive
- 🧱 Composable and minimalistic
- 🎨 Compatible with custom styling
- 🔒 Free of hidden framework coupling

We believe in clean code, clean design, and clean integration.

## 📚 Documentation

Full documentation and usage examples are available on [GitHub](https://github.com/bdimitrijoski/clean-web-ui).

## 🛠 Contributing

We welcome contributions! Have an idea, component request, or bug fix? Head to the issues section and let’s build it together.

## 📄 License

Released under the [MIT License](./LICENSE).
