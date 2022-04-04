---
slug: follow-webpack-concepts
title: webpack 메모 (concepts)
authors: rewrite0w0
tags: [npm, webpack, 감상]
---

# webpack 메모 (concepts)

[webpack](https://webpack.kr/concepts/) 사이트를 읽으며 느낀 점을 적는 곳.
계속 추가될 수도 있다.

# concepts

## 왜 webpack인가?

### 번들러 사용 이전

브라우저에서 JS 동작하기 위해서는

- 각 기능 스크립트를 추가 **(네트워크 병목을 유발하며 확장이 어렵다.)**
- 모든 프로젝트를 하나의 거대한 `.js`에 넣는다 **(가독성, 유지보수에 애로사항이 꽃핀다.)**

이렇게 2가지 방법이 있었다.

#### IIFE

그래서 `IIFE`를 사용해서 파일을 안전히 연결/결합할 수 있었다.

`IIFE`를 사용은 `Make`, `Gulp`, `Grunt` 등 **태스크러너들이 모든 프로젝트 파일을 연결**하여 **사용하기에 재사용하기 쉽지만**, **빌드 최적화를 더 어렵게 만들며, 하나를 바꿔도 전체를 빌드**해야 했다.

#### Node.js의 탄생

Node.js가 탄생되었을 때는, 추가할 수 있는 `스크립트 태그`, `html 파일`이 없었지만 `require`을 도인한 CommonJS로 인해 현재 파일에서 모듈을 불러오고 사용할 수 있게 되었다.
이는 필요한 곳에 모듈을 가져와 **유효범위 문제도 해결**했다.

#### npm + Node.js + modules

JS는 이곳 저곳에 사용되고 있었지만, 브라우저의 CommonJS 지원이 없었다. Node.js 프로젝트에서는 훌륭했지만 브라우저에서는 모듈을 지원하지 않았으므로 Browserify, RequireJS, SystemJS 같은 번들러 도구들이 만들어졌다.

#### ESM

모듈이 ECMAScript 표준에서 공식 기능이 되었다. 그러나 여전히 브라우저에서는 불완전하고 **번들링이 더 빠르므로 권장되는 방법**이다.

#### Automatic Dependency Collection

`태스크 러너`, `Google Closure Compiler` 조차 **모든 의존성을 *수동*으로 선언해야한다.** `webpack` 같은 번들러는 자동으로 빌드하고, 여러 설정으로 `디펜던시 그래프`를 추론한다. 이는 `플러그인`, `로더`와 함께 큰 역할을 한다.

#### 그래서...

- 모듈을 작성할 수 있으며,
- 어떠한 포맷 모듈도 지원하며,
- 리소스와 에셋을 동시에 처리한 것.

이것이 `webpack`이 **존재하는 이유**이다.
JS 앱을 번들로 묶을 수 있는(ESM, CommonJS 둘 다!) 도구이며, 다양한 에셋을 지원하도록 **확장**도 가능하다.

webpack은 성능/로딩 시간을 중요히 여긴다.

## webpack 안에는...

입력 - 출력 사이에는 모듈, 엔트리포인트, 청크 등등 많은 것이 있다.

### main

- 프로젝트에서 사용하는 모든 파일은 **모듈**이다.
- 모듈은 서로 사용하며 **그래프**를 형성한다.
- 번들링 과정에서 **모듈**은 **청크**로 결합된다.
- 이는 엔트리 포인트를 설명할 때 **하나의 청크**로 **청크 그룹**을 만드는 것이다.

```js
// webpack.config.js

module.exports = {
  entry: './index.js',
};
```

- `main`으로 청크 그룹 하나가 생성된다.(이는 기본 값임)
- 이 청크 그룹에는 `index.js` 모듈이 포함되어 있다.
- `index.js`에서 import를 처리하면 새 모듈이 청크에 추가된다.

**다른 예제**

```js
// webpack.config.js
module.exports = {
  entry: {
    home: '.home.js',
    about: './about.js',
  },
};
```

- `home`, `about` 두 개의 청크 그룹이 생성된다.
- 각 그룹은 모듈이 있는 청크를 가지고 있다.
- `home`은 `home.js` 청크를 갖는다.
- `about`은 `about.js` 청크를 갖는다.

> 청크 그룹에는 하나 이상의 청크가 있을 때도 있다.

### 청크

청크는 2가지 형태로 제공된다.

- `초기 청크` 엔트리 포인트에 명시된 **모든** 모듈/의존성 포함.
- `비초기 청크` 지연 로드될 수 있는 청크, `동적 import` 혹은 `SplitChunksPlugin` 사용 중에 나타날 수 있다.

- 청크에는 해당 **에셋**이 있다.
- 에셋은 번들링 결과가 출력된 파일이다.
- [특별한 주석](https://webpack.kr/api/module-methods/#magic-comments)으로 청크 이름을 지정할 수 있다.

### 출력

출력 파일 명은 설정에서 두 필드에서 영향을 받는다.

- **output.filename** `초기` 청크 파일에서 사용
- **output.chunkFilename** `비초기` 청크 파일에서 사용
- 청크를 사용해야 할 때는 **output.filename**를 사용한다.

이 필드는 플레이스 홀더를 제공한다.

- `[id]` 청크 ID
- `[name]` 청크 이름(이름이 없다면 `ID`가 사용된다)
- `[contenthash]` 출력 파일 콘텐츠의 `md4-hash`

## Concepts

- `webpack`은 정적 모듈 번들러이다.
- webpack이 앱을 처리할 때, 프로젝트에 필요한 **모든 모듈**을 매핑하며, **하나 이상의 번들**을 생성하는 디펜던시 그래프를 만든다.

> webpack@4.0.0 이후로는 설정 파일을 필요로하지 않는다. 그러나 멋지게 사용하기 위해서는 필요하다.

## 핵심개념

- [Entry](#Entry)
- [Output](#Output)
- [Loader](#Loader)
- [Plugin](#Plugin)
- [Mode](#Mode)
- [브라우저호환성](#브라우저호환성)

## Entry

**엔트리 포인트**는 **디펜던시 그래프**를 만들기 위해 사용하는 모듈이다.
`webpack`은 엔트리 포인트가 의존하는 다른 모듈과 라이브러리를 찾아낸다.

기본적으로

```js
// webpack.config.js
module.exports = {
  entry: {
    main: 'file.js',
  },
};
```

또한 **엔트리 포인트**는 하나 이상을 지정할 수 있다.

```js
// webpack.config.js
module.exports = {
  entry: ['file1.js', 'file2.js'],
  output: {
    filename: 'bundle.js',
  },
};
```

객체 구문도 가능하다.

```js
// webpack.config.js
module.exports = {
  entry: {
    app: './src/app.js',
    adminApp: '.src/adminApp.js',
  },
};
```

### 엔트리 포인트의 속성들

- `dependOn` 현재 엔트리 포인트가 의존하는 엔트리 포인트.
- `filename` 디스크에 있는 각 출력 파일 이름 지정.
- `import` 시작 시 로드되는 모듈.
- `library` 현재 엔트리에서 라이브러리를 번들링하기 위한 옵션.
- `runtime` 런타임 청크의 이름, 지정하지 않으면 기존 엔트리 포인트의 이름이 기본값이다.
- `publicpath` 브라우저에서 참조할 때, 엔트리 출력 파일 URL 주소 지정. `output.publicPath` 참조 필

### 여러 페이지일 때

```js
// webpack.config.js
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js',
  },
};
```

이는 3개의 개별 디펜던시 그래프를 원한다는 뜻이다.

#### 왜 굳이 이럴까?

`optimization.splitChunks` 사용하여, 각 페이지 간 공유되는 앱 코드 번들을 만드는 것이다.

```js
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

이렇게 적으면 **중복 의존성**이 제거된다.

> [참조](https://webpack.kr/guides/code-splitting/#splitchunksplugin)

## Output

생성된 번들을 내보낼 위치와 이름을 지정하는 방법을 담당한다.
기본값으로 지정된 것은

- 파일 `./dist/main.js`
- 폴더 `./dist`

**엔트리 포인트**는 `여러 개`일 수 있으나, **출력**은 하나여야 한다.

설정할 때는 최소한 `output.filename`은 있어야 한다.

```js
// webpack.config.js
module.exports = {
  output: {
    filename: 'bundle.js',
  },
};
```

이렇게하면 `bundle.js`이 `dist` 폴더에 두둥등장.

### 엔트리 포인트가 여럿일 때는

```js
// webpack.config.js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
};
```

### 다른 용례

`CDN`과 `해시`를 사용하는 예제

```js
// webpack.config.js
module.exports = {
  // ...
  output: {
    path: '/home/proj/cdn/assets/[fullhash]',
    publicPath: 'https://cdn.example.com/assets/[fullhash]/',
  },
};
```

#### `publicPath`를 잘 모를 경우

- 해당 설정을 비워둔다.
- 엔트리 포인트 파일의 `__webpack_public_path__`를 통해 동적 설정한다.

## Loader

webpack은 JavaScript와 JSON만 이해한다.
**로더**를 사용해서 다른 것도 처리해보자.
이는 **모듈로 변환**해서, 앱에서 사용하거나 디펜던시 그래프에 추가한다.

**Loader**는 두 가지 속성을 가진다.

- **변환이 필요한** 파일을 식별하는 `test`
- **변환을 수행할 때** 사용되는 로더를 지시하는 `use`

- 한 마디로 모듈 소스 코드에 변경 사항을 적용하는 것
- `import`, `로드`할 때 전처리 할 수 있다.
- 이는 `태스크`와 유사하다 볼 수 있다.
- 빌드 단계에서 유용한 훌륭한 대화수단이다.

> 간단한 예시 : TypeScript를 JavaScript로 변환
> 이미지를 데이터 URL로 로드

```bash
# 모든 .css 파일에 css-loader 적용, .ts 파일에는 ts-loader 적용한다는 지시를 해보자.
npm install --save-dev css-loader ts-loader
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
```

### 사용 방법

- webpack.config.js 파일에 지정 (권장)
- inline에 `import`로 지정

```js
import Styles from 'styles-loader!css-loader?modules!./styles.css';
```

> [참조](https://webpack.kr/concepts/loaders/#inline)

### 설정

- `module.rules` 사용하면 여러 로더 지정 가능
- 로더는 **오른쪽 => 왼쪽** 혹은 **아래 => 위**로 평가/실행

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
```

- 로더는 연결할 수 있다.
- 역순 실행이다.
- webpack은 마지막 로더가 JavaScript 반환할 것이라 예상한다.
- 동기/비동기가 가능하다.
- 로더는 Node.js에서 실행된다.
- `options`를 구성할 수 있다. (`query`는 비권장)
- 일반 모듈은 `loader` 필드가 있는 `package.json`로 `main`과 `로더`를 내보낼 수 있다.
- **플러그인**은 **로더**에 더 많은 기능을 제공한다.
- 로더는 추가로 임의 파일을 생성 가능하다.

**로더는 전처리 기능을 통해 결과물을 커스터마이즈하며, 사용자는 압축 , 패키징, 번역 등등 세밀한 로직을 추가할 수 있다.**

## Plugin

**로더는 특정 유형의 모듈 변환을 담당**
**플러그인은 번들 최적화, 에셋관리, 환경 변수 주입 등 광범위한 작업을 담당**

`require()`를 통해서 요청하며, `plugin` 배열에 추가한다.

> 의문점, 그럼 import/export 로는 안되나?

- **플러그인**은 webpack의 알파이자 오메가.
- webpack은 webpack 설정에서 사용하는 것과 동일한 플러그인 시스템으로 구축.
- **로더**가 할 수 없는 다른 모든 작업을 한다.
- `webpack 플러그인`은 `apply` 메서드를 가지고 있는 객체이다.
- 매개변수 및 옵션을 사용할 수 있으므로 `plugin` 속성에 `new` 인스턴스를 전달해야 한다.

```js
// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm 으로 설치됨
const webpack = require('webpack'); //빌트인 플러그인에 접근하기 위함
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
```

## Mode

`development`, `production`, `none` 설정이 가능하며 기본 값은 `production`이다.

## 브라우저호환성

webpack은 `ES5` 호환되는 모든 브라우저를 지원한다.
`import()`, `require.ensure()`을 위한 `Promise`를 요구한다.

## 설정

webpack 설정이 정확히 동일할 경우는 거의 없다.
이는 **결국 webpack 설정파일도 JavaScript 파일이기 때문**

#### 이런 일을 할 수 있다.

- require(...) 통해 다른 파일 가져오기
- require(...) 통해 npm 유틸리티 사용
- `?:` 연산자 같은 제어 흐름 표현식 사용
- 자주 사용되는 값에 상수/변수 적용
- 설정 일부를 만들어 내는 함수 작성/실행

#### 이런 행위는 피하자.

- webpack CLI 사용 시에, 자체 CLI 작성하거나 `--env`사용하는 대신 CLI 인자에 접근하기
- 결정되지 않은 값 내보내기
- 긴 설정 작성(여러 파일로 분할할 것)

#### 다중 타겟

단일 설정 객체, 함수, promise를 내보낼 수 있는 것 처럼 다중 설정도 할 수 있다.

> [다중 설정 내보내기](https://webpack.kr/configuration/configuration-types/#exporting-multiple-configurations)

#### 사용 가능한 언어들

반드시 JavaScript로 할 필요는 없다.
TypeScript, CoffeeScirpt, Babel/JSX 등으로도 가능

## Module

**모듈형 프로그래밍에서 개발자는 개별 기능을 프로그램(모듈)로 나눈다.**

- 이렇게 하면 검증 / 디버깅 / 테스트가 간단하다
- 견고한 추상화 / 캡슐화 가능

일관성 있는 설계와 명확한 목적을 알 수 있다.

### webpack module

webpack은 다양하게 의존성 표시 가능하다

- ES2015 `import`
- CommonJs `require()`
- AMD `define` / `require`
- css/sass/less `@import`
- 스타일 시트 `url(...)`
- 이미지 `url`
- HTML `<img src=...>`

> 의문점 : 혼합해서 사용가능하나?

### 지원하는 모듈타입

- ECMAScript 모듈
- CommonJs 모듈
- AMD 모듈
- Assets
- WASM 모듈

또한 webpack은 여러 언어로 작성된 모듈과 로더를 통해 다양한 전처리기를 지원한다.
또한 로더는 네이티브가 아닌 모듈을 어떻게 처리하며 의존성을 번들에 포함할지 정의한다.

#### 가능목록

- CoffeeScript
- TypeScript
- ESNest(Babel)
- Sass
- Less
- Stylus
- Elm
- 등등...

## Module Resolution

리졸버는 절대 경로로 모듈을 찾는데 도움이 되는 라이브러리이다.

### 절대경로

```js
import '/home/me/file';
import 'C:\\Users\\me\\file';
```

절대 경로이므로 굳이 건들일 것이 없다.

### 상대경로

```js
import '../src/file1';
import './file2';
```

`import`, `require`가 발생하는 리소스 파일 폴더를 `현재 폴더`로 간주한다.
`import/require` 지정된 상대 경로는 이 경로에 결합되어 **모듈에 대한 절대 경로를 생성**한다.

### 모듈경로

```js
import 'module';
import 'module/lib/file';
```

- 모듈은 `resolve.modules`에 지저된 모든 폴더 내에 검색
- `resolve.alias`로 원래 모듈 경로를 대체 경로로 바꿀 수 있음

### 캐싱

- 모든 파일 시스템 액세스가 캐시되므로, 동일 파일에 대한 여러 병렬/직렬 요청이 더 빠르게 처리됨.
- `watch 모드`에서는 수정된 파일만 캐시에서 제거.
  > [참조](https://webpack.kr/configuration/resolve)

## Module Federation

> 추후 추가

## 실제로 사용해보자!

지금까지 기본적인 개념 같아 보이는 것을 메모했다.
이제부터는 실제로 해보자.

---

> inspired by [역시 webpack이 뭔지 모르겠다.](https://zenn.dev/antez/articles/58307946cf4f3e)
