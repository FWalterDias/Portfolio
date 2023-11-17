import { createContext, useRef } from "react";
import { RefAboutProviderProps } from "../types/types";

export const RefAboutContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

export function RefAboutProvider({ children }: RefAboutProviderProps) {
    const refAbout = useRef<HTMLDivElement>(null);

    return (
        <RefAboutContext.Provider value={refAbout}>
            {children}
        </RefAboutContext.Provider>
    );
}
