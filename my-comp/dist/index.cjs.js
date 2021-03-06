'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var myLib = require('my-lib');
var faker = require('faker');

function Counter() {
    var _a = myLib.useCounter(0), count = _a[0], increaseValue = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { id: "button", type: "button", onClick: increaseValue }, "Click me"),
        React.createElement("div", null,
            "Count is:",
            React.createElement("span", { id: "count" }, count))));
}

function Useless() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Useless component"),
        React.createElement("p", null,
            "My name is:",
            React.createElement("span", null, faker.fake('{{name.lastName}}')))));
}

exports.Counter = Counter;
exports.Useless = Useless;
