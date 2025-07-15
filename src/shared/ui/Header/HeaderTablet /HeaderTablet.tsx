import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import logo from './../../../../../public/logo.svg';
import logoMobile from './../../../../../public/logoMobile.svg';
import burgerMenu from './../../../../../public/burger.svg';
import { headerTabletStyles, imageStyles } from './headerTablet.styles';

export const HeaderTablet = () => {
    const logoImage = useBreakpointValue({
        base: logoMobile,
        md: logo,
    });

    return (
        <Box as='header' {...headerTabletStyles}>
            <Image src={logoImage} alt='logo' {...imageStyles} />
            <Image src={burgerMenu} alt='burger' />
        </Box>
    );
};
