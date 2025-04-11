import clsx from 'clsx';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';
import pencil from '/pencil.svg';
import people from '/people.svg';
import writeRecipe from '/writeRecipe.svg';

import s from './SidebarRight.module.css';

export type SidebarRightType = {
    isSaved?: boolean;
    savesCount?: number;
    isFollowed?: boolean;
    peopleCount?: number;
    isLiked?: boolean;
    likesCount?: number;
};

export const SidebarRight = ({
    isSaved,
    savesCount,
    isFollowed,
    peopleCount,
    isLiked,
    likesCount,
}: SidebarRightType) => (
    <aside className={clsx(s.sidebar, 'hideOnMobile')}>
        <div className={s.icons}>
            {isSaved && (
                <div className={s.icon}>
                    <img src={bookmarkHeart} alt='save' width='16' height='16' />
                    <span className={s.number}>{savesCount}</span>
                </div>
            )}
            {isFollowed && (
                <div className={s.icon}>
                    <img src={people} alt='save' width='16' height='16' />
                    <span className={s.number}>{peopleCount}</span>
                </div>
            )}
            {isLiked && (
                <div className={s.icon}>
                    <img src={heartEyes} alt='save' width='16' height='16' />
                    <span className={s.number}>{likesCount}</span>
                </div>
            )}
        </div>
        <div className={s.recipeWrapper}>
            <div className={s.recipeButton}>
                <img src={writeRecipe} className={s.lightIcon} />
                <img src={pencil} className={s.pencilIcon} />
            </div>
            <span className={s.smallText}>Записать рецепт</span>
        </div>
    </aside>
);
