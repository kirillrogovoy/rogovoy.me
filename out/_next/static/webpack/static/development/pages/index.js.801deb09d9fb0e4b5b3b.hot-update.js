webpackHotUpdate("static/development/pages/index.js",{

/***/ "./post.js":
/*!*****************!*\
  !*** ./post.js ***!
  \*****************/
/*! exports provided: renderPost, getAllPosts, getRandomPosts */
/*! exports used: getAllPosts, getRandomPosts, renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRandomPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/post */ "./components/post.js");
var _jsxFileName = "/Users/kirillrogovoy/Projects/blog.rogovoy.me/post.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var posts = [{
  id: 'rabota-za-kompiuterom-stoya',
  date: '12.12.2018',
  title: 'Работать за компьютером стоя: зачем и как',
  description: 'Почему работать сидя – вредно и что можно сделать',
  tags: [],
  fbLink: 'https://www.facebook.com/permalink.php?story_fbid=537623056710013&id=100013869703829'
}];
function renderPost(id, content) {
  var meta = posts.find(function (a) {
    return a.id === id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_post__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    meta: meta,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
}
function getAllPosts() {
  return posts.filter(function (post) {
    return !post.isDraft;
  });
}
function getRandomPosts(number) {
  return shuffle(getAllPosts()).slice(0, number);
}

function shuffle(b) {
  var a = _toConsumableArray(b);

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
//# sourceMappingURL=index.js.801deb09d9fb0e4b5b3b.hot-update.js.map