<!-- ---
slug: record-fzo
title: fzo 제작기
authors: rewrite0w0
tags: [nodejs, javascript, 감상]
---

## 동기

매번 Object.freeze(`객체/배열`)를 하는 것이 번거로웠다.
깊은 동결도 따로 했어야했다. 다른 라이브러리도 있겠지만 생각난김에 만들어보자

## 환경설정

```bash
npm i -D eslint jest
```

npm install -D

### package.json

```json

```

### eslint

```bash
ni .eslintrc.js
```

#### .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
```

### prettier

```bash
ni .prettierrc.json, .prettierignore
```

#### .prettierignore

```
node_modules/
build
coverage
```

#### .prettierrc.json

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false,
  "parser": "typescript"
}
```

### TS

```bash
.\node_modules\.bin\tsc --init
```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### jest

### babel

### rollup -->
