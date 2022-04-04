---
slug: md-in-github
title: markdown 메모
authors: rewrite0w0
tags: [markdown, 감상]
---

# markdown 메모

> GitHub 기준으로 다른 것 설치없이 작동하는 MarkDown 문법

## 구획 제목

```md
# h1

## h2

### h3

#### h4
```

## 목록

```md
- Hello
- Hola!
  - Bonjour
  * hi
```

## 번호 목록

```md
1. first
2. second
```

## 링크

```md
[텍스트](URL)
```

## 이미지

```md
![alt 텍스트](이미지 url)
```

## 테이블

```md
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

## 코드블록

````md
```언어
코드
```
````

```js
console.log('hello world?');
```

#### diff

````md
```diff
@@ -4,6 +4,5 @@
+    const foo = bar.baz([1, 2, 3]) + 1;
-    let foo = bar.baz([1, 2, 3]);
```
````

```diff
@@ -4,6 +4,5 @@
+    const foo = bar.baz([1, 2, 3]) + 1;
-    let foo = bar.baz([1, 2, 3]);
```

## 인용

```md
> 인용문
>
> 인용문
```

> 인용문
>
> 인용문

## 주석

```md
Hello[^1], World[^2]

[^1]: Hello 주석
[^2]: World 주석
```

Hello[^1], World[^2]

[^1]: Hello 주석
[^2]: World 주석

## 구획선

```md
---
```

---

## 인라인스타일

```md
_이탤릭_
**볼드**
~~취소선~~
인라인 `code`
```

_이탤릭_

**볼드**

~~취소선~~

인라인 `code`

## 인라인 주석

```md
<!-- 주석입니다. -->
```

## 작업 목록

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
