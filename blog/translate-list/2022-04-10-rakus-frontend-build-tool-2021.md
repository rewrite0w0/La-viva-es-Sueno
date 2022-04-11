---
slug: rakus-frontend-build-tool-2021
title: 프론트엔드 빌드 도구를 조사했다.
authors: rewrite0w0
tags: [frontend, Node.js, webpack, esbuild, swc, snowpack, vite, 번역]
---

> [글](https://tech-blog.rakus.co.jp/entry/20210930/frontend)

## 머릿말

안녕하세요 저는 프론트엔드 팀에 소속되어 있습니다.

제가 담당하고 있는 프로젝트는 현재 Vue2를 사용하며, webpack(vue-cli)를 사용하여 빌드를 하고 있습니다.

webpack 자체는 꽤 유용한 도구입니다만, 굳이 불만을 들어보라면, 빌드가 늦다는 것이겠지요.

캐시나 처리 병렬화등 고속화하기 위하여, 빌드 설정 최적화를 하고 있습니다만 그래도 늦습니다.

작은 프로젝트라면 신경쓰지 않더라도, 크면 클수록 문제가 눈에 들어와 무시할 수 없습니다.

이글에서는 고속 빌드이 가능한 신흥세력을 몇 소개하려합니다.

## 우선 webpack

비교대상이 없으면 평가하기 어려우니 처음에는 webpack5 + ts-loader를 사용하겠습니다.

React + TypeScript + Material UI로 만들어진 [샘플 프로젝트](https://github.com/mui-org/material-ui/tree/master/examples/create-react-app-with-typescript)를 빌드하겠습니다.

TypeScript 타입 체크는 [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)를 사용해 각 프로세스로 실행하려합니다.

```js
// webpack.config.js

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const loaders = {
  ts: 'ts-loader',
};

const loaderOptions = {
  ts: {
    transpileOnly: true,
  },
};

module.exports = (env = {}) => ({
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: loaders[env.loader],
          options: loaderOptions[env.loader],
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    env.tscheck == 'yes' ? new ForkTsCheckerWebpackPlugin() : false,
  ].filter(Boolean),
});
```

```json
// package.json

"scripts": {
    "build:webpack-ts": "webpack --progress --env loader=ts",
    "build:webpack-ts-tscheck": "webpack --progress --env loader=ts tscheck=yes",
}
```

결과는 이하처럼 됩니다.

다음에 소개하는 esbuild와 swc는 타입체크를 하지 않기에, 타입체크를 하지 않은 경우도 측정했습니다.

| 타입체크 | time  |
| -------- | ----- |
| O        | ~10s  |
| X        | ~4.5s |

## esbuild

[esbuild](https://esbuild.github.io/)는 Go로 구현된 JavaScript / TypeScript 빌드 도구입니다.

트랜스파일에서 번들, minify까지 해줍니다.

그리고 압도적인 빠름을 자랑합니다.

공식 문서에 의하면 그 속도는 webpack이나 Rollup의 수십배.

이것만으로 빌드가 1분 걸리던 것이, 1초 정도로 정리가 됩니다. 압도적입니다.

또 esbuild에는 플러그인이 이용가능하기에, 빌드 프로세스의 다양한 부분에 처리를 추가할 수 있는 것이 가능합니다.

하지만 [기존 플러그인](https://github.com/esbuild/community-plugins)이 아직 충분치 않으므로, 필요에 따라 스스로 만들 필요가 있을지도 모르겠습니다.

자세한 내용은 [이것](https://esbuild.github.io/plugins/)을 참조해주세요

그럼 실제로 esbuild를 사용해 같은 프로젝트를 빌드해보겠습니다.

```bash
npm i --save-dev esbuild
```

```js
// build.js

const { build } = require('esbuild');

build({
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  target: 'es2015',
  platform: 'browser',
  entryPoints: ['src/index.tsx'],
  outdir: 'dist',
  bundle: true,
  minify: !process.env.NODE_ENV,
  sourcemap: process.env.NODE_ENV,
}).catch(() => process.exit(1));
```

```json
// package.json

"scripts":{
    "build:esbuild" : "set NODE_ENV=\"development\" && node ./build.js",
}
```

빌드에 걸린 시간은 **~0.8s(!)** 정도 였습니다.

빠르네요. 수십 배까지는 아니었지만, 4.5초와 1초 이하는 체감이 다릅니다.

일단 빠르다는 건 알겠습니다만, 제품에 도입하기에는 주의가 필요합니다.

[공식에서도 언급한 것처럼](https://esbuild.github.io/faq/#upcoming-roadmap), 현재 v1.0.0에도 도달하지 않은 esbuild는 production-ready가 아닙니다.

거기에 webpack 프로젝트에는 비교적 도입할만한, [esbuild-loader](https://github.com/privatenumber/esbuild-loader)를 사용하는 것이 가능합니다.

이것은 ts-loader나 babel-loader의 대체할 수 있는 로더입니다.

webpack로 빌드할 때 esbuild의 일부를 가볍게 이용할 수 있습니다.

```bash
npm i --save-dev esbuild-loader
```

```js
// webpack.config.js

// ...

const loaders = {
  esbuild: 'esbuild-loader',
};

const loaderOptions = {
  esbuild: {
    loader: 'tsx',
    target: 'es2015',
  },
};

// ...
```

```json
// package.json

"scripts": {
    "build:webpack-esbuild": "webpack --progress --env loader=esbuild",
}
```

ts-loader에서 esbuild-loader를 사용하면 빌드 시간이 **~4.2s**정도입니다.

조금 빨라..졌지요. 아마 esbuild-loader의 도입을 검토하고 있는 분은 대부분은 빌드 시간의 고속화를 목표하고 있다 생각합니다.

고집부리면서 주장하지는 않겠습니다만, esbuild-loader의 도입만으로는 큰 개선은 무리라 봅니다.

## swc

[swc](https://swc.rs/)는 [Next.js v11에도 들어가 있는](https://nextjs.org/blog/next-11-1#adopting-rust-based-swc) JavaScript / TypeScript 트랜스파일러입니다.

이것은 Rust로 구현되어있습니다.

swc는 번들러로 기능을 갖지 않으며, 번들러는 [spack](https://swc.rs/docs/spack-basic) 등을 이용할 필요가 있습니다.

esbuild와 같이 swc에도 webpack으로 사용가능한 로더 [swc-loader](https://github.com/swc-project/swc-loader)가 있으니 이를 사용해봅시다.

```bash
npm i --save-dev @swc/core swc-loader
```

```js
// webpack.config.js

// ...

const loaders = {
  swc: 'swc-loader',
};

const loaderOptions = {
  swc: {
    sync: true,
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
      },
    },
  },
};

// ...
```

```json
// package.json

"scripts": {
    "build:webpack-swc": "webpack --progress --env loader = swc",
}
```

빌드에 걸린 시간은 **~4.1s**정도 였습니다. esbuild-loader와 같은 느낌입니다.

## Snowpack

[Snowpack](https://www.snowpack.dev/)도 webpack이나 Parcel 등 번들러 대체수단으로 등장했습니다.

webpack 등 기존의 빌드도구는 파일을 하나 저장할 때마다, 애플리케이션 전체를 재구축해서 번들할 필요가 있었습니다.

여기서 Snowpack은 (개발시에도) 번들을 하지 않는 접근을 선택했습니다.

JavaScript ESM을 활용하는 것으로 개발중에는 번들을 하지 않으며, 각 파일을 그때 그때 읽기로 했습니다.

이에 따라, 대규모 프로젝트에서도 고속으로 개발 서버를 기동하는 것이 가능해졌습니다.

각 파일은 1번 빌드되어, 캐시되어집니다.

파일이 변경되면 그 파일만 빌드하므로, 차이가 나는 부분을 한 번에 완료합니다.

또, Snowpack에는 앞에서 설명드린 esbuild가 들어가있어서, 본 빌드에서도 esbuild를 사용해 번들하는 것이 가능합니다.

단, esbuild는 전술했듯이 숙성된 것이 아니므로 [webpack 플러그인을 사용하는 것을 추천합니다.](https://www.snowpack.dev/guides/optimize-and-bundle)

(Rollup 플러그인도 있습니다.)

개발자에게는 빈번히 실행하는 개발시 빌드 시간이 단축, 그리고 개발자체험 향상과 개발 도입의 편리함. 두 마리 토끼를 잡을 수 있다 할 수 있습니다.

```bash
npm install --save-dev snowpack @snowpack/plugin-webpack
```

```js
// snowpack.config.js

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: '/dist',
  },
  plugins: [['@snowpack/plugin-webpack']],
};
```

```json
// package.json

"scripts": {
    "start": "snowpack dev",
    "build": "snowpack build"
}
```

실제로 빌드해보니, 개발 서버가 **~1s** 수준으로 기동했습니다.

소문대로 빠릅니다. 새로운 것을 넣어도 순간입니다.

## Vite

[Vite](https://ja.vitejs.dev/)도 Snowpack와 꽤 닮은 목적으로 만들어진 No-bundle 도구입니다.

의존관계의 사전 번들에는 esbuild를 본 빌드에 Rollup를 사용합니다.

```bash
npm install --save-dev vite @vitejs/plugin-react-refresh
```

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
  root: './',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@/': path.join(__dirname, './src'),
    },
  },
});
```

```json
// package.json

"scripts": {
    "start": "vite",
    "build": "vite build"
}
```

Snowpack과 같게 개발 서버가 **~1s**초 정도로 기동했습니다.

## 정리

![benchmark](https://cdn-ak.f.st-hatena.com/images/fotolife/t/t_okym/20210929/20210929160627.png)

esbuild는 트랜스파일도 번들도 고속으로 동작합니다.

이 빠름을 맛보면 webpack으로는 돌아가고 싶지 않아집니다만, 다양한 플러그인을 사용한 어느 정도의 규모의 webpack 프로젝트를 esbuild으로 바꿔끼는 것은 현실적으로 어려운 점도 있을 것입니다.

swc도 고속입니만, 제품에 이용하기에는 spack가 중동무이한 상태라는 인상이 강했습니다. 다만, Next.js이나 Deno에는 내부적으로 사용되어 있으므로, 개발자가 의식하지 않아도 그 혜택을 받을 수 있을 것입니다.

Snowpack과 Vite는 고속 개발 빌드에 따른 개발자 체험 향상과 안정된 webpack, Rollup에 의한 본 빌드를 겸한 것이 준비되어진 도구입니다.

제가 소속되어 있는 팀은 Vue2를 사용하고 있으므로, Vue3으로 올릴 타이밍에 맞춰 Vite의 도입도 할 수 있다면 좋겠는데~ 정도로 생각하고 있습니다.

여기서 소개하지 못한 것도 있으므로, 여러분도 부디 다양한 빌드 도구를 조사해 시험해 보는 것은 어떨까요.
