import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { VerticalCard } from '~/components/Cards/VerticalCard/VerticalCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';
import { useViewport } from '~/utils/ViewportProvider';

import s from './JuicyDishes.module.css';
import { TabletJuicyDishes } from './TabletJuicyDishes/TabletJuicyDishes';
import { useBreadcrumb } from '~/utils/BreadcrumbsContext';

const cards = [
    {
        image: '/images/juicyDishes/image1.jpg',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить с...',
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
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить с...',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 159,
        isLiked: true,
        likesCount: 257,
        recommended: true,
        name: 'Елена Высоцкая',
        avatar: 'src/assets/images/juicyDishes/smallAvatar1.jpg',
    },

    {
        image: '/images/juicyDishes/image3.jpg',
        title: 'Лапша с курицей и шафраном.',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 258,
        isLiked: true,
        likesCount: 342,
        recommended: true,
        name: 'Alex Cook',
        avatar: 'src/assets/images/juicyDishes/smallAvatar2.jpg',
    },

    {
        image: '/images/juicyDishes/image4.jpg',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить с...',
        category: 'Национальные',
        icon: '/sidebar/national.png',
        isSaved: true,
        savesCount: 124,
        isLiked: true,
        likesCount: 324,
    },
];

export const JuicyDishes = () => {
    const navigate = useNavigate();
    const { isMobile, isTablet } = useViewport();
    const { setBreadcrumbs } = useBreadcrumb();

    const handleClick = () => {
        setBreadcrumbs('Самое сочное', null);
        navigate('./most-juicy');
    };

    if (isTablet || isMobile) {
        return <TabletJuicyDishes onClick={handleClick} />;
    }

    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <SectionTitle title='Самое сочное' />
                <Button
                    data-test-id='juiciest-link'
                    variant=''
                    className={s.titleButton}
                    onClick={handleClick}
                >
                    Вся подборка →
                </Button>
            </div>
            {cards.map((card, index) => (
                <VerticalCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    category={card.category}
                    isSaved={card.isSaved}
                    savesCount={card.savesCount}
                    isLiked={card.isLiked}
                    likesCount={card.likesCount}
                    recommended={card.recommended}
                    name={card.name}
                    avatar={card.avatar}
                    icon={card.icon}
                />
            ))}
            <div className={s.mobileOnly}>
                <Button
                    data-test-id='juiciest-link-mobile'
                    variant=''
                    className={s.titleButton}
                    onClick={handleClick}
                >
                    Вся подборка →
                </Button>
            </div>
        </div>
    );
};
