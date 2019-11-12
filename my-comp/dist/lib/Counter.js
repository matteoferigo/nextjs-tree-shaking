'use strict';

var React = require('react');
var myLib = require('my-lib');

function Counter() {
    var _a = myLib.useCounter(0), count = _a[0], increaseValue = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { id: "button", type: "button", onClick: increaseValue }, "Click me"),
        React.createElement("div", null,
            "Count is:",
            React.createElement("span", { id: "count" }, count))));
}

module.exports = Counter;
