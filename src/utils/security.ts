export const sanitizeHTML = (t: string): string => { const e = document.createElement("div"); return e.innerText = t, e.innerHTML; };
export const enforceCSP = (): void => { const t = document.createElement("meta"); t.httpEquiv = "Content-Security-Policy"; t.content = "default-src 'self'; script-src 'self' 'unsafe-inline'"; document.head.appendChild(t); };
export const preventClickjacking = (): void => { window.self !== window.top && (document.body.innerHTML = ""); };
