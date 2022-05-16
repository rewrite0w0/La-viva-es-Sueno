---
slug: 2022-05-16-realize-flutter3
title: flutter 3 등장
authors: rewrite0w0
tags: [flutter, 번역]
---

> [글](https://www.publickey1.jp/blog/22/flutter_3fluttermacoslinuxmac.html)

## flutter로 macOS, Linux 애플리케이션 개발이 정식판에. Mac 유니버설 바이너리도 가능

Google I/O 2022 기조연설에서 Flutter 3 [발표가 있었다](https://medium.com/flutter/introducing-flutter-3-5eb69151622f).

:::note
Introducing Flutter 3 at #GoogleIO!

    Now featuring:

    Stable support for macOS and Linux apps
    Improved @Firebase integration
    ...and much more!

    Details here → https://t.co/7PLgfRBobE
    https://pic.twitter.com/XYzmCn3NYN
    — Flutter (@FlutterDev) [May 11, 2022](https://www.publickey1.jp/blog/22/flutter_3fluttermacoslinuxmac.html)

:::

2월에 나온 Flutter 2.10에서 Windows 애플리케이션 개발이 공식화 되었는데, 이를 이어 Flutter 3에서는 Mac, Linux도 가능해졌다.

참조: [Flutter for Windows](https://www.publickey1.jp/blog/22/flutter_for_windowsflutter_210iosandroidwebwindows.html)

즉, 하나의 Flutter 3 코드로 Android, iOS, Web, Windows, Mac, Linux 6개의 플랫폼 애플리케이션이 가능해졌다.

Mac은 Apple 실리콘와 인텔 프로세스를 지원하며,유니버설 바이너리 생성도 가능.

Flutter 프로덕트 디렉터 Tim Sneath씨는 Flutter 3가 단순히 싱글 코드로 각 플랫폼 UI를 만드는 것 뿐이 아니라 각 플랫폼을 활용할 수 있는 기능을 준비할 수있도록 다음과 같이 말했다.

> 조작 모델, 빌드 지원, 접근성, 국제화, 플랫폼 고유의 기능 통합 등을 실현해 어떤 플랫폼에서도 유저 인터페이스나 로직을 공유하며 그 기반으로 OS 기능을 활용 가능하다

### Material Design 3 대응이나, Firebaset와 통합도...

Flutter 3에서는 Material Design 3 대응도 거의 완성.

FireBase, Flutter를 통합하는 "Firebase plugin for Flutter"도 1.0가 되었으며, UI 위젯도 제공되는 등 통합 지원도 발표되었다.

또한 Flutter로 게임 개발을 쉽게할 수 있도록 템플렛이나 모범사례를 포함하는 "Casual Game Toolkit"도 발표되었다.

## 볼거리

- https://www.youtube.com/watch?v=nP-nMZpLM1A
- https://blog.google/products/maps/three-maps-updates-io-2022/
- https://zenn.dev/reinf0rce/articles/88f3cf377de9ac
- https://zenn.dev/umi_mori/articles/5e49f437387a0c
