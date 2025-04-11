import { Button } from '@chakra-ui/react';

import { TabletVerticalCard } from '~/components/Cards/VerticalCard/TabletVerticalCard/TabletVerticalCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';

import s from './TabletJuicyDishes.module.css';

const tabletCards = [
    {
        image: '/images/juicyDishes/image1.jpg',
        title: 'Кнели со спагетти',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 85,
        isLiked: true,
        likesCount: 152,
    },

    {
        image: '/images/juicyDishes/image2.jpg',
        title: 'Пряная ветчина по итальянски',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 159,
        isLiked: true,
        likesCount: 257,
    },

    {
        image: '/images/juicyDishes/image3.jpg',
        title: 'Лапша с курицей и шафраном.',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 258,
        isLiked: true,
        likesCount: 342,
    },

    {
        image: '/images/juicyDishes/image4.jpg',
        title: 'Том-ям с капустой кимчи',
        category: 'Национальные',
        icon: '/sidebar/national.png',
        isSaved: true,
        savesCount: 124,
        isLiked: true,
        likesCount: 324,
    },
];

type TabletJuicyDishesType = {
    onClick: () => void;
};

export const TabletJuicyDishes = ({ onClick }: TabletJuicyDishesType) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionTitle title='Самое сочное' />
                <div className={s.cardsContainer}>
                    {tabletCards.map((card, index) => (
                        <TabletVerticalCard
                            key={index}
                            image={card.image}
                            title={card.title}
                            category={card.category}
                            icon={card.icon}
                            isSaved={card.isSaved}
                            savesCount={card.savesCount}
                            isLiked={card.isLiked}
                            likesCount={card.likesCount}
                        />
                    ))}
                </div>
            </div>
            <Button variant='' className={s.mobileButton} onClick={handleClick}>
                Вся подборка →{' '}
            </Button>
        </div>
    );
};
