import { CategoryResponse } from './../../entities/categories/model/categoriesTypes';
import { Recipe } from './../../entities/recipes/model/recipesTypes';

export function getCategoryPairFromRecipe(
    recipe: Recipe,
    categories: CategoryResponse[],
): {
    categoryId: string | undefined;
    subcategoryId: string | undefined;
    categoryTitles: string[];
} {
    const subcategoryId = recipe?.categoriesIds?.find((id) =>
        categories?.some((cat) => cat.subCategories?.some((sub) => sub && sub._id === id)),
    );

    const category = categories.find((cat) =>
        cat.subCategories?.some((sub) => sub._id === subcategoryId),
    );

    const categoryId = category?._id;

    const categoryTitles = recipe?.categoriesIds
        .map((id) => {
            const foundCategory =
                categories.find((cat) => cat._id === id) ??
                categories.flatMap((cat) => cat.subCategories).find((sub) => sub && sub._id === id);

            return foundCategory?.title;
        })
        .filter(Boolean) as string[];

    return { categoryId, subcategoryId, categoryTitles };
}
