import { Button } from '@chakra-ui/react';

import { TabletVerticalCard } from '~/components/Cards/VerticalCard/TabletVerticalCard/TabletVerticalCard';
import { VerticalCard } from '~/components/Cards/VerticalCard/VerticalCard';
import { Footer } from '~/components/Footer/Footer';
import { SectionHeader } from '~/components/SectionHeader/SectionHeader';
import { useViewport } from '~/utils/ViewportProvider';

import s from './MostJuicy.module.css';

const cards = [
    {
        image: '/images/mostJuicy/image1.png',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
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
        image: '/images/mostJuicy/image2.png',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 124,
        isLiked: true,
        likesCount: 324,
    },

    {
        image: '/images/mostJuicy/image3.png',
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
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
        image: '/images/mostJuicy/image4.png',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Национальные',
        icon: '/sidebar/national.png',
        isSaved: true,
        savesCount: 124,
        isLiked: true,
        likesCount: 231,
    },

    {
        image: '/images/mostJuicy/image5.png',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isSaved: true,
        savesCount: 120,
        isLiked: true,
        likesCount: 180,
    },

    {
        image: '/images/mostJuicy/image6.png',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        category: 'Детские блюда',
        icon: '/sidebar/kids.png',
        isSaved: true,
        savesCount: 85,
        isLiked: true,
        likesCount: 180,
    },

    {
        image: '/images/mostJuicy/image7.png',
        title: 'Овощная лазанья из лаваша.',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        category: 'Блюда на гриле',
        icon: '/sidebar/grill.png',
        isSaved: true,
        savesCount: 85,
        isLiked: true,
        likesCount: 152,
    },

    {
        image: '/images/mostJuicy/image8.png',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей. ',
        category: 'Национальные',
        icon: '/sidebar/national.png',
        isSaved: true,
        savesCount: 85,
        isLiked: true,
        likesCount: 150,
    },
];

const footerCards = [
    {
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый де...',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isLiked: true,
        likesCount: 1,
        isSaved: true,
        savesCount: 1,
    },

    {
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и ...',
        category: 'Вторые блюда',
        icon: '/sidebar/secondDish.png',
        isLiked: true,
        likesCount: 1,
        isSaved: true,
        savesCount: 2,
    },
];

const lineCards = [
    { title: 'Стейк для вегетарианцев', icon: '/sidebar/secondDish.png' },
    { title: 'Котлеты из гречки и фасоли', icon: '/sidebar/secondDish.png' },
    { title: 'Сырный суп с лапшой и брокколи', icon: '/sidebar/secondDish.png' },
];

export const MostJuicy = () => {
    const { isMobile, isTablet } = useViewport();

    return (
        <div className={s.container}>
            <SectionHeader title='Самое сочное' />
            <div className={s.cardsContainer}>
                {cards.map((card, index) => {
                    const props = {
                        key: index,
                        image: card.image,
                        title: card.title,
                        description: card.description,
                        category: card.category,
                        isSaved: card.isSaved,
                        savesCount: card.savesCount,
                        isLiked: card.isLiked,
                        likesCount: card.likesCount,
                        recommended: card.recommended,
                        name: card.name,
                        avatar: card.avatar,
                        icon: card.icon,
                    };

                    return isTablet || isMobile ? (
                        <TabletVerticalCard {...props} />
                    ) : (
                        <VerticalCard {...props} />
                    );
                })}
            </div>

            <Button variant='' className={s.button}>
                Загрузить еще
            </Button>

            <Footer
                title='Веганская кухня'
                text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
                cards={footerCards}
                lineCards={lineCards}
            />
        </div>
    );
};
