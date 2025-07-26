import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spinner,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { href } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../../entities/categories/api/categoriesApi';
import { useGetRecipeByIdQuery } from './../../../entities/recipes/api/recipesApi';
import { Error } from './../../../shared/ui/Error/Error';

export const Breadcrumbs = () => {
    const { categoryId, subcategoryId, recipeId } = useParams();
    const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
    const { data: recipe } = useGetRecipeByIdQuery(recipeId ?? '', {
        skip: !recipeId,
    });

    const flexDirection = useBreakpointValue({
        base: 'column || row',
        md: 'column || row',
        lg: 'row',
    });

    if (isLoading) return <Spinner />;
    if (error) return <Error />;

    const currentCategory = categories?.find(
        (cat) => cat._id === categoryId || cat.category === categoryId,
    );

    const currentSubcategory = currentCategory?.subCategories?.find(
        (sub) => sub._id === subcategoryId || sub.category === subcategoryId,
    );

    const firstSub = currentCategory?.subCategories?.[0];
    const categoryHref = firstSub
        ? href(ROUTES.SUBCATEGORY, {
              categoryId: currentCategory.category,
              subcategoryId: firstSub.category,
          })
        : ROUTES.MAIN;

    const location = useLocation();
    const juicyPage = location.pathname === ROUTES.MOST_JUICY;

    return (
        <Breadcrumb
            separator='>'
            sx={{
                '& > ol': {
                    display: 'flex',
                    flexDirection: flexDirection,
                    flexWrap: 'wrap',
                    gap: '4px',
                    alignItems: 'flex-start',
                    fontSzie: '16px',
                },
            }}
        >
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
                    <BreadcrumbLink>{currentSubcategory?.title ?? subcategoryId}</BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {recipeId && recipe && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>{recipe.title}</BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {juicyPage && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>Самое сочное</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
