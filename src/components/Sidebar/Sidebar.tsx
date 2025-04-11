import { Button, Flex } from '@chakra-ui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import downIcon from '/downIcon.svg';
import logout from '/logout.svg';
import upIcon from '/upIcon.svg';

import s from './Sidebar.module.css';

export const menuItems = [
    {
        title: 'Салаты',
        slug: 'salads',
        icon: '/sidebar/salads.png',
        subItems: [
            { title: 'Мясные салаты', slug: 'myasnye-salaty' },
            { title: 'Рыбные салаты', slug: 'rybnye-salaty' },
            { title: 'Овощные салаты', slug: 'ovoshchnye-salaty' },
            { title: 'Фруктовые салаты', slug: 'fruktovye-salaty' },
        ],
    },
    {
        title: 'Закуски',
        slug: 'snacks',
        icon: '/sidebar/snacks.png',
        subItems: [
            { title: 'Мясные закуски', slug: 'myasnye-zakuski' },
            { title: 'Рыбные закуски', slug: 'rybnye-zakuski' },
            { title: 'Овощные закуски', slug: 'ovoshchnye-zakuski' },
            { title: 'Теплые закуски', slug: 'teplye-zakuski' },
            { title: 'Бутерброды', slug: 'buterbrody' },
            { title: 'Фастфуд', slug: 'fastfud' },
        ],
    },
    {
        title: 'Первые блюда',
        slug: 'first-dishes',
        icon: '/sidebar/firstDish.png',
        subItems: [
            { title: 'Мясные супы', slug: 'myasnye-supy' },
            { title: 'Овощные супы', slug: 'ovoshchnye-supy' },
            { title: 'Бульоны', slug: 'bulony' },
            { title: 'Холодные супы', slug: 'kholodnye-supy' },
            { title: 'Диетические супы', slug: 'dieticheskie-supy' },
        ],
    },
    {
        title: 'Вторые блюда',
        slug: 'second-dishes',
        icon: '/sidebar/secondDish.png',
        subItems: [
            { title: 'Мясные', slug: 'myasnye' },
            { title: 'Рыбные', slug: 'rybnye' },
            { title: 'Овощные', slug: 'ovoshchnye' },
            { title: 'Из птицы', slug: 'iz-ptitsy' },
            { title: 'Из грибов', slug: 'iz-gribov' },
            { title: 'Из субпродуктов', slug: 'iz-subproduktov' },
            { title: 'На пару', slug: 'na-paru' },
            { title: 'Пельмени, вареники', slug: 'pelmeni-vareniki' },
            { title: 'Мучные гарниры', slug: 'mukhnye-garniry' },
            { title: 'Овощные гарниры', slug: 'ovoshchnye-garniry' },
            { title: 'Пицца', slug: 'pitstsa' },
            { title: 'Суши', slug: 'sushi' },
        ],
    },
    {
        title: 'Десерты и выпечка',
        slug: 'desserts',
        icon: '/sidebar/desserts.png',
        subItems: [
            { title: 'Блины и оладьи', slug: 'bliny-i-oladi' },
            { title: 'Пироги и пончики', slug: 'pirogi-i-ponchiki' },
            { title: 'Торты', slug: 'torty' },
            { title: 'Рулеты', slug: 'rulety' },
            { title: 'Кексы и маффины', slug: 'keksy-i-maffiny' },
            { title: 'Сырники и ватрушки', slug: 'syrniki-i-vatrushki' },
            { title: 'Из слоеного теста', slug: 'iz-sloenogo-testa' },
            { title: 'Из заварного теста', slug: 'iz-zavarnogo-testa' },
            { title: 'Из дрожжевого теста', slug: 'iz-drozhzhevogo-testa' },
            { title: 'Булочки и сдоба', slug: 'bulochki-i-sdoba' },
            { title: 'Хлеб', slug: 'khleb' },
            { title: 'Тесто на пиццу', slug: 'testo-na-pitstsu' },
            { title: 'Кремы', slug: 'kremy' },
        ],
    },
    {
        title: 'Блюда на гриле',
        slug: 'grill',
        icon: '/sidebar/grill.png',
        subItems: [
            { title: 'Говядина', slug: 'govyadina' },
            { title: 'Свинина', slug: 'svinina' },
            { title: 'Птица', slug: 'ptitsa' },
            { title: 'Рыба', slug: 'ryba' },
            { title: 'Грибы', slug: 'griby' },
            { title: 'Овощи', slug: 'ovoshchi' },
        ],
    },
    {
        title: 'Веганская кухня',
        slug: 'vegan',
        icon: '/sidebar/vegan.png',
        subItems: [
            { title: 'Закуски', slug: 'zakuski' },
            { title: 'Первые блюда', slug: 'pervye-blyuda' },
            { title: 'Вторые блюда', slug: 'vtorye-blyuda' },
            { title: 'Гарниры', slug: 'garniry' },
            { title: 'Десерты', slug: 'deserty' },
            { title: 'Выпечка', slug: 'vypechka' },
            { title: 'Сыроедческие блюда', slug: 'syroedcheskie-blyuda' },
            { title: 'Напитки', slug: 'napitki' },
        ],
    },
    {
        title: 'Детские блюда',
        slug: 'kids',
        icon: '/sidebar/kids.png',
        subItems: [
            { title: 'Первые блюда', slug: 'pervye-blyuda' },
            { title: 'Вторые блюда', slug: 'vtorye-blyuda' },
            { title: 'Гарниры', slug: 'garniry' },
            { title: 'Выпечка', slug: 'vypechka' },
            { title: 'Без глютена', slug: 'bez-glyutena' },
            { title: 'Без сахара', slug: 'bez-sakhara' },
            { title: 'Без аллергенов', slug: 'bez-allergenov' },
            { title: 'Блюда для прикорма', slug: 'blyuda-dlya-prikorma' },
        ],
    },
    {
        title: 'Лечебное питание',
        slug: 'medical',
        icon: '/sidebar/medical.png',
        subItems: [
            { title: 'Детская диета', slug: 'detskaya-dieta' },
            { title: 'Диета №1', slug: 'dieta-1' },
            { title: 'Диета №2', slug: 'dieta-2' },
            { title: 'Диета №3', slug: 'dieta-3' },
            { title: 'Диета №4', slug: 'dieta-4' },
            { title: 'Диета №5', slug: 'dieta-5' },
            { title: 'Диета №6', slug: 'dieta-6' },
            { title: 'Диета №7', slug: 'dieta-7' },
            { title: 'Диета №8', slug: 'dieta-8' },
            { title: 'Диета №9', slug: 'dieta-9' },
            { title: 'Диета №10', slug: 'dieta-10' },
            { title: 'Диета №11', slug: 'dieta-11' },
            { title: 'Диета №12', slug: 'dieta-12' },
            { title: 'Диета №13', slug: 'dieta-13' },
            { title: 'Диета №14', slug: 'dieta-14' },
            { title: 'Без глютена', slug: 'bez-glyutena' },
            { title: 'Без аллергенов', slug: 'bez-allergenov' },
        ],
    },
    {
        title: 'Национальныe',
        slug: 'national',
        icon: '/sidebar/national.png',
        subItems: [
            { title: 'Американская кухня', slug: 'amerikanskaya-kukhnya' },
            { title: 'Армянская кухня', slug: 'armyanskaya-kukhnya' },
            { title: 'Греческая кухня', slug: 'grecheskaya-kukhnya' },
            { title: 'Грузинская кухня', slug: 'gruzinskaya-kukhnya' },
            { title: 'Итальянская кухня', slug: 'italyanskaya-kukhnya' },
            { title: 'Испанская кухня', slug: 'ispanskaya-kukhnya' },
            { title: 'Китайская кухня', slug: 'kitayskaya-kukhnya' },
            { title: 'Мексиканская кухня', slug: 'meksikanskaya-kukhnya' },
            { title: 'Паназиатская кухня', slug: 'panaziatskaya-kukhnya' },
            { title: 'Русская кухня', slug: 'russkaya-kukhnya' },
            { title: 'Турецкая кухня', slug: 'turetskaya-kukhnya' },
            { title: 'Французская кухня', slug: 'frantsuzskaya-kukhnya' },
            { title: 'Шведская кухня', slug: 'shvedskaya-kukhnya' },
            { title: 'Японская кухня', slug: 'yaponskaya-kukhnya' },
            { title: 'Другая кухня', slug: 'drugaya-kukhnya' },
        ],
    },
    {
        title: 'Соусы',
        slug: 'sauces',
        icon: '/sidebar/sauce.png',
        subItems: [
            { title: 'Соусы мясные', slug: 'sousy-myasnye' },
            { title: 'Соусы сырные', slug: 'sousy-syrnye' },
            { title: 'Маринады', slug: 'marinady' },
        ],
    },
    {
        title: 'Домашние загатовки',
        slug: 'fabricates',
        icon: '/sidebar/fabricates.png',
        subItems: [
            { title: 'Мясные заготовки', slug: 'myasnye-zagotovki' },
            { title: 'Рыбные заготовки', slug: 'rybnye-zagotovki' },
            { title: 'Из огурцов', slug: 'iz-ogurtsov' },
            { title: 'Из томатов', slug: 'iz-tomatov' },
            { title: 'Из грибов', slug: 'iz-gribov' },
            { title: 'Овощные заготовки', slug: 'ovoshchnye-zagotovki' },
            { title: 'Салаты, икра', slug: 'salaty-ikra' },
            { title: 'Из фруктов и ягод', slug: 'iz-fruktov-i-yagod' },
        ],
    },
    {
        title: 'Напитки',
        slug: 'drinks',
        icon: '/sidebar/drinks.png',
        subItems: [
            { title: 'Соки и фреши', slug: 'soki-i-freshi' },
            { title: 'Смузи', slug: 'smuzi' },
            { title: 'Компоты', slug: 'kompoty' },
            { title: 'Кисели', slug: 'kiseli' },
            { title: 'Кофе', slug: 'kofe' },
            { title: 'Лечебный чай', slug: 'lechebnyy-chay' },
            { title: 'Квас', slug: 'kvas' },
            { title: 'Коктейли', slug: 'kokteyli' },
            { title: 'Алкогольные', slug: 'alkogolnye' },
        ],
    },
];

