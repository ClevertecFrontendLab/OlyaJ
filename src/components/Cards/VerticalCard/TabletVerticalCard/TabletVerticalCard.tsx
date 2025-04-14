import { Box, Button } from '@chakra-ui/react';

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
                <span className={s.title}>{title}</span>
            </div>
            <div className={s.buttonTabletContainer}>
                <Button
                    variant=""
                    width="24px"
                    height="24px"
                    minWidth="24px"
                    minHeight="24px"
                    padding="0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border-radius="6px"
                    border="1px solid var(--blackAlpha-600, rgba(0, 0, 0, 0.48))"
                >
                    <Box as="img" src={bookmarkHeart} width="12px" height="12px" />
                </Button>

                <Button
                    variant=""
                    height="24px"
                    width="70px"
                    border-radius="6px"
                    background="var(--blackAlpha-900, rgba(0, 0, 0, 0.92))"
                    color="var(--white, #fff)"
                    fontSize="12px"

                >
                    Готовить
                </Button>
            </div>

        </div>
    </div>
);
