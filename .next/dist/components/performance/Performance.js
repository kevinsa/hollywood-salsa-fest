'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _ContentSection = require('../ContentSection');

var _ContentSection2 = _interopRequireDefault(_ContentSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kevin/Projects/salsa-fest/components/performance/Performance.js';


var performance = function performance(props) {

  var performerContents = props.performers.map(function (p) {
    return _react2.default.createElement(_reactBootstrap.Col, { key: p.id, lg: 3, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement('img', { className: 'img-circle', src: p.imgUrl, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), _react2.default.createElement('h3', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, p.name));
  });

  return _react2.default.createElement(_ContentSection2.default, { title: 'Event Performers', theme: 'white', sectionId: 'performers', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, performerContents, _react2.default.createElement(_style2.default, {
    styleId: '1917546054',
    css: '.img.jsx-1917546054{display:table;margin:auto;border-radius:50%;padding:5px;border:1px solid red;}.h3.jsx-1917546054{font-weight:500;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVyZm9ybWFuY2UvUGVyZm9ybWFuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJvQixBQUcyQixBQVFFLGNBUEosRUFRTSxVQVBBLFFBUXBCLFVBUGMsWUFDUyxxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9wZXJmb3JtYW5jZS9QZXJmb3JtYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gJy4uL0NvbnRlbnRTZWN0aW9uJ1xuXG5jb25zdCBwZXJmb3JtYW5jZSA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHBlcmZvcm1lckNvbnRlbnRzID0gcHJvcHMucGVyZm9ybWVycy5tYXAoKHApID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb2wga2V5PXtwLmlkfSBsZz17M30+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBzcmM9e3AuaW1nVXJsfSAvPlxuICAgICAgICAgICAgPGgzPntwLm5hbWV9PC9oMz5cbiAgICAgICAgICA8L0NvbD5cbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGVudFNlY3Rpb24gdGl0bGU9eyAnRXZlbnQgUGVyZm9ybWVycycgfSB0aGVtZT17ICd3aGl0ZScgfSBzZWN0aW9uSWQ9eyAncGVyZm9ybWVycycgfT5cbiAgICAgICAge3BlcmZvcm1lckNvbnRlbnRzfSBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmgzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250ZW50U2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwZXJmb3JtYW5jZSJdfQ== */\n/*@ sourceURL=components/performance/Performance.js */'
  }));
};

exports.default = performance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVyZm9ybWFuY2UvUGVyZm9ybWFuY2UuanMiXSwibmFtZXMiOlsiR3JpZCIsIlJvdyIsIkNvbCIsIkNvbnRlbnRTZWN0aW9uIiwicGVyZm9ybWFuY2UiLCJwcm9wcyIsInBlcmZvcm1lckNvbnRlbnRzIiwicGVyZm9ybWVycyIsIm1hcCIsInAiLCJpZCIsImltZ1VybCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFNLEFBQUs7O0FBQ3BCLEFBQU8sQUFBb0I7Ozs7Ozs7OztBQUUzQixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFVLEFBRTdCOztNQUFNLDBCQUFvQixBQUFNLFdBQU4sQUFBaUIsSUFBSSxVQUFBLEFBQUMsR0FBTSxBQUNwRDsyQkFDTSxBQUFDLHFDQUFJLEtBQUssRUFBVixBQUFZLElBQUksSUFBaEIsQUFBb0I7a0JBQXBCO29CQUFBLEFBQ0U7QUFERjtLQUFBLHlDQUNPLFdBQUwsQUFBZSxjQUFhLEtBQUssRUFBakMsQUFBbUM7a0JBQW5DO29CQURGLEFBQ0UsQUFDQTtBQURBO3dCQUNBLGNBQUE7O2tCQUFBO29CQUFBLEFBQUs7QUFBTDtBQUFBLFNBSFIsQUFDTSxBQUVFLEFBQU8sQUFHaEI7QUFQRCxBQUEwQixBQVMxQixHQVQwQjs7eUJBVXhCLEFBQUMsMENBQWUsT0FBaEIsQUFBd0Isb0JBQXFCLE9BQTdDLEFBQXFELFNBQVUsV0FBL0QsQUFBMkU7Z0JBQTNFO2tCQUFBLEFBQ0s7QUFETDtHQUFBLEVBQUE7YUFBQTtTQURGLEFBQ0UsQUFrQkg7QUFsQkc7QUFaSixBQWdDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJQZXJmb3JtYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCJ9