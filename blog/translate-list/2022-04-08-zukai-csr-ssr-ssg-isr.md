---
slug: image-csr-ssr-ssg-isr
title: 도해 CSR, SSR, SG(SSG), ISR
authors: rewrite0w0
tags: [Next.js, React, 번역]
---

> [글](https://zenn.dev/bitarts/articles/37260ddb28ae5d)

## Server Side Application

![server side application](https://storage.googleapis.com/zenn-user-upload/6nu5zsouh7wjzvyj4ptrdbl1ld2m)

서버는 리퀘스트를 받으면 동적으로 HTML 문서를 생성, 반환합니다.

1993년에 CGI가 등장했을 때부터 기본적으로 같은 구조입니다.

지금도 중요한 아키텍처입니다.

## Ajax

![Ajax](https://storage.googleapis.com/zenn-user-upload/4xz3tw2i65m9mi05o9q3ee9n4gxg)

클리언트(브라우저)의 JavaScript에 서버에서 추가 데이터를 받아, DOM 조작으로 페이지 내용을 바꿀 수 있습니다.

페이지 transition 할 필요없이 컨텐츠를 바꿀 수 있는 방법입니다. 이 아키텍처가 등장하고 나서 Web 애플리케이션에서 실현할 수 있는 UI, 표현이 폭이 비약적으로 넓어졌습니다.

## CSR (Client Side Rendering)

![CSR](https://storage.googleapis.com/zenn-user-upload/wxz7n1mb78uj1tq2e8p2z3gx5ztx)

Ajax와의 차이가 알기 어렵지만, 닮았다고 하면 닮았습니다.
특징으로는 처음 받는 HTML은 거의 비어있고, 페이지 전체를 JavaScript로 생성하는 점입니다.

페이지 transition 하는 것이 아니라, 페이지 전체를 갈아 끼우기에 인터랙션이 빠릅니다.

이렇게 만들어진 애플리케이션을 SPA라 합니다.

한 편, 처음 접속시에 큰 JS 코드를 읽고, 페이지 전체를 처리하기에 초기 로드가 무거워지기 십상입니다.

또 원시적인 크롤러에서는 컨텐츠를 얻지 못하는 경우도 있어서, SEO면에서는 별로입니다.

## SSR (Server Side Rendering)

![SSR](https://storage.googleapis.com/zenn-user-upload/phqr6ndc6bp1gj5nquv3fgwdo146)

CRS 단점(초기 단계 로딩, SEO 문제)을 해결하기 위해, 리퀘스트에 반응해 동적으로 HTML 문서를 반환하는 것이 SSR입니다.

...응? 그말인즉슨, 1번 돌리면 기존에 있던 서버 사이드 애플리케이션이랑 같은거 아닌가? 의문을 가질수 있습니다.

네, 거의 같습니다.

특징은 CSR에서 클라이언트 측과 같은 기술 스택 (JS, 가상 DOM 등)을 서버사이드에서 이용하는 것입니다.

Next.js 등 같은 프레임워크에는 같을 로직을 클라이언트 사이드, 서버사이드로 편하게 구분해서 사용할 수 있습니다.

단점은 역시 서버사이드의 무거움입니다.
특히 프론트에 구현과 같은 감각으로 API 통신 등을 하면 리스폰스에 시간이 걸립니다.

## SG (Static Site Generation)

![SG](https://storage.googleapis.com/zenn-user-upload/iucztcgwn37lbs8xus1b6x923us7)

SSR는 리스폰스가 늦어서, 이를 해결하기 위해 사전에 정적인 HTML를 생성해두자.

이것이 SG입니다. (이전에는 SSG라 불렸습니다.)

...응? 이건 2번 돌려서 정적 HTML? 사이트 제네레이터나 MovableType 같은건가? 생각하실 수 있습니다만

예, 맞습니다.

이것의 특징은 CSR, SSR와 같은 스택으로 사용하는 점입니다. 대응하는 프레임워크를 이용하면 하나의 애플리케이션 안에서 CSR, SSR, SG를 적재절소에 사용할 수 있습니다.

SSG로 빌드할 때 HTML를 생성하므로, 배포가 빠르지만, 디플로이한 후에 페이지 내용을 동적으로 변경하는 것은 불가능합니다.

## ISR (Incremental Static Regeneration)

![ISR](https://storage.googleapis.com/zenn-user-upload/wfy0mieh8x1j4ie0i6paf4kr1980)

SG은 빠르지만, 내용을 갱신할 수 없다.

ISR는 이것을 해결하기 위한 방법으로, SSR과 SG의 하이브리드라 볼 수 있습니다. SSR도 SSG도 기시감 있는 아키텍쳐이지만, ISR은 지금까지 본 적 없는 구조입니다.

ISR에는 SSR 같은 리퀘스트에 HTML를 생성하지만, 생성은 백그라운드에서 하면서, 이미 생성된 오래된 HTML를 반환합니다. 그렇기에 내용은 조금 오래된 것이라도 SSG과 비슷한 레벨로 빠르게 리스폰스됩니다.

## 맺음말

ISR은 상당한 놈이지만, 최신 컨텐츠를 반환하는 것이 불가능하므로, 어떤 상황에서도 사용할 수 있다. 이런 놈이 아닙니다. Next.js를 사용하면 CSR, SSR, SG, ISR를 적재적소에 편히 구분해서 사용할 수 있습니다.

이것이 포인트라 생각합니다.

서버측에서도, 클라이언트측에서도 모두 단일 코드 베이스로 monolithic한 애플리케이션으로 개발을 할 수 있습니다. 이런 특징은 1인 개발으로 스톨스타트하는 경우 엄청난 속도를 이점으로 가져갈 수 있기에 유리하다 생각합니다.