export const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubItem, setSelectedSubItem] = useState<{ title: string; slug: string } | null>(
        null,
    );
    const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCategoryClick = (category: string, slug: string, index: number) => {
        const isSameCategory = selectedCategory === category;

        setOpenMenus(() => ({
            [index]: !openMenus[index],
        }));

        setSelectedCategory(isSameCategory ? null : category);
        setSelectedCategorySlug(isSameCategory ? null : slug);
        setSelectedSubItem(null);
        const path = `/${encodeURIComponent(slug)}`;
        navigate(path);
    };

    const handleSubItemClick = (subItem: { title: string; slug: string }) => {
        if (!selectedCategory || !selectedCategorySlug) return;

        setSelectedSubItem(subItem);
        const path = `/${encodeURIComponent(selectedCategorySlug)}/${encodeURIComponent(subItem.slug)}`;
        navigate(path);
    };

    return (
        <aside className={clsx(s.sidebar, 'hideOnMobile')}>
            <div className={s.wrapper}>
                <ul className={s.foodItem}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={s.item}>
                            <div className={s.sidebarItem}>
                                <Button
                                    variant=''
                                    className={clsx(s.button, {
                                        [s.active]:
                                            selectedCategory === item.title || openMenus[index],
                                    })}
                                    onClick={() =>
                                        handleCategoryClick(item.title, item.slug, index)
                                    }
                                    data-test-id={
                                        item.slug === 'vegan' ? 'vegan-cuisine' : undefined
                                    }
                                >
                                    <Flex>
                                        {item.icon && (
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                                width='24'
                                                height='24'
                                                className={s.itemIcon}
                                            />
                                        )}
                                        <div className={s.iconTitleWrapper}>
                                            <span>{item.title}</span>
                                            <img
                                                src={openMenus[index] ? upIcon : downIcon}
                                                alt='toggle icon'
                                                className={s.icon}
                                            />
                                        </div>
                                    </Flex>
                                </Button>
                            </div>

                            {openMenus[index] && (
                                <ul className={s.subMenu}>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className={clsx(s.submenuItem, {
                                                [s.active]: selectedSubItem?.slug === subItem.slug,
                                            })}
                                            onClick={() => handleSubItemClick(subItem)}
                                        >
                                            {subItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className={s.sidebarFooter}>
                    <span className={s.version}>Версия программы 03.25</span>
                    <span className={s.text}>
                        Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                    </span>
                    <div className={s.exit}>
                        <img src={logout} alt='logout' />
                        <span className={s.exitText}>Выйти</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};
