export const ROUTES = {
    MAIN: '/',
    SUBCATEGORY: '/:categoryId/:subcategoryId',
    RECIPE: '/:categoryId/:subcategoryId/:recipeId',
    MOST_JUICY: 'most-juicy/:recipeId',
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
    [ROUTES.MOST_JUICY]: {
        recipeId: string;
    };
};

declare module 'react-router-dom' {
    interface Register {
        params: PathParams;
    }
}
