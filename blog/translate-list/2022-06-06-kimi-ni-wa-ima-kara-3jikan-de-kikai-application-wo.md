---
slug: 2022-06-06-kimi-ni-wa-ima-kara-3jikan-de-kikai-application-wo
title: 지금부터 3시간 안에 기계학습 Web 애플리케이션을 만들어보게
authors: rewrite0w0
tags: [python, machine-learning, 번역]
---

> [글](https://zenn.dev/alivelimb/articles/20220528-streamlit-ml-app)

신입: 오늘부터 데이터 사이언스에 소속된 모리모토입니다!

선배: 오, 당신이 우리 부서에 신입으로 오는 모리모토인가. 나는 상사 바아츠다. 잘 부탁한다!

신입: 잘 부탁 드립니다!

선배: 그럼 바로 연습으로 간단한 애플리케이션을 만들어볼까, 모리모토씨는 Python이라면 쓸 수 있나?

신입: 네! 대학에서 연구로 Python을 사용했습니다. PyTorch로 모델도 만들 수 있습니다!

선배: 호오, 굉장하구먼

신입: 😊

선배: 그럼 **지금부터 3시간 안에 기계학습 Web 애플리케이션을 만들어보게**

선배: 과제는 사진에 얼굴부분을 에모지로 감추는 애플리케이션으로 하지.

선배: 아, 디플로이는 안해도 된다. 로컬에서 움직이면 그만이야. 얼굴 인식이랑 영상 처리면 할 수 있겠지?

신입: 😐

신입: (에ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ. 3시간? 너무 빡센데...)

신입: (우선 모델을 어떻게하지. 애초에 노트북이면 GPU 없으니까 학습을 못돌리지 않나)

신입: (Web 애플리케이션은 Flask만 다뤄봤는데, JS은 전혀 모르는데...)

## 일의 순서를 정리하자

선배: 아, Python 개발 환경은 갖춰져 있어

선배: 시간 없으니, 우선 **일의 순서를 정리해볼까** 처음은 어떻게 할까?

신입: 으음... 심층 학습 모델을 사용해서, 사진에서 얼굴 범위를 특정합니다

선배: 오, 다음은?

신입: 얼굴 주변에 이모지를 겹쳐서 얼굴을 감춥니다.

선배: 오케이, 겹치는 에모지 이미지는 내가 준비하지. 다음은?

신입: 이미지 업로드하면 가공 영상을 게시하는 기능을 갖는 Web 페이지를 만듭니다.

선배: 굉장하구먼, 가르칠게 하나도 없어

신입: 감사합니다! 그런데 질문해도 될까요...?

선배: 괜찮네.

## 기반을 결정

신입: 제가 받은 노트북은 GPU가 없어서 학습을 돌릴 수 없습니다만...

선배: 에? 3시간 밖에 없는데 모델 학습부터 하려했어?

신입: 응? 뭔가 이상한가요?

선배: 우선 첫 째, 우리는 학자도 아니고 연구직도 아니네

선배: 처음부터 멋진 모델을 만들어 SOTA를 맞출 필요도 없어

선배: 처음은 간단히 가지고 놀 수 있는 AutoML를 사용해서 **기반을 결정**해보게

신입: 오호

선배: 기반이 될 모델이 요건에 만족하면 OK

선배: 충족하지 못하면 다른 라이브러리나 학습된 모델을 테스트해보면 되네

선배: 그래도 안되면 하나하나 처음부터 스스로 만들어볼까 생각하는거네

선배: 스스로 모델을 만드는 것은 첫 선택지가 아니네

신입: 알겠습니다. 조사해보겠습니다.

`~ 신입, 검색중 ~`

신입: [face_recognition](https://github.com/ageitgey/face_recognition)이라는게 있습니다! PyPI에 공개되어있고요.

선배: 오케이! 그걸 테스트해보자

신입: 이런 식일까요?

```py
im = Image.open("test-image.png")
image = np.asarray(im)
face_bboxes = face_recognition.face_locations(image)
```

선배: 괜찮구먼! 다음은 이미지를 겹치는 것을 처리해보지

신입: 이건 pillow로 간단히 할 수 있을 듯 합니다.

선배: 좋구먼!

## Python으로 프론트엔드를 작성

선배: 다음은 Web 페이지를 만들어보지

신입: 저... 실은 HTML/CSS/JS 쪽은 전혀 모릅니다

선배: 데이터 사이언티스트 중에서도 프론트를 적는 사람은 많지 않네

선배: 그래도 최저한의 지식은 필요하니 공부해두게

신입: 알겠습니다.

선배: 그렇다해도, 실은 **Python으로 프론트엔드를 적을 수 있지**

신입: 에? Jinja 같은 것을 이용하는 건가요?

선배: 그것도 좋지만 이번에는 [Streamlit](https://streamlit.io/)을 사용하지

선배: Streamlit이라면 HTML/CSS/JS를 하나도 사용하지 않고도 멋진 UI 애플리케이션을 만들 수 있지

신입: 그건 굉장한데요

선배: 간단히 배울 수 있는 [책](https://zenn.dev/alivelimb/books/python-web-frontend)을 알려줄테니 읽어두게

선배: 오늘은 시간이 없으니 최저한의 필요한 기능만 사용하자

신입: 알겠습니다! 잘 부탁드립니다!

`~ 신입, Streamlit 구현 ~`

신입: 됐습니다! 이런 느낌입니다

![emoji on Streamlit](https://res.cloudinary.com/zenn/image/fetch/s--fhwV1K4F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/48db0aa52a41c42912cddc6c.png%3Fsha%3Dd3cba2de8cb8e663a154e901d8ce064f42cbd58f)

선배: 오오, 3시간 안에 완성했구먼

신입: 선배 덕입니다! 감사합니다!

## 보수하기 쉬운 코드를 적는 것을 명심

선배: 애플리케이션은 문제없이 잘 돌아가나?

신입: 실은 잘 안되는 이미지도 있습니다.

![3man](https://res.cloudinary.com/zenn/image/fetch/s--fF56hKRR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/618e57364d7a245f69155794.png%3Fsha%3D5b4c86efd0ac7aae80f7ce742e44f3dd13cb0f06)

선배: 이건 옆모습을 인식하지 못하는 거구먼

선배: 이럴 때는 어떻게해야 하면 좋을까?

신입: 이번에는 face_recognition을 기반으로 했지만

신입: 정밀도를 개선하기 위해 다른 학습된 모델을 사용하는 선택지가 있습니다.

신입: 그래도 안되면 스스로 모델을 만들거나 Fine-Tuning를 시도해봅니다.

선배: 좋구먼! 그럼 소스코드를 볼 수 있을까?

`~ 선배, 코드 리뷰 ~`

선배: 으음, 조금 리팩토링이 필요할 것 같은데

선배: 동작하는 것도 중요하지만, **보수하기 쉬운 코드를 적는 것도 잊지말아야하네**

신입: 알겠습니다. 그런데 어떤 부분을 고치는게 좋을까요

선배: TypeHint랑 변수 명명, 2가지를 의식해볼까

선배: TypeHint는 알고 있나?

신입: 아뇨, 처음 듣습니다

## TypeHint 사용해 코드 질을 올리자

선배: TypeHint는 변수에 붙이는 타입 힌트인데

선배: 예를 들면 이런 코드가 있다치자

```py
def add(a, b):
  return a + b
```

선배: 이러면 값을 더하는지, 문자열을 더하는지 알 수 없지

선배: 여기에 TypeHint를 붙이면 이렇게 된다

```py
def add(a: int, b: int) -> int:
  return a + b
```

선배: 이걸로 `add`는 `int`타입을 더하는 함수라는 것이 명백해진다

신입: Java스럽게 타입 명시한다는 소리인가요?

선배: 그렇지, 그렇지만 Java 같은 정적타입 언어와는 달라

선배: TypeHint는 어디까지나 힌트

선배: 그러니 add에 문자열을 넘겨줘도 에러는 아니지

신입: 에? 그럼 무엇을 위해 적나요?

선배: 우선 개발자의 의도가 코드에서 표현되기 때문이지

선배: 팀이나 미래의 자신이 코드를 이해할 때 도움되지

신입: 오호라

선배: 또 [flake8](https://github.com/PyCQA/flake8), [mypy](https://github.com/python/mypy)같은 정적해설 도구랑 조합하면

선배: 실행 전에 에러를 볼 수 있어. TypeHint를 적는 걸 권하네

선배: **TypeHint를 적고서 코드의 질을 올려볼까**

선배: 여기 도움이 될 [책](https://zenn.dev/alivelimb/articles/20220501-python-env)이 있으니 읽어두게

신입: 알겠습니다

신입: (또 읽어야 할 책이 늘었어...)

## 변수 명은 알기 쉽게

선배: 다음은 변수 명명인데, 여기 `r`, `l`은 뭔가?

신입: 아, `right`, `left`입니다

선배: 그럼 그대로 `right`, `left` 적게

선배: 변수명 예측은 IDE로도 할 수 잇으니, 변수명이 긴 것은 그리 단점이 아니야

선배: 1글자로 된 변수명이 더 곤란하지

선배: **변수 명은 알기 쉽게**가 기본이지

선배: 그리고 좌 X축은 의미를 알 수 없으니 `left_x`로 바꿔보게

신입: 아하, 1글자로 된 변수명을 전부 고치겠습니다!

선배: 아, 모든 1글자 변수명이 나쁜건 아니야

선배: `lambda x:` 같은 건 변수 유효범위가 적으니 1글자라도 좋아

선배: 여기 [읽기좋은 코드가 좋은 코드다](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=16108252) 같은 책을 읽어두게

신입: 네...

신입: (또 읽을 책이 늘었어... 빡세다)

선배: 신입일 때는 읽을 책이 많아서 힘들겠지만, 힘내게

신입: 열심히 하겠습니다!

신입: (이 사람 초능력자인가)

신입: 저, 선배 땅콩 좋아하시나요?

선배: 아니, 캐슈넛을 더 좋아해

선배: 이런건 아무래도 좋으니, 리팩터링이랑 기능 확장 부탁하네

선배: 이건 3시간은 아니고 내일까지 하루를 사용해서 해보게

선배: 완성되면 Github에 push해 둬

신입: 알겠습니다

신입: (힘든 부서에 배치된 듯한데...)

`~ 다음날 ~`

신입: 선배! [Github에 push](https://github.com/krkettle57/face-emoji-streamlit/tree/v0.1.0)했으니 확인 부탁드립니다.

선배: 오~ 알겠네, 어떤 느낌인지 데모부터 한 번 볼까

신입: 이런 느낌입니다

![web applicaion demo](https://storage.googleapis.com/zenn-user-upload/deployed-images/c313875e620e2f34e59e0965.gif?sha=da7243eb0211040e7fefde591b8030b62550a1a1)

선배: 좋구먼! 그럼 나중에 코드 리뷰해두겠네

선배: 내일부터는 일이 시작되니, 이런 느낌으로 힘내보게

신입: 네! 알겠습니다!

선배: 그럼 오늘은 한 잔하러 갈까

`~ To Be Countinued.. ~`

## 맺음말

(이제와서지만...) 안녕하세요 alivelimb입니다

이번에는 지금까지 경향을 바꿔 코미컬한 대화풍으로 집필했습니다. 적으면서 즐거웠기에 또 대화풍으로 글을 적어보고 싶습니다.

## 되돌아보기

스파르타 선배였지만, 말하던 것은 모두 일리있습니다.

지금은 간단하게 기계학습 모델을 테스트해볼 서비스, 라이브러리가 있으니, 우선은 기반을 결정하는 것은 중요합니다.

이번에 사용한 [face_recognition](https://github.com/ageitgey/face_recognition)외에도 패키지라면 [mediapipe](https://github.com/google/mediapipe), [facenet-pytorch](https://github.com/timesler/facenet-pytorch), 서비스라면 SageMaker(AWS), VertexAI(GCP)가 있습니다.

또, 간단한 데모 애플리케이션을 만들 때는 [Streamlit](https://streamlit.io/)이 좋습니다. 데이터 사이언티스트는 Python, R, C++를 사용할 수 있는 사람이 많지만 React, Vue 같은 JS(TS) 프레임워크를 사용하는 사람은 적습니다. Streamlit을 사용하면 자유도는 적어져도 간단히 WebUI를 만들 수 있습니다.

Streamlit은 데이터 사이언스계열 데모 애플리케이션을 상정하고 있지만 평범한 Web 애플리케이션의 데모 애플리케이션도 만들 수 있습니다. 선배도 소개한 대로 여기에 [책](https://zenn.dev/alivelimb/books/python-web-frontend)이 있으니 읽어주시면 좋겠습니다.

생각보다 많은 좋아요를 받았기에 후일담과 보충 [글](https://zenn.dev/alivelimb/articles/20220601-streamlit-ml-app-after)도 적었습니다.
