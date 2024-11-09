import { useState } from "react";
import CheatLayout from "../../../components/cheatLayout";
import Head from "next/head";
import Link from "next/link";

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mb-4">
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{language}</h2>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="overflow-auto">{code}</pre>
      </div>
    </div>
  );
};

export default function Home() {
  // Sample code blocks
  const codeBlocks = [
    {
      language: "Hello World",
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
`,
    },
    {
      language: "Run Directly",
      code: `$ go run hello.go
Hello, world!
`,
    },
    {
      language: "Comments",
      code: `// Single line comment

/* Multi-
 line comment */
`,
    },
    {
      language: "Variables",
      code: `var s1 string
s1 = "Learn Go!"

// declare multiple variables at once
var b, c int = 1, 2
var d = true
`,
    },
    {
      language: "Function",
      code: `package main

import "fmt"

// The entry point of the programs
func main() {
    fmt.Println("Hello world!")
    say("Hello Go!")
}

func say(message string) {
    fmt.Println("You said: ", message)
}
`,
    },
    {
      language: "If Statements",
      code: `if true {
    fmt.Println("Yes!")
}
`,
    },
    {
      language: "String Data Types",
      code: `s1 := "Hello" + "World"

s2 := "A "raw" string literal
can include line breaks."

// Outputs: 10
fmt.Println(len(s1))

// Outputs: Hello
fmt.Println(string(s1[0:5]))
`,
    },
    {
      language: "Number Data Type",
      code: `num := 3         // int
num := 3.        // float64
num := 3 + 4i    // complex128
num := byte('a') // byte (alias: uint8)

var u uint = 7        // uint (unsigned)
var p float32 = 22.7  // 32-bit float
`,
    },
    {
      language: "Operators",
      code: `x := 5
x++
fmt.Println("x + 4 =", x + 4)
fmt.Println("x * 4 =", x * 4) 
`,
    },
    {
      language: "Boolean",
      code: `isTrue   := true
isFalse  := false
`,
    },
    {
      language: "Array",
      code: `┌────┬────┬────┬────┬─────┬─────┐
| 2  | 3  | 5  | 7  | 11  | 13  |
└────┴────┴────┴────┴─────┴─────┘
  0    1    2    3     4     5

primes := [...]int{2, 3, 5, 7, 11, 13}
fmt.Println(len(primes)) // => 6

// Outputs: [2 3 5 7 11 13]
fmt.Println(primes)

// Same as [:3], Outputs: [2 3 5]
fmt.Println(primes[0:3])
  `,
    },
    {
      language: "Pointers",
      code: `func main () {
  b := *getPointer()
  fmt.Println("Value is", b)
}
`,
    },
    {
      language: "Slices",
      code: `s := make([]string, 3)
s[0] = "a"
s[1] = "b"
s = append(s, "d")
s = append(s, "e", "f")

fmt.Println(s)
fmt.Println(s[1])
fmt.Println(len(s))
fmt.Println(s[1:3])

slice := []int{2, 3, 4}
`,
    },
    {
      language: "Constant",
      code: `const s string = "constant"
const Phi = 1.618
const n = 500000000
const d = 3e20 / n
fmt.Println(d)
`,
    },
    {
      language: "Type Conversion",
      code: `i := 90
f := float64(i)
u := uint(i)

// Will be equal to the character Z
s := string(i)
`,
    },
    {
      language: "String Function",
      code: `package main

import (
	"fmt"
	s "strings"
)

func main() {
    /* Need to import strings as s */
	fmt.Println(s.Contains("test", "e"))

    /* Build in */
    fmt.Println(len("hello"))  // => 5
    // Outputs: 101
	fmt.Println("hello"[1])
    // Outputs: e
	fmt.Println(string("hello"[1]))

}
`,
    },
    {
      language: "fmt.Printf",
      code: `package main

import (
	"fmt"
	"os"
)

type point struct {
	x, y int
}

func main() {
	p := point{1, 2}
	fmt.Printf("%v\n", p)                        // => {1 2}
	fmt.Printf("%+v\n", p)                       // => {x:1 y:2}
	fmt.Printf("%#v\n", p)                       // => main.point{x:1, y:2}
	fmt.Printf("%T\n", p)                        // => main.point
	fmt.Printf("%t\n", true)                     // => TRUE
	fmt.Printf("%d\n", 123)                      // => 123
	fmt.Printf("%b\n", 14)                       // => 1110
	fmt.Printf("%c\n", 33)                       // => !
	fmt.Printf("%x\n", 456)                      // => 1c8
	fmt.Printf("%f\n", 78.9)                     // => 78.9
	fmt.Printf("%e\n", 123400000.0)              // => 1.23E+08
	fmt.Printf("%E\n", 123400000.0)              // => 1.23E+08
	fmt.Printf("%s\n", "\"string\"")             // => "string"
	fmt.Printf("%q\n", "\"string\"")             // => "\"string\""
	fmt.Printf("%x\n", "hex this")               // => 6.86578E+15
	fmt.Printf("%p\n", &p)                       // => 0xc00002c040
	fmt.Printf("|%6d|%6d|\n", 12, 345)           // => |    12|   345|
	fmt.Printf("|%6.2f|%6.2f|\n", 1.2, 3.45)     // => |  1.20|  3.45|
	fmt.Printf("|%-6.2f|%-6.2f|\n", 1.2, 3.45)   // => |1.20  |3.45  |
	fmt.Printf("|%6s|%6s|\n", "foo", "b")        // => |   foo|     b|
	fmt.Printf("|%-6s|%-6s|\n", "foo", "b")      // => |foo   |b     |

	s := fmt.Sprintf("a %s", "string")
	fmt.Println(s)

	fmt.Fprintf(os.Stderr, "an %s\n", "error")
}

`,
    },
    {
      language: "Conditional Flow control",
      code: `
a := 10

if a > 20 {
    fmt.Println(">")
} else if a < 20 {
    fmt.Println("<")
} else {
    fmt.Println("=")
}
`,
    },
    {
      language: "Switch Statement",
      code: `x := 42.0
switch x {
case 0:
case 1, 2:
    fmt.Println("Multiple matches")
case 42:   // Don't "fall through".
    fmt.Println("reached")
case 43:
    fmt.Println("Unreached")
default:
    fmt.Println("Optional")
}
`,
    },
    {
      language: "For Loop",
      code: `for i := 0; i <= 10; i++ {
  fmt.Println("i: ", i)
}
`,
    },
    {
      language: "For-Range Loop",
      code: `nums := []int{2, 3, 4}
sum := 0
for _, num := range nums {
    sum += num
}
fmt.Println("sum:", sum)
`,
    },
    {
      language: "While Loop",
      code: `i := 1
for i <= 3 {
    fmt.Println(i)
    i++
}
`,
    },
    {
      language: "Continue Keyword",
      code: `for i := 0; i <= 5; i++ {
    if i % 2 == 0 {
        continue
    }
    fmt.Println(i)
}
`,
    },
    {
      language: "Break Keyword",
      code: `for {
    fmt.Println("loop")
    break
}
`,
    },
    {
      language: "Struct & map Define",
      code: `package main

import (
	"fmt"
)

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X, v.Y) // => 4 2
}
`,
    },
    {
      language: "Literals",
      code: `v := Vertex{X: 1, Y: 2}
// Field names can be omitted
v := Vertex{1, 2}
// Y is implicit
v := Vertex{X: 1}
`,
    },
    {
      language: "Maps",
      code: `m := make(map[string]int)
m["k1"] = 7
m["k2"] = 13
fmt.Println(m) // => map[k1:7 k2:13]

v1 := m["k1"]
fmt.Println(v1)     // => 7
fmt.Println(len(m)) // => 2

delete(m, "k2")
fmt.Println(m) // => map[k1:7]

_, prs := m["k2"]
fmt.Println(prs) // => false

n := map[string]int{"foo": 1, "bar": 2}
fmt.Println(n) // => map[bar:2 foo:1]
`,
    },
    {
      language: "Multiple argument function",
      code: `func plus(a int, b int) int {
    return a + b
}
func plusPlus(a, b, c int) int {
    return a + b + c
}
fmt.Println(plus(1, 2))
fmt.Println(plusPlus(1, 2, 3))
`,
    },
    {
      language: "Multiple Return",
      code: `func vals() (int, int) {
    return 3, 7
}

a, b := vals()
fmt.Println(a)    // => 3
fmt.Println(b)    // => 7
`,
    },
    {
      language: "Naked return",
      code: `func split(sum int) (x, y int) {
  x = sum * 4 / 9
  y = sum - x
  return
}

x, y := split(17)
fmt.Println(x)   // => 7
fmt.Println(y)   // => 10
`,
    },
    {
      language: "Variadic functions",
      code: `func sum(nums ...int) {
    fmt.Print(nums, " ")
    total := 0
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}
sum(1, 2)     //=> [1 2] 3
sum(1, 2, 3)  // => [1 2 3] 6

nums := []int{1, 2, 3, 4}
sum(nums...)  // => [1 2 3 4] 10
`,
    },
    {
      language: "Function as values",
      code: `func main() {
    // assign a function to a name
    add := func(a, b int) int {
        return a + b
    }
    // use the name to call the function
    fmt.Println(add(3, 4)) // => 7
}
`,
    },
    {
      language: "Closure",
      code: `func scope() func() int{
    outer_var := 2
    foo := func() int {return outer_var}
    return foo
}

// Outpus: 2
fmt.Println(scope()())
`,
    },
    {
      language: "Import Packages",
      code: `import "fmt"
import "math/rand"
`,
    },
    {
      language: "Export Name",
      code: `// Begin with a capital letter
func Hello () {
  ···
}
`,
    },
    {
      language: "Go Concurrency Goroutines",
      code: `package main

import (
	"fmt"
	"time"
)

func f(from string) {
	for i := 0; i < 3; i++ {
		fmt.Println(from, ":", i)
	}
}

func main() {
	f("direct")
	go f("goroutine")

	go func(msg string) {
		fmt.Println(msg)
	}("going")

	time.Sleep(time.Second)
	fmt.Println("done")
}
`,
    },
    {
      language: "Wait Group",
      code: `package main

import (
	"fmt"
	"sync"
	"time"
)

func w(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("%d starting\n", id)

	time.Sleep(time.Second)
	fmt.Printf("%d done\n", id)
}

func main() {
	var wg sync.WaitGroup
	for i := 1; i <= 5; i++ {
		wg.Add(1)
		go w(i, &wg)
	}
	wg.Wait()
}
`,
    },
    {
      language: "Closing channel",
      code: `ch <- 1
ch <- 2
ch <- 3
close(ch) // Closes a channel
`,
    },
    {
      language: "Error control",
      code: `func main() {
  defer func() {
    fmt.Println("Done")
  }()
  fmt.Println("Working...")
}
`,
    },
    {
      language: "Lambda Defer",
      code: `func main() {
  var d = int64(0)
  defer func(d *int64) {
    fmt.Printf("& %v Unix Sec\n", *d)
  }(&d)
  fmt.Print("Done ")
  d = time.Now().Unix()
}
`,
    },
    {
      language: "Go Method Receivers",
      code: `type Vertex struct {
  X, Y float64
}

func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}
`,
    },
    {
      language: "A Basic Interface",
      code: `type Shape interface {
  Area() float64
  Perimeter() float64
}
`,
    },
    {
      language: "Struct",
      code: `type Rectangle struct {
  Length, Width float64
}
`,
    },
    {
      language: "Methods",
      code: `func (r Rectangle) Area() float64 {
  return r.Length * r.Width
}

