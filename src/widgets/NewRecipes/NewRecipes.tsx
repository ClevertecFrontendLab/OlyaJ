import { Box, Heading, Image } from "@chakra-ui/react"
import { boxStyles, headingStyle, leftArrowStyle, rightArrowStyle, swiperBox } from "./newRecipes.styles"
import { useGetAllRecipesQuery } from "../../entities/recipes/api/recipesApi"
import { NewRecipeDesktopCard } from "../../shared/ui/Cards/NewRecipeDescktopCard/NewRecipeDesktopCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import arrowLeft from "./../../../public/blackArrowLeft.svg"
import arrowRight from "./../../../public/blackArrowRight.svg"
import "./newRecipes.css"
import { BASE_URL } from "./../../shared/constants/api"
import { useGetAllCategoriesQuery } from "./../../entities/categories/api/categoriesApi"
import { useMemo } from "react"


export const NewRecipes = () => {
  const { data: recipes } = useGetAllRecipesQuery({ sortBy: 'createdAt', sortOrder: 'desc' })
  const { data: categories } = useGetAllCategoriesQuery()

  const categoriesMap = useMemo(() => {
    const map: Record<string, string> = {};
    categories?.forEach((cat) => {
      map[cat._id] = cat.title;
    });
    return map;
  }, [categories]);

  return (
    <Box as="section" {...boxStyles}>
      <Heading {...headingStyle}>Новые рецепты</Heading>

      <Box {...swiperBox}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {recipes?.data?.map((recipe) => {
            const categoryTitles = recipe.categoriesIds
              .map((id) => categoriesMap[id])
              .filter(Boolean);

            return (
              <SwiperSlide key={recipe._id}>
                <NewRecipeDesktopCard
                  title={recipe.title}
                  description={recipe.description}
                  image={BASE_URL + recipe.image}
                  likeCount={recipe.likes}
                  saveCount={recipe.bookmarks}
                  category={categoryTitles}
                  recipeId={recipe._id}
                />
              </SwiperSlide>
            );
          })}


        </Swiper>
      </Box>

      {/* Стрелки */}
      <Box className="swiper-button-prev" {...leftArrowStyle}>
        <Image src={arrowLeft} alt="назад" />
      </Box>
      <Box className="swiper-button-next" {...rightArrowStyle}>
        <Image src={arrowRight} alt="вперёд" />
      </Box>
    </Box>
  )
}
