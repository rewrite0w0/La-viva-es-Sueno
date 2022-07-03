---
slug: 2022-07-03-javascript-no-debug-niwa-debugger-wo
title: JavaScript 디버그는 debugger문을
authors: rewrite0w0
tags: [번역, JavaScript]
---

JavaScript 초심자를 위해, 디버깅이 아직 부족하다면 디버그의 힘을 어떻게 기르지... 고민이라면

👨‍💻 < 스택 트레이스하면 좋아!

👨‍💻 < 스택 트레이스 하려면 `debugger`나 `console.trace()`를 사용하면 좋아!

가르침 받아 debugger를 사용하니 무척 편리했기에 🙏

## 스택 트레이스?

> 스택 트레이스는
>
> 에러 발생할 때 보여지는 내용으로 그 에러가 발생할 때까지 과정(어떤 처리인가, 어떤 순서인가 등)을 보여주는 것입니다.
>
> [알 듯 말 듯하지만 알 것 같은 IT 용어](https://wa3.i-3-i.info/word13281.html)

## 스택 트레이스를 사용해 문제를 어떻게 자르고 나누는 가

우선 문제를 일으키고 있는 각 스코프를 좁혀봅시다💡

문제를 자르고 나누는 방법은

- 하나하나 입구, 출구 함수에 적절한 값을 넣어보거나
- 외부 값일 경우 어떻게 할까
- 의도하지 않은 값이 들어가지는 않았나

이런 식으로 추정하며 각각 변수에 들어가는 값을 확인해 봅시다

## 값을 확인할 때 debugger를 사용

`debugger`를 넣어두면, 브레이크 포인트 설정 같은 것을 할 수 있습니다.

> [debugger 문은, 브레이크 포인트 설정같이 임의의 이용가능한 디버그 기능을 호출합니다.](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/debugger)

## debugger 사용 방법

debugger는 개발자 도구 console에 사용할 수 있습니다. (물론, 코드 안에 넣어도 OK)

이하의 함수를 console에서 실행해봅시다.

```js
function potentiallyBuggyCode() {
  let hoge = 'start';
  debugger;

  hoge = 'end';
  debugger;
}

potentiallyBuggyCode();
```

그러면 Sources 탭이 보이며 debugger 부분에서 처리가 정지됩니다.

![debugger and Sources](https://camo.qiitausercontent.com/1b01a00381e3201fc1c678b4eab8c08df4e297cc/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3330353139362f34323338613861612d643164352d643134642d346265612d3161386565396162346561342e706e67)

이 상태에서 console에 변수명을 입력하면, 그 시점의 변수의 내용물을 반환합니다.

![call var](https://camo.qiitausercontent.com/e032341322a730890363ccecb473f9b5ef975407/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3330353139362f64633831303734332d396434372d313133392d343534662d3662333734333736353062632e706e67)

또 우상단의 화살표 버튼을 누르면 두 번째 debugger 값을 볼 수 있습니다.

![call var2](https://camo.qiitausercontent.com/d9db20c4ce4c850036b2cc8e7f7298bb1a4fcfbf/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3330353139362f36373430346232312d313932612d653162332d366565342d6266613438316463323136662e706e67)

# 덤

## [console.trace()](https://developer.mozilla.org/ja/docs/Web/API/console/trace)로 처리를 따라가자

> console 객체는 스택 트레이스 출력도 할 수 있습니다. 이는 console.trace()를 호출하는 장소에 다다르면 호출 경로를 보여줍니다.

메소드 호출된 경로를 console에 출력할 수 있습니다

호출 순서를 모르겠을 때, 설치한 처리를 따라갑시다.

```js
function funcHoge() {
  console.trace();
}

function funcFuga() {
  funcHoge();
}

funcFuga();
```

![trace func](https://camo.qiitausercontent.com/88d19cda012697d6b4320f58d8e0677aa30b118c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3330353139362f38646630326631662d356664342d373463342d393237302d6233303766366661306133642e706e67)

## [console.dir()](https://developer.mozilla.org/ja/docs/Web/API/console/dir)로 객체 출력을 한다

Nuxt.js 같은 프레임워크를 사용하며 디버그할 때, API에서 얻은 값 같은 것이 계층이 깊어 `[Object]` 문자로 보여지는 경우가 있습니다. 이럴 때 사용할 수 있습니다.

사용 방법은 console.log 쓰는 것처럼 .log 대신 .dir를 쓰면 될 뿐입니다.

```js
const obj = {
  data: {
    id: 100,
    item: {
      foo: 200,
      bar: {
        hoge: 'hoge',
        huga: {
          aaaaa: 1000,
        },
      },
    },
  },
};
console.dir(obj);
```

![read supa deep object](https://camo.qiitausercontent.com/3ccda9f865f8f92988539e51ddc05f33bce96a8e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3330353139362f31396664373662612d623630362d343639332d323437332d6632353764383637336332652e706e67)

## console.log 제1 인수에 %O를 포함해 console.dir 처럼 사용하기

[console.log 제1 인수에 %O를 포함하면 dir처럼 사용할 수 있다는 사실을 들었습니다](https://console.spec.whatwg.org/#formatter).😊

> 1. If specifier is %o, optionally let converted be current with optimally useful formatting applied.
>
> 2. If specifier is %O, optionally let converted be current with generic > JavaScript object formatting applied.

## 정리

JavaScript 디버그 방법에 대해 소개했습니다.

디버그하는 힘을 기르는 것은 중요하므로 편리한 기능을 마구마구 사용해봅시다!🙌
