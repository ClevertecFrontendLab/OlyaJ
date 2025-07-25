import { PageHeader } from "./../../widgets/PageHeader/PageHeader";
import { SubcategoryTabs } from "@shared/ui/Tabs/Tabs";
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi";
import { useParams } from "react-router-dom";
import { Box, Button, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import { useLazyGetAllRecipesQuery } from "./../../entities/recipes/api/recipesApi";
import { VerticalDesktopCard } from "@shared/ui/Cards/VerticalCards/VerticalDesktopCard/VerticalDesktopCard";
import { BASE_URL } from "@shared/constants/api";
import { cardsBoxStyle, subcategoryBoxStyle, subgategoryButtonStyle } from "./subcategory.styles";
import { useCategoryMap } from "./../../shared/hooks/useCategoryMap"
import { VerticalTabletCard } from "@shared/ui/Cards/VerticalCards/VerticalTabletCard/VerticalTabletCard";
import { useEffect, useState } from "react";
import { Error } from "@shared/ui/Error/Error";

function SubcategoryPage() {
  const { categoryId, subcategoryId } = useParams();
  const { data: categories, isError } = useGetAllCategoriesQuery();
  const [page, setPage] = useState(1);
  const [allRecipes, setAllRecipes] = useState<any[]>([]);
  const [fetchRecipes, { isLoading }] = useLazyGetAllRecipesQuery();
  const [hasMore, setHasMore] = useState(true)
  const [error, setShowError] = useState(false)

  const currentCategory = categories?.find(cat => cat.category === categoryId);
  const currentSubcategory = currentCategory?.subCategories.find(sub => sub.category === subcategoryId);
  const subcategoryIds = currentCategory?.subCategories.map(sub => sub._id) ?? [];

  const searchString = new URLSearchParams(location.search).get("search") ?? undefined
  const subcategoriesParam = searchString
  ? subcategoryIds.join(',')
  : currentSubcategory?._id ?? '';

  const handleFirstLoad = async () => {
    try {
      const { data = [] } = await fetchRecipes({
        page: 1,
        limit: 8,
        subcategoriesIds: subcategoriesParam,
        searchString,
      }).unwrap();
  
      setAllRecipes(data);
      setPage(1);
      setHasMore(data.length === 8);
      setShowError(false);
    } catch (error) {
      setShowError(true);
    }
  };
  

  useEffect(()=>{
    handleFirstLoad()
  },[subcategoryId, searchString])

  
  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
  
      const { data = [] } = await fetchRecipes({
        page: nextPage,
        limit: 8,
        subcategoriesIds: subcategoriesParam,
        searchString,
      }).unwrap();
  
      setAllRecipes((prev) => [...prev, ...data]);
      setPage(nextPage);
      setHasMore(data.length === 8);
      setShowError(false);
    } catch (error) {
      setShowError(true);
    }
  };
  

  const { categoryMap } = useCategoryMap()
  const isDesktop = useBreakpointValue({ base: false, lg: true });


  if (isLoading) return <Spinner />;
  if (isError || !categories) return <Error/>;
  if (!currentCategory) return <Text>Категория не найдена</Text>;
  if (!currentSubcategory) return <Text>Подкатегория не найдена</Text>;


  return (
    <>
    {error && <Error/>}

    <Box {...subcategoryBoxStyle}>
      <PageHeader />
      <SubcategoryTabs subCategories={currentCategory.subCategories} />
      <Box {...cardsBoxStyle}>
        {allRecipes?.map(recipe => {
          const categoryTitles = recipe.categoriesIds
            .map((id) => categoryMap[id])
            .filter(Boolean);

            return isDesktop ? (
              <VerticalDesktopCard
                  key={recipe._id}
                  title={recipe.title}
                  description={recipe.description}
                  image={BASE_URL + recipe.image}
                  likeCount={recipe.likes}
                  saveCount={recipe.bookmarks}
                  category={categoryTitles}
                  recipeId={recipe._id || ''}
              />
          ) : (
              <VerticalTabletCard
                  key={recipe._id}
                  title={recipe.title}
                  image={BASE_URL + recipe.image}
                  likeCount={recipe.likes}
                  saveCount={recipe.bookmarks}
                  recipeId={recipe._id || ''}
              />
          );
        })}
      </Box>

      <Box textAlign="center">
          <Button 
          {...subgategoryButtonStyle} 
          onClick={handleLoadMore}
          isDisabled={!hasMore}
          >
              Загрузить еще
          </Button>
      </Box>
    </Box>

    </>
  );
}

export const Component = SubcategoryPage;
