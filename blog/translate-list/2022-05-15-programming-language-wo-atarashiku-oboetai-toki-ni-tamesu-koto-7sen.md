---
slug: 2022-05-15-programming-language-wo-atarashiku-oboetai-toki-ni-tamesu-koto-7sen
title: 프로그래밍 언어를 새롭게 배우려할 때 시도하는 행동 7가지
authors: rewrite0w0
tags: [mindset, 번역]
---

> [글](https://qiita.com/muson0110/items/ae891dd630bc129960a1)

안녕하세요, 글의 시작과 끝에 산문을 적는 것을 좋아하는 엔지니어 무소입니다.

따듯한 날이 늘어지면 Twitter를 감시가 늘어납니다, 초보자 엔지니어나 지식이 없는 것을 비웃는 트윗을 종종 봅니다. 5년 전쯤부터 있던 새싹 밟기 풍조를 저는 그리 좋아하지 않습니다. 지식이 없음을 공유할 수 있는 사람의 그릇도 교양도 좋아합니다.

초보자 엔지니어가 가는 길을 제대로 가도록 불확실성을 감소시키는 글을 쓰고 싶던 차에 좋은 때라 느껴집니다.

## 머릿말

이 글을 읽는 분은 IT 엔지니어인 경우가 많다 생각하지만, 역시 엔지니어 인생을 살면

"**백엔드 질렸는데, 요즘 잘 나가는 프론트 엔지니어가 되고 싶어!**"

"**전직해서 새로운 언어를 배워야 해!**"

이런 경우가 있습니다. 잘 모르지만

저도 스타트업으로 전직하기 전에 React, Typescript도 적어보지도, 읽어보지도 않은 상태였기에, **공부 안하면 경 치겠는데** 느꼈습니다. 결과, 지금은 어떻게든 할 수 있는 부분도 있으니 매일 공부에 정진중입니다.

그래서, **프로그래밍 언어를 새롭게 배우려할 때 시도하는 행동 7가지**라는 주제로 씁니다. 어디까지나 주관이 많이 들어가 있으므로 본인 스타일이 있다면 그것이 좋다 생각합니다.

## 1. 온라인 학습 서비스 사용

우선은 "온라인 학습 서비스를 사용합시다" 입니다만, **stealth marketing??** 라 의심할 수 있습니다만,

> stealth marketing: 마케팅 수단으로 그것이 선전이라는 것을 모르게하는 선전 방법

모르는 부분을 모르겠다거나, 만들고 싶은 애플리케이션 테마도 딱히 없어 동기부여가 없는 사람은 온라인 학습 서비스를 권장합니다.

Twitter를 보고 있으면, 고액의 온라인 교재를 판매하는 것이 맹공을 받는 것을 봅니다. 하지만 그 조차도 정말 말 도 안되는 교재일 뿐, 제대로 조사하고, 리뷰를 보면서 강사를 신뢰할 수 있는가 확인한 후에 사면, **구입 비용보다 얻는 것이 더 많은 지식이 많아 좋았다!** 이런 경우가 있습니다.

예를 들어 제가 React, TS 다 모르겠어! 상태에서 구입한 것이 아래에 있는 Udemy 교재입니다. Udemy는 타이밍이 좋으면 10만원 상당의 교육이 2만원 정도로 구매할 수 있기에 세일할 때 사는게 좋습니다

(더 할인받을 때도 있네요.)

- https://www.udemy.com/course/modern_javascipt_react_beginner/
- https://www.udemy.com/course/react_stepup/

이 교재를 산 이유는 강사의 설명 방법, IT 경험 등을 들어 호감을 느꼈기 때문입니다.

"**뭔가 수상한 설명 방법인데. 약 파는거 같은데**" 같은 위화감을 느끼면 구매하지 않으면 됩니다. 인간의 오감은 의외로 신뢰할 수 있는 것입니다. 아마

## 2. 입문서 구매

정말로 의욕이 없을 때 "PC 로컬 환경 셋팅해서 실행"한다 작업 자체가 싫어질 때도 있습니다. 또 PC 없이 새 언어를 익히고 싶을 때가 있습니다.

이 때는 Amazon 같은 곳에서 고평가 받고 있는 입문서를 사면 좋습니다.

개인적으로 좋았던 입문서는 **목차 구성이 [MECE](https://ja.wikipedia.org/wiki/MECE)(상호배제, 전체포괄)**한 것이 좋습니다.

"이 책의 1장과 8장이 같은 것을 조금 바꿔 말하는 것" 이런 것을 보면 사려는 마음을 접습니다 :)

만약 Rust 입문서라면 [실전 Rust 프로그래밍 입문](https://www.amazon.co.jp/dp/4798061700/)을 굉장히 권합니다.

기본적인 것부터 임베디드, GUI까지 망라해서, 최강의 입문서를 만들었다는 느낌입니다. 이러한 최강의 입문서를 손에 넣으면 새로운 언어에 대한 심리적 장벽이 얕아질 것이라 생각합니다.

여기에 중요한 것은 그 책에 github 링크 같은 것이 있는 가 입니다. **제대로 돌아가는 샘플 프로그램을 준비하거나, 잘 못된 프로그램에 관한 issue가 github에 있어 저자가 답변해주는 입문서**는 좋은 평가를 줄 수 있는 책입니다.
그 수고에는 감사와 경의 밖에 드릴 것이 없습니다.

## 3. 디버그 환경 준비

디버그 환경을 제대로 준비하는 것으로 try & error를 효율 좋게 할 수 있습니다. 우선 디버그 환경을 준비해 얼마든지 실패할 수 있는 환경을 만드는 것이 좋다 생각합니다.

- https://qiita.com/muson0110/items/3f45f723968eb0338f75

단 난점으로 개발환경 인스톨, 환경 변수 설정 등은 재미없는 작업이므로 그다지 좋아하지 않은 사람도 많을 것이라 생각합니다. 환경 구축이 잘 안되서 "역시 이 언어 배우는 거 그만두자" 이렇게 되는 것은 너무 아까운 일임으로 환경 구축을 그다지 좋아하지 않은 사람은 **각 언어가 준비해둔 플레이그라운드에서 놀아본다**가 좋을 듯 합니다.

- https://play.rust-lang.org/
- https://www.typescriptlang.org/play

## 4. AtCoder 과거 문제 10 풀기

[AtCoder](https://atcoder.jp/?lang=ja)는 "경쟁 프로그래밍" 이라는 컴퓨터 프로그램 컨테스트를 하는 서비스입니다.

"사람과 경합해서 프로그래밍할 수 있는 레벨이 아니다" 생각할 수 있지만, 경쟁 자체보다는 문제를 푸는 알고리즘/데이터 구조, 계산량을 의식하면서 푸는 것을 권합니다.

하지만 다른 분의 Qiita 글은 꽤 질이 좋은 글이 많으므로 저는 이 분 글을 권장합니다.

- https://qiita.com/drken/items/872ebc3a2b5caaa4a0d0
- https://qiita.com/drken/items/afad07b70695c414fff7

기본적으로 처리 퍼포먼스가 좋은 C++ 글이 많지만 다른 언어를 사용하는 분도 있기에 배우고 싶은 언어에 해당하는 분을 차는 것도 좋을거라 생각합니다.

- https://qiita.com/drken/items/fd4e5e3630d0f5859067#c-%E4%BB%A5%E5%A4%96%E3%81%AE%E8%A8%80%E8%AA%9E%E3%81%A7

그치만 새 언어를 읽는 것 만으로는 실제 쓸 때 "**응?**" 이런 경우가 있으므로 AtCoder 문제를 풀어 실제로 적어보는 것도 좋을 것 같습니다. 경쟁 프로그래밍 특유의 매크로, 표준 입력, 고속화 등도 있지만, 처음에는 이런 테크닉을 조금 배끼거나 넘겨버리는 것이 좋습니다.

최근에 Rust를 배우고 있어서 예시로 하기할 문제를 Rust로 풀었습니다.

(아직 Rust가 익숙치 않으므로 괜찮은 느낌을 찾는 중입니다)

여러분도 적어서, 많이 많이 실패해봅시다.

---

**제 2 문제: ABC 081 A - Placing Marbles (100 점)**

**[문제 개요]**

0과 1 만으로 완성되는 3자리 숫자 s가 주어진다.

1이 몇 개 포함되는지 구하라.

**[예시]**

```
1)
  s = "101"
  대답:2

"1"이 2개 들어간다.
```

**Rust 예시**

```rs
use std::io::*;
use std::str::FromStr;

fn read<T: FromStr>() -> T {
    let stdin = stdin();
    let stdin = stdin.lock();
    let token: String = stdin
        .bytes()
        .map(|c| c.expect("failed to read char") as char)
        .skip_while(|c| c.is_whitespace())
        .take_while(|c| !c.is_whitespace())
        .collect();
    token.parse().ok().expect("failed to parse token")
}

fn main() {
    let a: String = read();
    let leng : usize = a.len();
    let mut ans : u32 = 0;
    for i in 0..leng {
        if a.chars().nth(i).unwrap() == '1' {
            ans += 1
        }
    }
    println!("{}", ans);
}
```

## 5. 슈퍼 엔지니어 쫓기

앞에 언급한 분의 팬이다는 이야기가 되지만, 세상에는 수 많은 슈퍼 엔지니어가 있습니다.

- https://qiita.com/drken
- https://twitter.com/drken1215

슈퍼 엔지니어가 너무 강해서 질투하거나, "내가..." 이런 느낌으로 비하할 것 같다면 쫓아다니지 않는 것이 좋겠지만, 슈퍼 엔지니어가 보는 세계를 Twitter, Qiita 같은 곳을 통해 그들의 시선을 조금이라도 느껴보는 것은 좋은 자극이라 생각합니다.

저도 제가 배우고 싶은 언어, 분야에 대해서는 강한 사람을 팔로우하자. 이렇게 정해놓았습니다.

대신 물리적으로 쫓으면 경찰을 만나야 하므로 하지 맙시다.

또 인터넷 스토킹도 공공질서를 범위 내에서 부탁합니다.

## 6. 언어의 특성, 역사를 안다

프로그래밍 언어는 자연언어(일어, 영어)와 비교해서 **문장의 애매성이 적고, 새로 만들어진 프로그래밍 언어는 종래의 프로그래밍 언어보다 무엇인가 개선하기 위한 명확한 설계 사상으로 있습니다.** 이렇게 저는 생각합니다. 그러므로 각 프로그래밍 언어의 장/단점을 비교해서 역사, 설계 사상을 보면, 새 언어를 배우는 의의는 이런 것이구나 의식하며 행동할 수 있기에 장기적으로 학습을 하는 것에 유리하다 생각합니다.

만약 저라면 Rust, TS 개요를 Wikipediea로 읽습니다.
Wikipedia라면 전체적으로 어려운 단어가 나열되지만 Rust라면 **성능, 메모리안정성, 안전한 병렬성을 지향하며 설계된 C언어, C++ 대신 시스템 프로그래밍 언어를 지향하고 있다** 같은 것을 알 수 있습니다. 중요한 것은 병렬입니다.

- https://ja.wikipedia.org/wiki/Rust_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)

- https://ja.wikipedia.org/wiki/TypeScript

조금 탈선해서 프로그래밍 언어와 자연언어의 본질의 다른 점에 대해 **유루 언어 학자 라디오** 채널이 있으므로 궁금하시면 한 번 봐주시길 바랍니다.

- https://www.youtube.com/watch?v=ru1ZVmytMoo

- https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%E3%81%A8%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E

## 7. 공식문서를 읽는다

결국 공식 문서, 이는 극도의 원전입니다.

언어에 의해 다르겠지만 공식 문서가 너무 딱딱한 문장이라 읽기 싫다 느낄 때도 있으므로, 의욕이 없어질 것 같다면 조금 익숙해진 후에 공식 문서를 읽는 게 좋을 것 같습니다.
(디버그해야 할 때는 반드시 공식 문서를 봐야합니다만)

만약 React 공식 문서라면 영어판 외에도 일어판도 있고, 어느 정도 체계적으로 배우고 싶다면 클래스, 메서드 인수로 값을 어떻게 하는가 상세 정보는 공식 문서에서 읽을 수 있습니다.

- https://reactjs.org/docs/getting-started.html
- https://ja.reactjs.org/tutorial/tutorial.html

## 맺음말

새로운 것을 배우는 것은 즐거움 반, 스트레스가 반이므로 제 글로 스트레스를 조금 적게할 수 있다면 만족할 것 같습니다.

"프로그래밍 언어"는 과학적인 것 같다는 인상을 주지만 소프트웨어 엔지니어는 "세계의 어떤 부분을 잘라 언어화, 코드화 하는가" 접근해서 무엇인가의 인지언어학와 링크하는 것이라 생각합니다. 애자일 개발 같은 것은 심리학적 접근을 포함하는 방법같고요.

결국 우수한 프로그래머가 되기 위해서는 컴퓨터 과학 이외에도 교양(역사, 철학, 정치, 심리학 등) 같은 것이 필요하다 느끼기에, 그저 가는 길이 긴 여행이구나 싶은 마음으로 글을 마치려합니다.

감사합니다.