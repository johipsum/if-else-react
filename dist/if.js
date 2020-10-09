"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _else = _interopRequireDefault(require("./else"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getIndexOfElse(children) {
  if (!Array.isArray(children)) {
    return -1;
  }

  return children.findIndex(function (child) {
    return child && child.type === _else["default"];
  });
}

var If = function If(_ref) {
  var condition = _ref.condition,
      children = _ref.children;
  var indexOfElse = getIndexOfElse(children);

  if (indexOfElse === -1) {
    return condition ? children : null;
  }

  if (condition) {
    return children.slice(0, indexOfElse);
  }

  return children.slice(indexOfElse);
};

If.propTypes = {
  condition: _propTypes.bool,
  children: (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.node), _propTypes.node])
};
var _default = If;
exports["default"] = _default;