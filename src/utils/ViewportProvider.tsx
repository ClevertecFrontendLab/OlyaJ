import { useMediaQuery } from 'react-responsive';

export const useViewport = () => {
    const isMobile = useMediaQuery({ maxWidth: 360 });
    const isTablet = useMediaQuery({ minWidth: 361, maxWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 769 });

    return { isMobile, isTablet, isDesktop };
};
