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

var styles = {
  div: {
    display: 'block',
    overflow: 'hidden',
    width: '100%'
  },
  span: {
    display: 'inline-block',
    fontSize: '2vmin'
  }
};

var BuiltBy = function BuiltBy(props) {
  return _react2.default.createElement(
    'div',
    { style: styles.div, className: 'built-by', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    _react2.default.createElement(
      'span',
      { style: styles.span, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      'Built with',
      _react2.default.createElement(
        'b',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        _react2.default.createElement(
          'em',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          'React.js'
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { style: styles.span, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      'Rendered Server-Side with',
      _react2.default.createElement(
        'em',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        ' Next.js'
      )
    ),
    _react2.default.createElement(
      'span',
      { style: styles.span, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      '& coded with LOVE by Charles M.'
    )
  );
};

exports.default = BuiltBy;

/***/ }),

/***/ "./Components/BurgerMenu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/BurgerMenu.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBurgerMenu = __webpack_require__("react-burger-menu");

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _HoverLink = __webpack_require__("./Components/HoverLink.js");

var _HoverLink2 = _interopRequireDefault(_HoverLink);

var _routeList = __webpack_require__("./helpers/routeList.js");

var _routeList2 = _interopRequireDefault(_routeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '3.6rem',
    height: '3.6rem',
    left: '50%',
    right: '50%',
    top: '0'
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    position: 'fixed',
    top: 0,
    left: '50%',
    right: '50%',
    zIndex: '1000'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#ffaa00',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#ffaa00'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  },
  bmLink: {
    display: 'block',
    width: '100%',
    height: '3rem'
  }
};

var linkStyles = {
  display: 'block',
  fontSize: '3rem',
  fontFamily: '"inconsolata", "menlo", "courier new", monospace'
};

var hoverHandlers = {
  inv: '(go)',
  enter: function enter(evt) {},
  leave: function leave(evt) {}
};

var BurgerMenu = function BurgerMenu() {
  return _react2.default.createElement(
    _reactBurgerMenu.pushRotate,
    { styles: styles, __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    },
    _react2.default.createElement(
      'ol',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      },
      _routeList2.default.map(function (_ref) {
        var path = _ref.path,
            cssID = _ref.cssID,
            title = _ref.title;
        return _react2.default.createElement(
          'li',
          { id: cssID, key: title, onMouseEnter: function onMouseEnter(e) {
              console.log({ E: e.target });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          },
          _react2.default.createElement(
            _link2.default,
            {
              href: path,
              key: title,
              style: linkStyles,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            _react2.default.createElement(
              'a',
              { id: cssID, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              title
            )
          )
        );
      })
    )
  );
};

exports.default = BurgerMenu;

/***/ }),

/***/ "./Components/Content.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/Content.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _BurgerMenu = __webpack_require__("./Components/BurgerMenu.js");

var _BurgerMenu2 = _interopRequireDefault(_BurgerMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <o
var mainStyles = {
  backgroundImage: 'linear-gradient(\n    to top,\n    #accbee 0%,\n    #e7f0fd 100%\n  )',
  height: '100%',
  width: '94%',
  minHeight: '97vh',
  minWidth: '320px',
  maxWidth: '960px',
  margin: '10px auto',
  overflow: 'hidden',
  padding: 0,
  border: '1px solid #777'
};

var styles = {};

var bodyStyles = {};

// <c

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this));

    _this.toggleMenu = function (o) {
      _this.setState({ menuIsOpen: !o });
    };

    _this.state = {
      menuIsOpen: false
    };
    return _this;
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          addStyles = _props.addStyles,
          headerProps = _props.headerProps,
          footerProps = _props.footerProps;

      return _react2.default.createElement(
        'div',
        { id: 'outer-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        _react2.default.createElement(_BurgerMenu2.default, {
          right: true,
          width: 300,
          styles: styles,
          isOpen: this.state.menuIsOpen,
          toggleMenu: function toggleMenu() {
            return _this2.toggleMenu(_this2.state.menuIsOpen);
          },
          pageWrapId: 'page-wrap',
          outerContainerId: 'outer-container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }),
        _react2.default.createElement(
          'div',
          { id: 'page-wrap',
            style: Object.assign({}, mainStyles, addStyles), __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          _react2.default.createElement(
            _Header2.default,
            _extends({}, headerProps, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            }),
            _react2.default.createElement(_Nav2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { style: bodyStyles, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            children
          ),
          _react2.default.createElement(
            _Footer2.default,
            _extends({}, footerProps, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            }),
            _react2.default.createElement(_Nav2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            })
          )
        )
      );
    }
  }]);

  return Content;
}(_react.Component);

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
      className: _style2.default.dynamic([['877890819', [styleTag]]]),
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
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        className: _style2.default.dynamic([['877890819', [styleTag]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      _react2.default.createElement('meta', { charSet: 'utf-8', className: _style2.default.dynamic([['877890819', [styleTag]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '877890819',
      css: '{' + styleTag + ';}html{box-sizing:border-box;background-image:linear-gradient(60deg,#29323c 0%,#485563 100%);color:#333;font-family:\'Raleway\',\'Exo 2\',\'Avenir\',sans-serif;font-size:10px;margin:0;padding:0;height:100%;min-height:100vh;width:100%;min-width:100vw;}*,*:before,*:after{box-sizing:inherit;}body{top:0;bottom:0;left:0;right:0;margin:0;}.page{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:0;padding:0;min-height:100%;width:100%;}#page-wrap{top:0;bottom:0;left:0;right:0;margin:0;}img{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhdUIsQUFHK0IsQUFhSCxBQUliLEFBUU8sQUFXUCxBQVFTLEFBR3BCLE1BN0JjLEFBbUJBLFNBbEJGLEFBbUJBLEFBT1QsSUEvQkEsR0Fib0UsQUFtQjFELEFBbUJBLE9BUVosQ0ExQmEsQUFtQkEsU0FsQlgsQUFtQkEsbUNBZndCLFlBeEJYLFdBQzBDLGtEQUN0QyxLQXVCUyxVQXRCZixTQUNDLFVBQ0UsWUFDSyxpQkFDTixXQUNLLGdCQUNsQixrQkFpQnNCLGlHQUNYLFNBQ0MsVUFDTSxnQkFDTCxXQUNiIiwiZmlsZSI6IkNvbXBvbmVudHMvSGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hhcmxlc21vcmdhbi9EZXZlbG9wZXIvcHJvamVjdHMvcHJvLXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHtzdHlsZVRhZ30pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsXG4gICAgICAgIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI5MzIzYyAwJSwgIzQ4NTU2MyAxMDAlKTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsICdFeG8gMicsICdBdmVuaXInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgICB9XG4gICAgICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLnBhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjcGFnZS13cmFwIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICR7c3R5bGVUYWd9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=Components/Head.js */',
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

/***/ "./Components/HoverLink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Components/HoverLink.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverLink = function (_React$PureComponent) {
  _inherits(HoverLink, _React$PureComponent);

  function HoverLink(props) {
    _classCallCheck(this, HoverLink);

    var _this = _possibleConstructorReturn(this, (HoverLink.__proto__ || Object.getPrototypeOf(HoverLink)).call(this, props));

    _this.mouseEnter = function () {
      _this.setState({
        title: _this.state.title + '("go")'
      });
    };

    _this.mouseLeave = function () {
      _this.setState({
        title: _this.state.title
      });
    };

    _this.state = {
      title: _this.props.title
    };
    return _this;
  }

  _createClass(HoverLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          id = _props.id;

      return _react2.default.createElement(
        'a',
        {
          id: id,
          onMouseEnter: this.mouseEnter,
          onMouseLeave: this.mouseLeave,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        title
      );
    }
  }]);

  return HoverLink;
}(_react2.default.PureComponent);

HoverLink.propTypes = {
  title: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = HoverLink;

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

var _routeList = __webpack_require__("./helpers/routeList.js");

var _routeList2 = _interopRequireDefault(_routeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defStyles = {
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    display: 'block',
    fontSize: '3vh',
    marginRight: 15,
    fontFamily: 'hasklig, monaco, inconsolata, monospace',
    letterSpacing: '-1px',
    wordWrap: 'nowrap'
  }
};

var Nav = function Nav() {
  return _react2.default.createElement(
    'div',
    { className: 'nav', style: defStyles.nav, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    _routeList2.default.map(function (obj, dex) {
      return _react2.default.createElement(
        _link2.default,
        { href: obj.path, key: '' + dex, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(
          'a',
          { style: defStyles.link, id: obj.cssID, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
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
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '1rem',
    width: '100%'

  },
  title: {
    fontFamily: 'Exo 2, Helvetica, sans-serif',
    fontSize: '2.8rem',
    fontWeight: 700,
    lineHeight: 1.1,
    margin: '0 auto',
    textAlign: 'center',
    width: '100%'
  },
  subTitle: {
    display: 'block',
    fontFamily: 'Exo, Helvetica, sans-serif',
    fontSize: '1.4rem',
    fontStyle: 'italic',
    fontWeight: 200,
    lineHeight: 1.1,
    margin: '0 auto',
    padding: '1rem 0',
    textAlign: 'center',
    width: '100%'
  }
};

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle;
  return _react2.default.createElement(
    'div',
    { style: styles.titleWrapper, __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    },
    _react2.default.createElement(
      'h2',
      { style: styles.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      title
    ),
    _react2.default.createElement(
      'p',
      { style: styles.subTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/Users/charlesmorgan/Developer/projects/pro-portfolio/Layouts/Page.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Head = __webpack_require__("./Components/Head.js");

var _Head2 = _interopRequireDefault(_Head);

var _Content = __webpack_require__("./Components/Content.js");

var _Content2 = _interopRequireDefault(_Content);

__webpack_require__("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          pageStyles = _props.pageStyles,
          pageClassName = _props.pageClassName,
          pageTitle = _props.pageTitle;

      return _react2.default.createElement(
        'div',
        { className: 'page ' + pageClassName, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(_Head2.default, { styleTag: pageStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        _react2.default.createElement(
          _Content2.default,
          { pageTitle: pageTitle, className: 'content', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          children
        )
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.getInitialProps = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var response, data, pens;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios(pensUrl).then(function (r) {
            return r;
          }).catch(function (err) {
            return console.log('CODEPENS_ERROR:  ' + err);
          });

        case 2:
          response = _context.sent;
          data = response.data.data;
          pens = [].concat(_toConsumableArray(data));

          console.log({ pens: pens });
          return _context.abrupt('return', { pens: pens });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));
exports.default = Page;

/***/ }),

/***/ "./helpers/routeList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var routeList = [{
    path: '/',
    title: 'homePage',
    cssID: 'page-index'
  }, {
    path: '/hire',
    title: 'hireMe',
    cssID: 'page-hire'
  }, {
    path: '/projects',
    title: 'viewProjects',
    cssID: 'page-projects'
  }, {
    path: '/about',
    title: 'aboutMe',
    cssID: 'page-about'
  }, {
    path: '/contact',
    title: 'contactMe',
    cssID: 'page-contact'
  }];

  return routeList;
}();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageStyles = {};

exports.default = function () {
  return _react2.default.createElement(
    _Page2.default,
    { pageStyles: pageStyles, pageClassName: 'homepage', pageTitle: 'helloWorld', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    _react2.default.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      '\n      Who Charles Morgan is.\n      What Charles Morgan Does.\n      Where Charles Morgan is, was, and plans to be in the future.\n      Why you need Charles Morgan.\n      How you can get your very own Charles Morgan.\n      '
    )
  );
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-polyfill":
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

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

/***/ "react-burger-menu":
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map