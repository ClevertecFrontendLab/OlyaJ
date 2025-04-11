import { Outlet } from 'react-router-dom';

import { useViewport } from '~/utils/ViewportProvider';

import { TabletFooter } from '../Footer/TabletFooter/TabletFooter';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { SidebarRight } from '../SidebarRight/SidebarRight';
import s from './Layout.module.css';

const Layout = () => {
    const { isTablet, isMobile } = useViewport();

    return (
        <div className={s.layout}>
            <Header />
            <div className={s.body}>
                <Sidebar />
                <main className={s.content}>
                    <Outlet />
                </main>
                <SidebarRight
                    isSaved={true}
                    savesCount={185}
                    isFollowed={true}
                    peopleCount={589}
                    isLiked={true}
                    likesCount={587}
                />
            </div>
            {(isTablet || isMobile) && <TabletFooter />}
        </div>
    );
};

export default Layout;
