module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/BuiltBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/BuiltBy.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BuiltBy = function BuiltBy(props) {
  return _react2.default.createElement(
    'div',
    { className: 'built-by', __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    _react2.default.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      'Built with',
      _react2.default.createElement(
        'em',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        ' React.js'
      )
    ),
    _react2.default.createElement('br', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    _react2.default.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      'Rendered Server-Side with',
      _react2.default.createElement(
        'em',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        ' Next.js'
      )
    ),
    _react2.default.createElement('br', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    _react2.default.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      '& coded with LOVE by Charles M.'
    )
  );
};

exports.default = BuiltBy;

/***/ }),

/***/ "./Components/Content.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/Content.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__("./Components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__("./Components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Nav = __webpack_require__("./Components/Nav.js");

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defStyles = {
  backgroundImage: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
  height: '100%',
  width: '95vw',
  minHeight: '95vh',
  minWidth: '320px',
  maxWidth: '960px',
  margin: '10px auto',
  padding: 20,
  border: '1px solid #777'
};

var Content = function Content(props) {
  return _react2.default.createElement(
    'div',
    { style: Object.assign({}, defStyles, props.addStyles), __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    },
    _react2.default.createElement(
      _Header2.default,
      _extends({}, props.headerProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }),
      _react2.default.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })
    ),
    _react2.default.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      },
      props.children
    ),
    _react2.default.createElement(
      _Footer2.default,
      _extends({}, props.footerProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }),
      _react2.default.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })
    )
  );
};

Content.propTypes = {
  addStyles: _propTypes2.default.object,
  headerProps: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    subTitle: _propTypes2.default.string,
    addStyles: _propTypes2.default.object
  }),
  footerProps: _propTypes2.default.shape({
    addStyles: _propTypes2.default.object

  })
};

exports.default = Content;

/***/ }),

/***/ "./Components/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/Footer.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _Nav = __webpack_require__("./Components/Nav.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _BuiltBy = __webpack_require__("./Components/BuiltBy.js");

var _BuiltBy2 = _interopRequireDefault(_BuiltBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defStyles = {
  link: {
    fontSize: '2.5vmin',
    marginRight: 15,
    fontFamily: 'Federant, Federo, avenir, system font'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end'
  }
};

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'div',
    { className: 'footer', __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    _react2.default.createElement(_Nav2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    _react2.default.createElement(_BuiltBy2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    })
  );
};

exports.default = Footer;

/***/ }),

/***/ "./Components/Head.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/Head.js';

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var styleTag = _ref.styleTag;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['421078542', [styleTag]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    _react2.default.createElement(
      _head2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: _style2.default.dynamic([['421078542', [styleTag]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      _react2.default.createElement('meta', { charSet: 'utf-8', className: _style2.default.dynamic([['421078542', [styleTag]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '421078542',
      css: '{' + styleTag + ';}html{box-sizing:border-box;background:#000;font:11px menlo;color:#333;margin:0;padding:0;height:100%;min-height:100vh;width:100%;min-width:100vw;}*,*:before,*:after{box-sizing:inherit;}.page{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFJK0IsQUFhSCxBQUlOLEFBWWxCLG1CQWZHLEdBYmtCLE9BNEJwQixTQTNCb0IsZ0JBQ0wsV0FDRixTQUNDLEFBYVksVUFaVixZQUNLLGlCQUNOLFdBQ0ssZ0JBQ2xCLFlBUzBCLHVHQUNMLDZGQUNWLFNBQ0MsVUFDRSxZQUNELFdBQ2IiLCJmaWxlIjoiQ29tcG9uZW50cy9IZWFkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaGFybGVzbW9yZ2FuL0RldmVsb3Blci9wcm9qZWN0cy9wcm8tcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoe3N0eWxlVGFnfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cbiAgICAgIGh0bWwge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBmb250OiAxMXB4IG1lbmxvO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICAgIH1cblxuICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICAucGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAke3N0eWxlVGFnfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=Components/Head.js */',
      dynamic: [styleTag]
    })
  );
};

/***/ }),

/***/ "./Components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/Header.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _PageTitle = __webpack_require__("./Components/PageTitle.js");

var _PageTitle2 = _interopRequireDefault(_PageTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = function Header(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      addStyles = _ref.addStyles,
      props = _objectWithoutProperties(_ref, ['children', 'title', 'subTitle', 'addStyles']);

  return _react2.default.createElement(
    'div',
    { className: 'page-header', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    children,
    _react2.default.createElement(_PageTitle2.default, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }))
  );
};

exports.default = Header;

/***/ }),

/***/ "./Components/Nav.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/Nav.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defStyles = {
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    fontSize: '3vmin',
    marginRight: 15,
    // fontFamily: 'Federo, avenir, system font',
    fontFamily: 'hasklig, monaco, inconsolata, monospace',
    letterSpacing: '-2px',
    wordWrap: 'nowrap'
  }
};

var routeList = [{ path: '/', title: 'homePage' }, { path: '/hire', title: 'hireMe' }, { path: '/projects', title: 'viewProjects' }, { path: '/about', title: 'aboutMe' }, { path: '/contact', title: 'contactMe' }];

var Nav = function Nav(props) {
  return _react2.default.createElement(
    'div',
    { className: 'nav', style: defStyles.nav, __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    },
    routeList.map(function (obj, dex) {
      return _react2.default.createElement(
        _link2.default,
        { href: obj.path, id: 'embed-' + dex, className: 'nav-link', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        _react2.default.createElement(
          'a',
          { style: defStyles.link, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          obj.title
        )
      );
    })
  );
};

exports.default = Nav;

/***/ }),

/***/ "./Components/PageTitle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/PageTitle.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '4vh',
    width: '100%',
    lineHeight: 1.1,
    textAlign: 'center',
    fontWeight: 700,
    fontFamily: 'Exo 2, Helvetica, sans-serif'
  },
  subTitle: {
    display: 'block',
    fontSize: '2.5vh',
    width: '100%',
    lineHeight: 1.1,
    textAlign: 'center',
    fontWeight: 200,
    fontFamily: 'Exo, Helvetica, sans-serif',
    fontStyle: 'italic'
  }
};

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle;
  return _react2.default.createElement(
    'div',
    { style: styles.titleWrapper, __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    },
    _react2.default.createElement(
      'h2',
      { style: styles.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      title
    ),
    _react2.default.createElement(
      'p',
      { style: styles.subTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      subTitle
    )
  );
};

exports.default = PageTitle;

/***/ }),

/***/ "./Layouts/Page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Layouts/Page.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Head = __webpack_require__("./Components/Head.js");

var _Head2 = _interopRequireDefault(_Head);

var _Content = __webpack_require__("./Components/Content.js");

var _Content2 = _interopRequireDefault(_Content);

__webpack_require__("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var children = _ref.children,
      pageStyles = _ref.pageStyles,
      pageClassName = _ref.pageClassName;

  return _react2.default.createElement(
    'div',
    { className: 'page ' + pageClassName, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    _react2.default.createElement(_Head2.default, { styleTag: pageStyles, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    _react2.default.createElement(
      _Content2.default,
      { pageTitle: pageClassName, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      children
    )
  );
};

exports.default = Page;

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/pages/index.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Page = __webpack_require__("./Layouts/Page.js");

var _Page2 = _interopRequireDefault(_Page);

__webpack_require__("./pages/index.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Page2.default,
    { pageClassName: 'helloWorld', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'Hello Next.js'
    )
  );
};

/***/ }),

/***/ "./pages/index.min.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-polyfill":
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map