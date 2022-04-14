---
slug: javascript-secrets
title: JS문서를 읽으며 느낀 비기
authors: rewrite0w0
tags: [javascript, 감상]
---

## image/iframes

`loading = "lazy"`

## font

```html
<link rel="preload" />
```

## array 얼리기

```js
Object.freeze(array);
```

## 중복 제거

```js
Array(...new Set(array));
```

## ??

값이 null이나 undefined이면 어떤 값을 보여준다

```js
// 예시)

let foo;

// foo는 undefined 상태

foo ?? '아직 정의가 안됨';
```

## ?.

객체가 유효한지 확인하는 것, 없다면 undefined를 보여준다.

```js
// 예시

const akazaAkari = {
  age: 13,

  grade: 'middleSchool 1年',

  role: {
    main: 'air',

    sub: '착한아이',
  },
};

Object.freeze(akazaAkari);

akazaAkari?.role;

// {"main": "air", "sub": "착한아이"}

akazaAkari?.role?.주인공;

// undefined

akazaAkari?.role?.주인공 ?? '아카자 아카리는 주인공이에요! (●` 3 ´●)';

// "아카자 아카리는 주인공이에요! (●` 3 ´●)"
```

## ||

```js
// 값이 <falsy> 라면

falsy === null, NaN, 0, -0, '', '', ``, undefined;

let chinaKare;

chinaKare || console.log('치나카레 월드가 열린다아ㅏ');

// "치나카레 월드가 열린다아ㅏ"

const ronaldo = '호우!';

ronaldo || console.log('호ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ우ㅜㅜㅜㅜㅜㅜㅜㅜㅜ');

// "호우!"
```

## 팩토리 함수

> 제네레이터 쓸 때는 팩토리 함수
> 생성자

```js
// 일반적인 팩토리 함수
// 외부는 팩토리
// 내부는 제네레이터
function factory(factory_parameter) {
  // 최초의 제네레이터 상태 설정
  return function generator(generator_parameter) {
    // 상태 갱신 작업들
    return value;
  };
}
```

```js
// es6 제네레이터
function* counter() {
  let count = 0;
  while (true) {
    count += 1;
    yield count;
  }
}

const gen = counter();

gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

// 값을 가진, value 속성을 가진, 객체를 반환하는 next 메서드를 가진, 객체를 반환하는 함수

// vs

// 값을 반환하는 함수

// 직접 만드는 제네레이터

function counter() {
  let count = 0;
  return function counter_generator() {
    count += 1;
    return count;
  };
}

const gen = counter();

gen(); // 1
gen(); // 2
gen(); // 3
```

## 생성자

그리고 은닉

```js
function counter_constructor() {
  let counter = 0;

  function up() {
    counter += 1;
    return counter;
  }

  function down() {
    counter -= 1;
    return counter;
  }

  return Object.freeze({
    up,
    down,
  });
}

a = new counter_constructor();

a.up();

a.up();

a.up();

a.up();

a.up();

a.up();

a.down();
```

## 명명시 사용할 수 있는 것들

`$`

`\_`

`소문자`

`대문자`

`알파벳(숫자)`

`한글`, `일어` 등등

하지만 왠만하면 `$`, `\_`, `숫자`, `한글`, `일어` 같은 것은 쓰지 말자.

특히 `$`, `\_`, `숫자`는 더더욱.

> 출처 : 자바스크립트는 왜 그모양일까? - 더글라스 크록포드

## 특정 숫자만큼 배열채우기.

```js
Array.from(Array(10).keys())

[...Array(10).keys()]

Array.from({length: 10}, (\_, i) => i + 1)

```

> 출처 : https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n

## 콜백함수

```js
function 고계함수(콜백함수) {
  콜백함수();
}
```

## 메서드함수

```js
const obj = {
  method1: function () {},
  method2: () => {},
};
```

## 더 편한 메서드함수(es2015)

```js
const obj = {
  method1() {
    return 'this is method1';
  },

  method2() {
    return 'this is method2';
  },
};
```

## 깊은 복사

JS는 기본 얕은 복사일 경우가 많다.

```js
// 얕은 복사
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
```

```js
// obj 깊은 복사해서 오브젝트를 반환

function deepClone(obj) {
  const newObj = shallowClone(obj);

  // 프로퍼티가 오브젝트이므로, 재귀적으로 복제

  Object.keys(newObj)

    .filter((k) => typeof newObj[k] === 'object')

    .forEach((k) => (newObj[k] = deepClone(newObj[k])));

  return newObj;
}

const obj = {
  level: 1,

  nest: {
    level: 2,
  },
};

const cloneObj = deepClone(obj);

// `nest` 오브젝트도 재귀적으로 복제된다.

console.log(cloneObj.nest === obj.nest); // => false
```

## 깊은 동결

```js
function deepFreeze(obj) {
  if (typeof obj === 'object' && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((x) => deepFreeze(obj[x]));
    Object.freeze(obj);
  }

  return obj;
}

