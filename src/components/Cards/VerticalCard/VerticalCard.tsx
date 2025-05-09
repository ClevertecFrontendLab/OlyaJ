import { Button } from '@chakra-ui/react';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';

import s from './VerticalCard.module.css';
import { Link } from 'react-router-dom';
import { highlightMatch } from '~/utils/HighlightMatch';

type VerticalCardType = {
    id?: string;
    categorySlug?: string;
    subcategorySlug?: string;
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
    searchValue?: string;
    i?: number;
};

export const VerticalCard = ({
    id,
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
    searchValue,
    icon,
    i,
    categorySlug,
    subcategorySlug,
}: VerticalCardType) => (
    <div className={s.contaner} data-test-id={`food-card-${i}`}>
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
                    <img src={icon} width='24' height='24' />
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

                <p className={s.description}>{description}</p>
            </div>

            <div className={s.buttonContainer}>
                <Button variant='' className={s.saveButton}>
                    <div className={s.saveButtonContainer}>
                        <img src={bookmarkHeart} /> Сохранить
                    </div>
                </Button>

                <Link
                    to={
                        categorySlug && subcategorySlug
                            ? `/${categorySlug}/${subcategorySlug}/${id}`
                            : `/the-juiciest/${id}`
                    }
                    className={s.cookButtonLink}
                >
                    <Button variant='' className={s.cookButton} data-test-id={`card-link-${i}`}>
                        Готовить
                    </Button>
                </Link>
            </div>
        </div>
    </div>
);
