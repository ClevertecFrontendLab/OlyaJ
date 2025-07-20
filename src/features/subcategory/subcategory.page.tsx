import { PageHeader } from "./../../widgets/PageHeader/PageHeader";
import { SubcategoryTabs } from "@shared/ui/Tabs/Tabs";
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi";
import { useParams } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useGetRecipesByCategoryIdQuery } from "./../../entities/recipes/api/recipesApi";
import { VerticalDesktopCard } from "@shared/ui/Cards/VerticalCards/VerticalDesktopCard/VerticalDesktopCard";
import { BASE_URL } from "@shared/constants/api";
import { cardsBoxStyle, subcategoryBoxStyle } from "./subcategory.styles";

function SubcategoryPage() {
  const { categoryId, subcategoryId, recipeId} = useParams();
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();

  const currentCategory = categories?.find(cat => cat.category === categoryId);
  const currentSubcategory = currentCategory?.subCategories.find(sub => sub.category === subcategoryId);

  const { data: recipes, isLoading: recipesLoading } = useGetRecipesByCategoryIdQuery(
    {
      id: currentSubcategory?._id ?? '',
      page: 1,
      limit: 8,
    },
  );

  if (isLoading) return <Spinner />;
  if (isError || !categories) return <Text>Ошибка загрузки категорий</Text>;
  if (!currentCategory) return <Text>Категория не найдена</Text>;
  if (!currentSubcategory) return <Text>Подкатегория не найдена</Text>;


  return (
    <Box {...subcategoryBoxStyle}>
      <PageHeader />
      <SubcategoryTabs subCategories={currentCategory.subCategories} />
      <Box {...cardsBoxStyle}>
        {recipes?.data.map(recipe => (
          <VerticalDesktopCard
            title={recipe.title}
            description={recipe.description}
            image={BASE_URL + recipe.image}
            likeCount={recipe.likes}
            saveCount={recipe.bookmarks}
            category={recipe.categoriesIds}
            categoryId={categoryId || ''}
            subcategoryId={subcategoryId || ''}
            recipeId={recipe._id || ''}
          />
        ))}
      </Box>
    </Box>
  );
}

export const Component = SubcategoryPage;
