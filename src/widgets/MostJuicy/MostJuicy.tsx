import { Box, Button, Heading, useBreakpointValue } from '@chakra-ui/react';
import { headingStyle } from '../NewRecipes/newRecipes.styles';
import { boxJuicyStyle, buttonStyle, headingButtonBoxStyle } from './mostJuicy.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { cardsBoxStyle } from '@features/subcategory/subcategory.styles';
import { useGetAllRecipesQuery } from './../../entities/recipes/api/recipesApi';
import { useCategoryMap } from './../../shared/hooks/useCategoryMap';
import { VerticalDesktopCard } from './../../shared/ui/Cards/VerticalCards/VerticalDesktopCard/VerticalDesktopCard';
import { VerticalTabletCard } from './../../shared/ui/Cards/VerticalCards/VerticalTabletCard/VerticalTabletCard';
import { BASE_URL } from './../../shared/constants/api';
import { getCategoryPairFromRecipe } from '@shared/lib/getCategoryPairFromRecipe';

export const MostJuicy = () => {
    const navigate = useNavigate();
    const { data: recipes } = useGetAllRecipesQuery({
        sortBy: 'likes',
        sortOrder: 'asc',
        limit: 4,
    });
    const { categories } = useCategoryMap();
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    return (
        <Box as='section' {...boxJuicyStyle}>
            <Box {...headingButtonBoxStyle}>
                <Heading {...headingStyle}>Самое сочное</Heading>
                <Button
                    {...buttonStyle}
                    display={{ base: 'none', lg: 'inline-flex' }}
                    onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(ROUTES.MOST_JUICY);
                    }}
                >
                    Вся подборка →
                </Button>
            </Box>

            <Box {...cardsBoxStyle}>
                {recipes?.data.map((recipe) => {
                    const { categoryId, subcategoryId, categoryTitles } = getCategoryPairFromRecipe(
                        recipe,
                        categories ?? [],
                    );

                    return isDesktop ? (
                        <VerticalDesktopCard
                            key={recipe._id}
                            title={recipe.title}
                            description={recipe.description}
                            image={BASE_URL + recipe.image}
                            likeCount={recipe.likes}
                            saveCount={recipe.bookmarks}
                            category={categoryTitles}
                            categoryId={categoryId}
                            subcategoryId={subcategoryId}
                            recipeId={recipe._id}
                        />
                    ) : (
                        <VerticalTabletCard
                            key={recipe._id}
                            title={recipe.title}
                            image={BASE_URL + recipe.image}
                            likeCount={recipe.likes}
                            saveCount={recipe.bookmarks}
                            recipeId={recipe._id}
                            categoryId={categoryId}
                            subcategoryId={subcategoryId}
                        />
                    );
                })}
            </Box>
            <Button
                {...buttonStyle}
                display={{ base: 'inline-flex', lg: 'none' }}
                onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(ROUTES.MOST_JUICY);
                }}
            >
                Вся подборка →
            </Button>
        </Box>
    );
};
