import { debounce, throttle } from "lodash";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

function useLatest(value: any) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}

function makeDebouncedHook(debounceFn: any) {
  return function useDebounce(cb: any, ms: any) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args: any) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
}

export const useDebounce = makeDebouncedHook(debounce);
export const useThrottle = makeDebouncedHook(throttle);

/*
const makeRequest = useDebounce(() => {
    console.log("make request with query: ", query);
  }, 300);
*/
