import { Button } from '@chakra-ui/react';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';

import styles from './../../NewRecipeCard/NewRecipeCard.module.css';
import s from './TabletVerticalCard.module.css';

type TabletVerticalCardType = {
    image: string;
    category: string;
    isLiked: boolean;
    likesCount: number;
    isSaved: boolean;
    savesCount: number;
    title: string;
    icon?: string;
};

export const TabletVerticalCard = ({
    image,
    category,
    isLiked,
    likesCount,
    isSaved,
    savesCount,
    title,
    icon,
}: TabletVerticalCardType) => (
    <div className={s.container}>
        <img src={image} alt='image' className={s.image} />
        <div className={styles.labelContainer}>
            <img src={icon} width='16' height='16' />
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
                <span className={styles.title}>{title}</span>
            </div>
            <div className={s.buttonTabletContainer}>
                <Button variant='' size='sm' className={s.saveTabletButton}>
                    <img src={bookmarkHeart} width='12' height='12' />
                </Button>
                <Button variant='' fontSize='12px' size='sm' className={s.cookTabletButton}>
                    Готовить
                </Button>
            </div>
        </div>
    </div>
);
