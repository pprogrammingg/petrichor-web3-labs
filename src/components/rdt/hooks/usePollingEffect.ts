import { useRef, useEffect } from 'react';

export const usePollingEffect = (
  asyncCallback: Function,
  dependencies = [],
  {
    interval = 10_000, // 10 seconds,
    onCleanUp = () => {}
  } = {},
) => {
  const timeoutIdRef = useRef<null | NodeJS.Timeout>(null);
  console.log("value of  timeoutIdRef.current 1");
  console.log( timeoutIdRef.current);
  useEffect(() => {
    let _stopped = false;
    // Side note: preceding semicolon needed for IIFEs.
    ;(async function pollingCallback() {
      try {
        await asyncCallback();
      } finally {
        // Set timeout after it finished unless stopped
        timeoutIdRef.current = !_stopped && setTimeout(
          pollingCallback,
          interval
        );
        console.log("value of  timeoutIdRef.current 2");
        console.log( timeoutIdRef.current);
      }
    })();
    
    // Clean up if dependencies change
    return () => {
      _stopped = true; // prevent racing conditions
      console.log("value of  timeoutIdRef.current 3");
      console.log( timeoutIdRef.current);
      clearTimeout(timeoutIdRef.current as NodeJS.Timeout);
      onCleanUp();
    };
  }, [...dependencies, interval]);
}
