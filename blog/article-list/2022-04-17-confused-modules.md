---
slug: confused-modules
title: 모듈이 혼란스럽다.
authors: rewrite0w0
tags: [nodejs, javascript, 감상]
---

최대한 의존하는 것 없이 라이브러리를 만들어보고 싶어서 만드는 와중에 `module`에서 혼란이 왔다.

`package.json`에서 `"type":"module"` 혹은 `"type": "commonjs"` 쓰면 될 일이지만 막힌 기념으로 이에 대해 알아보자

> 환경은 windows 10, 패키지가 아무 것도 설치되지 않은 프로젝트, node.js > 16

## 애초에 `"type":` 이것을 쓰기 싫다.

`node.js`에서는 기본 `require/module.exports`을 이용할 수 있다.

:::info
`cjs` === `require/module.exports`

Node.js 환경서 동작하는 방식

`mjs` === `import/export`

브라우저에서 동작하는 방식
:::

```js
const func = require('./func');
func('value');
```

이렇게 함수를 쓰고 싶을 때는

```js
// func.js

function func(value) {
  return console.log("i'm func " + value + ' is value');
}

module.exports = func;
```

이렇게 써야한다

습관적으로 `module.exports = { func }` 이렇게 적었는데 이러면 이것은 객체로 넘어가서 함수가 아니라 함수로 쓸 수가 없다.

똑같이 모듈 모음집에서도

```js
// index.js

const func = require('./func');

module.exports = Object.freeze(func);
```

이렇게 써야지 `Object.freeze({ func })` 이것은 안 된다.

다른 분은 어쩐지 모르지만 적어도 나는 이런 실수를 했기에 실수를 다시 안 하도록 기록한다.

## 만약 import/export라면?

[브라우저에서는 기본적으로 모듈을 지원하니](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules#browser_support) 크게 상관없을지도 모른다.

`node.js`에서 `import/export`를 쓴다면

`package.json`에

```json
// ...
"type": "module",
// ...
// 넣어줘야한다.
```

또한 위에 `require("./파일명")`에 반해서

```js
export default function func(value) {
  return console.log("i'm func " + value + ' is value');
}
```

```js
// index.js
import func from './func.js';
func();
```

이렇게 `파일명.js`까지 명시해줘야한다.

## 근데 React를 비롯한 다른 라이브러리 보면...

react의 `index.js`를 보면

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

이렇게 `js` 명시하지 않아도 사용할 수 있다.

딱히 `"type": "module"` 이것이 있는 것도 아닌데도,

또한 `require/module.exports`, `import/export` 둘 다 사용할 수 있다. 이런 식으로

```jsx
const Hello = require('./Hello');
import Bye from './Bye';

export default function App() {
  return (
    <div className="App">
      <Hello />
      <Bye />
    </div>
  );
}
```

이를 도와주는 것이 [web](https://zenn.dev/oukayuka/books/cb48853473000fb7fcde/viewer/841be2e83e89b9896cb6)[pack](https://qiita.com/minato-naka/items/39ecc285d1e37226a283#importrequire%E4%B8%A1%E6%96%B9%E3%82%92%E3%81%A9%E3%81%AE%E7%92%B0%E5%A2%83%E3%81%A7%E3%82%82%E5%8B%95%E3%81%8F%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF)과 [babel](https://www.wakuwakubank.com/posts/466-javascript-module-import-export/)

혹은 [확장자 명시](https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/)로 가능하다

### webpack 사용방법

> 글이 길어지고 딴 길로 새므로 추후 다른 글에서 기술

### 확장자 명시

```json
// package.json
"type":"module",
```

```js
// export_js.js
export default function export_js() {
  return console.log("hi i'm export/js");
}
```

```js
// export_mjs.mjs
export default function export_mjs() {
  return console.log("hihi i'm export/mjs");
}
```

```js
// module_exports_cjs.cjs
function module_exports_cjs() {
  return console.log("hi i'm module_exports/cjs");
}
module.exports = module_exports_cjs;
```

```js
// module_exports_js.js
function module_exports_js() {
  return console.log("hihi i'm module_exports/js");
}
module.exports = module_exports_js;
```

```js
// main.js
import export_js from './export_js.js';
import export_mjs from './export_mjs.mjs';
import require_cjs from './require_cjs.cjs';
import require_js from './require_js.js';

export_js(); // hi i'm export/js
exprot_mjs(); // hihi i'm export/mjs
require_cjs(); // hi i'm require/cjs
require_js(); // SyntaxError: The requested module './require_js.js' does not provide an export named 'default'
```

:::caution
반대로 `"type": "commonjs"` 혹은 명시하지 않았을 때

`js/mjs` 파일을 `export default`해서 `require`로 불러올 수 없었다.
:::

## 결론

무엇인가 아는 것 같아도 실제로는 잘 모르고, 모르는 것 같으면 진짜 모른다...

모듈 하나도 이렇게 복잡하다는 사실에 혼란은 가중된다.

만약 어떤 것을 하나 선택해야한다면 `import/export`가 좋다 생각한다.

코드가 더 간결하고 명확하다 느끼기 때문이다.

> [참조한 글](https://stackoverflow.com/questions/56068126/is-it-possible-to-use-both-require-and-import-together-with-webpack)에 의하면 webpack에서도 CommonJS는 많은 [`edge case`](https://en.wikipedia.org/wiki/Edge_case)가 만들어지기에 권장하지 않는다. 이러면 정적분석이 어렵고, 트리쉐이킹, 최적화 "bails out"이 일어난다. 결과, 읽힐 가능성이 높은 JS 코드에 다양한 dead/unused 코드가 포함되기 때문

## 읽을거리

- https://qiita.com/minato-naka/items/39ecc285d1e37226a283
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x#:~:text=The%20major%20difference%20between%20require,The%20future%20version%20of%20Node
- https://stackoverflow.com/questions/56068126/is-it-possible-to-use-both-require-and-import-together-with-webpack
- https://www.wakuwakubank.com/posts/466-javascript-module-import-export/
- https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
- https://nodejs.org/dist/latest-v16.x/docs/api/modules.html
- https://nodejs.org/dist/latest-v16.x/docs/api/esm.html
- https://zenn.dev/oukayuka/books/cb48853473000fb7fcde
- https://insights.untapt.com/webpack-import-require-and-you-3fd7f5ea93c0
