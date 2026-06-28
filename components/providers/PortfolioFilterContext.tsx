"use client";

import { createContext, useContext, useState } from "react";

interface FilterState {
  industry: string | null;
  setIndustry: (i: string | null) => void;
}

const PortfolioFilterContext = createContext<FilterState | null>(null);

export function PortfolioFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [industry, setIndustry] = useState<string | null>(null);
  return (
    <PortfolioFilterContext.Provider value={{ industry, setIndustry }}>
      {children}
    </PortfolioFilterContext.Provider>
  );
}

export function usePortfolioFilter() {
  const ctx = useContext(PortfolioFilterContext);
  if (!ctx)
    throw new Error("usePortfolioFilter must be used within PortfolioFilterProvider");
  return ctx;
}
