import { Box, Container, Image } from '@chakra-ui/react';
import { containerStyles, headerStyles, imageStyles } from './header.styles';
import logo from './../../../../public/logo.svg';

export const Header = () => {
    return (
        <Box as='header' {...headerStyles}>
            <Container {...containerStyles}>
                <Image src={logo} alt='logo' {...imageStyles} />
            </Container>
        </Box>
    );
};
