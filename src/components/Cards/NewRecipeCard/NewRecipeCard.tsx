import clsx from 'clsx';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';

import { useViewport } from '~/utils/ViewportProvider';

import s from './NewRecipeCard.module.css';
import { Link } from 'react-router-dom';
import { highlightMatch } from '~/utils/HighlightMatch';

export type NewRecipeCardType = {
    image?: string;
    title: string;
    description?: string;
    category: string;
    categorySlug?: string;
    subcategorySlug?: string;
    id: string | undefined;
    isLiked?: boolean;
    likesCount?: number;
    isSaved?: boolean;
    savesCount?: number;
    withImage?: boolean;
    icon?: string;
    showDescription?: boolean;
    variant?: 'compact' | 'expanded';
    searchValue?: string;
    dataTestId?: string;
};

export const NewRecipeCard = ({
    id,
    categorySlug,
    subcategorySlug,
    dataTestId,
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
    searchValue,
}: NewRecipeCardType) => {
    const { isDesktop } = useViewport();

    const linkTo =
        categorySlug && subcategorySlug
            ? `/${categorySlug}/${subcategorySlug}/${id}`
            : `/the-juiciest/${id}`;

    return (
        <Link
            to={linkTo}
            className={clsx(s.recipeCard, {
                [s.compact]: variant === 'compact',
                [s.expanded]: variant === 'expanded',
            })}
            data-test-id={dataTestId}
        >
            {withImage && <img src={image} alt='image' className={s.image} />}

            {isDesktop ? (
                <div className={s.descriptionContainer}>
                    <div className={s.titleContainer}>
                        <span className={s.title}>
                            {searchValue ? highlightMatch(title, searchValue) : title}
                        </span>

                        {showDescription && <p className={s.description}>{description}</p>}
                    </div>
                    <div className={s.labelContainer}>
                        <div className={s.iconLabelWrapper}>
                            {icon && <img src={icon} width='18' height='18' alt='icon' />}
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
                                {isSaved && <img src={bookmarkHeart} alt='bookmark' />}
                                <span className={s.number}>{savesCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className={s.labelContainer}>
                        {icon && <img src={icon} width='20' height='18' alt='icon' />}
                        <div>
                            <button className={s.label}>{category}</button>
                        </div>
                    </div>

                    <div className={s.titleWrapper}>
                        <span className={s.title}>
                            {searchValue ? highlightMatch(title, searchValue) : title}
                        </span>
                        {variant === 'expanded' && description && (
                            <p className={s.description}>{description}</p>
                        )}
                        <div className={s.iconsContainer}>
                            <div className={s.countContainer}>
                                {isLiked && <img src={heartEyes} alt='heart' />}
                                <span className={s.number}>{likesCount}</span>
                            </div>
                            <div className={s.countContainer}>
                                {isSaved && <img src={bookmarkHeart} alt='bookmark' />}
                                <span className={s.number}>{savesCount}</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Link>
    );
};
