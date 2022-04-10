---
slug: try-understand-csr-ssr-ssg-isr
title: (Next.js) CSR, SSR, SG(SSG), ISR가 모호한 당신을 위해 찬찬히 해설
authors: rewrite0w0
tags: [javasciprt, Next.js, React, typescript, 번역]
---

> [글](https://zenn.dev/akino/articles/78479998efef55)

안녕하세요, [아키노](https://twitter.com/akino_1027)입니다. Web 엔지니어일을 하고 있습니다.

## 들어가며

일로 `Next.js`를 사용하고 있지만 `SSG` `SSR` `ISR` 이런 지식이 모호했기에 각잡고 해설했습니다. 틀린점을 알려주신다면 감사합니다.🙇‍♂️

이하, 본문입니다.

## 각 컨셉의 기본 해설

### CSR

> [Client-Side Rendering (클라이언트 측 렌더링) - 브라우저에서 애플리케이션을 렌더링합니다. 일반적으로 DOM을 사용합니다.](https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ko)

한 마디로 서버가 아니라, (JS로 인해) 브라우저 측에서 렌더링하는 방법입니다. **하지만** `CSR`은 규모가 큰 애플리케이션이라면 클라이언트에서 처리하는 JS 양이 많아집니다. **이에 따라 유저에게 느리게 페이지를 보여줍니다. (유저의 기기 스펙에 의존)**

이 문제를 해결하기 위해 **`SSR`가 등장합니다.**

### SSR

`CSR` 같은 로직, 데이터 페치를 브라우저에서 일으키면, **서버에서 처리(데이터 페치 등을)하고, HTML을 구축해 클라이언트에 반환하는 방식입니다.**

`CSR`와 달리 클라이언트의 스펙 의존없이 **하이스펙한 서버에서 HTML를 구축할 수 있습니다.**

그렇지만 리퀘스트 마다 서버가 처리하고, HTML 구축되므로, 유저를 기다리는 시간이 여전합니다. 여기서 **`SSG` 등장합니다.**

### SSG

`SSR`의 문제(`CSR`도)로 **유저 리퀘스트를 받고나서 HTML를 구축하므로, 시간이 걸린다.** 문제가 있었습니다. 이를 해결하기 위해 `SSG`가 등장합니다.

**`SSG`은 빌드 할 때 html를 구축합니다. 이 때 외부 API에서 데이터 페치도 합니다. 그리고 유저가 리퀘스트할 때 사전에 구축되어 있는 HTML를 보여줍니다. 또, 애플리케이션 서버에서 HTML를 반환하는게 아니라 CDN에 캐시해 두면 유저는 고속으로 페이지를 볼 수 있습니다. 이렇게 함으로 `SSR`보다 유저는 빠르게 페이지를 볼 수 있습니다.**

다만 여기에는 문제가 있습니다. 그것도 **2개**나.

1. 빌드할 때 대량의 데이터 취급하는건 현실적이지 않습니다. 예를 들어 아마존 같은 거대 EC 사이트라면 빌드할 때 모든 데이터를 받아 HTML를 구축하는 것이 어렵습니다.

> 이 문제는 **폴백이 해결해줍니다.**

2. 리소스 갱신이 빈번하다면 어떻게 될까요? 예를 들어 트위터 같이 많은 사람이 컨텐츠를 갱신하는 경우(갱신이 격렬한 경우)는 `SSG` 로 정보를 보여줄 수 없습니다. 왜냐면 빌드할 때 데이터 페치하니깐요

> 이 문제를 해결 위한 방법이 **`ISR`입니다.**

#### 폴백

```jsx
export async function getStaticPaths() {
  return {
    paths: [
      // 생략
    ],
    // 여기에！！
    fallback: true,
  };
}
```

`getStaticPaths()` 함수 안에 `fallback`를 보세요. 이 값이 `false`라면 존재하지 않은 페이지 접속하면 404으로 보냅니다. `true`라면 데이터 페치 하지 않은 상태의 HTML를 반환해, 나중에 브라우저가 데이터 페치를 하고 HTML를 재구축합니다.

동시에 서버 측에서도 똑같이 데이터 페치가 일어나고, HTML를 행합니다. 이후 리퀘스트에서는 서버측에서 완전한 HTML(데이터도 포함된)이 반환됩니다.

그렇지만 비완전한 상태의 HTML(데이터가 포함되어 있지 않음)이 클라이언트로 보내지므로 이 부분이 결점입니다. 이것도 해결할 수 있습니다.

#### blocking

```jsx
export async function getStaticPaths() {
  return {
    paths: [
      // 생략
    ],
    // 여기에！！
    fallback: 'blocking',
  };
}
```

`fallback` 값이 `blocking`이라면 데이터를 얻지 않은 페이지 접속할 때 서버에서 불완전한 상태로 HTML를 보내는 것이 아니라 **데이터 페치가 일어나고 나서 HTML가 구축되고, 클리어언트측으로 HTML가 보내집니다.**

### ISR(Incremental Static Regeneration)

```jsx
export async function getStaticProps(hoge) {
  return {
    props: { hoge },
    revalidate: 10, // 여기에 추가
  };
}
```

`getStaticProps()`함수 return 안에 `revalidate` 값으로 임의의 숫자를 넣어보세요. **이 수 초 이후에 리퀘스트가 올 떄, 서버 측에서 데이터 페치를 다시 행하고, HTML를 재구축 합니다.** 여기서 중요한 점은 리퀘스트한 유저에게는 캐시한 HTML를 반환한다는 점입니다.

일정 시기마다 서버사이드 렌더링을 일어남으로, 빠르게 페이지 렌더링을 실현할 수 있습니다. 이렇게 하면 게시된 데이터의 갱신 빈도가 높아지고 새로운 데이터를 볼 수 있습니다.

그렇지만 `ISR`은 최신 정보가 유저에게 전달되는 것이 아닙니다. (최초 리퀘스트할 때는 캐시된 HTML가 반환되므로)

사용을 구분해서 이런 느낌을 가지면 좋을 듯 합니다.

- 리퀘스트할 때 새 정보가 없어도 좋다: `ISR`
- 리퀘스트할 때 새 정보가 있어야 한다: `SSR`이나 (`SWR`를 사용한) CSR

이상입니다. 🙇‍♂️

### 참조글

[Next.js에 의한 SSG과 ISR에 대해 (자신의) 한계까지 세세히 설명](https://qiita.com/thesugar/items/47ec3d243d00ddd0b4ed)
[Next.js ISR 이해](https://zenn.dev/ria/articles/b709ae94e919c76f814a)
