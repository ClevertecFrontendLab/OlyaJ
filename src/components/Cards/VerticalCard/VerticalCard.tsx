import { Button } from '@chakra-ui/react';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';

import s from './VerticalCard.module.css';

type VerticalCardType = {
    image: string;
    recommended?: boolean;
    name?: string;
    category: string;
    isLiked: boolean;
    likesCount: number;
    isSaved: boolean;
    savesCount: number;
    title: string;
    description: string;
    avatar?: string;
    icon?: string;
};

export const VerticalCard = ({
    image,
    recommended,
    name,
    category,
    isLiked,
    likesCount,
    isSaved,
    savesCount,
    title,
    description,
    avatar,
    icon,
}: VerticalCardType) => (
    <div className={s.contaner}>
        <div className={s.imageContainer}>
            <img src={image} alt='image' className={s.image} />
            {recommended && (
                <div className={s.userReccomend}>
                    <img src={avatar} className={s.smallAvatar} />
                    <span>{`${name} рекомендует`}</span>
                </div>
            )}
        </div>

        <div className={s.recipeContainer}>
            <div className={s.categoryContainer}>
                <div className={s.iconLabelWrapper}>
                    <img src={icon} width='18' height='18' />
                    <div>
                        <button className={s.label}>{category}</button>
                    </div>
                </div>

                <div className={s.iconsContainer}>
                    <div className={s.countContainer}>
                        {isLiked ? <img src={heartEyes} alt='heart' /> : ''}
                        <span className={s.number}>{likesCount}</span>
                    </div>

                    <div className={s.countContainer}>
                        {isSaved ? <img src={bookmarkHeart} alt='eyes' /> : ''}
                        <span className={s.number}>{savesCount}</span>
                    </div>
                </div>
            </div>
            <div className={s.descriptionContainer}>
                <span className={s.title}>{title}</span>
                <p className={s.description}>{description}</p>
            </div>

            <div className={s.buttonContainer}>
                <Button variant='' className={s.saveButton}>
                    <div className={s.saveButtonContainer}>
                        <img src={bookmarkHeart} /> Сохранить{' '}
                    </div>
                </Button>
                <Button variant='' className={s.cookButton}>
                    Готовить
                </Button>
            </div>
        </div>
    </div>
);
