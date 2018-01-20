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

  var theme = { fgColor: '#000', bgColor: '#fff' };

  switch (props.theme) {
    case 'black':
      theme.fgColor = "#fff";
      theme.bgColor = "#000";

    default:
  }

  return _react2.default.createElement(_react2.default.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('section', { id: props.sectionId || '', className: _style2.default.dynamic([['942465641', [theme.bgColor, theme.fgColor, theme.fgColor]]]) + ' ' + 'content-section',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_reactBootstrap.Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_reactBootstrap.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_reactBootstrap.Col, { md: 12, className: 'text-center', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('div', {
    className: _style2.default.dynamic([['942465641', [theme.bgColor, theme.fgColor, theme.fgColor]]]) + ' ' + 'section-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('h2', {
    className: _style2.default.dynamic([['942465641', [theme.bgColor, theme.fgColor, theme.fgColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.title), _react2.default.createElement('span', {
    className: _style2.default.dynamic([['942465641', [theme.bgColor, theme.fgColor, theme.fgColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('p', {
    className: _style2.default.dynamic([['942465641', [theme.bgColor, theme.fgColor, theme.fgColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })))), _react2.default.createElement(_reactBootstrap.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, props.children))), _react2.default.createElement(_style2.default, {
    styleId: '942465641',
    css: '.content-section.__jsx-style-dynamic-selector{padding:60px 60px;background-color:' + theme.bgColor + ';color:' + theme.fgColor + ';}.text-center.__jsx-style-dynamic-selector{text-align:center;}.section-title.__jsx-style-dynamic-selector{margin-bottom:60px;}.section-title.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:' + theme.fgColor + ';}.section-title.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{background:red;height:10px;width:70px;display:block;margin:auto;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudFNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNnQixBQUcyQixBQU1BLEFBSUMsQUFJZ0IsQUFJcEIsZUFDSCxHQWxCa0MsQUFNaEQsQ0FJQSxRQVNhLFFBTGIsR0FNZ0IsY0FDRixZQXBCdUIsQUFxQm5CLGdCQUNHLG1CQXJCckIsQUFzQkEiLCJmaWxlIjoiY29tcG9uZW50cy9Db250ZW50U2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW4vUHJvamVjdHMvc2Fsc2EtZmVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCBjb250ZW50U2VjdGlvbiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHRoZW1lID0geyBmZ0NvbG9yOiAnIzAwMCcsIGJnQ29sb3I6ICcjZmZmJyB9XG5cbiAgc3dpdGNoKHByb3BzLnRoZW1lKSB7XG4gICAgY2FzZSAnYmxhY2snOlxuICAgICAgdGhlbWUuZmdDb2xvciA9IFwiI2ZmZlwiXG4gICAgICB0aGVtZS5iZ0NvbG9yID0gXCIjMDAwXCJcblxuICAgIGRlZmF1bHQ6XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb25cIiBpZD17cHJvcHMuc2VjdGlvbklkIHx8ICcnfT5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbWQ9ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudC1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNjBweCA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJnQ29sb3J9O1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5mZ0NvbG9yfTtcbiAgICAgIH1cblxuICAgICAgLnRleHQtY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zZWN0aW9uLXRpdGxlIGgyIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuZmdDb2xvcn07XG4gICAgICB9XG5cbiAgICAgIC5zZWN0aW9uLXRpdGxlIHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRTZWN0aW9uIl19 */\n/*@ sourceURL=components/ContentSection.js */',
    dynamic: [theme.bgColor, theme.fgColor, theme.fgColor]
  }));
};

exports.default = contentSection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudFNlY3Rpb24uanMiXSwibmFtZXMiOlsiR3JpZCIsIlJvdyIsIkNvbCIsImNvbnRlbnRTZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImZnQ29sb3IiLCJiZ0NvbG9yIiwic2VjdGlvbklkIiwidGl0bGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQU0sQUFBSzs7Ozs7OztBQUVwQixJQUFNLGlCQUFpQixTQUFqQixBQUFpQixlQUFBLEFBQUMsT0FBVSxBQUVoQzs7TUFBTSxRQUFRLEVBQUUsU0FBRixBQUFXLFFBQVEsU0FBakMsQUFBYyxBQUE0QixBQUUxQzs7VUFBTyxNQUFQLEFBQWEsQUFDWDtTQUFBLEFBQUssQUFDSDtZQUFBLEFBQU0sVUFBTixBQUFnQixBQUNoQjtZQUFBLEFBQU0sVUFBTixBQUFnQixBQUVsQjs7QUFMRixBQVFBOzs7eUJBQ0MsY0FBRCxnQkFBQSxBQUFPOztnQkFBUDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsYUFBcUMsSUFBSSxNQUFBLEFBQU0sYUFBL0MsQUFBNEQsdURBb0JwQyxNQXBCeEIsQUFvQjhCLFNBQ2pCLE1BckJiLEFBcUJtQixTQVlOLE1BakNiLEFBaUNtQixvQkFqQ25CLEFBQW1COztnQkFBbkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMscUNBQUksSUFBTCxBQUFTLElBQUksV0FBYixBQUF1QjtnQkFBdkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7dURBZ0JnQixNQWhCaEIsQUFnQnNCLFNBQ2pCLE1BakJMLEFBaUJXLFNBWU4sTUE3QkwsQUE2Qlcsb0JBN0JYLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7dURBZWMsTUFmZCxBQWVvQixTQUNqQixNQWhCSCxBQWdCUyxTQVlOLE1BNUJILEFBNEJTOztnQkE1QlQ7a0JBQUEsQUFBSztBQUFMO0FBQUEsV0FERixBQUNFLEFBQVcsQUFDWDt1REFjYyxNQWRkLEFBY29CLFNBQ2pCLE1BZkgsQUFlUyxTQVlOLE1BM0JILEFBMkJTOztnQkEzQlQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQTt1REFjYyxNQWJkLEFBYW9CLFNBQ2pCLE1BZEgsQUFjUyxTQVlOLE1BMUJILEFBMEJTOztnQkExQlQ7a0JBTlIsQUFDRSxBQUNFLEFBQ0UsQUFHRSxBQUtOO0FBTE07QUFBQSx5QkFLTixBQUFDOztnQkFBRDtrQkFBQSxBQUNNO0FBRE47QUFBQSxXQWJOLEFBQ0UsQUFDRSxBQVdFLEFBQ1k7YUFkbEI7K0ZBcUIwQixNQXJCMUIsQUFxQmdDLHNCQUNqQixNQXRCZixBQXNCcUIsZ09BWU4sTUFsQ2YsQUFrQ3FCLFVBbENyQjtjQXFCMEIsTUFyQjFCLEFBcUJnQyxTQUNqQixNQXRCZixBQXNCcUIsU0FZTixNQW5DZixBQUNBLEFBa0NxQixBQWV0QjtBQWpEQztBQWJGLEFBZ0VBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRlbnRTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbi9Qcm9qZWN0cy9zYWxzYS1mZXN0In0=