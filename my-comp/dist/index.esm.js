import { createElement, Fragment, useState } from 'react';
import { useCounter } from 'my-lib';

function Counter() {
    var _a = useCounter(0), count = _a[0], increaseValue = _a[1];
    return (createElement(Fragment, null,
        createElement("button", { id: "button", type: "button", onClick: increaseValue }, "Click me"),
        createElement("div", null,
            "Count is:",
            createElement("span", { id: "count" }, count))));
}

function Useless() {
    var value = useState('useless')[0];
    return (createElement("div", null,
        createElement("h2", null, "Useless component"),
        createElement("p", null, "Tree shaking test"),
        createElement("button", { type: "button" }, value)));
}

export { Counter, Useless };
