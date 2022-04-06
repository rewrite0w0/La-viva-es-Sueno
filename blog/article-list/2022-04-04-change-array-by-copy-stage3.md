---
slug: change-array-by-copy-stage3
title: Change Array by Copy Status Stage3
authors: rewrite0w0
tags: [javascript, ECMAScript, 감상]
---

[자바스크립트는 왜 그모양일까](https://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966262595&orderClick=LEA&Kc=)를 비롯해서 여러 글에 꼭 언급되는 말이 있습니다.

> sorting은 순수했어야한다.

[소식](https://ecmascript-daily.github.io/ecmascript/2022/04/03/ecmascript-proposal-update)

아무래도 이제 곧 [개선된 sorting 기능](https://github.com/tc39/proposal-change-array-by-copy)를 만날 수 있을지도 모릅니다.

제안은 stage3입니다.

주 용도는 다른 수법을 사용할 필요도 없이 안전하게 본 배열을 지키는 것 같습니다.

아이디어는 [Tuple.prototype](https://tc39.es/proposal-record-tuple/#sec-properties-of-the-tuple-prototype-object)에서 시작했으며, 이름처럼 불변에 관한 기능입니다.

[제안은](https://github.com/tc39/proposal-change-array-by-copy) [저자도 같기에 연관성도 깊습니다.](https://github.com/tc39/proposal-record-tuple)

1. Array.prototype.with()

```js
// 기존
const arr = [42, 72, 0];
a.at('1.9'); // 72
a[50] = 4; // a.length === 51

// 제안
const correctionNeeded = [1, 1, 3];
correctionNeeded.with(1, 2); // => [1, 2, 3]
correctionNeeded.with('1.9', 2); // [42, 72, 0]
correctionNeeded; // => [1, 1, 3]
```

2. Array.prototype.toReversed()

```js
// 기존
const arr = [5, 3, 2];
arr.reverse(); // [2, 3, 5]
arr; // [2, 3, 5]

// 제안
const sequence = [1, 2, 3];
sequence.toReversed(); // => [3, 2, 1]
sequence; // => [1, 2, 3]
```

3. Array.prototype.toSorted(f)

```js
// 기존
const arr = [5, 3, 2];
arr.sort(); // [2, 3, 5]
arr; // [2, 3, 5]

// 제안
const outOfOrder = new Uint8Array([3, 1, 2]);
outOfOrder.toSorted(); // => Uint8Array [1, 2, 3]
outOfOrder; // => Uint8Array [3, 1, 2]
```

4. Array.prototype.toSpliced(i, c, ...vs)

```js
// 기존
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 3); // [3, 4, 5]
arr; // [1, 2]

// 제안
const arr = [1, 2, 3, 4, 5];
arr.toSpliced(1, 2, [99]); // [1, 99, 3, 4, 5]
arr; // [1, 2, 3, 4, 5]
```

### 참조자료

- [https://tc39.es/proposal-change-array-by-copy/](https://tc39.es/proposal-change-array-by-copy/)
- [https://www.dropbox.com/s/5rabrx387snkbfn/change_array_by_copy_at_tc39_march_2022.pdf?dl=0](https://www.dropbox.com/s/5rabrx387snkbfn/change_array_by_copy_at_tc39_march_2022.pdf?dl=0)
- [https://github.com/tc39/proposals](https://github.com/tc39/proposals)
- [https://github.com/tc39/agendas/blob/main/2022/03.md](https://github.com/tc39/agendas/blob/main/2022/03.md)
- [https://github.com/tc39/proposal-change-array-by-copy](https://github.com/tc39/proposal-change-array-by-copy)
- [https://dev.to/hemanth/updates-from-the-89th-tc39-meeting-5bkf](https://dev.to/hemanth/updates-from-the-89th-tc39-meeting-5bkf)
- [https://ecmascript-daily.github.io/ecmascript/2022/04/03/ecmascript-proposal-update](https://ecmascript-daily.github.io/ecmascript/2022/04/03/ecmascript-proposal-update)

기대되는 다른 메서드

- [https://github.com/tc39/proposal-array-grouping](https://github.com/tc39/proposal-array-grouping)
