import { createContext, useState, useContext } from "react";

interface BreadcrumbContextType {
  activeAccordion: string | null;
  setActiveAccordion: (value: string | null) => void;
  activeSubItem: string | null;
  setActiveSubItem: (value: string | null) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  return (
    <BreadcrumbContext.Provider value={{ activeAccordion, setActiveAccordion, activeSubItem, setActiveSubItem }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  }
  return context;
};
