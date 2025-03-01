import { useEffect as m } from "react";
export const useCSP = (t: string): void => { m(() => { const e = document.createElement("meta"); e.httpEquiv = "Content-Security-Policy"; e.content = t; document.head.appendChild(e); return () => { e.parentNode?.removeChild(e); }; }, [t]); };
