webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./src/components/email-form.tsx":
/*!***************************************!*\
  !*** ./src/components/email-form.tsx ***!
  \***************************************/
/*! exports provided: EmailForm */
/*! exports used: EmailForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kirillrogovoy/Projects/rogovoy.me/src/components/email-form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var mailchimpSubscribeUrl = 'https://iobnm1te67.execute-api.eu-central-1.amazonaws.com/default/mailchimp-subscribe';
function EmailForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSubscribed = _useState2[0],
      setIsSubscribed = _useState2[1];

  if (isSubscribed) {
    return __jsx("div", {
      className: "h-20 mb-10 text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 12
      }
    }, "Done! Thank you.");
  }

  var submit = function submit(e) {
    e.preventDefault();
    fetch(mailchimpSubscribeUrl, {
      method: 'post',
      body: JSON.stringify({
        email: email
      })
    });
    setIsSubscribed(true);
  };

  return __jsx("form", {
    onSubmit: submit,
    className: "h-20 w-88 mx-auto mb-8 text-center",
    style: {
      maxWidth: '90%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "block text-lg mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Get latest posts and extra content"), __jsx("div", {
    className: "h-8 flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "email",
    value: email,
    placeholder: "Email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "w-3/4 px-2 border border-primary mr-2 outline-none rounded-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "submit",
    value: "Subscribe",
    className: "w-1/4 bg-primary text-back border border-primary cursor-pointer placeholder-faded hover:text-primary hover:bg-back rounded-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=blog.js.dd8aadb6e53b03de3d8d.hot-update.js.map