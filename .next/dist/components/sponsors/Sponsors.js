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

var _jsxFileName = '/Users/kevin/Projects/salsa-fest/components/sponsors/Sponsors.js';


var sponsors = function sponsors(props) {

  var sponsorContents = props.sponsors.map(function (sponsor) {
    return _react2.default.createElement('div', { key: sponsor.id, className: 'jsx-1648053795' + ' ' + 'sponsor',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, _react2.default.createElement('img', { src: sponsor.imgUrl, height: sponsor.height, className: 'jsx-1648053795',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), _react2.default.createElement(_style2.default, {
      styleId: '1648053795',
      css: '.sponsor.jsx-1648053795{display:inline-block;margin-bottom:7px;position:relative;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3BvbnNvcnMvU3BvbnNvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3NCLEFBR29DLHFCQUNILGtCQUNBLGtCQUNMLGFBQ2YiLCJmaWxlIjoiY29tcG9uZW50cy9zcG9uc29ycy9TcG9uc29ycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gJy4uL0NvbnRlbnRTZWN0aW9uJ1xuXG5jb25zdCBzcG9uc29ycyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHNwb25zb3JDb250ZW50cyA9IHByb3BzLnNwb25zb3JzLm1hcCgoc3BvbnNvcikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtzcG9uc29yLmlkfSBjbGFzc05hbWU9XCJzcG9uc29yXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Nwb25zb3IuaW1nVXJsfSBoZWlnaHQ9e3Nwb25zb3IuaGVpZ2h0fSAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zcG9uc29yIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxDb250ZW50U2VjdGlvbiB0aXRsZT17ICdFdmVudCBTcG9uc29ycycgfSB0aGVtZT17ICd3aGl0ZScgfSBzZWN0aW9uSWQ9eyAnc3BvbnNvcnMnIH0+XG4gICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BvbnNvcnNcIj5cbiAgICAgICAgICB7c3BvbnNvckNvbnRlbnRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgIDwvQ29udGVudFNlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNwb25zb3JzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IHNwb25zb3JzIl19 */\n/*@ sourceURL=components/sponsors/Sponsors.js */'
    }));
  });

  return _react2.default.createElement(_react2.default.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_ContentSection2.default, { title: 'Event Sponsors', theme: 'white', sectionId: 'sponsors', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { md: 12, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-163984012' + ' ' + 'sponsors',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, sponsorContents))), _react2.default.createElement(_style2.default, {
    styleId: '163984012',
    css: '.sponsors.jsx-163984012{display:block;line-height:0;margin-top:10px;padding:30px 10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3BvbnNvcnMvU3BvbnNvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJnQixBQUd1QixjQUNBLGNBQ0UsZ0JBQ0Usa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvc3BvbnNvcnMvU3BvbnNvcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluL1Byb2plY3RzL3NhbHNhLWZlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBDb250ZW50U2VjdGlvbiBmcm9tICcuLi9Db250ZW50U2VjdGlvbidcblxuY29uc3Qgc3BvbnNvcnMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBzcG9uc29yQ29udGVudHMgPSBwcm9wcy5zcG9uc29ycy5tYXAoKHNwb25zb3IpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17c3BvbnNvci5pZH0gY2xhc3NOYW1lPVwic3BvbnNvclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtzcG9uc29yLmltZ1VybH0gaGVpZ2h0PXtzcG9uc29yLmhlaWdodH0gLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc3BvbnNvciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8Q29udGVudFNlY3Rpb24gdGl0bGU9eyAnRXZlbnQgU3BvbnNvcnMnIH0gdGhlbWU9eyAnd2hpdGUnIH0gc2VjdGlvbklkPXsgJ3Nwb25zb3JzJyB9PlxuICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwb25zb3JzXCI+XG4gICAgICAgICAge3Nwb25zb3JDb250ZW50c31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICA8L0NvbnRlbnRTZWN0aW9uPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zcG9uc29ycyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMzBweCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4gXG5leHBvcnQgZGVmYXVsdCBzcG9uc29ycyJdfQ== */\n/*@ sourceURL=components/sponsors/Sponsors.js */'
  }));
};

exports.default = sponsors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3BvbnNvcnMvU3BvbnNvcnMuanMiXSwibmFtZXMiOlsiR3JpZCIsIlJvdyIsIkNvbCIsIkNvbnRlbnRTZWN0aW9uIiwic3BvbnNvcnMiLCJwcm9wcyIsInNwb25zb3JDb250ZW50cyIsIm1hcCIsInNwb25zb3IiLCJpZCIsImltZ1VybCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQU0sQUFBSzs7QUFDcEIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0FBRTNCLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQVUsQUFFMUI7O01BQU0sd0JBQWtCLEFBQU0sU0FBTixBQUFlLElBQUksVUFBQSxBQUFDLFNBQVksQUFDdEQ7MkJBQ0ksY0FBQSxTQUFLLEtBQUssUUFBVixBQUFrQix3Q0FBbEIsQUFBZ0M7O2tCQUFoQztvQkFBQSxBQUNFO0FBREY7S0FBQSx5Q0FDTyxLQUFLLFFBQVYsQUFBa0IsUUFBUSxRQUFRLFFBQWxDLEFBQTBDLG1CQUExQzs7a0JBQUE7b0JBREYsQUFDRTtBQUFBOztlQURGO1dBREosQUFDSSxBQVlMO0FBWks7QUFGTixBQUF3QixBQWdCeEIsR0FoQndCOzt5QkFpQnZCLGNBQUQsZ0JBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLDBDQUFlLE9BQWhCLEFBQXdCLGtCQUFtQixPQUEzQyxBQUFtRCxTQUFVLFdBQTdELEFBQXlFO2dCQUF6RTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxxQ0FBSSxJQUFMLEFBQVM7Z0JBQVQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7dUNBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRztBQURIO0FBQUEsS0FITixBQUNFLEFBQ0UsQUFDRTthQUhOO1NBREEsQUFDQSxBQW1CRDtBQW5CQztBQW5CRixBQXdDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJTcG9uc29ycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCJ9