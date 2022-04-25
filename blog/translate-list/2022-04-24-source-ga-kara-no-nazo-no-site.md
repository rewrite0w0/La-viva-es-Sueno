---
slug: 2022-04-24-source-ga-kara-no-nazo-no-site
title: 소스가 비어있는 의문의 사이트 therickroll.com
authors: rewrite0w0
tags: [HTTP, 번역]
---

> [글](https://qiita.com/sevenc-nanashi/items/d4846e7f72746b0b5725)

https://therickroll.com/

이런 사이트가 있습니다. 여기에 접속하면...

![Never gonna give you up](https://camo.qiitausercontent.com/bcc1f6cc093250c6f9f5db76bc024e96ac9da58f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f63306165333463392d663937652d633932372d316134622d3137323933626138363635632e706e67)

> Chrome/Edge 환경에서는 아무것도 보이지 않습니다. Firefox를 사용해주세요.

![chrome](https://camo.qiitausercontent.com/c35bb36f1f7b9198ff4f27de715301da28686f11/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f32393039346566322d656637612d613830312d626238362d3665653832653630653564622e706e67)

![edge](https://camo.qiitausercontent.com/d7b9e9071b2654cd1b8628a6fa81fc3a0f2a855d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f37616465666665332d396439612d353830302d623765662d3438323438333731663839612e706e67)

Rickroll 당해서 Youtube에 리다이렉트됩니다만, 이 사이트...

![response nothing](https://camo.qiitausercontent.com/4a8b12c806b89f5cab88f54c623c1bb528e54f13/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f63366634626661642d353332632d383235312d303036652d3364633138313133313464392e706e67)

왜인지 response가 텅 비어있습니다.

뭔지는 몰라도 사이트의 신비한 힘에 의해서 Rickroll되는 것 같습니다.

어떻습니까? 신비한 힘, 굉장하지 않습니까. 감사합니다.

## 술책 공개

죄송합니다.

이제부터 제대로 적겠습니다.

먼저 `https://therickroll.com/`를 조사해봅시다.

![https https://therickroll.com/](https://camo.qiitausercontent.com/3bdd852215c89842a4840ca1aa58542e9a898aaa/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f33363731626561642d306461632d663935392d363366352d3564643338636139316162362e706e67)

(repl.it에 호스트되어 있구나...)

수상한 헤더가 몇 있네요.

```diff
HTTP/1.1 200 OK
CF-Cache-Status: DYNAMIC
CF-RAY: 6ff556570fa88391-KIX
Connection: keep-alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 21 Apr 2022 10:11:44 GMT
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=GrBx1yPeepXgmC80kPvO%2FJifLZdr00XV4tNbsjbYvSKd15G0RHWyQszRg%2BvFSobq7vn%2BH6bHyy%2BJghZllmYCF9fA5OM9%2B89Fnv1eDfJoU4esecj1xZBDh9yaCOviUXPn8WTvTDd3h4D1fijkvqk%3D"}],"group":"cf-nel","max_age":604800}
Server: cloudflare
Transfer-Encoding: chunked
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
expect-ct: max-age=2592000, report-uri="https://sentry.repl.it/api/10/security/?sentry_key=615192fd532445bfbbbe966cd7131791"
+link: <style.css>; rel=stylesheet;
+refresh: 5; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ
replit-cluster: hacker
```

`link` 헤더를 조사해보면,

> HTTP의 Link 엔티티 헤더 필드는 HTTP 헤더 안에 하나 이상의 링크를 시리얼화하는 수단을 제공합니다. 의미적으로는 HTML 요소와 동등합니다.
>
> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link

Link 헤더로 style.css를 적용한 것 같습니다.

style.css를 살펴보면,

```diff
/* ... */
head {
+  display: block;
+  background-image: url(https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif);
  height:20rem;
  width:20rem;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid #fff;
  border-radius: 10px;
  border-style: dashed;
}

body::before {
  display: inline-block;
  padding-top: 3rem;
+  content: "Never gonna give you up...";
}
```

head를 보이는 요소를 추가하는 느낌. head에 `display: block`를 사용할 수 있었군요.

다음은 `refresh`...에 가고 싶지만,

![page not found](https://camo.qiitausercontent.com/141eb7c5a61a210bdcde11c72c72f1053e154707/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f30396364356166312d646431332d366266662d383430622d6534373961386632656166362e706e67)

MDN에 없네요. `html refresh header`로 조사하니 MDN의 meta 태그가 검색되었습니다.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

`http-equiv`가 HTTP 헤더 이름이므로, `Refresh` 헤더에서 리다이렉트 되는 것 같습니다.

테스트로 Sintra로 간단히 서버를 만들어보면,

```python
require "sinatra"

get "/" do
  headers "Refresh" => "5; URL=https://example.com"
  "Hi!"
end
```

![redirect using Refresh](https://camo.qiitausercontent.com/6243e48839ce4ce3c96f6e386bb3377c576fce54/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3635393839342f38333937633436382d343132612d343830382d353032662d6161363333306161356237662e676966)

리다이렉트됐습니다.

## 결론

- CSS나 리다이렉트 처리는 HTTP 헤더에서 일어나고 있다.
- head를 보여주며 레이아웃을 만들고 있다.
- MDN 있지 않은 `Refresh` 헤더가 있었다.
- (4/22 추가) `Link` 헤더는 Firefox 이외에서는 동작하지 않는다.

감사합니다. 글이 좋았다면 [이 영상을 봐주세요](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
