---
slug: 2022-05-05-anata-no-web-service-no-zeijakusei-wo-hakkensha-kara-oshiete-morau-houhou-rfc9116
title: 당신의 web 서비스 취약성을 발견자에게 듣기위한 방법 - RFC9116
authors: rewrite0w0
tags: [security, webdev, 번역]
---

> [글](https://zenn.dev/sh1ma/articles/20e61d84e7d380)

얼마전 RFC9116가 발표되었습니다.🚀

당신의 web 서비스에 잠재하고 있는 미지의 취약성을 누군가가 발견했을 때, 그것을 당신에게 연락하는 방법을 제시하는 `security.txt` 표준화한 것입니다.

이 글에서는 왜 이것이 필요했는가, 그리고 우리는 이를 어떻게 구현해야 하는가에 대해 간결히 설명합니다.

https://twitter.com/EdOverflow/status/1519415583896481792?s=20&t=Y_zWdYyM1UoCoBJXZyI-0w

## 왜 이것이 필요했는가

https://securitytxt.org/ 의 개요를 보시면 이렇습니다

:::note
web 서비스의 security 위험성이 위험의 중대성를 이해하고 있는 독립된 security 연구자에게 발견된 경우 이를 적절히 전달하기 위한 채널이 부족한 것이 왕왕 있습니다. 그래서 그대로 security의 문제가 보고되지 않았을 가능성이 있습니다. security.txt는 조직이 security 연구자가 security 취약성을 안전히 전달하기 위한 프로세스를 정의하는 것에 도움이 되는 표준을 정의하고 있습니다.
:::

즉,

- 지금까지는 security 연구자가 web 서비스 운영자에게 취약성을 보고하기 위한 방안이 없었다.
- `security.txt`는 취약성 보고 프로세스를 발견자를 위해 정의하는 데에 역할을 한다.

입니다.

## 우리가 구현하는 방법

실은 `security.txt`는 여러 조직에서 이미 정의되어있습니다. 또 우리도 손쉽게 구현할 수 있습니다.

### 구현 예시

- [google](https://www.google.com/.well-known/security.txt)
- [facebook](https://www.facebook.com/.well-known/security.txt)
- [github](https://github.com/.well-known/security.txt)

위의 예시처럼 정해진 포맷인 `security.txt`를 web 사이트의 지정된 장소에 두는 것만으로 구현됩니다.

### 어디에 두나?

당신의 도메인의 `/.well-known/` 폴더 밑에 둡니다. 두는 장소는 자유롭게 결정하는 것이 아니므로 주의합시다. (만약 `/.well-known/` 폴더가 뭐지? 의문이 있다면 [RFC8615](https://www.rfc-editor.org/rfc/rfc8615)를 참조해주세요.)

### 포맷이 있나?

있습니다. 상세는 [RFC9116](https://www.rfc-editor.org/rfc/rfc9116)를 보면 됩니다.

"실제 포맷를 보며 쓰는 수고가..." 이런 당신을 위해 [securitytxt.org](https://securitytxt.org/)에 제네레이터가 있습니다.

![generator step1](https://storage.googleapis.com/zenn-user-upload/53004e659471-20220429.png)

연락처와 Expires(`security.txt` 자체의 실효일)만 지정하면 생성할 수 있습니다.

위의 이미지대로는 이하의 security.txt가 생성됩니다.

![generator step2](https://storage.googleapis.com/zenn-user-upload/b4a5605dfd55-20220429.png)

이 내용을 당신의 web 사이트의 `/.well-known/security.txt`에 복붙하면 끝입니다!(물론 연락처는 자주 보는 것을 적어두기를 바랍니다. 눈치채지 못하면 의미가 없으니...)

## 정리

- `security.txt`를 사용해 취약성 발견자에게 보고처를 게시하는 RFC가 정식으로 발표.
- web사이트의 `/.well-known` 밑에 `security.txt`를 둔다.
- web에서 간단히 `security.txt` 생성 가능

개인적으로는 Hiring의 항목이 있는 것이 조금 흥미로웠습니다.
