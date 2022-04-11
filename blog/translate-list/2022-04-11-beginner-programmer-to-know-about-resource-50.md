---
slug: beginner-programmer-to-know-about-resource-50
title: 모든 초보 프론트엔드 엔지니어가 읽었으면 하는 자료 50
authors: rewrite0w0
tags: [frontend, mindset, 번역]
---

> [글](https://qiita.com/suzu-4/items/ea5d802cb0ad16682ae2)

## 머리말

최근 Web은 SPA 기술 중심으로 프론트엔드가 활발하네요.💪

종래의 서버사이드를 다루던 사람도 프론트를 건들 기회가 늘어났거나, 이제부터 프로그래밍을 배울 사람도, 프론트 엔드 영역에 흥미를 갖고 있을 것이라 생각합니다.

그래서, 프론트엔드 경험이 없는 분이나, 초보자 대상으로 추천하는 문서, 공부할 영역을 정리했습니다.

우선 움직이면 장땡이라는 수준에서 한 발 더 나아가, 프론트엔드 엔지니어로 좋은 앱을 만들기 위해 필요한 지식을 얕게 넓게 소개하겠습니다.

@보충

초보라 적었지만, 실제로 신입이나 미경험자가 아니라 입사후 2~3년 정도 되는 젊은 엔지니어나 프론트 분야에 미숙한 백엔드 엔지니어를 대상으로 합니다.

몇일만에 다 보는 것이 아니기에, 이정표, 스킬세트의 하나로 참조해주시면 좋겠습니다.

## 프론트엔드 입문

### 공식문서를 알자.

https://v3.ko.vuejs.org/guide/introduction.html

하나의 예로 Vue를 붙었지만, Vue에 제한되는 것이 아니라, 신뢰할 수 있는 정보를 얻는 습관을 몸에 익히는 것은 중요합니다.

특히 Vue.js은 이전에 JQuery, Rails, PHP 같이 기술에 밝지 않는 분이 적은 글이 많다 느끼므로, Vue를 제대로 아려면 공식문서를 제대로 봅시다.

### 언어를 알자

#### JS를 알자.

https://jsprimer.net/basic/introduction/

지금 JS를 배우는데 굳이 특별한 이유가 있는 것이 아닌이상, ES5 이후의 문법을 보는 것이 좋습니다.

js-primer는 ES5 이후의 JS 알기 위해 멋진 문서입니다.

#### 옛날 JS도 조금은 알자

https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures

데이터 은닉, 캡슐화를 구현하는데에 쓰는 테크닉입니다.

지금은 JS 작성할 때 신경쓰는 경우가 적겠습니다만, 알아두면 좋습니다.

https://www.yunabe.jp/docs/javascript_class_in_google.html

ES 이전 옛날 JS으로 적으면 안되는 경우, 다시 한 번 읽으면 좋은 문서입니다. 베스트 프락티스 중 하나입니다.

옛날 JS도 제대로 알고 싶다면, [JavaScript: The Good Parts]이나 [개안! JavaScript] 서적을 읽는 것을 검토해주십시오.

상기한 서적을 읽으며, Douglas, John Resig, Substack를 아는 것으로, 선배 프론트엔드 엔지니어의 호감도가 올라갈 확률이 올라갑니다.

#### 비동기처리를 알자.

http://azu.github.io/promises-book/

비동기처리는 초보자에게 큰 벽의 하나입니다만, 제대로 Promise 오브젝트를 이해하는 것은 JS에서 필수입니다.

ES2017에 추가된 Async 함수는, Promise를 반환하는 함수이므로 Promise를 안다면 금방 이해할 수 있습니다.

Promise를 이해했다면, Asyncjs 같이 라이브러리로 복잡한 비동기처리를 구현하거나, RxJS 처럼 라이브러리를 사용해 Promise 이외의 비동기를 취급하는 방법을 배우면 좋을 것입니다.

#### HTMLLivingStandard & ECMAScript를 알자

https://html.spec.whatwg.org/multipage/

https://www.ecma-international.org/publications/standards/Ecma-262.htm

성서. HTML, JS 언어의 사양이 적혀있습니다.

여담으로 저희 팀은 구현에 문제가 생길 때, 육법전서처럼 사용하고 있습니다.

@저는 전체의 3% 정도 읽었습니다만, 제대로 읽었다는 느낌으로 대화합니다 ㅋ

#### 코딩규약을 알자

https://qiita.com/mysticatea/items/f523dab04a25f617c87d

https://qiita.com/soarflat/items/06377f3b96964964a65d

지금부터 프론트엔드를 배울 모두에게 일단 Lint와 코드 포맷터 도입을 권장합니다.

Lint로는 eslint, stylelint, 코드 포맷터는 prettier가 기본입니다.

이용하는 방법은 어떻게 해도 좋겠습니다만, 우선은 룰을 준비하는 것이 중요합니다.

### UI를 알자

#### 모션 그래픽이나 인터랙션을 알자

https://goodpatch.com/blog/ui-micro-interaction/

마이크로인터랙션은 디자니어 일이라는 의식이 있습니디만, 특수한 예외발생시에 유저에게 적절한 피드백을 줘야한다 느끼는 엔지니어가 좋다 생각하므로, 왠만하면 프로그램적으로 예외와 UI적 예외(피드백) 양쪽을 다 아는 자세가 중요하다 생각합니다.

#### 마테리얼 디자인을 알자.

https://material.io/design/

Google 공식 디자인 가이드입니다. 영어 문서지만, 그래픽 중심이므로 읽기 좋습니다.

#### 아토믹디자인을 알자

https://ygoto3.com/posts/atomic-design-on-actual-project/

React, Vue를 사용할 때 컴포넌트 분할 정도를 아토믹디자인을 활용하는 케이스가 있습니다.

아토믹 디자인을 고집할 필요는 없습니다만, 컴포넌트를 어떻게 분할할까 디자이너와 교류해 검토하는 것도 중요하다 생각하므로, 기반으로 아토믹디자인은 유용하다 생각합니다.

### accessibility를 알자

#### 세멘틱을 알자

https://developer.mozilla.org/ko/docs/Learn/Accessibility/HTML

https://developer.mozilla.org/ko/docs/Learn/Accessibility/CSS_and_JavaScript

세멘틱한 코딩을 하면 accessibility 뿐 만이 아니라, SEO에서도 장점이 있습니다.

#### ARIA를 알자

https://developer.mozilla.org/ko/docs/Learn/Accessibility/WAI-ARIA_basics

가능하다면 네이티브 HTML에 해결하고, 필요할 때 사용하는 것을 추천합니다.

업무 앱 같은 곳에서는 이용할 수 있는 브라우저 제한이 생겨, 더욱 복잡한 UI에서는 활약할 기회가 있을지도 모릅니다.

### SEO를 알자

#### 그분을 알자

https://support.google.com/webmasters/answer/35769?hl=ko

우선 그분의 말을 따릅시다.

저는 매일 밤, "Google은 신"이라 3회 복창하고 잡니다.

#### 구조화 데이터를 알자

https://developers.google.com/search/docs/data-types/article?hl=ko

담당 업무영역으로 구조화 데이터를 설정하는 것이 필요할 수도 있습니다.

SEO와 직접관계는 없지만, GA이나 datalayer를 제대로 설정하는 것도 프론트에서는 중요합니다.

### 브라우저를 알자

#### 브라우저의 구조를 알자.

https://www.html5rocks.com/ko/tutorials/internals/howbrowserswork/

꽤 깁니다만, 다른 나라의 문화를 알자는 기분으로, 브라우저는 이렇게 생겼구나 읽는 것을 권장합니다.

#### 디바이스 혹은 브라우저의 특성을 알자

https://caniuse.com/

프론트엔드의 괴로운 점은, 코드 실행 환경(브라우저)가 무수히 많다는 것입니다만, JS, CSS 환경으로 실행이 가능한지 확인할 수 있습니다.

JS에 관해서 IE11등에서 ES2015 이후 기능을 사용하는 babel-polyfill 도입을 검토합시다.

#### Thread를 알자

https://nhiroki.jp/2018/05/07/off-the-main-thread-api

JavaScript에는 메인스레드(=UI스레드)가 하나 밖에 없으므로, 그냥 적으면 비동기처리가 있어도 싱글스레드로 실행됩니다.

무거운 처리(UI적으로 덜컹거리는) 멀치 스레드 실행하기 위해서, Web Worker의 이용을 생각해봅시다.

#### JIT를 알자

https://dev.mozilla.jp/2017/05/%E3%82%B8%E3%83%A3%E3%82%B9%E3%83%88%E3%83%BB%E3%82%A4%E3%83%B3%E3%83%BB%E3%82%BF%E3%82%A4%E3%83%A0-jit-%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%81%AE%E3%82%AF%E3%83%A9%E3%83%83%E3%82%B7/

https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/

(어려워서 모르겠지만) 모던 브라우저 실행시 최적화를 하기위해 컴파일을 합니다.

이미 같은 타임으로 호출된 타입을 가정하므로, 저같은 일반 프로그래머에게는 타입을 의식하며 개발을 유의하는 것으로 JIT 은혜를 향수할 가능성도 있습니다.

눈치채신 분도 계시겠지만, TypeScript와 상성이 좋습니다.

### 보안을 알자

#### DOM Based XSS를 알자

https://gihyo.jp/dev/serial/01/javascript-security/0006

모던 프론트 프레임워크를 사용하는 경우 의식하지 않을지도 모르겠습니다만, JS초보자는 한 번 읽어둡시다.

#### CORS를 알자

https://developer.mozilla.org/ko/docs/Web/HTTP/CORS

CORS를 이해해서 클라이언트와 서버를 구현하면, HTTP를 대하는 이해도 깊어지므로 추천드립니다.

#### CSRF 취약성과 jwt를 알자

https://techblog.yahoo.co.jp/advent-calendar-2017/jwt/

jwt(json web token)은 OAuth 2.0 이라는 인가를 담은 엑서스토큰을 채용하는 등 널리 사용되고 있습니다.

CSRF이라는 나쁜 취약성이 존재하는 것, 그 대책의 하나로 redirect_uri 제한이 가능한 jwt가 존재하는 것을 이해하는 것으로 OK입니다.

Google이나 Facebook 같이 대표적 OpenID Provider는 state에 redirect_uri를 포함해 uri의 화이트리스트를 대조하는 것이 필수라 생각됩니다.

### 테스트를 알자

#### 단위 테스트를 알자

https://jestjs.io/docs/ja/getting-started

React은 물론 Vue에서도 사용할 수 있는 Jest를 추천합니다.

단지 프론트엔드의 테스트는 베스트 프락티스가 없으므로, 하기하는 테스트를 하는 것을 우선 검토합시다.

http://akito0107.hatenablog.com/entry/2018/08/27/190333

어쩌면 당신에게 필요한 것은 단위테스트가 아니라, TypeScript일지도 모릅니다.

#### E2E테스트를 알자

https://techblog.lclco.com/entry/2018/06/28/080000

프론트엔드가 주체적으로 하는 E2E로 Puppeteer가 기본이라 생각합니다.

단위 테스트에도 적었습니다만, E2E 운용도 쉽지않으므로 무엇을 테스트할지 제대로 계획합시다.

#### 대표적 UI 테스트를 알자

https://qiita.com/masaakikunsan/items/dad8d84807918f3a43cb

storybook를 사용하므로, 재이용성, 테스트용이성이 상향됩니다.

구현이나 관리가 힘드므로, 소규모 팀에서 선택은 비용이 있을 가능성도 있습니다.

### 데이터 스토어를 알자

#### cookie를 알자

https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies

사양이 복잡하지만, 제대로 사용하기 위해서 제대로 이해합시다.

브라우저 유저 고유정보에 따라 서버에서 주고 받는 것이 되는 유일한 스토리지입니다.

혹은 브라우저만으로 다룰 수 있는 Web Storage도 존재합니다.

서버와 주고 받는 것이 없다면 이쪽이 좋습니다.

https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API#Web_Storage_concepts_and_usage

HTTP 헤더를 이용할 필요도 없이 브라우저만으로 끝나므로, 다루기 쉽습니다만, 외부 서비스의 JS 취득가능한 영역에 개인정보를 두지맙시다.

#### NoSQL

https://firebase.google.com/docs/database/ios/structure-data?hl=ko

링크에는 Firebase의 Realtime Database가 있습니다만, Mysql 같이 RDB 설계방법과 전혀 다릅니다.

@Cloud Firestore 설계는 상기한 베스트 프락티스와 다릅니다.

Cloud Firestore나 DynamoDB 신세대의 우수한 데이터스토어는 지금까지 백엔드 디자니어가 세운 설계가 통용하지 않아 운영이 어려다는 것이 논의되는 중입니다.

https://qiita.com/funasaki/items/6cdc8f7f7b709e5e601f

한 편, 많은 네이티브 앱 엔지니어가 운용하고 있으므로, UI에 가까운 입장인 프론트엔드에게는 비교적 자연스럽게 다룰 수 있는 데이터스토어라 생각되므로 다뤄보는 것을 추천드립니다.

## 모던 프론트엔드

### Flux와 가상 DOM을 알자

https://qiita.com/mizchi/items/4d25bc26def1719d52e6

Qiita 역사에서 가장 눈부신 명문.

어째서 Vue나 React가 이렇게 중요한 위치를 점유하는지 그것에 대해 쓰여있습니다.

사적인 여담입니디만, 좌우도 모르는 신입엔지니어 당시에 이 문서를 읽어 전혀 내용을 이해하지 못했습니다만, 이 필자의 무엇에 흥분하고 있는지 흥미가 생겨, React를 배운 배경이 있습니다.

### 언어를 알자

#### TS를 알자

https://www.typescriptlang.org/docs/home.html

기회가 있을 때마다 TypeScript가 언급됩니다만, 지금부터 JS 프로젝트를 시작하는 경우, 어떤 경우에도 TS 사용을 권장합니다.

여기에 이론은 없습니다.

### React, Vue를 알자

https://ko.reactjs.org/docs/getting-started.html

우선 React, Vue 어느 쪽이든 배웁시다.

현시점에는 TS 상성은 React가 좋습니다.

Vue3 릴리스 되면 Vue에서도 TSX가 네이티브 지원되어 해소된다 생각됩니다.

개인적으로는 Vue의 쌍방향과 단방향 데이터 바인딩 조합 기술이 편리하다 생각하다, 이상하다 생각하다에 따라 Vue, React 어느 쪽을 고를지가 정해진다 생각됩니다.

#### CSS in JS를 알자

https://qiita.com/taneba/items/4547830b461d11a69a20

styled-components 선택하는 경우가 많습니다.

CSS in JS 싫어하는 사람도 있습니다만, 컴포넌트 단위에서 인터페이스나 인터랙션을 정의하는 시대에는 이것이 옳다 생각합니다.

### 아키텍처를 알자

#### CDN를 알자

https://speakerdeck.com/sisidovski/nikkei-itpro-cdn

릴리스 당시 업계에서 입에 오른 닛케이전자판 CDN를 중심으로 한 설계이야기입니다.

아무튼 CDN으로 할 수 있는 것이 많으므로, 왜 사용해야하는가, 어떤 것이 가능한가 아는 것이 중요합니다.

#### JAMStack을 알자

https://qiita.com/ossan-engineer/items/4fe0e3e388f510bd5c68

CDN를 우선으로 할 때, 제1 후보 구성입니다.

이 구성을 목표로 한다면 Gatsby, VuePress 같은 FW는 정적사이트 제네레이터(SSG)라 불리는 경우가 많습니다.

#### BFF를 알자

https://www.atmarkit.co.jp/ait/articles/1803/12/news012.html

특히 이글의 멋진 점은, 프론트엔드 담당영역을 명확히 정의하는 것입니다.

사적이 여담이지만, 왜 BFF이라는 생각 방법이 탄생했는가 그 영역을 프론트 엔드가 담당해야하는 것인가, 어렴풋이 이해했던 당시의 저에게도 기술과 철학이 선이 연결되는 감각이었습니다.

#### BBF와 SSR를 알자

https://speakerdeck.com/yosuke_furukawa/ssrfalsehua

SSR도 일종의 BFF로 불립니다만, 어째서 SSR를 해야하는가 확실하게 알기 좋습니다.

과연 일본 Node.js 유저그룹 회장, 월리 아이콘도 귀엽습니다.

아키텍처 보충입니다만, 기존의 기술자산을 활용하기 위해 Rails를 API로 남겨 프론트엔드만 모던하게 하는 케이스도 볼 수 있습니다.

https://speakerdeck.com/fukuiretu/notewonuxt-dot-jsdezai-gou-zhu-sitahua

#### 렌더링을 알자

https://developers.google.com/web/updates/2019/02/rendering-on-the-web

모던한 프론트 엔드의 아키텍처를 렌더링 시점으로 정리한 Google 강좌 페이지.

2019년에 살아있는 모든 프론트엔드는 반드시 봐야합니다.

#### SSR, SSG 구현하는 방법을 알자

https://ja.nuxtjs.org/guide

Nuxt, Next를 자주 듣지만, 영 모르겠다 하는 분들에게 지금까지의 이야기를 읽는 것의 훌륭함을 전달할 수 있는 것은 없을 것입니다.

서버사이드에서 React, Vue가 실행 가능해지므로 SSR가 평범한 모든 엔지니어도 실행가능하게 해줍시다.

Nuxt, Next로 SSG도 가능합니다.

### 퍼포먼스 개선을 알자

#### Service Worker를 알자

https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ko

Service Worker로 사용한 cache를 하는 것으로, 2회 이후의 FCP 등 시간을 대폭 감소시킬 수 있습니다.

이 API를 이용하면, 종래 Web에서 할 수 없었던 Push 통지 등 체험을 제공할 수 있으므로, Service Worker 활용한 Web 앱은 PWA이라고도 할 수 있습니다.

#### lighthouse를 알자

https://developers.google.com/web/tools/lighthouse/?hl=ko

lighthouse를 이용하는 것으로 지금까지 소개한 accessibility, 퍼포먼스로 다룬 항목이 어느 정도로 구현되어있는지 측정할 수 있습니다.

Performance Budget를 알자

https://developers-jp.googleblog.com/2019/03/blog-post_15.html

웹사이트를 속도를 확보하기 위한 수법으로 Performance Budget의 도입을 추천합니다.

상기 소개한 lighthouse 등 조합해 CI 도입하면 좋을 것입니다.

#### Webpack를 알자

https://webpack.js.org/guides/asset-management/

본래 퍼포먼스 항목에 소개할 것은 아닙니다만, Webpack를 제대로 사용하면 Bundle 사이즈가 경감되며, 이에 따른 퍼포먼스 향상이 기대되어 집니다.

가능한 것이 많이 있습니다만, tree-shaking, code-splitting를 먼저 생각해봅시다.

Webpack은 범용적인 지식은 아니며, vue-cli, Nuxt의 API 랩퍼를 하면 다루지 않아도 됩니다만,

현시점에서 시작하는 프론트엔드가 힘쓸 분야라 생각합니다.

#### 에셋 최적화를 알자

https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/?hl=ko

이미자는 CDN에서 뿌리는 것이 스탠다드이며, 그럼 CDN 상에 이미지를 최적화는 어떻게하는거야의 베스트 프락티스입니다.

Google이 개발한 모단한 이미 포멧이기도한, webp도 소개됩니다.

### 여기까지 총정리로 서버리스를 알자

https://qiita.com/jshimazu/items/e102cde5124609384d0c

https://inside.dmm.com/entry/2018/11/06/nuxt2-pwa-gae-se

지금까지 이야한 것을 꾹꾹 눌어담은 내용으로, 각 인프라의 관리 비용을 적게하는 형식으로 서버리스의 Netlify, GAE를 사용한 구성입니다.

SSG, SSR를 서버리스로 움직이는 현재, 베스트 프락티스의 하나라 생각합니다.

@저희 회사에서는 전문 인프라 팀이 있으므로 실제로는 PaaS 같은 서버리스 채용하는 적습니다만, 많은 팀, 개인에게 유용하다 생각합니다.

## 마지막으로

Google이나 AWS 인프라 엔지니어의 힘을 빌리는 것이 가능한 지금, 프론트엔드 엔지니어는 자신만의 힘으로 좋은 Web 서비스를 실현할 수 있게 되엇습니다.

아는 것도, 해야하는 것도, 끝없이 쌓여있습니다만,

모두 Web를 조금이라도 더 좋은 세계로 만듭시다.
