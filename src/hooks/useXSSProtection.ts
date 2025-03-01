import { useMemo as p } from "react";
import { sanitizeHTML as t } from "../utils/security";
export const useXSSProtection = (e: string): string => p(() => t(e), [e]);