import { useEffect as x } from "react";
export const useIdleCallback = (t: () => void): void => { x(() => { "requestIdleCallback" in window ? requestIdleCallback(t) : setTimeout(t, 100); }, [t]); };
