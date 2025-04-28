import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import bookmarkHeart from '/bookmarkHeart.svg';
import heartEyes from '/heartEyes.svg';
import logo from '/logo.svg';
import logoMobile from '/logoMobile.svg';
import people from '/people.svg';

import { useViewport } from '~/utils/ViewportProvider';

import s from './HeaderTablet.module.css';
import { Menu } from './Menu/Menu';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export type HeaderTabletProps = {
    isSaved?: boolean;
    savesCount?: number;
    isFollowed?: boolean;
    peopleCount?: number;
    isLiked?: boolean;
    likesCount?: number;
};

export const HeaderTablet = ({
    isSaved,
    savesCount,
    isFollowed,
    peopleCount,
    isLiked,
    likesCount,
}: HeaderTabletProps) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const { isMobile } = useViewport();

    console.log('HeaderTablet RENDERED', { menuOpen, isMobile });

    return (
        <header className={menuOpen ? s.headerOpenMenu : s.container} data-test-id='header'>
            {/* Лого */}
            {isMobile ? (
                <Button variant='' onClick={() => navigate('/')}>
                    <img src={logoMobile} alt='Logo' width='32' height='32' />
                </Button>
            ) : (
                <Button variant='' onClick={() => navigate('/')}>
                    <img src={logo} alt='Logo' width='135' height='32' />
                </Button>
            )}

            {/* Иконки */}
            {!menuOpen && (
                <div className={s.icons}>
                    {isSaved && (
                        <div className={s.icon}>
                            <img src={bookmarkHeart} alt='save' width='12' height='12' />
                            <span className={s.number}>{savesCount}</span>
                        </div>
                    )}
                    {isFollowed && (
                        <div className={s.icon}>
                            <img src={people} alt='save' width='12' height='12' />
                            <span className={s.number}>{peopleCount}</span>
                        </div>
                    )}
                    {isLiked && (
                        <div className={s.icon}>
                            <img src={heartEyes} alt='save' width='12' height='12' />
                            <span className={s.number}>{likesCount}</span>
                        </div>
                    )}
                </div>
            )}

            {!menuOpen && (
                <HamburgerIcon
                    data-test-id='hamburger-icon'
                    onClick={() => setMenuOpen(true)}
                    marginRight={'16px'}
                />
            )}

            {/* Меню */}
            {menuOpen && <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
        </header>
    );
};
