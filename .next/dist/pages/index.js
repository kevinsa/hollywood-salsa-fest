'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactBootstrap = require('react-bootstrap');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Welcome = require('../components/welcome/Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _About = require('../components/about/About');

var _About2 = _interopRequireDefault(_About);

var _Performance = require('../components/performance/Performance');

var _Performance2 = _interopRequireDefault(_Performance);

var _Schedule = require('../components/schedule/Schedule');

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Sponsors = require('../components/sponsors/Sponsors');

var _Sponsors2 = _interopRequireDefault(_Sponsors);

var _BottomNav = require('../components/BottomNav');

var _BottomNav2 = _interopRequireDefault(_BottomNav);

var _Contact = require('../components/contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Location = require('../components/location/Location');

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kevin/Projects/salsa-fest/pages/index.js?entry';


var IndexPage = function IndexPage(props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_Welcome2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_About2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(_Performance2.default, { performers: props.performers, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement(_Schedule2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_Sponsors2.default, { sponsors: props.sponsors, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(_Contact2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(_Location2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_BottomNav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
};

IndexPage.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var performers, sponsors;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            performers = [{ id: 0, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' }, { id: 1, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' }, { id: 2, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' }, { id: 3, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' }];
            sponsors = [{ id: 0, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 1, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 2, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 3, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 4, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 5, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 6, name: '', imgUrl: 'http://via.placeholder.com/100x50' }, { id: 7, name: '', imgUrl: 'http://via.placeholder.com/100x50' }];
            return _context.abrupt('return', {
              performers: performers,
              sponsors: sponsors
            });

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJmZXRjaCIsIkdyaWQiLCJSb3ciLCJDb2wiLCJMYXlvdXQiLCJXZWxjb21lIiwiQWJvdXQiLCJQZXJmb3JtYW5jZSIsIlNjaGVkdWxlIiwiU3BvbnNvcnMiLCJCb3R0b21OYXYiLCJDb250YWN0IiwiTG9jYXRpb24iLCJJbmRleFBhZ2UiLCJwcm9wcyIsInBlcmZvcm1lcnMiLCJzcG9uc29ycyIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsIm5hbWUiLCJpbWdVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQUs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLE9BQUQ7eUJBQ2hCLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMsdUNBQVksWUFBWSxNQUF6QixBQUErQjtnQkFBL0I7a0JBSEYsQUFHRSxBQUNBO0FBREE7c0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBSkYsQUFJRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDLG9DQUFTLFVBQVUsTUFBcEIsQUFBMEI7Z0JBQTFCO2tCQUxGLEFBS0UsQUFDQTtBQURBO3NCQUNBLEFBQUM7O2dCQUFEO2tCQU5GLEFBTUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFUYyxBQUNoQixBQVFFO0FBQUE7QUFBQTtBQVRKOztBQWFBLFVBQUEsQUFBVSw4QkFBVjtzRkFBNEIsaUJBQUEsQUFBZ0IsU0FBaEI7b0JBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDcEI7QUFEb0IseUJBQ1AsQ0FDakIsRUFBRSxJQUFGLEFBQU0sR0FBRyxNQUFULEFBQWUsb0JBQW9CLFFBRGxCLEFBQ2pCLEFBQTJDLHdDQUMzQyxFQUFFLElBQUYsQUFBTSxHQUFHLE1BQVQsQUFBZSxvQkFBb0IsUUFGbEIsQUFFakIsQUFBMkMsd0NBQzNDLEVBQUUsSUFBRixBQUFNLEdBQUcsTUFBVCxBQUFlLG9CQUFvQixRQUhsQixBQUdqQixBQUEyQyx3Q0FDM0MsRUFBRSxJQUFGLEFBQU0sR0FBRyxNQUFULEFBQWUsb0JBQW9CLFFBTFgsQUFDUCxBQUlqQixBQUEyQyxBQUd2QztBQVJvQix1QkFRVCxDQUNmLEVBQUUsSUFBRixBQUFNLEdBQUcsTUFBVCxBQUFlLElBQUksUUFESixBQUNmLEFBQTJCLHVDQUMzQixFQUFFLElBQUYsQUFBTSxHQUFHLE1BQVQsQUFBZSxJQUFJLFFBRkosQUFFZixBQUEyQix1Q0FDM0IsRUFBRSxJQUFGLEFBQU0sR0FBRyxNQUFULEFBQWUsSUFBSSxRQUhKLEFBR2YsQUFBMkIsdUNBQzNCLEVBQUUsSUFBRixBQUFNLEdBQUcsTUFBVCxBQUFlLElBQUksUUFKSixBQUlmLEFBQTJCLHVDQUMzQixFQUFFLElBQUYsQUFBTSxHQUFHLE1BQVQsQUFBZSxJQUFJLFFBTEosQUFLZixBQUEyQix1Q0FDM0IsRUFBRSxJQUFGLEFBQU0sR0FBRyxNQUFULEFBQWUsSUFBSSxRQU5KLEFBTWYsQUFBMkIsdUNBQzNCLEVBQUUsSUFBRixBQUFNLEdBQUcsTUFBVCxBQUFlLElBQUksUUFQSixBQU9mLEFBQTJCLHVDQUMzQixFQUFFLElBQUYsQUFBTSxHQUFHLE1BQVQsQUFBZSxJQUFJLFFBaEJLLEFBUVQsQUFRZixBQUEyQjs7MEJBR3RCLEFBRUw7d0JBckJ3QixBQW1CbkI7QUFBQSxBQUNMOztlQXBCd0I7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUE1Qjs7dUJBQUE7NEJBQUE7QUFBQTtBQXlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCJ9