---
slug: 2022-04-23-record-of-eslint-prettier
date: 2022-04-23T12:00
title: eslint와 prettier 사용기
authors: rewrite0w0
tags: [eslint, prettier, 감상]
---

[글](2022-04-23-record-of-github-action)에 이어 쓰는 eslint/prettier

## 동기

요건에 `eslint`와 `prettier` 사용을 필수로 하기에 이번 기회에 기록한다.

## 시작

### .eslintrc.json

```json
  "extends": [
    // "next/core-web-vitals",
    "eslint:recommended",
    "next",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": "2015",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
```

### .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all"
}
```

취향에 맞게 설정

### .prettierignore

```bash
# Ignore artifacts:
build
coverage
out
.next
node_modules
```

`next`는 `build` 하면 `.next`, `export`하면 `out` 생성되므로 이를 무시

### vsc 확장 기능 사용 시 설정

여담으로 vsc 사용할 때도 적는다.

[vsc 세팅](setting-vsc-and-git)

`.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": false,
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.lineNumbers": "on",
  "editor.rulers": [80],
  "editor.wordWrap": "on",
  "eslint.packageManager": "yarn",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "npm.packageManager": "yarn",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### package.json

```json
// ..
"scripts:"
    // ..
   "lint": "next lint --fix",
    "format": "prettier --write ."
// ..
```

## 결론

[git](https://github.com/rewrite0w0/yumemi-frontend-test/tree/f26a4773063aa7a34a4aa75f46ed10d8f7fa7b07)

이제 세팅(...) 마쳤으니 프로젝트 시작

## 읽을거리

- https://eslint.org/docs/user-guide/getting-started
- https://nextjs.org/docs/basic-features/eslint
- https://prettier.io/docs/en/integrating-with-linters.html#recommended-configuration
- https://github.com/prettier/eslint-plugin-prettier
- https://qiita.com/matkatsu8/items/f0a592f713e68a8d95b7#eslint%E3%81%A8prettier%E3%81%A8vscode%E3%82%92%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B%E4%BF%9D%E5%AD%98%E6%99%82%E8%87%AA%E5%8B%95%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88
- https://zenn.dev/kurao/articles/456f44a6f43d89#4.-eslint-%2B-prettier-%E3%82%92%E5%B0%8E%E5%85%A5=
- https://zenn.dev/web_tips/articles/0ce1fcf7fd1430#5.-eslint%E3%81%AE%E5%B0%8E%E5%85%A5=
- https://prettier.io/docs/en/ignore.html
- https://git-scm.com/docs/gitignore#_pattern_format
