---
slug: playwright-tutorial
title: Playwright 사용기
authors: rewrite0w0
tags: [test, playwright, 감상]
---

e2e 테스트 라이브러리가 여럿있지만, [Playwright](playwright.dev/)가 궁금해서 사용했다.

## 시작

```bash
npm init playwright@latest
```

## 자동생성

```bash
npx playwright codegen --save-storage=auth.json "url"
```

## 테스트

### 1. playwright로 test

`tests` 폴더 내에 `*.spec.js`로 테스트 저장

이렇게하면 인증을 여러 개 할 수 있음

```js
const { test } = require('@playwright/test');

test.use({ storageState: 'adminStorageState.json' });

test('admin test', async ({ page }) => {});

test.describe(() => {
  test.use({ storageState: 'userStorageState.json' });

  test('user test', async ({ page }) => {});
});
```

```bash
npm run playwright test --headed
# or
npx playwright test --headed
# --headed는 headless: false
```

### 2. node로 test

`*.js`로 저장

```js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({ storageState: './auth.json' });
  // 인증정보 사용

  // Open new page
  const page = await context.newPage();

  await page.goto('url');

  // 요소 찾기 & 새로고침
  async function attrChecker() {
    let status = await page.$('document.querySelector() 느낌으로 속성 선택');
    if (status !== null) {
      Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }),
        page.locator('위와 같은 속성').click(),
      ]);
    } else {
      console.log('retry');
      await page.reload();
      attrChecker();
    }
  }

  await attrChecker();

  // ---------------------
  await context.close();
  await browser.close();
})();
```

즉시 실행 함수이므로

```bash
node ./*.js
```

실행가능

#### 만약 cron 같은 것과 조합한다면

```js
module.exports = async() => // ...
```

즉각 함수 해제하며 보내줘야 cron 예약에 맞춰 사용 가능

## 읽을거리

- https://playwright.dev/
