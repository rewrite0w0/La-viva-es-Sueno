---
slug: 2022-04-27-dependabot-no-settei-wo-minaoshitemita
title: Dependabot 설정을 둘러보았다.
authors: rewrite0w0
tags: [CI/CD, 번역]
---

> [글](https://github.com/ktnkk/blog.tech.v1/blob/bd122cc2b23ccffde9abb52ff294118c022d2420/2021/1003/index.md)

## 동기

어떤 프로젝트에도 사용하는 것이므로, 제대로 이해하고 싶은 것이 가장 큰 이유.

- [Dependabot](https://dependabot.com/)은 GitHub에서 간단히 설정할 수 있지만 옵션가지 설정한 적이 없으므로 해보고 싶었다.
- 정형적인 작업은 되도록 자동화하고 싶다.
- 앞으로 계속 쓸 수 있도록 템플릿을 만들고 싶다.

## TL;DR

모든 옵션을 조사하고 완성한 템플릿이다.
해당 블로그에 `.github/dependabot.yml`로 운용중이다.

```yaml:title=dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      timezone: "Asia/Tokyo"
      interval: "daily"
      time: "03:00"
    target-branch: "dev"
    allow:
      - dependency-type: "all"
    assignees:
      - "ktnkk"
    commit-message:
      prefix: "npm"
      include: "scope"
    labels:
      - ":tea:"
      - ":construction_worker_woman:"
    milestone: 3
    open-pull-requests-limit: 10
    pull-request-branch-name:
      separator: /
    rebase-strategy: "auto"
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      timezone: "Asia/Tokyo"
      interval: "daily"
      time: "03:00"
    target-branch: "dev"
    allow:
      - dependency-type: "all"
    assignees:
      - "ktnkk"
    commit-message:
      prefix: "docker"
      include: "scope"
    labels:
      - ":whale:"
      - ":construction_worker_woman:"
    milestone: 3
    open-pull-requests-limit: 10
    pull-request-branch-name:
      separator: /
    rebase-strategy: "auto"
```

Yarn (npm)과 Dockerfile 의존관계를 파악하는 설정이라 좀 길어졌다.
앵커(&)와 에일리어스(\*)를 사용하고 싶지만 Dependabot에서는 사용할 수 없는 것 같다.

## 각 옵션에 대하여

이번에 사용한 옵션에 대해 각 사항을 적어 나아간다.
기본 설정을 그대로 적은 것도 있지만 나중에 변경 가능성 있을 것을 골랐다.

### package-ecosystem

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
```

- **필수**
- 새 버전 감시하는 패키지 매니저 설정
- [대상 언어](https://dependabot.com/#languages)

### directory

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    directory: "/"
```

- **필수**
- 각 패키지매니저의 패키지 매니페스토 장소를 정의
- 통상적으로 프로젝트 루트는 (`/`)

### schedule

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      timezone: "Asia/Tokyo"
      interval: "daily"
      time: "03:00"
```

- **필수**
- 새 버전을 체크하는 빈도를 정의
- 기본값은 `interval: "daily"`이지만 UTC(한국보다 9시간 늦음)므로 주의
- 명시적으로 `timezone: "Asia/Tokyo"` (혹은 `timezone: "Asia/Seoul"`)로 타임존을 지정하고 `time: "03:00"` 시간 같이 접속이 적은 시간을 설정하는 것이 좋다.

### target-branch

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    # 생략
    target-branch: "dev"
```

- 기본값은 기본 브런치(`main` 같이)에 풀리퀘스트 작성된다.
- 해당 블로그는 Netlify를 사용하기에 매회 빌드하면 제한 시간 압박이 있다.
- 그러기에 개발용 브런치 (`dev`)에 대해 풀리퀘스트 작성하도록 했다.

### allow

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    # 생략
    allow:
      - dependency-type: "all"
```

- 버전 갱신에서 유지할 의존관계를 커스터마이즈 가능
- 기본적으로 모든 의존관계가 체크되어 있음
- `production`이나 `development`를 설정하는 것으로 각 환경마다 최신 상태를 유지하게 할 수 있음

### assignees

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    assignees:
      - "ktnkk"
```

- Dependabot 에 의해 작성되는 풀리퀘스트의 `Assignees` 지정 가능
- GitHub 유저명 지정

### commit-message

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    commit-message:
      prefix: "npm"
      include: "scope"
```

- 커밋메세지 관한 옵션
- 기본값으로 Dependabot은 커밋 메세지를 설정 검출, 같은 패턴을 사용함 (굉장함)
- 명시적 지정가능
  - `prefix` -> prefix (feat/fix 같은)
  - `include: "scope"` -> prefix 후에 커밋에 갱신된 의존관계 목록이 붙여짐

### labels

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    labels:
      - ":tea:"
      - ":construction_worker_woman:"
```

- 풀리퀘스트의 `Labels` 지정 가능
- **먼저 라벨을 만들어야하므로 주의**
- `labels: [ ]`를 사용하면 자동적으로 라벨이 만들어지지 않음
- 순서는 언어(javascript) -> 의존관계 (dependencies)

### milestone

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    milestone: 3
```

- 마일스톤 ID를 지정해서 붙일 수 있음
- 어느 정도 Dependabot를 ㅅ용하는가 기록하기 위해 사용했음

### open-pull-requests-limit

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    open-pull-requests-limit: 10
```

- 기본값으로 버전 갱신을 위해 **최대 다섯** 풀리퀘스트를 염
- 더 많은 풀리퀘스트를 보내고 싶으면 올릴 수 있음
- 0으로하면 버전 갱신을 일시적 무효화

### pull-request-branch-name

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    pull-request-branch-name:
      separator: /
```

- 기본값으로 `/`으로 패키지 매니저와 의존관계를 나눔
  - 예: `dependabot/npm_and_yarn/dev/csstype-3.0.9`
- 자르는 문자를 바꿀 수 있음 (`"-"`, `_`)

### rebase-strategy

```yaml:title=dependabot.yml
updates:
  - package-ecosystem: "npm"
    <omitted>
    rebase-strategy: "auto"
```

- 기본값으로 풀리퀘스트에 변경이 검출되면 열리도록 풀리퀘스트를 **자동적으로 리베이스** 함
- 이걸 막고 싶으면 `rebase-strategy: "disabled"` 지정

## 실제 운용

![풀리퀘스트 목록](https://raw.githubusercontent.com/ktnkk/blog.tech.v1/bd122cc2b23ccffde9abb52ff294118c022d2420/2021/1003/01.jpg)

이런 느낌으로 풀리퀘스트가 작성된다.

템플릿 내용을 바꾸면 대부분 프로젝트에 사용 가능하다.

## 맺는말

기본 설정에서 딱히 자신만의 무엇인가가 없다면 문제없이 사용할 수 있을 것 같음

- 다른 옵션도 있는데 private repository 구성이거나, 그다지 필요없어 보이는 것은 생략함
  - 실제 사용할 기회가 있으면 추가하겠음
- Yarn 관련 업데이트 너무 많음...
  - Github Actions 에서 자동 테스트하고 문제없으면 자동 머지해주도록 하고 싶음
