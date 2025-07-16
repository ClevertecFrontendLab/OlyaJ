import { Box, Image } from '@chakra-ui/react';
import logo from './../../../../../public/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { headerStyles, imageStyles } from './headerDesktop.styles';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs/Breadcrumbs';

export const HeaderDesktop = () => {
    return (
        <Box as="header" {...headerStyles}>
            <Image src={logo} alt="logo" {...imageStyles} />

            <Box position="absolute" left="280px" top="40%" >
                <Breadcrumbs/>
            </Box>

            <Link to={ROUTES.AUTH}>Login</Link>
        </Box>
    );
};
