import { menuItems } from '~/components/Sidebar/Sidebar';

export const getTitlesBySlugs = (
    categorySlug: string | undefined,
    subcategorySlug: string | undefined,
): { categoryTitle: string | null; subcategoryTitle: string | null } => {
    if (!categorySlug) return { categoryTitle: null, subcategoryTitle: null };

    const categoryItem = menuItems.find((item) => item.slug === categorySlug);
    const categoryTitle = categoryItem?.title || categorySlug;

    const subcategoryTitle =
        categoryItem?.subItems?.find((sub) => sub.slug === subcategorySlug)?.title ||
        subcategorySlug ||
        null;

    return { categoryTitle, subcategoryTitle };
};
