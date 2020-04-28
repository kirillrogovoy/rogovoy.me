webpackHotUpdate("static/development/pages/blog/test.js",{

/***/ "./src/article.tsx":
/*!*************************!*\
  !*** ./src/article.tsx ***!
  \*************************/
/*! exports provided: renderArticle, getAllArticles, getRandomArticles */
/*! exports used: getAllArticles, getRandomArticles, renderArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRandomArticles; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/article */ "./src/components/article.tsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/link */ "./src/components/link.tsx");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/article.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var articles = [{
  id: 'here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about',
  date: '01.02.2018',
  title: 'Here are some amazing advantages of Go that you don’t hear much about',
  description: 'I discuss why you should give Go a chance and where to start.',
  keywords: ['golang'],
  origin: 'https://freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/'
}, {
  id: 'test',
  date: '01.02.2018',
  title: 'Here are some amazing advantages of go that you dont hear much about',
  description: 'test description',
  keywords: ['test'],
  hidden: true,
  tweetId: '1162459837910978561'
}];
function renderArticle(id, Content) {
  var _this = this;

  var articleMeta = articles.find(function (a) {
    return a.id === id;
  });
  var components = {
    a: function a(props) {
      return __jsx(_components_link__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
        href: props.href,
        style: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 79
        }
      }, props.children);
    }
  };
  return __jsx(_components_article__WEBPACK_IMPORTED_MODULE_2__[/* ArticleComponent */ "a"], {
    article: articleMeta,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }
  }, __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__[/* MDXProvider */ "a"], {
    components: components,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  })));
}
function getAllArticles() {
  return articles.filter(function (post) {
    return !post.hidden;
  });
}
function getRandomArticles(number, exceptArticleId) {
  return shuffle(getAllArticles().filter(function (a) {
    return a.id !== exceptArticleId;
  })).slice(0, number);
}

function shuffle(b) {
  var a = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b);

  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }

  return a;
}

/***/ })

})
//# sourceMappingURL=test.js.a8f5ff7a6af3ce46ee91.hot-update.js.map