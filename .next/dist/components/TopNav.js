'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kevin/Projects/salsa-fest/components/TopNav.js';


var TopNav = function (_React$Component) {
  (0, _inherits3.default)(TopNav, _React$Component);

  function TopNav(props) {
    (0, _classCallCheck3.default)(this, TopNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopNav.__proto__ || (0, _getPrototypeOf2.default)(TopNav)).call(this, props));

    _this.state = {
      navClassName: 'transparent'
    };
    return _this;
  }

  (0, _createClass3.default)(TopNav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var transitionPoint = window.document.querySelector('header').offsetHeight;

      window.document.addEventListener('scroll', function () {
        if (window.scrollY >= transitionPoint) {
          _this2.setState({ navClassName: 'opaque' });
        } else {
          _this2.setState({ navClassName: 'transparent' });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar, { fixedTop: true, inverse: true, collapseOnSelect: true, className: this.state.navClassName, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(_reactBootstrap.Navbar.Toggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), _react2.default.createElement(_reactBootstrap.Navbar.Collapse, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_reactBootstrap.Nav, { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_link2.default, { href: '/#about', scroll: true, passHref: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'about')), _react2.default.createElement(_link2.default, { href: '/#performers', scroll: true, passHref: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'performers')), _react2.default.createElement(_link2.default, { href: '/#schedule', scroll: true, passHref: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'schedule')), _react2.default.createElement(_link2.default, { href: '/#sponsors', scroll: true, passHref: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'sponsors'))))), _react2.default.createElement(_style2.default, {
        styleId: '325652934',
        css: '.transparent{background:rgba(0,0,0,0.5);border:none;}.transparent .navbar-nav>li>a{color:#fff;}.transparent .navbar-nav>li>a:hover{color:#F8EB68;}.opaque{background:#301540;border-bottom:1px solid #e6e6fa;}.opaque .navbar-nav>li>a{color:#e6e6fa;}.opaque .navbar-nav>li>a:visited{color:#e6e6fa;}.opaque .navbar-nav>li>a:hover{color:#F8EB68;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EeUIsQUFHdUMsQUFLbkIsQUFJRyxBQUlLLEFBS0wsQUFJQSxBQUlBLFdBcEJoQixHQUlBLEFBU0EsQUFJQSxBQUlBLEtBYmtDLFFBYnBCLFlBQ2QsWUFhQSIsImZpbGUiOiJjb21wb25lbnRzL1RvcE5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY2xhc3MgVG9wTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmF2Q2xhc3NOYW1lOiAndHJhbnNwYXJlbnQnLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qb2ludCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5vZmZzZXRIZWlnaHRcblxuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSB0cmFuc2l0aW9uUG9pbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBuYXZDbGFzc05hbWU6ICdvcGFxdWUnfSApXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggeyBuYXZDbGFzc05hbWU6ICd0cmFuc3BhcmVudCd9IClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TmF2YmFyIGZpeGVkVG9wIGludmVyc2UgY29sbGFwc2VPblNlbGVjdCBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmF2Q2xhc3NOYW1lfT5cbiAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jYWJvdXRcIiBzY3JvbGw9e3RydWV9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5hYm91dDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI3BlcmZvcm1lcnNcIiBzY3JvbGw9e3RydWV9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5wZXJmb3JtZXJzPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jc2NoZWR1bGVcIiBzY3JvbGw9e3RydWV9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5zY2hlZHVsZTwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI3Nwb25zb3JzXCIgc2Nyb2xsPXt0cnVlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+c3BvbnNvcnM8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLnRyYW5zcGFyZW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9IFxuXG4gICAgICAudHJhbnNwYXJlbnQgLm5hdmJhci1uYXY+bGk+YSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAudHJhbnNwYXJlbnQgLm5hdmJhci1uYXY+bGk+YTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRjhFQjY4O1xuICAgICAgfVxuXG4gICAgICAub3BhcXVlIHsgXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMDE1NDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmZhO1xuICAgICAgfVxuXG4gICAgICAub3BhcXVlIC5uYXZiYXItbmF2PmxpPmEge1xuICAgICAgICBjb2xvcjogI2U2ZTZmYTtcbiAgICAgIH1cblxuICAgICAgLm9wYXF1ZSAubmF2YmFyLW5hdj5saT5hOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogI2U2ZTZmYTtcbiAgICAgIH1cblxuICAgICAgLm9wYXF1ZSAubmF2YmFyLW5hdj5saT5hOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNGOEVCNjg7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BOYXYiXX0= */\n/*@ sourceURL=components/TopNav.js */'
      }));
    }
  }]);

  return TopNav;
}(_react2.default.Component);

