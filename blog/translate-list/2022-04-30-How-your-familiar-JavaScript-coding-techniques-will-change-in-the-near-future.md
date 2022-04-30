---
slug: 2022-04-30-How-your-familiar-JavaScript-coding-techniques-will-change-in-the-near-future
title: JavaScript 진화에 변화할 코딩 습관
authors: rewrite0w0
tags: [javascript, ECMAScript, 번역]
---

> [글](https://speakerdeck.com/line_developers/how-your-familiar-javascript-coding-techniques-will-change-in-the-near-future)

## JavaScript 진화에 변화할 코딩 습관

2022-03-25 UIT Meetup vol.15 『Relearn Modern Web Standard』[uhyo](https://twitter.com/uhyo_)

## About Speaker

[uhyo](https://twitter.com/uhyo_)

LINE 프론트엔드 엔지니어

TypeScript, React 전문

[TypeScript 입문서 발간](https://gihyo.jp/book/2022/978-4-297-12747-3)

## This Talk

JavaScript에는 여러 모범사례가 있으며,

JavaScript를 사용하며 자연스레 몸에 배인다.

한 편, JavaScript 진화는 가속되어,

이에 따른 모범사례도 변화한다.

앞으로 도입될 것 같은 **ECMAScript의 새 기능**을 통해
상식을 갱신합시다!

## 1. Temporal

| 현재의 상식                     | 장래의 상식            |
| ------------------------------- | ---------------------- |
| 표준Date 사용어려움             | 표준 **Temporal** 사용 |
| moment.js는 크기가 너무 크다    |                        |
| dayjs 같이 경량 라이브러리 사용 |                        |

### Temporal?

- **State3 Proposal**
- 아직 처리 계에 탑재되지 않은 (IETF 표준화 작업 필요) 시간 처리 새로운 객체 집합
- 특징:
  - 불변(immutable)
  - 용도별로 나눠져 있는 객체 집합

### 예시

```js
const aprilFool = Temporal.PlainDate.from("2022-04-01")
const today = Temporal.Now.plainDateISO()
const diff = aprilFool.since(today)  diff.toString() // "P7D"  diff.toLocaleString() // "7 days"

```

### Temporal 객체

![temporal example](/img/temporal_example.jpg)

> [Temporal documentation](https://tc39.es/proposal-temporal/docs/) 에서 인용

### 당장 사용 가능한 Polyfil

[@js-temporal/polyfill](https://github.com/js-temporal/temporal-polyfill)

**대신 크기는 크다**

| **@js-temporal/polyfill** | **dayjs** |
| ------------------------- | --------- |
| Bundle Size               |
| MiniFied                  |           |
| 217.9kb                   | 6.4kb     |
| Minified + Gzipped        |
| 54.2kb                    | 2.8kb     |
| DownLoad Time             |           |
| Slow 3G                   |           |
| 1.08s                     | 57ms      |
| Emerging 4G               |           |
| 62ms                      | 3ms       |

(지금부터 소개하는 다른 기능에도 말씀드리겠지만)

지금 사용 하려면

**빌드 사이즈 부하, 미완성 기능이라는 위험**

**장래를 위한 투자** 등을 감안해 판단해주세요

## 2. Iterator Helpers

| 현재의 상식                                                                       | 장래의 상식                                                              |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ES2015 이후 API의 대부분은 Iterator를 반환한다. (Map#entries 같이)                | Iterator 생성하는 메서드(Iterator Helpers)를 사용해 Iterator 자체로 조작 |
| Iterator에 조작을 가하려면 우선 Array.from으로 배열로 변환한다 ([...arr] 도 가능) |                                                                          |

### Iterator Helpers?

- **stage2 proposal**
- `map`, `filter` 같은 메소드를 `Iterator`에 생성
  - 중간 배열 객체를 만들지 않으니 메모리 절약될지도?
  - AsyncIterator 지원도
- 지연처리
  - Iterator에 배열화 next() 호출을 하는 메서드의 계산이나 원본 데이터 소비 등을 하지않는다.

### 예시

#### 지금까지 방식

```js
Array.from(map.entries())
  .filter(([k, v]) => v === 'yes')
  .map(([k, v]) => k);
```

#### Iterator Helpers

```js
map
  .entries()
  .filter(([k, v]) => v === 'yes')
  .map(([k, v]) => k)
  .toArray();
```

### Iterator Helpers의 지금까지 상황

- Polyfill도 있지만, State2 이므로 사용하기 좀 무서움
- **앞으로 Iterator 지위를 올려주므로** 지금 Iterator를 더 많이 익혀두자 (function\* 제네레이터 함수 적극적 사용 등)

## 3. Change Array by Copy

| 현재의 상식                                                                 | 장래의 상식                                   |
| --------------------------------------------------------------------------- | --------------------------------------------- |
| 일부 배열 메서드는 파괴적인 것만 있었으므로 사용할 때 배열을 복사해야 했다. | 배열에 비파괴적 메서드가 생겼으니 이것을 사용 |

### Change Array by Copy

- Stage2 Proposal (역주: 지금은 3 [상세는 역자 블로그 참조](/blog/change-array-by-copy-stage3))
- 배열에 비파괴적 메서드 늘림
  - toReversed, toSroted, toSplice, with
- Records & Tuples에서 역수입됨

_Stage 2이므로 메서드명은 확정이 아님_

### 예시

#### 지금까지 방식

```js
const sorted = [...arr];
sorted.sort();
const fixed = [...arr];
fixed[3] = 3.14;
```

#### Change Array by Copy

```js
const sorted = arr.toSorted();
const fixed = arr.with(3, 3.14);
```

### 대비하기

`sort로 원본 배열을 파괴하지 않기에 먼저 복사한다` 같이 상식이 이제는 낡은 상식이 될 가능성이 높으므로 최신 정보를 계속 주시할 것

## 4. String.cooked

| 현재의 상식                                                                               | 장래의 상식                |
| ----------------------------------------------------------------------------------------- | -------------------------- |
| 스스로 만든 템플릿 태그 함수를 구현할 때 문자열의 연결을 스스로 구현할 필요가 있어서 귀찮 | String.cooked 사용하면 끝! |

### String.cooked?

- **Stage1 proposal**
  - `아무것도 하지 않는` 태그 함수
  - 비교적 새로우면서 내용이 간단하기에 빨리 도입될 듯(예상)

```js
const whose = 'My';
`Hello! ${whose} World!!` === String.cooked`Hello! ${whose} World!!`;
```

_Stage1 이므로 메서드명은 확정이 아님_

### 사용방법

#### 지금까지 방식

```js
// 지금까지는 문자열 연결을 직접 구현할 필요가 있었다.

function tag(strings, ...values) {
  let result = '';
  for (const [index, value] of values.entries()) {
    result += strings[index] + value * 5000 + '조';
  }
  result += strings.at(-1);
  return result;
}
console.log(tag`I have ${1}조`); // I have 5000조
```

#### String.cooked

```js
// String.cooked를 사용하면 문자열 연결을 맡길 수 있음
function tag(strings, ...values) {
  return String.cooked(strings, ...values.map((x) => x * 5000 + '조'));
}
console.log(tag`I have ${1}`); // "I have 5000조"
```

### 대비하기

- 태그함수를 구현할 때, 연결부분을 덮어쓰는 일이 많았지만, 언젠가 사용하지 않을 가능성이 높으므로 최신정보 주시할 것
- 태그 붙은 템플릿 리터럴은 에디터 지원 등 관점에서도 편리하기에 자작하는 선택지도 몸에 익혀두자.

## 정리

- JavaScript 진화와 함께 상식도 변화한다.
- 지금 `어쩔 수 없지`는 미래에는 `낡은 상식`
- **TC39 구경은 재밌다!**
