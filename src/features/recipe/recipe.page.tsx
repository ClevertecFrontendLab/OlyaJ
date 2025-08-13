import { Box, Button, HStack, Icon, Image, Spinner, Text } from '@chakra-ui/react';
import {
    allIngredientsBoxStyle,
    buttonRecipeStyle,
    buttonsBoxStyle,
    calorieBoxStyle,
    caloryTextStyle,
    categoriesIconsStyle,
    categoryBoxStyle,
    descriptionBoxStyle,
    descriptionRecipeStyle,
    imageRecipeStyle,
    ingredientRowStyle,
    ingredientsSelectBoxStyle,
    ingredientsTextStyle,
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
import { NutritionValues } from './NutritionValue/nutritionValue';
import { PortionSelector } from './PortionSelector/PortionSelector';



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
            
            {/* калории */}
            <Box {...calorieBoxStyle}>
                <Text {...caloryTextStyle}>* Калорийность на 1 порцию</Text>
                <NutritionValues {...recipe.nutritionValue}/>
            </Box>

            {/* ингредиенты + порции */}
                <Box {...ingredientsSelectBoxStyle}>
                    <Text {...ingredientsTextStyle}>ИНГРЕДИЕНТЫ</Text>
                    <PortionSelector/>
                </Box>

                <Box {...allIngredientsBoxStyle}>
                    {recipe.ingredients.map((ing)=>(
                        <HStack key={ing.title} {...ingredientRowStyle}>
                            <Text>{ing.title}</Text>
                            <Text>{`${ing.count} ${ing.measureUnit}`}</Text>
                        </HStack>
                    ))}
                </Box>

        </Box>
    );
}

export const Component = RecipePage;
