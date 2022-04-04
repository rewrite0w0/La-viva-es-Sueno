---
slug: react-v18.0
title: React v18.0(번역 진행중)
authors: rewrite0w0
tags: [react, 번역]
---

# [React v18.0](https://reactjs.org/blog/2022/03/29/react-v18.html)

2022/03/29 by [The React Team](https://reactjs.org/community/team.html)

이제 React 18를 npm에서 이용할 수 있습니다!

지난 글에서는 차근차근 [React 18로 업그레이드](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)하는 방법을 소개했습니다.
이 글은 React18에는 무엇이 생겼는데 그리고 어떠한 의미를 가지고 있는지 보려합니다.

React 18은 자동 배치처리 같은 것을 바로 사용할 수 있도록 개선, startTransition 같은 새로운 API, Suspense 지원에 의한 streaming server rendering이 포함되어 있습니다.

React 18의 많은 기능은 새로운 concurrent renderer 상에 구축되어 있고, 강력한 기능이 드디어 풀리게 되는 무대 뒤 변경입니다.
concurrent React는 opt-in 방식으로 concurrent 기능을 사용하고 싶을 때만 사용할 수 있습니다.
하지만 우리는 이것이 애플리케이션 구축 방법에 큰 영향을 준다 생각하고 있습니다.

우리는 몇 년을 투자해, React의 병렬처리 지원을 연구하고 기존의 유저에게 단계적으로 도입하는 것을 특히 철처히 하고 있습니다.
작년 여름, React 18 워킹그룹을 결성하고 커뮤니티 전문가의 피드백을 모아 React 에코시스템 전체를 부드럽게 업그레이드할 수 있도록 했습니다.

더 궁금하시면, React Conf 2021에서는 이 비전을 공유했습니다.

- [기조연설](https://www.youtube.com/watch?v=FZ0cG47msEk&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa)에서 "개발자가 우수한 사용자 경험을 간단을 구축하도록 한다"는 당사의 미션에 React 18가 어떻게 합치되는지 설명합니다.
- [Shruti Kapoor](https://twitter.com/shrutikapoor08) [React 18의 신기능 사용방법 설명서](https://www.youtube.com/watch?v=ytudH8je5ko&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=2)
- [Shaundai Person](https://twitter.com/shaundai) [Suspense를 사용한 streaming server rendering 개요](https://www.youtube.com/watch?v=pj5N-Khihgc&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=3)

이하는 Concurrent Rendering를 시작으로 출시로 인해 기대되는 전체상을 소개합니다.

React Native 유저를 위한 주의사항
React 18은 New React Native Architecture를 사용한 React Native에 이식될 예정입니다. 상세는 React Conf [기조연설](https://www.youtube.com/watch?v=FZ0cG47msEk&t=1530s)을 참조해주세요.

---

## Concurrent React가 뭔가요?

React 18의 핵심적인 추가기능은 conccurrent입니다. 애플리케이션 개발자 대부분에게 해당된다 생각하지만 라이브러리 관리자에게는 조금 더 복잡한 이야기가 될 수도 있습니다.

Concurrency는 그 자체로 구동되는 기능이 아닙니다.
React가 여러 버전의 UI를 동시에 준비가능캐 하는 무대 뒤에 구현된 사항이라 생각하고, 이로 인해 unlock되는 기능이 있기에 가치가 생깁니다.
React는 우선순위 큐, 다중 버퍼링 같이 고도의 기술을 내부구현에 사용하고 있습니다. 하지만 이 컨셉은 우리가 공개하고 있는 그 어떤 API에서도 확인할 수 없습니다.

API를 설계할 때, 구현의 상세사항을 개발자에게 숨기려했습니다. React 개발자는 사용자 경험같은 부분에 집중해, React는 경험을 어떻게 제공할까를 처리합니다.
그러니 React 개발자가 후드 안에 어떻게 concurrency 처리를 하는지 알 수 없었습니다.

그러나 Concurrent React는 전형적이며 상세한 구현보다 중요하고, React의 코어 렌더링 모델에 기반 업데이트라 말할 수도 있습니다.
즉, concurrency 처리가 어떻게 돌아가는지 아는 것이 엄청나게 중요하지는 않지만, 고레벨에서 그게 뭔데 정도는 알 가치가 있을 수 있습니다.

Concurrent React 중요한 특징은 렌더링 중단이 가능하다는 것입니다.
React 18으로 업그레이드하려 했을 당시는 concurrent 기능을 추가하기 전에, 갱신은 이전 버전 React처럼 중단되지 않는 트랜잭션 렌더링하려 했습니다. 동기렌더링에는 갱신 렌더링이 시작되면 사용자가 결과를 화면상에 확보하기까지 무엇도 중단할 수 없었습니다.

concurrent 렌더링이 늘 그런건 아니지만, React는 갱신 렌더링을 시작하고 중간에 일시 중시한 다음, 다시 계속할 수 있습니다. 진행중인 렌더링을 포기할 수도 있고요.
React는 렌더링이 중단된 경우에도 UI가 일관적으로 게시되는 것을 보증합니다. 그렇기 위해 트리 전체가 평가된 후, 마지막까지 DOM 변이 실행을 기다리고 있습니다.
이 기능으로 React는 메인 스레드를 블록하지 않고, 백그라운드에서 새로운 화면을 준비할 수 있습니다.
즉, 대규모 렌더링을 해야할 대도, UI는 유저 입력에 즉각 반응할 수 있으며, 유동적인 사용자 경험을 실현할 수 있습니다.

또 다른 예는 재이용가능한 상태입니다.
Concurrent React은 화면에서 UI 세션을 제거해서, 이전 상태를 재이용하면서 나중에 되돌릴 수 있습니다.

예를 들면, 유저가 화면에서 탭에서 이탈했을 때, React는 이전 화면을 같은 상태로 돌렸을 것입니다.
이번 마이너 변경으로 이 패턴을 구현한 `<Offscreen>` 컴포넌트 추가할 예정입니다. Offscreen를 사용해 새로운 UI를 백그라운드에서 준비하고 사용자가 그것을 보기전에 준비를 마칠 수 있습니다.

Concurrent 렌더링은 React의 강력한 도구로 Suspence, 트랜지션, streaming server rendering 같은 대부분 기능은 이걸 이용하기 위해 구축되었습니다.
React 18은 이 새로운 기반 위에 구축하려는 목표의 시작에 불과합니다.

## Concurrent 기능의 단계적 도입

기술적으로 Concurrrent 렌더링은 브레이킹 체인지입니다. concurrrent 렌더링은 중단가능하므로 이걸 사용하면, 컴포넌트의 동작이 약간 변합니다.

우리의 테스트에서는 수 천의 컴포넌트를 React 18로 업그레이드 했습니다. 그 결과 거의 모든 컴포넌트가 딱히 변경없이 concurrent 렌더링을 "잘" 동작한다는 걸 알게되었습니다. 하지만 그 중에는 추가 작업을 해야하는 경우도 있었습니다. 크지 않은 변경입니다만, 그리고 본인의 페이스에 맞게 변경할 수있습니다.
React 18의 새로운 렌더링 동작은 **애플리케이션 신기능을 사용하는 부분에서만 동작**합니다.

전체적인 업그레이드 전략은 기존 코드를 건들지 않고, 애플리케이션을 React 18로 동작하는 것입니다.
그래서 자신의 페이스로 점점 concurrent 기능을 추가할 수 있습니다.
`<StrictMode>`를 사용하면 개발중에 concurrent 관련 화면에 버그를 보이게할 수 있습니다. Strict Mode는 실제 동작과는 다르지만, 개발할 때는 경고 및 이중 호출 기능을 기록합니다. 모든 것을 잡아낼 수 없지만 일반적인 실수를 방지하는데 효과적입니다.
