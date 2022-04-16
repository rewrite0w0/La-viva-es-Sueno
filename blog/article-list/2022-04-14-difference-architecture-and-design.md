---
slug: difference-architecture-and-design
title: 아키텍처와 디자인
authors: rewrite0w0
tags: [architecture, design, 감상]
---

[글](https://aws.amazon.com/it/solutions/case-studies/sky-case-study/?nc1=h_ls)을 읽다가 문득 **아키텍처와 디자인(설계)라는 말을 종종 듣는데 도대체 차이가 무엇일까?** 궁금했다.

## 아키텍처

![architecture](https://d1.awsstatic.com/industry-images-customer-references/SkyItalia_SystemEngineeringView.c98ea3314d41aad1a13a5c9bea2516f2fdd0f142.png)

> [출처](https://aws.amazon.com/it/solutions/case-studies/sky-case-study/?nc1=h_ls)

> 아키텍처
>
> 『정보·통신』 기능 면에서 본 컴퓨터의 구성 방식. 기억 장치의 주소 방식, 입출력 장치의 채널 구조 따위를 가리킨다.
>
> 출처: [국립국어원 표준국어대사전](https://stdict.korean.go.kr)

## 디자인

![design](https://user-images.githubusercontent.com/6892666/65833569-bb34fc00-e29f-11e9-8516-79cbd9f8f07b.png)

> [출처](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)

> 디자인
>
> 의상, 공업 제품, 건축 따위 실용적인 목적을 가진 조형 작품의 설계나 도안.
>
> 출처: [국립국어원 표준국어대사전](https://stdict.korean.go.kr)

조사해보니, 디자인은 아마 가장 오해하기 쉬운 말인 것 같다.
흔히 UI/UX 구성할 때도 디자인 구성한다하며, 옷을 고를 때도 디자인이 좋다하는 등 용도가 넓기 때문이다.

개발에서 디자인은 [디자인 패턴](https://www.patterns.dev/)혹은 [소프트웨어 디자인 패턴](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4)이 의미 전달이 잘 되는 것 같다.

흥미로운건 [아키텍처 패턴](https://en.wikipedia.org/wiki/Architectural_pattern)이 [소프트웨어 디자인 패턴](https://en.wikipedia.org/wiki/Software_design_pattern)에 포함되어 있다는 것이다.

> 그럼 아키텍처는 디자인 안에 포함되어 있는 것인가?

[위키](https://ko.wikipedia.org/wiki/%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%ED%8C%A8%ED%84%B4)에서는 이런 언급을 한다.

> 아키텍처 패턴은 소프트웨어 디자인 패턴과 비슷하지만 더 넓은 범위에 속한다.

## 아키텍처와 디자인

- 패턴
  - 프로그램 안에서 공통점을 추출하는 것
  - 프로그래밍 패러다임
    - 언어 특유의 것
  - 디자인 패턴
    - 소프트웨어 구축에 의해 반복 발생 문제를 해결
    - 코드에서 공통점에 관련한 것
    - 더 작은 서브시스템 구축하기 위한 스킴 제공
    - 언어에 영향을 받는다
    - 실체와 관계 구조, 동작의 일부를 구체화하는 중간 전략
  - architectural 패턴
    - 소프트웨어 시스템의 기본적 구조 구성
    - 디자인 패턴보다 상위 수준의 공통성
    - 대규모 요소, 전역적 특성 및 메커니즘 큰 그림 전략

> https://stackoverflow.com/questions/4243187/whats-the-difference-between-design-patterns-and-architectural-patterns

---

둘 다 아이디어에 관한 설명이다만, 아키텍처는 `추상적 관점` 디자인은 `아이디어의 구현 관점` 초점을 맞춘다. 디자인은 아키텍처보다 자세하다. 아키텍처는 전체 시스템의 추상적 그림을 그리며, 디자인은 특정 일부의 관련 영역 구현을 그린다.

> https://www.linkedin.com/pulse/architectural-vs-design-patterns-software-engineering-asher-toqeer

---

`아키텍처`는 저수준의 세부사항과는 _분리된_ **고수준**의 무언가를 가리킬 때 사용하며, `디자인`은 **저수준**의 구조 또는 결정사항등을 의미 할 때가 많다. 그러나 아키텍트가 실제로 하는 일을 보면 이런 구분은 무의미하다

새로운 집을 설계하는 아키텍트가 있다 치자.
이 때 아키텍처를 가지고 있는가? 그렇다.
그럼 아키텍처는 무엇인가? 아마 `집의 형태, 외관, 입면도, 공간, 방의 배치 등`이 여기에 포함된다. 하지만 이게 아키텍트가 만든 도면을 살펴보면 무수히 많은 저수준의 세부사항도 확인할 수 있다. `콘센트, 전등 스위치, 전등`이 모두 어디에 위치하는지를 도면에서 알 수 있다. 보일러는 어디에 놓이고, 온수기, 배출 펌프의 크기와 위치는 어떻게 되는지 역시 볼 수 있다. 벽, 지붕 그리고 기초 공사가 어떻게 진행될지도 상세히 확인할 수 있다.

다시 말해, 모든 고수준의 결정사항을 지탱하는 모든 세부사항을 자세하게 확인할 수 있다. 이러한 저수준의 세부사항과 고수준의 결정사항은 집의 전체 설계의 구성요소가 된다.

소프트웨어 설계도 마찬가지다. `저수준의 세부사항과 고수준의 구조는 모두 소프트웨어 전체 설계의 구성요소다`. 이 둘은 단절 없이 이어진 직물과 같으며, 이를 통해 대상 시스템의 구조를 정의한다. **개별로는 존재할 수 없고, 실제 이 둘을 구분 짓는 경계는 뚜렷하지 않다**. 고수준에서 저수준으로 향하는 의사결정의 연속성만 있을 뿐이다.

> [클린 아키텍처](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=202322454)

## 결론

**[`이것이 있으면 그것이 있고, 이것이 생기기 때문에 그것이 생긴다. 이것이 없으면 그것이 없고, 이것이 멸하기 때문에 그것이 멸한다.`](http://encykorea.aks.ac.kr/Contents/Item/E0036708)**

조사를 마친 결과, 김 빠지는 결론일수도 있으나 둘의 구분을 짓는 건 무의미하다는 느낌이 들었고 연기같았다.

디자인 없이 아키텍처가 있을 수 없고, 아키텍처가 없이 디자인이 있을 수 없기 때문이다.

누군가 묻는다면 아키텍처는 고수준, 디자인은 구현 수준을 표현한다 말할 수 있겠지만...
