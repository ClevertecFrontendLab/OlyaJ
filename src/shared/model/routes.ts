export const ROUTES = {
    MAIN: '/',
    AUTH: '/auth',
    SUBCATEGORY: '/:categoryId/:subcategoryId',
    RECIPE: '/:categoryId/:subcategoryId/:recipeId',
    MOST_JUICY: '/mostJuicy',
    NOT_FOUND: '*',
} as const;

export type PathParams = {
    [ROUTES.SUBCATEGORY]: {
        categoryId: string;
        subcategoryId: string;
    };
    [ROUTES.RECIPE]: {
        categoryId: string;
        subcategoryId: string;
        recipeId: string;
    };
};

declare module 'react-router-dom' {
    interface Register {
        params: PathParams;
    }
}
