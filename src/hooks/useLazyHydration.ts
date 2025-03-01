import { useEffect as f, useState as h } from "react";
import { requestIdleExecution as n } from "../utils/performance";
export const useLazyHydration = (): boolean => { const [e, o] = h(false); return f(() => { n(() => o(true)) }, []), e; };
