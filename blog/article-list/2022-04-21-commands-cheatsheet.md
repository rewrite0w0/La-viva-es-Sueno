---
slug: commands-cheatsheet
title: 자주 쓰는 명령어 목록
authors: rewrite0w0
tags: [cheatsheet, 감상]
---

## npm

### 전역 설치된 모듈 확인

```bash
npm ls -g --depth=0
```

### 캐시삭제

```bash
npm cache clean --force

npm cache verify
```

### 업데이트

```bash
npm install -g npm
```

## yarn

### 전역 설치된 모듈 확인

```bash
yarn global list
```

### 전역 설치된 모듈 삭제

```bash
yarn global remove
```

### 캐시 삭제

```bash
yarn cache clean
```

```bash
npm install -g yarn

yarn global add yarn
```

## choco

### 전역 설치된 모듈 확인

```bash
choco list --localonly
```

```bash
choco install 패키지
```

```bash
choco uninstall 패키지
```

```bash
choco upgrade 패키지
```

## pip

### 패키지 목록

```bash
pip list
```

### 업데이트 필요한 패키지 목록

```bash
pip list -o
```

### 최신 버전 패키지 목록(업데이트 필요없는 것들)

```bash
pip list -u
```

### 설치 목록 내보내기 / 목록 설치

```bash
pip freeze

pip freeze > requirements.txt

pip install -r requirements.txt
```

### 업데이트

```bash
pip install -U pip
```

### 가상환경

```bash
python -m venv 경로
```

:::note
개인적으로는 보통 이렇게 쓴다.

python -m venv ./

Scripts 폴더로 들어가서, 마음에 드는 activate 실행한 후에,

(폴더명) cli >

이런식으로 되면 되는거임

이렇게해서 전역 설치를 회피하자.
:::

## deno

```bash
deno --version
```

```bash
deno upgrade
```

## rust

```bash
rustup update
```

## 환경변수 추가 시에

```bash
refreshenv
```

## 읽을거리

- https://docs.chocolatey.org/en-us/choco/

- https://docs.npmjs.com/cli/v6/commands

- https://classic.yarnpkg.com/en/docs/cli/

- https://pnpm.io/pnpm-cli

- https://pip.pypa.io/en/stable/cli/

- https://docs.python.org/3/

- https://deno.land/manual
