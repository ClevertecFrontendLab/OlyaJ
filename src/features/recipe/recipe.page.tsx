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
    recipeCardBoxStyle,
    recipeCardDescriptionBoxStyle,
    recipeCardDescriptionTextStyle,
    recipeCategoriesStyle,
    recipePageStyle,
    recipeStepsBoxStyle,
    recipeStepsTextStyle,
    stepCardImageStyle,
    stepCardStyle,
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
import { PortionSelector } from './PortionSelector/PortionSelector';
import { useMemo, useState } from 'react';
import { NutritionValues } from './NutritionValue/NutritionValue';




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

    const baseServings = recipe?.portions ?? 4 
    const [servings, setServings] = useState(baseServings)
    const scale = useMemo(()=>servings/baseServings, [servings, baseServings])

    const scaledCount = (count: number, unit: string) => {
        const u = (unit || "").toLowerCase();

        const discreteUnits = ["шт", "зубчик", "зубчика", "зубчиков", "пучок", "пучка", "пучков"];
        const isDiscrete = discreteUnits.includes(u);
    
        const raw = count * scale;
        const qty = isDiscrete ? Math.max(1, Math.round(raw)) : Math.round(raw * 10) / 10; 
    
        return `${qty} ${unit}`;
      };


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
                    <PortionSelector value={servings} onChange={setServings} />
                </Box>

                <Box {...allIngredientsBoxStyle}>
                    {recipe.ingredients.map((ing)=>(
                        <HStack key={ing.title} {...ingredientRowStyle}>
                            <Text>{ing.title}</Text>
                            <Text>{scaledCount(ing.count, ing.measureUnit)}</Text>
                        </HStack>
                    ))}
                </Box>

                {/* шаши приготовления рецепта */}
                <Box {...recipeStepsBoxStyle}>
                    <Text {...recipeStepsTextStyle}>Шаги приготовления</Text>
                    <Box {...recipeCardBoxStyle}>
                        {recipe.steps.map(step=>(
                            <Box {...stepCardStyle}>
                                <Image src={BASE_URL + step.image} alt="image" {...stepCardImageStyle}/>
                                <Box {...recipeCardDescriptionBoxStyle}>
                                    <Text>Шаг {step.stepNumber}</Text>
                                    <Text {...recipeCardDescriptionTextStyle}>{step.description}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

        </Box>
    );
}

export const Component = RecipePage;
