import { useRef } from 'react';

import blackArrowLeft from '/blackArrowLeft.svg';
import blackArrowRight from '/blackArrowRight.svg';

import { NewRecipeCard } from '~/components/Cards/NewRecipeCard/NewRecipeCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';

import s from './NewRecipes.module.css';

const newRecipesCards = [
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
        image: '/images/newRecipes/image4.webp',
        title: "Салат 'Здоровье' ",
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) ',
        category: 'Салаты',
        icon: '/sidebar/salads.png',
    },
];

export const NewRecipes = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 346;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={s.container}>
            <SectionTitle title='Новые рецепты' />
            <div className={s.cards}>
                <img
                    src={blackArrowLeft}
                    alt='left'
                    className={s.arrowLeft}
                    onClick={() => scroll('left')}
                />
                <div className={s.scroll} ref={scrollRef}>
                    {newRecipesCards.map((card, index) => (
                        <NewRecipeCard
                            key={index}
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
                        />
                    ))}
                </div>
                <img
                    src={blackArrowRight}
                    alt='right'
                    className={s.arrowRight}
                    onClick={() => scroll('right')}
                />
            </div>
        </div>
    );
};
