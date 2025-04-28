import { createContext, useContext, useState } from 'react';

type BreadcrumbData = {
    accordion: string | null;
    subItem: string | null;
    tab: string | null;
    title?: string | null;
};

type BreadcrumbContextType = {
    breadcrumb: BreadcrumbData;
    setBreadcrumbs: (data: Partial<BreadcrumbData>) => void;
    resetBreadcrumbs: () => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
    const [breadcrumb, setBreadcrumb] = useState<BreadcrumbData>({
        accordion: null,
        subItem: null,
        tab: null,
        title: null,
    });

    const setBreadcrumbs = (data: Partial<BreadcrumbData>) => {
        setBreadcrumb((prev) => ({ ...prev, ...data }));
    };

    const resetBreadcrumbs = () => {
        setBreadcrumb({ accordion: null, subItem: null, tab: null, title: null });
    };

    return (
        <BreadcrumbContext.Provider
            value={{
                breadcrumb,
                setBreadcrumbs,
                resetBreadcrumbs,
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
