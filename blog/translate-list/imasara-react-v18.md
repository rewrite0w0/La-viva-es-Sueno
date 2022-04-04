---
slug: imasara-react-v18
title: 이제와서 알아보는 React v18
authors: rewrite0w0
tags: [react, 번역]
---

# [이제와서 알아보는 React v18](https://zenn.dev/reo777/articles/c0420a2bad2e6b)

React Conf 영상을 보며 사내 10분 공부회에서 공유한 자료입니다.

#### React Conf

- [Streaming Server Rendering with Suspense](https://youtu.be/pj5N-Khihgc)
- [React 18 for app developers](https://www.youtube.com/watch?v=ytudH8je5ko)

## (개인적) React v18의 핵심

- Suspense
- automatic batching
- useDefferedValue hook
- startTransition

글에서는 React18보다 Suspence 이야기가 주가 되겠네요

## Suspense에 의해 무엇이 변하는가

- UX 측면

  - 유저에게 보여주는 화면을 **단계적**으로 화면 게시가능
    - 무거운 처리가 필요한 곳은 완료후 게시

- 코드 측면
  - 화면 요소만 JSX에 적을 수 있다
    - isLoading&&<Loader/> 같은게 필요없어진다
  - Apollo, React Query와 조합하면 fetch on render와 fetch then render를 해소한다

fetch on render 코드

ref: https://ko.reactjs.org/docs/concurrent-mode-suspense.html#approach-1-fetch-on-render-not-using-suspense

```jsx
function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((u) => setUser(u));
  }, []);

  if (user === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <>
      <h1>{user.name}</h1>
      <ProfileTimeline />
    </>
  );
}

function ProfileTimeline() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts().then((p) => setPosts(p));
  }, []);

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
```

## Suspence

- 한 줄 요약: 컴포넌트가 Promise를 던질 수 있어서 UX 초상승

### Server rendering With Suspence

**SSR**

- 무엇을 하는가

  - 데이터 취득
  - HTML 렌더링
  - JS 로딩
  - hydration (추후 설명)

- 장단
  - HTML 빨리 유저에게 보여줄 수 있어서 UX가 좋음
  - JS가 로드되지 않으므로 애플리케이션은 인터렉팅하지 않는다
    - 단순 HTML만 게시되므로
  - 애플리케이션 **전체** 데이터를 읽기까지 **아무것도** HTML이 게시되지 않음
    - fetch everything, before you can show anything이라 한다

---

**CSR**

- 무엇을 하는가

  - 클라이언트에서 화면 렌더링 한다

- 장단
  - 기분좋게 돌아간다
  - JS 번들 크기가 커지면 초기 게시까지 시간이 걸림
  - 무엇을 게시하기 전에 모든 걸 읽을 필요가 있음

=> **SSR, CSR 둘 다, 읽는데 애플리케이션 전체를 멈출 필요가 있었다**

### hydration

- HTML 인터렉티브하기 위한 것

  - 컴포넌트 트리를 조사해서 이벤트 번들러를 부여

- 전체를 한 번에 hydrate 해야한다

  - 애플리케이션 전체 JS를 모두 읽을 필요가 있다 = 시간이 걸리는 일

- hydration 완료하기 전까지는 인터렉티브하지 않은 것을 유저에게 보이는 상태가 된다

  - 클릭해도 아무런 반응 없음

- **애플리케이션 전체** hydration이 완료하기까지 애플리케이션 전체는 인터렉티브하지 않는다

**React18에서는 분할해서 HTML를 보이며, 각각을 부분적으로 hydrate할 수 있다🎉**

=> 이를 실현하는 것이 Streaming HTML

![streaming HTML image](https://storage.googleapis.com/zenn-user-upload/e4b204a04191-20220329.png)

#### Streaming HTML

- 데이터를 얻기까지 fallback 용 HTML를 렌더링해서, 데이터를 얻기가 완료되면 요소를 동적으로 갈아끼운다 => 이로인해서 화면 전체 데이터 취득을 갖을 필요가 없어짐
  - fallback용 HTML = 로딩 스피너 등등
  - 갈아끼울 요소 = 취득에 시간이 걸리는 요소
    - 이하 화면에서는 `<Comments>`

![Streaming HTML example](https://storage.googleapis.com/zenn-user-upload/3fe60606af8f-20220329.png)

**비동기적으로 hydrate하고 있어서, HTML를 빨리 보일 수 있고, 데이터를 얻기가 완료될 때부터 인터렉티브하게 할 수 있다**

#### 구현

- Suspense로 감싸서 나중으로 미루는 처리를 전달
  - 이 뿐임
  - 에러핸들링은 ErrorBoundary를 사용
  - try-catch 같은 느낌
    > 역주: 혹은 Maybe/Either

```jsx
<Suspense fallback={<Spinner />}>
  <Comments />
</Suspense>
```

이 코드는 이렇게 된다.

```jsx
// This is not a Promise. It's a special object from our Suspense integration.
const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
```

> 역주: 공식으로 react18이 출시되었으니 문서 참조 https://reactjs.org/docs/react-api.html#reactsuspense

```jsx
// This component is loaded dynamically
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // Displays <Spinner> until OtherComponent loads
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```

hydration이 완료된 곳부터 인터렉팅 가능

![done hydration and interacting parts](https://storage.googleapis.com/zenn-user-upload/c19a1e40b511-20220329.png)

- 여러 Suspense로 wrap하면 비동기로 트리를 위에서부터 hydrate한다
  ![async hydrate](https://storage.googleapis.com/zenn-user-upload/c8548646bcd4-20220329.png)

- Suspense는 여러 컴포넌트를 wrap 가능
  - 전체가 Suspend 함
- React는 유저의 관심순으로 hydration 한다 => Selective Hydration
  - 절대적으로 트리 상 순서로 hydrate 되는 것은 아님

#### Selective Hydration

- 유저가 클릭한 부분부터 hydration 한다

![click and hydration](https://storage.googleapis.com/zenn-user-upload/228b807c2191-20220329.png)

#### automatic batching

- 핸들러 안에 있는 setState의 실행 후 렌더링을 모아 한 번에 해주는 놈
  - 지금까지는 상태 갱신 함수마다 재 렌더링해줌

#### useDeferredValue

- 겁나 무거운 처리를 명시적으로 뒤로 미루는 hook
  - 필터된 아이템 리스트 같은 놈
- React.memo를 사용하면 엄청 효율적
  - memo되어도 부모 컴포넌트 렌더링될 때는

```jsx
const defferedValue = useDeferredValue({
  /*무거운처리*/
});
```

#### React Server Components

- 컴포넌트를 서버사이드에서 렌더링한다
  - state를 가지지 않는다, 재렌더링 하지 않는다
    - useState, useEffect 같은 것을 사용하지 않는다
- **번들 크기 0**
  - 렌더한 결과의 JSX를 클라이언트에 보낼 뿐 = 흔한 API 통신
- Suspense를 사용가능

#### SSR와 차이점

- SSR은 빠르게 화면을 유저에게 보여주는 것이 주 목적
- RSC는 번들 크기를 감소 지키는 것이 주 목적

## 정리

- React 애플리케이션 UX와 React 개발자 체험에 엄청난 집중을 하고 있다.
  - 영상에서도 UX라 무지하게 말한다

## 참고자료

https://github.com/reactjs/rfcs/pull/188
