---
slug: perhaps-TypeScript-in-Browser
title: TypeScript가 브라우저로 들어올지도 모릅니다.
authors: rewrite0w0
tags: [javascript, typescript, proposal, ECMAScript, 번역]
---

> [글](https://qiita.com/access3151fq/items/85b34a395e8268dd518a)

어쩌면 `TypeScript`가 `JavaScript`로 들어와 브라우저에서 바로 `TypeScript`를 사용할 수 있을지도 모릅니다.

[A Proposal For Type Syntax in JavaScript](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/)

[Proposal Git](https://github.com/giltayar/proposal-types-as-comments/)

## TypeScript?

TypeScript는 어떻게 바라보냐에 따라 다르게 볼 수 있습니다. 저는 3가지를 "TypeScript"로 봅니다

- 언어에서 TypeScript (`const a: number = 1` 구문을 쓰는 언어)
- 타입체크를 하는 CLI 도구 (tsc커맨드)
- 타입체크나 트랜스파일을 하는 라이브러리 (misrosoft/TypeScript 레포지토리)

이 글에서 다루는 것은 **언어에서 TypeScript**입니다.
`const a: number = 1` 구문이 브라우저에서도 작동할 수 있을지도 모른다는 이야기입니다.

## 지금까지는 어떠했는가?

다음과 같은 TypeScript 프로그램이 있다 칩니다.

```ts
function add(a: number, b: number) {
  return a - 0 + b;
}
```

이렇게 타입이 있는 구문을 사용하면 "타입"을 근간으로 정적해석을 실행 해 진단정보를 보여주는 도구를 이용할 수 있습니다. (tsc, typescript-eslint 같이)

이 코드를 실행하려면 먼저 JavaScript에 "트랜스파일" 해야합니다.

```js
function add(a, b) {
  return a - 0 + b;
}
```

최근에는 트랜스파일하는 도구가 여럿 나와서 표준화되지 않은 독자 구문을 지원하거나 Node.js와 브라우저 비호환성을 메우는데에도 사용됩니다.

중요한 것은 현 시점에서는 아직 TypeScript는 라이브러리가 하나라는 점입니다. JavaScript은 Web이 지속되는 한 50년, 100년도 사용될 것이므로(그러니 굳건한 언어사양으로 되어있다) TypeScript는 어디까지나 라이브러리이므로 시대의 흐름에 의해서 사라질지도 몰랐습니다.

하지만 TypeScript는 표준화 길에 들어섰습니다. 충격적이네요.

## 이제부터는 어찌되는가

JavaScript 사양에 타입이 붙습니다.
이 코드가 그냥 브라우저에서 시행되는거죠.

```ts
function add(a: number, b: number) {
  return a - 0 + b;
}
```

여기서 주의할 점은 도입되는 것은 타입 **구문**만이라는 점입니다.

**실행시에는 "타입" 부분이 사라집니다.** 이는 Python에 도입된 정적 구문과 같은 방식이죠.
한 마디로 "타입체크", 소스코드를 정적분석해서 그것을 진단하는 것은 **언어사양에 들어오지 않습니다.** 타입체크는 지금처럼 서드파티 도구나 라이브러리에 의존해야합니다.

## 들어오는 구문 / 들어오지 않는 구문

proposal를 보면, 모든 TypeScript 구문이 들어오는 것이 아닙니다.

#### 들어오는 구문

주요한 것만 적어보면

```ts
// 타입 붙이기
let x: string;

// 타입 선언 interface
interface Person {
  name: string;
  age: number;
}

// 타입 선언(type)
type CoolBool = boolean;

// 함수에 타입 붙이기
function equals(x: number, y: number): boolean {
  return x === y;
}
// 옵션 인수(`?` 키워드)
function split(str: string, separator?: string) {
  // ...
}

// 제네릭
function foo<T>(x: T) {
  return x;
}

// this 인수
function sum(this: SomeType, x: number, y: number) {
  // ...
}

// 클래스 안에 사용되는 타입 구문
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getGreeting(): string {
    return `Hello, my name is ${this.name}`;
  }
}

// 타입 export
export type SpecialBool = boolean;
export interface Person {
  name: string;
  age: number;
}
export type { SomeLocalType };

// 타입 import
import type { Person } from 'schema';

// `as` 키워드
const point = JSON.parse(serializedPoint) as { x: number; y: number };

// 비null 타입 단어(Type Assertion)（`!`키워드）
document.getElementById('entry')!.innerText = '...';
```

#### 들어오지 않는 구문

```js
// JSX
<div></div>

// enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// namespace
namespace Foo {
  export class Bar {}
}

// constructor 안에 프로퍼티 선언

class Octopus {
  constructor(readonly name: string) {}
}

// Ambients 선언 (`d.ts파일`)
declare let x: string;

// 함수 오버로드
function foo(x: number): number
function foo(x: string): string;
function foo(x: string | number): string | number {
    if (typeof x === number) {
          return x + 1
    }
    else {
        return x + "!"
    }
}

// 클래스 필드 수식자 (private, readonly 같은)
class Point {
    public readonly x: number
    protected x: number
    private x: number
    abstract foo(){}
    override foo(){}
}
```

도입되는 구문의 기준은 이러합니다.

- 주석으로 취급해서 날려버려도 되는 것
- 후에 구문을 추가되어도 그에 대응할 수 있는 것

JSX, enum은 함수, 객체로 변환이 필요하므로 불가
클래스 필드 수식자는 후에 수식자 추가에 대응하기 위해다른 구문 도입이 검토되고 있습니다.

여기서 소개한 것이 전부가 아니므로 자세한 사항은 [Proposal Git](https://github.com/giltayar/proposal-types-as-comments/)을 참조하시길 바랍니다.

또 현재 제한 초가단꼐이므로 최종적으로 어떻게 될지는 아무도 모릅니다.

## 언제 도입되는가

과거에도 JavaScript에 타입을 도입하자는 움직임이 있었습니다만 이런저런 이유로 좌절되었습니다. 이번 제안 또한 복잡하고 어려운 의론이 될 수도 있습니다.
하지만 이번 제안을 주도한 것은 TypeScript 팀, microsoft 사람들입니다. 또 Web사양에 적극적 제안을 하고 있는 Deno도 이 제안을 지지함으로 이번 제안이 통과될 가능성은 높다 봅니다.

하지만 언어사양으로 도입되는 것은 Stage0에서 여러 의론을 거쳐 State4까지 가야함으로 모든 브라우저에서 구현되는 것에는 시간이 걸릴 것입니다.
그래서 브라우저에서 편히 TypeScript를 쓰려면 5~10년 정도 걸릴지도 모릅니다.

## 도입 후의 JavaScript 에코시스템

지금까지는 TypeScript 기능 대부분을 TypeScript 라이브러리에 의존했지만 이 proposal이 도입되면 에코시스템도 변할 것이라 예상합니다.

#### 코드 진단 도구 재편

지금까지 타입 체크를 한 tsc, 타입 정보를 근간으로 추가 검사를 한 typescript-eslint, 타입 정보 없이 코드를 검사하는 eslint. 이렇게 역할이 분담되어 있었습니다.
하지만 rust/wasm의 약진에 의한 후발 타입 체크 도구가 나오면 "코드를 분석, 검사를 한다" 역할을 하던 각종 도구에 재편이나 통폐합이 이루어 질 것이라 필자는 생각합니다. [swc 제작자가 만든 Go언어로 만든 타입체커](https://kdy1.dev/posts/2022/1/tsc-go), [linter 같은 각종 도구를 통합한 rome](https://rome.tools/), [TypeScript를 직접실행하는 Deno](https://deno.land/)도 주목할 만합니다.

#### JavaScript 세계의 단순화

최근 10년간 JS는 복잡해졌습니다. Python으로 예를 들면
"python1, python2, python3, python A, python B, python C 가 있는데, 각장 쓰는 구문이나 API가 다르다. 역사의 흐름에 의해서 python C로 적은 코드를 python B로 변환해서 돌리는 것이 주류지만 그 도구는 10종류 정도 된다."

이런 상황입니다.(예일 뿐 실제와는 달라 의미없는 예시입니다.)
복잡한 도구를 사용하며 개발하는 사람이야 어쩐지 모르지만 저는 싫습니다.

이러한 미친 상황의 배경에는 JSX,CSS modules, decorator 등등 라이브러리가 각각 언어를 멋대로 확장한 과거가 있습니다. 하지만 prototype 확장과 같이 비표준 구문을 확장해 사용하는 건 한계치에 다다르게되었습니다.
이제부터 10년은 복잡화한 JavaScript 세계가 하나의 언어 사양을 사용하는 흐름이 될 것이라 보입니다. TypeScript 구문뿐만이 아니라, decorator, CSS modules 표준화 작업도 진행중이므로, 이 흐름으로 모든 런타임이 공통된 구문과 API 지원하는 것이 JavaScript가 나아갈 올바른 방향이라 생각합니다.

#### 타입 시스템 진화

이런 제안은 이른바 "구문은 표준사양에서 정의하므로 타입 체크는 각자 라이르러리에서 해라" 느낌입니다. 이는 타입체크를 하는 도구가 TypeScript 이외에도 나타날 수 있다는 예상을 할 수 있습니다. 이러한 도구가 현재 TypeScript 보다 우수한 검사결과를 낸다면, 그것을 사용한 개발은 이미 TypeScript가 아닙니다. 새로운 JavaScript 에코시스템이죠. 즉, 이 제안은 TypeScript에서 탈피해서 JS 타입 시스템이 새로운 장에 들어설 수도 있다는 가능성도 담겨있습니다.

## 감상

개인적으로 이러한 수준으로 TypeScript가 JavaScript로 들어오는 것이라면, 굳이 왜 해야하나 싶다...
애초에 타입이 없는 언어에 타입을 끌고 오려는 의도가 다분히 의심된다.
지금처럼 라이브러리수준으로 멈추는 것이 더 현명한 것이 아닐까?

## 추가

> [궁금해서 제작 동기를 확인](https://github.com/tc39/proposal-type-annotations)

지난 10년간, 정적타입 체크는 성공적이라는 것이 증명되었다.

MS, Google, FaceBook 은 각각 TS, Closure Complier, Flow를 출시했다.

더 빠른 단계에서 에러를 발견하고 강력한 도구를 활용해 다른 정적타입 언어에서 보는 생산성 상향을 얻을 수 있도록 JavaScript에 대규모 투자를 했다.

TS, Flow는 JavaScript 아종이며, JavaScript에 타입을 선언하고 사용하기 위한 편리한 구문을 가져왔다.
실행 시 syntax에 영향을 주지 않으므로 아종을 JavaScript로 변환하는 작업의 대부분은 타입을 지우는 것이다.

**커뮤니티 이용 및 수요 상황**

State of JS 조사에 의해면 2020, 2021 "Static Typing"이 가장 바라는 기능이었다.

![state of js](https://user-images.githubusercontent.com/6939381/143012138-96b93204-c456-4ab5-bb63-2648187ab8a7.png)

> ~조사에 응한 단위수가... 천 명도 안되는데...~

여기에 GitHub State of Octoverse에서는 TS는 많이 사용되는 언어 4위에 랭크되어있다.
StackOverFlow의 Annual Developer Survey에서는 2017, 가장 사랑 받는 언어로 4위, 사용하고 있는 언어 10위를 달성했다.

**JS 컴파일러 동향**

JavaScript 타입 구문은 다운레벨 컴파일(트랜스컴파일)이다. ES2015가 표준화되고 JavaScript 개발자는 낡은 브라우저 지원때문에, 바로 기능을 사용하지 못했다.

화살표 함수도 편리한 기능이지만 엔드유저 브라우저에서 실행이 안 됐다.

그래서 Traceur, TS, Babel 같은 프로젝트가 ES2015 코드를 낡은 런타임에서 동작할 수 있는 코드로 바꿔 틈을 매웠다.

JavaScript 타입 구문은 네이티브 지원하지 않으므로, 코드 실행하기 전에 타입을 제거하는 도구가 필요했다.

TypeSciprt, Flow 타입 시스템에 의해, 유저가 다른 도구를 실행할 필요가 없도록, 타입 제거 단계와 syntax 다운레벨링 단계를 통합해서 해결했다.
근래는 둘다 번들까지 할 수 있다.

시간이 흘러, 개발자가 다운레벨컴파일하는 필요성은 적어졌다 생각한다.

EverGreen 브라우저가 주류가 되었고, 백엔드는 Node.js, Deno가 새로운 V8를 사용하고 있다.

더욱이 많은 TS 개발자가 코드를 쓰면서 실행할 필요한 단계는 타입 annotations을 지우는 일뿐이다.

빌드 단계는 코드를 적는 것과 별개로 레이어를 추가한다

예를 들면, ensuring freshness of the build output(빌드 출력의 새로움 보장), optimizing the speed of the build(빌드 속도 최적화), and managing sourcemaps for debugging(디버깅 위한 소스맵 관리) 등 JavaScript가 굳이 다루지 않았던 사안 전부를 포함하고 있다.

이 간결함이 JavaScript를 더 다루기 쉽게 만들었다.

이 제안에 의해, 빌드 단계가 필요없어지고, 개발 준비가 더 간결해질 가능성이 있다. 사용자는 자신이 적은 코드를 실행할 뿐이다.

**JSDoc 타입 주석의 한계**

빌드 도구 사용방법은 그리 어렵지 않다.
그러나 많은 개발자에게 빌드 도구는 진입장벽이 된다.

TS 팀은 JSDoc 주석으로 타입을 표현하는 지원에 투자한 이유 중 하나가 여기있다.

JSDoc 주석에는 JS 커뮤니티에서 타입을 문서화하기 위한 선행작업이다. 이 타입을 Closure 컴파일러로 활용한다.

주석 규약은 빌드스크립트, 소규모 웹 애플리케이션, 서버사이드 애플리케이션 같이 빌드 도구를 추가하는 비용과 이익의 tradeoff가 비싼 곳에서 종종 보인다. TS가 타입 체크 정보를 제공하지 않아도 주석 규약은 에디터 기능으로 활용된다. 왜냐면 TS는 JS 편집의 기초 기능을 제공하고 있기때문이다.

TS의 JSDoc 문서에서 구문을 보자

```ts
/**
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @return {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4 = 'test') {
  // TODO
}
```

이번 제안이 통과하면, TS 문법은 이렇게 된다.

```ts
function stringsStringStrings(
  p1: string,
  p2?: string,
  p3?: string,
  p4 = 'test'
): string {
  // TODO
}
```

JSDoc 주석은 일반적으로 더 장황하다.

그래서 JSDoc 주석은 TS에서 지원되는 기능 셋의 서브셋에서만 제공한다.

이는 JSDoc 주석 안에 표현력이 풍부한 구문을 제공하는 것이 어렵기 때문이다.

그렇다해서 JSDoc 기반 구문은 여전히 유용하다.

JavaScript에 의한 어떠한 형태의 형태 주석이 필요성은 TS 팀이 그것에 투자할 정도로 컸다.

이런 이유로 이번 제안의 목표는 TS 구문에서의 큰 서브셋 주석이 쓰이고 있는 JavaScript 소스 파일째로 보여주는 것이다.

## 감상

.....?
TS를 더 쉽게 활용하기 위해 JS를 수정한다는 소리인가?

이게 좋은 기능인지 진짜 잘 모르겠습니다.
