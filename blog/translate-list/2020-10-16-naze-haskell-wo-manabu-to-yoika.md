---
slug: naze-haskell-wo-manabu-to-yoika
title: 왜 Haskell을 배우는 것이 좋은가
authors: rewrite0w0
tags: [haskell, 번역]
---

## [이 글](https://qiita.com/arowM/items/0305d4f439752f285438)을 쓰는 이유

제가 Qiita에 투고했던 글을 보신 분에게 메일을 받았습니다.
Haskell 공부를 시작했지만 어려워서 포기하려 한다는 글이었다.

그 기분을 잘 압니다.
엄청난 H한 책이 출판되어, 공부하기 상당히 쉬워졌지만 여전히 Haskell을 배울 수 있는 환경이 되었다 할 수 없습니다.

저는 Haskell로 제품개발을 하는 회사를(..) 보수운용하며,
Haskell를 사용해 프로그래밍을 합니다.
또한 Haskell를 보급하기 위해 "무섭지 않은 Haskell 입문"이란 글을 쓰기도 했습니다.
이러한 경험을 토대로 이 기회에 "왜 Haskell을 배우는 것이 좋은가"에 대해 정리해 보기로 하였습니다.

Haskell에 대해 아직 모르는 분이 읽을 수 있는 내용을 목적으로 하고 있으므로 전문용어는 사용하지 않으면, 엄밀한 언어의 정의 같은 것은 최대한 피했습니다.
또, "왜 Haskell를 배우는 것이 좋은가"이기에 "왜 다른 언어보다 Haskell를 사용해야하는가"는 언급하지 않습니다.
만약 후자에 대해 알고 싶다면 말미 링크를 참고해주시거나 검색하시면 정보를 손에 넣을 수 있습니다

스스로 한 걸음, 한 걸음 Haskell을 배우고 싶다는 분에게 Haskell에는 시간을 투자할만 한 가치가 있다는 자신감을 주기 위한 내용입니다.

## 우선 Haskell에 대한 오해를 풀자

저에게 온 메일에는
"함수형 언어를 절차형와 비교할 만한 것입니까?"
이런 의문이 있었습니다.
실은 이 질문에 대해 많은 Haskell 초보들의 오해가 생깁니다.
이러한 오해를 사지 않기 위한 Haskell의 진실은 이러합니다.

**1. Haskell은 함수형언어이기에 우수한 것이 아닙니다.**

**2. Haskell은 절차형언어이기도 합니다.**

**3. Haskell은 절차형언어 스타일로도 쓰입니다.**

우선 이 3가지 사실에 대해 자세히 고찰하려합니다.

#### 1. Haskell은 함수형언어이기에 우수한 것이 아닙니다.

Haskell은 함수형언어라는 특징으로 설명되어 집니다.
만약 당신이 함수형언어를 공부하고 싶다면 Haskell를 시작해 볼까 생각할 수도 있습니다.
요 근래는 함수형이라는 캐치프레이즈한 말을 이용해서 오류투성이 책을 출판한 분도 계시지요!

하지만 Haskell의 매력적인 부분은 함수형언어이기 때문이 아닙니다.
오파츠인 Lisp 또한 함수형입니다만 Lisp와 Haskell은 전혀 다른 매력을 가지고 있습니다.

Lisp를 모르는 당신에게 예를 들어보겠습니다.
냥이를 좋아하는 사람이 냥이가 "식육목"인 것을 보며 매력을 느낄까요?
똑같이 "식육목"인 멍멍이와는 다른 매력이 많이 있어 좋아할 것입니다.
참고로 저는 "우제류" 염소를 좋아하기에 염소를 기를 수 있는 곳으로 이사했습니다(..)

#### 2. Haskell은 절차형언어이기도 합니다.

