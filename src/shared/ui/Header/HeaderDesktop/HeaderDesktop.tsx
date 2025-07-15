import { Box, Image } from '@chakra-ui/react';
import logo from './../../../../../public/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { headerStyles, imageStyles } from './headerDesktop.styles';

export const HeaderDesktop = () => {
    return (
        <Box as='header' {...headerStyles}>
            <Image src={logo} alt='logo' {...imageStyles} />
            <Link to={ROUTES.AUTH}>Login</Link>
        </Box>
    );
};
