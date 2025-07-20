import { Box, Heading, Image } from "@chakra-ui/react"
import { boxStyles, headingStyle, leftArrowStyle, rightArrowStyle, swiperBox } from "./newRecipes.styles"
import { useGetAllRecipesQuery } from "../../entities/recipes/api/recipesApi"
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi"
import { NewRecipeDesktopCard } from "../../shared/ui/Cards/NewRecipeDescktopCard/NewRecipeDesktopCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import arrowLeft from "./../../../public/blackArrowLeft.svg"
import arrowRight from "./../../../public/blackArrowRight.svg"
import "./newRecipes.css"


export const NewRecipes = () => {
  const { data: recipes } = useGetAllRecipesQuery({ sortBy: 'desc' })
  const { data: categories } = useGetAllCategoriesQuery()

  const BASE_URL = "https://training-api.clevertec.ru"

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

            return (
              <SwiperSlide key={recipe._id}>
                <NewRecipeDesktopCard
                  title={recipe.title}
                  description={recipe.description}
                  image={BASE_URL + recipe.image}
                  likeCount={recipe.likes}
                  saveCount={recipe.bookmarks}
                  category={recipe.categoriesIds}
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
