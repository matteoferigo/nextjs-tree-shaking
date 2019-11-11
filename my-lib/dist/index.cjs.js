'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useCounter(initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var _a = react.useState(initialValue), count = _a[0], setCount = _a[1];
    var increaseValue = react.useCallback(function () { return setCount(count + 1); }, [count]);
    return [count, increaseValue];
}

exports.useCounter = useCounter;
