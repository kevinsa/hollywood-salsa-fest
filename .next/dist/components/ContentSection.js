'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kevin/Projects/salsa-fest/components/ContentSection.js';


var contentSection = function contentSection(props) {

  var theme = { fgColor: '#301540', bgColor: '#fff', underline: '#E80A40' };

  switch (props.theme) {
    case 'black':
      theme.fgColor = "#fff";
      theme.bgColor = "#000";
      break;
    case 'smoke':
      theme.bgColor = "whitesmoke";
      break;
    case 'lavendar':
      theme.bgColor = "#ececfb";
      theme.fgColor = "#301540";
      break;
    case 'purple':
      theme.bgColor = "#301540";
      theme.fgColor = "#fff";
      break;
    default:
      break;
  }

  return _react2.default.createElement(_react2.default.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('section', { id: props.sectionId || '', className: _style2.default.dynamic([['1955324431', [theme.bgColor, theme.fgColor, theme.fgColor, theme.underline]]]) + ' ' + 'content-section',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_reactBootstrap.Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_reactBootstrap.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { md: 12, className: 'text-center', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('div', {
    className: _style2.default.dynamic([['1955324431', [theme.bgColor, theme.fgColor, theme.fgColor, theme.underline]]]) + ' ' + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('h2', {
    className: _style2.default.dynamic([['1955324431', [theme.bgColor, theme.fgColor, theme.fgColor, theme.underline]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, props.title), _react2.default.createElement('span', {
    className: _style2.default.dynamic([['1955324431', [theme.bgColor, theme.fgColor, theme.fgColor, theme.underline]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement('p', {
    className: _style2.default.dynamic([['1955324431', [theme.bgColor, theme.fgColor, theme.fgColor, theme.underline]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })))), props.children)), _react2.default.createElement(_style2.default, {
    styleId: '1955324431',
    css: '.content-section.__jsx-style-dynamic-selector{padding:60px 60px;background-color:' + theme.bgColor + ';color:' + theme.fgColor + ';}.text-center.__jsx-style-dynamic-selector{text-align:center;}.section-title.__jsx-style-dynamic-selector{margin-bottom:60px;}.section-title.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:' + theme.fgColor + ';}.section-title.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:' + theme.underline + ';height:10px;width:70px;display:block;margin:auto;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudFNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQixBQUcyQixBQU1BLEFBSUMsQUFJZ0IsQUFLbkMsa0JBbEI4QyxBQU1oRCxDQUlBLGdCQUlBLEtBSWMsWUFDRCxXQUNHLENBbkJxQixhQW9CdkIsWUFDSSxVQXBCbEIsTUFxQnFCLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0NvbnRlbnRTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbi9Qcm9qZWN0cy9zYWxzYS1mZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IGNvbnRlbnRTZWN0aW9uID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgdGhlbWUgPSB7IGZnQ29sb3I6ICcjMzAxNTQwJywgYmdDb2xvcjogJyNmZmYnLCB1bmRlcmxpbmU6ICcjRTgwQTQwJyB9XG5cbiAgc3dpdGNoKHByb3BzLnRoZW1lKSB7XG4gICAgY2FzZSAnYmxhY2snOlxuICAgICAgdGhlbWUuZmdDb2xvciA9IFwiI2ZmZlwiXG4gICAgICB0aGVtZS5iZ0NvbG9yID0gXCIjMDAwXCJcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Ntb2tlJzpcbiAgICAgIHRoZW1lLmJnQ29sb3IgPSBcIndoaXRlc21va2VcIlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGF2ZW5kYXInOlxuICAgICAgdGhlbWUuYmdDb2xvciA9IFwiI2VjZWNmYlwiXG4gICAgICB0aGVtZS5mZ0NvbG9yID0gXCIjMzAxNTQwXCJcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3B1cnBsZSc6XG4gICAgICB0aGVtZS5iZ0NvbG9yID0gXCIjMzAxNTQwXCJcbiAgICAgIHRoZW1lLmZnQ29sb3IgPSBcIiNmZmZcIlxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uXCIgaWQ9e3Byb3BzLnNlY3Rpb25JZCB8fCAnJ30+XG4gICAgICA8R3JpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1kPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250ZW50LXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmdDb2xvcn07XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmZnQ29sb3J9O1xuICAgICAgfVxuXG4gICAgICAudGV4dC1jZW50ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5mZ0NvbG9yfTtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24tdGl0bGUgc3BhbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUudW5kZXJsaW5lfVxuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50U2VjdGlvbiJdfQ== */\n/*@ sourceURL=components/ContentSection.js */',
    dynamic: [theme.bgColor, theme.fgColor, theme.fgColor, theme.underline]
  }));
};

exports.default = contentSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudFNlY3Rpb24uanMiXSwibmFtZXMiOlsiR3JpZCIsIlJvdyIsIkNvbCIsImNvbnRlbnRTZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImZnQ29sb3IiLCJiZ0NvbG9yIiwidW5kZXJsaW5lIiwic2VjdGlvbklkIiwidGl0bGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQU0sQUFBSzs7Ozs7OztBQUVwQixJQUFNLGlCQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsT0FBVSxBQUVoQzs7TUFBTSxRQUFRLEVBQUUsU0FBRixBQUFXLFdBQVcsU0FBdEIsQUFBK0IsUUFBUSxXQUFyRCxBQUFjLEFBQWtELEFBRWhFOztVQUFPLE1BQVAsQUFBYSxBQUNYO1NBQUEsQUFBSyxBQUNIO1lBQUEsQUFBTSxVQUFOLEFBQWdCLEFBQ2hCO1lBQUEsQUFBTSxVQUFOLEFBQWdCLEFBQ2hCO0FBQ0Y7U0FBQSxBQUFLLEFBQ0g7WUFBQSxBQUFNLFVBQU4sQUFBZ0IsQUFDaEI7QUFDRjtTQUFBLEFBQUssQUFDSDtZQUFBLEFBQU0sVUFBTixBQUFnQixBQUNoQjtZQUFBLEFBQU0sVUFBTixBQUFnQixBQUNoQjtBQUNGO1NBQUEsQUFBSyxBQUNIO1lBQUEsQUFBTSxVQUFOLEFBQWdCLEFBQ2hCO1lBQUEsQUFBTSxVQUFOLEFBQWdCLEFBQ2hCO0FBQ0Y7QUFDRTtBQWpCSixBQW9CQTs7O3lCQUNDLGNBQUQsZ0JBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLGFBQXFDLElBQUksTUFBQSxBQUFNLGFBQS9DLEFBQTRELHdEQWtCcEMsTUFsQnhCLEFBa0I4QixTQUNqQixNQW5CYixBQW1CbUIsU0FZTixNQS9CYixBQStCbUIsU0FJRCxNQW5DbEIsQUFtQ3dCLHNCQW5DeEIsQUFBbUI7O2dCQUFuQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxxQ0FBSSxJQUFMLEFBQVMsSUFBSSxXQUFiLEFBQXVCO2dCQUF2QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTt3REFjZ0IsTUFkaEIsQUFjc0IsU0FDakIsTUFmTCxBQWVXLFNBWU4sTUEzQkwsQUEyQlcsU0FJRCxNQS9CVixBQStCZ0Isc0JBL0JoQixBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dEQWFjLE1BYmQsQUFhb0IsU0FDakIsTUFkSCxBQWNTLFNBWU4sTUExQkgsQUEwQlMsU0FJRCxNQTlCUixBQThCYzs7Z0JBOUJkO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBREYsQUFDRSxBQUFXLEFBQ1g7d0RBWWMsTUFaZCxBQVlvQixTQUNqQixNQWJILEFBYVMsU0FZTixNQXpCSCxBQXlCUyxTQUlELE1BN0JSLEFBNkJjOztnQkE3QmQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQTt3REFZYyxNQVhkLEFBV29CLFNBQ2pCLE1BWkgsQUFZUyxTQVlOLE1BeEJILEFBd0JTLFNBSUQsTUE1QlIsQUE0QmM7O2dCQTVCZDtrQkFOUixBQUNFLEFBQ0UsQUFDRSxBQUdFLEFBS0o7QUFMSTtBQUFBLGVBUlosQUFDRSxBQUNFLEFBV1U7YUFiZDsrRkFtQjBCLE1BbkIxQixBQW1CZ0Msc0JBQ2pCLE1BcEJmLEFBb0JxQixnT0FZTixNQWhDZixBQWdDcUIsMEdBSUQsTUFwQ3BCLEFBb0MwQixZQXBDMUI7Y0FtQjBCLE1BbkIxQixBQW1CZ0MsU0FDakIsTUFwQmYsQUFvQnFCLFNBWU4sTUFoQ2YsQUFnQ3FCLFNBSUQsTUFyQ3BCLEFBQ0EsQUFvQzBCLEFBVzNCO0FBL0NDO0FBekJGLEFBMEVBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRlbnRTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbi9Qcm9qZWN0cy9zYWxzYS1mZXN0In0=