---
slug: yappari-webpack-ga-wakaranai-episode2
title: 역시 webpack이 뭔지 모르겠다. (에피소드2)
authors: rewrite0w0
tags: [npm, webpack, 번역]
---

# [역시 webpack이 뭔지 모르겠다. (에피소드2)](https://zenn.dev/antez/articles/638382faa06bd7)

## 들어가기

이 글은 [역시 webpack이 뭔지 모르겠다. (에피소드1)](./yappari-webpack-ga-wakaranai-episode1.md)에서 이어집니다. [애초에 npm이 뭔지 모르겠다](https://zenn.dev/antez/articles/a9d9d12178b7b2)도 참고해주시길 바랍니다.

> webpack를 사용하면 빌드, 디플로이 등 같은 단어가 빈번하게 등장합니다. **빌드**란 복수의 파일을 모아 실행가능한 파일로 만드는 것으로, webpack은 `webpack` 명령어로 파일을 만들 수 있습니다. 디폴로이란 그 실행 가능한 파일을 실행할 환경에 설치, 실행하는 것입니다. 예를 들면 webpack은 빌드한 파일을 서버에 두어 실행하는 것입니다.

# 로더(Loader)?

webpack은 기본적으로 JavaScript 데이터만 다룹니다. 그러나 CSS, 이미지등을 JavaScript 객체화해서 webpack에서 처리할 수 있도록 모듈화하는 것이 로더입니다. 종류에 따라 맞는 로더들이 있습니다.

CSS는 그렇다쳐도, 이미지를 JavaScript화 하는 것은 신비로운 이야기 같습니다만, 이미지는 기본적으로 데이터이므로, JavaScript에서 사용할 수 있도록 데이터 변환할 수 있습니다.

## 로더, 번들에서 주의점

이 자원들은 JavaScript 데이터로 해서 어떻게 이용할까요. webpack은 모듈 번들이므로 이들을 JavaScript 데이터로 하나로 만듭니다.
단 여기서는 주의점이 있습니다.
뭐든 번들링하는 건 좋은 것이 아닙니다.

데이터를 모아서 통신을 적게하면 게시속도(성능)를 올릴 수 있지만, **번들은 양날의 검**이기도 해서, 대신 데이터 크기를 늘립니다.
다 JavaScript로 만들어버리면, JavaScript 용량이 늘어나는 것은 물론, 번들링 한 CSS, 이미지 등의 데이터는 **원래 크기보다 더 커집니다.**

그럼 왜 번들링하는 것인가, 그럼에도 불구하고 통신을 적게하면 성능이 좋기 때문입니다. 다만 이는 경우에 따라입니다. 예를 들어 크지 않은 이미지 여러 개를 통신한다면, JavaScript에 번들링하는게 좋은 성능일지도 모르나, 커다란 이미지 1개를 보내는데 번들링하면, 그 한 번의 통신 비용보다 데이터 크기 비용이 더 커지기도 합니다. 이를 분별하는 것이 기술자의 실력이기도 합니다만, webpack 자체만으로 어느 정도 설정을 줄 수도 있습니다.

## CSS

그럼 대표적인 로더인 `css-loader`를 사용해서, 로더의 사용 방법을 설명하겠습니다.

CSS를 webpack에서 다루기 위해서는 css를 JavaScript로 번들링하는 `css-loader`랑 번들링된 CSS를 HTML에서 스타일시트로 읽기 위한 `style-loader`가 필요합니다.

자, 설치합시다.

```bash
npm i -D style-loader css-loader
```

### webpack.config.js

`module` 프로퍼티를 추가해 rules을 설정합시다.

```js
module.exports = {
  module: {
    rules: [
      {
        text: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

앞 편에서 이어 작성하면 이런 코드일 것입니다.

```js
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: `./index.js`,

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

이 글의 제목은 [역시 webpack이 뭔지 모르겠다]인데, **지금부터가 뭔지 모르겠다 입니다.** 이 시점부터 `webpack.config.js`가 무지하게 복잡해집니다.

위에 설정이 어떻게 돌아가는 것인지 한 눈에 들어오시나요?
[에피소드1](./yappari-webpack-ga-wakaranai-episode1.md)에서 설명했지만, **webpack 설정은 그저 프로퍼티에 값을 설정할 뿐**입니다.

예시를 들면 이렇습니다. 잘 읽어주세요.

- `module` 객체에서 `exports` 프로퍼티로 `module` 프로퍼티를 설정했다.
- 그 `module` 프로퍼티에 배열 `rules` 프로퍼티를 설정해 객체를 대입, `test` 프로퍼티, `use` 프로퍼티를 설정했다.
- `test` 프로퍼티에는 정규표현, `use` 프로퍼티에는 배열을 설정했다.

"." 연산자로 표현하면 이런 식입니다.

```js
module.exports.module.rules[0].test = /\.css$/;
module.exports.module.rules[0].use[0] = 'style-loader';
module.exports.module.rules[0].use[1] = 'css-loader';
```

이렇게 보면 그나마 보기 괜찮지 않나요.
이게 보기 거시기하면 JavaScript 객체에 대한 이해를 먼저 해야합니다. Gulp가 눈에 잘 안 들어오는 것 또한 같은 이유입니다.

그럼 각 프로퍼티를 설명하겠습니다.

- **module**
  로더 등의 모듈을 설정하는 프로퍼티입니다.

- **module.rules**
  각 로더를 설정하는 프로퍼티입니다. 배열이며, 각 요소에는 각 로더의 규칙을 설정합니다.

- **rules.test**
  프로퍼티 명에서 연상하기 어렵지만 정규표현 등으로 해당하는 파일을 지정합니다.

- **rules.use**
  사용하는 로더를 지정하는 프로퍼티입니다.

여담으로 webpack은 `test`, `use` 같이 **초보자스러운 프로퍼티명**이 많은데, 이게 이해하기 어려운 요인 중 하나이기도 합니다.
결국 webpack이 어렵게 느껴지는 것은 프로그래밍이 어느 정도 되는 사람이기 때문이기도하니, 안심해셔도 좋습니다.

### 빌드

그럼 실제 파일으를 빌드해보죠.
@`index.html`은 빌드하지 않습니다. 직접 빌드되는 폴더에 둡시다.

```js
// ./src/index.js
import '.style.css';
```

```css
/* ./src/style.css */
body {
  color: red;
  font-weight: bold;
}
```

```html
<!-- ./dist/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="./main.js"></script>
  </head>
  <body>
    <p>TEST</p>
  </body>
</html>
```

이걸 빌드하면 `index.html`에서는 CSS파일을 읽지 않아 보이지만, 번들링 된 `main.js`에 스타일시트로 반영되어 있습니다.

### options

source 프로퍼티에서 소스맵 출력 설정을 했었습니다. 각 로더의 소스맵을 넣기 위해서는 `sourceMap` 프로퍼티를 설정할 필요가 있습니다. `true`, `false`로 빌드, 미설정 빌드 가능합니다.

이렇게 사용한 객체는 `options` 프로퍼티에 설정할 수 있습니다.

```js
module: {
  rules: [
    {
      test: /\.css/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          }
        }
      ]
    }
  ]
},
```

이제 `module` 프로퍼티에는 css-loader 외에도 로더를 설정할 것입니다. 그 때마다 sourceMap 프로퍼티 설정해야 합니다.

```js
// MODE 변수로 mode 값 설정
const MODE = "development";
// MODE 변수가 development라면 sourceMapStatus를 true로 한다.
const sourceMapStatus = MODE === "development";

module.exports = {
  mode: MODE,
  module: {
    // 중략
    options: {
      sourceMap: sourceMapStatus
    }
};
```

`css-loader`에서 자주 사용하는 객체 중 다른 하나는 `url` 옵션입니다. 이 옵션은 CSS 안에 `url()` 유효/무효 설정입니다. 기본적으로는 `true`입니다.

```js
options: {
  url:false,
  sourceMap: sourceMapStatus,
}
```

### Sass

CSS 다음은 Sass입니다.
웹 디자이너부터 프론트엔드 엔지니어까지 스타일 시트 코딩에는 거의 Sass를 사용한다 봅니다.

Sass를 CSS로 변환하는 로더로는 **sass-loader**를 사용합니다. 또한 컴파일러를 행하는 모듈로 **sass**가 필요하므로 같이 설치합시다.

```bash
npm i -D sass-loader node-sass
```

`webpack.config.js`를 설정합시다.
우선은 `test` 프로퍼티를 `sass`, `scss`를 읽을 수 있도록 `use` 프로퍼티를 사용해서 로더를 설정하면 끝입니다. 사용하는 로더를 설정은 뒤에서부터 역순으로 적용됩니다.

> [1, 2, 3] >> 3, 2, 1 순으로 읽음

```js
module: {
  rules: [
    {
      test: /\.(sass|scss|css)$/,
      use:['style-loader','css-loader','sass-loader']
    }
  ]
},
```

실행에 필요한 파일도 준비합시다.

```js
// ./src/index.js
import './style.scss';
```

```scss
// ./styles.scss
$color: red;
$weight: bold;

body {
  color: $color;
  font-weight: $weight;
}
```

```html
<!-- ./dist/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="./main.js"></script>
  </head>
  <body>
    <p>TEST</p>
  </body>
</html>
```

빌드하면 `style.scss`가 CSS로 변환되어 `main.js`에 번들링됩니다.

또 CSS에서 언급한 것처럼, 로더를 나눠서 설정할 수 있습니다.

```js
module: {
  rules: [
    {
      test: /\.(sass|scss|css)$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            url: false,
            sourceMap: true,
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          }
        }
      ]
    }
  ]
},
```

다시 한 번 말씀드리면 위의 예시는 이러한 순서입니다.

1. **sass-loader:** Sass를 CSS 변환
1. **css-loader:** CSS를 JavaScript로 번들링
1. **style-loader:** HTML link 태그에 CSS 추가

### CSS 안에 이미지를 번들링

지금까지는 `url` 프로퍼티 값을 `false`로 해두었기에 CSS 안에 `url()`은 무효화 되어있어, 이미지를 읽지 않았습니다. 이를 `true`로 하면 이미지가 빌드됩니다만, JavaScript로 번들링하기 위해서는 다른 설정도 필요합니다.

이미지를 JavaScript로 번들링하기 위해서는 이미지를 JavaScript에서 사용 가능한 데이터로 변환해야 합니다. 그러기 위해 **base64** 형식으로 변환하겠습니다.
여기서는 자세히 설명하지 않겠지만, base64는 알파벳 대소문자, 숫자, 기호 등까지 포함해서 64글자로 구성된 엔코드 방식입니다.(실은 65글자입니다만)
JavaScript는 Base64 인코딩, 디코딩하기 위한 함수를 가지고 있습니다.

webpack4까지는 이미지를 Base64에 인코딩하는데에 **url-loader**를 사용했습니다만, webpack5부터는 탑재되어있는 `type` 프로퍼티를 사용할 수 있습니다.

`rules` 프로퍼티 배열에 새로운 요소를 설정해서, `test` 프로퍼티로 대상 파일을 설정, `type` 프로퍼티 값을 `asset/inline`로 할 수 있으며, 일괄적으로 모든 파일을 번들링합니다. 또 `css-loader`의 `url` 프로퍼티를 `true` 하는 것을 잊지세요.

```js
module: {
  rules: [
    {
      test: /\.(sass|scss|css)$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            // url() on
            url: true,
            sourceMap: true,
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          }
        },
      ]
    },
    // 추가
    {
      test: /\.(gif|png|jpg|svg)$/,
      type: "asset/inline",
    }
  ]
},
```

실행할 sass 파일에 `background-image` 프로퍼티가 추가합시다.

```scss
$color: red;
$weight: bold;

body {
  color: $color;
  font-weight: $weight;
  background-image: url(img.png);
}
```

이를 실행하면, 이미지가 번들링됩니다.

### 번들링할 이미지를 구분하기

로더를 다루는 번들링에서 주의할 점은 뭐든지 다 번들링하려는 것입니다. 예를 들어, 이미지를 Base64로 인코딩하는 경우, 용량은 약 1.33배가 됩니다. 그러기에 통신시에 비용이 더 듭니다. 그래도 번들링을 해야겠다면,용량이 적은 이미지는 번들링, 큰 이미지는 그대로 붙여봅시다.

먼저 설명하고 싶은 것은 `type` 프로퍼티의 값을 `asset/inline`해서 번들링 하는 것입니다만, 이를 `asset/resource`로 하면 이미지를 반영은 하지만 번들링은 하지 않습니다. 그렇기에 이미지에 따라서 `asset/inline`과 `asset/resource`를 나눠보는게 좋겠죠.

우선 `type` 프로퍼티 값을 `asset`으로 대충 설정합시다. 그리고 `parser.dataUrlCondition.maxSize`로 번들링하는 최대 파일 값을 설정합시다.
이렇게 되면 이 용량을 넘는 이미지는 번들링되지 않습니다.

```js
{
  test: /\.(gif|png|jpg|svg)$/,
  type: "asset",
  parser: {
    dataUrlCondition: {
      // 이를 100KB 이상 설정
      maxSize: 100 * 1024,
    },
  },
}
```

## 플러그인

로더는 자원을 webpack에서 다루기 위함이었습니다.
그 로더에서 실현할 수 없는 기능들을 제공하는 것이 **플러그인**입니다.

### mini-css-extract

`mini-css-extract` 플러그인은 번들한 JavaScript에서 스타일 시트를 css 파일로 반영합니다. 일반적인 웹사이트 제작처럼 CSS 파일을 `link` 태그로 읽게할 수 있습니다.

플러그인을 사용하기 위해서는, 사용하고 싶은 플러그인을 설치해야합니다.

```bash
npm i -D mini-css-extract-plugin
```

사용방법은 require()로 플러그인을 읽어서 로더가 플러그인을 읽을 수 있도록 해줍니다. 플러그인 설정을 해봅시다.

예시는 최소한의 제한을 두었습니다.

```js
// 플러그인 읽기
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: `./src/index.js`,

  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          // CSS 파일 출력 유효화
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          // sass를 사용하지 않는 경우는 빼셔도 됩니다.
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  // 플러그인 설정
  plugins: [
    new MiniCssExtractPlugin({
      // 출력한 곳을 설정
      filename: './css/[name].css',
    }),
  ],
};
```

이제부터는 자주 사용하는 플러그인을 2개 소개해드리겠습니다.

### html-webpack-plugin

지금까지 출력할 폴더 안에 직접 html 파일을 두었습니다. 당연한 소리겠지만 이렇게 출력한 곳과 출력할 곳에 차이가 있는 것은 좋은 일이 아니죠.
그러니 html 파일도 똑같이 빌드하는 게 좋겠습니다.
`html-webpack-plugin`를 이용합시다.
지정한 html를 빌드해줍시다. 이 때, JavaScript와 CSS 읽는 것도 같이 설정해주세요.

```bash
npm i -D html-webpack-plugin
```

똑같이 require()을 사용해서 플러그인 설정을 합시다.
이번에는 로더 설정은 없습니다.

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/index.js`,

  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),

    // html-webpack-plugin 설정
    new HtmlWebpackPlugin({
      // 템플릿 설정
      template: `${__dirname}/src/index.html`,
      // 출력할 곳 설정
      filename: `${__dirname}/dist/index.html`,
      // 빌드한 js 파일을 읽을 때, 기본값은 head입니다.
      inject: 'body',
    }),
  ],
};
```

`template` 프로퍼티는 설정하지 않으면 자동으로 html 파일이 출력됩니다. 또 src에 `index.ejs`가 있다면, 이를 사용합니다. EJS 사용 방법은 여기서 설명하지 않겠습니다만 JavaScript에서 사용할 템플릿은 헤더, 풋더 등으로 분리해서 관리할 수 있습니다.

[EJS](https://ejs.co/)

### copy-webpack-plugin

`copy-webpack-plugin`은 지정한 파일을 그대로 복사해서 출력해줍니다. 이걸 잘 조합하면 꽤 도움이 됩니다.

```bash
npm i -D copy-webpack-plugin
```

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 생략

plugin: [
  new CopyWebpackPlugin({
    patterns: [
      {
        from: `${__dirname}/src/img`,
        to: `${__dirname}/dist/img`,
      },
    ],
  }),
];
```

### imagemin-webpack-plugin

`copy-webpack-plugin`은 파일을 압축합니다.

```bash
npm -i -D imagemin-webpack-plugin
```

각 형식에 따라서 패키지도 설치해야합니다.

```bash
# jpg
npm i -D imagemin-pngquant
# png
npm i -D imagemin-mozjpeg
# gif
npm i -D imagemin-gifsicle
# svg
npm i -D imagemin-svgo
```

자세한 설명은 생략하고 설정을 보겠습니다.

```js
const ImageminMozjpeg = require('imagemin-mozjpeg');

// 생략

plugins: [
  new ImageminPlugin({
    test: /\.(jpe?g|png|gif|svg)$/i,
    pngquant: {
      quality: '70-85',
    },
    gifsicle: {
      interlaced: false,
      optimizationLevel: 9,
      colors: 256,
    },
    plugins: [
      ImageminMozjpeg({
        quality: 85,
        progressive: true,
      }),
    ],
    svgo: {},
  }),
];
```

## 끝으로

에피소드2는 우선 여기서 마치겠습니다.
이 이상 설명하면 아마 이해가 더 꼬여 어처구니 없을 것 이기 때문입니다.
에피소드2가 좋은 평판을 받는다면 에피소드3를 써야겠다 생각중입니다.

지금부터 React, TypeScript 등 webpack 설정을 보며 **"?! 이게 뭔"** 이라 생각했던 분들도 에피소드 1, 2를 읽은 후에 다시 webpack 설정을 보면 얼음이 녹듯이 이해가 머리에 스며들 것이라 생각합니다.

정말 마지막에 마지막으로 괜찮으시다면 [실무에 도움되는 중급자가 되기 위한 JavaScript 입문(문법편)](https://zenn.dev/antez/books/568dd4d86562a1)을 공개하고 있습니다. 무료로 공개되고 있는 페이지까지라도 좋으니 읽어주시길 바랍니다.
