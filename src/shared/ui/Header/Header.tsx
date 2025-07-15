import { useBreakpointValue } from '@chakra-ui/react';
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderTablet } from './HeaderTablet /HeaderTablet';

export const Header = () => {
    const isDesktop = useBreakpointValue({ md: false, lg: true });

    return isDesktop ? <HeaderDesktop /> : <HeaderTablet />;
};
