---
slug: 34-JavaScript-Optimization-Techniques-to-Know-in-2021
title: 34 JavaScript Optimization Techniques to Know in 2021
authors: rewrite0w0
tags: [javascript, Optimization, 번역]
---


> [글](https://javascript.plainenglish.io/34-javascript-optimization-techniques-to-know-in-2021-d561afdf73c3)이 삭제되어 있는 상태
> 최신의 생략 테크닉, 기술, 비결을 사용해 JavaScript 코드를 최적화 한다

개발자의 삶은 늘 새로운 것을 배우는 것으로, 변화에 따라가는 일은 결코 어려운 일이 아닙니다.

저는 프론트엔드 개발자가 알아야 하는 생략법, 기능 등 JavaScript의 모든 최선의 방법을 소개하여 2021년을 보다 쾌적하게 만들고 싶다 생각합니다.

JavaScript 개발 긴 시간 하신 분이라 하더라도, 코드를 추가하기 않아도 문제해결 할 수 있는 최신 기능을 모르고 계실수 있습니다

제가 소개하는 것은 클린하면서 최적화된 JavaScript 코드, 면접 준비에도 도움될 것입니다.

이걸 한 마디로하면, **2021년판 JavaScript 코딩 치트 시트입니다.**

## 1. 복수의 조건을 갖는 if

배열에 여러 값을 넣어, `includes` 메서드를 사용합니다.

```js
// 비생략형
if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
  //logic
}

// 생략형
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  //logic
}
```

## 2. if true ... else 생략법

if else 조건에 대량의 로직이 없는 경우에는 `삼항연산자`를 사용해서 엄청 짧게 만들 수 있습니다.

```js
// 비생략형
let test: boolean;
if (x > 100) {
  test = true;
} else {
  test = false;
}

// 생략형
let test = x > 10 ? true : false; // or we can use directly let test = x > 10 console.log(test)
```

어떤 조건을 가질 때는 이렇게 할 수 있습니다.

```js
let x = 300, test2 = (x > 100) ? "greater 100" : (x < 50) ? "less 50" : "between 50 and 100" console.log(test2)
```

## 3. 변수선언

공통의 값 또는 타입을 갖는 2개의 변수를 선언하는 경우 이런 생략법을 사용합니다.

```js
// 비생략형
let test;
let test2 = 1;

// 생략형
let test1,
  test2 = 1;
```

## 4. Null, Undefined, Empty Checks

새 변수를 만들 때, 그 값을 참조하고 있는 변수가 `null`, `undefined`인지 아닌지 확인하는 생략법입니다.

```js
// 비생략형
if (test1 !== null || test1 !== undefined || test1 !== '') {
  let test2 = test1;
}

// 생략형
let test2 = test1 || '';
```

## 5. null 확인과 기본값 분해 할당

```js
let test1 = null,
  test2 = test || '';
console.log('null check', test2);
```

## 6. undefined 확인과 기본값 분해 할당

```js
let test1 = undefined,
  test2 = test1 || '';
console.log('undefined check', test2); // output will be ""
```

정상값 확인

```js
let test1 = 'test',
  test2 = test1 || '';
console.log(test2); // output: 'test'
```

> 보너스 : `4`,`5`,`6`에서 `??`를 사용할 수 있다.

### null 병합 연산자

null 병합 연산자 `??`는 좌변이 `null` 혹은 `undefined`인 경우, 우변의 값을 반환합니다. 기본적으로 좌변을 반환합니다.

```js
const test = null ?? 'default';
console.log(test); // expected output: "default"

const test1 = 0 ?? 2;
console.log(test1); // expected output: 0
```

## 7. 여러 변수에 값을 분해 할당

여러 변수 처리를 변수마다 주려할 때, 이런 생략법은 편리합니다.

```js
// 비생략형
let test1, test2, test3
test1 = 1 test2 = 2 test3 = 3

// 생략형
let [test1, test2, test3] = [1,2,3]
```

## 8. 대입연산자 생략

프로그래밍에서는 많은 산술연산자를 다룹니다. JavaScript에서 변수에 대입연산자를 사용을 편리하게 방법입니다.

```js
// 비생략형
test1 = test1 + 1;
test2 = test2 - 1;
test3 = test3 - 20;

// 생략형
test1 += 1;
test2 -= 1;
test3 -= 20;
```

## 9. if에 따른 값 확인 생략법

모두 사용하고 있는 일반적 생략법입니다만, 그래도 언급할 가치가 있습니다.

```js
// 비생략형
if (test1 === true)
//or
if (test1 !== "")
// or
if (test1 !== null)

// 생략형
if (test1)
```

만약 test1에 값이 있으면, `if` 후 로직에 들어갑니다. 이 연산자는 주로 `null`이나 `undefined` 확인하는데 사용됩니다.

## 10. 여러조건 AND (&&) 연산자

변수가 `true`일 때만 함수를 호출하는 경우 `&&` 연산자를 사용합니다.

```js
// 비생략형
if (test1) {
  callMethod();
}

// 생략형
test1 && callMethod();
```

## 11. forEach

루프문의 일반적 생략법입니다.

```js
// 비생략형
for (var i = 0; i < testData.length; i++)

// 생략형
for (let i in testData)

//or

for (let i of testData)
```

배열의 변수

```js
function testData(element, index, array) {
  console.log('test[' + index + '] = ' + element);
}

[11, 24, 32].forEach(testData); // logs: test[0] = 11, test[1] = 24, test[2] = 32
```

## 12. 비교 return

비교에도 return을 사용할 수 있습니다. 5행짜리 코드가 1줄이 됩니다.

```js
// 비생략형
let test;
function checkReturn() {
  if (!(test === undefined)) {
    return test;
  } else {
    return callMe('test');
  }
}
var data = checkReturn();
console.log(data); //output test
function callMe(val) {
  console.log(val);
}

// 생략형
function checkReturn() {
  return test || callMe('test');
}
```

## 13. 화살표 함수

예시1

```js
// 비생략형
function add(a, b) {
  return a + b;
}

// 생략형
const add = (a, b) => a + b;
```

예시2

```js
function callMe(name) {
  console.log('Hello', name);
}
callMe = (name) => console.log('Hello', name);
```

## 14. 짧은 함수 호출

`삼항연산자`를 사용합니다.

```js
// 비생략형
function test1() {
  console.log('test1');
}
function test2() {
  console.log('test2');
}
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// 생략형
(test3 === 1 ? test1 : test2)();
```

## 15. switch 생략법

key-value 객체에 조건을 담아, 그 조건에 따라 사용합니다.

```js
// 비생략형
switch (data) {
  case 1:
    test1();
    break;
  case 2:
    test2();
    break;
  case 3:
    test();
    break;
  // And so on...
}

// 생략형
var data = { 1: test1, 2: test2, 3: test };
data[something] && data[something]();
```

## 16. 암묵적 반환

화살표 함수를 사용하면 return 없이도 직접 값을 반환합니다.

```js
// 비생략형
function calculate(diameter) { return Math.PI - diameter }

// 생략형
const calculate = diameter => ( Math.PI - diameter; )
```

## 17. 10진수 지수

```js
// 비생략형
for (var i = 0; i < 10000; i++) { ... }

// 생략형
for (var i = 0; i < 1e4; i++) {...}
```

## 18. 파라메터 기본 값

```js
// 비생략형
function add(test1, test2) {
  if (test1 === undefined) test1 = 1;
  if (test2 === undefined) test2 = 2;
  return test1 + test2;
}

// 생략형
const add = (test1 = 1, test2 = 2) => test1 + test2;
add(); //output: 3
```

## 19. 펼침 연산자(전개 구문)

```js
// 비생략형
const data = [1, 2, 3];
const test = [4, 5, 6].concat(data);

// 생략형 const data = [1, 2, 3]; const test = [4 ,5 , 6, ...data]; console.log(test); // [ 4, 5, 6, 1, 2, 3]
```

이 연산자는, 복사시에도 사용됩니다.

```js
// 비생략형
// cloning arrays
const test1 = [1, 2, 3];
const test2 = test1.slice();

// 생략형
const test1 = [1, 2, 3];
const test2 = [...test1];
```

## 20. 템플렛 리터럴

`+`로 여러 변수를 하나의 문자열로 만들어야 하는 경우, 이런 생략법을 사용합니다.

```js
// 비생략형
const welcome = 'Hi ' + test1 + ' ' + test2 + '.';

// 생략형
const welcome = `Hi ${test1} ${test2}`;
```

## 21. 여러행 문자열 생략법

```js
// 비생략형
const data =
  'abc abc abc abc abc abc\n\t' + 'test test,test test test test\n\t';

// 생략형
const data = `abc abc abc abc abc abc test test,test test test test`;
```

## 22. 객체 프로퍼티 분해 할당

```js
let test1 = 'a';
let test2 = 'b';

// 비생략형
let obj = { test1: test1, test2: test2 };

// 생략형
let obj = { test1, test2 };
```

## 23. 문자열을 숫자로 변환

```js
// 비생략형
let test1 = parseInt('123');
let test2 = parseFloat('12.3');

// 생략형
let test1 = +'123';
let test2 = +'12.3';
```

## 24. 구조 분해 대입 생략법

```js
// 비생략형
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;

// 생략형
const { test1, test2, test3 } = this.data;
```

## 25. Array.find

객체의 배열에서 객체의 프로퍼티를 통해, 특정 객체를 찾아야 하는 경우 `find` 메서드는 무척 편리합니다.

```js
const data = [
  { type: 'test1', name: 'abc' },
  { type: 'test2', name: 'cde' },
  { type: 'test1', name: 'fgh' },
];

function findtest1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === 'test1' && data[i].name === name) {
      return data[i];
    }
  }
}

// 생략형
filteredData = data.find(
  (data) => data.type === 'test1' && data.name === 'fgh'
);
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

## 26. 조건 생략화

타입을 체크하는 코드에서 타입을 기반으로 다른 메서드를 호출해야 하는 경우, 여러 `if/else`나 `switch`를 사용합니다만, 이 보다 좋은 생략법이 있습니다.

```js
// 비생략형
if (type === 'test1') {
  test1();
} else if (type === 'test2') {
  test2();
} else if (type === 'test3') {
  test3();
} else if (type === 'test4') {
  test4();
} else {
  throw new Error('Invalid value ' + type);
}
// 생략형
var types = { test1: test1, test2: test2, test3: test3, test4: test4 };
var func = types[type];
!func && throw new Error('Invalid value ' + type);
func();
```

## 27. 비트 단위 연산자에 따른 IndexOf 생략법

배열을 루프해서 특정 값을 찾아야 하는 경우 `indexOf` 메서드를 사용합니다. 만약 우리가 더 좋은 방법을 찾고 싶다면? 다음 예제를 봅시다.

```js
// 비생략형
if (arr.indexOf(item) > -1) {
  // item found
}
if (arr.indexOf(item) === -1) {
  // item not found
}

// 생략형
if (~arr.indexOf(item)) {
  // item found
}
if (!~arr.indexOf(item)) {
  // item not found
}
```

비트 단위 연산자 `~`는 `-1`이외의 값에 `참` 값을 반환합니다. 부정은 간단하게 `!~`을 사용하면 됩니다. `includes`에서도 사용할 수 있습니다.

```js
if (arr.includes(item)) {
  // true if the item found
}
```

## 28. Object.entries()

객체를 객체 배열로 변환하는데 편리하게 사용됩니다.

```js
const data = { test1: 'abc', test2: 'cde', test3: 'efg' };
const arr = Object.entries(data);
console.log(
  arr
); /** Output: [ [ 'test1', 'abc' ], [ 'test2', 'cde' ], [ 'test3', 'efg' ] ] **/
```

## 29. Object.values()

ES8에 도입된 기능으로, `Object.entries`와 닮았습니다만, `key`가 없습니다.

```js
const data = { test1: 'abc', test2: 'cde' };
const arr = Object.values(data);
console.log(arr); /** Output: [ 'abc', 'cde'] **/
```

## 30. 단항 비트 논리부정(Double Bitwise) 생략법

단항 비트 논리부정(Double Bitwise)은 32비트 정수에서만 유효합니다.

```js
// 비생략형
Math.floor(1.9) === 1; // true

// 생략형
~~1.9 === 1; // true
```

## 31. 문자열 반복

같은 단어를 몇 번이나 반복해야 하는 경우, for로 추가할 수도 있지만 이것도 생략법이 있습니다.

```js
// 비생략형
let test = '';
for (let i = 0; i < 5; i++) {
  test += 'test ';
}
console.log(str); // test test test test test

// 생략형
'test '.repeat(5);
```

## 32. 배열의 최대치와 최소치 가져오기

```js
const arr = [1, 2, 3];
Math.max(...arr); // 3 Math.min(...arr); // 1
```

## 33. 문자열에서 문자를 가져오기

```js
let str = 'abc';
// 비생략형
str.charAt(2); // c

// 생략형
str[2]; // c
```

배열의 인덱스를 아는 경우 직접 받아올 수 있으나, 모르는 경우에는 `undefined`를 볼 수 있습니다...

## 34. 지수함수 생략법

```js
// 비생략형
Math.pow(2, 3); // 8

// 생략형
2 ** 3; // 8
```

## 마지막으로...

JavaScript 코드를 최적화하는 34가지 방법입니다. 기사가 괜찮았다면 저희의 [youtube](https://www.youtube.com/channel/UCtipWUghju290NWcn8jhyAw)를 방문해주세요. 더 많은 정보를 볼 수 있습니다.
