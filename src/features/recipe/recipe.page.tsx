import { Box, Image, Spinner } from "@chakra-ui/react";
import { pictureDescriptionBoxStyle, recipePageStyle } from "./recipe.styles";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "src/entities/recipes/api/recipesApi";
import { Error } from "@shared/ui/Error/Error";

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
        <Image src={recipe.image} alt={recipe.title} />
        <Box>{recipe.description}</Box>
      </Box>
    </Box>
  );
}

export const Component = RecipePage;
