import { useState, useCallback } from 'react';

function useCounter(initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var _a = useState(initialValue), count = _a[0], setCount = _a[1];
    var increaseValue = useCallback(function () { return setCount(count + 1); }, [count]);
    return [count, increaseValue];
}

export { useCounter };
