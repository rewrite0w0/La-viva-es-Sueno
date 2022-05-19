---
slug: 2022-05-19-2022-first-quarter-programming-ranking
title: 2022년 일사분기 프로그래밍 언어 랭킹
authors: rewrite0w0
tags: [번역]
---

> [글](https://qiita.com/rana_kualu/items/356f64523f3369ff46c2)

업계 분석 기업 [RedMonk](https://redmonk.com/)가 일사분기 프로그래밍 언어 랭킹을 발표했습니다.

이하는 [The RedMonk Programming Language Rankings: January 2022](https://redmonk.com/sogrady/2022/03/28/language-rankings-1-22/)에 대한 이야기입니다.

## The RedMonk Programming Language Rankings: January 2022

이번 랭킹은 [MongoDB](https://www.mongodb.com/languages?utm_campaign=prismaga&utm_source=redmonk&utm_medium=website&utm_term=partner&utm_content=ranking)가 제공합니다.

[커뮤니티](https://mongodb.com/community/forums)에 가입해서 MongoDB Atlas를 사용해 애플리케이션을 만듭시다

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

이것이 원인이라 결론 짓기는 빠르지만, 분석 방법에 의한 업계 고정화은 없고, 외부 요인, 단도직입적으로 팬데믹이 기승을 부린 것도 영향을 주고있을 수도 있습니다.

무슨 이유든 앞으로도 주시할 필요가 있을 주제일 것 입니다.

## Python (0) / Java (-1)

Java는 일시적으로 Pytho과 동률 2위였지만, 이번에는 단독 3위로 후퇴했습니다.
냉정히 말하면 3위 자체도 상당한 결과입니다.
과거 케이블 TV를 위해 만들어진 언어가 여러 프로그래밍 언어를 제치고 이 순위니까요.

그리고 Python은 2년 연속 2위를 지켰으며, 지속적으로 맹위를 펼칠 듯 합니다.
엔터프라이즈에서 가장 인기있는 언어 중 하나이며, 세계 2대 모바일 에코시스템 중 하나 입니다.

일부는 `glue언어에 불과하다` 평해지는 언어이므로 결과는 엄청난 쾌거로 봐야겠습니다.

## PHP (0)

PHP 순위는 전혀 변동이 없습니다.
딱히 특별한 일 없이 계속 안정적입니다.

2017년에 Python에게 밀려 4위가 되었습니다.

지금 PHP에 주목하는 이유는 PHP을 깔보고 있기 때문입니다.

Python도 가끔씩 크게 당할 때가 있습니다.
하지만 PHP는 계속 어둠 속에서 살아있습니다.

하지만 세상의 Web 사이트의 대부분은 PHP로 돌아갑니다.
어떻게 생각할 지는 모르겠지만 PHP의 영향력은 계속 클 것입니다.

## C++ (-2)

예전에는 C++는 C#, CSS와 함께 동률 5위였습니다만 이번에는 2랭크 떨어져서 7위입니다.

이는 일시적일 수도 있지만, 어쩌면 선배의 길을 따라가는 것일지도 모릅니다.

우리의 랭킹이 시작할 당시 C언어는 8위였지만 점점 후퇴해서 현재는 10위에 있습니다.

한 편, C++가 7위까지 떨어진 것은 2013년 이 후, 두 번째입니다.
이는 전과 같이 일시적인 것일지, 아니면 이대로 추락할지 흥미롭게 지켜봐야겠습니다.

## TypeScript (0)

C++ 바로 뒤에는 TypeScript입니다.

근래 급성장하고 있는 언어로, Swift 이후로 톱10에 들어간 유일한 언어입니다.
그리고 근 3분기는 8위를 지키고 있습니다.
주목할 점은 이것이 TypeScript 한계인가 더 올라갈 수 있는가입니다.

C++은 앞으로 떨어진다 한다면, TypeScript는 넘을 수 있을지도 모릅니다.

C++에는 지금까지 쌓여올려진 막대한 양의 코드와 커뮤니티가 존재합니다.

TypeScript가 더 위를 바란다면 그 역사를 안을 필요가 있겠네요.

## Dart (+1) / Rust (0) / Kotlin (0)

Kotlin 18위, Rust 19위로 순위의 변동이 없어 딱히 놀라운 것은 없습니다.

두 언어 모두 최근 화두가 되는 언어이며, 각각 상당히 흥미로운 점과 관심을 갖을 점을 가지고 있습니다만, 이 랭킹에서 상위에 들어가기에는 상당한 노력이 필요해보입니다.
이런 와중에 놀라운 것이 Dart 순위가 하나 올라 Rust와 동률 19위라는 것입니다.

Kotlin은 2회 전보다, Rust는 지난 조사보다 순위를 올렸습니다.
그런데 Dart는 한 번도 30위 조차 오지 못했는데 갑자기 개발자가 몰렸고 Rust와 어깨를 나란히 하고 있습니다.

여기서 주목해야 할 점은 이게 일시적인 것인가, 더 상승할 것인가입니다.
다음, 다다음 조사에서 이 3 언어에 대해 더 많은 것을 알게 되겠지요.

## 감상

그런데 [TIOBE Index](https://www.tiobe.com/tiobe-index/)와는 전혀 다른 결과입니다.

![Tiobe Ranking](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F26088%2F547ee0e2-2580-d79c-178a-c89be08fbc1d.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=3de20460739a15f572d1b1f0721e4a91)

RedMonk 1위인 JavaScript는 TIOBE Index에서 7위이고, 반대로 RedMonk에서 10위인 C언어는 TIOBE Index에서 2위입니다.
어떤 차이일까요

이것은 어떠한 힘의 동작때문이 아니라, 단순히 계산 방법의 차이입니다.

RedMonk는 Github와 StackOverFlow 활동에 기반해서 TIOBE Index는 [검색엔진 결과](https://www.tiobe.com/tiobe-index/programming-languages-definition/)에서 산출됩니다.
보신 것과 같이, 어느 쪽도 현실의 점유를 반영한 것이 아니라 어떠한 지표를 가공해 만든 결과인 셈입니다.

그렇기에 하나의 결과만을 보고 전부라 생각하지 않고 다양한 관점을 의식할 필요가 있습니다.

언어를 고를 경우에는 마이너한 것은 피하면서(단순히 해결책을 찾기 어렵기에) 목적에 맞는 것을 잘 고르는 것을 선택하는 것이 좋습니다.

그리고 저 조차도 PHP로 먹고 살고 있고요.

## 역자 감상

JavaScript가 1위인 것, Python이 2위인 것은 체감대로 인 듯합니다.

TypeScript가 8위 밖에 안 된다는 점과 Ruby가 9위나 된다는 것은 의외입니다.

TypeScript는 더 높고, Ruby는 더 낮을 것 같았습니다.

그리고 글에서도 언급했듯이 Rust/Dart는 더 성장할 수 있을 것 같습니다.

더 했으면 좋겠고요...

JavaScript를 공부하는 여러분께서는 아마 저와 같이 `JavaScript => Rust 혹은 Dart 혹은 Haskell(순위에는 없지만)` 아니면 `JavaScript => Python 혹은 TypeScript => Rust 혹은 Dart 혹은 Haskell` 이렇게 학습 계획을 세우고 계실거라 생각합니다.

Haskell은 그렇다 치더라도 앞으로 멀티 플랫폼이나 저수준의 언어 학습 욕구를 채우기 위해서는 Rust나 Dart를 배우는 것이 좋아보이니깐요.

이번에 나온 [flutter 3](/2022-05-16-realize-flutter3)만 보아도 하나의 코드로 6가지 플랫폼을 만들 수 있어서 이제 채용 검색할 때도 React Native 만큼 flutter 개발자를 구하는 듯 합니다.

(_물론 여전히 국내에서는(외국은 어쩐지 몰라서...) Java가 압도적입니다만 종교적인 이유로 가까이 하지 않습니다._)

Rust도 저수준 언어를 배우고자 하는 이에게 C/C++보다 친절하게 접근할 수 있다 느꼈습니다. 완전 개인적인 감상이지만 Rust 커뮤니티는 모르는 것을 물으면 비웃기보다 열성적으로 친절하게 알려주려 하는 것 같다는 인식을 받아 마음이 편합니다.

빠른 시일에 이에 대한 글을 쓸 예정입니다만, 그래서 TypeScript에 대한 회의감이 큰 시기이기도 합니다.

얼마 전 번역했던 [node.js에 대한 글](/blog/2022-05-11-bokura-wo-shiboru-nodejs-and-reply)이나 [개인개발 / 스타트업 최강의 아키텍처에 대한 글](/blog/think-about-personal-developement-architecture)에 TypeScript가 유일한 선택지라는 말도 있었고, 유행따라서 배워보려해도 마음이 가지 않습니다...