const obj = {
  1: '!',

  2: '@',

  3: {
    4: '$',

    5: '^',
  },
};

const obj2 = {
  1: '!',

  2: '@',

  3: {
    4: '$',

    5: '^',
  },
};

deepFreeze(obj);

Object.isFrozen(obj); // true

Object.isFrozen(obj[3]); // true

Object.freeze(obj2);

Object.isFrozen(obj2); // true

Object.isFrozen(obj2[3]); // false
```

## 스코프

```js
const z = 'z';

{
  const x = 'x';

  {
    const y = 'y';

    console.log(x); // x
    console.log(y); // y
    console.log(z); // z
  }
  console.log(x); // x
  console.log(y); // y is not defined
  console.log(z); // z
}

console.log(x); // x is not defined
console.log(y); // y is not defined
console.log(z); // z
```

## 호이스팅

`함수`, `var`, `let`은 **호이스팅**이 된다.

## 정적 스코프

```js
const x = 10; // ＊1

function printX() {
  // x는 이미 *1 변수 x 참조

  console.log(x); // => 10
}

function run() {
  const x = 20; // ＊2

  printX(); // 10이 출력된다.
}

run();
```

1. printx 함수 스코프에 변수 x 정의되어 있지 않다

2. 글로벌 스코프를 확인한다.

3. 스코프에 const x = 10 정의되어 있으므로, 식별자 x는 이 변수를 참조한다.

printx 함수 안에 쓰인 `x` 식별자는, run 함수 실행과 무관하게, 정적으로 \*1으로 정의된 변수 `x`를 참조한다.

이렇게 어떤 식별자가 어떤 변수를 참조하는가를 정적으로 결정되는 성질을, 정적 스코프라 한다.

### 그럼 동적 스코프는?

```js
// 유사 동적 스코프 코드 예시(JS에는 없다)

var x = 10;

fn printX() {

    // 동적 스코프 언어라면, 식별자 x는 호출의 장소에 따라 변수 x 참조가 달라진다.

    // 콘솔출력

    print(x);

}

fn run() {

    // 호출 장소 스코프에는 변수 x가 따로 정의 됨

    var x = 20;

    printX();

}

printX(); // 10

run(); // 20

메모리 관리는 가비지 컬렉터로 한다.

function printX() {

    const x = "X";

    console.log(x); // => "X"

}

printX();

// 이 시점에서 X를 참조하는 것들은 사라진다. === 해방된다.

function createArray() {

    const tempArray = [1, 2, 3];

    return tempArray;

}

const array = createArray();

console.log(array); // => [1, 2, 3]

// 변수 array가 [1, 2, 3] 값을 참조하고 있으므로 === 아직 해방되지 않음
```

## 함수선언

```js
function fn() {}
```

## 함수식

```js
const fn = function () {};
```

## 분할 대입

```js
function printUserId(user) {
  console.log(user.id); // => 42
}

const user = {
  id: 42,
};

printUserId(user);
```

```js
function printUserId({ id }) {
  console.log(id); // => 42
}

const user = {
  id: 42,
};

printUserId(user);
```

```js
const user = {
  id: 42,
};

const { id } = user;

console.log(id); // => 42

function printUserId({ id }) {
  console.log(id); // => 42
}

printUserId(user);
```

```js
function print([first, second]) {
  console.log(first); // => 1

  console.log(second); // => 2
}

const array = [1, 2];

print(array);
```

> 출처 : https://jsprimer.net/basic/function-declaration/

## 함수에 인수를 줄 때 (구조 분해 할당 - 객체 구조 분해)

```js
const a = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const b = [1, 2];

function normal(item) {
  console.log(item);
}
normal(a); // { "a": 1, "b": 2, "c": 3, "d": 4, "e": 5 }

function wonder({ item }) {
  console.log(item);
}
wonder(a); // undefined
wonder({ a }); // undefined

function wonder2({ a }) {
  console.log(a);
}
wonder2(a); // 1
wonder2({ a }); // { "a": 1, "b": 2, "c": 3, "d": 4, "e": 5 }

wonder2(b); // undefined
wonder2({ b }); // undefined
```

인수를 {}로 준다면 이름이 동일한 객체를 넣어야만 작동한다.
왜 그럴까?

> 추후조사

그래서 react-native FlatList 예시

```jsx
<FlatList
  data={DATA}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
/>
```

에서 `renderItem`를 이용할 때 꼭 `item`을 이용해야된다.

```js
renderItem({ item, index, separators });
```

`renderItem`은 이런 구조니까
`{}`를 이해하려면 반대로

```jsx
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

// 여기를 시작으로 보면
<FlatList
  data={DATA} // 상기한 DATA
  renderItem={renderItem} // 이하 설명
  keyExtractor={(item) => item.id} // 여기는 뭐든 상관없음 평범한 함수라서 item에서 e를 넣든 x를 넣든
