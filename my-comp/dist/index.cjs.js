'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function Useless() {
    var value = React.useState('useless')[0];
    return (React.createElement("div", null,
        React.createElement("h2", null, "Useless component"),
        React.createElement("p", null, "Tree shaking test"),
        React.createElement("button", { type: "button" }, value)));
}

exports.Counter = Counter;
exports.Useless = Useless;
