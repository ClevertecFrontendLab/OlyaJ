import { Box, Button, HStack, Icon, Image, Spinner, Text } from '@chakra-ui/react';
import {
    buttonRecipeStyle,
    buttonsBoxStyle,
    categoriesIconsStyle,
    categoryBoxStyle,
    descriptionBoxStyle,
    descriptionRecipeStyle,
    imageRecipeStyle,
    pictureDescriptionBoxStyle,
    recipeCategoriesStyle,
    recipePageStyle,
    timeRecipeStyle,
    titleDescriptionBoxStyle,
    titleRecipeStyle,
} from './recipe.styles';
import { useParams } from 'react-router-dom';
import { useGetRecipeByIdQuery } from './../../entities/recipes/api/recipesApi';
import { Error } from '@shared/ui/Error/Error';
import { BASE_URL } from '@shared/constants/api';
import { getCategoryPairFromRecipe } from '@shared/lib/getCategoryPairFromRecipe';
import { Recipe } from 'src/entities/recipes/model/recipesTypes';
import { useCategoryMap } from '@shared/hooks/useCategoryMap';
import saveIcon from './../../../public/bookmarkHeart.svg';
import { BsBookmark } from 'react-icons/bs';
import { MdSentimentSatisfiedAlt } from 'react-icons/md';
import likeIcon from './../../../public/heartEyes.svg';
import {
    iconLikeSaveBoxStyle,
    iconStyle,
    likeSaveIconsBox,
} from '@shared/ui/Cards/NewRecipeDescktopCard/newRecipeDesktopCard.styles';

function RecipePage() {
    const { recipeId } = useParams<{ recipeId?: string }>();

    const {
        data: recipe,
        isLoading,
        error,
    } = useGetRecipeByIdQuery(recipeId as string, {
        skip: !recipeId,
    });

    const { categories } = useCategoryMap();
    const { categoryTitles } = getCategoryPairFromRecipe(recipe as Recipe, categories || []);

    if (isLoading) return <Spinner />;
    if (error || !recipe) return <Error />;

    return (
        <Box {...recipePageStyle}>
            {/* картинка + описание */}
            <Box {...pictureDescriptionBoxStyle}>
                <Image src={BASE_URL + recipe.image} alt={recipe.title} {...imageRecipeStyle} />

                <Box {...descriptionBoxStyle}>
                    {/* категории + иконки*/}
                    <Box {...categoriesIconsStyle}>
                        <Box {...recipeCategoriesStyle}>
                            {categoryTitles.map((title) => (
                                <Box key={title} {...categoryBoxStyle}>
                                    {title}
                                </Box>
                            ))}
                        </Box>

                        <Box {...likeSaveIconsBox}>
                            <Box {...iconLikeSaveBoxStyle}>
                                <Image src={saveIcon} alt='icon' {...iconStyle} />
                                <Text>{recipe.bookmarks}</Text>
                            </Box>

                            <Box {...iconLikeSaveBoxStyle}>
                                <Image src={likeIcon} alt='icon' {...iconStyle} />
                                <Text>{recipe.likes}</Text>
                            </Box>
                        </Box>
                    </Box>

                    {/* название рецепта + описание */}
                    <Box {...titleDescriptionBoxStyle}>
                        <Text {...titleRecipeStyle}>{recipe.title}</Text>
                        <Text {...descriptionRecipeStyle}>{recipe.description}</Text>
                    </Box>

                    {/* кнопки */}

                    <Box {...buttonsBoxStyle}>
                        <Text {...timeRecipeStyle}>{recipe.time} минут</Text>
                        <HStack spacing={{ base: '2', md: '2', lg: '4' }}>
                            <Button
                                variant='outline'
                                {...buttonRecipeStyle}
                                leftIcon={<Icon as={MdSentimentSatisfiedAlt} />}
                            >
                                Оценить рецепт
                            </Button>

                            <Button
                                backgroundColor='#B1FF2E'
                                {...buttonRecipeStyle}
                                leftIcon={<Icon as={BsBookmark} />}
                            >
                                Сохранить в закладки
                            </Button>
                        </HStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export const Component = RecipePage;
