import { Box, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import {
    boxStyles,
    headingStyle,
    leftArrowStyle,
    rightArrowStyle,
    swiperBox,
} from './newRecipes.styles';
import { useGetAllRecipesQuery } from '../../entities/recipes/api/recipesApi';
import { NewRecipeDesktopCard } from '../../shared/ui/Cards/NewRecipeDescktopCard/NewRecipeDesktopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import arrowLeft from './../../../public/blackArrowLeft.svg';
import arrowRight from './../../../public/blackArrowRight.svg';
import './newRecipes.css';
import { BASE_URL } from './../../shared/constants/api';
import { useCategoryMap } from './../../shared/hooks/useCategoryMap';
import { NewRecipeTabletCard } from '@shared/ui/Cards/NewRecipeTabletCard/NewRecipeTabletCard';
import { getCategoryPairFromRecipe } from '@shared/lib/getCategoryPairFromRecipe';

export const NewRecipes = () => {
    const { data: recipes } = useGetAllRecipesQuery({ sortBy: 'createdAt', sortOrder: 'desc' });
    const { categories } = useCategoryMap();
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    const slidesPerView = useBreakpointValue({
        base: 2,
        md: 4,
        lg: 4,
    });

    return (
        <Box as='section' {...boxStyles}>
            <Heading {...headingStyle}>Новые рецепты</Heading>

            <Box {...swiperBox}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={slidesPerView}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {recipes?.data?.map((recipe) => {
                        const { categoryId, subcategoryId, categoryTitles } =
                            getCategoryPairFromRecipe(recipe, categories ?? []);

                        return (
                            <SwiperSlide key={recipe._id}>
                                {isDesktop ? (
                                    <NewRecipeDesktopCard
                                        key={recipe._id}
                                        title={recipe.title}
                                        description={recipe.description}
                                        image={BASE_URL + recipe.image}
                                        likeCount={recipe.likes}
                                        saveCount={recipe.bookmarks}
                                        category={categoryTitles}
                                        recipeId={recipe._id}
                                        categoryId={categoryId}
                                        subcategoryId={subcategoryId}
                                    />
                                ) : (
                                    <NewRecipeTabletCard
                                        key={recipe._id}
                                        title={recipe.title}
                                        image={BASE_URL + recipe.image}
                                        likeCount={recipe.likes}
                                        saveCount={recipe.bookmarks}
                                        recipeId={recipe._id}
                                        categoryId={categoryId}
                                        subcategoryId={subcategoryId}
                                    />
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

            {/* Стрелки */}
            <Box className='swiper-button-prev' {...leftArrowStyle}>
                <Image src={arrowLeft} alt='назад' />
            </Box>
            <Box className='swiper-button-next' {...rightArrowStyle}>
                <Image src={arrowRight} alt='вперёд' />
            </Box>
        </Box>
    );
};
