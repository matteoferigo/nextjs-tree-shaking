import { createElement, Fragment } from 'react';
import { useCounter } from 'my-lib';
import { fake } from 'faker';

function Counter() {
    var _a = useCounter(0), count = _a[0], increaseValue = _a[1];
    return (createElement(Fragment, null,
        createElement("button", { id: "button", type: "button", onClick: increaseValue }, "Click me"),
        createElement("div", null,
            "Count is:",
            createElement("span", { id: "count" }, count))));
}

function Useless() {
    return (createElement("div", null,
        createElement("h2", null, "Useless component"),
        createElement("p", null,
            "My name is:",
            createElement("span", null, fake('{{name.lastName}}')))));
}

export { Counter, Useless };
