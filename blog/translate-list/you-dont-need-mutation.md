---
slug: you-dont-need-mutation
title: You don't need mutation
authors: rewrite0w0
tags: [you don't, javascript, 번역]
---

# [You don't need mutation](https://dev.to/vangware/you-don-t-need-variables-2gk3)

> 실제제목...
>
> 실제로는 "You don't need variable"입니다만 데이터를 메모리에 보존하는 방법이 필요없다는 소리가 아닙니다. 필요하니까요. 하지만 한 번 저장하면 값을 절대 바꾸지 말자는 주장을 하고 싶습니다. 맞아요 이 글은 불변성의 멋짐을 말하는겁니다.

## 왜 불변은 악랄한가?

변이는 제 커리어에서 처리했던 대부분의 버그의 핵심이었습니다. 여러분도 똑같을 것이라 생각합니다.
변이는 값이 변하는 것입니다. 협업은 바꾸면 안될 것을 바꾸기 전까지는 좋은 일입니다.
JavaScript나 비슷한 언어에는 이런 사고가 종종 일어납니다. 왜냐면 함수를 호출하는 함수에 객체를 넘기면 `복사`가 아니라 `참조`를 전달하기 때문이죠. 예시를 봅시다.

```js
/**
 * name, age 프로퍼티를 가진 객체입니다.
 */
const user = {
  name: 'Luke',
  age: 31,
};

/**
 * 함수로 user의 나이를 올려보죠 (+1)
 */
const userNextYear = (user) => {
  user.age += 1;
  return user;
};

const nextYear = userNextYear(user);

// Luke's will be 32
console.log(`${nextYear.name}'s will be ${nextYear.age}`);

// Luke's age is 32
// oh no!
console.log(`${user.name}'s age is ${user.age}`);
```

이런 문제는 모든 코드가 같은 곳에 있다는 뜻이니 만약 함수를 다른 장소에서 importing하면 어쩌죠? 보통 이런일이 일어납니다.

```js
import { someUtil } from 'somewhere';

const object = { foo: 'bar' };

someUtil(object);

// 객체가 저 넘어로 갔어!
// 값을 예측할 수가 없어요 @_@
```

## 어떻게 문제를 풀죠?

변이가 갖는 문제를 해결에는 여러 접근법이 있습니다. 그 중에서도 더 좋은 방법이 있습니다. 최악의 방법(그리고 일반적 방법중 하나)은 함수에 전달하기 전에 객체 복사입니다.

```js
import { someDeepCopyUtil } from 'someLibrary';
import { someUtil } from 'somewhere';

const object = { foo: 'bar' };
const copy = someDeepCopyUtil(object);

someUtil(copy);

// 객체는 무사해, 야호!
```

이 방법의 문제는 변이를 완전히 회피하는 대신 온갖 곳에 쓸데없는 작업을 한다는 점입니다.

또 다른 해결책은 변이를 일으키지 않는 함수를 쓰고, 값에 변경을 더해 복사본을 반환하는 방법입니다.

이런 함수를 [순수함수](https://en.wikipedia.org/wiki/Pure_function)라 하고, 변이를 피할 수 있는 [불변성](https://en.wikipedia.org/wiki/Immutable_object)을 가지고 있습니다. 처음 예시를 다시 보죠.

```js
const userNextYear = (user) => ({
  ...user,
  age: user.age + 1,
});

// 유저를 복사해서 반환
userNextYear(user);

// 여전히 원본 값은 그대로
user.age;
```

이런 방법은 작은 객체에 조금 변경을 더하는 작은 함수에 적절하지만, 객체가 네스트한 값을 갖고 있는 경우에 굉장히 복잡해집니다.

```js
const object = {
  foo: {
    bar: [0, 1, 2, 3],
    other: {
      value: 'string',
    },
  },
};

const updateOtherValue = (value) => (object) => ({
  ...object,
  foo: {
    ...object.foo,
    other: {
      ...object.foo.other,
      value,
    },
  },
});
```

변이보다 더 복잡합니다.

```js
const updateOtherValue = (value) => (object) => {
  object.foo.other.value = value;
  return object;
};
```

우리는 운이 좋게도 불변 복사본을 만들 라이브러리 [immer](https://immerjs.github.io/immer/)가 있습니다.
라이브러리를 이용해 `updateOtherValue` 함수를 이렇게 쓸 수 있습니다.

```js
import { produce } from 'immer';

const updateOtherValue = (value) => (object) =>
  produce(object, (draft) => {
    draft.foo.other.value = value;
  });
```

우리는 양쪽의 장점을 얻게 됩니다.
변이처럼 간단하지만 불변한 코드죠. 이제 라이브러리가 없는 JavaScript로 돌아가죠.

## 바닐라로 회피하기

JavaScript가 제공하는 메서드의 몇은 순수하지 않기에 본 객체에 변이를 가합니다. 예를 들면 `Array`의 `push`, `pop` 같은 녀석은 변이가 발생합니다.

```js
const array = ['foo', 'bar'];
const addValue = (value) => (array) => array.push(value);

const addFooBar = addValue('foobar');

// 원본이 변했다
addFooBar(array); // ["foo", "bar", "foobar"]
```

순수 메서드, 함수가 아니라면 피합시다. 이런식으로

```js
const array = ['foo', 'bar'];
const addValue = (value) => (array) => array.concat(value);

const addFooBar = addValue('foobar');

// array 복사본 반환
addFooBar(array); // ["foo", "bar", "foobar"]
// 원본은 안전합니다 :D
```

혹은 `immer`를 쓰면 이렇게도 가능하죠.

```js
import { produce } from 'immer';

const array = ['foo', 'bar'];
const addValue = (value) => (array) =>
  produce(array, (draft) => draft.push(value));

const addFooBar = addValue('foobar');

// 순수하게 같은 효과를 냅니다 🎉
addValue(array);
```

몇 몇 사이트에서 변이 함수를 다루고 있습니다. 그중에서 배열을 다루는 곳으로 [https://doesitmutate.xyz/](https://doesitmutate.xyz/)를 추천드립니다.
모든 배열 메서드를 변이를 발생시키기 위한 flag를 갖고 있습니다.(그래서 이런 방식을 피해야하죠.)

DOM API는 변이덩어리인데, Web 애플리케이션에서 동적으로 무엇인가 변경이 필요하다면 어쩔 수 없이 변이를 해야합니다. 다행히 React, Preact, Vue 같은 라이브러리에는 DOM 위에 추상화 레이어를 씌우는 VDOM이 있습니다. 이걸로 DOM 상태에 직접 변이를 일으킬 필요없이 DOM 상태를 변경할 수 있어 일관적으로 안전하고 순수하게 동작합니다.

## 클래스와 변이

이 글은 [You don't need classes](./you-don't-need-classes.md) 시리즈로 꽤 닮은 내용입니다. 클래스는 보통 클래스 내부 값을 보존하고 변경하는 방법이 추천됩니다. 그렇기에 이는 클래스를 피하고 대신 순수한 함수와 값을 사용해야하는 이유입니다.
만약 클래스를 사용하더라도 새 값을 포함한 새 클래스 인스턴스를 반환함으로 변이를 피할 수 있도록 합시다.

## 퍼포먼스는?

JavaScript 같은 언어는 우수한 가비지 컬랙터가 있습니다. 거의 대부분 무엇인가 복사본을 만들고 그것을 무엇인가를 사용하지 않으면 원본은 메모리에서 삭제됩니다.

그리고 변이를 일으키지 않은 이점에 내는 비용은 미미합니다.

## 변이가 필요해요?

글을 전편과 같이 여러분이 진지하게 생각하기 바라기에 질문으로 마칩니다.
그 값의 변이가 필요한가요?
변이가 없이 문제를 해결할 수 있는 방법이 없는건가요?
이것이 늘 해결책이 된다 단언할 수 없지만 기본적 자세여야 합니다.

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