그럼에도 불구하고 Haskell이 함수형이라는 특징을 가지고 있는 것은 맞습니다. 그것을 배울 때는 많은 노력이 드는 것도 사실입니다.
하지만 함수형이라는 것은 Haskell를 매력중 하나이기 때문이, 배우는 것을 잠시 미루시길 바랍니다.
"무섭지 않은 Haskell 입문"에도 포함된 내용입니다만, Haskell은 절차형 스타일로 쓸 수 있기도 합니다.
물론 객체지향에 대해서도 fumieval씨와 다른 분들에 의해 의견이 발표되고 있으며, 좀 더 공부한다면 Forth같은 스택지향 프로그래밍 같은 것도 될 수 있습니다.

만약 함수형인 부분을 배우는 것을 잠시 미루는 것이 힘들다면, 먼저, 평범하게 사용되는 언어로 함수형 스타일을 배우는 것을 재도전합니다.
음... 제가 빨리 Haskell 교재를 만들어 "함수형언어" 측면에 대해 미룰 수 있도록 하면 좋겠습니다만...
(아무나 좋으니 이걸로 먹고 살 수 있도록 할 수 있게 해주세요)

#### 3. Haskell은 절차형언어 스타일로도 쓰입니다.

여기서 절차형 프로그래밍 스타일로 Haskell 프로그래밍을 실제 어플리케이션 개발에 활용한 다는 것을 보여드리겠습니다
이 샘플을 봐주세요.

```hs
-- | Web API가 제공하는 프로세스에서 글을 취득하거나 투고하는 샘플 프로그램

main :: IO ()
main = myHandler do
-- Web API를 사용하기 위한 token 취득
token <- getToken
-- 모든 글의 내용을 취득
posts <- getPosts token
let

    -- 자신이 필자인 글만 추출
    myPosts = filter isMyPost posts

    -- 자신이 필자인 글 ID만 추출
    myPostIds = map postId myPosts

    -- 자신이 필자인 글의 ID를 글자순으로 변환
    body = unlines myPostIds

-- 자신이 필자인 글 ID 일람을 투고한다.
postMyPosts "my post list" body
```

이는 Haskell이지만, 전반적으로 절차형 같지 않습니까?
(구체적으로 문법 이해를 할 필요는 없습니다. 분위기만 느껴주세요)

굳이 모든 것을 "함수형" 스타일로 하는 것보다 이런 식으로 명령을 순차적으로 넣는 것도 긴급 변경 등의 상황에서 유연하게 대응할 수 있습니다.

여기 쓰여진 "함수형"은 map, filter 둘 뿐입니다.
이 함수를 JavaScript 같은 곳에서도 당신이 사용할 수 있도록 되어 있습니다.

## Haskell을 배우면 다른 언어도 쓰는 방법이 달라진다.

흠, Haskell에 대한 오해가 풀린 것 같으니, Haskell을 배우는 장점에 대해 말해봅시다.
무엇보다 Haskell을 배우면 Haskell 이외의 프로그래밍 언어의 쓰는 방법도 크게 개선됩니다.

Haskell은 할 수 있는 것이 제한되어 있는 언어입니다.
이렇게 들으면 단점으로 보이지만, 달리보면 **안티 패턴**을 구현하기 어려운 언어입니다.
그리고 좋게 쓰는 방법이 강요되는 언어이기도 합니다.

예를 들면 Haskell을 배운 사람은 테스트하기 쉬운 프로그램을 쓸 수 있겠지요?
여기서 구체적으로 설명하지 않겠습니다만, "순수한 함수와 순수하지 않은 함수의 구별"이 있기 때문입니다.

다른 혜택으로는 가능성이 높은 프로그램을 짤 수 있도록 되겠지요.
여기서도 자세한 이야기를 생략합니다만 순수한 함수 안의 변수 값의 재대입을 할 수 없는 것이나, 문서의 역할 할 수 있는 표기법, 유연한 추상화 기능이 있기 때문입니다.

