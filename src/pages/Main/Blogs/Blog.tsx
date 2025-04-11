import { Button } from '@chakra-ui/react';

import { ReviewCard } from '~/components/Cards/ReviewCard/ReviewCard';
import { SectionTitle } from '~/components/SectionTitle/SectionTitle';
import { useViewport } from '~/utils/ViewportProvider';

import s from './Blog.module.css';

export const review = [
    {
        image: '/images/blog/avatar1.jpg',
        name: 'Елена Высоцкая',
        email: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        image: '/images/blog/avatar2.jpg',
        name: 'Alex Cook',
        email: '@funtasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        image: '/images/blog/avatar3.jpg',
        name: 'Екатерина Константинопольская',
        email: '@bake_and_pie',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export const Blog = () => {
    const { isDesktop, isMobile, isTablet } = useViewport();

    return (
        <div className={s.container}>
            <div className={s.titleWrapper}>
                <SectionTitle title='Кулинарные блоги' />
                {isDesktop && <Button variant=''>Все авторы → </Button>}
            </div>
            <div className={s.reviewContainer}>
                {review.map((review, index) => (
                    <ReviewCard
                        key={index}
                        image={review.image}
                        name={review.name}
                        email={review.email}
                        text={review.text}
                    />
                ))}
            </div>
            {isTablet || (isMobile && <Button variant=''>Все авторы → </Button>)}
        </div>
    );
};
