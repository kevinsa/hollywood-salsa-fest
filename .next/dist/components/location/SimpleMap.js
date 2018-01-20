"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = require("google-map-react");

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kevin/Projects/salsa-fest/components/location/SimpleMap.js";


var EventMarker = function EventMarker(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(_react2.default.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", {
    className: "jsx-541056365",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("span", {
    className: "jsx-541056365",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, text), _react2.default.createElement("i", {
    className: "jsx-541056365" + " " + "fa fa-map-marker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: "541056365",
    css: "div.jsx-541056365{position:absolute;top:-30px;right:-10px;text-align:center;}span.jsx-541056365{display:block;font-weight:600;color:#000;}i.jsx-541056365{font-size:16px;color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24vU2ltcGxlTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQixBQUcyQixBQU1KLEFBS0MsY0FKQyxDQUtOLEdBWEEsT0FZWixHQVhjLEVBTUQsVUFMTyxDQU1wQixpQkFMQSIsImZpbGUiOiJjb21wb25lbnRzL2xvY2F0aW9uL1NpbXBsZU1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0J1xuXG5jb25zdCBFdmVudE1hcmtlciA9ICh7IHRleHQgfSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbilcblxuY2xhc3MgU2ltcGxlTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHsgbGF0OiAyNi4wMTEzODQzLCBsbmc6IC04MC4xNDIzMzM4IH0sXG4gICAgem9vbTogMTVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29nbGUtbWFwXCI+XG4gICAgICAgIDxHb29nbGVNYXBSZWFjdCBcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUM4Ulo2R0xHbDNTYkVDOTViSktHck5IVVJNQnpjQnFBMCd9fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219PlxuICAgICAgICAgICAgPEV2ZW50TWFya2VyIGxhdD17MjYuMDExMzg0M30gbG5nPXstODAuMTQyMzMzOH0gdGV4dD17ICdBcnRzIFBhcmsnIH0gLz5cbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIC5nb29nbGUtbWFwIHtcbiAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICB9IFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlTWFwIl19 */\n/*@ sourceURL=components/location/SimpleMap.js */"
  }));
};

var SimpleMap = function (_React$Component) {
  (0, _inherits3.default)(SimpleMap, _React$Component);

  function SimpleMap() {
    (0, _classCallCheck3.default)(this, SimpleMap);

    return (0, _possibleConstructorReturn3.default)(this, (SimpleMap.__proto__ || (0, _getPrototypeOf2.default)(SimpleMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleMap, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2331891099" + " " + "google-map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_googleMapReact2.default, {
        bootstrapURLKeys: { key: 'AIzaSyC8RZ6GLGl3SbEC95bJKGrNHURMBzcBqA0' },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(EventMarker, { lat: 26.0113843, lng: -80.1423338, text: 'Arts Park', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: "2331891099",
        css: ".google-map.jsx-2331891099{height:400px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24vU2ltcGxlTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHdUIsYUFDRixXQUNiIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9jYXRpb24vU2ltcGxlTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbi9Qcm9qZWN0cy9zYWxzYS1mZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnXG5cbmNvbnN0IEV2ZW50TWFya2VyID0gKHsgdGV4dCB9KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5jbGFzcyBTaW1wbGVNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjogeyBsYXQ6IDI2LjAxMTM4NDMsIGxuZzogLTgwLjE0MjMzMzggfSxcbiAgICB6b29tOiAxNVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2dsZS1tYXBcIj5cbiAgICAgICAgPEdvb2dsZU1hcFJlYWN0IFxuICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QzhSWjZHTEdsM1NiRUM5NWJKS0dyTkhVUk1CemNCcUEwJ319XG4gICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XG4gICAgICAgICAgZGVmYXVsdFpvb209e3RoaXMucHJvcHMuem9vbX0+XG4gICAgICAgICAgICA8RXZlbnRNYXJrZXIgbGF0PXsyNi4wMTEzODQzfSBsbmc9ey04MC4xNDIzMzM4fSB0ZXh0PXsgJ0FydHMgUGFyaycgfSAvPlxuICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgLmdvb2dsZS1tYXAge1xuICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIH0gXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVNYXAiXX0= */\n/*@ sourceURL=components/location/SimpleMap.js */"
      }));
    }
  }]);

  return SimpleMap;
}(_react2.default.Component);

SimpleMap.defaultProps = {
  center: { lat: 26.0113843, lng: -80.1423338 },
  zoom: 15
};

exports.default = SimpleMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRpb24vU2ltcGxlTWFwLmpzIl0sIm5hbWVzIjpbIkdvb2dsZU1hcFJlYWN0IiwiRXZlbnRNYXJrZXIiLCJ0ZXh0IiwiU2ltcGxlTWFwIiwia2V5IiwicHJvcHMiLCJjZW50ZXIiLCJ6b29tIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJsYXQiLCJsbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGNBQWMsU0FBZCxBQUFjLGtCQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7eUJBQ3BCLGNBQUQsZ0JBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBTztBQUFQO0FBQUEsS0FERixBQUNFLEFBQ0E7dUNBQUEsQUFBYTs7Z0JBQWI7a0JBSEosQUFDRSxBQUVFO0FBQUE7QUFBQTthQUhKO1NBRGtCLEFBQ2xCO0FBQUE7QUFERjs7SSxBQTBCTTs7Ozs7Ozs7Ozs7NkJBTUssQUFDUDs2QkFDRyxjQUFELGdCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOzBCQUNtQixFQUFFLEtBRHRCLEFBQ29CLEFBQU8sQUFDekI7dUJBQWUsS0FBQSxBQUFLLE1BRnRCLEFBRTRCLEFBQzFCO3FCQUFhLEtBQUEsQUFBSyxNQUhwQixBQUcwQjtvQkFIMUI7c0JBQUEsQUFJSTtBQUpKO0FBQ0UsdUNBR0UsQUFBQyxlQUFZLEtBQWIsQUFBa0IsWUFBWSxLQUFLLENBQW5DLEFBQW9DLFlBQVksTUFBaEQsQUFBdUQ7b0JBQXZEO3NCQU5OLEFBQ0EsQUFDRSxBQUlJO0FBQUE7O2lCQU5OO2FBREYsQUFDRSxBQWlCSDtBQWpCRzs7Ozs7RUFSa0IsZ0JBQU0sQTs7QUFBeEIsQSxVQUNHLEE7VUFDRyxFQUFFLEtBQUYsQUFBTyxZQUFZLEtBQUssQ0FEWixBQUNaLEFBQXlCLEFBQ2pDO1FBRm9CLEFBRWQsQSxBQXlCVjtBQTNCd0IsQUFDcEI7O2tCQTBCSixBQUFlIiwiZmlsZSI6IlNpbXBsZU1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCJ9