import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import blackArrowLeft from '/blackArrowLeft.svg';
import blackArrowRight from '/blackArrowRight.svg';

import { NewRecipeCard } from '~/components/Cards/NewRecipeCard/NewRecipeCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';

import s from './NewRecipes.module.css';

const newRecipesCards = [
    {
        id: '0',
        withImage: true,
        image: '/images/newRecipes/image2.webp',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными.',
        category: 'Веганские блюда',
        isLiked: true,
        likesCount: 2,
        isSaved: true,
        savesCount: 1,
        icon: '/sidebar/vegan.png',
    },
    {
        withImage: true,
        image: '/images/newRecipes/image1.webp',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить',
        category: 'Первые блюда',
        isSaved: true,
        savesCount: 1,
        icon: '/sidebar/firstDish.png',
    },

    {
        withImage: true,
        image: '/images/newRecipes/image3.webp',
        title: "Оладьи на кефире 'Пышны..' ",
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: 'Десерты, выпечка',
        isLiked: true,
        likesCount: 1,
        icon: '/sidebar/desserts.png',
    },

    {
        withImage: true,
        image: '/images/newRecipes/image4.webp',
        title: "Салат 'Здоровье' ",
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ',
        category: 'Салаты',
        icon: '/sidebar/salads.png',
    },

    {
        withImage: true,
        image: '/images/newRecipes/image4.webp',
        title: "Салат 'Здоровье' ",
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ',
        category: 'Салаты',
        icon: '/sidebar/salads.png',
    },

    {
        withImage: true,
        image: '/images/vegan/image1.jpg',
        title: "'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе' ",
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый...',
        category: 'Веганская блюда',
        icon: '/sidebar/salads.png',
    },

    {
        withImage: true,
        image: '/images/vegan/image1.jpg',
        title: "'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе' ",
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый...',
        category: 'Веганская блюда',
        icon: '/sidebar/salads.png',
    },

    {
        withImage: true,
        image: '/images/vegan/image1.jpg',
        title: "'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе' ",
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый...',
        category: 'Веганская блюда',
        icon: '/sidebar/salads.png',
    },

    {
        withImage: true,
        image: '/images/newRecipes/image4.webp',
        title: "Салат 'Здоровье' ",
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ',
        category: 'Салаты',
        icon: '/sidebar/salads.png',
    },

    {
        withImage: true,
        image: '/images/newRecipes/image4.webp',
        title: "Салат 'Здоровье' ",
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ',
        category: 'Салаты',
        icon: '/sidebar/salads.png',
    },
];

type NewRecipesType = {
    searchValue: string;
};

export const NewRecipes = ({ searchValue }: NewRecipesType) => {
    const filteredCards = newRecipesCards.filter((card) =>
        card.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (
        <div className={s.container}>
            <SectionTitle title='Новые рецепты' />

            <div className={s.swiperWrapper}>
                <img
                    src={blackArrowLeft}
                    alt='prev'
                    className={`swiper-button-prev ${s.arrowLeft}`}
                    data-test-id={'carousel-back'}
                />
                <Swiper
                    data-test-id={'carousel'}
                    modules={[Navigation]}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 4.2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {filteredCards.map((card, i) => (
                        <SwiperSlide key={i} data-test-id={`carousel-card-${i}`}>
                            <div data-test-id={`food-card-${i}`}>
                                <NewRecipeCard
                                    id={card.id}
                                    withImage={card.withImage}
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                    category={card.category}
                                    isSaved={card.isSaved}
                                    savesCount={card.savesCount}
                                    isLiked={card.isLiked}
                                    likesCount={card.likesCount}
                                    icon={card.icon}
                                    showDescription={true}
                                    searchValue={searchValue}
                                    data-test-id={`food-card-${i}`}
                                    categorySlug='vegan'
                                    subcategorySlug='snacks'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img
                    src={blackArrowRight}
                    alt='next'
                    className={`swiper-button-next ${s.arrowRight}`}
                    data-test-id={'carousel-forward'}
                />
            </div>
        </div>
    );
};
