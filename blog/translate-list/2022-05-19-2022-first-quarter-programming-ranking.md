---
slug: 2022-05-19-2022-first-quarter-programming-ranking
title: JavaScript의 this는 4종류??
authors: rewrite0w0
tags: [번역]
---

> [글](https://redmonk.com/sogrady/2022/03/28/language-rankings-1-22/)

업계 분석 기업 [RedMonk](https://redmonk.com/)가 일사분기 프로그래밍 언어 랭킹을 발표했습니다.

이하는 [The RedMonk Programming Language Rankings: January 2022](https://redmonk.com/sogrady/2022/03/28/language-rankings-1-22/)에 대한 이야기입니다.

## The RedMonk Programming Language Rankings: January 2022

이번 랭킹은 [MongoDB](https://www.mongodb.com/languages?utm_campaign=prismaga&utm_source=redmonk&utm_medium=website&utm_term=partner&utm_content=ranking)가 제공합니다.

[커뮤니티](https://mongodb.com/community/forums)에 참여해 MongoDB Atlas를 사용해 애플리케이션을 만듭시다

30개 이상의 언어가 지원되고 있습니다.

이사분기도 얼마 남지 않은 시점이 되었으니, 슬슬 일사분기 언어 랭킹을 밝힌 시기가 되었습니다.

근 몇 개월이 상당히 바벘습니다만, 다행히 필요한 쿼리를 실행해서 결과를 분석하는 시간을 어렵게 마련했기에 소개하겠습니다.

그리고 본 랭킹은 [2010년](http://www.dataists.com/2010/12/ranking-the-popularity-of-programming-langauges/)에 Drew Conway 즉 Jonh Myles White에 의해 만들어진 랭킹을 근거로 기술된 것입니다.

구체적인 정보수집 수단은 변했지만, 기본적 프로세스는 당시와 다르지 않습니다.

GitHub와 Stack overflow에서 데이터를 수집하고 GitHub의 코드와 Stack Overflow 질문을 랭킹에 반영했습니다.

그렇기에 현재 언어의 사용 비율을 정확히 산출하는 것이 아니라 의논과 이용 상황의 조합이라 보시고 이후의 트렌드 추이에 대한 힌트를 얻을 수 있는 것을 목표로 합니다.

## Our Current Process

GitHub 분석에 사용한 데이터 소스는 GitHub Archive입니다.

GitHub가 [State of the Octoverse](https://octoverse.github.com/)를 만드는 것과 같은 방법으로 풀리퀘스트를 조회합니다.

이 쿼리는 예전에 사용한 프로세스와 최대한 같은 로직이 되도록 계산되어 있습니다.

- 언어마다 자르고, 레포지토리 마다의 기본 언어에 기반합니다. 이 방법의 주의점은 이하에 기술합니다.
- fork된 레포지토리는 제외합니다.
- 랭킹을 만들기 위해 집약된 이력을 사용합니다.
- Stack Overflow는 단순히 Data Explorer를 사용할 뿐입니다.

여기까지가 개요이며, 이하는 주의사항입니다.

- GitHub랑 Stack Overflow 양쪽에 존재하는 언어가 랭킹 대상에 들어갑니다.
- 이 랭킹은 사용상황을 엄밀히 따지는 것이 아닙니다. 장래 예측에 사용될 두 집단의 상관관계를 밝히는 것으로 그 이상도 그 이하도 아닙니다.
- 또 이러한 분석을 위해 이용할 수 있는 다른 커뮤니티가 있겠지만, 규모의 크기와 분석에 필요한 데이터를 공개한다는 이유로 GitHub와 Stack Overflow를 선택했습니다. 관심있으신 분은 다른 정보처를 사용해 자신만의 분석해봅시다.
- 모든 랭킹은 넓은 마음으로 봐주세요. 순위 붙이기는 그저 흥미위주일 뿐입니다. 상대적인 인기도 차이는 알지만 1, 2위 정도의 차는 크게 의미없습니다. 리스트 하위에 있다는 소리는 정보량이 낮다는 소리이며, 신뢰성도 낮아집니다.
- Mathematica 같이 Stack Overflow 이외의 커뮤니티를 갖은 언어는 랭킹에서 낮은 위치에 있습니다. 그 커뮤니티 사이트는 데이터를 공개하지 않은 경우가 많아서 비교가 어려웠으므로 반영되지 않습니다.

이러한 정보를 기반으로 2022년 일사분기 랭킹을 봅시다.

![Red Monk Q122 Programming Lauguage Rankings](https://camo.qiitausercontent.com/de8dae7dd39e1d3829371e0deabfadff071dcdf1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f32363038382f61643238663261392d333463652d316338352d373061352d3435343463356134353331342e706e67)

> X축 GitHub 활발도, Y축 StackOverFlow 활발도

1 JavaScript
2 Python
3 Java
4 PHP
5 CSS
5 C#
7 C++
8 TypeScript
9 Ruby
10 C
11 Swift
12 R
13 Objective-C
14 Shell
14 Scala
16 Go
17 PowerShell
18 Kotlin
19 Rust
19 Dart

이번 랭킹은 안정성을 주제로 하고 있습니다.

몇 몇 예외를 제외하면 근래 랭킹 변동은 없습니다.

여기서 들고 있는 20 언어 중에 17 언어가 3분기 연속 순위에 있습니다.

이는 업계의 동향이 안정되어 있다 봐도 될까요?
혹은 분석 방법에 의한 착시일까요?

우리는 이 랭킹이 업계에 실제 점유와 완전히 일치한다 생각하지 않습니다.

하지만 동시에 개발자 활동에 관한 큰 집단의 동향의 분석하는 것은 유익하며, 예측할 수 있는 가능성이 있다 생각합니다.

실제 몇 번이나 그것에 성공했습니다.

랭킹의 움직임이 적어졌다는 것이 이대로 정체된 시대에 들어간 것일까 생각한다면 흥미롭습니다.

물론 지금부터도 새로운 언어는 만들어지고, 새 기능 추가나 외부요인으로 급격히 순위는 오를 가능성도 있습니다.

하지만, 업계 전체적으로는 어느 정도 균형이 형성되었다 느낍니다.

각 언어는 여러 니치를 근간으로 발달되고, 같은 니치를 해결하는 상대와 경쟁하고 있는 상태입니다.

이것이 원인이라 결론 짓기는 쁘라지만, 분석 방법에 의한 업계 고정화은 없고, 외부 요인, 단도직입적으로 팬데믹이 기승을 부린 것도 영향을 주고있을 수도 있습니다.

무슨 이유든 앞으로도 주시할 필요가 있을 주제일 것 입니다.
