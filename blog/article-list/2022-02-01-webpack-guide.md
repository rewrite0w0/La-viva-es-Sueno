---
slug: follow-webpack-guides
title: webpack 메모 (guides)
authors: rewrite0w0
tags: [npm, webpack, 감상]
---

[webpack 가이드](https://webpack.kr/guides/getting-started/)를 따라간다.

**윈도우10 기준**

## start

```bash
npm init -y
npm install webpack webpack-cli --save-dev
md ./src/
ni ./src/index.js, index.html
echo "" > webpack.config.js
```

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

```js
// src/module/module.js
const a = [1, 2, 3, 4, 5];

function square(n) {
  return n * n;
}

export default function someFeature() {
  return a.map((x) => square(x));
}
```

```js
// src/index.js
import someFeature from './module/module.js';

function appendHeading() {
  const a = someFeature();
  const element = document.createElement('h1');
  element.innerText = `${a}`;
  document.body.append(element);
}

appendHeading();
```

```json
// package.json
// ...
"scripts": {
    "build": "webpack --mode development"
  },
// ...

```

```bash
npm run build
```

`dist`폴더에 `main.js`가 만들어진다.

> [참조](https://github.com/rewrite0w0/webpack-tutorial/commit/fbbd46a94d20b100bd7c899ca8adfd56335ef79a)

## asset management

webpack 전에는 `grunt`, `gulp` 같은 도구를 이용해서 에셋을 처리했다.

webpack은 모든 의존성을 동적으로 번들한다.(이게 흔히 말하는 `디펜던시 그래프`)

### CSS 로더를 써보자

```bash
npm i -D style-loader css-loader
ni ./dist/index.html
```

```html
// ./dist/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ez webpack</title>
  </head>
  <body>
    <script src="./main.js"></script>
  </body>
</html>
```

```js
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

로더는 `역순`실행이므로 위의 순서를 지킨다.
위의 예시는 `.css`를 `style-loader`, `css-loader`로 전달한다는 의미.

```bash
ni ./src/style.css
```

```css
/* style.css */
.hello {
  color: skyblue;
}
```

```js
// index.js
import someFeature from './module/module.js';
import './style.css';

function appendHeading() {
  const a = someFeature();
  const element = document.createElement('h1');
  element.innerText = `${a}`;
  element.classList.add('hello');

  document.body.append(element);
}

appendHeading();
```

```bash
npm run build
```

`dist` 폴더에 있는 `index.html`를 브라우저에서 열어보자.

`1,4,9,16,25` 글자가 하늘색이 되어있을 것이다.

### 여기서 이미지를 넣어보면?

[unslash](https://unsplash.com)에서 마음에 드는 이미지를 얻자.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // 추가된 부분
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
```

```css
.hello {
  color: skyblue;
  /* 추가된 부분*/
  background: url('./img.jpg');
}
```

```js
import someFeature from './module/module.js';
import './style.css';
// 추가된 부분
import img from './img.jpg';

function appendHeading() {
  const a = someFeature();
  const element = document.createElement('h1');
  element.innerText = `${a}`;
  element.classList.add('hello');

  // 추가된 부분
  const myIMG = new Image();
  myIMG.src = img;
  element.appendChild(myIMG);

  document.body.append(element);
}

appendHeading();
```

```bash
npm run build
```

`index.html` 열어보면 이미지가 무사히 추가되었다.

> [참조](https://github.com/rewrite0w0/webpack-tutorial/commit/a17a4a4052f185dbb8b981a149434fc9afd274b8)

### 정리

- 외부 로더를 사용시에는 `test`, `use`
- 내부 에셋을 사용시에는 `test`, `type`

## Output management

지금까지는 수동으로 `index.html` 파일에 수동으로 포함시켰다.
그러나 프로젝트가 크면 무척 힘든 행위이다.
이 때, 몇 가지 `플러그인`으로 훨씬 쉽게 프로세스를 관리할 수 있다.

우선 불필요한 것들을 버리자.

```bash
npm uninstall css-loader style-loader
```

또한 추가했던 이미지, `css`을 버리자.
`index.js`에 추가한 코드들도 지우자

이것도 저것도 귀찮다면 [이것](https://github.com/rewrite0w0/webpack-tutorial/tree/fbbd46a94d20b100bd7c899ca8adfd56335ef79a)으로 되돌아간다.

```bash
ni ./src/print.js
```
