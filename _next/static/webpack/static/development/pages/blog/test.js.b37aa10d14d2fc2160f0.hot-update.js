webpackHotUpdate("static/development/pages/blog/test.js",{

/***/ "./articles/test.mdx":
/*!***************************!*\
  !*** ./articles/test.mdx ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/articles/test.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 10
      }
    }));
  };
};

var Separator = makeShortcode("Separator");
var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "In this article, I discuss why you should give Go a chance and where to start."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Golang is a programming language you might have heard about a lot during the last couple years. Even though it was created back in 2009, it has started to gain popularity only in recent years."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(Separator, {
    mdxType: "Separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, "Golang"), " popularity according to Google Trends\nThis article is not about the main selling points of Go that you usually see."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, "Instead, I would like to present to you some rather small but still significant features that you only get to know after you\u2019ve decided to give Go a try."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, "These are amazing features that are not laid out on the surface, but they can save you weeks or months of work. They can also make software development more enjoyable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, "Don\u2019t worry if Go is something new for you. This article does not require any prior experience with the language. I have included a few extra links at the bottom, in case you would like to learn a bit more."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "We will go through such topics as:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "GoDoc\nStatic code analysis\nBuilt-in testing and profiling framework\nRace condition detection\nLearning curve\nReflection\nOpinionatedness\nCulture\nPlease, note that the list doesn\u2019t follow any particular order. It is also opinionated as hell."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "GoDoc\nDocumentation in code is taken very seriously in Go. So is simplicity."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "GoDoc is a static code analyzing tool that creates beautiful documentation pages straight out of your code. A remarkable thing about GoDoc is that it doesn\u2019t use any extra languages, like JavaDoc, PHPDoc, or JSDoc to annotate constructions in your code. Just English."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "It uses as much information as it can get from the code to outline, structure, and format the documentation. And it has all the bells and whistles, such as cross-references, code samples, and direct links to your version control system repository."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "All you can do is to add a good old // MyFunc transforms Foo into Bar kind of comment which would be reflected in the documentation, too. You can even add code examples which are actually runnable via the web interface or locally."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "GoDoc is the only documentation engine for Go that is used by the whole community. This means that every library or application written in Go has the same format of documentation. In the long run, it saves you tons of time while browsing those docs."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "Here, for example, is the GoDoc page for my recent pet project: pullkee \u2014 GoDoc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "Static code analysis\nGo heavily relies on static code analysis. Examples include godoc for documentation, gofmt for code formatting, golint for code style linting, and many others."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "There are so many of them that there\u2019s even an everything-included-kind-of project called gometalinter to compose them all into a single utility."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "Those tools are commonly implemented as stand-alone command line applications and integrate easily with any coding environment."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Static code analysis isn\u2019t actually something new to modern programming, but Go sort of brings it to the absolute. I can\u2019t overestimate how much time it saved me. Also, it gives you a feeling of safety, as though someone is covering your back."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "It\u2019s very easy to create your own analyzers, as Go has dedicated built-in packages for parsing and working with Go sources."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, "You can learn more from this talk: GothamGo Kickoff Meetup: Go Static Analysis Tools by Alan Donovan."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, "Built-in testing and profiling framework\nHave you ever tried to pick a testing framework for a Javascript project you are starting from scratch? If so, you might understand that struggle of going through such an analysis paralysis. You might have also realized that you were not using like 80% of the framework you have chosen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "The issue repeats over again once you need to do some reliable profiling."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "Go comes with a built-in testing tool designed for simplicity and efficiency. It provides you the simplest API possible, and makes minimum assumptions. You can use it for different kinds of testing, profiling, and even to provide executable code examples."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "It produces CI-friendly output out-of-box, and the usage is usually as easy as running go test. Of course, it also supports advanced features like running tests in parallel, marking them skipped, and many more."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, "Race condition detection\nYou might already know about Goroutines, which are used in Go to achieve concurrent code execution. If you don\u2019t, here\u2019s a really brief explanation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "Concurrent programming in complex applications is never easy regardless of the specific technique, partly due to the possibility of race conditions."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, "Simply put, race conditions happen when several concurrent operations finish in an unpredicted order. It might lead to a huge number of bugs, which are particularly hard to chase down. Ever spent a day debugging an integration test which only worked in about 80% of executions? It probably was a race condition."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "All that said, concurrent programming is taken very seriously in Go and, luckily, we have quite a powerful tool to hunt those race conditions down. It is fully integrated into Go\u2019s toolchain."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "You can read more about it and learn how to use it here: Introducing the Go Race Detector \u2014 The Go Blog."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, "Learning curve\nYou can learn ALL Go\u2019s language features in one evening. I mean it. Of course, there are also the standard library, and the best practices in different, more specific areas. But two hours would totally be enough time to get you confidently writing a simple HTTP server, or a command-line app."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, "The project has marvelous documentation, and most of the advanced topics have already been covered on their blog: The Go Programming Language Blog."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "Go is much easier to bring to your team than Java (and the family), Javascript, Ruby, Python, or even PHP. The environment is easy to setup, and the investment your team needs to make is much smaller before they can complete your first production code."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "Reflection\nCode reflection is essentially an ability to sneak under the hood and access different kinds of meta-information about your language constructs, such as variables or functions."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, "Given that Go is a statically typed language, it\u2019s exposed to a number of various limitations when it comes to more loosely typed abstract programming. Especially compared to languages like Javascript or Python."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "Moreover, Go doesn\u2019t implement a concept called Generics which makes it even more challenging to work with multiple types in an abstract way. Nevertheless, many people think it\u2019s actually beneficial for the language because of the amount of complexity Generics bring along. And I totally agree."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, "According to Go\u2019s philosophy (which is a separate topic itself), you should try hard to not over-engineer your solutions. And this also applies to dynamically-typed programming. Stick to static types as much as possible, and use interfaces when you know exactly what sort of types you\u2019re dealing with. Interfaces are very powerful and ubiquitous in Go."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, "However, there are still cases in which you can\u2019t possibly know what sort of data you are facing. A great example is JSON. You convert all the kinds of data back and forth in your applications. Strings, buffers, all sorts of numbers, nested structs and more."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, "In order to pull that off, you need a tool to examine all the data in runtime that acts differently depending on its type and structure. Reflection to rescue! Go has a first-class reflect package to enable your code to be as dynamic as it would be in a language like Javascript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, "An important caveat is to know what price you pay for using it \u2014 and only use it when there is no simpler way."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, "You can read more about it here: The Laws of Reflection \u2014 The Go Blog."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, "You can also read some real code from the JSON package sources here: src/encoding/json/encode.go \u2014 Source Code"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, "Opinionatedness\nIs there such a word, by the way?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "Coming from the Javascript world, one of the most daunting processes I faced was deciding which conventions and tools I needed to use. How should I style my code? What testing library should I use? How should I go about structure? What programming paradigms and approaches should I rely on?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, "Which sometimes basically got me stuck. I was doing this instead of writing the code and satisfying the users."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "To begin with, I should note that I totally get where those conventions should come from. It\u2019s always you and your team. Anyway, even a group of experienced Javascript developers can easily find themselves having most of the experience with entirely different tools and paradigms to achieve kind of the same results."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, "This makes the analysis paralysis cloud explode over the whole team, and also makes it harder for the individuals to integrate with each other."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "Well, Go is different. You have only one style guide that everyone follows. You have only one testing framework which is built into the basic toolchain. You have a lot of strong opinions on how to structure and maintain your code. How to pick names. What structuring patterns to follow. How to do concurrency better."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, "While this might seem too restrictive, it saves tons of time for you and your team. Being somewhat limited is actually a great thing when you are coding. It gives you a more straightforward way to go when architecting new code, and makes it easier to reason about the existing one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, "As a result, most of the Go projects look pretty alike code-wise."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, "Culture\nPeople say that every time you learn a new spoken language, you also soak in some part of the culture of the people who speak that language. Thus, the more languages you learn, more personal changes you might experience."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, "It\u2019s the same with programming languages. Regardless of how you are going to apply a new programming language in the future, it always gives you a new perspective on programming in general, or on some specific techniques."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, "Be it functional programming, pattern matching, or prototypal inheritance. Once you\u2019ve learned it, you carry these approaches with you which broadens the problem-solving toolset that you have as a software developer. It also changes the way you see high-quality programming in general."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, "And Go is a terrific investment here. The main pillar of Go\u2019s culture is keeping simple, down-to-earth code without creating many redundant abstractions and putting the maintainability at the top. It\u2019s also a part of the culture to spend the most time actually working on the codebase, instead of tinkering with the tools and the environment. Or choosing between different variations of those."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, "Go is also all about \u201Cthere should be only one way of doing a thing.\u201D"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, "A little side note. It\u2019s also partially true that Go usually gets in your way when you need to build relatively complex abstractions. Well, I\u2019d say that\u2019s the tradeoff for its simplicity."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, "If you really need to write a lot of abstract code with complex relationships, you\u2019d be better off using languages like Java or Python. However, even when it\u2019s not obvious, it\u2019s very rarely the case."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, "Always use the best tool for the job!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, "Conclusion\nYou might have heard of Go before. Or maybe it\u2019s something that has been staying out of your radar for a while. Either way, chances are, Go can be a very decent choice for you or your team when starting a new project or improving the existing one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, "This is not a complete list of all the amazing things about Go. Just the undervalued ones."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, "Please, give Go a try with A Tour of Go which is an incredible place to start."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "If you wish to learn more about Go\u2019s benefits, you can check out these links:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, "Why should you learn Go? \u2014 Keval Patel \u2014 Medium\nFarewell Node.js \u2014 TJ Holowaychuk \u2014 Medium\nShare your observations down in the comments!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "Even if you are not specifically looking for a new language to use, it\u2019s worth it to spend an hour or two getting the feel of it. And maybe it can become quite useful for you in the future."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, "Always be looking for the best tools for your craft!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, "If you like this article, please consider following me for more, and clicking on those funny green little hands right below this text for sharing. ???"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, "Check out my Github and follow me on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 49
    }
  }), "Twitter"), "!"));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=test.js.b37aa10d14d2fc2160f0.hot-update.js.map