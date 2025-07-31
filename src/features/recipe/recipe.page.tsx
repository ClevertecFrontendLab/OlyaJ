import { Box, Image, Spinner } from "@chakra-ui/react";
import { categoriesIconsStyle, imageRecipeStyle, pictureDescriptionBoxStyle, recipePageStyle } from "./recipe.styles";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "./../../entities/recipes/api/recipesApi";
import { Error } from "@shared/ui/Error/Error";
import { BASE_URL } from "@shared/constants/api";
import { useCategoryMap } from "@shared/hooks/useCategoryMap";

function RecipePage() {
  const { recipeId } = useParams<{ recipeId?: string }>();

  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(recipeId as string, {
    skip: !recipeId,
  });

 

  if (isLoading) return <Spinner/>;
  if (error || !recipe) return <Error/>;

  return (
    <Box {...recipePageStyle}>
      {/* картинка + описание */}
      <Box {...pictureDescriptionBoxStyle}>
        <Image src={BASE_URL + recipe.image} alt={recipe.title} {...imageRecipeStyle}/>
        <Box {...categoriesIconsStyle}>
            <Box>{}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export const Component = RecipePage;
