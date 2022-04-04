---
slug: you-dont-need-if
title: You don't need if
authors: rewrite0w0
tags: [you don't need, javascript, 번역]
---

> [글](https://dev.to/vangware/you-dont-need-if-37f1)

내 고등학생의 마지막 학년, 첫날이었다.
새로 온 프로그래밍 선생님이 도착했고, 잠시 침묵하시더니 수업을 시작했다.

> 올해는 C++를 사용해서 영속성을 갖은 state machine를 만듭니다. state machine은 on/off가 되는 전구같은 녀석입니다.

우리는 "그럼 간단하네" 생각하며 서로를 쳐다보았다만 그는 폭탄을 던졌다.

> `if`, `for`는 사용할 수 없는 조건입니다.

순간 교실은 혼란에 휩쌓였다. 제어문은 모든 프로그래머가 처음에 배우는 것 중 하나니까. 선생님의 목적은 조건을 `if`로, 반복을 `for`로 생각하는 버릇을 버리고 코드에 추상화된 논리를 담아야 한다는 것을 가르치기 위함이었다. JavaScript라면 이렇게된다.

- `if/else`
- `for/of/in`
- `while`
- `do/while`
- `switch/case`
- `try/case`

이번에는 더 안전하면서 클린한 대체품을 소개하겠습니다.
자, 여행을 떠나죠!

## 조건문(if/switch)

예시를 보며 생각해봅시다.

```js
const welcomeMessage = ({ admin }) => {
  let message;
  if (admin) {
    message = 'Welcome, administrator!';
  }
  return message;
};
```

유저 인수를 받아 메시지를 반환하는 `welcomeMessage` 함수를 봅시다. 단순한 코드라 문제를 눈치채지 못할 수도 있습니다. JavaScript도 에러를 뿜지 않고요.
문제는 메세지 기본값이 없으므로 처리를 바꿔야 합니다.

```js
const welcomeMessage = ({ admin }) => {
  let message = 'Welcome, user';
  if (admin) {
    message = 'Welcome, administrator!';
  }
  return message;
};

// Or

const welcomeMessage = ({ admin }) => {
  let message;
  if (admin) {
    message = 'Welcome, administrator!';
  } else {
    message = 'Welcome, user';
  }
  return message;
};
```

글의 주제처럼 여기에는 `if`가 필요없으므로 대신 `삼항연산자(ternary)`를 사용하는게 좋습니다.

```js
boolean ? valueForTrue : valueForFalse;
```

바꿔보죠

```js
const welcomeMessage = ({ admin }) =>
  admin ? 'Welcome, administrator!' : 'Welcome, user';

// Or

const welcomeMessage = ({ admin }) =>
  `Welcome, ${admin ? 'administrator' : 'user'}!`;
```

if에 비해 삼항연산자가 얻는 이득은 3가지입니다.

1. 모든 분기 논리를 구성하려는 낭비를 제거
2. 코드양이 적어짐(?, : 뿐)
3. 조건 블록 대신 조건값을 사용해야하므로,if 블록을 독자적 함수로 논리를 전개하게 됨

삼항연산자의 주요 논점은, 네스트된 `if`(`if` 안의 `if`)를 만들면 읽기 어려워진다는 점입니다. 이는 사실이지만 저는 이것은 이것대로 다른 이점을 얻을 수 있다 생각합니다. 논리를 네스트했다는 것은 그 논리를 분리해야한다는 의미이기 때문입니다. 다음 예를 봅시다.

```js
const welcomeMessage = ({ canMod, role }) =>
  `Welcome, ${
    canMod ? (role === ADMIN ? 'administrator' : 'moderator') : 'user'
  }!`;
```

한 눈에 들어오지 않습니다만, 이는 `welcomeMessage`에서 논리를 분할시켜야 한다는 의미이므로 나눠봅시다.

```js
const roleText = (role) => (role === ADMIN ? 'administrator' : 'moderator');

const welcomeMessage = ({ canMod, role }) =>
  `Welcome, ${canMod ? roleText(role) : 'user'}!`;
```

`if` 설명이 끝났으니 이제 `switch`를 봅시다
단순한 객체와 ?? 연산자를 조합함으로 해결할 수 있습니다.

이 코드를

```js
const welcomeMessage = ({ role }) => {
  switch (role) {
    case ADMIN:
      return 'Welcome, administrator!';
    case MOD:
      return 'Welcome, moderator!';
    default:
      return 'Welcome, user!';
  }
};
```

이렇게 바꿉시다.

```js
const roleToText = (role) =>
  ({
    [ADMIN]: 'administrator',
    [MOD]: 'moderator',
  }[role] ?? 'user');

const welcomeMessage = ({ role }) => `Welcome, ${roleToText(role)}!`;
```

`??` 오퍼레이터에 익숙하지 않은 분을 위한 설명을 하겠습니다.

```js
possiblyNullishValue ?? defaultValue;
```

`possiblyNullishValue`는 값, "nullish"(`null`, `undefined`)중 하나로 판단합니다. `nullish`라면 `defaultValue`, 아니라면 값을 사용합니다. 예전에는 `||`를 사용했지만 모든 `falsy`(`0`, `0n`, `null`, `undefined`, `false`, `NaN`, `""`)에 반응하므로 바라는대로 동작하지 않기도 했습니다.

## 에러처리 (try/catch)

에러가 나올 것 같은 곳에 우리는 그걸 `try/catch`로 감쌌습니다.

```js
const safeJSONParse = (value) => {
  let parsed;
  try {
    parsed = JSON.parse(value);
  } catch {
    // parsing 실패 시하면 `parsed`를 `undefined`로
  }
  return parsed;
};

const works = safeJSONParse('{}'); // {}
const fails = safeJSONParse('..'); // undefined
```

그러나 우리는 Promises를 사용해서 해결할 수 있습니다. Promise 안에서 문제가 생기면 자동적으로 `catch`됩니다.

```js
const safeJSONParse = (value) =>
  new Promise((resolve) => resolve(JSON.parse(value)))
    // 실패시에, undefined 반환
    .catch(() => undefined);

safeJSONParse('{}').then((works) => ({
  /* {} */
}));

safeJSONParse('..').then((fails) => ({
  /* undefined */
}));
```

혹은 `async/await`로도 가능하죠

```js
const works = await safeJSONParse('{}'); // {}
const fails = await safeJSONParse('..'); // undefined
```

## 반복문 (for/while)

`for`, `while` 구문은 어떤 목록을 처리합니다. 그러나 근래는 배열/객체 메서드로 더 좋게 처리할 수 있죠. 봅시다.

```js
const users = [
  { name: 'Luke', age: 32 },
  { name: 'Gandalf', age: 24_000 },
];

// 단순 로그 찍기
for (const { name, age } of users) {
  console.log(`The age of ${name} is ${age}`);
}

// 평균 계산
let ageTotal = 0;
for (const { age } of users) {
  ageTotal += age;
}
console.log(`The average age is ${ageTotal / users.length}`);

// 새 배열 만들기
const usersNextYear = [];
for (const { name, age } of users) {
  usersNextYear.push({ name, age: age + 1 });
}
```

위는 `for`로만 해결했지만, `Array.prototype.forEach`로 로그를 찍고 `Array.prototype.reduce`로 평균을 구하며, `Array.prototype.map`으로 새 배열을 만들 수 있습니다.

```js
// 단순 로그 찍기
users.forEach(({ name, age }) => console.log(`The age of ${name} is ${age}`));

// 평균 계산
console.log(
  `The average age is ${users.reduce(
    (total, { age }, index, items) =>
      (total + age) / (index === items.length - 1 ? items.length : 1),
    0
  )}`
);

// 새 배열 만들기
const usersNextYear = users.map(({ name, age }) => ({ name, age: age + 1 }));
```

배열 메서드에는 우리가 바라는 대부분의 기능이 있습니다. "문제"는 객체를 반복문 처리할 때입니다.

```js
const ages = {
  Luke: 32,
  Gandalf: 24_000,
};

// 단순 로그 찍기
for (const name in ages) {
  console.log(`The age of ${name} is ${ages[name]}`);
}

// 평균 계산
let ageTotal = 0;
let ageCount = 0;
for (const name in ages) {
  ageTotal += ages[name];
  ageCount += 1;
}
console.log(`The average age is ${ageTotal / ageCount}`);

// 새 객체 만들기
const agesNextYear = {};
for (const name in ages) {
  agesNextYear[name] = ages[name] + 1;
}
```

"문제"라 한 문제는 멋진 함수 `Object.entries`, `Object.fromEntries`로 처리할 수 있습니다.

`Object.entries`는 객체를 [key, value] 배열로 바꿔줍니다 `Object.fromEntries`는 앞의 배열을 새 객체로 반환합니다. 즉, 배열과 같은 메서드를 객체에 사용할 수 있습니다.

```js
// 단순 로그 찍기
Object.entries(ages).forEach(([name, age]) =>
  console.log(`The age of ${name} is ${age}`)
);

// 평균 계산
console.log(
  `The average age is ${Object.entries(ages).reduce(
    (total, [, age], index, entries) =>
      (total + age) / (index === entries.length - 1 ? entries.length : 1),
    0
  )}`
);

// 새 객체 만들기
const agesNextYear = Object.fromEntries(
  Object.entries(ages).map(([name, age]) => [name, age + 1])
);
```

for 반복문을 할 때 일반적인 이론은 `Array.prototype.map`, `Array.prototype.forEach`가 아니라 `Array.prototype.reduce`에 있습니다. (이 메서드가 더 낫다는 건 모두가 납득하는 부분입니다.) 저는 과거에도 [이 주제에 관한 글](https://dev.to/lukeshiru/reduce-or-for-of-1lg)을 썼지만 여기서 간략하게 말하면 당신과 팀이 코드를 읽기 쉽도록 한다면 그 방법을 쓰는 것이 좋습니다. reduce로 하기에 애매하다면 for와 같은 forEach로 하면 됩니다.

## 가독성 향상

글을 공개하고 나서 깨달았는데, 배열 메서드를 사용한 접근 방법은 논리를 함수로 전개하는 것이므로 마지막 예시에서 객체를 반복 처리는 깔끔하게 할 수 있도록 합시다.

```js
// 객체 조작이라면 entries로 저장하는 방법이 이상적입니다.
// 우선 상수부터...
const agesEntries = Object.entries(ages);

// 논리를 추출해서 함수로...
const logNameAndAge = ([name, age]) =>
  console.log(`The age of ${name} is ${age}`);

const valueAverage = (total, [, value], index, entries) =>
  (total + value) / (index === entries.length - 1 ? entries.length : 1);

const valuePlus1 = ([key, value]) => [key, value + 1];

// 이 코드의 가독성은 어떤가...
agesEntries.forEach(logNameAndAge);

// 평균 계산
console.log(`The average age is ${agesEntries.reduce(valueAverage, 0)}`);

// 새 객체 만들기
const agesNextYear = Object.fromEntries(agesEntries.map(valuePlus1));
```

그리고 가독성만 좋아진게 아니라 `valueAverage`, `valuePlus1` 같이 재이용가능한 범용성 있는 기능도 구비되었습니다.

제가 잊은 또 다른 하나는 일반적으로 `for`, `while` 대신 재귀를 쓰기도 하지만, 저는 잘 쓰지 않습니다. 단순하게 배열 요소를 더하는 예를 봅시다.

```js
const sum = (array) => (array.length > 0 ? sum(array.slice(1)) + array[0] : 0);
```

`sum`은 배열이 아닐 때까지 자신을 호출하며, 값을 더해 최종적으로 합계를 반환합니다.

## 맺는말

제 연재에서 강조하고 싶은 것이 있습니다.
제목의 핵심 단어는 **Need**입니다.
`if`/`for`/`while` 를 사용하지 말라, 필요없다는 의미가 아니라 **저것이 없어도** 코딩할 수 있다. 그리고 더 간단하게 만들 수 있다가 주제입니다. 이 시리즈에서 생각하고 싶은 것은 "기본을 다시보기"입니다. 제가 바라는 것은 당신의 코딩스타일이 100% 변화하는 것이 아니라 당신에게 의문 갖게 하는 것입니다.

> 나는 정말 이게 **필요해?** 아니면 더 간단한 방법은 없나?

그럼 언제나처럼 질문으로 글을 맺겠습니다.
`if`, `for`, `while` 같은 것이 필요하나요? 같은 문제를 더 간단한 방법으로 해결할 수 없나요?

지금까지 이걸 읽어주셔서 감사합니다. 혹시 글에 동의할 수 없다면 댓글 부탁드립니다.

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
