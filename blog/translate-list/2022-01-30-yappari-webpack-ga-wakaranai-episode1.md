---
slug: yappari-webpack-ga-wakaranai-episode1
title: 역시 webpack이 뭔지 모르겠다. (에피소드1)
authors: rewrite0w0
tags: [npm, webpack, 번역]
---

# [역시 webpack이 뭔지 모르겠다. (에피소드1)](https://zenn.dev/antez/articles/58307946cf4f3e)

## webpack이 뭔지 모르겠다

요즘에 Vite가 주목받고 있고, 실제로도 무척 좋은 빌드도구입니다.
Vue.js를 만든 Evan You씨가 개발해 이름을 잘 쓰고 있네요.
하지만, 그렇다해서, 개발환경에 Vite를 바로 넣는 것은 단순한 일이 아닌 것이 실무에서 힘든 점입니다.
새로운 기술을 적용해서, "내가 모든 책임지겠어" 말하는 상남자!가 아닌 이상 무리입니다.

그렇기에 당분간은 webpack를 계속 사용할 수 밖에 없습니다만, 이게 참 여전히 잘 모르는 사람이 의외로 꽤 많습니다. 프론트엔드 프로그래밍 초보자에 가까운 사람은 이 단계에서 막혀서 자신감도 상실할 수도 있습니다.

하지만 일단 안심해도됩니다. webpack를 포함해서 프론트엔드 환경설정은 애초에 복잡한 것입니다.
어떤 수준이냐면, **Frontend DevOps**라는 전문직으로 돈을 벌 수 있을 정도로 복잡합니다. 하지만 애시당초 webpack이 뭔지 잘 모른다면, 프론트엔드에 종사하는 사람으로 문제이긴합니다. 기본적으로는 뭘 어떻게 해야하는가 정도는 이해하지 않으면 안됩니다.

이에, 이번에는 Vite이나 노번들 도구에 대해 쓰고 싶은 욕구를 누르고 webpack에 관해 설명할 것입니다.
이미 알고 있을 내용일지도 모르지만, 간단한 내용부터 차근차근 이해할 수 있도록 해설할 것입니다.
webpack이 무너지 잘 모르겠다는 분이라면 조금은 도움이 될 것이라 생각됩니다.
또한 webpack를 알게됨으로 Vite의 자비로움을 이해할 수 있을 것입니다.

그럼, webpack이 결국 무엇인가? 이것부터 설명하겠습니다.
이는 webpack에 한정함이 아니라 모듈번들러를 사용하는 사람 모두에게 기본적인 것이므로 잘 모르겠다 느끼는 분은 읽어주시길 바랍니다.

> 또한 `{}` `[]`가 많아서 이해하기 어렵다 하는 분은 아마 JavaScript를 잘 몰라서 일지도 모릅니다. 그렇기에 좀 번거롭다하더라도 일에 [실무에 도움되는 중급자가 되기 위한 JavaScript 입문(문법편)](https://zenn.dev/antez/books/568dd4d86562a1)을 공개했으므로, 괜찮다면 확인해 보시길 바랍니다. 또 구매해주신 모든 분들께 감사합니다.

## webpack이란

**webpack**이란, **모듈 번들러**입니다.
모듈번들러란, 복수의 모듈 의존관계를 해결해 하나로 정리하기 위해 **번들링**하는 것이며, 모듈은 단일한 프로그램이 아니라, 조합한 것을 사용하는 프로그램입니다.

## 왜 모듈을 번들링하는건가

웹 브라우저와 서버는 **HTTP/1.1** 통신프로토콜로 통신합니다.
이 HTTP/1.1에서는 한 번 처리하는 리퀘스트 수가 제한되어 있어, 리퀘스트가 증가하면 성능(게시 속도)가 떨어집니다. 그렇기에 모듈은 되도록 하나에 정리하는 것이 성능을 좋게 유지할 수 있습니다. 예를 들어 다음과 같이 읽게하면, 성능는 나빠지고, 읽는 순서도 신경써야합니다.

```html
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
```

그러면 애초에 파일 하나에 몰아 넣으면 되지 않나 생각할 수도 있지만, 그렇게하면 코드 규모가 많아지면서 보수성이 낮은 소스코드가 됩니다.
그렇기에 JavaScript 뿐만 아니라, 시스템 개발에 있어서도 파일 하나에 몰아 넣는 경우는 거의 없습니다.

**개발할 때는 되도록 기능을 나누고싶다.**
**실행할 때는 되도록 기능을 모아두고 싶다.**

이를 해결해주는 것이 모듈번들러입니다. 자신이 작성한 모듈뿐만이 아니라, 외부 모듈(npm 등으로 설치한 패키지 등)에도 이용할 수 있습니다.

## 왜 webpack은 복잡하다 하는가

모듈을 번들링하는 것만으로 왜 webpack을 작성하는 것이 복잡하다 할까요.

최근 프론트엔드 개발에서는 CSS Pre-Processor, TypeScript 트랜스파일 같은 걸 구축해서 개발합니다. 이들은 Gulp, Grant 같은 태스크런너 도구를 실행합니다만, 이를 webpack에서도 할 수 있도록 되었습니다. 그 결과 모듈의 번들링 이외의 역할까지 늘어서 작성할 내용도 늘어, webpack를 복잡하다 느끼게하는 원인이 되었습니다.

## Old JavaScript

애초에 JavaScript에는 모듈을 읽는 개념이 없었기에, JavaScript 자체적으로 다른 JS 코드를 읽을 수 없었습니다.
그래서 HTML에서 여러 파일을 나눠 읽도록 했는데, 이게 변수 충동 같은 문제를 일으키는 원인이었습니다.

> ES6부터는 코드를 import 할 수 있습니다.

또한, ES5이전에는 `const`, `let`이 없어, 변수 선언은 무조건 `var`만 가능했기에, 변수가 언제라도 덮어쓰일 가능성이 있어, 의도하지 않는 값이 들어가는 문제도 발생했습니다. 이는 소규모 프로그램이라면 문제가 아니지만 복잡한 프로그램, 여러명이 관리하는 프로그램일수록 엄청나게 심각한 문제였습니다. 이 변수 덮어쓰기 문제는 IIFE(즉시실행함수)를 사용함으로 해결했었습니다. 이는 함수 스코프에서 `var` 정의한 변수는 함수 내부에서만 참조한다는 성질을 이용한 것입니다.

## Current JavaScript

ECMAScript 2015(ES6)부터는 `const`, `let`이 구현되었으며, 변수에 스코프, 호이스팅, 선언 덮어쓰기 막기가 가능해졌습니다. 그리고 모듈 기능이 구현되어 JavaScript 자체적으로 모듈을 읽을 수 있도록 변했습니다.

## npm, Gulp과 webpack의 차이

npm, Gulp 이는 webpack과 어떤 차이가 있을까요?
이는 webpack를 이해하기 힘들게 만드는 요인 중 하나이기도 합니다.

우선 **npm은 패키지를 관리하는 도구**입니다.
패키지란 Gulp, webpack 같은 것을 지칭하며, 이들 패키지는 다른 패키지와 복잡하게 얽혀있습니다.
_예를 들면 A 패키지를 이용하고 있는 Z 패키지가 B 패키지에서도 사용할 수 있다._ 같이요.
npm은 의존관계를 말끔히 해결해주었습니다.
한 마디로, npm에서 webpack를 설치해서 관리한다는 것이죠.

그 다음 Gulp은 정말 webpack과의 차이가 가장 알기 어려운 존재입니다.
결론부터 말하면, **Gulp은 태스크런너이지 모듈번들러인 webpack과 전혀 다른 존재**입니다. 태스크런너란 태스크(처리)를 몇 정의해서 번들 처리를 하는 것입니다.
한 편, webpack은 번들에 특화되어 태스크런너 같이 다양한 처리를 하지 않습니다. 그럼 Gulp으로 되는 것 아닌가 생각하실 수 있습니다만, 다음과 같은 이유로 webpack를 선택되어지기도 합니다.

- 태스크런너는 webpack 보다 작성이 독특하고 복잡해서 같은 태스크런너에서 같은 처리를 하더라도 쓰는 방법이 각기 다르다.
- 번들은 webpack이 특화되어 있어 간단히 작성할 수 있으며 처리도 더 빠르다.
- 태스크런너는 기능이 많지만, 대부분이 사용하는 태스크는 webpack만으로 충분하다.

스스로 개량해서 다양한 기능을 사용하고 싶다면 태스크런너를 선택하는 것이 좋을 것입니다.
또한 번들링만 webpack에서 한다던가, Gulp에서 webpack를 이용하는 것도 가능합니다.

여담으로 "Gulp은 낡고 구려. 이제는 webpack이다. Gulp 이라는 이름부터 미끼 같은 건 쓰고 싶지 않다. 더러워보여" 이런 생각을 하는 사람도 꽤 계십니다만, 태스크 관리에서만큼은 Gulp은 현역으로 사용중에 있습니다.

## Vite와의 차이

Vite에 대해 따로 글을 적을 생각이므로, 여기서는 webpack 차이를 간단히 설명하겠습니다.

webpack은 번들을 하는 번들러입니다. Vite는 노번들 도구로 일컬어집니다. 노번들도구라는 이름만 보면 번들을 안할 것 같아 보이지만 이 또한 번들을 합니다.

webpack은 빌드할 때 모든 의존관계를 해소한 후에, 번들을 합니다. 그렇기에 앱 기동 전에 앱 전체를 돌려 번들할 필요가 있어서 이는 규모가 큰 프로젝트 일수록 시간을 잡아먹습니다.

이에 반해 Vite는 개발할 때는 의존관계 해결과 조금의 번들(pre-bundle)만 합니다. 모든 번들을 하는 것이 아니라, ESModuels의 import 된 소스코드를 읽어 빠른 개발 서버를 실현합니다. 덤으로 의존관계에서는 Go로 만든 esbuild를 사용해 미리 번들함으로 그 속도는 소름돋을 정도로 빠릅니다.(기존의 수 십배)

하지만, Vite가 조금의 번들만 한다는 것은 개발환경에서 그렇다는 것이지 production으로 빌드할 때는 지금과 같이 번들할 필요가 있습니다.

즉, Vite도 번들을 하므로, webpack과 같이 번들러의 일종입니다. 그저 개발과정이 다를 뿐입니다.

## 준비

그럼 webpack를 사용할 준비를 해봅시다.
개발 환경은 node.js, npm 설치되어있다는 전제로 진행하겠습니다.

### 설치

webpack(본체)를 설치합니다. webpack4부터는 **webpack-cli** 본체랑 분리되어 있으므로 그것도 설치해야합니다.

```bash
$ npm init -y
$ npm i -D webpack webpack-cli
```

### 테스트파일 준비

`src/modules/module.js` 같은 모듈을 작성해서, index.js가 module.js 모듈을 읽도록 준비합시다. index.js 같이 메인이 될 처리를 행할 JS파일을 **엔트리 포인트**라 합니다.

```js
// src/modules/module.js
export default () => {
  console.log('Hello!');
};
```

```js
// src/index.js
import foo from './modules/module.js';

foo();
```

> 후에 설명하겠지만, import 하는 파일은 반드시 `src/index.js` 해주시길 바랍니다.

이 코드는 모듈에 대응하지 않은 브라우저(IE11 같은)에서는 사용할 수 있습니다. 그렇기에 비대응 브라우저에서도 대응할 수 있도록 변환할 필요가 있으므로 webpack에서 그 처리도 해줍니다.

글거면 webpack를 사용하기 전에 이 코드 자체가 정상적인 동작을 하는가 Node.js로 실행해봅시다.

```bash
$ node src/index.js
(node:7588) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
```

package.json에 `"type": "module"` 설정을 하거나, 확장자를 `.mjs`로 하라는 에러가 보입니다. 우선 package.json에 `"type": "module"` 설정해서 실행합시다.

```bash
$ node src/index.js
Hello!
```

실행되는군요. 확인이 끝나면, package.json을 원래대로 돌려놓읍시다.

### 빌드

빌드는 컴파일(기계어로 변환)된 소스코드를 실행할 파일로 만드는 것입니다. 여기서는 JavaScript 코드를 지원하지 않는 브라우저에서도 대응할 수 있도록 변환, 바인드합니다.

webpack 빌드는 `webpack` 커맨드로 실행합니다. 이번에는 webpack를 로컬 설치했으므로 `npx`를 붙여 실행합니다.

```bash
$ npx webpack
```

dist 폴더가 자동으로 생성되어, 그 안에 main.js로 바인드되었습니다. 또 다음과 같은 경고도 보입니다.

```bash
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

> mode 옵션에서 development 설정안하면 production으로 폴백됩니다.
> 폴백이란 기능이나 성능 제한해서 움직이는 것.

즉, development 모드를 지정하지마 않으면 production 모드로 빌드된다는 뜻입니다. production(제품)은 Minify(압축/경량화)로 빌드하지만 development(개발)은 그대로 빌드합니다. development는 production보다 빌드 시간이 적으니 개발 시에는 development 사용하는게 좋겠죠.

일단 작성된 `main.js`를 살펴보면, Minify된 소스코드입니다.

```js
/// dist/main.js

(() => {
  'use strict';
  console.log('Hello!');
})();
```

그럼 경고메세지를 봤으니 커맨드에 `-mode` 옵션을 붙여 `development`를 지정해 빌드해봆디ㅏ.

```bash
$ npx webpack --mode development
```

Minify되지 않은 개발용 main.js이 만들어집니다.
확인해보시면, 뭔가 신비로운 소스 코드입니다만 대부분은 개발을 위한 코드이므로 지금은 신경쓰지 않아도 됩니다.

그래도 매번 옵션 붙여서 실행하는 것은 귀찮으니, `package.json`에서 sciprt 설정합시다.
이는 npm에서 scripts 커맨드를 alias 설정하는 기능입니다.

```json
// package.json

"scripts": {
  "build": "webpack --mode development",
  "prod": "webpack --mode production"
}
```

이걸로 `npm run build` 커맨드를 실행하면 내부적으로 `webpack --mode development`를 실행합니다. 저는 production 모드를 `prod`로 설정했습니다.

빌드 후에는 코드에서 에러를 표시할 곳을 보이게하는 것도, 그 본래 코드의 어떤 부분이 알아야 디버그하기 쉽습니다. 그렇기에 개발시에는 빌드 전과 빌드 후 대응관계를 보여주는 **소스맵** 파일이 필요합니다.
소스맵은 앞에 설정에서 `devtool` 옵션을 붙이면 출력됩니다.

```json
// package.json

"scripts": {
  "build": "webpack --mode development --devtool=source-map",
  "prod": "webpack --mode production"
}
```

이걸 실행하면 같은 폴더 안에 `main.js.map`이 출력됩니다.

예, 이것으로 webpack에서 바인드가 끝났습니다.
webpack으로 하나로 바인드를 하는 것뿐이라면 특별한 설정은 필요없습니다.
하고 싶은 것이 바인드뿐이라면, 이것으로 끝입니다.
여기서 출력되는 곳을 바꾸거나, CSS, 이미지 등을 다루고 싶다면 설정할 필요가 있습니다.
다만 그것도 우리가 한 것을 기본으로 설정을 하나씩 하나씩 붙이면 될 뿐입니다. 갑자기 React, TypeScript 같은 설정을 이게 뭔가 싶을 뿐이지, 하나 하나 붙이는 것은 별 일이 아닙니다.
그럼 이 설정을 하나하나 실행해봅시다.

## webpack.config.js

그럼 무사히 빌드가 되어, 결과도 바인드되었으므로, 왜 `webpack`를 실행했는데 `src/index.js`가 엔트리 포인트가 되어 실행되는 걸까요.
이는 webpack은 기본 값이 `src/index.js` 이기 때문입니다.
그리고, 이처럼 webpack에 관한 다양한 설정을 하는 파일은 `webpack.config.js`입니다.

현재 폴더에서 `webpack.config.js`를 만드는 것만으로 webpack 설정이 끝납니다. 지금까지 webpack에는 아무 설정도 하지 않고 JavaScript를 번들링을 했습니다만, 이 외의 것을 한다면 `webpack.config.js`를 설정해야합니다.
그리고 여기서부터가 중요한데, webpack을 잘 모르겠는 사람은 이 설정을 모르겠다하는게 대부분입니다.

폴더에 `webpack.config.js`가 있다면, `webpack` 명령어를 실행할 때마다, 자동적으로 읽습니다만, `webpack --config 파일명` 같이 `--config` 명령어로 파일을 지정하면, 그 지정된 파일을 읽습니다.

지금까지는 예시로 기본적인 `webpack.config.js`를 작성해봤습니다. 이는 단순히 이 파일을 현재 폴더에 작성하면 되는 일이므로, 다음과 같은 명령어나 `우클릭 > 새 파일` 같은 식으로 만들어도 문제없습니다.

```bash
$ touch webpack.config.js

// 역주 powershell 이라면
$ ni webpack.config.js

// 구분하기 귀찮으면
$ echo "" >> webpack.config.js
```

### module.exports

가장 단순한 `webpack.config.js` 작성은 이러합니다.

```js
module.exports = {};
```

JavaScript 객체죠.
즉, `module` 객체에 `exports`를 붙여 그 안에 프로퍼티를 설정하는 것입니다.
webpack 설정은 단순히 보면 프로퍼티에 값을 설정하는 것입니다.

그럼 이 `module.exports` 프로퍼티를 설정해봅시다.

### entry

**entry** 프로퍼티는 webpack이 빌드를 시작점인 엔트리 포인트를 설정하는 것입니다. 지정되지 않으면 기본적으로 엔트리 포인트는 `./src/index.js`입니다.

```js
module.exports = {
  entry: `./src/index.js`,
};
```

### context

**context** 프로퍼티로 엔트리 포인트와 그 이후 설정을 하는 로더의 기반이 되는 폴더를 설정할 수 있습니다. 설정은 절대경로로 하며, 기본값은 현재 폴더입니다. `context` 프로퍼티를 설정하면, `entry` 프로퍼티는 그 폴더에서 경로를 지정합니다.

```js
module.exports = {
  context: __dirname + '/src',
  entry: `./index.js`,
};
```

`__dirname` 말입니다만, 이는 Node.js에 준비되어진 글로벌 변수로 절대경로로 폴더명까지 얻을 수 있습니다.

여기서 조심해야할 것이 있다면, `context` 프로퍼티를 설정해서 `entry` 프로퍼티를 설정하는 경우 `./`를 잊지말고 적어야하는 것입니다.

### output

**output** 프로퍼티는 빌드한 파일을 어디에 어떤 이름으로 출력하는가 지정하는 것입니다. 위의 설정 파일에서 `path` 프로퍼티와 `filename` 프로퍼티를 설정합시다.

**path** 프로퍼티는 빌드한 파일을 출력할 곳을 절대 경로로 지정하며, 지정하지 않으면 자동적으로 `dist/`에 출력됩니다.

**filename** 프로퍼티는 출력파일 이름을 설정하며, 지정하지 않으면 자동적으로 `main.js`가 됩니다.

```js
module.exports = {
  context: __dirname + '/src',
  entry: `./index.js`,

  output: {
    // 출력될 폴더 이름
    path: `${__dirname}/dist`,
    // 출력될 파일 이름
    // 출력 폴더 안에 이 설정대로 출력된다.
    filename: './assets/js/main.js',
  },
};
```

출력될 곳에는 이 전에 출력한 것이 남은 상태에서 출력되므로, 필요없는 파일이 남는 경우도 있습니다.
webpack@5.20.0 이상에서는 **clean 프로퍼티**를 설정함으로 출력 폴더 내의 폴더를 모두 지우고 나서, 출력합니다.

```js
output: {
  clean: true,
}
```

단, 수동으로 넣은 폴더 같은 것도 삭제되므로 **keep 프로퍼티**로 예외로 둘 파일이나 폴더를 정규표현으로 지정할 수 있습니다.

```js
output:{
  clean: {
    keep: /index.html/, // index.html를 유지(삭제 안 함)
  }
}
```

### source

`package.json`에서 소스맵 설정을 했습니다만, 이는 `webpack.config.js`에서도 설정할 수 있습니다.

그럼 `package.json` 설정을 지워줍시다.

```json
"scripts": {
  "build": "webpack --mode development",
  "prod": "webpack --mode production",
}
```

소스맵을 출력하고 싶지 않을 때는 **devtool 프로퍼티**로 설정합시다.
자잘한 설정이 있지만 우선은 값을 `false` 혹은 작성하지 않으면 출력되지 않고 값을 `hidden-source-map`으로 설정하면 출력된다는 것 알아두시길 바랍니다.
[Devtool](https://webpack.js.org/configuration/devtool/#devtool)

```js
module.exports = {
  devtool: 'hidden-source-map',
};
```

### mode

`webpack` 명령어 `mode` 옵션으로 development, production 설정을 했지만 이것도 `mode` 프로퍼티로 설정할 수 잇습니다.

```js
module.exports = {
  mode: 'development',
};
```

이렇게하면 `webpack` 명령어를 옵션으로 안 붙여도 development 모드가 됩니다.

### 경로적는 방법

경로는 환경에 의해서 구분하는 것이 `/`이 아닌 것도 있으므로, 프로그램 에러를 피하기 위해서, 적절히 연결된 `path.join` 같은 것을 사용하는 것을 권장합니다.
`path.join`은 지정된 모든 세그먼트를 결합합니다.

```js
path.join('/x', '/y', '/z'); // /x/y/z
path.join('x', 'y', 'z'); // /x/y/z
```

이렇게 사용할 수 있습니다.

```js
// node.js 표준 모듈 path를 읽자
const path = require('path');

module.exports = {
  // __dirname은 절대 경로로 폴더 명까지 얻는다.
  context: path.join(__dirname, 'src'),
  // 이럴 때는 entry는 ./가 필요하다.
  entry: `./index.js`,
};
```

이 외에는 연결한 절대 경로를 작성하는 `path.resolve`도 있습니다. `path.resolve`는 인수를 우측부터 처리하며 `/`가 나타날 때까지 연결해서 반복합니다.
인수 앞에 `/`가 있다면, 거기까지 연결합니다. 마지막까지 절대 경로가 없다면 실행시에 현재 폴더를 붙여 반환합니다.

```js
path.resolve('/x', 'y', 'z'); // /x/y/z
path.resolve('/x', '/y', 'z'); // /y/z
path.resolve('/x', '/y', '/z'); // /z
path.resolve('/x/y', './z'); // x/y/z
path.resolve('/w/x', '/y/z'); // /y/z
```

### 여러 파일

복수의 페이지를 각각 번들링하기 위해서는 `entry` 프로퍼티와 `output` 프로퍼티를 다음과 같이 적어야합니다.
`output` 프로퍼티가 있는 `[name]`은 엔트리 포인트 이름이 됩니다.

```js
const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: {
    main: './index.js',
    sub1: './sub1.js',
    sub2: './sub2.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
```

여러 페이지를 모은 번들링을 하기 위해서는 이렇게 합시다.

```js
module.exports = {
  entry: ['./index.js', './sub1.js', './sub2.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
};
```

### watch 모드

**watch 모드는** 파일이 변환되는 것을 감시해, 자동적으로 리빌딩합니다. `watch`옵션을 붙여 빌드하면 watch 모드가 됩니다.

```bash
$ bash webpack --watch
```

webpack.config.js에서 `watch` 프로퍼티를 `true`로 하는 것으로 watch 모드 설정이 가능합니다.

```js
module.exports = {
  watch: true, // watch 옵션을 킨다.
};
```

`control + c`로 watch 모드를 종료합니다.

파일을 갱신할 때마다 빌드하면, 파일 사이즈가 커지고, 시간도 많이든다는 우려가 생기지만, watch 모드에는 캐시가 사용되어 차이만큼 빌드외므로 빌드에 걸리는 시간은 길지 않습니다.
그러나 파일을 많이 감시하면, CPU나 메모리 사용이 많아질 수 있습니다.
그 경우 **watchOption 프로퍼티**에서 **ignore 프로퍼티** 설정하면 지정된 폴더, 파일을 감시 대상에서 제외할 수 있습니다. `ignored` 프로퍼티는 문자열, 정규표현으로 지정합니다.

```js
module.exports = {
  watchOptions: {
    ignored: /node_modules/,
  },
};
```

배열로 다중 선택이 가능하며, 와일드 카드도 사용할 수 있습니다.

```js
ignored: ['foo/**/*.js', 'node_modules/**'],
```

## optimization

**optimization 프로퍼티**는 최적화 기본설정을 덮어씁니다. 설정하지 않으면 기본값 그대로며, 지금은 딱히 그 안을 신경 쓸 필요가 없으니, 우선은 주요한 2가지를 소개하겠습니다. 자세한 사항은 [optimization](https://webpack.js.org/configuration/optimization/#optimizationminimizer)를 확인해 주십시오.

### minimize

**minimize 프로퍼티**는 압축을 여부를 설정합니다. `true`로하면 모드에 관계없이 minify(압축)을 하며, `false`로 하면 하지 않습니다. production 모드는 기본적으로 `true`입니다.

```js
module.exports = {
  optimization: {
    minimize: false,
  },
};
```

### minimizer

**minimize 프로퍼티**는 압축 방법을 설정합니다. 압축에는 플러그인을 사용하므로, 플러그인을 설치해야 할 필요가 있습니다.

[optimization.minimizer](https://webpack.js.org/configuration/optimization/#optimizationminimizer)는 TerserPlugin을 설정하는 예시입니다.

```js
optimiztion: {
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        // 옵션은 https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions를 참조해주세요
      },
    }),
  ];
}
```

## 에피소드2

글이 길어졌으므로 다음은 에피소드2에 쓸까합니다.

여기까지 기본적인 바인드 설정이므로, 특별히 복잡한 것은 없었습니다. 문제는 CSS, 이미지 등 로더나 플러그인 등을 설정하면 갑자기 난이도가 어려워진다는 것입니다.
이에 대해서는 에피소드2에서 천천히 설명하려합니다.

뻔한 내용이겠지만 읽어주셔서 감사합니다.
