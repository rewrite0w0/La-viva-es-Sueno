---
slug: jibun-no-javascript-unit-test-kaki-kata
title: (자신만의) JavaScript 유닛테스트 작성 방법
authors: rewrite0w0
tags: [javascript, test, unit test, 번역]
---

# [(자신만의) JavaScript 유닛테스트 작성 방법](https://zenn.dev/mizchi/articles/my-test-policy)

(사내용 문서 공개판)

## 테스트 정책

전제로 유닛테스트를 도입하는 비용을 최대한 낮게하는 것이 목표이다.

테스트가 뿌리내려 있지 않은 언어환경, 문화는 그냥 두면 테스트 없이 구현이 진행되어, 결과적으로 테스트 불가능하게 제품이 완성된다.

이리 되면 관리 비용이 비싸 E2E를 대량으로 적어야하며, 테스트 실행시간이 많이 든다.

이렇게 되기 전에, 유닛테스트를 적기 좋은 환경을 유지하며, 유닛테스트로 문제를 분리하는 환경을 갖춘다.

우선 적기 편함을 중시해서 하나의 유닛테스트를 적는 과비용을 최대한 감소시킨다.

## 첫 수는 빠르게 적는다

내 경험상, 유닛, 테스트의 첫 수를 두면 나중은 자연스레 주변을 풍요롭게 한다. 샘플이 있으면 사람은 복붙한다. 반대로 첫 수를 못 두면 일절 작성하지 못한다.

우선 첫 수를 두게 중요하다.

첫 수라 해도 결국엔 구현하는 대상에 따라 패턴이 있으며, 패턴에 따라 해당하는 것을 준비할 필요가 있다.

자신이 프론트엔드 담당자라면 이런 패턴이 많다.

- 플랫폼에 의존하지 않는 단순한 테스트
- 서버에 의존하는 테스트(beforeAll / afterAll로 mock 서버를 제공)
- 브라우저 API에 의존하는 테스트라면, jsdom를 사용(jsdom + react 등)
  - navigator, location은 신뢰할 수 없다
- Date mock에 의존하는 테스트 `@sinonjs/fake-timers` 혹은 `vi.useFakeTimers()`

물론 대상에 의해 다르므로, 매번 만든다.

## E2E와 유닛테스트

유닛테스트에 비해 E2E는 그리 중요치 않다.
이런 의미는 아니지만 프로그래머에게 유닛테스트가 "싸고 빠르고 좋다".

E2E 테스트는 블랙박스 테스트이기에 실행할 때 내부 구현을 알 필요가 없다. 개발자를 벗어난 엔드유저 감각으로 하는 것이다. 그에 반해 유닛테스트는 프로그래머가 그 프로젝트를 진행하기 위해 "심리적 안정감을 확보"하기 위해 필요한 것이라 생각한다. 내부 사양이 표현되었다면, 기능변경이나 리팩토링을 안전하게 할 수 있다.

유닛테스트는 E2E 테스트와 독립되어 있지만, 간접적으로 E2E를 통과하기 위한 밑준비이기도 하다.
역할을 분할하는 구현을 하면 자연스레 E2E가 늘어난다. 즉, 이론적으로 모듈마다 알맞은 역할로 분할하면 본래의 목적인 E2E 테스트는 최소한으로 누를 수 있다.

그 지표로 쓰는 것이 테스트 커버리지, 대상에 따라 80~90% 정도로 커버리지를 올린다 선을 정해놓을 거라 생각한다. 이를 하회하지 않도록 한다. 브라우저 용 코드라도 60% 밑으로 내려가면 위험하다.

## 실전

vitest를 사용한다. mocha, ava, jest 등 지금까지 사용한 것 중에 가장 마음에 든다.
API가 jest 호환이므로 이주도 쉽다. 근래 jest는 commonjs/ESM 혼란의 직격탄을 맞아, 솔직히 설정이 너무 귀찮다. vitest는 어느 정도 라이브러리가 맡겨버릴 수 있다.

