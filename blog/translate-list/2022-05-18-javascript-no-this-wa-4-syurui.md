---
slug: 2022-05-18-javascript-no-this-wa-4-syurui
title: JavaScript의 this는 4종류??
authors: rewrite0w0
tags: [javascript, 번역]
---

> [글](https://qiita.com/takeharu/items/9935ce476a17d6258e27)

## JavaScript의 this는 4종류??

이 글은 4종류의 this를 소개합니다.

실제로 4종류는 아니지만,

4종류를 이해하면 다른 것도 쉽게 이해할 수 있을 것입니다.

## this의 4종류 패턴

1. 메서드 호출 패턴
2. 함수 호출 패턴
3. 생성자(constructor) 호출 패턴
4. apple, call 호출 패턴

여기서 중요한 것은 **호출처**를 보는 것입니다.

**호출처**에 this가 좌우되기 때문입니다.

## 메서드 호출 패턴

직감적으로 알 수 있는 것입니다.

설명이 필요하지 않을 것 같다는 느낌이지만, 일단 코드를...

```js
var myObject = {
  value: 10,
  show: function () {
    console.log(this.value);
  },
};
myObject.show(); // 10
```

상당히 직감적으로 이해됩니다.
this에는 myObject가 들어 있습니다.

## 함수 호출 패턴

함수와 메서드 두 가지 호출 방법이 있어서, 이게 뭔가 싶을 수 있습니다.

그러나 코드를 보면 금방 이해됩니다.

```js
myObject.show(); // 메서드 호출
show(); // 함수 호출
```

**`.`**으로 호출하는가 아닌가 차이 정도입니다.

그럼 함수 호출 패턴 this은 어떻게 생겼을까...

```js
function show() {
  console.log(this);
  this.value = 1; // 주1
}
show(); // this는 글로벌 객체를 가리킨다
```

여기서 this는 **글로벌 객체**를 가르킵니다.
그러므로 `주1`의 `value`는 **글로벌 변수**입니다.

이것을 잘 다뤄야 하는 것이 중요합니다.
다음 예시를 보시죠.

```js
var myObject = {
  value: 1,
  show: function () {
    console.log(this.value); // 주1

    function show() {
      console.log(this.value); // 주2
    }
    show();
  },
};
myObject.show();
```

주1, 주2의 답은 무엇일까요?

- 주1의 this.value: 1
- 주2의 this value: undefined

주1은 메서드 호출패턴이며, 주2는 헷갈립니다..

메서드 호출 안에 함수를 호출하는 것이므로, 주2의 this는 글로벌을 가리킵니다.

메서드 안에 함수 호출은 함정이네요.
그치만 이렇게하면 해결할 수 있습니다.

```js
var myObject = {
  value: 1,
  show: function () {
    var self = this;
    console.log(self.value); // 1

    function show() {
      console.log(self.value); // 1
    }
    show();
  },
};
myObject.show();
```

this를 다른 변수에 두는 것입니다. 이 수법은 종종 사용됩니다.
관용적으로 변수는 self, that, \_this 에서 많이 사용합니다.

## 생성자 호출 패턴

```js
function MyObject(value) {
  this.value = value;
  this.increment = function () {
    this.value++;
  };
}
var myObject = new MyObject(0);
console.log(myObject.value); // 0

myObject.increment();
console.log(myObject.value); // 1
```

이것도 직감적이네요.

"new"를 붙여 인스턴스 생성한다는 소리군요.
그리고 그 생성된 인스턴스 자신이 this로 set 됩니다.

단, 주의할 것이 이것은 그저 "함수"라는 것입니다.

"new"를 붙이지 않으면, MyObject(0);

이것 함수 호출이므로 this는 글로벌 객체를 가리킵니다.

이 때 value, increment는 모두 글로벌 변수로 정의됩니다.

생성자 호출에는 첫 글자를 대문자로 하는 것이 관습이므로 이 때는 new를 꼭 붙여줍시다!

## apply, call 호출 패턴

이건 this를 편하게 설정하는 것입니다.
라이브러리를 만들 때 중요하게 꽤 사용됩니다.

```js
var myObject = {
  value: 1,
  show: function () {
    console.log(this.value);
  },
};
var yourObject = {
  value: 3,
};

myObject.show(); // 1

myObject.show.apply(yourObject); // 3
myObject.show.call(yourObject); // 3
```

apply, call를 사용하면 "강제적으로 this를 정"할 수 있습니다.

apply, call 제1 인수는 this로 set 하고 싶은 객체입니다.

응? 그럼 apply랑 call의 차이가 뭘까 할 수 있는데,

둘은 제2 인수부터 달라집니다.

```js
var myObject = {
  add: function (value1, value2) {
    console.log(this.value + value1 + value2);
  },
};
var yourObject = {
  value: 3,
};

myObject.add.apply(yourObject, [2, 10]); // 15
myObject.add.call(yourObject, 2, 10); // 15
```

apply의 제2 인수에 배열을 받고, 배열 내용을 인수로 전달합니다.

call은 직감적으로 할 수 있듯이, 제2 인수 그대로 전달됩니다.

둘 다 제1 인수는 this며, 그 후의 인수에서 차이가 생깁니다.

## 정리

**호출처**에 신경쓰자!
기억해 둘 기본적인 4종류 패턴

1. 메서드 호출 패턴
2. 함수 호출 패턴
3. 생성자(constructor) 호출 패턴
4. apple, call 호출 패턴

이런 느낌입니다.

간략적으로 정리했으므로, 잘 모르겠다 싶은 부분은 물어봐주세요♪

생성자에 대해 알고 싶은 분은 이 글을 읽어주세요

[JavaScript의 Class? 생성자?](http://qiita.com/items/010752b1427773558f7c)

## 감상

목표는 **왜 this를 쓰지 말아야하는가 확인하기 위한 번역 글이다.**

this는 프로그램을 복잡하게 꼬이게 만든다.

더글라스 크록포드께서 비유하신 **this를 쓰는 것은 "1루수가 누구야"로 유명한 애벗과 코스텔로와 프로그래밍을 하는 것**이라는 말에 영감을 받아 감상을 말한다면

**일상 대화에서 말 할 때마다 "이것", "이거", "어, 이거" 이런 식으로 말하면 대화가 잘 될까...**
