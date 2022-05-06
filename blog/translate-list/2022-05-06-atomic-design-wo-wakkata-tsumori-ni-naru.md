---
slug: 2022-05-06-atomic-design-wo-wakkata-tsumori-ni-naru
title: Atomic Design 아는 척하기
authors: rewrite0w0
tags: [design, architecture, 번역]
---

> [글](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B)

Atomic Design이라는 말을 종종 듣습니다.

실제로 약간의 체험을 하면서 Atomic Design에 대해 생각했습니다.

## Atomic Design?

파츠/컴포넌트 단위로 정의하는 UI 디자인 수법입니다.

눈여겨봐야 할 것은 프론트 엔지니어 대부분이 만병통치약이라 여기는 여론이 높아진다는 것입니다.

## 파츠 최소단위로 디자인한다

최소 단위 "원자"(Lv1)부터 디자인하며 "분자"(Lv2), "생체"(Lv3), "템플릿"(Lv4), "페이지"(Lv5) 순으로 디자인 작업을 합의, 진행하는 것입니다.

![atomic revolution](https://design.dena.com/_next/static/images/figures-1200-36427287dbc1e4481d9a2bd2a15d9159.png)

:::note
Atomic Design은 "원자", "분자" 같이 화학용어로 정의되어 있어 이해가 약간 이상하다 느끼므로 글에서는 (Lv1) 같이 레벨 표현을 덧붙였습니다.
:::

## 엔지니어 작업 밑준비가 가능

템플릿(Lv4) 혹은 생체(Lv3) 단계에 들어가면 원자/분자(Lv 1,2) 스타일(파츠의 최소단위)가 팀에 공유, 합의되었다는 소리이므로 엔지니어가 자유롭게 쌓아 올리며 빠르게 UI 개발, 검증이 행해진다는 기대할 수 있습니다.

먼저 Twitter Bootstrap를 만들어, 그것으로 디자인한다. 이런 느낌에 가까워 "디자인 밑그림(Design Comprehensive Layout)으로 스타일 가이드를 한다" 순서를 역으로 한다 볼 수 있습니다.

## Atomic Design으로 만들어보기

부끄럽지만 한 번 만들어본 결과물과 함께 프로세스를 공개하겠습니다.

## 원자(Lv1)

배색, 폰트 같은 정의, 라벨 버튼에 폼 파츠 단위 등 UI 최소요소를 스타일라이즈

![Lv1 stylize](https://design.dena.com/_next/static/images/1-atoms-1200-bc7b0da8305c2db3a92cf3465e6966ca.png)

사용 빈도가 낮은 원자도 먼저 만들어두겠습니다. 허나 제작에 낭비가 많아질지도 모릅니다.(h6, hr, pre 같이)

각 원자는 Sketch였다면 Symbol화 하기 등, 디자인 컴포넌트 오브젝트로 만듭니다.

## 분자(Lv2)

원자(Lv1)를 붙입니다. 즐겁습니다.

![Lv2](https://design.dena.com/_next/static/images/2-molecules-1200-349b9aaed810cabcb56dba2aafd39479.png)

좀 애매한데 싶어서 원자를 다시 고치는 경우가 종종 있지만, 이건 적응의 문제일지도 모릅니다.

분자도 완성되면 Sketch였다면 Symbol화합니다. 근래 Sketch는 Symbol를 네스트할 수 있어 편합니다.

## 생체(Lv3)

분자(Lv2)를 붙입니다. 부족한 원자가 있는데? 같은 것을 느끼기도 합니다.

![Lv3](https://design.dena.com/_next/static/images/3-organisms-1200-3260a7ae52293d9eb86e0e62010d77ec.png)

또 애매한데 싶은 원자, 분자를 고치는 경우가 종종 있습니다. 생체도 완성했으면 Sketch라면 Symbol화합니다.

## 템플릿(Lv4)

생체(Lv3)를 붙입니다. 와이어 프레임 같은 느낌일지도 모릅니다.

여기까지 드디어 도착했는데, 고쳐쓰는 수고를 더는 의미로 손으로 와이어 프레임을 먼저 그리는 것이 좋을 것 같다 생각했습니다.

![Lv4](https://design.dena.com/_next/static/images/4-templates-1-1200-7f0a8b158957cc559c2d1c3637b9e879.png)

또 애매한데 싶은 생체, 분자, 원자를 다시 고쳐쓰는 경우가 종종 있습니다. 이것에는 적응했습니다 적응. 유저 테스트할 때 색이 좀~ 이런 이야기로 다시 고쳐쓰지 않으면 좋겠습니다만...

## 페이지(Lv5)

템플릿(Lv4)를 브래쉬업, 내용을 넣습니다.

![Lv5](https://design.dena.com/_next/static/images/5-pages-2-1200-3b62a3c9d52521e18a3fff1de38b12ea.png)

조금 저조차도 거시기한 디자인이 되버렸습니다...화면 전체의 색감 같은 것도 여기서 보이기에 역시 적응이 필요하다 느낍니다.

## Atomic Design 감상

1. 아직 제가 적응하지 못한 부분도 있어서, 조금 어렵다는 인상입니다. CSS Framework... 특히 Twitter Bootstrap를 기반으로 한 디자인한다는 느낌으로 만들면 접근하기 쉬울지도 모릅니다.

2. 웹디자인으로는 좀 심심한 느낌일지도 모릅니다(제 스킬 문제일 수도 있습니다). 일단 모든 웹디자인에 적용하기보단, 서비스 UI 디자인에 특화하는 접근방법도 좋을 것 같습니다.

3. 기반 디자인이 있어 아트디렉션에 올리는 UI를 만들 때 효율적일 듯합니다. 또, 풀 스크래치를 한다기 보다는 프로젝트를 변환하면서 빚어내느 것이 좋을 듯 합니다. LEAN 개발에 의해 MVP 개발 페이즈라면 iOS, Android 디자인 가이드라인을 기초원리=원자/분자 단위로 생체, 템플릿을 정의해 나간다는 접근 흐름이 이해하기 쉬울듯 합니다.

4. Atomic Design 수법과 보통 디자인 수법을 믹스인하면, 풀스크래치라도 괜찮게 나올지도 모릅니다. 예를 들어 일단 보통하는 방법으로 디자인해서 화면 전체를 만든 후에, 파츠를 분할, 공통화하며 Atomic Design의 프레임워크와 비교, 스타일가이드를 원자에서 정의하는 순서를 밟으면 빠지는 부분을 확인할 수 있으며, 구현 팀과 합의도 쉬워질 것 같습니다.

5. 이 방법으로 개발한 애플리케이션 제작기 글을 종종 보지만 대부분이 페이지의 디자인 밑그림(Design Comprehensive Layout)을 원자, 분자 단계에서 "상상해" 개발하는 느낌입니다. 이는 꽤나 어려워보이지만, 적응되면 상당히 효율적일 것 같습니다.

## 특히 괜찮다 느낀점

서비스 개발 시에 운용 페이즈 따라, 현실적인 디자이너가 반드시 모든 성과물을 제로 베이스에서 작성하지 못할 수도 있으므로 플래너나 엔지니어가 프로토타입 레벨에서 만들 수 있는 구조 복음이 될지도 모릅니다. 의존도를 낮추면서 디자이너 팀 안에서 솔로플레이 방지도 가능할 것 같습니다.

## 걱정, 실제로 운용될 때를 생각하자

1. 단조로운 작업이 계속되는 디자인 작업에 질려버릴지도 모릅니다. 베이스는 평범한 방법으로 해도될 듯합니다.
2. 서비스가 운용될 때, 원자와 같은 원자(button2 같이)를 만드는 악몽이 보입니다... 다만 통상적인 방법보다 발생 확률을 억누를 수 있을 것 같습니다.

3. 엔지니어가 원자 분자 단계로 쌓아올린 디자인은 레이아웃 단계가 아니므로, 프로덕션 단계에서는 결국 디자이너가 손을 대야하는 등, 재작업해야할 여지가 있을지도 모릅니다. 손을 써야하는 부분의 우선 순위를 붙이는 것이 좋을지도 모릅니다.

## Atomic Design 참고자료

[pattern lab](http://patternlab.io/)

Atomic Design를 추진하는 공식에 가까운 사이트 & 시스템을 제작하는 도구입니다. 실제로 도입할 때 여기 도구를 지침으로 쓰는 것이 좋아보입니다.

[APBCSS](http://apbcss.com/)

Atomic Design 표준으로 제작된 CSS Framework입니다. CSS 클래스 정의가 특징적이네요.

개발자 시선 이외라면 반드시 이거여야 하는 이유는 잘 모르겠지만, Atomic Design의 이해가 깊어질 것 같습니다.

## 정리

1. 서비스 디자인은 지속적으로 짧은 사이클로 수정하지 않으면 안되므로, Web/UI 디자인이 아니라면 독자적으로 해결해야하는 문제를 대하는 하나의 방법

2. Web/UI 디자인에는 에디토리얼, 그래픽에서 나온 방법이 많이 있지만 Atomic Design은 마크업, 코딩 시선으로 낳은 방법

3. 디자인의 최종적 목표는 가치를 부여한다, 문제를 해결하는 것이라면 다양한 방법이 있다면 좋은 것

Atomic Design의 시점으로 서비스 디자인 프로세스 개선에 도전하는 것도 좋은 일일지도 모릅니다.