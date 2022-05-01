---
slug: 2022-05-01-flux-and-react
title: flux와 가상돔에 대해서
authors: rewrite0w0
tags: [architecture, react, 감상]
---

React를 보고 있으면 **Flux**라는 친구를 만난다. 그래서 이에 대해 조사해보기로 했다.

<!-- ## TL;DR

React는 가상 DOM을 사용하며, 이를 위한 방법으로 Flux 패턴을 취하고 있다. -->

## 가상 DOM

먼저 Flux를 만나기 전에, React하면 떠오르는 친구인 가상 DOM을 보자.

[공식문서에 의하면](https://ko.reactjs.org/docs/faq-internals.html#gatsby-focus-wrapper)

> Virtual DOM (VDOM)은 UI의 이상적인 또는 **“가상”**적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 **“실제” DOM과 동기화**하는 프로그래밍 개념입니다. 이 과정을 **재조정**이라고 합니다.
>
> 이 접근방식이 React의 **선언적 API를 가능하게** 합니다. **React에게 원하는 UI의 상태를 알려주면 DOM이 그 상태와 일치하도록 합니다.** 이러한 방식은 앱 구축에 사용해야 하는 어트리뷰트 조작, 이벤트 처리, 수동 DOM 업데이트를 **추상화**합니다.
>
> “virtual DOM”은 특정 기술이라기보다는 **패턴에 가깝기 때문에 사람들마다 의미하는 바가 다릅니다.** React의 세계에서 “virtual DOM”이라는 용어는 보통 **사용자 인터페이스를 나타내는 객체**이기 때문에 **React elements와 연관**됩니다. 그러나 React는 컴포넌트 트리에 대한 추가 정보를 포함하기 위해 “fibers”라는 내부 객체를 사용합니다. 또한 React에서 “virtual DOM” 구현의 일부로 간주할 수 있습니다.

**한 마디로, DOM과 별개로 가상의 표현을 두고, 그것을 추상적으로 조작하며 재종정하는 것이다.**

### DOM

그럼 애초에 DOM은 무엇일까?

[MDN를 보자](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)

> 문서 객체 모델(The Document Object Model, 이하 DOM) 은 **HTML, XML 문서의 프로그래밍 interface** 이다. **DOM은 문서의 구조화된 표현**(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 **변경**할 수 있게 돕는다. **DOM 은 nodes와 objects로 문서를 표현한다.** 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.
>
> 웹 페이지는 일종의 문서(document)다. 이 문서는 웹 브라우저를 통해 그 내용이 해석되어 웹 브라우저 화면에 나타나거나 HTML 소스 자체로 나타나기도 한다. 동일한 문서를 사용하여 이처럼 다른 형태로 나타날 수 있다는 점에 주목할 필요가 있다. **DOM 은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다.** DOM 은 **웹 페이지의 객체 지향 표현**이며, 자바스크립트와 같은 스크립팅 언어를 이용해 DOM 을 수정할 수 있다.

**한 마디로, 형식있는 (웹)문서를 조작하는 표현이다.**

가상 흔히 쓰는 방법은 이하와 같이 무엇인가 선택하거나, 만들어서 요소를 확인/추가/변경/삭제 등등을 하는 것

```js
const element = document.querySelector('무엇인가');
element.children;
const div = document.createElement('div');
div.textContent = 'test';
```

## Flux

데이터 흐름을 처리하는 방법이다.

단방향 모델이며, `MVC`는 금방 복잡화되기 때문에 facebook(현 Meta)는 [`MVC` 패턴을 버리고 Flux 패턴을 선택했다.](http://www.infoq.com/news/2014/05/facebook-mvc-flux)

왜 그렇게 했는가 [영상](https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&time_continue=621&v=nYkdrAPrdcw)에서는 이렇게 설명한다. (물론 facebook인 MVC를 오독을 했다는 의견도 있다.)

> MVC를 작은 애플리케이션에 적용했지만 이런 식으로 복잡해졌다.

![MVC](<https://imgopt.infoq.com/fit-in/1200x2400/filters:quality(80)/filters:no_upscale()/news/2014/05/facebook-mvc-flux/ja/resources/flux-react-mvc.png>)

> 이렇게되면 모델관련 뷰가 대량으로 추가되어 복잡화가 폭발했다.
> 이러한 애플리케이션은 모델과 뷰 사이의 쌍방향 데이터 흐름이 만들어질 가능성이 있으므로, 이해하거나 디버그가 어려워진다. 그렇기에 Flux에 의한 설계를 대안으로 선택했다.

![Flux Basic](https://camo.qiitausercontent.com/dfc8fb3817c3f59861ced5659268a27226d01218/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3133343239342f66356133396564642d323462392d656362622d323837332d3330646265623933316533382e706e67)

![Flux + Action](https://camo.qiitausercontent.com/c74d7bca36e1b79bcbc5885a231b3854b2902afa/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33393338322f66643533356364332d386462362d303431312d326138652d3739316139626361356631632e706e67)

> 이 그림에서
>
> `Store`는 애플리케이션의 모든 데이터를 포함하고 있으며,
>
> `Dispatcher`는 `MVC 그림의`에서 `Controller`를 갈아끼우므로 어떤 Action이 일어날 때,
>
> 어떻게 `Store`를 갱신할까 결정하는 것이다.
> Store가 변경될 때는 `View`도 동시에 갱신되어 그것과 함께 `Dispatcher`가 처리될 `Action`를 발생할 수 있다.
> 이로인해 시스템의 컴포넌트 사이에 단방향 데이터흐름만 생긴다는 보장한다.
>
> 복수의 Store, View를 갖는 시스템도, 하나의 Store, View를 갖은 시스템 모두 같다 볼 수 있다.
>
> 왜냐면 데이터는 단일한 방향으로만 흐르며, 각 Store, View가 서로 직접 영향을 미치지 않기 때문이다.

`Facebook이 직접 밝힌 상세한 설명을 보자.`

> dispatcher는 Flux 애플리케이션 모든 데이터 흐름을 관리하는 중앙 허브이다.
>
> 이는 본질적으로는 Store 안에 콜백을 등록하는 곳이다.
>
> 각 Store는 각 자신을 등록한 제공을 제공한다.
>
> 이 dispatcher가 어떤 액션에 대응할 때 애플리케이션 안에 모든 Store는, 그곳에 **등록되어 있는 콜백에 의해 액션으로인해 생긴 데이터를 송신**하는 것이다.
>
> 애플리케이션 성장에 따라, 결정된 순서로 등록된 콜백 실행을 하므로, Store 간의 의존관계를 관리하는 dispatcher는 더욱 불가결한 것이 된다.
>
> Store는 다른 Store 갱신이 완료할 때까지 갖을 수 있다.
>
> 그리고 그 후, 자신을 갱신한다.
>
> **Store는 애플리케이션 상태와 로직을 포함한다.**
>
> _Store 역할은 고전적인 MVC에 의해 Model의 역할과 닮아있지만,_
>
> **여러 객체 상태를 관리해서, 하나의 객체 인스턴스가 아닌 것이 차이이다.**
>
> 또한 Bacnbone 프레임워크 콜랙션과 같지는 않다.
>
> ORM 형식 객체 집합을 관리하는 것보다 단순하며,
>
> Store는 애플리케이션 안에 특정 도메인에 대한 애플리케이션 상태관리한다.

일반적인 사용 예제는 이러하다

![Flux React Example](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F150569%2F41f7cd50-765f-7eb6-badf-8e0b5917bb2d.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=95c8d356c2bd4c7303dc2325fda8e1fb)

> 여담으로 `observer` 패턴이다.

## 중간정리

### MVC

`C -> (M <-> V)`

### Flux

```
Views ---> (actions) ----> Dispatcher ---> (registered callback) ---> Stores -------+
Ʌ                                                                                   |
|                                                                                   V
+-- (Controller-Views "change" event handlers) ---- (Stores emit "change" events) --+
```

## React와 Flux와 가상 DOM

### React는 왜 가상 DOM일까?

**어느정도의 설계와 속도 양립**이 가능하기 때문.

이를 위한 방법으로 `완성된 가상 DOM에 계속 Push한다`

[이 방법은 `HTTP 리퀘스트 => HTML 반환` 조작과 같다(!)](https://qiita.com/mizchi/items/4d25bc26def1719d52e6#virtual-dom%E3%81%8C%E3%82%82%E3%81%9F%E3%82%89%E3%81%99%E5%8F%A4%E3%81%8F%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E8%80%83%E3%81%88%E6%96%B9)

이를 위한 수단으로 선택한 것이 Flux이다.

결국 Flux와 가상 DOM의 조합으로 인해서

가상 DOM에 의해 **퍼포먼스면에서 문제없이 늘 제로에서 상태를 구축**이 가능하다.

대신, 데이터 바인드와 퍼포먼스, 이벤트 핸들러의 사정으로 이전의 HTML를 버리는 것은 불가능했다.

제로에서 구축해 HTML를 push하면, 화면이 한 번 사라지는데다가,

이벤트 핸들러 처리를 반드시 한 번 처리해야 한다.

하지만 가상 DOM에서는 이벤트 핸들러도, 동시에 적용되고 patch할 대상이므로 신경쓸 일은 아니다.

### 번외: Redux

Redux는 Flux의 파생이다.

하지만 차이가 있다.

Redux에는 3원칙이 있으며, `Dispatcher`는 없다.

> [3원칙:](https://redux.js.org/understanding/thinking-in-redux/three-principles)
>
> - Single source of truth: 신뢰할 유일한 정보처
> - State in read-only: State는 읽기 전용
> - Changes are made with pure functions: action이 state를 변경할 때 reducer를 실행, reducer는 action는 state를 받으며, 새로운 state를 반환하는 순수한 함수이다.

또 State 객체를 직접 변환하지 않고 새로운 state 객체로 갈아끼우는 방법을 취한다.

#### Flux

![Flux](https://camo.qiitausercontent.com/458d7d52d34c4e3ae7b390af76985292ae1b1b02/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33393338322f32363464633637652d646136352d343766332d643735312d3836626137356135353233372e6a706567)

#### Redux

![Redux](https://camo.qiitausercontent.com/50fac8c3a36d87cefc34e41382dd9feebf5e7fe4/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33393338322f38356530393432392d643966362d303738392d386434332d6364613637643166323037652e6a706567)

<!-- ## 결론 -->

## 읽을거리

- https://facebook.github.io/flux/
- https://reactjs.org/blog/2014/05/06/flux.html
- https://qiita.com/mizchi/items/4d25bc26def1719d52e6
- https://zenn.dev/hanak1a/articles/10206c2a4201521b2abc
- https://www.infoq.com/news/2014/05/facebook-mvc-flux/
- https://velopert.com/3236
- https://ko.reactjs.org/
- https://developer.mozilla.org/
- https://qiita.com/kouh/items/dfc14d25ccb4e50afe89
- https://saneyukis.hatenablog.com/entry/2014/09/26/174750
- https://qiita.com/knhr__/items/5fec7571dab80e2dcd92
- https://hogehuga.com/post-1095/
- https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/
- https://zenn.dev/arranzt/articles/01807d1b3d2fc1
- https://programmingwithmosh.com/react/react-virtual-dom-explained/
- https://qiita.com/syossan27/items/7e1b2e07ac68b96bdaa7
- https://blog.logrocket.com/jotai-vs-recoil-what-are-the-differences/
