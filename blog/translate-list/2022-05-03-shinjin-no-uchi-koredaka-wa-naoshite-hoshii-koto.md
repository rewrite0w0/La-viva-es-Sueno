---
slug: 2022-05-03-shinjin-no-uchi-koredaka-wa-naoshite-hoshii-koto
title: 신입 때 바로 잡았으면 하는 것
authors: rewrite0w0
tags: [mindset, 번역]
---

> [글](https://qiita.com/shimajiri/items/20b4679148e5e383c9d6)

# 들어가기

정말 당연한 것만 있지만,

신입일 때 바로 잡았으면 하는 것을 정리했습니다.

어디까지는 업무상에서 전제이므로,

주말에 공부않는다 등은 들어가 있지 않습니다.

## 안한 걸 했다, 거짓말 말자.

(예시)

A: 이거 테스트했나요?

B: 음... 했습니다!(거짓말)

A: 안 돌아가는데요?

B: ....

이러면 A는 B를 신뢰할 수 없게 됩니다.

## 공식문서를 읽자.

흔한 이야기1

공식 문서는 정보량이 많고, 읽기 불편한 곳도 있지만, 적절히 읽으면 문제해결로 이어집니다.

스스로 개발하는 힘을 높이고 싶다면, 공식 문서를 읽는게 왕도라 생각합니다.

## 로그를 읽자

흔한 이야기2

답은 로그에 적혀있습니다.

영어가 좀 거시기해도 노력해서 읽어봅시다.

여력이 있으면 눈대중 grep하기도 꼭 단련해둡시다.

https://www.slideshare.net/murachue/grep-8132856

## 버전 차이에 주의하자

PHP, Python 등,

버전이 다르면 거의 다른 수준이 되는 언어도 있습니다.

문서를 읽을 때, 자신의 환경 버전이 몇 인지, 확실히 파악하는 것이 중요합니다.

## 어떨 때 질문할지 규칙을 정해두자

10분 고민해서 모르면 선임/선배에게 물어보자 등 질문하기 위한 규칙을 정해둠으로,

질문할까 말까 고민하지 않도록 합시다.

## 질문 방법을 생각하자

무엇을 모르겠는가 언어로 표현하는 것은 어렵지만,

5W1H 지켜 질문하거나, 상대방이 이해하기 쉬운 질문 방법을 늘 의식합시다.

예를 들어 다음과 같은 템플릿을 준비해주면 좋을 것입니다.

```
ㅇㅇ를 실행하면, ㅁㅁ 에러가 나옵니다.

저는 이 순서로 접근했습니다.
1.
2.
3.

이런 결과가 나왔습니다.

[결과 스크린샷 혹은 복붙]

[참고 자료]를 참고해서,
저는 [예상 결과]가 될 것이라 생각했습니다.

원인을 확인하기 위해서, 이하와 같은 것을 시도했지만,
해결에는 도달하지 못했습니다.

a. 입력을 ㅇㅇ가 아니라 ㅅㅅ로 했다.
=> 같은 결과였다

b. 소스 프로그램의 ㅍㅍ대신 ㅊㅊ를 했다.
=> 다음과 같은 컴파일 에러가 나왔다.

[에러 메세지 스크린샷 혹은 복붙]
```

## 자신의 짐작대로 작업하지 말자

이런 식으로 일을하면 반드시 재작업해야하며, 쓸데없는 시간이 소비됩니다.

## 작성한 코드가 동작하는지 확인하자

동작 확인하지 않고 완성했습니다. 할 때 제대로 동작하지 않은 경우가 많습니다.

리뷰하는 사람에게 기본도 안 지키는 것이므로,
최소 제대로 동작하는가 정도는 확인합시다.

개발을 잘하는 사람이나 베테랑조차도 동작 확인은 반드시한다 생각합니다.

## 손쓸 수 없어지기 전에 경고를 울리자

경고란 손쓸 수 없어지기 전에(터지기 전에) 울립시다.

기본적으로 팀으로 일하는 경우, 경고를 울리면 어떤 형태로든 도움받을 수 있는 경우가 대다수입니다.

## 프로젝트 개발 스케쥴을 염두하자

워터폴, 애자일 등 개발 방법에 의해 다소 다르겠지만,

대체로 어떤 프로젝트든 Gantt chart 등으로 스케쥴 관리할 것입니다.

전체 개발 스케쥴을 파악함으로 자신의 일의 진척도를 역산할 수 있거나, 어떤 단계에서 무엇을 하면 좋은가 등 여러가지를 배울 수 있다 생각합니다.

## 일의 진척을 간결히 설명할 수 있도록 하자

정례적으로 등, 일의 진척을 공유할 때가 있을 것이라 생각하지만,

그럴 때는 그냥 되는대로 이야기하지 말고 요점만 전하자는 마음가짐이 중요합니다.

미팅 시간도 정해져 있는 것이며, 추가 설명/질문 없이 전달하는 것만큼 영리한 것도 없습니다.

## 비밀번호 관련 정보를 파악해두자.

자주 있는 일이지만, `이 zip 파일 비밀번호 뭐였지...?`나 `검증환경 테스트 유저 계정/비밀번호가 뭐였지...` 등

의외로 시간을 잡아먹는 것이므로, 효율을 위해서 메모할 것은 확실하게 메모하며,

비밀번호 관련된 Wiki 페이지 등을 파악해둡시다.

## 맺는말

제 경험을 토대한 것이기에, 샘플 수가 적습니다.

혹 다른 것도 있다 하는 것이 있으면 댓글로 알려주시면 감사합니다.

## 재미있는 반응

> 대표가 신입의 나쁜 부분을 정리해서 글로 올리는 회사에서는 읽하기 싫...
>
> 거짓말하는 건 팀 분위기가 어떻게 되어져 있는가에 따름이라 생각합니다. 거짓말로 팀의 신뢰가 붕괴하는 것이 아니라, 신뢰가 생겨야 거짓말을 막을 수 있다 보기 때문입니다
>
> 무엇인가 말 전할 때 `ㅇㅇ하지 말자`가 아니라, `ㅇㅇ하자`가 더 좋은 표현 방법이라 생각합니다.
>
> 이 글을 읽고 동기부여가 되는 신입이 얼마나 될까요...
>
> `무엇인가 제한하는 것에는 주의`할 필요가 있다 생각합니다 [참조 글](https://note.com/kanam/n/na4d773932114)
>
> A와 B의 대화에서 동작 확인도 확인이지만, 테스트하지 않은 것도 문제이므로 이것도 글에 담아야된다 생각합니다.
