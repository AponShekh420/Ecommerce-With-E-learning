"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface UtilityContextType {
  isShowSidebar: boolean;
  toggleSidebar: () => void;
}

const UtilityContext = createContext<UtilityContextType | undefined>(undefined);

export function useUtility() {
  const context = useContext(UtilityContext);
  if (!context) {
    throw new Error("useUtility must be used within an AllUtilityProvider");
  }
  return context;
}

export function AllUtilityProvider({ children }: { children: ReactNode }) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsShowSidebar((prev) => !prev);
  };

  const contextObj: UtilityContextType = {
    isShowSidebar,
    toggleSidebar,
  };

  return (
    <UtilityContext.Provider value={contextObj}>
      {children}
    </UtilityContext.Provider>
  );
}
