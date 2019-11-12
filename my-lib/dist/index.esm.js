import { useState, useCallback } from 'react';

var first = {
	important: [
		1,
		2,
		3
	],
	niceToHave: [
		"1",
		"2",
		"3"
	],
	veryNiceToHave: {
		priority: [
			4,
			5,
			6,
			7
		],
		tasks: [
			4,
			5,
			6,
			7,
			8,
			9,
			10
		]
	}
};
var then = {
	important: [
		1,
		2,
		3
	],
	niceToHave: [
		"1",
		"2",
		"3"
	],
	veryNiceToHave: {
		priority: [
			4,
			5,
			6,
			7
		],
		tasks: [
			4,
			5,
			6,
			7,
			8,
			9,
			10
		]
	}
};
var more = {
	important: [
		1,
		2,
		3
	],
	niceToHave: [
		"1",
		"2",
		"3"
	],
	veryNiceToHave: {
		priority: [
			4,
			5,
			6,
			7
		],
		tasks: [
			4,
			5,
			6,
			7,
			8,
			9,
			10
		]
	}
};
var oneMore = {
	important: [
		1,
		2,
		3
	],
	niceToHave: [
		"1",
		"2",
		"3"
	],
	veryNiceToHave: {
		priority: [
			4,
			5,
			6,
			7
		],
		tasks: [
			4,
			5,
			6,
			7,
			8,
			9,
			10
		]
	}
};
var last = {
	important: [
		1,
		2,
		3
	],
	niceToHave: [
		"1",
		"2",
		"3"
	],
	veryNiceToHave: {
		priority: [
			4,
			5,
			6,
			7
		],
		tasks: [
			4,
			5,
			6,
			7,
			8,
			9,
			10
		]
	}
};
var stuff = {
	first: first,
	then: then,
	more: more,
	oneMore: oneMore,
	last: last
};

function useCounter(initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var _a = useState(initialValue), count = _a[0], setCount = _a[1];
    var increaseValue = useCallback(function () { return setCount(count + 1); }, [count]);
    return [count, increaseValue];
}

export { stuff, useCounter };
