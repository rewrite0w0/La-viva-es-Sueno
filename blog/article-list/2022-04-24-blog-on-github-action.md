---
slug: 2022-04-24-blog-on-github-action
title: 블로그에 github action 넣기
authors: rewrite0w0
tags: [CI/CD, 감상]
---

그간 `npm run gh`으로 블로그 갱신하고, git은 push를 따로 했었다.

> `"gh": "cmd /C \"set \"GIT_USER=rewrite0w0\" && npm run deploy\""`

문득 여기도 github action으로 활용할 수 있지 않을까 찾아보니 공식 홈페이지에 설명이 있었다.

```yml
name: blog-deploy

on:
  push:
    branches:
      - main

jobs:
  blog-deploy:
    name: deploy to github pages
    timeout-minutes: 5
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: npm
      - name: npm install
        run: npm install --frozen-lockfile
      - name: npm run build
        run: npm run build
      - name: deploy to github pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

물론 `gh: "git add . && git commit -m \":)\" && git push origin main && npm run gh"`

이런식으로 해도 나름(...) 자동화라 해야하나 아무튼 잘 된다만 그래도 이왕 github actions를 배우고 있으니 최대한 활용해보고 싶다.

## 읽을거리

- https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions
