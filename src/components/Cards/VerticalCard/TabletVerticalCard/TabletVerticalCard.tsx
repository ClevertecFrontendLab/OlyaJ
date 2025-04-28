import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';

import styles from './../../NewRecipeCard/NewRecipeCard.module.css';
import s from './TabletVerticalCard.module.css';
import { highlightMatch } from '~/utils/HighlightMatch';

type TabletVerticalCardType = {
    id?: string;
    i?: number;
    image: string;
    category: string;
    isLiked: boolean;
    likesCount: number;
    isSaved: boolean;
    savesCount: number;
    title: string;
    icon?: string;
    searchValue?: string;
    categorySlug?: string;
    subcategorySlug?: string;
};

export const TabletVerticalCard = ({
    id,
    i,
    image,
    category,
    isLiked,
    likesCount,
    isSaved,
    savesCount,
    title,
    icon,
    searchValue,
    categorySlug,
    subcategorySlug,
}: TabletVerticalCardType) => (
    <div className={s.container} data-test-id={`food-card-${i}`}>
        <img src={image} alt='image' className={s.image} />

        <div className={s.labelContainer}>
            <img src={icon} width='18' height='18' />
            <div>
                <button className={styles.label}>{category}</button>
            </div>
        </div>

        <div className={s.informationContainer}>
            <div className={s.titleContainer}>
                <div className={styles.iconsContainer}>
                    <div className={styles.countContainer}>
                        {isLiked ? <img src={heartEyes} alt='heart' /> : ''}
                        <span className={styles.number}>{likesCount}</span>
                    </div>

                    <div className={styles.countContainer}>
                        {isSaved ? <img src={bookmarkHeart} alt='eyes' /> : ''}
                        <span className={styles.number}>{savesCount}</span>
                    </div>
                </div>
                {id ? (
                    <Link
                        to={
                            categorySlug && subcategorySlug
                                ? `/${categorySlug}/${subcategorySlug}/${id}`
                                : `/the-juiciest/${id}`
                        }
                        className={s.titleLink}
                    >
                        <span className={s.title}>
                            {searchValue ? highlightMatch(title, searchValue) : title}
                        </span>
                    </Link>
                ) : (
                    <span className={s.title}>
                        {searchValue ? highlightMatch(title, searchValue) : title}
                    </span>
                )}
            </div>
            <div className={s.buttonTabletContainer}>
                <Button
                    variant=''
                    width='24px'
                    height='24px'
                    minWidth='24px'
                    minHeight='24px'
                    padding='0'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='6px'
                    border='1px solid var(--blackAlpha-600, rgba(0, 0, 0, 0.48))'
                >
                    <Box as='img' src={bookmarkHeart} width='12px' height='12px' />
                </Button>

                <Link
                    to={
                        categorySlug && subcategorySlug
                            ? `/${categorySlug}/${subcategorySlug}/${id}`
                            : `/the-juiciest/${id}`
                    }
                    className={s.cookButtonLink}
                >
                    <Button
                        variant=''
                        height='24px'
                        width='70px'
                        borderRadius='6px'
                        background='var(--blackAlpha-900, rgba(0, 0, 0, 0.92))'
                        color='white'
                        fontSize='12px'
                        data-test-id={`card-link-${i}`}
                    >
                        Готовить
                    </Button>
                </Link>
            </div>
        </div>
    </div>
);
