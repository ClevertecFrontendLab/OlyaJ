import { Box, Image, Spinner } from "@chakra-ui/react";
import { categoriesIconsStyle, imageRecipeStyle, pictureDescriptionBoxStyle, recipeCategoriesStyle, recipePageStyle } from "./recipe.styles";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "./../../entities/recipes/api/recipesApi";
import { Error } from "@shared/ui/Error/Error";
import { BASE_URL } from "@shared/constants/api";
import { getCategoryPairFromRecipe } from "@shared/lib/getCategoryPairFromRecipe";
import { Recipe } from "src/entities/recipes/model/recipesTypes";
import { useCategoryMap } from "@shared/hooks/useCategoryMap";


function RecipePage() {
  const { recipeId } = useParams<{ recipeId?: string }>();

  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(recipeId as string, {
    skip: !recipeId,
  });

  const {categories}  = useCategoryMap()
  const {categoryTitles} = getCategoryPairFromRecipe(recipe as Recipe, categories || [])

  if (isLoading) return <Spinner/>;
  if (error || !recipe) return <Error/>;

  return (
    <Box {...recipePageStyle}>
      {/* картинка + описание */}
      <Box {...pictureDescriptionBoxStyle}>
        <Image src={BASE_URL + recipe.image} alt={recipe.title} {...imageRecipeStyle}/>
        
        {/* категории + иконки*/}
        <Box {...categoriesIconsStyle}>

          <Box {...recipeCategoriesStyle}>
            {categoryTitles.map((title)=>(
              <Box key={title}>{title}</Box>
            ))}
          </Box>
          
        </Box>


      </Box>
    </Box>
  );
}

export const Component = RecipePage;
