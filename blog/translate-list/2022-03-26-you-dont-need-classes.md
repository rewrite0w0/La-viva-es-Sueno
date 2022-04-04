---
slug: you-dont-need-classes
title: You don't need classes
authors: rewrite0w0
tags: [you don't, javascript, 번역]
---

# [You don't need classes](https://dev.to/vangware/you-don-t-need-classes-jk4)

몇 년전, JavaScript에 기다리고 기다리던 클래스가 추가됐습니다. 고전적 객체지향 패러다임을 갖는 다른 언어에서 온 개발자는 JS에 오랜 친구가 있어 기뻐했죠. 그런데 말입니다. 클래스가 어떤 기능을 하는가 봅시다. 그리고 왜 클래스가 필요없는지도요.

## 달다, 아 달다 달어

`Shape` 클래스를 보죠.

```js
class Shape {
  constructor({ name = 'shape', x, y }) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  move({ x, y }) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Shape {
  constructor({ name = 'circle', x, y, radius }) {
    super({ name, x, y });
    this.radius = radius;
  }
}

const circle = new Circle({ x: 10, y: 10, radius: 5 });
circle.move({ x: 20, y: 20 });
```

사실 위 코드는 함수, 프로토타입의 `syntax sugar`에 불과합니다.

```js
function Shape({ name = 'shape', x, y }) {
  this.name = name;
  this.x = x;
  this.y = y;
}

Shape.prototype.move = function ({ x, y }) {
  this.x = x;
  this.y = y;
};

function Circle({ name = 'circle', x, y, radius }) {
  Shape.call(this, { name, x, y });
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const circle = new Circle({ x: 10, y: 10, radius: 5 });
circle.move({ x: 20, y: 20 });
```

클래스를 사용한다는 소리는 함수를 사용한다는 것이며, 되려 쓸모없이 복잡함만 추가될 뿐입니다.

이는 객체지향언어에서 온 사람에게는 멋진 것이라 느낄지도 모르지만, 조금만 생각해보면 `this`를 처리하거나, 클래스에 새로운 인스턴스를 만들때마다 `new`를 써야되는 사태가 발생하죠.

## classy 보다 Clean

우선 모든걸 클래스로 하려하지 말고, 하나의 값이나 프로세스로 생각합시다. 그러면 `Shape`도 다르게 바뀌죠.

```js
const createShape = ({ name = 'shape', x, y }) => ({ name, x, y });
const moveShape =
  ({ x, y }) =>
  (shape) => ({ ...shape, x, y });
const createCircle = ({ radius, ...props }) => ({
  ...createShape({ name: 'circle', ...props }),
  radius,
});

const circle = createCircle({ x: 10, y: 10, radius: 5 });
moveShape({ x: 20, y: 20 })(circle);
```

이런 접근은 `class 일택`보다 여러 이점이 있습니다.

1. `this`를 쓰지 않으니 쓸데없이 복잡하게 생각할 필요가 없습니다.

2. `new`를 쓰지 않아도 됩니다. 그저 값을 반환하는 함수를 쓰면 되니까요.

3. 값의 변형에 되해 걱정하지 않아도 됩니다. 값을 받아 새로운 값을 반환할 뿐이죠. 이는 테스트할 때 상태가 예측가능해지니 중요한 점입니다.

## Class가 필요해요?

조금만 생각해봐요. 클래스가 필요한지.
아니면 그냥 버릇처럼 쓰는 것은 아닌지.

Web개발자로 일하기 전에 `C++` 팬이었고, 당연히 `class`를 사랑했습니다. 그러나 시간이 흘러 `클래스`에서 해결하고 있던 문제 전부를 `함수`로 간단히 해결할 수 있다는 사실을 깨달았습니다.

클래스를 사용하고 있는 코드를 보며, 어떻게 함수로 바꿀가 생각해주세요. 그리고 해결책이 더 좋은 방법인가 생각해보세요.

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