/>;

const renderItem = ({ item }) => <Item title={item.title} />;
// 여기는 반드시 { item }을 써야함
// FlatList의 renderItem에서 item으로 지정되어있음
// 그 외에도 index, separators 지정되어있음
// 다른거 넣어도 undefined 만 나옴

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
// 여기 { title }은 DATA.title. 즉

const Item = (DATA) => (
  <View style={styles.item}>
    <Text style={styles.title}>{DATA.title}</Text>
  </View>
);
```

그래서 {}를 이용할 때는 `특정한 함수`를 대상으로하는 `함수`를 만들 때 유용한 듯하다.
다른 것을 넣어도 undefined만 나오니

MDN에서 주는 예시에서도 그런듯한 느낌을 받는다.

```js
// 오직 user.id만을 받기 위한 함수이다.
// 물론 아래와 같이 객체 안에 id만 있으면 멀쩡히 돌아간다만
// var sikaku = {id: "zzzz"}
// userId(sikaku) // "zzzz"

function userId({ id }) {
  return id;
}

function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + ' is ' + name);
}

var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

## 좋은 것만 사용하기 위한 방법

JS의 좋은 부분만 쓰면 좋은 프로그램을 만들 수 있다.
사용하지 말아야 할 기능들에 유의하자

### 사용하지 말아야 할 기능들

- this 제거

  > 다른 언어에서는 몰라도 JS의 this는 동적으로 바인딩되므로 믿을 수 없다. 애초에 this는 지시대명사인 것을 유념하자

- class 제거

  > 생성자 함수 권장, class는 두 번 다시는 손대고 싶지 않을 프로그램을 만들기 용이하다

- switch 제거
  > if/else로 표현하지 못 하는 switch 문은 없다.

> 자바스크립트는 왜 그모양일까?

## 함수명

함수는 동작이다.
함수 하나에 한 가지 동작을 한다는 마음으로 명명을 동사로 하자.
또한 주저리주저리 주석을 다는 것보다, 함수명만 보아도 이것이 무엇인지 알아차리게 하는 것이 더 좋다.

- `get...`
- `set...`
- `create...`
- `check...`

## 모듈

### commonjs

```json
"type": "commonjs"
```

#### 함수 내보내기

```js
module.exports = function someFunc() {
  return console.log('move');
};
```

혹은

```js
function someFunc() {
  return console.log('move');
}

module.exports = { someFunc };

////

const { someFunc } = require('./importFunc');
someFunc(); // move
```

#### 이렇게는 안 됨

```js
module.exports = function module1() {
  return console.log('mo1');
};

module.exports = function module2() {
  return console.log('mo2');
};
```

```js
const { module1, module2 } = require('./modules');
module1(); // is not a function
//////////////
const module1 = require('./modules');
const module2 = require('./modules');
module1(); // mo2
module2(); // mo2
```

이걸 가지고 와도 마지막 함수만 보임, 대신

```js
function module1() {
  return console.log('mo1');
}

function module2() {
  return console.log('mo2');
}

module.exports = {
  module1,
  module2,
};
```

```js
function someFunc() {
  return console.log('move');
}
module.exports = { someFunc };
```

```js
const { module1, module2 } = require('./modules');
const { someFunc } = require('./module');

module1(); // mo1
module2(); // mo2
someFunc(); // move
```

### module

```json
"type": "module"
```

```js
export default function someFunc() {
  return console.log('move');
}
////
function someFunc() {
  return console.log('move');
}
export default someFunc

////

import someFunc from "./module.js"

someFunc() // move

```

#### 여러 개 일 떄

```js
function someFunc() {
  return console.log('move');
}

function someFuncSecond() {
  return console.log('moveSecond');
}

export { someFunc, someFuncSecond };

////

import { someFunc, someFuncSecond } from './modules.js';

someFunc(); // move
someFuncSecond(); // moveSecond
```

## 배열로 할 수 있는 것

### 스택

```js
const arr = [1, 2, 3, 4];

// LI
arr.push(5); // [1, 2, 3, 4, 5]

// FO
arr.pop(); // [1, 2, 3, 4]
```

### 큐

```js
const arr = [1, 2, 3, 4];

// FI
arr.unshift(0); // [0, 1, 2, 3, 4]

// FO
arr.pop(); // [0, 1, 2, 3]
```

### 덱

| 기능      | 표기                |
| --------- | ------------------- |
| 꼬리 추가 | `push`              |
| 선두 추가 | `unshift`           |
| 꼬리 제거 | `pop`               |
| 선두 제거 | `shift`             |
| 꼬리 조사 | `obj[obj.length-1]` |
| 선두 조사 | `obj[0]`            |

## 대부분의 출처

> [MDN](https://mdn.dev/), [jsprimer](https://jsprimer.net/), 자바스크립트는 왜 그모양일까?, [javascript.info](https://javascript.info/), [경험](https://github.com/rewrite0w0)