[https://vitest.dev/](https://vitest.dev/)

```bash
npm install -D vitest c8 # c8은 커버리지를 받기 위함
```

이주하기 쉽다해도 글로벌 변수로 노출되어 있지 않아 `import { test, expect } from "vitest";`처럼 import가 필요하다. 나는 글로벌로 박기보다 이런 식으로 하는게 어디서 나온건지 알기 편해 좋다.

> 댓글 : 글로벌로 박을 수 있습니다.

여담으로 다음 node(18?)에는 테스트런너가 포함되는 것 같다. Deno의 영향을 강하게 받은 모양

## 처음은 대충 만든다

처음은 언어, 프레임워크의 편리기능 등을 잊고, 최악 수준으로 바보 같은 코드를 적는다. assertion, context도 의식하지 않는다.

테스트는 동작 보증이면서, 애플리케이션 내에 "가장 신용되는 복붙처"가 되어야한다. 생각하고 있다. 구현을 wrap한 똑똑한 assertion도, 특히 커버리지를 올리려할 때 필요하지만, 그것과 API의 사용 방법을 밝히는 테스트는 별도로 적는다.

이번에 설명용 합산 함수를 `function add(a: number, b: number): number` 구현했다.

처음은 구현용 파일이 아니라, 테스트케이스를 적은 `add.test.ts`를 만들어 테스트케이스가 사양을 충족하도록 구현한다.

```ts
// add.test.ts

import { test, expecet } from 'vitest';

test('1+1=2', () => {
  expect(1 + 1).toBe(2);
});
```

`npx vitest add.test.ts`으로 실행

이 때, `__tests__`, `test/**`가 아니라, 구현한 폴더에 테스트를 둬도 좋다.

이론은 있겠지만, 테스트가 보이지 않는 폴더에 숨겨져 있는 것은 일견 깨끗해 보이지만, 관리하는 사람의 의식이란 옅어지므로 그대로 방치할 위험이 있다. 테스트는 소극적인 존재이 아니라, 적극적으로 보여한다 생각한다.

이 때, `describe`, `context`을 적극적으로 사용하지 않는다. 파일 명 자체가 테스트라는 걸 보이게하고, 기본적으로 그것으로 충분하도록 한다. describe가 있으면 전용 `beforeEach` 같은게 있어야한다.

## 함수화와 구현 추출

이제 자기가 바라는 부분을 함수로 뽑는다.

```ts
// add.test.ts
import { test, expect } from 'vitest';
import { add } from './add';

function add(a: number, b: number): number {
  return a + b;
}

test('1+1=2', () => {
  expect(add(1 + 1)).toBe(2);
});
```

이제 첫 구현용 파일로 나누자.

```ts
// add.ts

export function add(a: number, b: number): number {
  return a + b;
}
```

```ts
// add.test.ts

test('1+1=2', () => {
  expect(add(1 + 1)).toBe(2);
});
```

여기서 주의해야 한 것은, `expect()` assertion도 `.toBe()`, `.equal()` 같이 단순한 것만 쓰도록한다.
복잡한 assertion를 쓰면 구현하는 사람의 기분은 좋겠지만, 다른 사람을 읽는데 에너지를 소비해야한다. JS 테스트 프레임워크는 늘 유행이 변화하므로 assertion를 다 기억하고 돌아다닐 노하우가 없다.

예전에 나는 표준 `assert`만 사용하도록 했지만, 이건 이거대로 프레임워크에 포함된 것을 사용하지 않으면 위화감이 컸다. 예를 들면 표준 assert에 없는 `.toSnapshot()` 같은건 사용하는 순간 일관성을 잃는다.

그리고 `assert`은 ESM에 대응하지 못하므로, 과거에 실수로 빌드하고 런타임에 assert polyfill를 해버린 경우도 있었다.

## 불안한 곳을 해치우자

이번에 add 함수는 단순해서 뭐 할 여지가 없다만, 무한에서 무한을 빼는 건 어떨까? 테스트로 더해보자

```js
import { test, expect } from 'vitest';
import { add } from './add';

// ...

test('-∞ + ∞ = NaN', () => {
  expect(
    add(Number.Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY),
    'ref. https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type'
  ).toBe(NaN);
});
```

add가 복잡해지는 것에 맞춰 불안한 곳을 해치우자

원래라면 여기서 커버리지가 오르므로 확인해두자.

`vitest --run --coverage`

## 기존 코드를 테스트로 추출하자

지금 한 작업을 역으로 한다.
원래 코드에 테스트를 쓴려한다면, 리팩토링 중일 때 OK

```ts
// add.ts

export function add(a: number, b: number): number {
  return a + b;
}

// *** Test ***
import { test } from 'vitest';
if (process.env.NODE_ENV === 'test') {
  test('1+1=2', () => {
    // ...
  });
}
```

jest/vitest는 NODE_ENV에 test가 들어가 있으므로, 런타임으로 실행되지 않도록 분기에 테스트를 적는다.

코드 안에 은닉해야할 함수, 모듈이 많다면 일단 이렇게 적자.

프론트엔드에서는 vitest 의존 빌드가 되지 않으므로, 아마 fail이되지만, 이런 방법처럼 ESM treeshake + Terser가 제대로 돌아가는지 보증을 하면, 그대로 빌드하지 못할 이유는 없다. 지금은 그다지 권장하지 않다만

## 맺는말

프론트엔드 특유의 사정도 있고, 다른 의견도 있을지도 모르지만 적어도 나만의 유닛테스트는 자신을 위해서 적고, 최종적으로 전체를 최적할 수 있다 믿는다.
