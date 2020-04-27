webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/*! exports used: MDXProvider, mdx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2({}, contextComponents, {}, components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
      ref: ref
    }, etc, {
      components: propComponents
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

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
  hidden: false,
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

/***/ }),

/***/ "./src/components/article.tsx":
/*!************************************!*\
  !*** ./src/components/article.tsx ***!
  \************************************/
/*! exports provided: ArticleComponent */
/*! exports used: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_articles_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/articles-layout */ "./src/components/articles-layout.tsx");
/* harmony import */ var _components_article_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/article-list */ "./src/components/article-list.tsx");
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./separator */ "./src/components/separator.tsx");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../article */ "./src/article.tsx");
/* harmony import */ var _email_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./email-form */ "./src/components/email-form.tsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./link */ "./src/components/link.tsx");
var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/components/article.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function ArticleComponent(_ref) {
  var article = _ref.article,
      children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(_components_articles_layout__WEBPACK_IMPORTED_MODULE_4__[/* ArticleLayout */ "a"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, article.title + ' — Kirill Rogovoy'), __jsx("meta", {
    name: "og:title",
    content: article.title,
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:image",
    content: "/".concat(article.id, ".jpg"),
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: article.description,
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:description",
    content: article.description,
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: article.keywords.join(','),
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), article.tweetId && __jsx(TwitterTweetButton, {
    text: article.title,
    path: router.asPath,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 27
    }
  }), __jsx(_link__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
    style: 1,
    href: "/blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, '<-', " Back to the list"), __jsx("div", {
    className: "jsx-1081535726" + " " + "mb-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1081535726" + " " + "text-link2 text-5xl leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, article.title), __jsx("div", {
    className: "jsx-1081535726" + " " + "italic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Published ", article.date)), __jsx("div", {
    className: "jsx-1081535726" + " " + "markdown mb-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, children), __jsx(_separator__WEBPACK_IMPORTED_MODULE_6__[/* Separator */ "a"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1081535726",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1081535726" + " " + "text-center mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, article.tweetId ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_link__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
    style: 2,
    href: "https://twitter.com/krogovoy/status/".concat(article.tweetId),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Discuss"), ' ', "or", ' ', __jsx(_link__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
    style: 2,
    href: makeTwitterUrl(article.title, router.asPath),
    newTab: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Share"), ' ', "on Twitter") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Follow me on", ' ', __jsx(_link__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
    style: 2,
    href: "https://twitter.com/krogovoy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Twitter"), ' ', "or check out my", ' ', __jsx(_link__WEBPACK_IMPORTED_MODULE_9__[/* Link */ "a"], {
    style: 2,
    href: "https://github.com/kirillrogovoy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Github"))), __jsx(_email_form__WEBPACK_IMPORTED_MODULE_8__[/* EmailForm */ "a"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx(OtherArticles, {
    currentArticleId: article.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1081535726",
    __self: this
  }, ".markdown{font-size:21px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;line-height:32px;text-align:start;}.markdown img{width:100%;margin-top:15px;}.markdown h2{font-size:34px;line-height:39px;margin:56px 0 0 0;}.markdown h2+p{margin-top:13px;}.markdown p{margin:29px 0 0 0;}.markdown ul,.markdown ol{margin-top:5px;}.markdown li{list-style-type:square;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL3JvZ292b3kubWUvc3JjL2NvbXBvbmVudHMvYXJ0aWNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V5QixBQUcwQixBQU1KLEFBSUksQUFLQyxBQUdFLEFBSUgsQUFHUSxXQWxCUCxJQU5HLEFBVUYsQUFZbkIsQ0FQQSxFQUdBLEtBT0EsSUFsQkEsS0FJb0Isa0JBQ3BCLDBEQVhtQixpQkFDQSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2tpcmlsbHJvZ292b3kvUHJvamVjdHMvcm9nb3ZveS5tZS9zcmMvY29tcG9uZW50cy9hcnRpY2xlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQXJ0aWNsZUxheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXJ0aWNsZXMtbGF5b3V0J1xuaW1wb3J0IHsgQXJ0aWNsZUxpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL2FydGljbGUtbGlzdCdcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gJy4vc2VwYXJhdG9yJ1xuaW1wb3J0IHsgZ2V0UmFuZG9tQXJ0aWNsZXMsIEFydGljbGVNZXRhIH0gZnJvbSAnLi4vYXJ0aWNsZSdcbmltcG9ydCB7IEVtYWlsRm9ybSB9IGZyb20gJy4vZW1haWwtZm9ybSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuL2xpbmsnXG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBhcnRpY2xlOiBBcnRpY2xlTWV0YVxufT5cblxuZXhwb3J0IGZ1bmN0aW9uIEFydGljbGVDb21wb25lbnQoeyBhcnRpY2xlLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlTGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YXJ0aWNsZS50aXRsZSArICcg4oCUIEtpcmlsbCBSb2dvdm95J308L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXthcnRpY2xlLnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6aW1hZ2VcIiBjb250ZW50PXtgLyR7YXJ0aWNsZS5pZH0uanBnYH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YXJ0aWNsZS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YXJ0aWNsZS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YXJ0aWNsZS5rZXl3b3Jkcy5qb2luKCcsJyl9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7YXJ0aWNsZS50d2VldElkICYmIDxUd2l0dGVyVHdlZXRCdXR0b24gdGV4dD17YXJ0aWNsZS50aXRsZX0gcGF0aD17cm91dGVyLmFzUGF0aH0gLz59XG4gICAgICA8TGluayBzdHlsZT17MX0gaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgIHsnPC0nfSBCYWNrIHRvIHRoZSBsaXN0XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsyIHRleHQtNXhsIGxlYWRpbmctdGlnaHRcIj57YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0YWxpY1wiPlB1Ymxpc2hlZCB7YXJ0aWNsZS5kYXRlfTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24gbWItMTBcIj57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIDxTZXBhcmF0b3IgLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+XG4gICAgICAgICAge2FydGljbGUudHdlZXRJZCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMaW5rIHN0eWxlPXsyfSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9rcm9nb3ZveS9zdGF0dXMvJHthcnRpY2xlLnR3ZWV0SWR9YH0+XG4gICAgICAgICAgICAgICAgRGlzY3Vzc1xuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgb3J7JyAnfVxuICAgICAgICAgICAgICA8TGluayBzdHlsZT17Mn0gaHJlZj17bWFrZVR3aXR0ZXJVcmwoYXJ0aWNsZS50aXRsZSwgcm91dGVyLmFzUGF0aCl9IG5ld1RhYj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgU2hhcmVcbiAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgIG9uIFR3aXR0ZXJcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBGb2xsb3cgbWUgb257JyAnfVxuICAgICAgICAgICAgICA8TGluayBzdHlsZT17Mn0gaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20va3JvZ292b3lcIj5cbiAgICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICBvciBjaGVjayBvdXQgbXl7JyAnfVxuICAgICAgICAgICAgICA8TGluayBzdHlsZT17Mn0gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9raXJpbGxyb2dvdm95XCI+XG4gICAgICAgICAgICAgICAgR2l0aHViXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RW1haWxGb3JtIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPE90aGVyQXJ0aWNsZXMgY3VycmVudEFydGljbGVJZD17YXJ0aWNsZS5pZH0gLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm1hcmtkb3duIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgfVxuICAgICAgICAubWFya2Rvd24gaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrZG93biBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xuICAgICAgICAgIG1hcmdpbjogNTZweCAwIDAgMDtcbiAgICAgICAgfVxuICAgICAgICAubWFya2Rvd24gaDIgKyBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrZG93biBwIHtcbiAgICAgICAgICBtYXJnaW46IDI5cHggMCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgLm1hcmtkb3duIHVsLFxuICAgICAgICAubWFya2Rvd24gb2wge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubWFya2Rvd24gbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9BcnRpY2xlTGF5b3V0PlxuICApXG59XG5cbmZ1bmN0aW9uIE90aGVyQXJ0aWNsZXMoeyBjdXJyZW50QXJ0aWNsZUlkIH06IHsgY3VycmVudEFydGljbGVJZDogc3RyaW5nIH0pIHtcbiAgY29uc3QgYXJ0aWNsZXMgPSBnZXRSYW5kb21BcnRpY2xlcygzLCBjdXJyZW50QXJ0aWNsZUlkKVxuICBpZiAoYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bFwiPk90aGVyIGFydGljbGVzOjwvaDM+XG4gICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIG1ha2VUd2l0dGVyVXJsKHRleHQ6IHN0cmluZywgcGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHNpdGVVcmwgPSBuZXcgVVJMKCdodHRwczovL3JvZ292b3kubWUnKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1tdXRhYmxlL25vLW11dGF0aW9uXG4gIHNpdGVVcmwucGF0aG5hbWUgPSBwYXRoXG5cbiAgY29uc3QgdHdpdHRlclVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0JylcbiAgdHdpdHRlclVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0ZXh0JywgdGV4dClcbiAgdHdpdHRlclVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd1cmwnLCBzaXRlVXJsLnRvU3RyaW5nKCkpXG4gIHR3aXR0ZXJVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndmlhJywgJ2tyb2dvdm95JylcblxuICByZXR1cm4gdHdpdHRlclVybC50b1N0cmluZygpXG59XG5cbnR5cGUgVHdpdHRlclR3ZWV0QnV0dG9uUHJvcHMgPSB7XG4gIHRleHQ6IHN0cmluZ1xuICBwYXRoOiBzdHJpbmdcbn1cbmZ1bmN0aW9uIFR3aXR0ZXJUd2VldEJ1dHRvbihwcm9wczogVHdpdHRlclR3ZWV0QnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgdHdpdHRlclVybCA9IG1ha2VUd2l0dGVyVXJsKHByb3BzLnRleHQsIHByb3BzLnBhdGgpXG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgbGVmdDogJzgwJScsIHdpZHRoOiAnNTBweCcgfX1cbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgIGhyZWY9e3R3aXR0ZXJVcmwudG9TdHJpbmcoKX1cbiAgICA+XG4gICAgICA8c3ZnXG4gICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgeT1cIjBweFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDU1LjczMSA0NTUuNzMxXCJcbiAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICA+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxnPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gc3R5bGU9e3sgZmlsbDogJyMzMzMnIH19IHdpZHRoPVwiNDU1LjczMVwiIGhlaWdodD1cIjQ1NS43MzFcIiAvPnsnICd9XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjRkZGRkZGJyB9fVxuICAgICAgICAgICAgZD1cIk02MC4zNzcsMzM3LjgyMmMzMC4zMywxOS4yMzYsNjYuMzA4LDMwLjM2OCwxMDQuODc1LDMwLjM2OGMxMDguMzQ5LDAsMTk2LjE4LTg3Ljg0MSwxOTYuMTgtMTk2LjE4XG4gICAgICAgICAgICAgIGMwLTIuNzA1LTAuMDU3LTUuMzktMC4xNjEtOC4wNjdjMy45MTktMy4wODQsMjguMTU3LTIyLjUxMSwzNC4wOTgtMzVjMCwwLTE5LjY4Myw4LjE4LTM4Ljk0NywxMC4xMDdcbiAgICAgICAgICAgICAgYy0wLjAzOCwwLTAuMDg1LDAuMDA5LTAuMTIzLDAuMDA5YzAsMCwwLjAzOC0wLjAxOSwwLjEwNC0wLjA2NmMxLjc3NS0xLjE4NiwyNi41OTEtMTguMDc5LDI5Ljk1MS0zOC4yMDdcbiAgICAgICAgICAgICAgYzAsMC0xMy45MjIsNy40MzEtMzMuNDE1LDEzLjkzMmMtMy4yMjcsMS4wNzItNi42MDUsMi4xMjYtMTAuMDg4LDMuMTAzYy0xMi41NjUtMTMuNDEtMzAuNDI1LTIxLjc4LTUwLjI1LTIxLjc4XG4gICAgICAgICAgICAgIGMtMzguMDI3LDAtNjguODQxLDMwLjgwNS02OC44NDEsNjguODAzYzAsNS4zNjIsMC42MTcsMTAuNTgxLDEuNzg0LDE1LjU5MmMtNS4zMTQtMC4yMTgtODYuMjM3LTQuNzU1LTE0MS4yODktNzEuNDIzXG4gICAgICAgICAgICAgIGMwLDAtMzIuOTAyLDQ0LjkxNywxOS42MDcsOTEuMTA1YzAsMC0xNS45NjItMC42MzYtMjkuNzMzLTguODY0YzAsMC01LjA1OCw1NC40MTYsNTQuNDA3LDY4LjMyOWMwLDAtMTEuNzAxLDQuNDMyLTMwLjM2OCwxLjI3MlxuICAgICAgICAgICAgICBjMCwwLDEwLjQzOSw0My45NjgsNjMuMjcxLDQ4LjA3N2MwLDAtNDEuNzc3LDM3Ljc0LTEwMS4wODEsMjguODg1TDYwLjM3NywzMzcuODIyelwiXG4gICAgICAgICAgLz57JyAnfVxuICAgICAgICA8L2c+eycgJ31cbiAgICAgICAgPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz4gPGc+IDwvZz57JyAnfVxuICAgICAgICA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPnsnICd9XG4gICAgICA8L3N2Zz5cbiAgICA8L2E+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/rogovoy.me/src/components/article.tsx */"));
}

function OtherArticles(_ref2) {
  var currentArticleId = _ref2.currentArticleId;
  var articles = Object(_article__WEBPACK_IMPORTED_MODULE_7__[/* getRandomArticles */ "b"])(3, currentArticleId);

  if (articles.length === 0) {
    return null;
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "Other articles:"), __jsx(_components_article_list__WEBPACK_IMPORTED_MODULE_5__[/* ArticleList */ "a"], {
    articles: articles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }));
}

function makeTwitterUrl(text, path) {
  var siteUrl = new URL('https://rogovoy.me'); // eslint-disable-next-line immutable/no-mutation

  siteUrl.pathname = path;
  var twitterUrl = new URL('https://twitter.com/intent/tweet');
  twitterUrl.searchParams.append('text', text);
  twitterUrl.searchParams.append('url', siteUrl.toString());
  twitterUrl.searchParams.append('via', 'krogovoy');
  return twitterUrl.toString();
}

function TwitterTweetButton(props) {
  var twitterUrl = makeTwitterUrl(props.text, props.path);
  return __jsx("a", {
    style: {
      position: 'fixed',
      top: 0,
      left: '80%',
      width: '50px'
    },
    target: "_blank",
    rel: "noreferrer noopener",
    href: twitterUrl.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, __jsx("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 455.731 455.731",
    xmlSpace: "preserve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, ' ', __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, ' ', __jsx("rect", {
    x: 0,
    y: 0,
    style: {
      fill: '#333'
    },
    width: "455.731",
    height: "455.731",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }), ' ', __jsx("path", {
    style: {
      fill: '#FFFFFF'
    },
    d: "M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18 c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107 c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207 c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78 c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423 c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272 c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }), ' '), ' ', __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 18
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 27
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 36
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 54
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 63
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 72
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 81
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 90
    }
  }, " "), ' ', __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 18
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 27
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 36
    }
  }, " "), " ", __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 45
    }
  }, " "), ' '));
}

/***/ }),

/***/ "./src/pages/blog.tsx":
/*!****************************!*\
  !*** ./src/pages/blog.tsx ***!
  \****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_articles_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/articles-layout */ "./src/components/articles-layout.tsx");
/* harmony import */ var _components_article_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/article-list */ "./src/components/article-list.tsx");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article */ "./src/article.tsx");
var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/pages/blog.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Blog() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_components_articles_layout__WEBPACK_IMPORTED_MODULE_2__[/* ArticleLayout */ "a"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Kirill Rogovoy \u2014 Blog")), __jsx(_components_article_list__WEBPACK_IMPORTED_MODULE_3__[/* ArticleList */ "a"], {
    articles: Object(_article__WEBPACK_IMPORTED_MODULE_4__[/* getAllArticles */ "a"])(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=blog.js.af56c5a6a1ec6c13969a.hot-update.js.map