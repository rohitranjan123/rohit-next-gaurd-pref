import { useEffect as u, useRef as r, useState as s } from "react";
export const useIntersectionObserver = (e: IntersectionObserverInit) => { const o = r<HTMLElement | null>(null), t = s(false), n = t[1]; return u(() => { const i = new IntersectionObserver(([c]) => { n(c.isIntersecting); }, e); return o.current && i.observe(o.current), () => i.disconnect(); }, [e]), [o, t[0]] as const; };
