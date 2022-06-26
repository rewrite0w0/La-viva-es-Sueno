---
slug: 2022-06-26-javascript-no-kisou-wo-tobashirata
title: JavaScript의 기본이 안 되어있는 상태에서 React, Next.js를 사용하면 걸릴 에러 3선
authors: rewrite0w0
tags: [번역, JavaScript, react, next.js]
---

> [글](https://qiita.com/sugachan/items/794e2563995d6a061117)

## 대상하는 독자

- JavaScript를 배우지 않고, React, Next.js를 사용하는 사람
- JavaScript를 사용하지는 않았지만 React, Next.js 같은 JS 프레임워크 라이브러리를 실무로 사용해야하는 사람
- 지금 React, Next.js로 일하고 있지만 갈피를 못잡아 곤란한 사람

## 글의 읽는 이점

- 마음 깊이 **"쌩 JS를 배워야지;;"** 깨닫는다
- React, Next.js로 일할 때 만나는 벽을 미리 알 수 있다
- 왜 React로 의도대로 잘 구현하지 못하는가 납득이 간다

## 결론

- 라이브러리(React), 프레임워크(Next.js)로 JavaScript를 시작하는게 아니라 먼저, **최소한의 JavaScript 문법이나 간단한 구현을 할 것**

## 쌩 JavaScript를 먼저 배워야할 이유

1. JavaScript 기본이 없으면 에러나 의도한 동작이 안될 때 **그 원인을 찾는데 막대한 시간**을 소비한다.

2. 다른 라이브러리나 프레임워크를 다루지 못한다(프론트엔드 변화 속도는 빠르기에 React가 아닌 것을 다룰 가능성이 높다. )

3. 2랑 겹칠 수도 있는데, React, Vue, Angular 같은 라이브러리 프레임워크 기반이므로, **배우는 효율이 높음**

JavaScript 지식 부족으로 부딪히는 벽은 여러 개 있습니다만, 자신 스스로 초보로써 부딪힌 벽을 3개 정도로 좁혀 소개합니다.

### 케이스1: map 함수를 배워서 신날 즈음에 map를 쓰다가 마주치기 쉬운 것

JavaScript 일은 map을 그냥 쓰면 되는거아냐? 자만하고 있을 때 쓰던대로 map를 쓰면....?

에...러? (울먹)

```js
TypeError: object.map is not a function
```

아ㅏㅏㅏㅏㅏㅏ, map이 안 돼?

냉정히 생각해보면, 에러 내용대로, 객체에는 map를 사용할 수 없다.

이런 말이지요.

공식에도 적혀있고요.

map함수는, **배열**에만 사용하는 함수입니다.

누군가 객체에 사용할 수 있다 말한 적 없다. 이 에러를 처음 본 나에게 따듯하게 말해주고 싶습니다.

하기할 내용을 노이로제가 될 정도로 귀에 박아두고 싶습니다.(뻥입니다.)

map 함수는 배열에만 사용되는 함수, map 함수는 배열에만 사용하는 함수, map 함수는 배열에만 사용되는 함수, map 함수는...

[공식](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

그리고 이번처럼 에러 내용을 명확히 볼 수 있는 것에서 막히지 않습니다.

하지만 TypeScript에서 타입 지정하거나, 다른 케이스의 경우에는 솔직히 객체에도 사용하지 못해, 이런 에러를 보지 못할 수도 있습니다.

이렇게 되면, 점점 울먹이면서 검색 지옥 코스입니다...

하지만 단순하게 **객체에는 map 함수는 사용할 수 없다, 배열에만 사용할 수 있다**를 기억해두면 1분도 안되서 해결할 수 있습니다.

### 케이스2: useEffect 안에 정의한 값이 왜인지 사용할 때 에러를 뿜는다.

useEffect를 사용해 JavaScript로 얻은 값으로 분기 처리를 할 때가 있습니다. (예를 들면 리다이렉트)

값이 들어오면 값 처리를 한다.

이하의 코드처럼 URL를 보고 리다이렉트 처를 바꾸고 싶은 경우를 전제로.

```js
// next/router Next.js hooks, 브라우저 URL 값을 이것저것 얻을 수 있다.
const test1 = router.pathname.indexOf('login');
const test2 = router.pathname.indexOf('redirect');

useEffect(() => {
  if (test1 && test2) {
    // if문 조건이 true일 때, 무엇인가 하는 함수
  } else {
    // 그게 아니라면, 무엇인가 하는 함수
  }
}, [test1, test2]);
```

편리한 React의 hooks, Next의 useRouter를 사용해서 뭔가하면...

어...어랏!?

에ㅔㅔㅔㅔㅔㅔㅔㅔ러? 뭐가 문젠ㄴㄴㄴㄴㄴㄴㄴ데!?

에러 내용은 애초에 test1, test2 값이 존재하지 않는다.

그 이유는 2개.

- useRouter 얻는 값은 처음에는 undefined (Next.js)
- 위의 구현은 값이 없는 경우에도 동작하므로 (JS)

그러므로

```js diff
- const isRouter = router.pathname; //router.isReadyでrouterの準備を見た方がスッキリと記述できるため、修正
const test1 = router.pathname.indexOf("login");
const test2 = router.pathname.indexOf("redirect");

useEffect(()=> {
-    if(isRouter) { // router.isReady에서 router가 준비될 때를 명시할 수 있도록 한다
+    if(router.isReady) { // 여기가 true라면 true가 될 때까지 처리를 무시
      if(test1 && test2) {
        // if문 조건이 true일 때, 무엇인가 하는 함수
      }
      else {
        // 그게 아니라면, 무엇인가 하는 함수
      }
    }
  }
},[test1,test2])
```

isRouter 안에 if문을 넣음으로 준비가 된 상태에서 올바르게 조건 분기한 처리를 동작합니다.

이 부분이 **JavaScript 관한 지식이 전무하면 점점 React, Next.js 에러를 검색하겠지만, [결국 JavaScript 문제](https://qiita.com/sugachan/items/955f097c7a29e05814bc)이므로 점점 해결하기 어려워집니다.**

역시 JavaScript의 기.본, 중.요.

그리고 이번 케이스는 if 분기지만 JS에는 [삼항연산자](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)로 코드를 깔끔히 쓰는 방법이 있으니 검색해보시길 바랍니다. (이미 아시는 분이 많이 계시겠지만)

### 케이스3: API으로 얻은 값을 자신만만하게 map 돌리면 또 거시기한 것

```js diff
const [posts, setPosts] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
-  }, [posts]); // 여기는 res.data에 변화가 있을 경우 무한 렌더링 될 가능성이 있다
+  }, []); // 이렇게하면 초기 렌더링 값만 작동
  return (
    <div className="App">
      {posts.map((post) => { // 여기서 경고같은 걸 받는다.
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
```

객체에는 map 사용하지 못한다 배웠는데, 배열인데도 map을 사용할 수 없잖아?

으ㅡㅡㅡㅡㅡㅡ!!

이런 패턴에 대해서는 기본적으로 JavaScript 지식입니다.

이 패턴은 API 사용하고 있다, 즉 비동기처리를 한 결과 값을 얻는다입니다.

그러므로 초기값. 즉, 비동기처리를 완료하기 전 초기값은 **""**.

`""`는 빈 문자열입니다.

문자열에는 map를 사용할 수 있나?

당연히 No입니다.

**map은 배열에만 사용가능**합니다.

그러므로 트라우마가 걸릴 정도로 귀에 때려박아야 합니다.

이 케이스는 초기값이 변화하지 않을 경우 조건분기로 map 처리를 사용하지 않도록 하는 것이 좋을 것이라 생각합니다.

간단하게 `[]`을 두면 에러를 보지 않을 수 있습니다.

```js diff
const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
-  }, [posts]); // 여기는 res.data에 변화가 있을 경우 무한 렌더링 될 가능성이 있다
+  }, []); // 이렇게하면 초기 렌더링 값만 작동
  return (
    <div className="App">
      {posts && posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
```

API는 약간 이미지 상 설명이지만 여기 [코드](https://codesandbox.io/embed/flamboyant-wiles-lzecls?fontsize=14&hidenavigation=1&theme=dark)를 같은 보면 좋을 것 같습니다.

평범하게 **쌩 JavaScript 지식의 부족이 이런 에러를 만나기 합니다.**

- React도 몰라
- JS도 몰라

이런 상태가 되면 2배, 아니 그 이상으로 괴롭습니다.

## 상기하면, Next.js 좋아!, React가 시대다! 생각하기 전에 순수한 JavaScript의 기반을 배우는 것이 중요

좀 멀리 돌아왔지만, 어떠한 라이브러리/프레임워크도 그 언어가 JavaScript라면 쌩 JavaScript를 배울 필요가 있습니다.

**기반공사가 제대로 안 되있으면 무너질 위험이 있습니다.**

또 어차피 할 공부라면 착실히 밑바닥부터 단단히 긴 호흡으로 공부하는 것이 효율 좋은 방법이라 생각하고 있습니다.

시간은 유효하니까요.

Dear Me (친애하는 나에게)

## 감상

이 저자의 말하는 스타일이 주저리 주저리 말하는 스타일이라 주제에서 이상하게 벗어나는 것 아닌가 싶은데 요는 기반을 튼튼히 하자는 것 같아 번역...
