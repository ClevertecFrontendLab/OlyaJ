import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import logo from './../../../../../public/logo.svg';
import logoMobile from './../../../../../public/logoMobile.svg';
import burgerMenu from './../../../../../public/burger.svg';
import closeButton from './../../../../../public/сIoseIcon.svg'
import { headerTabletStyles, imageStyles } from './headerTablet.styles';
import { useState } from 'react';
import { BurgerMenu } from './Menu/BurgerMenu';

export const HeaderTablet = () => {
    const logoImage = useBreakpointValue({
        base: logoMobile,
        md: logo,
    });

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box as='header' {...headerTabletStyles}>
            <Image src={logoImage} alt='logo' {...imageStyles} />

            <Box onClick={()=>setIsOpen(!isOpen)}>
                <Image src={isOpen ? closeButton : burgerMenu} alt='burger' />
            </Box>

            {isOpen && <BurgerMenu onClose={()=>setIsOpen(true)}/>}
        </Box>
    );
};
