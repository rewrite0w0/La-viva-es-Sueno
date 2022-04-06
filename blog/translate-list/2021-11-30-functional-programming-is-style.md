---
slug: functional-programming-is-style
title: 함수형은 프로그래밍 스타일
authors: rewrite0w0
tags: [functional programming, 번역]
---

> [글](https://zenn.dev/j5ik2o/articles/97b458eff8283c783d9b)

---

> 함수형 프로그래밍은 함수형 언어가 아니면 안되는거 아닌가요?

이런 질문을 가끔 받습니다.

대답은 **아니요**입니다.

언어의 지원이 있으면 넘지 못할 벽은 없습니다.

애초에 명령형과 더불어 함수형은 프로그래밍 스타일입니다.

그리고, 명령형과 함수형의 사이에는 0/1이 아니라, 그라데이션이 있습니다.

그렇기에, 함수형 프로그래밍은 함수형 언어 이외에도 사용할 수 있으며, 프로그램을 좋은 설계로 이끄는 사고방식입니다, 이것이 이 글의 주제입니다.

코드를 예를 들어 자세히 설명해보겠습니다.

## 함수형 알아보기

### 로직을 쓸 때

- 가변(var)이 아니라, 불변(val)를 사용한다.
- 가변의 오브젝트(mutable)를 사용하지 않으며, 불변 오브젝트를 사용한다.
- void, Unit 등 반환 값이 없는 함수는 사용하지 않으며, 반환값을 반환(고계)함수를 사용한다.

### 함수를 정의할 때

- 참조투명한 함수를 정의한다.
- 반드시 의미가 있는 반환 값을 반환한다.(void, Unit은 사용하지 않는다.)
- 함수는 수학적이므로, 반환값이 인수에서 자명해야한다.
- 입출력(I/O)를 분리한다.

> 클래스 메서드를 정의할 때에도 같은 사고방식에 따른다.

### 가변를 사용할 때

원칙적으로 불변입니다만, 다음의 경우 가변을 허용합니다.

오브젝트 생성이나 삭제, 갱신의 비용이 비싼 경우.

분산환경일 경우 다른 기술적 이유에서 공유를 해야할 경우.

인스턴스를 공유하지 않을 경우에도, 상태관리를 간단히 하기 위해서 기본적으로 불변일 때가 좋습니다.

합리적인 이유가 있으면 가변으로 하는 것이 좋습니다만, 가변이라면 인스턴스를 공유하지 않으면, 국소적으로 이용하는 것이 좋을 것입니다.(부득이하게 공유해야한다면 복사해서 상대에게 넘깁니다만, 복사를 한 상태를 다루는 것은 신경을 많이 써야하므로 피합시다).

예를 들어 `Java`에서 `String`의 갱신이 빈번해 코스트가 높을경우, `StringBuilder`를 사용합시다.

단, `StringBuilder` 인스턴스는 가변이므로 공유할 수 없습니다.

이용할 수 있는 특정 범위 스코프 안 뿐입니다.

인스턴스를 공유했다면 `StringBuilder#build`를 호출한 경우 `String`의 불변 인스턴스를 공유합시다.

### 부작용 국소화

그럼 입출력하지 않는건가? 오해하는 분이 계십니다만, 그것이 아닙니다.

어딘가 모듈로 둘 필요가 있습니다.

어디까지나 부작용을 다루지 않는 순수한 모듈과 부작용를 다루는 순수하지 않은 모듈을 나눠서, 부작용을 국소화하는 의미가 있습니다. 순수한 모듈에서는 상기의 접근법을 철저히 합시다.

(Haskell 프로그램은 순수하지만, Haskell의 프로그램과 Haskell 자체의 관계도 이것과 본질적으로 다르지 않습니다.)

### 함수형의 효능

- 선언적이라 의도를 이해하기 쉽다.
- 작동이 안정된 결과가 예측가능합니다.
- 프로그램 개선 수리할 때, 결함이 덜 나타난다.
- 부작용이 분리되어 있어서, 테스트 하기 쉽다.

이것은 프로그램의 좋은 설계에 필요한 것이라 생각합니다.

어째서 부작용과 작용을 분리해야하는가

Scala 설계자인, 오더스키 선생님의 말씀을 들어봅시다.

> 도움이 되는 프로그램이라는 것이란, 어떤 형태든 부작용을 갖게됩니다.
>
> 그렇지 않으면 프로그램의 외부 세계에 값을 제공할 수 없게됩니다.
>
> 하지만, 부작용을 갖지 않은 메서드를 지향하는 것으로, 결과적으로 부작용을 갖는 코드를 최소화한 프로그램이 되어 설계하기 쉬워집니다.
>
> 이런 접근으로 만들어진 프로그램은 테스트하기 쉽다는 장점이 있습니다.

[Programming in Scala](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=260036695)

### 코드 예시

좋아하시는 언어(Java, Scala, Kotlin, Go, Rust) 예를 봐주세요.

(1)=>(2)=>(3)=>(4) 순으로 함수형 스타일에 도달합니다.

함수형 프로그래밍 스타일은 함수형 언어 뿐만 가능한 것이 아닙니다.

말할 필요도 없이 4번이 테스트하기 쉬운 코드입니다.

저는 (4)의 프로그래밍 스타일을 적극적으로 이용하고 있습니다.

#### Java

```java
package example

import java.util.List;

public class Main {

    public static void main(String[] args) {

        new Main().run();

    }


    // (1) 명령형 스타일

    void printArgs1(List<String> args) {

        var i = 0;

        while (i < args.size()) {

            System.out.println(args.get(i));

            i += 1;

        }

    }


    // (2) 변수를 삭제한 스타일. 아직 부작용은 있다.

    void printArgs2(List<String> args) {

        for (String arg : args) {

            System.out.println(arg);

        }

    }


    // (3) forEach를 사용하는 스타일. 아직도 부작용이 있다.

    void printArgs3(List<String> args) {

        args.forEach(System.out::println);

    }


    // (4) 변수도 부작용도 없는 순수함수형 스타일

    String formattedArgs(List<String> args) {

        return String.join("\n", args);

    }



    void run() {

        var args = List.of("Hello", "World");

        printArgs1(args);

        printArgs2(args);

        printArgs3(args);

        System.out.println(formattedArgs(args));

    }

}
```

#### Scala

```scala
package example

// (1) 명령형 스타일

def printArgs1(args: Seq[String]): Unit = {

var i = 0

while (i < args.length) {

    println(args(i))

    i += 1

  }

}

// (2) 변수를 삭제한 스타일. 아직 부작용은 있다.

def printArgs2(args: Seq[String]): Unit =

for (arg <- args) {

    println(arg)

}

// (3) forEach를 사용하는 스타일. 아직도 부작용이 있다.

def printArgs3(args: Seq[String]): Unit =

args.foreach(println)

// (4) 변수도 부작용도 없는 순수함수형 스타일

def formattedArgs(args: Seq[String]): String = args.mkString("\n")

// 아아...이 간결함...

@main def helloWorld() = {

  val args = Seq("Hello", "World")

  printArgs1(args)

  printArgs2(args)

  printArgs3(args)

  println(formattedArgs(args))

}
```

#### Kotlin

```kt
package example

// (1) 명령형 스타일

fun printArgs1(args: List<String>) {

    var i = 0

    while (i < args.size) {

        println(args[i])

        i++

    }

}

// (2) 변수를 삭제한 스타일. 아직 부작용은 있다.

fun printArgs2(args: List<String>) {

    for (arg in args) {

        println(arg)

    }

}

// (3) forEach를 사용하는 스타일. 아직도 부작용이 있다.

fun printArgs3(args: List<String>) {

    args.forEach { println(it) }

}

// (4) 변수도 부작용도 없는 순수함수형 스타일

fun formattedArgs(args: List<String>): String {

    return args.joinToString(separator = "\n")

}

fun main(args: Array<String>) {

    val args = listOf("Hello", "World")

    printArgs1(args)

    printArgs2(args)

    printArgs3(args)

    println(formattedArgs(args))

}
```

#### Go

```go
// val/let 같은 기능은 없다만, 변수 값를 덮어쓰지 않는 규칙으로

// 커버할 수 있습니다. Java랑 비슷하게 운용할 수 있을 것 같습니다.

package main

import (

    "fmt"

    "strings"

)

// (1) 명령형 스타일

func printArgs1(args []string) {

    i := 0

    for i < len(args) {

    	fmt.Println(args[i])

    	i += 1

    }

}

// (2) 변수를 삭제한 스타일. 아직 부작용은 있다.

func printArgs2(args []string) {

    for _, arg := range args {

    	fmt.Println(arg)

    }

}

// (4) 변수도 부작용도 없는 순수함수형 스타일

func formattedArgs(args []string) string {

    return strings.Join(args, "\n")

}

func main() {

    args := []string{"Hello", "World"}

    printArgs1(args)

    printArgs2(args)

    fmt.Println(formattedArgs(args))

}
```

#### Rust

```rs
// 분위기가 Scala 닮았다.

// (1) 명령형 스타일

fn print_args_1(args: &[&str]) {

let mut i = 0;

while i < args.len() {

    println!("{}", args[i]);

    i += 1;

  }

}

// (2) 변수를 삭제한 스타일. 아직 부작용은 있다.

fn print_args_2(args: &[&str]) {

for arg in args {

    println!("{}", arg);

  }

}

// (3) forEach를 사용하는 스타일. 아직도 부작용이 있다.

fn print_args_3(args: &[&str]) {

  args.iter().for_each(|arg| println!("{}", arg));

}

// (4) 변수도 부작용도 없는 순수함수형 스타일

fn formatted_args(args: &[&str]) -> String {

  args.join("\n")

}

fn main() {

  let args = &["Hello", "World"];

  print_args_1(args);

  print_args_2(args);

  print_args_3(args);

  println!("{}", formatted_args(args));

}
```

## 정리

코드 예시를 보며 `뭐야 이런거야? 무의식적으로 했던거였네` 말씀하시는 분도 계실거라 생각합니다.

견고한 코드를 쓰는 사람은 함수형의 에센스를 암묵적으로 사용하고 있다 생각합니다.

의식적으로 사용한다면, 설계할 때 보다 더 좋을 것입니다.

그리고 함수형 프로그래밍 스타일을 프로그래밍 언어가 서포트하는가 어쩐가 차이도 있습니다만, 이번에 보여드린 심플한 용도가 있다면, 크로스패러다임인 지금의 언어에서는 큰 차이 없이 자연히 쓸 수 있다 생각합니다.

한 편으로, 언어마다 큰 차이가 있으며, 함수형의 다른 요소는 다음과 같습니다.

- 고계함수(map, filter, fold 등)를 사용하는 콜렉션 조작
- 모나드를 사용한 프로그래밍 스타일

이것은 시간이 있으면 다른 글에서 정리하겠습니다.

참조자료

[도메인 주도 설계](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=12174216)

[Effective Java](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=171196410)

[켄트 백 구현 패턴](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=1706106)
