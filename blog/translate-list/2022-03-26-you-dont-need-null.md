---
slug: you-dont-need-null
title: You don't need null
authors: rewrite0w0
tags: [you don't need, javascript, 번역]
---

# You don't need null

"nullish" 타입(`null`, `nil`, 등등)을 갖고 있는 프로그래밍 언어가 이걸 회피하기 위한 논의가 늘 진행됩니다.
JavaScript는 인기있는 언어 중에서 Nullish 타입을 **둘** 갖고 있는 유일한 언어입니다. 가장 권해지는 방법은 하나만 사용하는 것인데 저는 `undefiend`만 사용하고, `null`은 쓰지 않도록 하고 있습니다.
이 글에서는 JavaScript, TypeSciprt에서 `null`를 왜 피하고 싶고 어떻게 피하는가 설명합니다.

## 왜 nullish 값을 피해야 하나요?

**null pointer**의 아버지 [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare)는 말합니다

"null 참조는 10억 달러 실수다"

> 나는 이걸 10억 달러 실수라 한다. (...) 내 목표는, 참조 사용은 모든 컴파일러가 자동으로 체크함으로 절대 안전하다는 것을 보증하는 것이었다. 그러나 구현이 간단하지 않다는 이유로 null 참조를 넣는다는 유혹에게 졌다. **그 결과 무수한 에러와 취약성, 시스템 이상이 발생했고, 근 40년간 아마 10억 달러 손해를 입힌 것 같다.**

nullish 값을 사용할 때, 표현하고 싶은 것은 무엇인가 "없다", "값이 없다" 입니다. 일반적으로 정적 타입 언어는 "optional values"로 부릅니다. 왜냐면 값이 설정되어있는가, nullish인가 중 하나이기 때문이죠.

단도직입적으로 이 의미는 "optional values"을 타입과 nullish value으로 테스트해야한다는 뜻입니다.

그럼 nullish가 2개 가지고 있는 것이 어떤 나쁜 영향을 끼치는가 상상해봅시다. 보수유지성, 가독성, 그리고 코드 품질에 악영향을 끼칩니다. 그래서 권하는 방법은 nullish를 최대한 피하는 것입니다. JavaScript에서는 하나만 사용해주세요. 이어지는 글에서는 저(와 여러 개발자)가 `null`보다 `undefined`를 좋아하는 이유를 확인할 수 있습니다.

## nullish를 사용하는 언어

JSON의 아버지 [더글라스 크록포드](https://en.wikipedia.org/wiki/Douglas_Crockford)는 [강연에서 ](https://youtu.be/PSGEjv3Tqo0?t=563), JavaScript 자체가 undefined를 기본으로 사용하고 있기 때문에 사용하자 합니다. 예시를 보죠.

```js
let something; // undefined

const otherThing = {
  foo: 'hi',
};
otherThing.bar; // 역시 undefined

const aFunction = (anArgument) => {
  // anArgument는 값이 undefined
};
```

`null`를 사용하면 일일히 명시적으로 `null`를 넣어줘야합니다.

```js
let something = null;

const otherThing = {
  foo: 'hi',
  bar: null,
};

const aFunction = (anArgument = null) => {};
```

당신에게 어떤지 몰라도 저에게는...
![THAT'S UNDEFINED WITH EXTRA STEPS](https://res.cloudinary.com/practicaldev/image/fetch/s--2Nw1sJgq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nvnaj5djefaut2poonpg.png)

## 의도적으로 nullish 값을 정의하고 싶다면?

그럴 때는 그냥 `undefined` 대입하면 됩니다.

```js
const anObject = {
  ...otherObject,
  propertyToNullify: undefined,
};
```

## null의 괴상한 타입 버그

`typeof null` 버그는 모두 아시는대로 `undefined`가 아니라는 겁니다.

```js
typeof null; // "object" 🤷🏻
typeof undefined; // "undefined" 🎉
```

버그값을 의도적으로 사용할 필요가 없죠?

## 귀여운 API response

`null`대신 `undefined`를 사용하면 API response 크기가 감소됩니다. 예시를 보죠.

```json
// null
{
  "foo": "foo",
  "bar": null
}
```

Vs

```json
// undefined
{
  "foo": "foo"
}
```

## 배열에서

`배열`은 특수한 경우입니다. 크기를 부여한 배열을 만들면 그 배열에는 `undefined`가 아니라 `empty`가 있습니다. `empty`는 값을 확인하면 `undefined`이지만 메모리에서는 공간을 부여받지 못했으므로(성능 상 이유로) 이를 반복문에 돌려봐도 아무 것도 없습니다.

```js
const array = new Array(3); // [empty, empty, empty]
array[0] === undefined; // true
array.map(console.log); // nothing logs 🤦🏻
```

## null를 지지하는 의견

제가 "`null`은 필요없다" 말하면, null 사용자(일반적으로 `null`만 있는 언어에서 온 사람)는 격렬히 반대의 목소리를 냅니다. 주로 이런 반응으로요.

> null은 의도적으로 값을 비우기 위함이며, undefined은 값이 설정되어져 있지 않을 때에만 사용해야 한다.

이 주장을 보며 느낀것은, 왜 그러한 구별을 해야하는가? 둘 다 "nullish"인데, "의도가 있다", "의도가 없다"를 구별할 필요가 있을까요? null의 일반적 사용 방법은 이런 경우입니다.

```js
const people = [
  {
    firstName: 'Luke',
    middleName: null,
    lastName: 'Shiru',
  },
  {
    firstName: 'Barack',
    middleName: 'Hussein',
    lastName: 'Obama',
  },
];
```

하지만 유저가 `middleName`을 갖고 있지 않다면, 그냥 생략하면 될 뿐입니다.

```js
const people = [
  {
    firstName: 'Luke',
    lastName: 'Shiru',
  },
  // ...
];
```

그리고 `middleName`를 반드시 알아야 한다면, 빈 문자열을 설정하면 됩니다.

```js
const people = [
  {
    firstName: 'Luke',
    middleName: '',
    lastName: 'Shiru',
  },
  // ...
];
```

TypeScript라면 이렇게도 되죠

```ts
type Person = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
```

왜 메모리를 굳이 사용하나요? 왜 굳이 백엔드에서 오는 JSON에 비트를 소비하나요? 없는 건 생략하면 그만입니다.

> 하지만 API에 null이 있어(아마 Java로 적혀있는), 내 애플리케이션에도 null를 쓰지 않으면 안 된다.

이에 대한 제 답은 API wrapper를 사용하는 것입니다.

코드 전체에 `null`를 "전염시키기"보다 API에 연결할 때 `null`를 제거하고, 만약 API 담당자와 연락이 닿는다면 `null`를 제거하면 API response가 경량화되는 것을 설명해서 설득합시다. `null`를 완전히 회피할 수 있는데, `null` 대처하느라 [애플리케이션을 과잉 설계하거나 복잡하게 만들](https://dev.to/sargalias/nulls-and-null-checks-how-to-work-safely-with-nulls-in-any-codebase-1oeh) 이유가 없습니다.

> 그런데 저는 React에서 렌더링 시키고 싶지 않을 때 `null`을 씁니다.

`undefined`로 대체할 수 있습니다.

> `undefined`는 `null`보다 5글자나 많습니다.

암묵적으로 의지한다(값을 생략한다)하면 되는 일이지만, 반드시 매번 명시적으로 타이핑해야 한다하더라도 `null`을 쓰는 것보다 가치가 더 큽니다.

## nullish가 없는 언어

세상에는 `null` 대신 `Maybe`라는 "어떤 타입일수도, 아무것도 아닐 수도" 타입이 존재하는 언어가 있습니다.
이를 TypeScript로 구현하면 이런 느낌이죠.

```ts
type Maybe<Type> = Type | undefined;
```

기대하는 타입을 얻을 수도, `undefined`일 수도 있습니다.
프로퍼티나 인수라면 `?`를 사용하면 됩니다.

```ts
const aFunction = (optionalArgument?: Type) => // ...
type AnObject = {
    optionalProperty?: Type;
};
```

이 "Maybes"를 쓰려면 nullish coalescing(`??`), optional chaining(?.)를 쓰면 됩니다.

```js
// 이런 번거로운 일을 하지 않아도 됩니다.
const greet = (name) => `Hello, ${name !== null ? name : 'Guest'}`;

// 이렇게하면 되죠
const greet = (name) => `Hello, ${name ?? 'Guest'}`;

// 실제에서는 우리는 undefined를 사용하고 있으므로 더 좋은 방법은 이거지만...
const greet = (name = 'Guest') => `Hello, ${name}`;
```

## Linting

만약 `null`은 백해무익하다는 확신을 느꼈다면, [ESLint 플러그인](https://www.npmjs.com/package/eslint-plugin-no-null)을 사용해서, 앞으로는 `null`를 회피할 수있으니, linting 규칙에 이것을 추가해보시는 것도 좋겠네요.

```json
{
  "plugins": ["no-null"],
  "rules": {
    "no-null/no-null": "error"
  }
}
```

## 읽을 거리

`null`에 대해 저랑 같은 의견을 갖은 개발자의 글을 소개하겠습니다.

- [Abandon null in favor of undefined in Angular.](https://github.com/angular/angular/issues/42713)
- [Null is bad](https://hamednourhani.gitbooks.io/typescript-book/content/docs/tips/null.html) by a [lot of people](https://github.com/basarat/typescript-book/graphs/contributors).
- [Why you should always use undefined, and never null](https://writingjavascript.com/why-you-should-always-use-undefined-and-never-null) by Fredrik Söderström.
- [TypeScript coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined)
- [A StackOverflow answer](https://stackoverflow.com/a/28825847/1621910).
- [The Better Parts](https://youtu.be/PSGEjv3Tqo0?t=563) by Douglas Crockford.

## 맺는말

JavaScript에서 null에 대한 제 의견은 "null을 써야한다면 undefined를 써라"입니다. 당신의 의견은 다를 수도 있겠습니다만...
그럼 언제나처럼 질문으로 글을 맺겠습니다.

null을 사용할 필요가 있나요?

null이 없어도 해결할 수 있는 방법이 있지 않을까요?

이 시리즈를 계속할 수 있도록 동기부여를 주신 3100명이 넘는 팔로워에게 감사합니다! 읽어주셔서 감사합니다.

혹시 글에 동의할 수 없다면 댓글 부탁드립니다.

그럼 다음 글에서 만납시다.

> 면책
>
> "You don't **need** ..." 로 불리는 시리즈입니다.
>
> 이 시리즈는 대안을 모색하는 것이지 강요가 아닙니다.
>
> 그러므로 글을 읽고, 댓글을 쓰기 전에 생각해주세요.
>
> **서로를 존중합시다.**
