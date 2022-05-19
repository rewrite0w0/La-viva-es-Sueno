---
slug: think-about-personal-developement-architecture
title: 개인개발 / 스타트업이 선택하면 좋을 최강의 아키텍처에 대한 생각
authors: rewrite0w0
tags: [architecture, personal developement, start up, 번역]
---

> [글](https://zenn.dev/yuno_miyako/articles/19201dcb19ff6b6ffc59)

## 결론

![supa architecture](https://storage.googleapis.com/zenn-user-upload/2v2eb15y29ueoa42tgz0x72vmlwx)

- Serverless Framework 사용.
- 프론트엔드는 S3 hosting + CloudFront, SSR도 Lambda@Edge로 가능.
- DB는 RDS를 사용하지 말고, DynamoDB.
- API는 기본적으로 GraphQL, 필요할 때 REST도 간단히 추가가능.

## 배경: 아키텍처에는 절대 정답이 없다

아키텍처에는 절대 정답이 없다.
왜냐면 제품, 단계에 의해서 **필요한 요건**이 변하며, 그것을 고려해서 아키텍처를 생각할 필요가 있기 때문입니다.

예를 들어, 어떤 사건으로 1일 휴장했던 도쿄 증권 거래소 시스템은 **안정성, 신뢰**에 전력을 다해, 400대 서버에 부하 분산을 하거나, 네트워크 분산으로 장애 영향 범위를 국소화하는 아키텍처입니다.

AWS이나 メルカリ(mercari) 같은 기업은 **확장성**이 높고 이노베이션을 계속 일으킬 수 있도록 전체 애플리케이션에 영향을 끼치지 않고 새로운 서비스를 시도 가능한 마이크로 서비스 아키텍처를 사용중입니다.

그럼 개인개발, 스타트업은 어떤 요건을 중시해야할지 생각해봅시다.
[여기](https://www.idaten.vc/post/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%8C%E5%A4%B1%E6%95%97%E3%81%99%E3%82%8B%E7%90%86%E7%94%B1%E3%83%88%E3%83%83%E3%83%9720)에 스타트업이 실패하는 이유 순위가 있습니다.

**_스타트업이 실패하는 이유 랭킹_**

1. 시장 니즈가 없어서
2. 자본 고갈
3. 적절한 팀 구성 실패
4. 경쟁력 패배
5. 사용하기 어려운 제품

전부 아키텍처 수준에서 해결 가능한 것은 아니지만, 어떤 요건이 필요한가 봅시다.

1. 시장 니즈가 없어서 => 고객의 기대에 맞춰 사양을 변화하기 좋은 **민첩함**
2. 자본 고갈 => **비용 최적화**
3. 적절한 팀 구성 실패 => 최대한 전문가가 필요로하지 않도록 **작은 구성**
4. 경쟁력 패배 => **개발 속도**를 올려 경합 상태 돌파
5. 사용하기 어려운 제품 => 개선 사이클을 높이기 위한 **민첩함**

개인개발/스타트업에 필요한 요건은 **민첩함, 비용 최적화, 작은 구성, 개발 속도**가 아닐까 가설을 세웠습니다.
그럼 이 관점에서 기술 요소를 검토합시다.

## 기술요소

배경에서 개인개발과 스타트업에는 **민첩함, 비용 최적화, 작은 구성, 개발 속도**가 우수한 기술 요소를 선택해야 하지 않을까 검토했습니다.

이 관점에서 저는 우수하다 생각하는 기술요소를 소개하려합니다.
구성은 `프론트엔드`, `DB`, `백엔드(API)` 입니다.

### 프론트엔드

#### 프론트엔드 프레임워크 선정

프론트엔드는 React, Vue, Angular 3대 프레임이 있습니다.
**`개발속도`, `민첩함` 관점으로 보면, TypeScript로 타입을 붙이는 것이 필수라 생각합니다. 입력 보완을 혜택을 받으면서 어떤 데이터를 받고 넘기면 되는가 한 눈에 알기 쉽기에 개발 효율을 올릴 수 있으면서, 사양변경이나 코드 변경할 때도 에러 체크를 컴파일할 때 알기 때문입니다.**
**그러니 TS와 상성이 좋다 관점에서 React**가 군계일학이기에 프론트엔드 프레임워크는 **React를 선택해야한다** 생각합니다.

또한, **`개발속도`, `작은 구성` 관점에서는 저는 `React`보다 `Next.js` 사용하는 것을 추천**합니다.
Next.js가 필요하지만 구현에 귀찮은 일을 **No Config**로 실현시켜주기 때문입니다. 구체적으로 말하면 루팅, SSR(SEO, SNG의 OGP를 위해서)입니다.
이상의 이유로 **Next.js(TS)를 프레임워크로 추천**합니다.

#### 프론트엔드 디플로이 할 곳

Next.js 디폴로이 할 곳으로 먼저 떠오르는 것이, vercel, Netlify, Heroku 등이 있습니다.
이들은 상당히 편하게 디플로이 가능하며, 기본무료로 이용할 수 있어 선택지에 들어가 있습니다.
하지만 무료에는 **반드시 기능적 제한**이 있기에, 규모가 있는 것을 전제한다면 AWS으로 구축하고 싶습니다.

**S3 hosting + CloudFront**라면 AWS 무료 혜택으로 사용할 수 있고, 무료 혜택이 아니라더라 **거의 무료**입니다. (S3은 0.025USD/GB, CloudFront 0.114USD/10TB)

vercel 등의 서비스에서 유료 계정은 고정비가 들지만, AWS의 이 구성이면 onDemand한 과금이므로 **`비용 최적화` 관점에서 S3hosting + CloudFront를 추천합니다.**

프론트엔드 디플로이할 곳으로 EC2, ECS 등 서버를 사용하는 것은 **민첩함, 비용 최적화, 작은 구성, 개발 속도** 관점에서 논외라 생각합니다.

Next.js의 SSR은 Lambda@Edge로 행해지고 있습니다.
이 구성의 디플로이는 **Serverless Framework**를 사용함으로 No Config로 간단히 해결합니다.

[serverless-nextjs](https://github.com/serverless-nextjs/serverless-next.js)

### DB

#### RDS vs DynamoDB

결론부터 말하면 **무조건 DynamoDB를 선택하는 것을 추천**합니다.
정확히 말하면 DynamoDB에서는 표현할 수 없는 자료구조, 복잡한 접근패턴이라면 RDS를 사용해야하지만, 초기 단계에는 DynamoDB로 만들다가 무리가 생기면 RDS와 병용하는 접근이 좋다 생각합니다.

**`비용 최적화` 관점으로 말하면, Dynamo는 종량과금으로 되어있지만 RDS는 인스턴스 기동시간으로 과금됩니다. 또한 RDS + Lambda는 RDS Proxy 도입을 꼭 해야합니다. Aurora Serverless도 있지만, 이는 콜드 스타트가 치명적**입니다.

**`민첩함`** 관점에서는 Dynamo는 NoSQL이므로 스키마가 고정되어 있지 않아 사양 변경에 유연하게 대응할 수 있습니다. RDB는 테이블 간의 의존관계가 있기에 테이블을 버리기 어렵고, 마이그레이션이나 SQL로 다시 제작할 경우가 생깁니다.

**`개발속도`** 관점에서는 Dynamo는 데이터베이스 기능 관리가 필요하지 않고, GraphQL과 상성이 좋음으로 개발효율을 올릴 수 있습니다.

#### DynamoDB 설계

DynamoDB를 추천한다 했지만, **RDB스럽게 DynamoDB를 설계하면 100% 벽에 막힙니다.** Dynamo는 Join을 할 수 없으므로, Join이 필요하지 않게 테이블 설계를 할 필요가 있습니다.
RDB랑 NoSQL은 테이블 설계를 하는 방법이 전혀 다르므로, 여기에 반드시 초기 학습 비용을 들여야합니다.

추천링크를 붙이겠습니다.
[서버레스 애플리케이션을 위한 DB 설계 모범사례](https://pages.awscloud.com/rs/112-TZM-766/images/20190905_%E3%82%A4%E3%83%81%E3%81%8B%E3%82%89%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B%E3%82%B5%E3%83%BC%E3%83%8F%E3%82%99%E3%83%BC%E3%83%AC%E3%82%B9%E3%82%A2%E3%83%95%E3%82%9A%E3%83%AA%E9%96%8B%E7%99%BA-%E3%82%B5%E3%83%BC%E3%83%8F%E3%82%99%E3%83%BC%E3%83%AC%E3%82%B9%E3%82%A2%E3%83%95%E3%82%9A%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E5%90%91%E3%81%8D%E3%81%AEDB%20%E8%A8%AD%E8%A8%88%E3%83%98%E3%82%99%E3%82%B9%E3%83%88%E3%83%95%E3%82%9A%E3%83%A9%E3%82%AF%E3%83%86%E3%82%A3%E3%82%B9.pdf)
[Amazon DynamoDB 데이터 모델링](https://dev.classmethod.jp/articles/reinvent-2019-report-cmy304-for-developer/)
[DynamoDB를 위한 NoSQL 설계](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/bp-general-nosql-design.html)

### 백엔드(API)

#### REST vs GraphQL

**`민첩함`, `작은 구성`, `개발속도` 관점에서 GraphQL를 추천합니다.**

GraphQL은 지금까지 지니고 있었던 백엔드의 책무를 프론트엔드로 이양하는 측면이 있습니다.
그래서 UI 변경이 일어날 때마다 API 수정 할 필요가 없어져 **민첩함이 상승합니다.**

또 Lambda로 REST API를 작성하면, 엔드포인트 수 만큼 Lambda를 만들어야합니다(이를 피하는 방법도 있긴 합니다.)만, GraphQL은 **단일 엔드포인트이므로 `작은 구성`을 유지할 수 있습니다.**

GraphQL은 프론트엔드에서 이용할 때 사용하기 상당히 쉽고, 이는 체감이지만 REST보다 **프론트엔드 개발 속도를 올려주는 기분입니다.**

그러나 REST가 더 우수하게 처리하는 것도 있습니다. 예를 들면 파일 업로드 등은 GraphQL로 하려하면, 상당히 공을 들여야합니다. 그럴 때는 REST 엔드포인트를 병용하면 됩니다. **API Gateway**를 사이에 두면, 같은 도메인으로 대응할 수 있습니다.

### 디플로이에 대해

API Gateway + Lambda(GraphQL) + Lambda(REST) + DynamoDB 구성의 디플로이는 Serverless Framework를 사용하면 간단합니다.

[여기](https://github.com/serverless/examples)에 각 언어의 템플릿이 있으므로 찾아서, 디폴리이까지 해보시길 바랍니다. 간편함 놀랄 것이라 생각합니다.
여담으로 저는 [이 템플릿](https://github.com/serverless/serverless-graphql)을 커스터마이즈해서 사용하기 쉽게 만들어 사용하고 있습니다.

### 인증인가에 대해

인증인가는 로그인 기능 등을 구현할 때는 **Cognito**를 활용합니다. 개발 속도를 의식하면, 스스로 구현하는게 빠를 때도 있지만, 보안에 관한 것이므로 매니지드 서비스를 쓰는 것이 별 탈없겠죠.
이것도 Serverless Framework에 추가 가능합니다.

## 재결론

![recommend architecture for personal developer & start up](https://storage.googleapis.com/zenn-user-upload/2v2eb15y29ueoa42tgz0x72vmlwx)

이상을 정리하면 이러한 그림 구성이 됩니다.

- Serverless Framework 사용.
- 프론트엔드는 S3 hosting + CloudFront, SSR도 Lambda@Edge로 가능.
- DB는 RDS를 사용하지 말고, DynamoDB.
- API는 기본적으로 GraphQL, 필요할 때 REST도 간단히 추가가능.

이게 포인트라 생각합니다.
개인개발 / 스타트업에 관련한 분이라면 참고가 될 것이라 생각합니다.

감사합니다.
