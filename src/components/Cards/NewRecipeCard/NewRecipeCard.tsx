import clsx from 'clsx';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';

import { useViewport } from '~/utils/ViewportProvider';

import s from './NewRecipeCard.module.css';

export type NewRecipeCardType = {
    image?: string;
    title: string;
    description?: string;
    category: string;
    isLiked?: boolean;
    likesCount?: number;
    isSaved?: boolean;
    savesCount?: number;
    withImage?: boolean;
    icon?: string;
    showDescription?: boolean;
    variant?: 'compact' | 'expanded';
};

export const NewRecipeCard = ({
    image,
    title,
    description,
    category,
    isLiked,
    likesCount,
    isSaved,
    savesCount,
    withImage,
    icon,
    showDescription = false,
    variant,
}: NewRecipeCardType) => {
    const { isDesktop } = useViewport();

    return isDesktop ? (
        <div className={s.recipeCard}>
            {withImage && <img src={image} alt='image' className={s.image} />}

            <div className={s.descriptionContainer}>
                <div className={s.titleContainer}>
                    <span className={s.title}>{title}</span>
                    {showDescription && <p className={s.description}>{description}</p>}
                </div>
                <div className={s.labelContainer}>
                    <div className={s.iconLabelWrapper}>
                        <img src={icon} width='18' height='18' />
                        <div>
                            <button className={s.label}>{category}</button>
                        </div>
                    </div>
                    <div className={s.iconsContainer}>
                        <div className={s.countContainer}>
                            {isLiked && <img src={heartEyes} alt='heart' />}
                            <span className={s.number}>{likesCount}</span>
                        </div>
                        <div className={s.countContainer}>
                            {isSaved && <img src={bookmarkHeart} alt='eyes' />}
                            <span className={s.number}>{savesCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div
            className={clsx(s.recipeCard, {
                [s.compact]: variant === 'compact',
                [s.expanded]: variant === 'expanded',
            })}
        >
            {withImage && <img src={image} alt='image' className={s.image} />}

            <div className={s.labelContainer}>
                <img src={icon} width='20' height='18' />
                <div>
                    <button className={s.label}>{category}</button>
                </div>
            </div>

            <div className={s.titleWrapper}>
                <span className={s.title}>{title}</span>
                {variant === 'expanded' && description && (
                    <p className={s.description}>{description}</p>
                )}
                <div className={s.iconsContainer}>
                    <div className={s.countContainer}>
                        {isLiked && <img src={heartEyes} alt='heart' />}
                        <span className={s.number}>{likesCount}</span>
                    </div>
                    <div className={s.countContainer}>
                        {isSaved && <img src={bookmarkHeart} alt='eyes' />}
                        <span className={s.number}>{savesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