exports.default = TopNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wTmF2LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZiYXIiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsIlRvcE5hdiIsInByb3BzIiwic3RhdGUiLCJuYXZDbGFzc05hbWUiLCJ0cmFuc2l0aW9uUG9pbnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQUssQUFBUzs7Ozs7OztJLEFBRXpCO2tDQUNKOztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO29CQUZZLEFBRWpCLEFBQWEsQUFDRztBQURILEFBQ1g7V0FFSDs7Ozs7d0NBRW1CO21CQUNsQjs7VUFBTSxrQkFBa0IsT0FBQSxBQUFPLFNBQVAsQUFBZ0IsY0FBaEIsQUFBOEIsVUFBdEQsQUFBZ0UsQUFFaEU7O2FBQUEsQUFBTyxTQUFQLEFBQWdCLGlCQUFoQixBQUFpQyxVQUFVLFlBQU0sQUFDL0M7WUFBRyxPQUFBLEFBQU8sV0FBVixBQUFxQixpQkFBaUIsQUFDcEM7aUJBQUEsQUFBSyxTQUFVLEVBQUUsY0FBakIsQUFBZSxBQUFnQixBQUNoQztBQUZELGVBR0ssQUFDSDtpQkFBQSxBQUFLLFNBQVUsRUFBRSxjQUFqQixBQUFlLEFBQWdCLEFBQ2hDO0FBQ0Y7QUFQRCxBQVFEOzs7OzZCQUVRLEFBQ1A7NkJBQ0csY0FBRCxnQkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUMsd0NBQU8sVUFBUixNQUFpQixTQUFqQixNQUF5QixrQkFBekIsTUFBMEMsV0FBVyxLQUFBLEFBQUssTUFBMUQsQUFBZ0U7b0JBQWhFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHVCQUFBLEFBQVE7O29CQUFSO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHVCQUFELEFBQVE7O29CQUFSO3NCQUZKLEFBQ0UsQUFDRSxBQUdGO0FBSEU7QUFBQSx5Q0FHRixBQUFDLHVCQUFELEFBQVE7O29CQUFSO3NCQU5KLEFBQ0UsQUFLRSxBQUVGO0FBRkU7QUFBQSwyQkFFRCxjQUFELHVCQUFBLEFBQVE7O29CQUFSO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMscUNBQUksV0FBTDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsV0FBVSxRQUFyQixBQUE2QixNQUFNLFVBQW5DO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiwyQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxnQkFBZSxRQUExQixBQUFrQyxNQUFNLFVBQXhDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUlFLEFBQ0UsQUFFRixnQ0FBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxjQUFhLFFBQXhCLEFBQWdDLE1BQU0sVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQVJKLEFBT0UsQUFDRSxBQUVGLDhCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXLGNBQWEsUUFBeEIsQUFBZ0MsTUFBTSxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBckJSLEFBQ0EsQUFRRSxBQUNFLEFBVUUsQUFDRTtpQkFyQlI7YUFERixBQUNFLEFBMkRIO0FBM0RHOzs7OztFQXZCZSxnQkFBTSxBLEFBcUYzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJUb3BOYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluL1Byb2plY3RzL3NhbHNhLWZlc3QifQ==