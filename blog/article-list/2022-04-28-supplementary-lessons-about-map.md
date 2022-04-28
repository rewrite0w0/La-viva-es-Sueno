---
slug: 2022-04-28-supplementary-lessons-about-map
title: .map() 남용을 멈추자 보충
authors: rewrite0w0
tags: [javascript, 감상]
---

이전에 번역한 [글](/blog/stop-abusing-map)의 보충이다.

먼저 글을 상기해보면 `map`은 [새 배열을 반환하는 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)이다.

길이가 1억 개인 배열에 `map`를 쓰면 프로그램은 원본 + 새 배열, 총합 길이가 2억인 배열을 갖는다.

그리고 javascript는 빈 값에 `undefined`를 넣어주므로 만약 `map`를 썼는데 그것이 새 배열이 아니라 어떤 동작을 하는 것이었다면, 값이 아니라 `undefined` 1억개를 갖는다.

## 그러면 어떻게 해야하는가?

결론부터 말하면 **내가 지금 무슨 일을 하려하는지 파악**해야한다.

크게 2가지 경우라 생각하면,

### 1. 새 배열이 필요한 작업

만약 새 배열이 필요한 작업이라면 쓰던대로 `map`이나 `for`를 쓰는 것이 현명할 것이다.

```js
const arr = [1, 2, 3, 4, 5];

const newArrUsingMap = arr.map((x) => x * x);
const newArrUsingFor = [];

for (let i = 0; i < arr.length; i += 1) {
  newArrUsingFor.push(arr[i] * arr[i]);
}
```

### 2. 그렇지 않은 작업

만약 위의 작업을 `forEach`로 한다면

```js
arr.forEach((num, idx) => {
  return (a[idx] = num * num);
});
```

이런 식이 될 텐데, 문제는 이건 [원본 배열에 수정을 가하는 일임으로 하지 말아야 된다.](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

물론 일상적으로

```js
arr.forEach((x) => {
  return x * x;
});
```

이렇게 쓰면 반환 값이 무시되므로 순수함을 지킨다만 우리가 하고 싶은 일이었던 제곱한 배열 반환은 하지 못한다.

```js
const fruitIds = ['apple', 'oragne', 'banana'];
fruitIds.forEach((id) => {
  document.getElementById(`fruit-${id}`).classList.add('active');
});
```

```js
const arr = [1, 2, 3, 4, 5];
arr.forEach((x) => alert(x));

arr.map((x) => alert(x)); // [undefined, undefined, undefined, undefined, undefined]
```

위와 같은 예시 같은 상황같이 (DOM조작으로 클래스 추가 / 목록에 어떤 행위를 실행) 같이 수정을 가해도 되거나, 새 배열이 필요없을 경우에 사용하자.

```js
// forEach
const pomeranian = new Pomeranian();

foods.forEach((food) => {
  if (food.type === 'beef') {
    pomeranian.add(food);
  }
});
```

```js
// reduce
const pomeranian = foods.reduce((pomeranian, food) => {
  if (food.type === 'beef') {
    pomeranian.add(food);
  }
  return pomeranian;
}, new Pomeranian());
```

외부 스코프에 직접 관여하지 않거나 하는 등 예외적 상황이므로 대부분 다른 배열 메서드로 처리할 수 있다.

```js
// https://azu.github.io/promises-book/#chapter5-async-function

async function fetchResources(resources) {
  const results = [];
  resources.forEach(async (resource) => {
    const response = await dummyFetch(resource);
    results.push(response.body);
  });
  return results;
}
```

```js
// 비동기 + map
await Promise.all(dogs.map(async (dog) => await dog.eat('Pedigree')));
```

[또한 `fetch`나 `alert` 같이 비동기처리를 할 때 `forEach`로하면 루프마다 `await`할 수 있으므로 이를 사용하면 된다.](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)

[하지만 이 또한 실제로는 `Promise.all` 이용해서 병렬처리하는 경우가 많으므로 이 때도 `map`을 쓰면 된다.](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)

## 결론

상황에 따라 `map`과 `forEach`를 구분해야 써야 하며, 기준은 새 배열이 필요한 작업인가 아닌가로 판단해야 한다.

## forEach 자체도 문제가 있다.

[![which is the fastest](https://miro.medium.com/max/1400/1*rc30xdezgXIw-YtoccCXPQ.png)](https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e)

`forEach`는 `while`, `for`, `for...of`에 비교해서 어떤 작업을 줬을 때 가장 느리다.

큰 작업을 할 때는 `while`를 쓰거나 `for...of`를 하는 것이 나을 것이다.

> 되도록 `for`는 피하고 싶으므로

## `map`과 `forEach`는 비교 대상이 아니다.

애초에 `forEach`는 `map`이랑 비교하면 안된다.

비교는 둘이 같은 조건일 때하는 것인데, 둘은 그렇지 않다. 역할이 전혀 다르다.

`forEach`는 `반환 값`을 무시한다.

`map`는 `반환 값`을 처리한다. 새 배열을 만든다.

둘이 비슷해 보인다해서 비교하면 안된다.

## 재결론

`map`을 남용하지 말자는 말 그대로 `map`을 남용하지 말자이다.

`map`를 사용해야 할 때는 `map`을 사용하면 된다. 아니 사용해야 한다.

대신, `map`를 쓸 때 한 번 생각해보는 것이다.

**내가 하려 하는 일은 무엇인가...?**

1. 새 배열이 필요한가? => `map`이어야 하는가? 다른 메서드로 할 수 없는가?

2. 새 배열이 필요없는가? =>
   1. 혹시 다른 메서드(`filter`, `every`...)로 할 수 없는가?
   2. `while` / `for` / `forEach` / `for...of`

## 읽을거리

- [.map() 남용을 멈추자](/blog/stop-abusing-map)
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/
- https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce
- https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e
- https://stackoverflow.com/questions/38362231/how-to-use-promise-in-foreach-loop-of-array-to-populate-an-object
- https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
- https://azu.github.io/promises-book/
- https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map
- https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach
