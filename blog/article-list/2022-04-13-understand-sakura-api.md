---
slug: understand-sakura-api
title: SAKURA API 이해하기
authors: rewrite0w0
tags: [코드구경, 감상]
---

[public apis](https://github.com/public-apis/public-apis)에서 마음에 드는 [api](https://github.com/JessVel/sakura-card-captor-api)가 있으니 이해하기 위한 시도.

**realize!**

## package.json

```json
{
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon --watch src src/index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mongoose": "^5.11.18"
  },
  "devDependencies": {
    "consola": "^2.15.3",
    "nodemon": "^2.0.7"
  }
}
```

`index.js`가 시작점, 위와 같은 패키지를 의존하고 있다.

[`consola`](https://www.npmjs.com/package/consola)이 초면인데, `Elegant Console Logger for Node.js and Browser` 이라 한다. 개발할 때 기분 좋게하는 용도로 이해하자.

## index.js

```js
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
require('dotenv').config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
    // cors 옵션
  })
);
// callback 함수(미들웨어) cors 장착
// Access-Control-Allow-Credentials 허용
// https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials

app.options('*', cors());

// Pre-Flight cors 켜기
// https://expressjs.com/en/resources/middleware/cors.html

app.use(express.json({ extended: true }));

// express.json는 미들웨어
// body-parse 기반 JSON 페이로드 리퀘스트
// https://expressjs.com/en/4x/api.html#express.json

// extended: true
// bodyParser.urlencoded([options]) 옵션을 true로
// express.json({ extended: true })이 용례는 못찾겠음
// express.json()으로도 돌아가는듯?
// express.urlencoded({ extended: true }) 이것을 의도한듯
// https://expressjs.com/en/resources/middleware/body-parser.html

// 추가
// https://stackoverflow.com/questions/57762864/meaning-of-argument-in-express-json-extended-false
// 글을 보면 extended를 사용할 필요가 없다는 같은 의견

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // 응답이 주어진 origin으로부터 요청 코드와 공유될 수 있는가 여부

  res.header('Access-Control-Allow-Credentials', true);
  // 요청 자격 증명모드, true면 프론트엔드 자바스크립트에 노출을 브라우저에서 가능

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Preflight reqeust, 리소스에 접근할 수 있을 때 이용 가능한 하나 이상의 메소드 지정

  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
  );
  // Access-Control-Allow-Headers
  // Access-Control-Request-Headers을 포함하는 preflight request, 리퀘스트 간 사용하는 HTTP 헤더를 게시하기 위해 사용

  // Content-Type
  // 리소스 미디어 타입을 나타내기 위해 사용

  // Authorization
  // 사용자 에이전트를 서버에서 인증, 보호된 리소스에 접근 가능하도록 인증정보 제공하기 위함

  // Content-Length
  // 수신자에게 보내지는 바이트 단위의 개체(엔티티) 본문 크기

  // X-Requested-With
  // MDN에 없음
  // 사라졌거나 다른 프레임워크에서 쓰던 헤더인듯?
  // 일단 XMLHttpRequest 소속
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  // https://www.checkheaders.com/headers/X-Requested-With/
  // https://stackoverflow.com/questions/17478731/whats-the-point-of-the-x-requested-with-header
  // https://github.com/mdn/content/issues/1506

  // res.header는 res.set랑 alias
  // https://expressjs.com/en/api.html#res.set

  next();
  // next()는 여기에 비롯
  // router.use(path, function mounted_app(req, res, next) {
  //   var orig = req.app;
  //   fn.handle(req, res, function (err) {
  //     setPrototypeOf(req, orig.request);
  //     setPrototypeOf(res, orig.response);
  //     next(err);
  //   });
  // });
  // https://github.com/expressjs/express/blob/947b6b7d57939d1a3b33ce008765f9aba3eb6f70/lib/application.js#L228
});

// api 경로, 미들웨어
app.use('/api/card', require('./routes/card_routes'));

// 서버 돌리기
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
```

## connectDB

```js
// config/db.js

// 임포트
const mongoose = require('mongoose');
require('dotenv').config();

// DB 연결
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      // 6.x 버전부터는 사용되지 않음, 이 프로젝트는 5.x버전
      // 6.x 에서는 위와 같은 설정이 기본값
      // https://mongoosejs.com/docs/5.x/docs/api/mongoose.html#mongoose_Mongoose-connect
      // https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
    });
    console.log('Data base connected');
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## /api/card

```js
// src/routes/card_routes.js

const express = require('express');
const router = express.Router();
const cardController = require('../controller/card_controller');

router.get('/', cardController.getCards);

router.get('/:id', cardController.getCard);

router.post('/', cardController.createCard);

// router 메서드 등록
// https://expressjs.com/en/4x/api.html#router.METHOD

module.exports = router;
```

## cardController

```js
// src/controller/card_controller.js

const cardModel = require('../models/card');

exports.getCards = async (req, res) => {
  try {
    const DEFAULT_PAGE = 1,
      DEFAULT_PAGE_SIZE = 60;

    let { page = DEFAULT_PAGE, pageSize = DEFAULT_PAGE_SIZE } = req.query;

    // query 파서
    // https://expressjs.com/en/api.html#app.settings.table

    page = +page;
    pageSize = +pageSize;

    if (!page || !pageSize) throw new Error('Invalid page or pageSize format');

    const cards = await cardModel.find();
    // https://mongoosejs.com/docs/api.html#model_Model.find

    pageSize = pageSize > DEFAULT_PAGE_SIZE ? DEFAULT_PAGE_SIZE : pageSize;

    const start = (page - 1) * pageSize;
    const end =
      start + pageSize > cards.length ? cards.length : start + pageSize;

    const data = cards.slice(start, end);

    // json.stringify()
    res.json({
      data: data,
      page: page,
      pageSize: pageSize,
      count: data.length,
      totalCount: cards.length,
    });

    console.log(cards);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Hubo un error' });
  }
};

exports.getCard = async (req, res) => {
  try {
    {
      const card = await cardModel.findById(req.params.id);

      // https://mongoosejs.com/docs/api.html#model_Model.findById
      // http://expressjs.com/en/api.html#req.params

      res.json(card);
      console.log(card);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Hubo un error' });
  }
};

exports.createCard = async (req, res) => {
  try {
    const card = new cardModel(req.body);
    card.save();
    // https://mongoosejs.com/docs/api.html#model_Model-save
    res.json({ card });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Hubo un error' });
  }
};

exports.editCard = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Hubo un error' });
  }
};
```

## cardModel

```js
// src/models/card.js

const mongoose = require('mongoose');

// https://mongoosejs.com/docs/api/schema.html#schema_Schema
//

const CardSchema = mongoose.Schema({
  cardNumber: {
    type: Number,
    require: true,
    trim: true,
  },
  spanishName: {
    type: String,
    require: true,
    trim: true,
  },
  englishName: {
    type: String,
    require: true,
    trim: true,
  },
  kanji: {
    type: String,
    trim: true,
  },
  Rōmaji: {
    type: String,
    trim: true,
  },
  appeardManga: {
    type: String,
    trim: true,
  },
  appeardAnime: {
    type: String,
    trim: true,
  },
  clowCard: {
    type: String,
    trim: true,
    require: true,
  },
  sakuraCard: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model('Card', CardSchema);
// `Card`로 `CardSchema` 내보내기
// 같이보기
// https://javascript.tutorialink.com/how-to-exports-many-mongoose-models-modules-in-node-js/
```

## 감상

- cors에 신경을 굉장히 많이 써야한다. 정말 많은 부분이 소비된다.
- 오래된 프로젝트라 이제는 쓰지 않는 기능도 있다.
