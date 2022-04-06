---
slug: array-sum-array-is-weird
title: JS에서 [1, 2, 3]+[4, 5, 6]은 왜 "1,2,34,5,6"인가?
authors: rewrite0w0
tags: [javascript, 번역]
---

> [글](https://sosukesuzuki.dev/posts/array-plus-array/)

이런 트윗을 봤다.

> I have been writing Javascript since roughly 1997 but it still manages to occasionally do something that absolutely shocks me [pic.twitter.com/JyYOo4wGOu](https://pic.twitter.com/JyYOo4wGOu) — mcc (@mcclure111) [2022/01/11](https://twitter.com/mcclure111/status/1481027678362902528?ref_src=twsrc%5Etfw)

JavaScript에서 `[1, 2, 3] + [4, 5, 6]`은 `"1,2,34,5,6"`이며, 직관에 반하기에 나온 반응이었다.

필자도 직관에 반한다 느낀다.

하지만 이건 ECMAScript 사양을 착실히 수행한 것이다.

이글에서는 왜 이런 동작이 ECMAScript 사양에 따르는 것인지 사양을 인용하며 설명한다.

## 대략적 대답

우선 대략적으로 대답한다.

JavaScript에서 `[1, 2, 3] + [4, 5, 6]`가 `"1,2,34,5,6"`로 되는 이유는 피연산자 배열의 `Array.prototype.toString`을 호출해서 이를 문자열로 결합하기 때문이다.

하지만 이 설명만으로는 노잼이므로 사양을 보자.

## + 연산자

`+` 연산자 동작이 어떤 식으로 정해져있는가 보자.

`+` 연산자는 [The Addition Operator](https://tc39.es/ecma262/#sec-addition-operator-plus)에 정의되어 있다.

구문에 대해서는 다들 알 테니 글의 주제에 벗어나니 무시하고, 세멘틱을 보자. 여기에서 다음과 같은 세멘틱이 정의되어 있다.

```
1. Return ? EvaluateStringOrNumericBinaryExpression(AdditiveExpression, +, MultiplicativeExpression).
```

`AdditiveExpression`과 `MultiplicativeExpression`은 좌, 우측에 있다.

그리고 `+` 연산자는 `EvaluateStringOrNumericBinaryExpression`라는 Abstract Operation에 좌측 `+` 우측을 전달 이런 식으로 전달한다.

## EvaluateStringOrNumericBinaryExpression

`EvaluateStringOrNumericBinaryExpression`은 [https://tc39.es/ecma262/#sec-evaluatestringornumericbinaryexpression](https://tc39.es/ecma262/#sec-evaluatestringornumericbinaryexpression)에 정의되어 있다.

Abstract Operation은 `leftOperand`, `opText`, `rightOperand` 인수를 받는다.
3개의 인수는 다음과 같이 동작한다

```
1. Let lref be the result of evaluating leftOperand.
2. Let lval be ? GetValue(lref).
3. Let rref be the result of evaluating rightOperand.
4. Let rval be ? GetValue(rref).
5. Return ? ApplyStringOrNumericBinaryOperator(lval, opText, rval).
```

단계를 대충 설명한다.

먼저 `leftOperand`를 평가한 결과를 `lref`라 한다.

`GetValue(lref)` 결과를 `lval`이라 한다.(`GetValue` [정의](https://tc39.es/ecma262/#sec-getvalue) 이번 경우처럼 `[1, 2, 3]` 같이 단순한 배열을 넘기면 그대로 배열을 반환해준다 생각하면 좋다.)

`leftOperand` 에서 한 처리를 `rightOperand`에서도 한다.

그러면 `lval`, `rval`를 얻는다

마지막으로 `ApplyStringOrNumericBinaryOperator` Abstract Operation에 `lval`이랑 인수로 받는 `opText`, `rval`를 전달하고 결과를 반환한다.

`EvaluateStringOrNumericBinaryExpression`은 피연산자와 연산자를 인수로 받아, 비연산자를 평가해 `GetValue` 한 후에, 그대로 `ApplyStringOrNumericBinaryOperator`에 전달할 뿐인 Abstract Opertaion 한 것이다

## ApplyStringOrNumericBinaryOperator

`ApplyStringOrNumericBinaryOperator` [정의](https://tc39.es/ecma262/#sec-applystringornumericbinaryoperator)

`ApplyStringOrNumbericBinaryOperator`은 `lval`, `opText`, `rval`를 받는다

`ApplyStringOrNumbericBinaryOperator`의 단계를 전부 서술하기에는 공백이 부족하기에 관련되는 단계만 설명한다.

우선 첫 단계로 인수로 받은 `opText`의 validation 한다

```
1. Assert: opText is present in the table in step 7.
```

7단계에 있는 표에 의하면 `opText`은 이하의 군이어야 한다.

- `**`
- `*`
- `/`
- `%`
- `+`
- `-`
- `<<`
- `>>`
- `>>>`
- `&`
- `^`
- `|`

그리고 `+`가 `opText`이다.

다음 단계는 `opText`가 `+`일 때 실행되는 것으로

```
2. If opText is +, then
    a. Let lprim be ? ToPrimitive(lval).
    b. Let rprim be ? ToPrimitive(rval).
    c. If Type(lprim) is String or Type(rprim) is String, then
        i. Let lstr be ? ToString(lprim).
        ii. Let rstr be ? ToString(rprim).
        iii. Return the string-concatenation of lstr and rstr.
    d. Set lval to lprim.
    e. Set rval to rprim.
```

`a`, `b`로 `lval`, `rval`을 각각 `ToPrimitve`에 전달해 결과를 `lprim`, `rprim`이라 한다.

`c`에서는 `lprim`, `rprim`에서 어딘가 하나라도 `String`이면 남은 쪽도 `String`으로 변환해서 그것을 `lstr`, `rstr`이라 한다.
**그리고 `lstr`, `rstr`을 문자열로 결합한 결과를 `ApplyStringOrNumericBinaryOperator` 전체 결과로 한다**

이 때 후속 `d`, `e`는 실행되지 않는다.

결론적으로 `[1, 2, 3] + [4, 5, 6]`은 `c` 단계가 실행되어 문자열 결합하는 `"1,2,34,5,6`가 된다는 소리다.

`c`가 실행되는 것은 `lprim`, `rpirm`이 적어도 하나가 `String`일 때 뿐이다.

그리고 `lprim`, `rprim`은 `ToPrimitive`에 의해 변환된 값이다.

즉, 배열에 `ToPrimitive` 결과가 `String`이므로 직관에 반하는 행동이 일어난다.

## ToPrimitive

`ToPrimitive` [정의](https://tc39.es/ecma262/#sec-toprimitive)

`ToPrimitive`은 `input` 필수 인수와 `preferedType` 옵션 인수를 받는다

`ToPrimitive`은 `input`이 Object 타입일 때 Object가 아닌 타입(primitive type)으로 변환하는 Abstract Operation이다.

`ToPrimitive`의 절차는 이렇다

```
1. If Type(input) is Object, then
    a. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
    b. If exoticToPrim is not undefined, then
        i. If preferredType is not present, let hint be "default".
        ii. Else if preferredType is string, let hint be "string".
        iii. Else,
            1. Assert: preferredType is number.
            2. Let hint be "number".
        iv. Let result be ? Call(exoticToPrim, input, « hint »).
        v. If Type(result) is not Object, return result.
        vi. Throw a TypeError exception.
    c. If preferredType is not present, let preferredType be number.
    d. Return ? OrdinaryToPrimitive(input, preferredType).
2. Return input.
```

`1`은 `input`이 Object 타입일 때만 실행된다
(`input`이 Object 타입이아니라 때는 `2`로 직행해서 `input`를 반환한다)

`1`의 `a`, `b`, `c`에 설명하면

`a`는 `GetMethod`를 사용해 `input`의 `@@ToPrimitve`를 얻어 `exoticToPrim`이라 한다.

(`GetMethod` [정의](https://tc39.es/ecma262/#sec-getmethod), 이름처럼 객체에서 메소드를 받기 위한 Abstract Operation)

`@@ToPrimitve`는 Well-know Symbols의 하나로 Object 타입값이 primitive으로 변환될 때 행동을 제어한다.

상세는 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 참조

배열에는 기본적으로 `@@ToPrimitive`가 없으므로 이번에는 `exoticToPrim`은 `undefined`이다

`b`는 `If exoticToPrim is not undefined, then` 조건 실행하고 `exoticToPrim`이 `undefined`라면 `b`는 넘어간다.

`c`는 `preferedType`가 존재하지 않으면 `preferedType`를 `number`로 한다.

이번 `ToPrimitive`는 `ApplyStringOrNumbericBinaryOperator`에서 호출했지만, `preferedType`가 지정되어 있지 않아 `c`에 의해 `preferedType`은 `number`가 된다

## OrdinaryToPrimitive

`OrdinaryToPrimitive` [정의](https://tc39.es/ecma262/#sec-ordinarytoprimitive)

`OrdinaryToPrimitive`은 `O`과 `hint`를 받는다.

`O`은 Object, `hint`는 `string`, `number`이다.

`ToPrimitive`에서 전달된 `input`이 `O`, `preferedType`이 `hint`다

`OrdinaryToPrimitive`의 다음 절차를 따른다

```
1. If hint is string, then
    a. Let methodNames be « "toString", "valueOf" ».
2. Else,
    a. Let methodNames be « "valueOf", "toString" ».
3. For each element name of methodNames, do
    a. Let method be ? Get(O, name).
    b. If IsCallable(method) is true, then
        i. Let result be ? Call(method, O).
        ii. If Type(result) is not Object, return result.
4. Throw a TypeError exception.
```

먼저 `1`, `2` 단계에 의해 `methodNames`이 결정된다.

`hint`가 `string`이면 `methodNames`는 `"toString", "valueOf"`가 된다.

`number`면 `"valueOf", "toString"`이 된다.

이번에는 `ToPrimitive` `1`의 `c`에 의해서 `preferedType`가 `number`가 되었으므로, `methodNames`는 `"valueOf", "toString"`이 된다.

`3` 단계에서는 `methodNames` 각 요소(이번에는 `valueOf`, `toString`)에 `a`, `b` 단계를 실행한다.

각 루프마다 `methodNames` 요소는 `name`으로 한다.

`a`에서 `Get`를 사용해 `O`에서 `name`에 대한 메서드를 취득하고 `method`라 한다.(`Get` [정의](https://tc39.es/ecma262/#sec-get-o-p))

`b`에서 `IsCallable`를 사용해 `method` 호출 가능을 확인한다(`IsCallable` [정의](https://tc39.es/ecma262/#sec-iscallable)).

만약 호출가능하면 `method` 호출, 결과를 `result`라 한다.
결과가 Object형이 아니라면 `result`를 반환한다.

`1`, `2`, `3` 단계를 실행해 아무 것도 반환할 것이 없으면 `4`로 `TypeError`를 던진다.

`OrdinaryToPrimitive`를 JS로 간단히 표현하면 이렇게 된다. 의사코드로 봐달라.

```js
function OrdinaryToPrimitive(O, hint) {
  const methodNames =
    // 1.
    hint === 'string'
      ? ['toString', 'valueOf']
      : // 2.
        ['valueOf', 'toString'];
  // 3.
  for (const name of methodNames) {
    // a.
    const method = Get(O, name);
    // b.
    if (IsCallable(method)) {
      // i.
      const result = method(O);
      // ii.
      if (typeof result !== 'object') {
        return result;
      }
    }
  }
  // 4.
  throw TypeError();
}
```

이번에는 `methodNames`는 `"valueOf", "toString"`이므로 순서대로 루프 실행한다.

첫 번째 루프에서 `Get`를 사용해 `O`(이번엔 배열)에서 `valueOf`를 받아 `method`로 한다. `method`에는 배열 `valueOf`가 담긴다.

`IsCallable(method)`는 넘어간다.
하지만 배열 `valueOf`는 배열을 반환한다.

즉, 배열 `valueOf`는 객체 값을 반환한다.

그렇기에 `ii`의 `If Type(result) is not Object` 조건은 넘어가지 않는다. 값을 아무것도 반환하지 않으면 다음 루프로 진입한다.

두 번째 루프에서 `Get`를 사용해 `O`에서 `toString`를 받아 `method`라 한다.

배열에는 `toString`이 정의되어 있으므로, `method`는 그 배열을 `toString`한다.

이번 루프에서는 `method`에 배열 `toString`이 담기므로 `IsCallable(method)`는 `true`이다.

다음 `i`에서는 `method`를 호출한 결과를 `result`로 한다.

배열의 기본 `toString`은 `String`을 반환한다.
`String`은 객체가 아니므로, `If Type(result) is not Object` 조건을 넘어가서 `result`가 `OrdinaryToPrimitive` 값이 된다.

## 결국에 뭐지?

`ApplyStringOrNumericBinaryOperator`를 떠올려보자.
`ApplyStringOrNumericBinaryOperator`에는 `ToPrimitive`에 의해 좌변, 우변을 Primitive화 한 값(`lprim`, `rprim`)이 `String`이라면 결합해서 반환했다.

`ToPrimitive`는 배열을 `toString` 호출해서 반환한다는 소리다.

배열의 `toString` 동작은 간단하게 확인할 수 있다.([정의](https://tc39.es/ecma262/#sec-array.prototype.tostring))

```js
const arrStr = [1, 2, 3].toString();
console.log(arrStr); // "1,2,3"
```

단순하게 결합한 것이 `ApplyStringOrNumericBinaryOperator`이 되며, 그것을 `+` 연산 반환값이 된다.

`[1, 2, 3] + [4, 5, 6]`은 `ToPrimitive([1, 2, 3])`이 `"1, 2, 3"`이 되며, `ToPrimitive([4, 5, 6])`은 `"4, 5, 6"`이 되므로 `ApplyStringOrNumericBinaryOperator`에 의해서 문자열 2개를 결합한 `+` 연산자 결과로 `"1,2,34,5,6"`이 된다는 소리다.

## hack

그럼 이 사양이 보았으니, 뭔가 hack이 떠올랐을 것이다.

우선 `ToPrimtive`에 의해 `OrdinaryToPrimitive` 보다 먼저 실행되는 `@@ToPrimitive`를 덮어쓰면 동작은 변한다.

```js
const arr = [1, 2, 3];
arr[Symbol.toPrimitive] = () => 'hello!!';
console.log(arr + [4, 5, 6]); // "hello!!4,5,6"
```

또 배열이라면 `toString`보다 `valueOf`가 우선된다.
그러니 `valueOf`가 Object가 아닌 타입을 반환하도록 하려면

```js
const arr = [1, 2, 3];
arr.valueOf = () => 'hello!!';
console.log(arr + [4, 5, 6]); // "hello!!4,5,6"
```

혹은 `toString` 자체를 덮어쓰면 동작이 변한다.

```js
const arr = [1, 2, 3];
arr.toString = () => 'hello!!';
console.log(arr + [4, 5, 6]); // "hello!!4,5,6"
```

## 정리

The Addition Operator 사양은 다음과 같이 기술되어있다.

> Note: The addition operator either performs string concatenation or numeric addition.

`+` 연산자는 수치를 더하거나 문자열을 결합하는 연산자이다.

그래서 직관적이지 않은 행동을 피하기 위해서는 그것 이외의 용오로는 사용하지 않는 것이 좋다.

당연하지만 TS에서는 `[1, 2, 3] + [4, 5, 6]`은 컴파일러에서 에러가난다. TS를 쓰자
