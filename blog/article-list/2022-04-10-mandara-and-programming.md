---
slug: mandara-and-programming
title: 만다라로 프로그래밍
authors: rewrite0w0
tags: [mindset, agile, 감상]
---

## 결론

만다라를 프로그래밍에 응용해보자

## 동기

애자일, 스크럼에 대해 조사하다

> 어? 이거 만다라 계획표를 활용할 수 있을 것 같은데?

느껴서 작성

## 사전 지식

### 만다라 계획표

만다라 계획표란 오타니 선수가 세운 계획표가 알려지면서 유명해졌다.

<details>
<summary>만다라 계획표 이미지</summary>

![otani mandara original](https://fukuoka-jibi.com/wp-content/uploads/2021/05/IMG_7074.jpg)

![otani mandara kr](http://img.sbs.co.kr/newimg/news/20170102/201010880_1280.jpg)

</details>

중앙에 큰 목표를 적고, 주변에는 중간 목표와 세부 목표를 적는 계획표이다.

### 계획

> [요건정의 ~ 시스템 설계까지 할 수 있는 인재가 되는 글](/blog/you-can-define-and-design-project) 참조

### 애자일

> 애자일 소프트웨어 개발(Agile software development) 혹은 애자일 개발 프로세스는 소프트웨어 엔지니어링에 대한 개념적인 얼개로, 프로젝트의 생명주기동안 반복적인 개발을 촉진한다. 최근에는 애자일 게임 보급 등의 여파로 소프트웨어 엔지니어링 뿐 아니라 다양한 전문 분야에서 실용주의적 사고를 가진 사람들이 애자일 방법론을 적용하려는 시도를 하고 있다.
>
> [한국어 위키백과](https://ko.wikipedia.org/wiki/%EC%95%A0%EC%9E%90%EC%9D%BC_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C)

> ...전략, 애자일은 정확히 말하자면 소프트웨어 개발에 필요한 작업을 알려주는 일련의 규정이 아닙니다. 그보다는 협업과 워크플로우를 바라보는 하나의 관점이며, 우리가 무엇을 어떻게 만들지에 관한 선택을 안내하는 가치 체계입니다. 구체적으로 말하자면, 애자일 소프트웨어 개발 방법론의 핵심은 작동하는 소프트웨어의 작은 구성 요소를 신속하게 제공하여 고객의 만족도를 개선하는 것입니다. 후략...
>
> [Redhat 애자일 방법론이란?](https://www.redhat.com/ko/devops/what-is-agile-methodology)

### 스크럼

> Scrum이 아마도 오늘날 사용 중인 가장 대중적인 애자일 프레임워크이겠지만, 모든 애자일이 Scrum인 것은 아니며 모든 Scrum이 애자일인 것도 아닙니다. Scrum은 스프린트라는 일정 기간 내에 완료할 수 있는 작업으로 업무를 분할하는 5 ~ 9명의 소규모의 복합 기능(cross-functional) 팀을 위해 설계된 작업 관리 프레임워크입니다. Scrum 팀은 여러 명의 팀원과 제품 소유자인 Scrum 마스터로 구성됩니다. 일반적으로 Scrum은 대규모 프로젝트를 2 ~ 4주 스프린트로 분할할 수 있을 때 구현됩니다. Scrum은 "후향적 평가"라는 방식을 통한 피드백 루프에 집중합니다. "점검과 적응"을 Scrum의 비공식적 모토로 볼 수도 있을 것입니다.
>
> [Redhat 애자일 방법론이란?](https://www.redhat.com/ko/devops/what-is-agile-methodology)

> 스크럼은 사람과 팀, 조직이 복잡한 문제에 대해 적응할 수 있는 해법 Adaptive solutions 을 활용하여 가치를 창출하도록 도와주는 경량 Lightweight 프레임워크이다. 간단히 말해서 스크럼은 스크럼 마스터가 다음과 같은 환경을 조성하는 것이다:
>
> 1. 프로덕트 오너는 복잡한 문제를 해결하기 위한 업무를 우선순위에 따라 프로덕트 백로그에
>    정렬한다.
> 2. 스크럼 팀은 선택한 업무를 스프린트 동안 가치의 증가분 Increment of value (\*증가분은 스크럼
>    팀이 스프린트 동안 완료한 업무로서 기존 프로덕트에 새로 더해지는 프로덕트의 새로운 부분을 의미한다. -
>    번역자)으로 만들어 낸다.
> 3. 스크럼 팀과 이해관계자들은 결과물을 점검하고 다음 스프린트를 위하여 조정을 한다.
> 4. 반복한다
>
> [스크럼가이드 한국어판](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Korean.pdf)

#### 스크럼 팀

> 스크럼 조직의 기본이 되는 단위인 스크럼 팀은 적은 수의 인원으로 구성된다. 스크럼 팀은 한 명의 스크럼 마스터, 한 명의 프로덕트 오너, 그리고 개발자들로 구성된다.
>
> [스크럼가이드 한국어판](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Korean.pdf)

#### 스프린트

> 스프린트는 꾸준함을 갖기 위해 한달 또는 그보다 짧은 기간으로 고정된 길이의 이벤트이다. 새로운 스프린트는 직전의 스프린트가 끝나는 즉시 시작한다.
>
> 스프린트 동안 스프린트 계획, 데일리 스크럼, 스프린트 리뷰, 스프린트 회고를 포함하여 프로덕트 목표를 달성하기 위해 필요한 모든 업무를 수행한다.
>
> 스프린트 기간 동안에는:
>
> - 스프린트 목표 달성을 저해하는 변경을 해서는 안된다;
> - 품질을 떨어뜨려서는 안된다;
> - 필요한 수준까지 프로덕트 백로그를 정제해야 한다;
> - 범위를 명확하게 하고 필요한 경우 프로덕트 오너와 다시 협상을 할 수 있다.
>
> [스크럼가이드 한국어판](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Korean.pdf)

### 목표 정하기

`Learn Like a Pro`에서 제시하는 목표 정하기

1. 최종 골을 정한다.

   큰 목표를 정하는 것

   상황에 맞는 이미지를 계속 눈이 가는 곳에 두는 것이 좋다.

2. 중간 골을 정한다.

   체크포인트 설정
   게임으로 치면 중간 중간 세이브 포인트가 있는 것이다.

   마리오3를 할 때 1-1부터 마지막 스테이지까지 세이브 포인트가 없다면? 게임할 맛이 나겠는가

3. 일일 골을 정한다.

   일일 골을 하다보면 중간 골이 달성되고 중간 골이 달성되다보면 최종 골이 달성되도록 하자.

`The Luck Factor`에는 이런 부분이 있다.

> 운이 좋은 사람은 장래를 기대한다
>
> 운이 좋은 사람은 장래는 더 좋아지며
>
> 바람을 이루어지고, 더 필 것이라 여긴다
>
> 자기 긍정이 엄청나다는 것
> 나라나 환경이 가라앉고 있다 느낀다?
>
> 그러면 이민, 이주하면 될 뿐이지 전혀 자신과 무관한 이야기이다
>
> 나라의 미래가 자기의 미래가 아니기 때문
>
> 토마스 윌리엄이 말한 자기충족적예언 (혹은 자기실현적예언) <_피그말리온, 플라시보 효과같은것_>
>
> 이는, 사람은 자기가 미래에 이렇게 되는 것이 아닌가 생각하며 행동한다는 말.
>
> 잘 풀린다 생각하면 잘 풀리는 것 같고, 안 풀리다 생각하면 안 풀리는 것 같다
>
> 밝은 미래를 생각하면 이루기 위해 행동하고 어두운 미래를 생각하면 아무 것도 안 한다
>
> 그러니 거짓말이라도 자신의 미래가 밝다 믿고 말하자
>
> 미래를 기대하기 위해서는
>
> 단기목표 (1달), 중기목표 (6개월), 장기목표 (1년 이상)를 정하라

## 어떻게 활용할까?

### 도입

개발을 크게 4단계로 나누면 이럴 것이다.

1. 프로젝트를 기획 및 설계
2. 구현
3. 테스트
4. 유지관리

이때 1, 2 단계에서 만다라 계획표를 활용할 수 있다 생각한다.

### 실천

단계로 표현하면,

1. 표를 그린다 / 준비한다.
2. 무엇을 만들 것인가 정중앙에 적는다. (+ 어떤 비즈니스가 가능한가)
3. 정중앙 주변 8칸에 무슨 기능이 필요한가 적는다. (+ 무슨 이유로)
4. 나머지 8칸 중앙에 각 `3`에서 정한 기능을 적고, 주변 8칸에 기능 세부사항을 적는다.(예를 들면 어떤 방법으로 이 기능을 구현한다.)

### 결론

처음 프로젝트를 기획할 때 큰 그림으로 한 장

애자일의 스프린트마다 한 장

이렇게 하면 프로젝트 마무리하면 많은 만다라 계획표가 쌓였을 것이고, 추후에 내가 무엇을 왜 어떻게 했는지 확인할 수 있을 것 같아서 좋을 것 같다.

:::note
반드시 8칸을 다 채워야 한다 생각하지 않는다.
규모가 크다면 부족할 수도 있겠지만, 대개 8칸을 채우는 것 조차 힘들 것이기에 만약 다 채우지 못하는 상황이라면 비운채로 진행하자.
:::

## 볼거리

https://www.atlassian.com/agile

https://www.atlassian.com/agile/scrum

https://www.redhat.com/ko/devops/what-is-agile-methodology

https://mtame.jp/column/Ohtani_Shohei/

http://news.sbs.co.kr/news/endPage.do?news_id=N1003968864

https://www.amazon.com/The-Luck-Factor-Richard-Wiseman-audiobook/dp/B015RXKBZ8

https://www.amazon.com/Learn-Like-Pro-Science-Based-Anything/dp/1250799376

https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%81%AC%EB%9F%BC_(%EC%95%A0%EC%9E%90%EC%9D%BC_%EA%B0%9C%EB%B0%9C_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4)

https://ko.wikipedia.org/wiki/%EC%95%A0%EC%9E%90%EC%9D%BC_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C

https://azure.microsoft.com/ko-kr/overview/devops-vs-agile/

https://medium.com/dtevangelist/scrum-dfc6523a3604

https://www.iais.or.jp/articles/articlesa/20200410/202004_01/

https://www.publickey1.jp/blog/11/_innovation_sprint_2010.html

https://www.publickey1.jp/blog/11/10_innovation_sprint_2011.html

https://www.publickey1.jp/blog/09/scrum.html

https://www.publickey1.jp/blog/22/_regional_scrum_gathering_tokyo_2022_1.html

https://www.microsoft.com/ko-kr/microsoft-365/business-insights-ideas/resources/how-to-choose-the-best-agile-methodology-for-your-project

https://www.microsoft.com/ko-kr/microsoft-365/business-insights-ideas/resources/guide-for-project-management

https://docs.microsoft.com/ko-kr/azure/devops/organizations/settings/work/change-process-agile-to-scrum?view=azure-devops

https://scrumguides.org/

https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Korean.pdf

### 여담

> 혼자 개발할 때도 애자일은 유용한가?
>
> [스크럼은 5 ~ 9명 규모로 구성한다](#스크럼) 써있기는 한데...
