import { Button } from '@chakra-ui/react';

import { TabletVerticalCard } from '~/components/Cards/VerticalCard/TabletVerticalCard/TabletVerticalCard';
import { VerticalCard } from '~/components/Cards/VerticalCard/VerticalCard';
import { Footer } from '~/components/Footer/Footer';
import { SectionHeader } from '~/components/SectionHeader/SectionHeader';
import { useViewport } from '~/utils/ViewportProvider';

import s from './VeganSecondDishes.module.css';
import { VeganCategoryTabs } from './VeganSubcategoryTabs/VeganSubcategoryTabs';

export const VeganSecondDishes = () => {
    const { isMobile, isTablet } = useViewport();

    const cards = [
        {
            image: '/images/vegan/image1.jpg',
            title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
            description:
                'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день',
            category: 'Национальные',
            icon: '/sidebar/secondDish.png',
            isSaved: true,
            savesCount: 85,
            isLiked: true,
            likesCount: 152,
        },

        {
            image: '/images/vegan/image2.jpg',
            title: 'Картофельные рулетики с грибами',
            description:
                'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
            category: 'Детские блюда',
            icon: '/sidebar/kids.png',
            isSaved: true,
            savesCount: 85,
            isLiked: true,
            likesCount: 152,
        },

        {
            image: '/images/vegan/image3.jpg',
            title: 'Том-ям с капустой кимчи',
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
            category: 'Национальная',
            icon: '/sidebar/national.png',
            isSaved: true,
            savesCount: 124,
            isLiked: true,
            likesCount: 324,
        },

        {
            image: '/images/vegan/image4.jpg',
            title: 'Овощная лазанья из лаваша',
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
            image: '/images/vegan/image5.jpg',
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            description:
                'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            category: 'Вторые блюда',
            icon: '/sidebar/secondDish.png',
            isSaved: true,
            savesCount: 85,
            isLiked: true,
            likesCount: 152,
        },

        {
            image: '/images/vegan/image5.jpg',
            title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
            description:
                'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
            category: 'Вторые блюда',
            icon: '/sidebar/secondDish.png',
            isSaved: true,
            savesCount: 85,
            isLiked: true,
            likesCount: 152,
        },

        {
            image: '/images/vegan/image6.jpg',
            title: 'Чесночная картошка',
            description:
                'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
            category: 'Национальные',
            icon: '/sidebar/grill.png',
            isSaved: true,
            savesCount: 124,
            isLiked: true,
            likesCount: 324,
        },

        {
            image: '/images/vegan/image7.jpg',
            title: 'Пури',
            description:
                'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало. ',
            category: 'Национальные',
            icon: '/sidebar/national.png',
            isSaved: true,
            savesCount: 124,
            isLiked: true,
            likesCount: 324,
        },
    ];

    const footerCards = [
        {
            title: 'Бананово-молочное желе',
            description:
                'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко',
            category: 'Детские блюда',
            icon: '/sidebar/kids.png',
            isLiked: true,
            likesCount: 1,
            isSaved: true,
            savesCount: 1,
        },

        {
            title: 'Нежный сливочно-сырный крем для кексов',
            description:
                'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
            category: 'Детские блюда',
            icon: '/sidebar/kids.png',
            isLiked: true,
            likesCount: 1,
            isSaved: true,
            savesCount: 2,
        },
    ];

    const lineCards = [
        { title: 'Домашние сырные палочки', icon: '/sidebar/kids.png' },
        { title: 'Панкейки', icon: '/sidebar/national.png' },
        { title: 'Воздушное банановое печенье на сковороде', icon: '/sidebar/vegan.png' },
    ];

    return (
        <div className={s.container}>
            <SectionHeader
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />

            <VeganCategoryTabs />
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
                title='Десерты, выпечка'
                text='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
                cards={footerCards}
                lineCards={lineCards}
            />
        </div>
    );
};
