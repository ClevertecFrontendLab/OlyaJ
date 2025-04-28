import { Button } from '@chakra-ui/react';

import avatar from '/avatar.jpg';
import logo from '/logo.svg';

import { useViewport } from '~/utils/ViewportProvider';

import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import s from './Header.module.css';
import { HeaderTablet } from './Tablet/HeaderTablet';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Header = () => {
    const { isMobile, isTablet } = useViewport();

    if (isTablet || isMobile) {
        return (
            <HeaderTablet
                isSaved={true}
                savesCount={12}
                isFollowed={true}
                peopleCount={87}
                isLiked={true}
                likesCount={345}
            />
        );
    }

    return (
        <header className={s.header} data-test-id='header'>
            <Button variant=''>
                <img src={logo} alt='Logo' width='135' height='32' />
            </Button>
            <nav data-test-id='nav'>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <Breadcrumbs data-test-id='breadcrumbs' />
                    </div>
                    <div className={s.user}>
                        <div className={s.avatar}>
                            <img src={avatar} alt='User Avatar' />
                        </div>
                        <div className={s.nameEmailContainer}>
                            <span className={s.name}>Екатерина Константинопольская</span>
                            <span className={s.email}>@bake_and_pie</span>
                        </div>
                    </div>
                </div>
            </nav>
            <HamburgerIcon data-test-id='hamburger-icon' style={{ display: 'none' }} />
        </header>
    );
};
