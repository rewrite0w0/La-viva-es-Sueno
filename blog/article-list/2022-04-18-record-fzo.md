---
slug: record-of-fzo
title: fzo 제작기
authors: rewrite0w0
tags: [nodejs, javascript, 감상]
---

## 동기

매번 Object.freeze(`객체/배열`)를 하는 것이 번거로웠다.

깊은 동결도 따로 했어야했다. 다른 라이브러리도 있겠지만 생각난 김에 만들어보자.

## 구현

```js
module.exports = function fzo(obj) {
  if (typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((idx) => fzo(obj[idx]));
    Object.freeze(obj);
  } else {
    return;
  }
  return obj;
};
```

## 환경설정

### 의존 패키지

```bash
# windows10, powershell 환경
md src, test
npm i -D eslint jest rimraf @babel/core @babel/preset-env rollup @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-terser
```

### script

```json
// ...
  "main": "dist/fzo.cjs.js",
  "browser": "dist/fzo.js",
  "module": "dist/fzo.es.js",
  "scripts": {
    "lint": "eslint --fix src/**/*.js",
    "build": "npm run clean && rollup -c",
    "test": "jest",
    "clean": "rimraf dist/*"
  },
// ...
```

### eslint

```bash
.\node_modules\.bin\eslint --init
```

#### .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
```

### babel

```bash
ni .babelrc.js
```

#### .babelrc.js

```js
module.exports = {
  presets: [['@babel/preset-env']],
};
```

### rollup

```bash
ni rollup.config.js
```

#### rollup.config.js

```js
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pluginCommonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const { babel } = require('@rollup/plugin-babel');

const pkg = require('./package.json');
const path = require('path');

const moduleName = pkg.name.replace(/^@.*\//, '');

const banner = `
/**
 * @license
 * ${moduleName}.js v${pkg.version}
 * Released under the ${pkg.license} License.
 **/
`;

module.exports = [
  // browser
  {
    input: 'src/index.js',
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner,
      },
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve({ browser: true }),
      pluginCommonjs({ extensions: ['.js'] }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
    ],
  },

  // ES Module
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named',
      },
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      nodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'default',
      },
    ],
    plugins: [
      pluginCommonjs({
        extensions: ['.js'],
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js'),
      }),
      nodeResolve({
        browser: false,
      }),
    ],
  },
];
```

### build

```bash
npm run build
```

### CI/CD

추후 추가

## 결과

[git](https://github.com/rewrite0w0/fzo)

[npm](https://www.npmjs.com/package/fzo)
