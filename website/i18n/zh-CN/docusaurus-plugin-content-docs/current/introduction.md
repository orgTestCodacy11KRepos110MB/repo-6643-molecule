---
title: 简介
sidebar_label: 简介
sidebar_position: 1
---

# Molecule

[![CI][ci-image]][ci-url] [![Codecov][codecov-image]][codecov-url] [![NPM downloads][download-img]][download-url]

[ci-image]: https://github.com/DTStack/molecule/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/DTStack/molecule/actions/workflows/main.yml
[codecov-image]: https://codecov.io/gh/DTStack/molecule/branch/main/graph/badge.svg?token=PDjbCBo6qz
[codecov-url]: https://codecov.io/gh/DTStack/molecule
[download-img]: https://img.shields.io/npm/dm/@dtinsight/molecule.svg?style=flat
[download-url]: https://www.npmjs.com/package/@dtinsight/molecule

Molecule 是一个受 Visual Studio Code 启发，用 React.js 技术 构建的，轻量级的 Web IDE UI 框架。使用 Molecule 我们可以快速搭建一个 UI 可扩展的 Web IDE 网站，得益于使用了 React.js 技术，我们可以方便的在 React 项目中集成，使用自定义的 React 组件，快速实现产品所需要的功能。

## 主要功能

-   Provides the default IDE Workbench same as the Visual Studio Code
-   Easy to extends the default IDE Workbench via the Extension
-   Atomic React Components, Easy to customize the IDE UI

## Installation

```bash
npm install @dtinsight/molecule
# Or
yarn add @dtinsight/molecule
```

## Basic Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { MoleculeProvider, Workbench } from 'molecule';
import 'molecule/esm/style/mo.css';

const App = () => (
    <MoleculeProvider extension={[]}>
        <Workbench />
    </MoleculeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## Document

Refer to the [Docs](./docs).

## Contributing

Refer to the [CONTRIBUTING](./CONTRIBUTING.md).

## Licence

MIT

---