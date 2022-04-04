---
slug: React-no-unit-test-2021
title: React 유닛테스트 2021
authors: rewrite0w0
tags: [react, test, unit test, 번역]
---

# [React 유닛테스트 2021](https://zenn.dev/erukiti/articles/unit-testing-react-2021)

React 유닛테스트할 때, 좋은 방법은 언제나 고민되는 것이지만 우선 2021년 2월 시점에는 이게 제일 좋다 느낀 걸 정리했습니다.

우선 테스트런너로는 `jest`입니다. 여기에 고민할 요소는 없습니다.

그럼 React 테스트를 어떻게 하는가? 입니다.

1. 공식 `react-dom/test-utils` 사용
2. 공식 `react-test-renderer` 사용
3. `@testing-library/react` 사용

선택지는 이 3종류가 유명합니다.

공식이라는 말은 매력적이지만, 실은 공식 문서에서 "보일러 플레이트를 감소하기 위해, 엔드유저가 사용하는 것과 같은 컴포넌트를 사용해 테스트를 쓰도록 설계되어잇습니다. React Testing Library 이용하세요"라고 `@testing-library/react`를 권하고 있습니다.

`react-test-renderer` 자료는 좀 있지만, `@testing-library/react`로 바꿔쓸 수 있습니다.(renamed?)

똑같이 React Hooks 테스트도 공식 문서 설명은 무지하게 번거로우니 `@testing-library/react`가 제일입니다.

그러니 현 시점에서 `@testing-library/react` 일택이라 생각합니다. 우선 `@testing-librabry` 패밀리를 사용하면 큰 문제 없을 것입니다.

## `@testing-library/react`를 사용하자

```bash
# npm
npm i -D @testing-library/react

# yarn
yarn add -D @testing-library/react
```

`@testing-library/react` 기본은 `render` 함수입니다.

```js
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Hoge } from '.';

test('Hoge', () => {
  const renderResult = render(<Hoge />);
  // expect...
});
```

`render`의 반환을 사용해서 `expect`를 적어봅시다.
반환은 `RenderResult` 타입입니다.
상세는 [여기](https://testing-library.com/docs/react-testing-library/api/#render-result)를 참조해주세요.

## `@testing-library/jest-dom` 확장 Matcher

`@testing-library/jest-dom`로 커스텀 Matcher도 편리합니다.

```bash
# npm
npm i -D @testing-library/jest-dom @types/testing-library__jest-dom

# yarn
yarn add -D @testing-library/jest-dom @types/testing-library__jest-dom
```

상세는 [여길](https://github.com/testing-library/jest-dom) 참조해주세요.

## snapshot test

```js
test('snapshot testing', () => {
  const { asFragment } = render(<Hoge />);
  expect(asFragment()).toMatchSnapshot();
});
```

DOM 조작 snapshot를 찍어서, 변화하면 에러를 뿜는 스타일의 테스트합니다.
변화가 타당하다 판단하면 jest -u로 snapshot 업데이트 합니다.

## 문자열 matching

```js
test('matching text', () => {
  const { container } = render(<Hoge />);
  expect(container.innerHTML).toMatch('hoge');
});
```

반영되는 HTML에 hoge 문자열이 포함하면 "OK"가 되는 테스트입니다. `toMatch` matcher은 텍스트, 정규표현을 이용할 수 있습니다. HTML에 문자열 매칭을 하는거라 거친 테스트이기는 하지만요.

`@testing-library/jest-dom` 확장 matcher를 사용하고 있다면 `.toHaveTextContent`을 쓰면 그째로 텍스트를 테스트를 할 수 있습니다.

```js
expect(container).toHaveTextContent('hoge');
```

## 클래스명

```js
test('matching text', () => {
  const { container } = render(<Hoge />);
  expect(contianer.getElementByClassName('fuga').length).toEqual(1);
});
```

클래스명 `fuga`를 갖는 요소가 1개 있으면 OK인 테스트입니다.
1개가 아니라면 `.toBeGreaterThan(0)` 같이 다른 matcher를 사용합시다.

`jest-dom` 확장 matcher를 사용하면, `toHaveClass` matcher를 사용할 수도 있습니다.

```js
test('Hoge', () => {
  const { getByText } = render(<Hoge />);
  expect(getByText('hoge')).toHaveClass('fuga');
});
```

`getByText('hoge')`로 `hoge` 텍스트를 갖는 요소를 얻어, 클래스명 `fuga`가 포함되어있는지 테스트합니다.
더 정밀한 테스트를 적는다면 참고하는 것이 좋다 생각합니다.

## 이벤트 핸들러 테스트

`Button` 컴포넌트가 있어, `onClick` 핸들러를 테스트합니다.

```js
import { render, fireEvent } from '@testing-library/react';

test('onClick', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={() => handleClick()}>hoge</Button>
  );
  fireEvent.click(getByText('hoge'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

우선 `jest.fn()`으로 mock 함수를 생성, onClick의 인수로 전달합니다.

다음 `@testing-library`의 `fireEvent` 객체를 사용해 이벤트를 발화합시다. 클릭 이벤트를 발생하는 경우라면 `fireEvent.click(getByText('hoge'))`입니다.

그 다음 `expect(handleClick).toHaveBeenCalledTimes(1)` 이렇게 mock 함수를 1회 호출되었는가 확인합니다.

`<input type="text" onChange={...} />`를 테스트하면 제 2 인수에 이벤트를 지정할 필요가 있습니다.

문자 입력 컴포넌트를 작성할 때는, 다루기 어려운 이벤르를 직접 다루기보다, `(text: string) => void` 이렇게 직접 문자열을 넘기는 핸들러를 많이 적게될 것입니다.

```js
fireEvent.input(element, { target: { value: 'hoge' } });
expect(handleChange0).toHaveBeenCalledTimes(1);
expect(handleChange0.mock.calls[0][0]).toEqual('hoge');
```

mock 함수 호출 횟수가 1번으로, 결과적으로 핸들러가 `hoge` 텍스트를 받았는가 테스트 가능합니다.

## Next.js 유닛테스트

Next.js는 이제 당연한 선택입니다.

Next.js의 `next/link`, `next/router`를 사용하고 있다면 mock이 필요합니다.

```js
jest.mock('next/link', () => {
  const Link = ({
    href,
    children,
  }: {
    href: string
    children: string
  }): JSX.Element => {
    return <a href={href}>{children}</a>
  }
  return Link
})
```

여기서는 일단 `<a>`로 했지만 `<hoge>` 같은거라도 상관없습니다. 실제 HTML를 움직이는게 아니기 때문입니다.

테스트 목표는 `<Link>`가 제대로 `<a>`에 전개되는가 확인하면 됩니다.

```js
expect(container.innerHTML).toMatch('<a href="http://example.com">hoge</a>');
```

`<Link>` 요소가 단순하지 않다면, `'<a href="http://example.com">'`만 매치하면 됩니다.
