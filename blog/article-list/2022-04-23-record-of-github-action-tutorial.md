---
slug: 2022-04-23-record-of-github-action
date: 2022-04-23T11:30
title: github actions 사용기
authors: rewrite0w0
tags: [CI/CD, github, 감상]
---

다음 프로젝트에 대한 생각하다

[프론트엔드 시험(일본어)](https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d) [한국어](https://github.com/rewrite0w0/yumemi-frontend-test/blob/main/README.md)을 보고 이것을 하면 되겠다 생각했다.

## 동기

요건에는 따로 나오지는 않지만, [회사 블로그](https://note.yumemi.co.jp/n/ned7429b59556)를 보면 `CI를 구축했는가?` 항목이 있다.

또한 근래 어찌저찌 `CI`와 접촉이 많아 궁금했기에 시작했다.

## 시작하기

github 저장소의 아무 프로젝트나 들어가서 `Actions`를 클릭하고 필요한 방식을 선택한다.

이번에는 `github pages`에 `next.js`를 올리고 싶으므로 `skip`으로 진행

## 설정

### next-deploy.yml

`.github/workflows/next-deploy.yml`

```yml
name: github pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: setup node
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'
          # 처음 push할 때는 cache가 있으면 에러라서, cache를 지웠다가 두 번째부터 넣었다.

      - name: npm install
        run: npm install --frozen-lockfile

      - name: next build
        run: npm run build

      - name: next export
        run: npm run export

      - name: add nojekyll
        run: touch ./out/.nojekyll
        # 폴더에 `_` 있으면 인식 안 되는 것 때문에

      - name: next deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          publish_dir: ./out
```

### package.json

```json
"scripts":{
  // ..
  "export":"next export"
  // 추가
}
```

### next.config.js

```js
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? '/repository-name/' : '',
  // ex) github.com/test > /test/
};

module.exports = nextConfig;
```

### 특이사항

다른 글을 보면 자동으로 생기는 것 같은데 필자는 그게 안 되서 일단 수동으로 `git checkout -b gh-pages`해서 `gh-pages` 브런치를 생성했다.

:::note
**추가**

글로 쓴 코드를 기반으로 새 프로젝트, 새 레포지토리로 push하니 자동으로 `gh-pages`가 만들어졌다.
아마 진행과정에서 무엇인가 내가 순서를 잘 못 뒀거나 빼먹은 모양

[git](https://github.com/rewrite0w0/yumemi-test-frontend/tree/2adf4ee49484db5a394ecf8036c80d43db374822)
:::

## 결론

[git](https://github.com/rewrite0w0/yumemi-frontend-test)

[github pages](https://rewrite0w0.github.io/yumemi-frontend-test/)

## 읽을거리

- https://docs.github.com/en/actions
- https://github.com/vercel/next.js/tree/canary/examples/gh-pages
- https://github.com/actions/checkout
- https://github.com/actions/setup-node
- https://github.com/peaceiris/actions-gh-pages
- https://github.com/gregrickaby/nextjs-github-pages
- https://gregrickaby.blog/article/nextjs-github-pages
- https://qiita.com/peaceiris/items/9c569125b25fc090c515
- https://qiita.com/manten120/items/87e9e822800403904dc8
- https://qiita.com/sky_y/items/b96ae52c90457bcd7846
- https://qiita.com/ozaki25/items/fe9912fc41c3a5c5bfea
- https://www.kaizenprogrammer.com/entry/2019/12/15/220137
- https://knowledge.sakura.ad.jp/23478/
- https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/
- https://docs.antora.org/antora/latest/publish-to-github-pages/
- https://nextjs.org/docs/advanced-features/static-html-export
- https://nextjs.org/docs/messages/export-image-api
