import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import s from './VeganSubcategoryTabs.module.css';

const subItems = [
    { title: 'Закуски', slug: 'zakuski' },
    { title: 'Первые блюда', slug: 'pervye-blyuda' },
    { title: 'Вторые блюда', slug: 'vtorye-blyuda' },
    { title: 'Гарниры', slug: 'garniry' },
    { title: 'Десерты', slug: 'deserty' },
    { title: 'Выпечка', slug: 'vypechka' },
    { title: 'Сыроедческие блюда', slug: 'syroedcheskie-blyuda' },
    { title: 'Напитки', slug: 'napitki' },
];

export const VeganCategoryTabs = () => (
    <div className={s.tabWrapper}>
        <div className={s.tabs}>
            {subItems.map((item) => (
                <NavLink
                    key={item.slug}
                    to={`/vegan/${item.slug}`}
                    className={({ isActive }) => clsx(s.tab, { [s.active]: isActive })}
                >
                    {item.title}
                </NavLink>
            ))}
        </div>
    </div>
);
