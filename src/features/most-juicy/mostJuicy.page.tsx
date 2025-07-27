import { Box, Button, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { PageHeader } from "./../../widgets/PageHeader/PageHeader"
import { cardsBoxStyle, subcategoryBoxStyle, subgategoryButtonStyle } from "@features/subcategory/subcategory.styles";
import { useEffect, useState } from "react";
import { Recipe } from "src/entities/recipes/model/recipesTypes";
import { useLazyGetAllRecipesQuery } from "./../../entities/recipes/api/recipesApi";
import { getCategoryPairFromRecipe } from "@shared/lib/getCategoryPairFromRecipe";
import { BASE_URL } from "@shared/constants/api";
import { VerticalDesktopCard } from "@shared/ui/Cards/VerticalCards/VerticalDesktopCard/VerticalDesktopCard";
import { VerticalTabletCard } from "@shared/ui/Cards/VerticalCards/VerticalTabletCard/VerticalTabletCard";
import { useGetAllCategoriesQuery } from "./../../entities/categories/api/categoriesApi";
import { Error } from "@shared/ui/Error/Error";
import { useSearchParams } from "react-router-dom";


function MostJuicyPage() {

  const [page, setPage] = useState(1)
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([])
  const [fetchRecipes, {isLoading}] = useLazyGetAllRecipesQuery()
  const [hasMore, setHasMore] = useState(true)
  const [error, setShowError] = useState(false)
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { data: categories, isError } = useGetAllCategoriesQuery();
  const [searchParams] = useSearchParams()

  const searchString = searchParams.get("search") || undefined

  const handleFirstLoad = async () => {
    try {
      const {data = []} = await fetchRecipes({
        page:1, 
        limit:8,
        searchString,
      }).unwrap()

      setAllRecipes(data)
      setPage(1)
      setHasMore(data.length ===8)
      setShowError(false)
    } catch(error) {
      setShowError(true)
    }
  }

  useEffect(()=> {
    handleFirstLoad()
  }, [searchString])


  const handleHasMore = async () => {
    try {
      const nextPage = page + 1

      const {data=[]} = await fetchRecipes({
        page:nextPage, 
        limit:8,
        searchString
      }).unwrap()

      setAllRecipes((prev) => [...prev, ...data])
      setPage(nextPage)
      setHasMore(data.length ===8)
      setShowError(false)
    } catch(error) {
      setShowError(true)
    }
  }


  if (isLoading) return <Spinner />;
  if (isError || !categories) return <Error />;

  return (
    <>
    {error && <Error/>}

    <Box {...subcategoryBoxStyle}>
      <PageHeader />
      <Box {...cardsBoxStyle}>
          {allRecipes?.map(recipe => {
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
                recipeId={recipe._id || ''}
                categoryId={categoryId}
                subcategoryId={subcategoryId}
              />
            ) : (
              <VerticalTabletCard
                key={recipe._id}
                title={recipe.title}
                image={BASE_URL + recipe.image}
                likeCount={recipe.likes}
                saveCount={recipe.bookmarks}
                recipeId={recipe._id || ''}
                categoryId={categoryId}
                subcategoryId={subcategoryId}
              />
            );
          })}
        </Box>
        <Box textAlign="center">
          <Button
            {...subgategoryButtonStyle}
            onClick = {handleHasMore}
            isDisabled={!hasMore}
          >
            Загрузить еще
          </Button>
        </Box>
    </Box>
    </>
  );
}

export const Component = MostJuicyPage;
