---
slug: unit-test-no-susume
title: 유닛테스트를 권함
authors: rewrite0w0
tags: [test, unit test, 번역]
---

> [글](https://zenn.dev/suzuki_hoge/books/2020-12-small-unit-test-65625504e7be1532413f)

## 큰 테스트의 비용과 위험

### 들어가며

이 글에서 테스트의 크고 작음은 테스트 코드의 **행수가 아니라** 테스트에서 **보증하는 내용**을 뜻함

보증되는 내용이 큰 테스트는 일견 나쁜 것 같지 않지만, 이 챕터에는 3개의 관점에서 **큰 테스트**를 다시 보려한다.

예를 사용해서 이미지를 그리며 생각해보자

### 큰 테스트와 3개의 문제

모듈 A, B, C를 이용하는 기능을 이용하는 UseCase A가 있다.

UseCase와 모듈 각각 하나의 클래스로 상상하며 하나하나 색을 칠한 블록을 그렸다.

![UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--47hzll2N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/1df1d9f9d1752f5dcb1dd575.jpeg%3Fsha%3D24e57e04748fb4232e8db3297cf7479a9cac87fa)

UseCase A 테스트 코드를 쓸 떄, **발생하는 것 전부를 테스트해야지**는 자연스러운 사고흐름이다.

그렇게 만드는 UseCase A 테스트 코드를 옅은 빨간색으로 이미지했다.

![UseCase A Test](https://storage.googleapis.com/zenn-user-upload/vrsy3nj8166yo2x8dv14njqjcax4)

1개의 블록에 4개의 블록, 결국 테스트 하나로 클래스 4개를 테스트한다.

커버리지면에서는 UseCase A, 모듈 A, B, C 모두 통과되므로 **모두 보증**된다

여러 개가 보증되므로 이게 **큰 테스트**이다.

이렇게 생각하며 만든 **큰 테스트**를 **비용**, **실행시간**, **위험** 관점에서 생각해보자.

### 비용

시스템이 돌아가고, 사업도 지속되서 **추가 사양**을 해야된다.

거의 비슷한 처리지만 모듈 C가 아니라 모듈 D로 움직이는 UseCase B를 만들었다.

![useCase B](https://storage.googleapis.com/zenn-user-upload/l2zbhxd5sl67ni49148zah5uiupi)

비슷한 방식으로 테스트를 만들죠.

![useCase B test](https://storage.googleapis.com/zenn-user-upload/j8f3ejsem30iwmctfstemo81r0bo)

바로 눈치에 들어오는 건 UseCase A 테스트, UseCase B 테스트에서 **보증하고 있는 범위 중복**이다

![useCase A, B test](https://storage.googleapis.com/zenn-user-upload/9b311favsg4reiy1h2jzfhzsdmd2)

단순 계산 **75% 테스트 코드가 중복입니다.**

쓴 코드의 75%가 쓸모없는 코드라는 **무의미**한 짓을 한거죠.

거기에 중복범위에 포함된 모듈 B에 변경이 발생하면 **테스트를 2개나 고쳐야합니다.**

그러나 2개의 테스트 코드를 편집하고 보증하는 내용은 1개죠.

즉, **앞으로 수정 비용은 2배**가 되죠.

**이제 쓰는 테스트 코드의 50%는 무가치**하다 말할 수도 있죠.

굉장하지 않나요

### 실행시간

중복된 내용으로 테스트를 늘리면 당연히 **실행시간**도 증가한다.

이미 UseCase A만 할 때보다 **이미 2배 시간이 들죠**

실행시간이 긴 것만큼 **실행하기 귀찮아**지며, **코드를 적는 심리적 부담감을 느낀다**

이 상태는 테스트 코드를 유지하지 못하므로 **상당히 건전하지 못한** 상태다.

무엇보다 편해지기 위해서 자동테스트에 시간을 할애하는 건 **본말전도**이다.

### 위험

"**큰 테스트**로 발생하는 중복이 나쁜 건 알았다, 그럼 **추가로 만든 모듈 D만 테스트하면?**"

이런 생각으로 테스트를 만들면?

![UseCase A test & module D test](https://storage.googleapis.com/zenn-user-upload/zzxwnj2fk9nu5pj85jmtgghg5ag8)

이제 중복이 없어서 비용 문제는 없다

그런데 구조에 문제가 있다

예를 들어 처음 제공한 UseCase A에 사양 변경이 들어가 모듈 A는 사용하지 않기로 했다

편의상 UseCase A'으로 한다

![UseCase A'](https://storage.googleapis.com/zenn-user-upload/kwp3bn1b3lrd72lrylfkd4m5bkmk)

UseCase A를 수정한 사람은 호출하지 않는 모듈 A 테스트를 삭제했다.

![UseCase A' Test](https://storage.googleapis.com/zenn-user-upload/868ibzlswbh02b9sy3xvzbi8jutl)

그러나 **UseCase A 테스트는 UseCase B 테스트도 겸하고 있었다**

이걸 잊고 지워버렸기에 **UseCase B 에서 사용하고 있는 모듈 A 테스트**가 사라져버렸다.

![UseCase A' test & module D test](https://storage.googleapis.com/zenn-user-upload/geiwdcx4mwpmz9ab8mmcc7vdd21v)

이게 **위험**이다

### 당신의 제품은 어떠한 규모인가?

"무슨 소리, **나는 그런 실수를 하지 않아**" 생각했습니까?

그러면 제품 파일 수를 세봅시다.

```bash
find src/ -name '*.java' | wc -l
```

얼마나 되나요?

100? 500? 1000? 5000?

제품의 첫 first commit은 언제인가요?

```bash
git log --reverse
```

commiter는 몇 명인가요?

```bash
git log --pretty=format:"%an" | sort -u  | wc -l
```

실 제품은 이런 예시와 비교할 수 없을 정도로 복잡하다.

결과는 다소 다를지라도, 결국 코드 전부를 파악하는 사람은 없기에 UseCase A 테스트와 UseCase B 관계를 파악하는 것은 **무척 곤란하다**

애초에 "눈치챈다", "찾는다" 이런 키워드가 필요하면 **개선**해야한다.

**그것도 비용과 위험**이다.

둘 다 없어야 좋죠.

### 정리

- **큰 테스트**는 **많은 비용, 큰 위험**
- 실제 제품에 "주의해서 처리"는 **비현실적**

---

## 작은 테스트 군(群)의 기본

### 작게 더하는게 아니라 전부 자잘하게가 기본

**작은 테스트**가 잘 동작하지 않았던 경우를 다시 보자.

![UseCase A test & module D test](https://storage.googleapis.com/zenn-user-upload/zzxwnj2fk9nu5pj85jmtgghg5ag8)

모듈D 테스트를 작게 만들어도 제대로 잘 돌아가지 않은 이유는 **전부 자잘하게**하지 않아서이다.

UseCase A를만든 시점에 모듈 A, B, C가 **각각 단독으로 테스트되어있다**를 이미지 그리자.

![split Module A, B, C test on UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--AofqWmli--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/2ea9761111d3885142c93a5a.jpeg%3Fsha%3Db24f608efb7b773b378ec247f15a91834d746c27)

이렇게 되면 UseCase B를 만들 때는 모듈 D만 테스트를 추가하면 된다.

![adding module D test on UseCase B](https://res.cloudinary.com/zenn/image/fetch/s--OiC20oPW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/7fc470ae8a6ae32dda2a9549.jpeg%3Fsha%3D489ff68f6e801d1dca08a900c97f6ab54fd6a505)

UseCase A를 UseCase A'로 만들 때도 A를 빼면 그만이다.

![remove module A test on UseCase A'](https://res.cloudinary.com/zenn/image/fetch/s--nFVKqEYa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/95328556e6c595bc8971a932.jpeg%3Fsha%3D84823c99e4c1204b89a728f1d771b16fb3879ffd)

### 자잘하게 많이가 포인트

자잘하게 많이를 유지하기 위해서 **1개 테스트로 1개의 모듈을 테스트**하는 것이 핵심이다

모듈을 **1개씩 늘리면** 테스트도 **1개 씩 늘린다**

그러면 어디선가 모듈을 호출하지 않아도 **모듈 테스트는 사라지지 않는다**

**어떤 모듈을 다뤄도 이미 그건 테스트 완료** 상태가 유지되므로 "영향을 주는 클래스, 테스트를 찾는다" 프로세스는 확실히 적어진다

반복하지만 **잘게 많이**가 포인트

**큰 테스트**에 반하는 이것을 **작은 테스트 군(群)**이라 한다

### 비용 비교

여기까지 나온 **큰 테스트**, **작은 테스트 군** 패턴을 숫자로 **비용**비교해보자

예를 들어 상품 재고 참조와 플랜 제공 기간 확인을 처리한다 상정하자

모듈 A는 인수(item)으로 DB 참조, 결과를 로직 전개 후 true/false 반환

모듈 B는 인수(plan)으로 HTTP request을 발생시킴, 그 결과를 로직 전개 후 true/false 반환

UseCase A는 모듈 A, B 결과를 자신의 private 메서드(self.check)로 OK, NG를 내면, 모듈 C가 그것을 "success", "failure"로 변환

UseCase B는 item1, 2, 3, 4가 있고, plan은 Plan X, Y, Z가 있다. self.check는 간단하게 둘 다 true 일 때 OK

이미지로 그리면...

![example project UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--Xc6mztyH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/87835a43f62d9b9b12fc38c6.jpeg%3Fsha%3D14eb3813783672b567d4bb7f8966b072a745b5fd)

### 큰 테스트로 해야하는 패턴

**큰 테스트**는 앞 장에서 본 것처럼 하나의 블록으로 모든 걸 처리한다.

![UseCase A test](https://res.cloudinary.com/zenn/image/fetch/s--FitlZhxj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/55189774ea9089b376754b2b.jpeg%3Fsha%3D46d0e3aa92b14767f5b439ccaca7b35c4663d813)

모든 모듈을 한 번에 테스트할 때, "모듈 A는 item 1일 때 true 반환, 모듈 B는 Plan X일 때 true 반환하므로 self.check는 OK, 모듈 C가 'success'를 반환"

이렇게 이어서 생각해야한다

이만큼의 패턴이 필요하죠

![UseCase A large test](https://res.cloudinary.com/zenn/image/fetch/s--rdGtUQ8C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/ec9df35ca49e7792aca4e8e0.jpeg%3Fsha%3D2362bbb4865e2346e8e331d761c90d53fe3c77d4)

4 ( item1 || item2 || item3 || item4 ) \* 3 ( planX || planY || planZ ) = **12 패턴**이다

**테스트 코드 중복**도 떠올려보자

`1, X => OK` 랑 `1, Y => OK` 랑 `2, X => OK`을 확인해서, `1` 이랑 `2` 랑 `X` 랑 `Y` 에서 다 true가 나왔는데, `2, Y => OK` **테스트에 가치가 있는가?**

`2, Y => OK` 패턴은 **이미 테스트된 것이 아닌가?**
2가 true가 되면 `2, X`도 확인 된 것이며 Y도 같은 방식이다

이렇게 생각하면 **반절정도는 무의미**하다

쓸모없는 패턴은 지울까요?
이런 제거 방법은 앞 장에서 본 것처럼 순식간에 범위를 알기 어려워진다는 **위험**을 발생시킨다

또 사양이 바뀔 때, **과거 의도적으로 지운 일부 케이스를 과부족하지 않게 정확히 복원하는 것은 거의 불가능**합니다.

### 작은 테스트 군에서 해야하는 패턴

각 모듈에서 각 필요한 패턴을 준비할 뿐이므로

"모듈 A, item 1 일 때 true, item 2 일 때는..."

"모듈 B는 plan X일 때..."

고민을 **분리할 수 있다**

해야할 일을 이미지로 보죠

![unit test UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--tRWnonR6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/d956b815a09f5cae2c80c516.jpeg%3Fsha%3Dba19e70b8cde8c0e4703fcf92670f9299610242c)

4 ( item1 || item2 || item3 || item4 ) + 3 ( planX || planY || planZ ) + 2 ( OK || NG ) = **9 패턴**이다

큰 차이는 없지만 **작은 테스트 군** 패턴이 더 **적다**

### 추가사양으로 증가 추세 비교

item에 item5가 plan에 planW가 추가되었다

**큰 테스트**는 앞의 계산식에서 본 것처럼 5 \* 4 = **20 패턴**

![large test UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--Hn-3ny9m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/a7afa458633b947a205f3f70.jpeg%3Fsha%3D68e5beb28f4c6039eccf013a0bce665f6bd28034)

상품이 **2개** 늘었는데 **8 패턴**이 늘어났다

5, X => OK랑 W => NG 이외는 **테스트를 이미 한 것이므로** **6 패턴의 쓸모없는** 테스트 코드를 적어서 **무의미한 코드가 75%**이다

한 편 **작은 테스트 군**은 5 + 4 + 2 = **11 패턴**

![unit test UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--Ny1YHKma--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/a0b789a9961b14921f00162c.jpeg%3Fsha%3D1ee7a906a407b4de2f4cd17d320092f9919997a1)

상품이 **2개** 늘었고, 패턴도 **2개** 들었다.

**증가 추세가 전혀 다르다**

조금 시점을 바꿔 패턴 추가이 아니라 모듈 추가라면 어떨까?

계절에 따라 결과가 변화하는 모듈 E를 UseCase A에 넣는다면?

**큰 테스트** 5 _ 4 _ 4 = **80 패턴**
**작은 테스트 군**은 5 + 4 + 2 + 4 = **15 패턴**

### 하지만 큰 테스트에 비교해서 테스트 범위는 감소한다

이게 거슬리는 분도 있을거라 생각한다. 그림으로 보면

![still you didn't test useCase A](https://res.cloudinary.com/zenn/image/fetch/s--taWvPGjb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/400f52e43a36f38444f3b026.jpeg%3Fsha%3Dcbab00fe8425cbc650b43b663986943d83057729)

**작은 테스트 군**에서는 UseCase A가 **아무런 테스트를 받지 않았잖아?**

"모듈 A, B 에서 OK || NG를 만듬(self.check)"와 "그 결과를 모듈 C로 전달한다"가 **테스트되지 않았다**

**작은 테스트 군**의 한계일까요?

당연히 아니죠, **mock**를 사용하자

### 정리

- **큰 테스트**는 **지수적 폭발**이 일어나기 쉽다
- **작은 테스트 군**의 비법은 **자잘하게 많이**
- 테스트 클래스 수가 많으면 많을 수록 패턴은 폭증한다

다음 장에서는 **mock**으로 **작은 테스트 군**의 UseCase A 부분을 테스트한다

## mock를 잘 활용한다

### mock?

테스트 구현할 떄, 테스트에 영향을주지 않도록 더미를 갈아끼우는 것

"테스트 용 DB, 로컬 더미 API 호출" 접속처를 바꾸는 것이 아니다

"DB를 사용하는 것처럼 테스트할 때만 쓰는 코드"로 생각하라

목 라이브러리는 어떤 언어에도 있으니 간단하고 좋은 걸 쓰거나 스스로 만들어도 된다. 여기서는 목 설명은 여기까지 하겠다

### 뭘 mock으로 하나

UseCase A를 테스트 할 때, 앞 장에서 테스트하지 안한 점이 있었다

> 모듈 A, B 결과 OK || NG 작성 (self.check)와 결과를 모듈 C 전달

반대로 그 이외에는 관심사가 아니다

**UseCase A를 테스트할 때는 DB도 HTTP API도 없어도 된다**

모듈 A, B, C 한 번에 **목**하자

![mock on module a, b, c](https://res.cloudinary.com/zenn/image/fetch/s--CFd4-jzc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/c19a7a1b19a7cdb899ffb0ed.jpeg%3Fsha%3D7e3267da8c56248d0f60ab54d7585a50e2bbc8d3)

모듈 A **작은 테스트**는 있으니 모듈 A 패턴 테스트를 할 필요가 없다

구현에 포함되어있는 조건분기, DB도 **전혀 신경 쓸 필요없다**

그러니 **우선 Mock A는 1를 반환**하자

이거만 하면 끝

모듈 B도 같다.
**Mock B는 X를 반환하자**

모듈 C는 **인수가 OK인지 확인한 후 "success" 반환 하자**

그럼 **모듈C 목이** "UseCase A가 1, X, OK 만듦", "그걸 모듈C로 전달"을 **테스트**하자

물론 UseCase A 자체 반환 값은 "success"이다

![mock on UseCase A Test](https://res.cloudinary.com/zenn/image/fetch/s--WcL8Qt8q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/5c61730db0bb7fead62d8852.jpeg%3Fsha%3D724e673a6c3fbb4aac8183cca7706a11a9a4a339)

코드는 이런 느낌

![test on java](https://res.cloudinary.com/zenn/image/fetch/s--76D4Ws-F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/ebf6725f3849ced2f5612d42.jpeg%3Fsha%3D16fefe39c748637b121c5957c73b53a21c9ea7e2)

대신 더미 response가 아니므로 **목 안에 assert가 있는 것이** 포인트

### 테스트 크기, 비용 확인

이 테스트 코드는 조금 길어, 이해하기 어려울지도 모른다

그러나 **보증하고 있는 건 많지 않다**

이것도 **작은 테스트**로 충분하다

가령 모듈A 더미 DB 설정, 모듈B 구현 조사가 필요로 하지 않다

**필요 최저한의 것만 해서이다**

또 **비용**도 패턴 증가 추세가 낮습니다

![unit test UseCase A](https://res.cloudinary.com/zenn/image/fetch/s--tRWnonR6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/d956b815a09f5cae2c80c516.jpeg%3Fsha%3Dba19e70b8cde8c0e4703fcf92670f9299610242c)

앞 장에서 나온 5 + 4 + 2 = 11 패턴에 더해 **4 패턴**이면 된다

> `1 + X`, `1 + Z`, `4 + X`, `4 + Z` 반환하면 충분하다. OK/NG는 2개의 값을 and르 받는 것이라서. 예시만큼의 복잡도라면 OK/NG 2개 패턴으로 충분할지도 모른다

**큰 테스트**는 5 \* 4 = **20 패턴** 이었으니, 꽤 차이가 있고, 속도 차이도 크다.

> **작은 테스트 군**은 5 DB 접속 + 4 Http request, **큰 테스트**는 20 DB 접속 + 20 Http request 4배차이

만약 item이 8개, plan이 8개라면 어떻게 되겠는가

> 단순 계산 **작은 테스트 군** 8 + 8 + 2 + 2 = **22 패턴** **큰 테스트**는 8 \* 8 = **64 패턴**. 요점은 item, plan이 증가해도 UseCase A 테스트는 **하나도 증가하지 않는다**이다. 이게 관심사를 분리한 성과이다.

### 어째서 테스트할 때 구현을 다뤄야 좋은가

모듈A DB 접속을 하지 않고, 1를 반환하는 경우가 좋은건가 느낄수도 잇다

그러나 **모듈A가 작은 테스트이므로 문제없다**

결과가 1이 되는 value를 넘긴 테스트, 2가 되는 value 테스트, 3...
보증되면 모듈 A은 **안전한 테스트이다**

UseCase A 테스트가 관여하는 건 **어떻게해야 1이 되는가**가 아니라 **1이 나오면 뭘하나**이다

목으로 처리해도 **보증된다**

### 입구, 출구 하나만이 포인트

모듈 A, B, C를 다시 보자

![module test A, B, C](https://res.cloudinary.com/zenn/image/fetch/s--0P8oEyVy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/e7d9f9cf7393a35a64667f40.jpeg%3Fsha%3D6b4f8958f4c31168a6e91e47dd69b391b648c27b)

모듈 A 테스트는 **인수를 받아(1), 값을 DB 참조해(2), 반환한다(3)** 부분을 테스트하고 있다

이건 전부 **모듈A의 직접 입출력**부분이다

UseCase A는 어떤가

![UseCase A Test](https://res.cloudinary.com/zenn/image/fetch/s--01K5qVm7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/d30c7605057ddaab9bfab9b6.jpeg%3Fsha%3Dd2f88b380c09d2b67ddf04ccfafa1c0e5ee16629)

여기는 **인수를 받아(1), 그 값을 하위 모듈로 전달해서(2, 3), 결과를 다른 하위 모듈로 준 다음(4), 결과를 반환(5)** 부분 테스트하므로 모듈 A의 DB 같이 **층이 다른 곳은 신경쓰지 않는다**

이렇게 **한층 씩** 이어가면, 틈새없이 구성할 수 있다.

![unit test UseCase A, Module A, B, C](https://res.cloudinary.com/zenn/image/fetch/s--JPhJ1sKA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/d0955793750c83e90c94103c.jpeg%3Fsha%3D1c03bfb806d42bbc30bf4c4e7cc2ad3d64cbf134)

**입구, 출구를 한 층만 테스트**하자

### 정리

- **목**은 테스트 할 때 쓰는 **다른 구현**
- **목**은 자체가 assertion를 하는 것도 있다
- **작은 테스트**가 있는 모듈은 **목하기 쉽다**
- **입구, 출구 한층만 진짜**로 한다
- **한층 씩** 테스트하면 **빈틈없이** 테스트 가능

나머지는 부록에 있다

## 부록1: private 메서드를 테스트하고 싶어하는 병의 처방전

### private 메서드도 public 으로 해서 작은 테스트 군해야하는가?

예제를 봅시다

```java
public function check_all(user) {
    if !check_type(user)
        return NG_1

    if !check_payment(user)
        return NG_2

    if !check_age(user)
        return NG_3

    return OK
}

private function check_type(user) {
    ...
}

private function check_payment(user) {
    ...
}

private function check_age(user) {
    ...
}
```

여기서는 public의 check_all과 private의 check_type, check_payment, check_age가 우리가 지금까지 본 UseCase A, 모듈 A, B, C와 **닮아있죠**

**작은 테스트 군**으로 만드려고 하면, private 메서드도 public으로 해서 테스트해야하나?는 생각이 머리를 스치기도 한다.

```diff
- private function check_type(user) {
+ public function check_type(user) {
    ...
}

- private function check_payment(user) {
+ public function check_payment(user) {
    ...
}

- private function check_age(user) {
+ public function check_age(user) {
    ...
}
```

![example code modifying private => public](https://res.cloudinary.com/zenn/image/fetch/s--q5Ze63a4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/ec37f9f9ee23e77faa61166f.jpeg%3Fsha%3D65e2549b36dcd03b25197e9ada492742a0e174f9)

그러나 private 3메서드는 private로 두고, public의 check_all를 **큰 테스트**하는 게 좋다.

![example code large test like](https://res.cloudinary.com/zenn/image/fetch/s--qqZbtxQi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/3117502f5cd8f2117141042b.jpeg%3Fsha%3Da60ca43951912cdfe7e71e0e80e4f67eb44d52df)

이는 테스트하는 **최소단위**에 의해 결정된다

### 테스트 대상의 최소단위를 정한다

**최소단위**는 **공개되어 있는 동작**으로 생각하자

제공하는 건 **구현이 아니라 기능**이므로 보증은 그 단위로 하자

예를 들어 `java.util.ArrayList#add`라면 `ensureCapacityInternal` private 메서드가 메모리 범위에 문제가 없는가 확인해서, 부족하면 `glow` private 메서드로 메모리 확보하지만 **add 할 때 뭘 어떻게 하는지 그 내부까지는 알 필요가**없다.

**호출할 지, 안 할지 모르는 메서드같은건 아무래도 좋다**

제공하는 것은 **실패없이 add 한다**이므로

이걸 **최소단위**로 염두하고 테스트하자

앞에서 check_all 예시를 생각해보자

check_all만 public 이라면 check_all를 **최소단위**로 봐도 된다

### 최소단위는 불변이 아니다

상기의 check_payment는 재설계, 기능추가에 의해 공통화된 private 메서드에서 독립 모듈(Payment Module)이 될 수 있을 것이다

그때는 check_payment가 public인 **또 하나의 제공하는 기능**으로 격상되므로 **최소단위**가 된다.

이럴때 Payment Module 테스트를 작성하자

**최소단위를 승격, 격하되기도 하는** 것이다

## 부록2: 모듈은 무엇인가 실제 코드 예시

### 모듈이란 실제적으로 무엇인가?

1장 모두에 말한대로, 기본적으로 하나의 클래스로 보면 된다

단 하나의 클래스가 **정말 하나의 클래스인가** 아니면 **여러 클래스를 사용하는 하나의 클래스인가**는 신경쓰지 않는다

테스트할 때 관심사는 클래스는 **한층 다룰 것**이다

### 실제 코드 예시

#### 안내

적지만 정말로 돌아가는 코드를 올린다

scala인데, 사전 지식이 없어도 읽을 수 있다

의존 라이브러리는 `org.scalatest`의 `scalatest`, 목 라이브러리는 없다

목은 그냥 Dependency Injection(DI)으로 실현했다.

"이런 구현은 이래야한다", "scala스러움"을 뿜는 부분은 배제했다.

#### 테스트 대상

어떠한 API가 있고, ItemChecker, UserChecker로 구성되어있다.

```scala
case class Api(itemChecker: ItemChecker, userChecker: UserChecker) {
  def check(item: String, age: Int, address: String): String = {
    if (!itemChecker.check(item))
      "NG ITEM"
    else if (!userChecker.check(age, address))
      "NG USER"
    else
      "OK"
  }
}
```

이걸로 알 수 있는 구성은 이렇다

![scala API](https://res.cloudinary.com/zenn/image/fetch/s--xFtYz0Jg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/b1e0fd1478cbf27838ef4770.jpeg%3Fsha%3Daefca589111c7e6d1ec7f46d19c5dd4f536fccca)

ItemChecker는 재고 체크한다

DB(로 보이는 HashMap)을 참조해서 수량이 충분한가 확인한다

DB 접근에 1초 정도 사용한다 치자

```scala
trait ItemChecker {
  def check(item: String): Boolean
}

case class ItemCheckerImpl() extends ItemChecker {
  override def check(item: String): Boolean = {
    0 < DB.findOr(item, 0)
  }
}

object DB {
  var stock: HashMap[String, Int] = HashMap.empty

  def findOr(item: String, default: Int): Int = {
    Thread.sleep(1000)
    stock.getOrElse(item, default)
  }
}
```

DB를 확인한다. 이것으로 상품 확인은 끝이다

![item check db](https://res.cloudinary.com/zenn/image/fetch/s--tSbCvLlF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/680658e2698ff138d88577d6.jpeg%3Fsha%3D2d01680bab314edeeaf42d5b83a86609a1c52ae2)

UserChecker는 AgeChecker와 AddressChecker로 구성된다

```scala
trait UserChecker {
  def check(age: Int, address: String): Boolean
}

case class UserCheckerImpl(ageChecker: AgeChecker, addressChecker: AddressChecker) extends UserChecker {
  override def check(age: Int, address: String): Boolean = {
    ageChecker.check(age) && addressChecker.check(address)
  }
}
```

AgaChecker, AddressChecker는 DB 같은건 사용하지 않는다.

```scala
trait AgeChecker {
  def check(age: Int): Boolean
}

case class AgeCheckerImpl() extends AgeChecker {
  override def check(age: Int): Boolean = {
    20 <= age
  }
}
```

```scala
trait AddressChecker {
  def check(address: String): Boolean
}

case class AddressCheckerImpl() extends AddressChecker {
  override def check(address: String): Boolean = {
    address == "tokyo"
  }
}
```

2개의 Checker를 확인하고 마무리 짓는다.

![UserChecker check AgeChecker, AddressChecker](https://res.cloudinary.com/zenn/image/fetch/s--wBc-HwT---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/8d1e51a3234370005c7fb642.jpeg%3Fsha%3De27c57911e7b1c29bedb6d63bea0da652fc482cf)

#### 큰 테스트 예시

집요하다 느낄 수 있겠지만 **큰 테스트** 패턴 수를 확인해보자.

```scala
class BigTest extends FunSuite {
  test("test") {
    val api = Api(
      ItemCheckerImpl(),
      UserCheckerImpl(
        AgeCheckerImpl(),
        AddressCheckerImpl()
      )
    )

    DB.stock = HashMap("iPhoneSE" -> 3)
    assert(api.check("iPhoneSE", 20, "tokyo") == "OK")

    DB.stock = HashMap.empty
    assert(api.check("iPhoneSE", 20, "tokyo") == "NG ITEM")

    DB.stock = HashMap("iPhone8" -> 3)
    assert(api.check("iPhoneSE", 20, "tokyo") == "NG ITEM")

    DB.stock = HashMap("iPhoneSE" -> 3)
    assert(api.check("iPhoneSE", 19, "tokyo") == "NG USER")

    DB.stock = HashMap("iPhoneSE" -> 3)
    assert(api.check("iPhoneSE", 20, "osaka") == "NG USER")

    DB.stock = HashMap.empty
    assert(api.check("iPhoneSE", 19, "tokyo") == "NG ITEM")

    DB.stock = HashMap("iPhone8" -> 3)
    assert(api.check("iPhoneSE", 19, "tokyo") == "NG ITEM")

    DB.stock = HashMap.empty
    assert(api.check("iPhoneSE", 20, "osaka") == "NG ITEM")

    DB.stock = HashMap("iPhone8" -> 3)
    assert(api.check("iPhoneSE", 20, "osaka") == "NG ITEM")

    DB.stock = HashMap("iPhoneSE" -> 3)
    assert(api.check("iPhoneSE", 19, "osaka") == "NG USER")

    DB.stock = HashMap.empty
    assert(api.check("iPhoneSE", 19, "osaka") == "NG ITEM")

    DB.stock = HashMap("iPhone8" -> 3)
    assert(api.check("iPhoneSE", 19, "osaka") == "NG ITEM")
  }
}
```

여기가 DI하는 부분이다, 정말 구현을 주입했다.

```scala
val api = Api(
  ItemCheckerImpl(),
  UserCheckerImpl(
    AgeCheckerImpl(),
    AddressCheckerImpl()
  )
)
```

덕분에 한 번에 테스트되지만 어느 행이 어떤 값을 어떤 모듈에 재현한 패턴인지 **알기 너무 어렵다**

**큰 테스트**를 구현할 때는 모든 것을 감쌀 큰 테스트를 하나 만들어, 가장 겉의 인수가 **선단(그림 상 아래)에서 말단(그림 상 위)**로 전달되는 걸 생각하며 만들어야한다.

![large test flow](https://res.cloudinary.com/zenn/image/fetch/s--19rKPo34--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/bf15b5fee91318aff7fec829.jpeg%3Fsha%3Da69f6b645e296d8954ac310543c2e6a421ac4a03)

테스트는 DB 접속이 12번 **12초** 이상 소비된다.

#### 작은 테스트 군

**작은 테스트 군**은 **큰 테스트**와 반대로, 말단에서 잘게 잘게 테스트하며 올라간다

ItemChecker를 테스트해보자

```scala
class ItemCheckerTest extends FunSuite {
  test("test") {
    DB.stock = HashMap("iPhoneSE" -> 3)
    assert(ItemCheckerImpl().check("iPhoneSE"))

    DB.stock = HashMap("iPhone8" -> 3)
    assert(!ItemCheckerImpl().check("iPhoneSE"))

    DB.stock = HashMap.empty
    assert(!ItemCheckerImpl().check("iPhoneSE"))
  }
}
```

테스트 하나 끝

![done ItemChecker test](https://res.cloudinary.com/zenn/image/fetch/s--L46dCcS8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/da6aaa45153bbf3e601de4f9.jpeg%3Fsha%3D69a6689c53ef67b2de7b28f862330bd46cd35ed0)

나머지 2개의 말단 Checker도 테스트하자

```scala
class AgeCheckerTest extends FunSuite {
  test("item") {
    assert(AgeCheckerImpl().check(20))

    assert(!AgeCheckerImpl().check(19))
  }
}
```

```scala
class AddressCheckerTest extends FunSuite {
  test("test") {
    assert(AddressCheckerImpl().check("tokyo"))

    assert(!AddressCheckerImpl().check("osaka"))
  }
}
```

2개의 Checker를 테스트했으니 2개의 테스트가 완료되었다.

![done test Agechecker, AddressChecker](https://res.cloudinary.com/zenn/image/fetch/s--kD_6cyVE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/80c147c99bb3e8bc73e5c3ca.jpeg%3Fsha%3D2a601f461939340aa18c157e7253bc3b25fbd3be)

다음은 UserChecker 테스트

**테스트를 마친 모듈은 mock화 해도 좋다**

여기서 mock은 라이브러리가 아니라 무명클래스로 Trait(=Interface)를 구현해서 return 시킨다

```scala
class UserCheckerTest extends FunSuite {
  test("test") {
    val age_ok = new AgeChecker {
      override def check(age: Int): Boolean = return true
    }
    val age_ng = new AgeChecker {
      override def check(age: Int): Boolean = return false
    }
    val address_ok = new AddressChecker {
      override def check(address: String): Boolean = return true
    }
    val address_ng = new AddressChecker {
      override def check(address: String): Boolean = return false
    }

    assert(UserCheckerImpl(age_ok, address_ok).check(20, "tokyo"))

    assert(!UserCheckerImpl(age_ng, address_ok).check(19, "tokyo"))
    assert(!UserCheckerImpl(age_ok, address_ng).check(20, "osaka"))
    assert(!UserCheckerImpl(age_ng, address_ng).check(19, "osaka"))
  }
}
```

복잡해 보이지만, 에디터에서 `new`를 치면 95% 정도 자동으로 채워준다

등장하는 클래스 명이 많지만, 테스트한 것은

"UserChecker를 사용한 2개의 Checker의 결과가 모두 true라면 최종적으로 true"

이거 **하나**이다. 또 하나의 테스트가 끝났다.

![done UserChecker test](https://res.cloudinary.com/zenn/image/fetch/s--nQmgOyKx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/d7d787cff28217d67ec64777.jpeg%3Fsha%3Db484f65007e6c8c16adfbccf87712ddb7ad48658)

마지막으로 API를 테스트한다

**테스트를 마친 모듈은 mock으로 치며** 테스트한다

```scala
class ApiTest extends FunSuite {
  test("test") {
    val item_ok = new ItemChecker {
      override def check(item: String): Boolean = return true
    }
    val item_ng = new ItemChecker {
      override def check(item: String): Boolean = return false
    }
    val user_ok = new UserChecker {
      override def check(age: Int, address: String): Boolean = return true
    }
    val user_ng = new UserChecker {
      override def check(age: Int, address: String): Boolean = return false
    }

    assert(Api(item_ok, user_ok).check("iPhoneSE", 20, "tokyo") == "OK")

    assert(Api(item_ng, user_ok).check("iPhoneSE", 20, "tokyo") == "NG ITEM")
    assert(Api(item_ok, user_ng).check("iPhoneSE", 20, "tokyo") == "NG USER")
    assert(Api(item_ng, user_ng).check("iPhoneSE", 20, "tokyo") == "NG ITEM")
  }
}
```

API 하나가 테스트를 마쳤다

관심사는 **한층** 입출력이므로, 이 테스트에 DB, AgeChecker, AddressChecker는 **등장하지 않는다**

![API test](https://res.cloudinary.com/zenn/image/fetch/s--NIO32-Lm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/c33170bedea4880762446b2b.jpeg%3Fsha%3Da6302ac2f921c50b2eca626c3fd9a15cb7d597f1)

지금까지 테스트한 것을 확인해보면 **효율적으로 빈틈없이** 테스트했다.

![done unit test](https://res.cloudinary.com/zenn/image/fetch/s--fqv1fuDI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/699983f906c8079b52e78492.jpeg%3Fsha%3Dc7f2bc10621c1e6e9f524b3341171c1dfef81ada)

다섯 테스트의 실행 시간은 전부 합쳐 **3초**였다.

DB 접속이 ItemCheckTest에만 발생하지 않아서이다.

### 특별한 라이브러리는 필요없다

물론 제대로 된 걸 잘쓰면 강력한 테스트를 간단히 하지만, 그 또한 본질은 DI이다.

Interface와 new만 잘 쓰면 충분히 구사할 수 있는 테크닉이므로, 평소에 **mock**을 가까이 다루면서 설계가 하면 좋을거라 생각한다.
