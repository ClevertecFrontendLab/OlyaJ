import { VeganSecondDishes } from '~/pages/Vegan/VeganSecondDishes';
import { NotFound } from '~/pages/NotFound/NotFound';
import { useParams } from 'react-router-dom';

export const CategoryPage = () => {
    const { category, subcategory } = useParams();

    if (category === 'vegan') {
        if (subcategory === 'vtorye-blyuda' || 'zakuski') {
            return <VeganSecondDishes />;
        }
        return <NotFound />;
    }

    return <NotFound />;
};
