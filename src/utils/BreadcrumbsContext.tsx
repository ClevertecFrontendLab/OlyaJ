import { createContext, useContext, useState } from 'react';

interface BreadcrumbContextType {
    activeAccordion: string | null;
    setActiveAccordion: (value: string | null) => void;
    activeSubItem: string | null;
    setActiveSubItem: (value: string | null) => void;
    setBreadcrumbs: (accordion: string | null, subItem: string | null) => void; // ← Добавляем это
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

    const setBreadcrumbs = (accordion: string | null, subItem: string | null) => {
        setActiveAccordion(accordion);
        setActiveSubItem(subItem);
    };

    return (
        <BreadcrumbContext.Provider
            value={{
                activeAccordion,
                setActiveAccordion,
                activeSubItem,
                setActiveSubItem,
                setBreadcrumbs,
            }}
        >
            {children}
        </BreadcrumbContext.Provider>
    );
};

export const useBreadcrumb = () => {
    const context = useContext(BreadcrumbContext);
    if (!context) {
        throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
    }
    return context;
};
