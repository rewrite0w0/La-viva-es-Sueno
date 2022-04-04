---
slug: think-about-you-dont-need-loop
title: You Don't Need Loops 번역 후, 감상
authors: rewrite0w0
tags: [you don't, javascript, 감상]
---

[You Don't Need Loops](https://github.com/you-dont-need/You-Dont-Need-Loops)를 읽고 [You Don't Need Loops 한국어판](https://github.com/you-dont-need/You-Dont-Need-Loops/blob/master/readme_kr.md)을 만들었다.

글에 **"if 대신 삼항식을 사용하는 이유"** 대목을 보았는데,

우선 떠오른 생각은 꼬리재귀를 하기 위함아닌가? 이런 생각이 있었는데,

아쉽게도 설명은 없이 찾아보라 해서 찾아보기로 하였다.

결론부터 말하면 어딜가든 이유는 제각각이다.

오히려 삼항대신 if를 써야한다 하는 [글](https://qiita.com/raccy/items/0b25b2f106e2a813828b)도 있다.

이 사람은 읽기 어렵다는 이유로 이러한 주장을 했다.

실제로 글쓴이가 쓴 예시를 읽어보면 뭔 말인지 알 수가 없다.

```js
f(a ? g(a, (x ? b : c) + y) : b, c);
```

[물론 보통은 저렇게안 쓰며, 써서도 안 된다.](https://qiita.com/alt_yamamoto/items/25eda376e6b947208996#star1-%E4%B8%89%E9%A0%85%E6%BC%94%E7%AE%97%E5%AD%90%E3%81%AB%E8%A4%87%E9%9B%91%E3%81%AA%E8%A8%98%E8%BF%B0%E3%82%92%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BE%E3%81%AA%E3%81%84)

```js
flag ? (subFlag ? a : b) : c;
```

```js
let aOrB = subFlag ? a : b;

flag ? aOrB : c;
```

이렇게 쓰는 게 좋다.

```js
flag ? (1 + 2) _ 3 - 4 : 5 % 6 _ 7
```

이것도 역시

```js
let a = (1 + 2) \* 3 - 4

let b = 5 % 6 \* 7

flag ? a : b
```

그런데도 불구하고, 왜 삼항을 써야하는가 궁금했다.

여기서 [힌트](https://dev.to/vangware/you-dont-need-if-37f1)를 얻을 수 있었다.

글쓴이는 3가지 이점이 있다 주장하는데,

- 모든 논리 분기를 할 여지가 없어진다. (모든 if에 else를 넣는 여지가 없어진다.)

- 코드량이 적어진다. (?:만 사용한다)

- 조건 블록대신 조건값을 사용하는 것이 강제되어, 결과적으로 if 블록에서 독자적 함수로 로직를 이동시킬 수 있다.

물론 여기도 반론은 있었다.

우선 읽기 힘들다는 이유와, 컴파일러가 어차피 if든 삼항이든 결국 if로 변환한다는 이유였다.

(이 댓글을 쓴 분은 읽기 편함이란 코드 길이가 짧거나, 문장이 짧은 것이 아니라 구조와 경험의 문제라 지적한다.)

물론 여기도 반론의 반론이 있어서,

- 삼항 자체가 어려운 것이 아니며, 오히려 Minifiers는 if를 삼항식으로 바꾸거나, 간략식으로 바꾼다는 점

- 게다가 if에서 else를 적지 않으면, condition ? value : undefined 로 바꾼다는 점

- 의도적으로 "null스러운" 값을 넘기는 것이 아닌이상, undefined으로 변환해야한다는 이유도 있었다.

다만 이것만으로는 내가 궁금했던 것이 해결된 것 같은 기분이 들지 않았으므로, 더 찾아 갱신해야겠다.