그 외에도 실행 속도, 메모리사용등 의식하며 프로그램을 짤 수 있을 것입니다.
단방향리스트와 여러가지 자료구조의 라이브러리의 문서를 읽거나, 스스로 유연하게 자료형을 작성하면서 연산량을 건드는 경우도 많기 때문입니다.

하지만 이는 본래 다른 언어, 특히 당신이 평소에 사용하는 언어를 통해 배워야 할 내용입니다.
반대로 말해 당신이 평소에 사용하는 언어로 잘 배웠다면 Haskell을 배우면 막히는 것도 적어지겠지요.
Haskell을 배우는 것이 "어렵다" 느낀다면, 그건 평소 사용하는 언어를 소홀히 공부하였기 때문에 Haskell이 대신 그렇게 느끼도록 하는 것일지도 모릅니다.

## Haskell을 배우면 인생은 바뀐다.

Haskell을 배우는 것만으로 프로그래밍이외에서 당신의 인생은 윤택해집니다.

Haskell의 중요한 특징 중에는 "추상화"가 있습니다.
추상화로 프로그램의 가독성, 보수성이 크게 상향됩니다.
겉으로 보기에는 다른 것 사이에서 공통되는 부분을 찾는 능력이 추상력입니다.
여기서 단련되어 있는 추상력을 더욱 단련시킨다면, 프로그래밍 이외의 세계에서 Haskell을 응용하면 됩니다.

새로운 프로그래밍의 사고방식을 배우는 경험을 통해서, 지금까지 하지 못했던 새로운 시선이라는 습관을 배울 수 있게 됩니다.
저는 회사의 보수운영 방법을 배울 때, 크게 도움이 되었습니다.
Haskell을 배우면 만약 이 세계가 프로그램이 필요없게 되었을 때, 직장때문에 곤란하지 않을 것입니다.

지금까지 내가 할 수 없었던 것을 자신의 힘으로 노력해서 할 수 있도록 하는 경험을 통해 "입으로 뭔가 해야한다 하지만 실제로는 아무것도 안하는 사람" 같은 사람을 간파할 수 있는 능력을 얻게 되겠지요.
이런 사람과 엮이지 않게 됩니다.

컴파일러가 수 만, 수 억번 **"헤이? 이거 무슨 형태인지 모르겠는데?"** 라며 화나게 하는 경험을 통해서 평소 커뮤니케이션에서 상대를 이해할 수 있도록 적절히 자신의 의도를 내용에 포함시킬 수 있도록 되겠지요.
이제 이성에게도 인기가 많아집니다.(...?)

자! 당신도 행복이 가득한 Haskell을 시작합시다
_종교법인 Haskell의 빛_
(현재 존재하지 않습니다.)

## 왜 다른 언어보다 Haskell를 사용해야하는가.

이 글은 Haskell의 오해를 풀 수 있었습니다.
다음 스탭으로 이하의 글들을 읽어주십시오.
Haskell은 다른 언어와 비교해서 우월한지 (혹은 적합하지 않은지) 알 수 있다.
단지 언제까지나 Haskell에 관해 특징을 설명을 읽는 것뿐만 하면서 실제로 프로그램을 짜보지 않는다면 위에 말한 **"입으로 뭔가 해야한다 하지만 실제로는 아무것도 안하는 사람"** 과 다를 바 없게 되는 것을 염두해 주시길 바랍니다.

[Why Haskell matters](https://wiki.haskell.org/Why_Haskell_matters)

[Haskell과 함께 4년간 걸은 기업가의 시점](http://postd.cc/haskell-in-a-startup/)

[왜 우리들은 Haskell을 사용하는가](https://gist.github.com/tanakh/8750952)

또한, Haskell을 실제 사업에서 사용하는 제가 좋은 분은 [금융력이 없는 Web계 벤처가 Haskell를 사용하면 어떻게 되었나](https://qiita.com/arowM/items/25b7740ca0f31cc1be15)을 읽어주세요!