func (r Rectangle) Perimeter() float64 {
  return 2 * (r.Length + r.Width)
}
`,
    },
    {
      language: "Interface Example",
      code: `func main() {
  var r Shape = Rectangle{Length: 3, Width: 4}
  fmt.Printf("Type of r: %T, Area: %v, Perimeter: %v.", r, r.Area(), r.Perimeter())
}
`,
    },
       // Add more code blocks here
  ];

  return (
    <CheatLayout>
      <Head>
        <title>GO Language Cheat Sheet - Home | Unstop Computer</title>
        <meta
          name="description"
          content="This cheat sheet provided basic syntax and methods to help you using Go."
        />
        <link rel="icon" href="/Images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="website template" />
      </Head>
      <section id="content-wrapper">
        <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-1">
          <div className="container px-2 py-8 md:flex-row">
            <div className="lg:flex-grow lg:pr-24 md:pr-16 md:mb-0">
              <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-4xl lg:text-left xl:text-4xl dark:text-blue">
                GO Language Cheat Sheet
              </h2>
              <br className="lg:block hidden" />
              <p>
                This cheat sheet provided basic syntax and methods to help you
                using Go.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {codeBlocks.map((block, index) => (
                <div key={index} className="col-span-1">
                  <CodeBlock language={block.language} code={block.code} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CheatLayout>
  );
}
