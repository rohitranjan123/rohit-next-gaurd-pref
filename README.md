# Next Guard

A lightweight security & performance enhancement library for Next.js applications.

## Installation
```sh
npm install next-guard
```

## Usage

### **1. `NextGuardProvider` (Auto Security Enhancements)**
#### **Problem Solved:**
- Enforces **CSP** and **clickjacking protection** automatically.

#### **Integration in `_app.tsx`**
```tsx
import { NextGuardProvider } from "next-guard";

export default function App({ Component, pageProps }) {
  return (
    <NextGuardProvider>
      <Component {...pageProps} />
    </NextGuardProvider>
  );
}
```

---
### **2. `useXSSProtection` (Prevents XSS Attacks)**
#### **Problem Solved:**
- Sanitizes **user-generated HTML content** to prevent script injections.

#### **Example Usage:**
```tsx
import { useXSSProtection } from "next-guard";

const UserComment = ({ comment }: { comment: string }) => {
  const sanitizedComment = useXSSProtection(comment);
  return <p dangerouslySetInnerHTML={{ __html: sanitizedComment }} />;
};
```

---
### **3. `useLazyHydration` (Delays Hydration for Performance)**
#### **Problem Solved:**
- **Reduces hydration issues** and **improves performance** by delaying component hydration until visible.

#### **Example Usage:**
```tsx
import { useLazyHydration } from "next-guard";

const ExpensiveComponent = () => {
  const isHydrated = useLazyHydration();
  if (!isHydrated) return null;
  return <div>⚡ Expensive Component Hydrated! ⚡</div>;
};
```

---
### **4. `useIntersectionObserver` (Lazy Loading & Visibility Detection)**
#### **Problem Solved:**
- **Only renders elements when they become visible**, improving performance.

#### **Example Usage:**
```tsx
import { useIntersectionObserver } from "next-guard";

const LazyImage = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <div ref={ref} style={{ height: 300, background: "#ddd" }}>
      {isVisible ? <img src={'Your Link'} alt="Lazy" /> : "Loading..."}
    </div>
  );
};
```

---
### **5. `useIdleCallback` (Runs Code When Browser is Idle)**
#### **Problem Solved:**
- Defers **non-urgent tasks** like analytics, caching, or log processing.

#### **Example Usage:**
```tsx
import { useIdleCallback } from "next-guard";

const ExpensiveOperation = () => {
  useIdleCallback(() => {
    console.log("Expensive task executed in idle time!");
  });
  return <div>Task will run when the browser is idle.</div>;
};
```

---
### **6. `useCSP` (Enforces Content Security Policy)**
#### **Problem Solved:**
- Protects against **XSS and script injections** by enforcing a strict **CSP policy**.

#### **Example Usage:**
```tsx
import { useCSP } from "next-guard";

const SecurePage = () => {
  useCSP("default-src 'self'; script-src 'self' 'unsafe-inline'");
  return <div>Secure Page with CSP!</div>;
};
```

---
### **7. Utility Functions**

#### **Sanitize User Input (`sanitizeHTML`)**
```tsx
import { sanitizeHTML } from "next-guard/utils/security";

const UnsafeComponent = ({ content }: { content: string }) => {
  const safeContent = sanitizeHTML(content);
  return <div dangerouslySetInnerHTML={{ __html: safeContent }} />;
};
```

#### **Defer Non-Critical Code Execution (`requestIdleExecution`)**
```tsx
import { requestIdleExecution } from "next-guard/utils/performance";

requestIdleExecution(() => {
  console.log("Executed when browser is idle");
});
```

---
## **Integration Overview**

| **Hook/Component** | **Use Case** | **Integration Point** |
|--------------------|-------------|--------------------|
| `NextGuardProvider` | Auto-apply security features | Wrap in `_app.tsx` |
| `useXSSProtection` | Prevent XSS when rendering user content | Inside any component that handles input |
| `useLazyHydration` | Delay hydration for non-critical components | Inside performance-heavy components |
| `useIntersectionObserver` | Lazy-load images, animations, and content | Attach to any element needing lazy rendering |
| `useIdleCallback` | Defer non-urgent tasks | Inside effects or handlers for logging, analytics, etc. |
| `useCSP` | Dynamically add a Content Security Policy | Inside sensitive pages to enforce security |

---
## **Final Thoughts**
- **Security Hooks (`useXSSProtection`, `useCSP`, `NextGuardProvider`)** prevent **XSS, Clickjacking, and CSP issues**.
- **Performance Hooks (`useLazyHydration`, `useIdleCallback`, `useIntersectionObserver`)** improve **Next.js app performance**.
