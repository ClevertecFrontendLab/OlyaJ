import { PageHeader } from "./../../widgets/PageHeader/PageHeader";
import { SubcategoryTabs } from "@shared/ui/Tabs/Tabs";
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi";
import { useParams } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useGetAllRecipesQuery } from "./../../entities/recipes/api/recipesApi";
import { VerticalDesktopCard } from "@shared/ui/Cards/VerticalCards/VerticalDesktopCard/VerticalDesktopCard";
import { BASE_URL } from "@shared/constants/api";
import { cardsBoxStyle, subcategoryBoxStyle } from "./subcategory.styles";
import { useCategoryMap } from "./../../shared/hooks/useCategoryMap"

function SubcategoryPage() {
  const { categoryId, subcategoryId } = useParams();
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();

  const currentCategory = categories?.find(cat => cat.category === categoryId);
  const currentSubcategory = currentCategory?.subCategories.find(sub => sub.category === subcategoryId);
  const subcategoryIds = currentCategory?.subCategories.map(sub => sub._id) ?? [];

  const query = new URLSearchParams(location.search)
  const searchString = query.get("search") || undefined

  const shouldSearchAcrossAllSubcategories = !!searchString;

  const { data: recipes } = useGetAllRecipesQuery({
    subcategoriesIds: shouldSearchAcrossAllSubcategories
      ? subcategoryIds.join(',')
      : currentSubcategory?._id ?? '',
    page: 1,
    limit: 8,
    searchString,
  });

  const { categoryMap } = useCategoryMap()


  if (isLoading) return <Spinner />;
  if (isError || !categories) return <Text>Ошибка загрузки категорий</Text>;
  if (!currentCategory) return <Text>Категория не найдена</Text>;
  if (!currentSubcategory) return <Text>Подкатегория не найдена</Text>;


  return (
    <Box {...subcategoryBoxStyle}>
      <PageHeader />
      <SubcategoryTabs subCategories={currentCategory.subCategories} />
      <Box {...cardsBoxStyle}>
        {recipes?.data.map(recipe => {
          const categoryTitles = recipe.categoriesIds
            .map((id) => categoryMap[id])
            .filter(Boolean);

          return (
            <VerticalDesktopCard
              key={recipe._id}
              title={recipe.title}
              description={recipe.description}
              image={BASE_URL + recipe.image}
              likeCount={recipe.likes}
              saveCount={recipe.bookmarks}
              category={categoryTitles}
              categoryId={categoryId || ''}
              subcategoryId={subcategoryId || ''}
              recipeId={recipe._id || ''}
            />
          );
        })}
      </Box>

    </Box>
  );
}

export const Component = SubcategoryPage;
