---
slug: safe-react-hooks-policy
title: 보수하기 쉬운 React Hooks 코드 방침
authors: rewrite0w0
tags: [react, react hooks, maintenance, 번역]
---

> [글](https://zenn.dev/haniwa_www/articles/8ebacbd8e24321)

## 전제

이 글은 보수하기 쉬운 React Hooks 코드 방침에 대한 글임

방침은 tips에 가까운 것부터 원칙까지 잡다하게 있음

보수성 낮은 코드를 반면교사로 삼았고, 개인적 경험 기반임(생각날 때마다 추가할 수 있습니다.)

유념 부탁드립니다.

## 해소하고 싶은 것

- **재현 곤란한 버그/에러 발생**
- **쉽게 무한 루프 발생 제어**
- **버그/에러 지점을 특정하는 수단**
- **분기 많은 코드 리팩토링에는 수고가 든다**

## 해소하는 수법

- **`useEffect`는 1페이지 1개**
- **`useEffect`에 deps 자동 조건부 제거 주석을 남긴다**
- **`state`는 원형으로 한다**
- **`props`에 플러그가 있다면 컴포넌트를 나눈다**

### `useEffect`는 1페이지 1개

**나쁜 예: 유저 이벤트 처리**

```jsx
const [foo, setFoo] = useState('foo');

useEffect(() => {
  setFoo('bar');
});

useEffect(() => {
  setFoo('baz');
});
```

간략화해서 알기 어려울 수 있지만, 실제에는 여러 `useEffect`가 공통으로 하는 `deps`가 있어, 처리가 동시 발화하는 경우가 발생했다. 그래서 `useEffect` 내에 비동기처리가 있고, 처리 타이밍에 의해 순서를 정했다
결국 어떤 `useEffect`가 최종적으로 state를 갱신하는가 알 수 없다
**재현 곤란한 버그/에러 발생**이 일어났다

**좋은 예: 유저 이벤트 처리**

```jsx
const [foo, setFoo] = useState('foo');

const onClickBar = () => setFoo('bar');

const onClickBaz = () => setFoo('baz');
```

`useEffect`를 제거하고, 여러 처리가 동시에 발화되지 않도록 했다.

후술한 Web 애플리케이션 대부분의 경우에 `useEffect`가 필요없는 경우가 대부분이다.
`useEffect`를 1페이지에 1개하는 것이 현실적이라 보인다

브라우저에서 발생하는 이벤트는 다음과 같이 나뉜다

- 페이지 트랜지션 이벤트
  초기 렌더, 패스 트랜지션 등

- 유저 조작 이벤트
  클릭, 탭 등

- 유저 조작을 제외한 `EventListner`계열 이벤트
  네트워크 접속, 중단 이벤트 등

- 서버에서 오는 이벤트
  Websocket, firebase 리얼타임 업데이트 등

이 중 `useEffect`가 필요하지 않은 것은 유저 조작 이벤트 뿐.

많은 애플리케이션에서 페이지 트랜지션 이벤트, 유저 조작 이벤트 이외에는 잘 사용않는다(경험측).

사용하려해도 글로벌에서 이용하는 경우(예시: 네트워크 접속상태 감시) 혹은 1개의 컴포넌트에 관한 경우(예시: 통지유무게시)였다.

이래서 실제로 `useEffect`를 필요하는 것은 페이지 트랜지션 이벤트가 대부분이다. 그러니 1페이지에 1개를 쓰자

### `useEffect`에 deps 자동보완 제거 주석을 남긴다

**나쁜 예: 로드 함수**

```jsx
const [isLoading, setIsLoading] = useState < boolean > false;
const [res, setRes] = useState();

const load = useCallback(async () => {
  try {
    setIsLoading(true);
    const res = await FooApi();
    setRes(res);
  } finally {
    setIsLoading(false);
  }
}, [isLoading]);

useEffect(() => {
  load();
}, [load]);
```

`useEffect` 사용방법으로 렌더링할 때 로드 함수 발화가 있다. 이 경우의 대부분은 deps가 필요없다.
그러나 deps 조건부 기능쓰는 경우 **쉽게 무한 루프 발생**. 이걸 피하고 싶다

**좋은 예: 로드 함수**

```jsx
const [isLoading, setIsLoading] = useState < boolean > false;
const [res, setRes] = useState();

const load = useCallback(async () => {
  try {
    setIsLoading(true);
    const res = await FooApi();
    setRes(res);
  } finally {
    setIsLoading(false);
  }
}, [isLoading]);

useEffect(() => {
  load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
```

`// eslint-disable-next-line react-hooks/exhaustive-deps`를 deps에 적용함으로 deps의 자동 조건부, 무한 루프를 예방한다.

### `state`는 원형으로 한다

**나쁜 예: 객체 `state` 갱신**

```tsx
const [fooObj, setFooObj] = useState<{
	name: string,
	familyName: string,
	firstName: string,
}>({
	name: "",
	familyName: "",
	firstName: "",
});

const onUpdateFamilyName = useCallback((newFamilyName: string) => {
	setFooObj(obj => {
		...obj,
		name: newFamilyName + obj.firstName,
		familyName: newFamilyName,
	});
}, []);

const onUpdateFirstName = useCallback((newFirstName: string) => {
	setFooObj(obj => {
		...obj,
		name: obj.familyName + newFirstName,
		firstName: newFirstName,
	});
}, []);
```

간단한 예를 적다보니 예시에는 큰 데미지는 없다

그러나 실제 `fooObj`는 큰 객체인 경우가 많다.

API request, response 객체가 그대로 1개의 `state`에
몰아있는 경우가 많기 때문.

큰 객체를 `state`로 관리하면, 1개의 필드마다 `setState`를 늘리자.

버그가 발생한 `state` 조사는 갱신이 왕왕있는 부분을 조사한다.

이런 조사처를 필드 수만큼 늘린다

그리고 `setState`가 다른 컴포터는에 전달되다면 조사 수단을 더 늘린다

결과, **버그 발생 지점 특정**이 쉬워진다.

**좋은 예: 로드 함수**

```tsx
const [name, setName] = useState<string>('');
const [familyName, setFamilyName] = useState('');
const [firstName, setFirstName] = useState('');

const onUpdateFamilyName = useCallback((newFamilyName: string) => {
  setName(newFamilyName + firstName);
  setFamilyName(newFamilyName);
}, []);

const onUpdateFirstName = useCallback((newFirstName: string) => {
  setName(familyName + newFirstName);
  setFirstName(newFirstName);
}, []);
```

버그가 발생한 `state` 조사는 그 `setState`를 따라가면 될 뿐이다.

큰 객체를 다루기보다 조사, 코드 리팩토링 수고를 절감할 수 있다.

### `props`에 플러그가 있다면 컴포넌트를 나눈다

**나쁜 예: 작성/갱신이 같은 컴포넌트에 있다**

```tsx
const DialogContents: React.FC<{isAdd: boolean}> = ({
	isAdd: boolean,
}) => {
	// ...
	const onSubmit = useCallback(async () => {
		if (isAdd) {
			await FooRegisterApi();
			return;
		}
		await FooUpdateApi();
	}, []);

	return (
		<>
			<form onSubmit={onSubmit}>
				<label>Name</label>
				<input value={name} onChange=>{onChangeName}/>
				<label>ID</label>
				<input disabled={!isAdd} value={id} onChange=>{onChangeId}/>
				{isAdd &&
					<label>Email</label>
					<input value={email} onChange=>{onChangeEmail}/>
					<label>PhoneNumber</label>
					<input value={phoneNumber} onChange=>{onChangePhoneNumber}/>
				}
			</form>
		</>
	)
}
```

컴포넌트에 여러 책임이 있는 경우, 컴포넌트 도처에 쓸데없이 분기가 발생한다.

자주 보는 패턴은 작성과 갱신이 동시에 컴포넌트에서 일어나는 패턴

작성 / 갱신을 플러그로 분기해서 알맞은 API, 렌더링 항목을 제어한다.

이러면 **분기가 많은 코드가 되서 읽기에 수고가 많이 든다**

**좋은 예: 작성/갱신 별 컴포넌트**

```tsx
const RegisterDialogContents: React.FC = () => {
	//...
	const onSubmit = useCallback(async () => {
		await FooRegisterApi();
	}, []);

	return (
		<>
			<form onSubmit={onSubmit}>
				<label>Name</label>
				<input value={name} onChange=>{onChangeName}/>
				<label>ID</label>
				<input value={id} onChange=>{onChangeId}/>
				<label>Email</label>
				<input value={email} onChange=>{onChangeEmail}/>
				<label>PhoneNumber</label>
				<input value={phoneNumber} onChange=>{onChangePhoneNumber}/>
			</form>
		</>
	)
}

const UpdateDialogContents: React.FC = () => {
	//...
	const onSubmit = useCallback(async () => {
		await FooUpdateApi();
	}, []);

	return (
		<>
			<form onSubmit={onSubmit}>
				<label>Name</label>
				<input value={name} onChange=>{onChangeName}/>
				<label>ID</label>
				<input disabled={true} value={id} onChange=>{onChangeId}/>
			</form>
		</>
	)
}
```

작성과 갱신은 구별해서 컴포넌트로 만들자.

도처의 분기를 제거해서 코드 읽기가 편해졌다

props에 `isFoo` 같은 플러그가 있다면, 컴포넌트 분리 검토를 권한다.
