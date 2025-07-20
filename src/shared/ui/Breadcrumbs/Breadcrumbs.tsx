import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner,
    Text,
} from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { href } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../../entities/categories/api/categoriesApi';
import { useGetRecipeByIdQuery} from './../../../entities/recipes/api/recipesApi'

export const Breadcrumbs = () => {
    const { categoryId, subcategoryId, recipeId } = useParams();
    const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
    const { data: recipe } = useGetRecipeByIdQuery(recipeId ?? '', {
        skip: !recipeId,
      });


    if (isLoading) return <Spinner />;
    if (error) return <Text color="red.500">Ошибка загрузки категорий</Text>;

    const currentCategory = categories?.find(cat => cat.category === categoryId);
    const currentSubcategory = currentCategory?.subCategories?.find(
        sub => sub.category === subcategoryId
    );

    const firstSub = currentCategory?.subCategories?.[0];
    const categoryHref = firstSub
        ? href(ROUTES.SUBCATEGORY, {
            categoryId: currentCategory.category,
            subcategoryId: firstSub.category,
        })
        : ROUTES.MAIN;

    return (
        <Breadcrumb fontSize="m" separator=">" mb={4}>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to={ROUTES.MAIN}>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {currentCategory && (
                <BreadcrumbItem>
                    <BreadcrumbLink as={RouterLink} to={categoryHref}>
                        {currentCategory.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {subcategoryId && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>
                        {currentSubcategory?.title ?? subcategoryId}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {recipeId && recipe && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>{recipe.title}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
