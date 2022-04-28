---
slug: 2022-04-28-about-first-class-and-high-order-function
title: 일급 객체와 고차 함수
authors: rewrite0w0
tags: [javascript, functional programming, 감상]
---

일급 객체와 고차 함수는 함수형 프로그래밍을 언급할 때 꼭 들어가는 항목이다

`모호하게 고차 함수는 함수를 받는 함수, 일급 객체는 함수도 자바스크립트에서는 모든 것이 객체로 다뤄지므로 이를 일급 객체라 한다.`

이런 식으로 모호하게 알고 있었는데, 이번에 기회가 생겼으니 알아보려 한다.

## TL;DR

누가 일급객체가 무엇인가 묻는다면 함수를 변수/값으로 다룰 수 있어 변수에 대입하거나, 인수로 넘기거나, 다른 함수 반환할 수 있으므로 `map`과 같은 고차함수와 함께 사용할 수 있다. 대답할 수 있다.

## 정의

### 일급 함수

#### MDN

> 함수를 다른 변수와 동일하게 다루는 언어는 일급 함수를 가졌다고 표현합니다. 예를 들어, 일급 함수를 가진 언어에서는 함수를 다른 함수에 인수로 제공하거나, 함수가 함수를 반환할 수 있으며, 변수에도 할당할 수 있습니다.

#### 한국어 위키

> 컴퓨터 프로그래밍 언어 디자인에서, 일급 객체(영어: first-class object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다. 보통 함수에 인자로 넘기기, 수정하기, 변수에 대입하기와 같은 연산을 지원할 때 일급 객체라고 한다.

#### 일본어 위키

> 함수를 일급 객체로 다루는 언어의 성질, 또는 그러한 함수.
>
> 이 때 함수는 타입이 함수거나 함수 오브젝트를 가지고 있다.
>
> 구체적으로는 프로그램 실행할 때 생성되며, 자료구조에 포함시킬 수 있으며, 다른 함수의 인수로 전달되거나 반환값으로 반환하는 것이 가능한 함수이다.
>
> 이 개념은 메타프로그래밍과 달리 컴파일러 호출이나 eval 함수에 의해 생성되는 함수는 포함하지 않는다. (익명함수 참조)
>
> 일급 객체는 함수형 언어에 필수불가결한 것으로 고차함수 같은 형태로 사용된다.
>
> 예를 들면 함수와 리스트를 인수로 받아 리스트 각 요소에 함수를 적용한 결과를 반환하는 map 함수를 들 수 있다.
>
> map함수를 지원하는 프로그래밍 언어는 어떠한 형태로 함수를 함수 인수로 전달할 수 있도록 해야한다.

### 일급 객체

#### 일본어 위키

일급객체는 생성, 대입, 연산, 인수/반환 값으로 다룰 있는 등의 조작을 제한없이 사용할 수 있는 객체를 지칭

즉, 함수도 **객체(일급 객체)**이며, 이를 **값**처럼 사용할 수 있는 것

### 고차 함수

#### MDN

> 함수를 반환하는 함수를 고차 함수라고 부릅니다.

#### 한국어 위키

> 고차 함수(高次函數, higher-order function)는 수학과 컴퓨터 과학에서 적어도 다음 중 하나를 수행하는 함수이다.
>
> 1. 하나 이상의 함수를 인수로 취한다. (예: 절차적 매개변수)
>
> 2. 함수를 결과로 반환한다.
>
> 다른 모든 함수들은 일차(first order) 함수이다.

#### 함수형 자바스크립트

한국어 번역본

> JS의 함수는 일급 + 고차여서 여느 값이나 다름없다.
> 즉, 자신이 받은 입력 값을 기반으로 정의된 언제가는 실행될 값에 지나지 않다.

원서

> Because functions are first-class and higher-order, JavaScript functions can behave as values, which implies that a function is nothing more than a yet-to-be-executed value defined immutably based on the input provided to the function.
>
> (함수는 일급, 고계이기 때문에 JavaScript 함수는 값으로 동작할 수 있으며, 이는 함수가 함수에 제공된 입력에 따라 불변적으로 정의된 아직 실행되지 않은 값에 지나지 않는다는 것을 의미한다.)
>
> 문맥상 여느 값 부분은 "함수는 일급이자 고차이기에 JS에서 함수는 값으로 동작한다."로 봐도 될 듯

## 결론

일급 함수(일급 객체는) 함수를 변수/값으로 다룰 수 있는 것이다.

함수는 변수에 대입할 수도, 인수로 넘길 수도, 다른 함수에서 반환할 수도 있다

```js
const square = function (x) {
  return x * x;
};

const square = (x) => x * x;

const obj = {
  square: (x) => x * x,
};
```

```js
console.log(square(10)); // 100
console.log(square); // 함수
console.log(obj.square(10)); // 100
console.log(obj.square); // 함수

// 함수객체와 함수 반환 값 출력 가능
```

고차함수는 `map`, `filter`, `forEach` 등 처럼 함수를 인수로 받을 수 있는 함수

인수로 다른 함수를 받거나, 새로운 함수를 반환하거나, 둘 다 할 수 있다.

고계함수는 일급객체가 있기에 가능하다.

```js
const arr = [1, 2, 3, 4, 5];
const square = (x) => x * x;

const newArr = arr.map((x) => square(x));
console.log(newArr);
```

> 여담으로 콜백함수는 고차함수에 **인수로 들어가는 함수**
>
> 반대로 고차함수는 **콜백함수를 인수로 받는 함수**

```js
function 고차함수(콜백함수) {
  콜백함수();
}
```

:::note
누가 일급객체가 무엇인가 묻는다면 함수를 변수/값으로 다룰 수 있어 변수에 대입하거나, 인수로 넘기거나, 다른 함수 반환할 수 있으므로 `map`과 같은 고차함수와 함께 사용할 수 있다.
:::

## 같이보기

- [함수형 자바스크립트](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=131767959)
- https://developer.mozilla.org/ko/docs/Glossary/First-class_Function
- https://javascript.info/
- https://jsprimer.net/intro/
- https://en.wikipedia.org/wiki/Higher-order_function
- https://en.wikipedia.org/wiki/First-class_function
- https://en.wikipedia.org/wiki/First-class_citizen
- https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E9%96%A2%E6%95%B0
- https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88
- https://ja.wikipedia.org/wiki/%E9%AB%98%E9%9A%8E%E9%96%A2%E6%95%B0
- https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88
- https://www.geeksforgeeks.org/difference-between-first-class-and-higher-order-functions-in-javascript/
- https://zenn.dev/nekoniki/articles/5b7980fac91048775931
- https://www.frontendinterviewhandbook.com/kr/javascript-questions/#%EA%B3%A0%EC%B0%A8-%ED%95%A8%EC%88%98higher-order-function%EC%9D%98-%EC%A0%95%EC%9D%98%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94=
