---
slug: 2022-05-09-npm-scripts-wo-kaku-doki-no-tekuse
title: npm-scripts를 적을 때 버릇
authors: rewrite0w0
tags: [node.js, 번역]
---

> [글](https://www.mizdra.net/entry/2022/03/24/093000)

이래저래 5년 정도 취미 개발로 nps-scripts를 작성하고 있다.

긴 시간 사용하면 노하우가 쌓여서, "이렇게 쓰면 깔끔하다" "나중에 확장하고 싶을 때, 간단하게 확장할 수 있다" 같이 적는 방법을 몸 익혔다. 내 경우 어느 정도 습관이 있다 생각한다.

모처럼이니, [id:mizdra](http://blog.hatena.ne.jp/mizdra/)의 npm-scripts를 쓸 때 버릇을 공유하겠다.

## 기본형

```json
{
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --mode development",
    "lint": "eslint .",
    "test": "jest"
  }
}
```

가장 단순한 패턴, 4개의 script를 작성한다.

- `build`: 빌드
- `dev`: 개발시 사용하는 빌드 모드
  - webpack를 사용한 프로젝트라면 개발 서버를 watch 빌드하며, tsc를 사용하면 `tsc --watch`한다.
- `lint`: lint나 타입 검사 등 정적해석 실행
  - 정적해석이라면 `static-check`가 좋을 수도 있지만 길어서 치기 번거로우니 논외
  - `check`로 했을 시기도 있었지만, yarn 커맨드랑 경합이라 그만둠
    - ref: [yarn check | Yarn](https://classic.yarnpkg.com/lang/en/docs/cli/check/)
  - 암묵적으로 lint로 하는 경우가 많아서 이를 따름
    - ref: [이전에 Twitter에서 집계한 앙케이트](https://twitter.com/mizdra/status/1371494691007574024)
- `test`: unit 테스트 실행
  - unit 테스트만 다룸
  - E2E 테스트는 다른 script(후술)

취미 개발하고 있는 프로젝트는 기본 이 4가지 script를 사용했다. 어떤 프로젝트를 해도, `npm i && npm run dev`하면 개발 빌드, `npm run lint`하면 정적 해석, 모든 프로젝트에서 script 명을 통일함으로 "이 프로젝트는 script가 뭐였지?" 상황이 나오지 않도록 함

여기까지가 기본형으로 프로젝트에서 하고 싶은 일이 많아지는 경우에 따라 npm-scripts도 확장

## lint, dev로 여러 커맨드를 실행

"`eslint`만이 아니라 `tsc --noEmit`도 실행하고 싶다" 같이 각 기본 script 안에 여러 커맨드를 실행하고 싶으면 이렇게 확장.

```diff
 {
   "scripts": {
     "build": "webpack --mode production",
-    "dev": "webpack-dev-server --mode development",
+    "dev": "run-p dev:*",
+    "dev:webpack": "webpack-dev-server --mode development",
+    "dev:graphql": "graphql-codegen --watch",
+    "dev:tsm": "typed-scss-modules src --nameFormat none --exportType default --watch"
-    "lint": "eslint .",
+    "lint": "run-s -c lint:*",
+    "lint:eslint": "eslint .",
+    "lint:tsc": "tsc --noEmit",
+    "lint:prettier": "prettier --check .",
     "test": "jest"
   }
 }
```

주요 관점:

- 커맨드 하나에 하나의 script(`lint:eslint` / `lint:tsc` 등) 역할을 부여
  - 개발할 때 eslint만으로 디버그하고 싶다 같은 상황에 맞추기 위함
  - `lint:<name>`의 `<name>` 부분에 커맨드 명이랑 그럴 듯한 이름을 부여
- 한 번에 실행하는 script(`lint`)도 준비
  - lint 등을 관련한 script를 편리하게 사용할 수 있도록 준비
  - script를 한 번에 만들기 위해서 [npm-run-all](https://www.npmjs.com/package/npm-run-all)를 사용
    - `run-s lint*`라 쓰면 `lint:*` 매치하는 script 전부 실행 가능
    - `run-s lint:eslint lint:tsc lint:prettier`같이 수동으로 리스트업하면 실행순서를 제어할 수 있지만 언젠가 구멍이 생기므로 최대한 피한다
  - 직렬판의 `run-s`랑 병렬판 `run-p`가 있지만, 기본적으로는 `run-s`를 사용
    - `run-p`로 병렬로 사면, 다수 커맨드가 뒤엉켜서 디버그가 어려워짐
    - 직렬 실행하면 스트레스를 느끼는 규모의 코드를 필자는 대개 건들지 않으므로, 딱히 곤란한 일이 없음
    - `dev` script 등 병렬로 실행할 필요가 있을 때는 `run-p`
  - `run-s` 사용할 때는 `-c`를 옵션 붙임
    - 기본값으로 script를 하나씩 실행하며, 에러가 나오면 즉각 중단
      - `lint:eslint => lint:tsc => lint:prettier` 순서로 실행하는 경우에, `lint:tsc`에서 에러가 나오면 `lint:prettier` 실행안 됨
    - 이러면 일부 정적 해석 결과에 구멍이 생겨서 효율적 디버그가 어렵다
    - `-c`를 붙이면 에러가 발견되어도 모든 script를 실행하며 에러를 반환해주므로 모든 정적 해석이 가능
- `run-s` / `run-p`에 `-l` 옵션 사용 않는다
  - `-l`옵션을 붙이면 script 이름 출력 가능
    - [참조](https://github.com/mysticatea/npm-run-all/pull/75)
  - 이걸 사용하면 `run-p`로 여러 커맨드가 뒤엉켜도 어느 정도 보기 편해짐
  - 단, 실행되는 커맨드의 색 출력이 사라지는 문제도 있음
    - [참조](https://github.com/mysticatea/npm-run-all/issues/38)
    - TTY 관련 문제인듯
  - 미묘하게 불편해서 사용하지 않음
- CI에서 한 번에 script 실행할 수 있도록 정리
  - [예시](https://github.com/mizdra/eslint-interactive/blob/981e596dc227e8a85f4154b48ecf0fce2a0f3b2d/.github/workflows/nodejs.yml#L67-L71)

반드시 `lint`를 병렬로 실행하고 싶다면 `npx run-p "lint:*"` / `yarn run-p "lint:*"`라 터미널 상에서 입력하면 된다 생각

## lint, test의 여러 종류 준비

"`eslint --fix`, `prettier --write` 같이 `lint` script의 여러 종류가 필요하다", "watch 모드로 실행하는 `test` script가 필요하다" 싶을 때는 이하와 같이 확장

```diff
 {
   "scripts": {
     "build": "webpack --mode production",
     "dev": "run-p dev:*",
     "dev:webpack": "webpack-dev-server --mode development",
     "dev:graphql": "graphql-codegen --watch",
     "dev:tsm": "typed-scss-modules src --nameFormat none --exportType default --watch"
     "lint": "run-s -c lint:*",
     "lint:eslint": "eslint .",
     "lint:tsc": "tsc --noEmit",
     "lint:prettier": "prettier --check .",
+    "lint-fix": "run-s -c lint-fix:*",
+    "lint-fix:eslint": "npm run lint:eslint -- --fix",
+    "lint-fix:prettier": "prettier --write .",
     "test": "jest",
+    "test-watch": "npm run test -- --watch"
   }
 }
```

주요 관점:

- `<확장하고 싶은 script>-<postfix>` 이름으로 script 작성
  - `lint`의 자동 수정이면 `lint-fix`, `test` watch모드판이라면 `test-watch`
  - 임계에는 `lint:fix`: 패턴도 일반적이지만 `"lint": "run-s -c lint:*"`에 포함되므로 피함
- 여러 종류의 script와 오리지널 script 공통화가 가능하면 공통화
  - `"lint-fix:eslint" "npm run lint:eslint -- -- fix"` 같이
  - prettier는 옵션 상 공통화 어려워서 안 함. 괜히 무리하지 말고 간단한 방법을 선택

:::note
**여담**

여러 종류를 준비하면 npm-scripts가 확대되어 보기 나쁘고, 관리가 어려우므로 취미 개발에서는 기본 하지 않는다. `jest`를 watch 모드로 하려면 `npm run test -- --watch` 같이 필자는 빈 칸을 적으며, 굳이 script를 준비하지는 않는다. 팀 개발하고 있을 때 등에서는 준비해두면 꼼꼼하다 느낄 것 같음
:::

## 코드 생성용 script 준비

GraphQL Code Generator 등 코드 생성계 도구를 도입하고 싶다면 이렇게 확장

```diff
 {
   "scripts": {
+    "gen": "run-s gen:*"
+    "gen:graphql": "graphql-codegen",
+    "gen:tsm": "typed-scss-modules src --nameFormat none --exportType default",
     "prebuild": "npm run gen"
     "build": "webpack --mode production",
     "dev": "run-p dev:*",
     "dev:webpack": "webpack-dev-server --mode development",
-    "dev:graphql": "graphql-codegen --watch",
-    "dev:tsm": "typed-scss-modules src --nameFormat none --exportType default --watch"
+    "dev:graphql": "npm run gen:graphql -- --watch",
+    "dev:tsm": "npm run gen:tsm -- --watch",
     "lint": "run-s -c lint:*",
     "lint:eslint": "eslint .",
     "lint:tsc": "tsc --noEmit",
     "lint:prettier": "prettier --check .",
     "lint-fix": "run-s -c lint-fix:*",
     "lint-fix:eslint": "npm run lint:eslint -- --fix",
     "lint-fix:prettier": "prettier --write .",
     "test": "jest",
     "test-watch": "npm run test -- --watch"
   }
 }
```

주요 관점:

- `gen`이라는 script 생성
  - 물론 generetor 약칭
  - 한 눈에 알아볼 수 있으면 그것을 선택
- `dev:*`로 공통화할 수 있는 것이 많으므로 적절히 공통화
- `build`할 때, `gen`이 실행되도록 `prebuild` script를 추가
  - 참조: [npm-scripts: pre/post prefix를 이용해서 스크립트 실행 직후에 다른 스크립트도 실행되는 방법 - NxWorld](https://www.nxworld.net/npm-scripts-pre-and-post-hooks.html)
  - `gen`하지 않으면 `build`되지 않으므로, `prebuild`로 실행하는 것이 적당

## Unit 테스트 타입 검사 script를 준비

애플리케이션과 Unit 테스트 코드를 각기 `tsconfig.json`를 사용해서 타입검사하고 싶은 경우, `lint:tsc`로 분할.

```diff
 {
   "scripts": {
     "gen": "run-s gen:*"
     "gen:graphql": "graphql-codegen",
     "gen:tsm": "typed-scss-modules src --nameFormat none --exportType default",
     "prebuild": "npm run gen"
     "build": "webpack --mode production",
     "dev": "run-p dev:*",
     "dev:webpack": "webpack-dev-server --mode development",
     "dev:graphql": "npm run gen:graphql -- --watch",
     "dev:tsm": "npm run gen:tsm -- --watch",
     "lint": "run-s -c lint:*",
     "lint:eslint": "eslint .",
-    "lint:tsc": "tsc --noEmit",
+    "lint:tsc": "run-s -c lint:tsc:*",
+    "lint:tsc:src": "tsc -p tsconfig.src.json --noEmit",
+    "lint:tsc:test": "tsc -p tsconfig.test.json --noEmit",
     "lint:prettier": "prettier --check .",
     "lint-fix": "run-s -c lint-fix:*",
     "lint-fix:eslint": "npm run lint:eslint -- --fix",
     "lint-fix:prettier": "prettier --write .",
     "test": "jest",
     "test-watch": "npm run test -- --watch"
   }
 }
```

주요 관점:

- `lint:tsc:src`, `lint:tsc:test` 분할
- `lint:tsc`에 모아둠

### 여담

`tsconfig.json`이 아니라, `tsconfig.src.json` / `tsconfig.test.json` 파일명으로 하면, tsserver(vsc에서 이용되는 ts language server)에서 설정 파일을 알 수 없으므로, 에디터상에서 리얼타임 타입검사를 기본 설정으로 실행하고 싶다면 주의해야함. 보완하다보면 어느새 이상해지므로 이를 의심하는 것이 좋음. tsserver에 설정 파일이 잘 읽혀지는지는 vsc 하부에 있는 툴바에서 확인 가능.

![vsc tsserver check](https://cdn-ak.f.st-hatena.com/images/fotolife/m/mizdra/20220324/20220324012931.png)

그럼 반드시 `tsconfig.json`로만 해야 하는 것인가?

[Solution Style tsconfig.json](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#support-for-solution-style-tsconfigjson-files)를 준비하면 마음대로 이름을 설정할 수 있다

```json
{
  // files 는 반드시 비울 것
  "files": [],
  "references": [
    // 여기에 tsserver에서 참조했으면 하는 설정 파일 경로를 적는다.
    { "path": "./tsconfig.src.json" },
    { "path": "./tsconfig.test.json" }
  ]
}
```

![soultion style tsconfig.json](https://cdn-ak.f.st-hatena.com/images/fotolife/m/mizdra/20220324/20220324012952.png)

편리한 테크닉이라 생각하지만 필자외에는 사용하는 사람을 그다지 보지 못함. 알려져 있지 않은 것 뿐인지, 애초에 이렇게 복잡하게 만드는 것을 안하는 것 뿐인가... 여러분은 어떠한가...?

## E2E 테스트용 script

E2E 테스를 도입하고 싶다면, 이렇게 확장

```diff
 {
   "scripts": {
     "gen": "run-s gen:*"
     "gen:graphql": "graphql-codegen",
     "gen:tsm": "typed-scss-modules src --nameFormat none --exportType default",
     "prebuild": "npm run gen"
     "build": "webpack --mode production",
     "dev": "run-p dev:*",
     "dev:webpack": "webpack-dev-server --mode development",
     "dev:graphql": "npm run gen:graphql -- --watch",
     "dev:tsm": "npm run gen:tsm -- --watch",
     "lint": "run-s -c lint:*",
     "lint:eslint": "eslint .",
     "lint:tsc": "run-s -c lint:tsc:*",
     "lint:tsc:src": "tsc -p tsconfig.src.json --noEmit",
     "lint:tsc:test": "tsc -p tsconfig.test.json --noEmit",
     "lint:prettier": "prettier --check .",
     "lint-fix": "run-s -c lint-fix:*",
     "lint-fix:eslint": "npm run lint:eslint -- --fix",
     "lint-fix:prettier": "prettier --write .",
-    "test": "jest",
+    "test": "jest -c jest.test.js",
     "test-watch": "npm run test -- --watch",
+    "e2e-test": "jest -c jest.e2e-test.js",
+    "e2e-test-watch": "jest -c jest.e2e-test.js --watch",
   }
 }
```

주요 관점:

- `test`와 `e2-test` 준비
  - `test` 혹은 `test-watch`로 시간을 소비하고 싶지 않아서
  - E2E 테스트는 꽤 무거운 것이므로, 이는 `test-watch` 등으로 실행하면, 디버그 체험이 나쁨
  - 옵트아웃이니, 필요에 따라 `e2e-test`, `e2e-test-watch`로 하는 세계관
  - vscode-jest와 조합할 때도, 이렇게 나눠서 다루는 것이 편하다는 이야기도 있다.
    - vscode-jest에 대해 이전에 글을 썼으니 읽어주면 좋겠음
      - [vscode-jest를 도입해 테스트 개발체험 상향](https://www.mizdra.net/entry/2021/12/13/011842)
      - `"jest.jestCommandLine": "npm run test --"`로 unit 테스트만 vscode-jest 실행 대상으로 설정 가능

## 사전에 빌드하지 않으면 실행하지 못하는 script 준비

아까부터 E2E 테스트 script는 이런 느낌이라 소개했지만, 보통은 사전에 빌드가 필요하므로, 저대로는 동작하지 않을 것이라 생각함. 또 빌드한 결과를 토대로 lint 하고 싶을 때, 사전에 빌드하지 않으면 안 되는 script가 종종 있음. 만약 그럴 때, 이렇게 확장

```diff
 {
   "scripts": {
     "gen": "run-s gen:*"
     "gen:graphql": "graphql-codegen",
     "gen:tsm": "typed-scss-modules src --nameFormat none --exportType default",
     "prebuild": "npm run gen"
     "build": "webpack --mode production",
+    "postbuild": "run-s -c postbuild:*",
+    "postbuild:e2e-test": "jest -c jest.e2e-test.js",
+    "postbuild:lint": "bundlesize",
     "dev": "run-p dev:*",
     "dev:webpack": "webpack-dev-server --mode development",
     "dev:graphql": "npm run gen:graphql -- --watch",
     "dev:tsm": "npm run gen:tsm -- --watch",
     "lint": "run-s -c lint:*",
     "lint:eslint": "eslint .",
     "lint:tsc": "run-s -c lint:tsc:*",
     "lint:tsc:src": "tsc -p tsconfig.src.json --noEmit",
     "lint:tsc:test": "tsc -p tsconfig.test.json --noEmit",
     "lint:prettier": "prettier --check .",
     "lint-fix": "run-s -c lint-fix:*",
     "lint-fix:eslint": "npm run lint:eslint -- --fix",
     "lint-fix:prettier": "prettier --write .",
     "test": "jest -c jest.test.js",
     "test-watch": "jest --watch",
-    "e2e-test": "jest -c jest.e2e-test.js",
-    "e2e-test-watch": "jest -c jest.e2e-test.js --watch",
   }
 }
```

주요 관점:

- `postbuild`: postfix를 붙여서 script 생성
  - `npm run build && npm run postbuild:e2e-test`에서 한 방에 해결
- `postbuild`도 준비해준다
  - `npm run build`할 때 자동 실행

근래는 이런 습관이지만, `npm run build`로 자동으로 실행되는 것은 조금 별로라 생각. `postbuild:lint`은 그나마 허용하지만 `postbuild:e2e-test`도 매번 실행하는 것은 별로 같음. 디플로이 전용과 lint/test 전용 github workflow가 각각 있다면, 원래라면 lint/test 용 workflow에만 `postbuild:e2e-test`가 실행되면 좋겠는데, 디플로이 workflow에도 `build`할 때 `postbuild:e2e-test` 되버림

사전에 빌드가 필수라 알 수 있도록 `require-build:e2e-test` 같이 명백히 하는 게 좋을 지도. 다른 좋은 아이디어가 있다면 알려주면 좋겠음

## 커맨드 연결 표현이 어려운 script 준비

programmable하다면 다음 script를 추가하면 좋음

```json
{
  "scripts": {
    "dev": "node scripts/dev.js"
  }
}
```

- [npm-scripts 예시](https://github.com/mizdra/scrapbox-userscript-icon-suggestion/blob/9e5a47a9975b20bb1f17432e825756a9278bc9cb/package.json#L9)
- [script 파일](https://github.com/mizdra/scrapbox-userscript-icon-suggestion/blob/9e5a47a9975b20bb1f17432e825756a9278bc9cb/bin/dev.ts)

어려운 것을 하고 싶다면 눈 딱 감고 script 파일을 쓰는게 좋다 생각함. 만병통치약은 없음

## 실제 예시

이왕 쓴 것 실제 예시도 소개.

역사적 경위에 의해서 지금까지 소개한 습관과는 다른 경우도 있으니 그냥 느껴주시길.

- [mizdra/eslint-interactive](https://github.com/mizdra/eslint-interactive/blob/981e596dc227e8a85f4154b48ecf0fce2a0f3b2d/package.json#L11-L23)
  - node.js에서 동작하는 cli 도구
  - `postbuild:test`와 `postbuild:benchmark` 있는게 포인트
- [mizdra/now-playing-for-google-play-music](https://github.com/mizdra/now-playing-for-google-play-music/blob/bd30d91ed12fa9b09d2a152df6809fc73a85d089/package.json#L9-L24)
  - youtube music 에서 Now Playing 트윗 가능한 도구
  - 데스크탑을 위한 브라우저 확장 기능과, 안드로이드 대상 PWA가 있으며 같은 레포지토리에서 개발
  - 브라우저 확장 script와 pwa 대상 script 혼재가 포인트
    - monorepo해서 npm/yarn workspace 도입하는 것이 깔끔하다 생각(하지만 귀찮)
    - 취미이므로 이 정도면 깔끔하다 봄
  - 브라우저 확장 기능 스토어에 업로드하는 zip를 만드는 script가 있는 것도 포인트
- [mizdra/scrapbox-userscript-icon-suggestion](https://github.com/mizdra/scrapbox-userscript-icon-suggestion/blob/9e5a47a9975b20bb1f17432e825756a9278bc9cb/package.json#L6-L19)
  - Scrapbox에서 동작하는 UserScript
  - `dev` script를 스크립트 파일로 나눠 적혀있는 것이 포인트

여러분도 자신만의 습관이 있다면 알려주면 좋겠습니다.
