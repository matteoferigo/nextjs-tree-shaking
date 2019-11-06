function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { useCounter } from 'my-lib';

function Counter() {
  var _useCounter = useCounter(0),
      _useCounter2 = _slicedToArray(_useCounter, 2),
      count = _useCounter2[0],
      increaseValue = _useCounter2[1];

  return React.createElement(React.Fragment, null, React.createElement("button", {
    id: "button",
    type: "button",
    onClick: increaseValue
  }, "Click me"), React.createElement("div", null, "Count is:", React.createElement("span", {
    id: "count"
  }, count)));
}

export default Counter;