---
slug: 2022-05-04-github-disabled-git-protocol
title: GitHub가 git://를 무효화한 것에 대해
authors: rewrite0w0
tags: [github, 번역]
---

> [글](https://blog.web-apps.tech/github-disabled-git-protocol/)

## TL;DR

Github에서 git 프로토콜(`git://github.com`로 시작하는 URL)로 git clone하는 설정으로 되어 있는 사람은 SSH 프로토콜(`git@github.com`로 시작하는 URL)를 사용하도록 설정 변경합시다.

---

wez/wezterm 단말 에뮬레이터를 알고 사용해봐야지 생각해, 문서에 따라 `brew tap`를 했을 때입니다. 이런 에러가 발생해서 tap 할 수 없었습니다.

```bash
$ brew tap wez/wezterm
==> Tapping wez/wezterm
Cloning into '/opt/homebrew/Library/Taps/wez/homebrew-wezterm'...
fatal: remote error:
  The unauthenticated git protocol on port 9418 is no longer supported.
Please see https://github.blog/2021-09-01-improving-git-protocol-security-github/ for more information.
Error: Failure while executing; `git clone https://github.com/wez/homebrew-wezterm /opt/homebrew/Library/Taps/wez/homebrew-wezterm --origin=origin --template=` exited with 128.
```

[지정된 글](https://github.blog/2021-09-01-improving-git-protocol-security-github/)을 읽으면 `git://`으로 시작하는 URL에서 접근 === git 프로토콜로 접근이 무효화된 듯합니다.

[자신의 <코드>.gitconfig</ 코드>를 보면](https://github.com/nasa9084/dotfiles/blob/2aa844041a6ec45ae08d73ba850ecedb68e0eb89/.gitconfig), https://github.com/ 대신 git:github.com를 사용하는 설정이었습니다.

```git
[url "git@github.com:"]
	pushInsteadOf = git://github.com/
	pushInsteadOf = https://github.com/

[url "git://github.com/"]
	insteadOf = https://github.com/
```

Github에 의하면 계속 git 프로토콜 접속은 읽기 전용이었던 것 같습니다만, 명확히 pushInsteadOf에서 [git@github.com](git@github.com)를 사용하는 설정까지 적혀있으므로, 지금까지 문제없이 사용할 수 있었던 것 같습니다. 저 자신도 왜 이런 설정을 했는가 기억이 없으므로 이는 단순하게 SSH 프로토콜을 사용하면 될 뿐인가 싶어서 [변경했습니다](https://github.com/nasa9084/dotfiles/blob/a55ab8c0d44bbda1d9fff398ac3e3a69a79be274/.gitconfig).

```git
[url "git@github.com:"]
	insteadOf = https://github.com/
```

GitHub 상정대로 어차리 read-only이므로 사용하는 사람은 거의 없을 것이기에 딱히 여기에 해당되는 사람은 없겠다만 메모해두겠습니다.
