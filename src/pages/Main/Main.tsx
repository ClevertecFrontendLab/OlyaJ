import { Footer } from '~/components/Footer/Footer';
import { SectionHeader } from '~/components/SectionHeader/SectionHeader';

import { Blog } from './Blogs/Blog';
import { JuicyDishes } from './JuicyDishes/JuicyDishes';
import s from './Main.module.css';
import { NewRecipes } from './NewRecipes/NewRecipes';
import { useBreadcrumb } from '~/utils/BreadcrumbsContext';
import { useEffect, useState } from 'react';

const footerCards = [
    {
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день.',
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
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными.',
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

export const Main = () => {
    const { resetBreadcrumbs } = useBreadcrumb();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        resetBreadcrumbs();
    }, []);

    return (
        <div className={s.main}>
            <SectionHeader
                title='Приятного аппетита!'
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <NewRecipes searchValue={searchValue} />
            <JuicyDishes searchValue={searchValue} />
            <Blog />
            <Footer
                title='Веганская кухня'
                text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                cards={footerCards}
                lineCards={lineCards}
            />
        </div>
    );
};
