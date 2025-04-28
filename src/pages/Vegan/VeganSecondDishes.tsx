import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TabletVerticalCard } from '~/components/Cards/VerticalCard/TabletVerticalCard/TabletVerticalCard';
import { VerticalCard } from '~/components/Cards/VerticalCard/VerticalCard';
import { Footer } from '~/components/Footer/Footer';
import { SectionHeader } from '~/components/SectionHeader/SectionHeader';
import { useViewport } from '~/utils/ViewportProvider';
import { RecipeTabs } from '~/components/Tabs';
import { veganRecipes, veganSnacks } from '~/data/recipes';
import s from './VeganSecondDishes.module.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const iconMap = {
    'second-dish': '/sidebar/secondDish.png',
    snacks: '/sidebar/snacks.png',
    'side-dishes': '/sidebar/garnish.png',
    national: '/sidebar/national.png',
    'warm-snacks': '/sidebar/grill.png',
};

export const VeganSecondDishes = () => {
    const { isMobile, isTablet } = useViewport();
    const [searchValue, setSearchValue] = useState('');
    const { subcategory } = useParams<{ category: string; subcategory: string }>();
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const location = useLocation();
    const selectedGarnish =
        (location.state as { selectedGarnish: string[] })?.selectedGarnish || [];
    const allergensFromLocation =
        (location.state as { selectedAllergens: string[] })?.selectedAllergens || [];

    const isSnacks = subcategory === 'snacks';

    const selectedRecipes = isSnacks ? veganSnacks : veganRecipes;

    useEffect(() => {
        if (allergensFromLocation.length > 0) {
            setSelectedAllergens(allergensFromLocation);
        }
    }, [allergensFromLocation]);

    const cards = selectedRecipes.map((recipe) => {
        const categorySlug = recipe.category?.[0] || 'vegan';
        const subcategorySlug = recipe.subcategory?.[0] || 'snacks';
        const icon = iconMap[subcategorySlug] || iconMap[categorySlug] || '/sidebar/secondDish.png';

        return {
            id: recipe.id,
            image: recipe.image,
            title: recipe.title,
            description: recipe.description,
            category: 'Вторые блюда',
            categorySlug,
            subcategorySlug,
            icon,
            isSaved: true,
            savesCount: recipe.bookmarks,
            isLiked: true,
            likesCount: recipe.likes,
            ingredients: recipe.ingredients || [],
        };
    });

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

    const tabs = [
        { title: 'Закуски', slug: 'snacks' },
        { title: 'Первые блюда', slug: 'pervye-blyuda' },
        { title: 'Вторые блюда', slug: 'second-dish' },
        { title: 'Гарниры', slug: 'garniry' },
        { title: 'Десерты', slug: 'deserty' },
        { title: 'Выпечка', slug: 'vypechka' },
        { title: 'Сыроедческие блюда', slug: 'syroedcheskie-blyuda' },
        { title: 'Напитки', slug: 'napitki' },
    ];

    const filteredCards = cards.filter((card) => {
        const matchesSearch = card.title.toLowerCase().includes(searchValue.toLowerCase());

        const noSelectedAllergens =
            selectedAllergens.length === 0 ||
            !card.ingredients.some((ingredient) =>
                selectedAllergens.some((allergen) =>
                    ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                ),
            );

        const matchesGarnish =
            selectedGarnish.length === 0 ||
            card.ingredients.some((ingredient) =>
                selectedGarnish.some((garnish) =>
                    ingredient.title.toLowerCase().includes(garnish.toLowerCase()),
                ),
            );

        return matchesSearch && noSelectedAllergens && matchesGarnish;
    });

    return (
        <div className={s.container}>
            <SectionHeader
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам...'
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                allergens={selectedAllergens}
                setAllergens={setSelectedAllergens}
            />

            <RecipeTabs tabs={tabs} />
            <div className={s.cardsContainer}>
                {filteredCards.map((card, i) => {
                    const CardComponent = isTablet || isMobile ? TabletVerticalCard : VerticalCard;

                    return (
                        <div key={i}>
                            <CardComponent
                                {...card}
                                searchValue={searchValue}
                                i={i}
                                data-test-id={`food-card-${i}`}
                            />
                        </div>
                    );
                })}
            </div>

            <Button variant='' className={s.button}>
                Загрузить еще
            </Button>

            <Footer
                title='Десерты, выпечка'
                text='Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
                cards={footerCards}
                lineCards={lineCards}
            />
        </div>
    );
};
