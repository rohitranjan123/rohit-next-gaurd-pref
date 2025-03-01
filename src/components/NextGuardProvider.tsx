import { ReactNode as d, useEffect as g } from "react";
import { enforceCSP as y, preventClickjacking as b } from "../utils/security";
interface NextGuardProps { children: d; }
export const NextGuardProvider = ({ children }: NextGuardProps) => (g(() => { y(), b(); }, []), children);
