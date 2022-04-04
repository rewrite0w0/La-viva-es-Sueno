---
slug: 10times-read-react-document
title: reactHook을 10번 읽고서
authors: rewrite0w0
tags: [react, 감상]
---

# react hook 문서를 10번 읽은 시점에서 정리

## reack hook에서 쓰는 JavaScript의 부분들

- 클로저
- Object.is
- 구조 분해 할당
- 함수형 프로그래밍

## react hook 두서없이 정리

기본적으로 `useState`, `useEffect`에 다 하면 10개 + 커스텀 hook

- 최상위에서 호출
- react의 함수 내에서만 호출

#### 왜?

**hook은 호출 순서에 의존하기 때문**

### useState

- 변경되는 것 처리
- 갱신은 병합이 아니라 대체
- 갱신할 때 함수적 갱신을 쓰는게 좋아보임

### useEffect

- 사이드 이펙트
- 거의 대부분의 변경은 여기에 속함
- clean up 시에는 return으로

#### 너무 많이 변경될 때?

- 만약 많이 변경되는 state를 받을 시 함수적 갱신을 하면, 마지막 종속성 생략가능
- 그게 아니라면 안 넣는게 좋음

### useContext

- 꼭 `Provider`와 같이 사용할 것

### useReducer

[useState](#useState) 대체함수

### useCallBack, useMemo

`useCallBack` 콜백을 메모이제이션
`useMemo` 값을 메모이제이션

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

```js
useCallBack(fn, deps) === useMemo(() => fn, deps);
```

`useMemo는 성능 최적화를 위해 사용할 수는 있지만 의미상으로 보장이 있다고 생각하지는 마세요.`
문서에는 이런 설명이 있는데 덧붙여서 되도록 쓰지 않도록 권장하는 듯?

### useRef

변경 가능한 객체를 반환하는 것
`상자`, `컨테이너` 같은 것으로 보면 된다.
**가변값 유지에 용이**
변경되어도 따로 알려주지 않음
DOM 노드에 어떤 실행이 하고 싶으면 `콜백 ref`

### useImperativeHandle, useLayoutEffect, useDebugValue

딱히 필요할 때가 있다기보다는 굳이 필요하면 쓰면 되는 내용

- `useLayoutEffect`는 `useEffect` 대체 함수 같지만 명확히 용도는 다름, 먼저 `useEffect`로 처리해본 뒤에 문제가 있으면 쓸 것

- `useDebugValue`는 디버그용, 화면 렌더링이 번거로울 때 쓰면 좋다

- `useImperativeHandle`은 `ref` 다룰 때 사용, `forwardRef`와 쓸 것, 가장 정체가 뭔지 모르겠는 녀석, 단순하게 뜻만 보면 `긴급처리(?)` 이렇게 봐야하는 것 같은데 받아들여지는 느낌은 모호하다

### hook에 대한 감상

지금까지 `useState`, `useEffect`, `useRef`만 사용해봤는데, 기회가 있다면 `useCallBack`이랑 `useDebugValue`도 사용해보고 싶다

## 특징

클래스 사용하는 `HOC`, `render props` 대신 함수형 구조로 평탄하게, 테스트하기 쉽게 만들 수 있음

hook은 `into hook(연동)`을 의미

## 동기

- Class, this는 사람과 기계를 혼동시킴

  > 더글라스 크록포드도 같은 말을 했음, 객체 지향을 쓰더라도 팩토리 함수를 쓰지 Class, this를 쓰지 말 것을 권함, 이건 애벗과 코스텔로와 함께 코드를 짜는 것이라 비유, `거의 다 같지만 약간 다른 것` 보다 `여기서 조금 저기서 조금 가져와서 만드는 것이 나음` 애초에 비슷한데 조금 다른 것 여러 개 만드는 것보다 소소한 기능을 여럿 만드는게 낫다

  1. 성능차이도 없음
  1. class 인스턴스 만들고, 생성자에서 이벤트 핸들러를 바인딩하는 등의 수 많은 오버헤드 방지
  1. 깊은 트리 중첩이 없음

- 컴포넌트 재사용 어려움
- 관계없는 컴포넌트들이 한데모임

---

## 추가

React 18에 새로운 Hook이 생겼음

추가 hook

- useDeferredValue
- useTransition
- useId

Library Hooks

- useSyncExternalStore
- useInsertionEffect

### useDeferredValue

```jsx
const deferredValue = useDeferredValue(value);
```

값을 받아, 더 긴급한 갱신에 defer 된 값의 새로운 복사본을 반환.

렌더링이 사용자 입력의 같이 긴급한 갱신의 결과라면, React는 이전 값을 반환, 긴급 렌더링 완료 후, 새로운 값을 렌더링한다.

debouncing, throttling를 사용한 갱신을 defer된 user-space hook과 닮았다. useDeferredValue를 사용하는 이점은 React가 다른 작업이 끝날 때, (임의 시간을 기다리지 않고서) 갱신 작업을 할 때, startTransition 같이 기존의 컨텐츠에 기대 않았던 fallback을 일으키지 않고 defer 값을 중단할 수 있습니다.

#### Memoizing deferred children

useDeferredValue는 전달된 값만을 defer함

긴급 갱신할 때 자식 컴포넌트의 재렌더링을 막고싶다면, React.memo, React.useMemo로 컴포넌트도 메모할 필요가 있음

```jsx
function Typeahead() {
  const query = useSearchQuery('');
  const deferredQuery = useDeferredValue(query);

  // Memoizing은 deferredQuery가 변경될 때만 재 렌더링되도록 React에 지시
  // query가 변경될 때가 아님
  const suggestions = useMemo(
    () => <SearchSuggestions query={deferredQuery} />,
    [deferredQuery]
  );

  return (
    <>
      <SearchInput query={query} />
      <Suspense fallback="Loading results...">{suggestions}</Suspense>
    </>
  );
}
```

자식 요소를 메모하면 React에 deferredQuery가 변경될 때만, 재 렌더링할 필요가 있고, query가 변경될 때는 필요없다 전달합니다.
주의점은 useDeferredValue에 한정된 이야기가 아니라 `debouncing`나 `throttling`를 사용시 이 hook과 같은 패턴이 됩니다.

### useTransition

```jsx
const [isPending, startTransition] = useTransition();
```

transition의 pending state를 보이는 stateful 값과 함수 시작을 반환

`startTransition`를 사용하면 제공된 콜백 함수 내에 갱신을 transition으로 마크할 수 있음

```jsx
startTransition(() => {
  setCount(count + 1);
});
```

`isPending`으로는 transition 활성 등의 상황에서 pending state를 보이도록 할 수 있음

```jsx
function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((funcUpdate) => funcUpdate + 1);
    });
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
```

> transition 갱신은 클릭 등 긴급성이 높은 갱신에 건내준다. transition 내의 갱신은 re-suspended 컨텐츠의 fallback를 보이지 않는다. 이에 사용자는 갱신을 렌더링하는 동안, 현재 컨텐츠와 interacting을 지속할 수 있음

### useId

```jsx
const id = useId();
```

useId는 서버-클라이언트 사이를 안정시킬 유일한 ID를 생성하기 위한 hook

기본 예는 id 필요하는 요소에 직접 전달

```jsx
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
}
```

같은 컴포넌트에 여러 ID가 필요하면 같은 ID 사용하고 suffix를 첨가

```jsx
function NameFields() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id + '-firstName'}>First Name</label>
      <div>
        <input id={id + '-firstName'} type="text" />
      </div>
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <div>
        <input id={id + '-lastName'} type="text" />
      </div>
    </div>
  );
}
```

> useId는 토큰을 포함한 문자열을 생성, 토큰의 유일성을 확보함에 도움되지만 CSS 셀렉터, querySelectorAll 같은 API는 지원되지 않는다. useId는 다중 루트 앱 충돌을 방지하기 위해 identifierPrefix를 지원한다. 설정하기 위해서 [hydrateRoot](https://reactjs.org/docs/react-dom-client.html#hydrateroot), [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html) 옵션을 참조

## Library Hooks

라이브러리 제작자가 라이브러리 React 모델에 도움이 되게 제공되고 있습니다. 일반적인 코드에는 사용하면 않습니다.

### useSyncExternalStore

```jsx
const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);
```

선택적 hydration, time slicing 같이 동시 렌더링 기능과 호환성 방법으로, 외부 자료 소스에서 읽어 구독하기 위한 hook입니다.

메서드는 스토어의 값을 반환, 3개의 인수를 받습니다.

- subscribe: 스토어가 변경될 때마다 호출되는 콜백을 등록하기 위한 함수입니다.
- getSnapshot: 스토어의 현재 값을 반환하는 함수입니다.
- getServerSnapshot: 서버 렌더링할 때 사용되는 스냅샷을 반환하는 함수.

가장 기본적인 예로는 단순 스토어 전체를 구독합니다.

```jsx
const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
```

또, 특정 분야를 구독하는 것도 가능합니다.

```jsx
const selectedField = useSyncExternalStore(
  store.subscribe,
  () => store.getSnapshot().selectedField
);
```

서버 렌더링할 때는 서버에 사용하는 스토어 값을 serialize해서, useSyncExternalStore에 제공하는 필요가 있습니다. React는 hydration 사용해서 서버에서 미스매치를 방지합니다.

```jsx
const selectedField = useSyncExternalStore(
  store.subscribe,
  () => store.getSnapshot().selectedField,
  () => INITIAL_SERVER_SNAPSHOT.selectedField
);
```

`getSnapshot` 캐시된 값을 반환할 필요가 있습니다.
getSnapshot가 연속된 복수적으로 될 때, 스토어 간 갱신이 없다면, 반드시 같은 값을 반환할 필요가 없습니다.
다양한 React 버전을 지원하기 위해 `use-sync-external-store/shim`로 공개하고 있는 shim이 제공되고 있습니다.
shim을 이용하고 싶으면 `useSyncExternalStore`를 우선하며, 그렇지 않으면 user-space 구현에 fallback 합니다.
`use-sync-external-store/with-selector`로 공개된 getSnapshot 결과를 메모하기 위한 자동 지원을 준비된 API 버전도 제공됩니다.

### useInsertionEffect

```jsx
useInsertionEffect(didUpdate);
```

시그니처는 useEffect와 같으며, 모든 DOM 변이 전에 동기적으로 동작합니다.
useLayoutEffect로 레이아웃을 읽기 전에, DOM에 스타일을 주입하기 위해 이것을 사용합니다.
hook은 스코프가 한정되어 있기에, hook은 refs에 접근하지 못하며, 갱신을 스케쥴하는 것도 안 됩니다.

## 볼 거리

- https://reactjs.org/
- https://reactjs.org/blog/2022/03/29/react-v18.html
- https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html
- https://github.com/reactwg/react-18/discussions/21
- https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md
- https://reactjs.org/docs/react-api.html#transitions
- https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md
- https://reactjs.org/docs/react-dom-client.html
- https://reactjs.org/docs/react-dom-server.html
- https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
- https://reactjs.org/docs/hooks-reference.html
