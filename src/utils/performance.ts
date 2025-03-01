export const requestIdleExecution = (t: () => void): void => { "requestIdleCallback" in window ? requestIdleCallback(t) : setTimeout(t, 100); };
