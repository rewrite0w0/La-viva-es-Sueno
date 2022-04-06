---
slug: block-FLoC
title: Google Chrome이 권장하는 광고기술 FLoC 정리
authors: rewrite0w0
tags: [privacy, 번역]
---

최근 1-2주간 이미 뜨거웠던 이슈여서 '이제 와서'라는 느낌이 있지만 FLoC에 대해 정리해보겠습니다. FLoC란 서드파티 Cookie 대신 Google이 도입하려 하는 [Federated Learning of Cohorts](https://wicg.github.io/floc/) 혹은 [어째든 개구림](https://github.com/WICG/floc/issues/)입니다.

## FLoC에 대해

### FLoC란?

간단하게 FLoC를 설명하면 유저를 기호별로 그룹핑해서 그룹 ID를 발행, 그것을 광고회사에는 그룹 ID만 전달한다는 것입니다.

예를 들면 '너 레알마드리드 그룹', '너 바르셀로나 그룹' 같이 분류된다는 거죠.

브라우저에서 웹사이트에 전달되는 것은 그룹 ID뿐이므로 그룹 안에 누가 있는지는 특정할 수 없습니다.

나무를 숨기려면 숲에 숨기라는 말처럼요.

### 왜 FLoC가 필요하게 되었을까

앞으로 사용할 수 없는 서드파티 Cookie를 대신할 수단으로 Google이 생각해낸 방법입니다.

### 서드파티 Cookie?

사이트B의 HTML

```html
<script src="사이트A/tracker.js"></script>
```

이렇게 함으로 사이트A가 사이트B의 정보를 수집할 수 있도록하는 방법입니다.

접속분석 등 같이 정당한 목적으로 사용되었을 때야 상관없었습니다만,

점차 이것을 사이트C, 사이트D 등등 많은 사이트에서 횡단적(역주:한 시점으로 최대한 많이 조사)으로 정보를 수집해,

개인을 특정화할 수 있는 구조가 되버렸습니다.

그렇기에 Firefox, Safari, Edge 하물며 IE까지도 2010년대 전반까지는 서드파티 Cookie를 기본적으로 금지하도록 하였습니다.

그러나 그중에서 Chrome만 집요하게 기본값 허용을 집요하게 유지하고 있었습니다만, 최근에 들어 프라이버시 보호하자는 목소리에 못 이겨 기본값을 금지로 하기로 하였습니다.

하지만, 그냥 단순히 금지하면 광고에 의존하는 Google은 죽어버리기에 무엇인가 대체할 것이 필요했습니다.

그렇기에 프라이버시를 지키면서 광고를 할 수 있는 구조로 생각해낸 것이 FLoC입니다.

라기 보다는 타이밍상 대체 수단에 목적이 있었으므로 서드파티 Cookie를 폐지한 것처럼 보여지는 듯한 인상입니다.

FLoC의 문제점

주로 2가지의 문제점이 지적되고 있었습니다.

하나는 서드파티 Cookie 이외의 특정수단의 문제, 다른 하나는 그룹해서 분류하는 아이디어 자체의 문제입니다.

우선 전자부터 다뤄보면, 보여지는 그룹 ID만으로 개인을 특정할 수 없으니 문제가 없다는 것이 Google의 주장입니다.

하지만 지금까지도 Cookie를 사용하지 않고 브라우저 핑거프린트 등의 수단으로 높은 정확도로 특정할 수 있습니다.

즉, 브라우저 핑거프린트와 FLoC를 조합해서 지금보다 더 자신의 성향을 파악 당해버립니다.

또 그룹ID를 사용함으로 [그룹ID:100은 흑인이 많으니 투표저지 광고를 내자](https://gigazine.net/news/20200929-trump-black-voters/) 혹은 [그룹ID:200은 부유하지 않은 사람이 많으니까 대출광고를 내자](https://gigazine.net/news/20161214-how-internet-keeps-poor/) 같은 유인이 오히려 지금보다 쉬워졌습니다.

만약 **그룹ID:300은 반정부경향이 강해** 이런 정보를 독재정권이 파악하면 이제 어떻게 될까요?

여기에 더해 Google, Amazon, Facebook, Apple, Naver, Kakao 같이 로그인을 해야하는 사이트가 있다면, 애초에 브라우저 핑거프린트를 하지 않아도 완전하게 개인을 특정할 수 있습니다.

자신이 절대 Facebook에 로그인 하지 않겠다 결의한 사람이라 하더라도,

가끔이라도 Facebook에 로그인을 하는 사람과 같은 그룹 ID를 가지고 있는 사람이 있다면 한 번도 로그인하지 않았어도 특정 성향 Facebook에 유출됩니다.

**요점은 서드파티 Cookie를 폐지해, 더 문제가 많은 구조를 도입하려 한다는 것입니다.**

게다가 이 구조는 강자를 더욱 강하게, 약자를 더욱 약하게 되도록 되어 있습니다.

만약에 Amazon같이 거대기업이 대량으로 가지고 있는 판매이력과 그룹 ID를 조합함으로 `그룹ID:400은 축구 용품만 구매하네`, `그룹ID:500은 테니스를 좋아하네` 같이 특정 성향을 파악할 수 있게 됩니다.

이런 그룹 ID에 타겟팅 광고를 함으로, 처음 방문한 사람인데도 불구하고 어째서인지 적절한 추천이 게시되어, 그것에 휩쓸리게 되버린다는 것입니다.

반대로 중소규모의 판매 사이트는 판매이력이 적기 때문에 그룹 ID와 특정 성향의 조합이 약할 수 밖에 없으며, 적절한 추천을 할 수 없어져서 손님이 점점 적어지게 됩니다.

판매 사이트는 이런 식입니다만, 검색사이트는 어떻게 될까요?

당연히 Google의 독무대가 되어, 전세계에서 자동으로 그룹 ID와 검색어 세트가 Google에게 보내집니다.

Google은 서드파티 Cookie를 사용하지 않더라도, 전세계를 더욱 더 정확하게 구분한 특정 성향 그룹리스트를 만들 수 있게됩니다.

반대로 다른 검색 사이트나 분석 서비스는 서드파티 Cookie가 배제됨에 따라 지금보다 더 질이 낮은 데이터 밖에 얻을 수 없게 됩니다.

결과적으로 Google은 광고시장에서는 압도적 우위와 지위에 섭니다.

**[즉, FLoC는 Google의 시장지배를 강화하기 위해서 경합을 배제하는 구조입니다.](https://gigazine.net/news/20210310-oracle-google-privacy-sandbox-floc/)**

## 각 브라우저의 대응

### Vivaldi

Vivaldi는 [FLoC를 허용하지 않는다](https://vivaldi.com/blog/no-google-vivaldi-users-will-not-get-floced/) 단언했습니다.

### Brave

Brave도 [FLoC를 허용하지 않는다](https://brave.com/why-brave-disables-floc/) 밝혔습니다.

애초에 Vivaldi와 Brave는 광고를 반대한다는 입장에서부터 만들어진 것이기에 FLoC를 금지하는 것은 당연한 것으로 보여집니다.

### Firefox

Firefox의 공식성명은 없었습니다.

다만, 인터뷰에서 [지원하지 않는다](https://digiday.com/media/browser-makers-now-including-mozillas-firefox-are-already-ditching-googles-proposed-cookieless-ad-targeting-method-floc/) 발언했습니다.

### Edge

Edge도 공식성명은 없었습니다.

다만 옵션에서 FLoC를 유효로 바꾸어 Edge를 기동해도 FLoC를 사용할 수 없었다 합니다.

기사의 저자는 Edge가 의도적으로 FLoC를 무효화 시키지 않았을까 상상하고 있습니다.

하지만 실제로 MS에 물어봐도 명확한 대답은 얻을 수 없습니다.

역으로 [MS의 광고전략인 PARAKEET를 권유받았다](https://github.com/WICG/privacy-preserving-ads/blob/main/Parakeet.md) 합니다. 여담으로 MS의 답변은, 다른 기사에서도 [완전히](https://www.zdnet.com/article/brave-browser-disables-googles-floc-tracking-system/) [같은](https://www.theverge.com/2021/4/16/22387492/google-floc-ad-tech-privacy-browsers-brave-vivaldi-edge-mozilla-chrome-safari) 답이었습니다.

### Opera

Opera도 공식성명은 없었습니다.

인터뷰에서 [지금은 도입할 예정이 없다](https://www.theverge.com/2021/4/16/22387492/google-floc-ad-tech-privacy-browsers-brave-vivaldi-edge-mozilla-chrome-safari) 답했습니다.

### Safari

Safari도 공식성명은 없었습니다.

엔지니어가 개인적으로 [예정은 없다](https://twitter.com/johnwilander/status/1381699191609561088) 발언한 적은 있습니다만, 공식성명은 아닙니다.

하지만 개인적으로는 Apple의 태도로 보았을때 도입하지 않을 것이라 생각합니다.

애초에 Apple은 광고수익에 의지할 필요도 없으니깐요.

**결국 Chrome 이외의 주요한 브라우저는 전부 FLoC에 반대하는 입장이며 FLoC가 도입될 가능성도 상당히 낮아 보입니다.**
**하지만 Chrome이 브라우저 점유율의 과반수를 쥐고 있기에, 독단적으로 도입해도 꽤 효과가 있어 보입니다.**
**일반인은 FLoC 존재 자체를 모르며(역주: 부끄럽지만 번역하는 저 또한...), [옵트아웃](https://ko.wikipedia.org/wiki/%EC%98%B5%ED%8A%B8%EC%95%84%EC%9B%83)이라는 개념도 없으니깐요.**

## 브라우저 외의 대응

### 전자 프론티어재단

FLoC 반대가 여기에서부터 시작되었으며, 이렇게 퍼진 것은 이유도 아마 EFF가 2021/03/03 에 발표한 [Google's FLoC Is a Terrible Idea](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea)가 시발점일 것입니다.

### DuckDuckGo

[Chrome 확장기능](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg)에 [FLoC 무효화](https://spreadprivacy.com/block-floc-with-duckduckgo/)를 추가했습니다.

### WordPress

WordPress에 [기본값으로 비대응한다는 보안 업데이트 Proposal이 제출](https://make.wordpress.org/core/2021/04/18/proposal-treat-floc-as-a-security-concern/)되었습니다.

아직 Proposal이기 때문에 도입된다 결정된 것도 아니며, 보안 업데이트로 취급하는 것 또한 뭔가 이상하다는 느낌이 있기에 차단 기능 도입 자체는 찬성하는 분위기입니다.

단순히 소프트웨어 대응이므로 나중에 어떻게 될지 모르지만, 최대의 점유율을 가지고 있는 소프트웨어가 FLoC반대 편에 있는 것 자체로도 꽤 큰 영향을 끼치겠죠.

또한 [FLoC를 금지하는 플러그인이 이미 여러 개](https://wordpress.org/plugins/search/FLoC/) 존재합니다.

### Oracle

[Google은 텐프로를 경영하면서 성가대에 들어가려 한다](https://www.oracle.com/news/announcement/blog/google-privacy-sandbox-030721.html)

꽤나 직설적인 발언을 했습니다.

Google은 서드파티 Cookie 같은거 사용하지 않아도 개인정보부터 위치정보, 어플리케이션을 사용상황까지도 다 들여다 볼 수 있으니깐, 프라이버시를 구실로 경쟁사들을 쫓아내 광고시장을 독점하려는 수작으로 밖에 보이지 않는다는 주장입니다.

### 미국 법무부

경쟁사를 배제하는 독점금지법 위반 의혹을 [U.S. Department of Justice](https://www.reuters.com/article/us-tech-antitrust-google-exclusive-idUKKBN2BA10I)가 조사하고 있다합니다.

### 영국 공정거래위원회

영국 공정거래위원회의 CMA가 [프라이버시 샌드박스를 조사](https://www.gov.uk/government/news/cma-to-investigate-google-s-privacy-sandbox-browser-changes)를 발표.

EFF의 기사보다 먼저 2021/01/08에 일어난 일로, 영국 정부는 무척 빠른 반응을 했습니다.

### Google의 주장

2021/04/09: [Privacy-first web advertising: a measurement update](https://blog.google/products/ads-commerce/2021-04-privacy-sandbox-measurement/)

2021/03/30: [Federated Learning of Cohorts（FLoC） 개요](https://web.dev/floc/)

2021/03/30: [Privacy, sustainability and the importance of "and"](https://blog.google/products/chrome/privacy-sustainability-and-the-importance-of-and/)

2021/03/03: [개인정보보호를 보다 우선시하는 인터넷으로 전환하기 위한 노력](https://blog.google/products/ads-commerce/a-more-privacy-first-web/)

2021/03/05: [개인정보보호를 보다 우선시 하는 인터넷으로 전환하기 위한 노력(한)](https://korea.googleblog.com/2021/03/a-more-privacy-first-web.html)

2021/01/25: [Building a privacy-first future for web advertising](https://blog.google/products/ads-commerce/2021-01-privacy-sandbox/)

어떤 기사를 보더라도 FLoC로 인해서 프라이버시는 지켜지면서 타겟팅 광고가 된다는 전제의 주장을 펼치고 있을 뿐입니다.

최근 일어나는 반대의 목소리에 반하는 반응은 딱히 없네요.

## FLoC를 거부하는 방법

### FLoC는 옵트아웃입니다.

유저도 서버도 능동적으로 거부하지 않는 한 FLoC는 유효상태입니다.

그리고 이미 일부 Chrome에서는 은밀히 FLoC가 유효상태로 바뀌어져 있습니다.

그 어떤 통보도 없이요.

유저가 거부하고 싶은 경우에 이하의 대책을 생각해봅시다.

### DuckDuckGo 확장기능을 도입한다

[DuckDuckGo Privacy Essentials](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg)를 설치하는 것이 그 무엇보다 간단합니다.

"Chrome에 추가" 버튼을 누르기만 하면 끝입니다.

DuckDuckGo Privacy Essentials는 검색 URL을 DuckDuckGo으로 바꾸거나 하는 FLoC 이외의 동작에 영향을 주기에 이러한 영향을 받고 싶지 않다면 단기능 확장기능을 찾아보는 것도 좋겠네요. (역주 : 아직은 별로 없습니다)

### Chrome 이외의 브라우저를 사용한다.

상기 했듯이, Chrome 이외의 브라우저는 FLoC를 지원하지 않습니다. 또한 강력한 광고 블록이나 그 외의 여러 이점도 많이죠. 이번 기회에 갈아 타보는 것도 좋은 방법일 것입니다. 하지만 새로운 기능이나 메뉴 같이 이동 비용이 있기에 쉽지만은 않겠지요.

### 유럽으로 이주한다.

[Google Will Not Run FLoC Origin Tests In Europe Due To GDPR Concerns (At Least For Now)](https://www.adexchanger.com/platforms/google-will-not-run-floc-origin-tests-in-europe-due-to-gdpr-concerns/)

GDPR가 무섭긴 무섭나 봅니다.

### 서드파티 Cookie를 차단한다.

서드파티 Cookie가 없어도 개인정보를 얻을 수 있는 것이 FLoC라 생각할 수 있습니다만,

왜인지 서드파티 Cookie를 거부하는 것만으로 FLoC를 무효화할 수 있습니다.

마침 [여러 사이트](https://blog.malwarebytes.com/privacy-2/2021/04/how-to-opt-out-of-the-google-floc-trial/)에서 그 방법을 소개해 줍니다.

이 방법은 확인해 보지 않았기에 실제로 어떤지는 모르겠습니다.

설정 => Cookie 검색 => Cookie와 그 외 사이트 => 서드파티 Cookie 무효

이 방법으로 FLoC를 무효화 할 수있습니다.

### 프라이버시 샌드박스를 차단한다.

프라이버시와 설정에서 [최하단으로 가보면 프라이버시 샌드박스 항목](https://forest.watch.impress.co.jp/docs/news/1315651.html)이 있습니다.

(필자는 자신의 브라우저에서는 확인하지 못했습니다.)

(역자가 설치해 둔 Chrome 개발자 브라우저에서는 확인할 수 있었습니다.)

아무튼 이것은 FLoC를 거부합니다. 지금 사용하는 브라우저에 당장 안 보이셔도 언젠가 생길테니 그 때 반드시 거부합시다.

## 서버에서 거부

이건 서버에서 하는 일입니다.

```
HTTP response Header `Permissions-Policy: interest-cohort=()`
```

를 발행하면, 자신의 서버를 FLoC 분석대상에서 뺄 수 있습니다

> 추가

[GitHub Pages: Permissions-Policy: interest-cohort=() Header added to all pages sites](https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites/)

[How to Opt out of Google FLoC in Chrome](https://www.howtogeek.com/724783/how-to-opt-out-of-google-floc-in-chrome/)
