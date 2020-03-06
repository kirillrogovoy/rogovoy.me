webpackHotUpdate("static/development/pages/blog.js",{

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
/* harmony import */ var _components_articles_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/articles-layout */ "./src/components/articles-layout.tsx");
/* harmony import */ var _components_article_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/article-list */ "./src/components/article-list.tsx");
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./separator */ "./src/components/separator.tsx");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article */ "./src/article.tsx");
/* harmony import */ var _email_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-form */ "./src/components/email-form.tsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link */ "./src/components/link.tsx");
var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/components/article.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function ArticleComponent(_ref) {
  var article = _ref.article,
      children = _ref.children;
  return __jsx(_components_articles_layout__WEBPACK_IMPORTED_MODULE_3__[/* ArticleLayout */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, article.title + ' — Kirill Rogovoy'), __jsx("meta", {
    name: "og:title",
    content: article.title,
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    name: "og:image",
    content: "/".concat(article.id, ".jpg"),
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: article.description,
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    name: "og:description",
    content: article.description,
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: article.tags.join(','),
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), article.tweetId && __jsx(TwitterRetweetButton, {
    tweetId: article.tweetId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_link__WEBPACK_IMPORTED_MODULE_8__[/* Link */ "a"], {
    style: 1,
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, '<-', " Back to the list"), __jsx("div", {
    className: "jsx-4219571853" + " " + "mb-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4219571853" + " " + "text-link2 text-5xl leading-tight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, article.title), __jsx("div", {
    className: "jsx-4219571853" + " " + "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Published ", article.date)), __jsx("div", {
    className: "jsx-4219571853" + " " + "markdown mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children), __jsx(_separator__WEBPACK_IMPORTED_MODULE_5__[/* Separator */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4219571853",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4219571853" + " " + "text-center mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, article.tweetId ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Discuss on", ' ', __jsx(_link__WEBPACK_IMPORTED_MODULE_8__[/* Link */ "a"], {
    style: 2,
    href: "https://twitter.com/krogovoy/status/".concat(article.tweetId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Twitter")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Follow me on", ' ', __jsx(_link__WEBPACK_IMPORTED_MODULE_8__[/* Link */ "a"], {
    style: 2,
    href: "https://twitter.com/krogovoy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Twitter"), ' ', "or check out my", ' ', __jsx(_link__WEBPACK_IMPORTED_MODULE_8__[/* Link */ "a"], {
    style: 2,
    href: "https://github.com/kirillrogovoy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Github"))), __jsx(_email_form__WEBPACK_IMPORTED_MODULE_7__[/* EmailForm */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(OtherArticles, {
    currentArticleId: article.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4219571853",
    __self: this
  }, ".markdown{font-size:21px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:30px;text-align:start;}.markdown img{width:100%;margin-top:15px;}.markdown h2{font-size:34px;line-height:39px;margin:56px 0 0 0;}.markdown h2+p{margin-top:13px;}.markdown p{margin:29px 0 0 0;}.markdown ul,.markdown ol{margin-top:5px;}.markdown li{list-style-type:square;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9raXJpbGxyb2dvdm95L1Byb2plY3RzL3JvZ292b3kubWUvc3JjL2NvbXBvbmVudHMvYXJ0aWNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0V5QixBQUcwQixBQU1KLEFBSUksQUFLQyxBQUdFLEFBSUgsQUFHUSxXQWxCUCxJQU5LLEFBVUosQUFZbkIsQ0FQQSxFQUdBLEtBT0EsSUFsQkEsS0FJb0Isa0JBQ3BCLGtFQVhtQixpQkFDQSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2tpcmlsbHJvZ292b3kvUHJvamVjdHMvcm9nb3ZveS5tZS9zcmMvY29tcG9uZW50cy9hcnRpY2xlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEFydGljbGVMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FydGljbGVzLWxheW91dCdcbmltcG9ydCB7IEFydGljbGVMaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hcnRpY2xlLWxpc3QnXG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tICcuL3NlcGFyYXRvcidcbmltcG9ydCB7IGdldFJhbmRvbUFydGljbGVzLCBBcnRpY2xlTWV0YSB9IGZyb20gJy4uL2FydGljbGUnXG5pbXBvcnQgeyBFbWFpbEZvcm0gfSBmcm9tICcuL2VtYWlsLWZvcm0nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi9saW5rJ1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IFByb3BzV2l0aENoaWxkcmVuPHtcbiAgYXJ0aWNsZTogQXJ0aWNsZU1ldGFcbn0+XG5cbmV4cG9ydCBmdW5jdGlvbiBBcnRpY2xlQ29tcG9uZW50KHsgYXJ0aWNsZSwgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXJ0aWNsZUxheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2FydGljbGUudGl0bGUgKyAnIOKAlCBLaXJpbGwgUm9nb3ZveSd9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17YXJ0aWNsZS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmltYWdlXCIgY29udGVudD17YC8ke2FydGljbGUuaWR9LmpwZ2B9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2FydGljbGUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2FydGljbGUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2FydGljbGUudGFncy5qb2luKCcsJyl9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7YXJ0aWNsZS50d2VldElkICYmIDxUd2l0dGVyUmV0d2VldEJ1dHRvbiB0d2VldElkPXthcnRpY2xlLnR3ZWV0SWR9IC8+fVxuICAgICAgPExpbmsgc3R5bGU9ezF9IGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICB7JzwtJ30gQmFjayB0byB0aGUgbGlzdFxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1saW5rMiB0ZXh0LTV4bCBsZWFkaW5nLXRpZ2h0XCI+e2FydGljbGUudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGFsaWNcIj5QdWJsaXNoZWQge2FydGljbGUuZGF0ZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duIG1iLTEwXCI+e2NoaWxkcmVufTwvZGl2PlxuXG4gICAgICA8U2VwYXJhdG9yIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgIHthcnRpY2xlLnR3ZWV0SWQgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBEaXNjdXNzIG9ueycgJ31cbiAgICAgICAgICAgICAgPExpbmsgc3R5bGU9ezJ9IGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2tyb2dvdm95L3N0YXR1cy8ke2FydGljbGUudHdlZXRJZH1gfT5cbiAgICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBGb2xsb3cgbWUgb257JyAnfVxuICAgICAgICAgICAgICA8TGluayBzdHlsZT17Mn0gaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20va3JvZ292b3lcIj5cbiAgICAgICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICBvciBjaGVjayBvdXQgbXl7JyAnfVxuICAgICAgICAgICAgICA8TGluayBzdHlsZT17Mn0gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9raXJpbGxyb2dvdm95XCI+XG4gICAgICAgICAgICAgICAgR2l0aHViXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RW1haWxGb3JtIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPE90aGVyQXJ0aWNsZXMgY3VycmVudEFydGljbGVJZD17YXJ0aWNsZS5pZH0gLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm1hcmtkb3duIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrZG93biBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1hcmtkb3duIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gICAgICAgICAgbWFyZ2luOiA1NnB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrZG93biBoMiArIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1hcmtkb3duIHAge1xuICAgICAgICAgIG1hcmdpbjogMjlweCAwIDAgMDtcbiAgICAgICAgfVxuICAgICAgICAubWFya2Rvd24gdWwsXG4gICAgICAgIC5tYXJrZG93biBvbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYXJrZG93biBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0FydGljbGVMYXlvdXQ+XG4gIClcbn1cblxuZnVuY3Rpb24gT3RoZXJBcnRpY2xlcyh7IGN1cnJlbnRBcnRpY2xlSWQgfTogeyBjdXJyZW50QXJ0aWNsZUlkOiBzdHJpbmcgfSkge1xuICBjb25zdCBhcnRpY2xlcyA9IGdldFJhbmRvbUFydGljbGVzKDMsIGN1cnJlbnRBcnRpY2xlSWQpXG4gIGlmIChhcnRpY2xlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+T3RoZXIgYXJ0aWNsZXM6PC9oMz5cbiAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gVHdpdHRlclJldHdlZXRCdXR0b24oeyB0d2VldElkIH06IHsgdHdlZXRJZDogc3RyaW5nIH0pIHtcbiAgY29uc3QgdHdpdHRlclVybCA9IG5ldyBVUkwoJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3JldHdlZXQnKVxuICB0d2l0dGVyVXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3R3ZWV0X2lkJywgdHdlZXRJZClcblxuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCBsZWZ0OiAnODAlJywgd2lkdGg6ICc1MHB4JyB9fVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgaHJlZj17dHdpdHRlclVybC50b1N0cmluZygpfVxuICAgID5cbiAgICAgIDxzdmdcbiAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgIHg9XCIwcHhcIlxuICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA0NTUuNzMxIDQ1NS43MzFcIlxuICAgICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgID5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPGc+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSBzdHlsZT17eyBmaWxsOiAnIzMzMycgfX0gd2lkdGg9XCI0NTUuNzMxXCIgaGVpZ2h0PVwiNDU1LjczMVwiIC8+eycgJ31cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogJyNGRkZGRkYnIH19XG4gICAgICAgICAgICBkPVwiTTYwLjM3NywzMzcuODIyYzMwLjMzLDE5LjIzNiw2Ni4zMDgsMzAuMzY4LDEwNC44NzUsMzAuMzY4YzEwOC4zNDksMCwxOTYuMTgtODcuODQxLDE5Ni4xOC0xOTYuMThcbiAgICAgICAgICAgICAgYzAtMi43MDUtMC4wNTctNS4zOS0wLjE2MS04LjA2N2MzLjkxOS0zLjA4NCwyOC4xNTctMjIuNTExLDM0LjA5OC0zNWMwLDAtMTkuNjgzLDguMTgtMzguOTQ3LDEwLjEwN1xuICAgICAgICAgICAgICBjLTAuMDM4LDAtMC4wODUsMC4wMDktMC4xMjMsMC4wMDljMCwwLDAuMDM4LTAuMDE5LDAuMTA0LTAuMDY2YzEuNzc1LTEuMTg2LDI2LjU5MS0xOC4wNzksMjkuOTUxLTM4LjIwN1xuICAgICAgICAgICAgICBjMCwwLTEzLjkyMiw3LjQzMS0zMy40MTUsMTMuOTMyYy0zLjIyNywxLjA3Mi02LjYwNSwyLjEyNi0xMC4wODgsMy4xMDNjLTEyLjU2NS0xMy40MS0zMC40MjUtMjEuNzgtNTAuMjUtMjEuNzhcbiAgICAgICAgICAgICAgYy0zOC4wMjcsMC02OC44NDEsMzAuODA1LTY4Ljg0MSw2OC44MDNjMCw1LjM2MiwwLjYxNywxMC41ODEsMS43ODQsMTUuNTkyYy01LjMxNC0wLjIxOC04Ni4yMzctNC43NTUtMTQxLjI4OS03MS40MjNcbiAgICAgICAgICAgICAgYzAsMC0zMi45MDIsNDQuOTE3LDE5LjYwNyw5MS4xMDVjMCwwLTE1Ljk2Mi0wLjYzNi0yOS43MzMtOC44NjRjMCwwLTUuMDU4LDU0LjQxNiw1NC40MDcsNjguMzI5YzAsMC0xMS43MDEsNC40MzItMzAuMzY4LDEuMjcyXG4gICAgICAgICAgICAgIGMwLDAsMTAuNDM5LDQzLjk2OCw2My4yNzEsNDguMDc3YzAsMC00MS43NzcsMzcuNzQtMTAxLjA4MSwyOC44ODVMNjAuMzc3LDMzNy44MjJ6XCJcbiAgICAgICAgICAvPnsnICd9XG4gICAgICAgIDwvZz57JyAnfVxuICAgICAgICA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPiA8Zz4gPC9nPnsnICd9XG4gICAgICAgIDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+IDxnPiA8L2c+eycgJ31cbiAgICAgIDwvc3ZnPlxuICAgIDwvYT5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/kirillrogovoy/Projects/rogovoy.me/src/components/article.tsx */"));
}

function OtherArticles(_ref2) {
  var currentArticleId = _ref2.currentArticleId;
  var articles = Object(_article__WEBPACK_IMPORTED_MODULE_6__[/* getRandomArticles */ "b"])(3, currentArticleId);

  if (articles.length === 0) {
    return null;
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("h3", {
    className: "text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Other articles:"), __jsx(_components_article_list__WEBPACK_IMPORTED_MODULE_4__[/* ArticleList */ "a"], {
    articles: articles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }));
}

function TwitterRetweetButton(_ref3) {
  var tweetId = _ref3.tweetId;
  var twitterUrl = new URL('https://twitter.com/intent/retweet');
  twitterUrl.searchParams.append('tweet_id', tweetId);
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 455.731 455.731",
    xmlSpace: "preserve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, ' ', __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, ' ', __jsx("rect", {
    x: 0,
    y: 0,
    style: {
      fill: '#333'
    },
    width: "455.731",
    height: "455.731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), ' ', __jsx("path", {
    style: {
      fill: '#FFFFFF'
    },
    d: "M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18 c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107 c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207 c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78 c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423 c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272 c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), ' '), ' ', __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, " "), ' ', __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, " "), " ", __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, " "), ' '));
}

/***/ }),

/***/ "./src/components/articles-layout.tsx":
/*!********************************************!*\
  !*** ./src/components/articles-layout.tsx ***!
  \********************************************/
/*! exports provided: ArticleLayout */
/*! exports used: ArticleLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/components/link.tsx");
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./separator */ "./src/components/separator.tsx");
/* harmony import */ var _google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-analytics */ "./src/components/google-analytics.tsx");
/* harmony import */ var _email_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-form */ "./src/components/email-form.tsx");
var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/components/articles-layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ArticleLayout = function ArticleLayout(props) {
  return __jsx("div", {
    className: "fade-in font-serif mx-auto",
    style: {
      maxWidth: '90%',
      width: '44rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    className: "text-center block mt-12 mb-1 text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Kirill Rogovoy")), __jsx("div", {
    className: "mx-auto text-lg text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Code \xB7 Design \xB7 Workout \xB7 Travel \xB7 Beer"), __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    style: 1,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "About"), ' · ', __jsx(_link__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    style: 1,
    href: "https://twitter.com/krogovoy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Twitter"), ' · ', __jsx(_link__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    style: 1,
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Blog"))), __jsx(_separator__WEBPACK_IMPORTED_MODULE_2__[/* Separator */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_email_form__WEBPACK_IMPORTED_MODULE_4__[/* EmailForm */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.children), __jsx(_google_analytics__WEBPACK_IMPORTED_MODULE_3__[/* GoogleAnalytics */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/***/ }),

/***/ "./src/components/link.tsx":
/*!*********************************!*\
  !*** ./src/components/link.tsx ***!
  \*********************************/
/*! exports provided: Link */
/*! exports used: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/components/link.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


function Link(props) {
  var className = '';

  switch (props.style) {
    case 1:
      className = 'text-link1 hover:text-link1hover underline hover:no-underline';
      break;

    case 2:
      className = 'text-link2 hover:text-link2hover font-semibold';
      break;

    case undefined:
      className = '';
      break;
  }

  var targetProps = props.newTab ? {
    target: '_blank',
    rel: 'noreferrer noopener'
  } : {};

  var passProps = _objectSpread({}, props);

  delete passProps.newTab;
  delete passProps.style;
  var isExternalLink = props.href.toString().startsWith('http');

  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    return isExternalLink ? __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, children) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, passProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), children);
  };

  if (isExternalLink) {
    delete passProps.href;
    targetProps.href = props.href.toString();
  }

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
    className: className
  }, targetProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), props.children));
}

/***/ })

})
//# sourceMappingURL=blog.js.9923de3daf2a1d8dfaa5.hot-update.js.map