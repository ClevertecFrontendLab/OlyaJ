import { Box, Image, Text } from "@chakra-ui/react";
import { tabletFooterBoxStyle, footerItemStyle, footerIconStyle, footerTextStyle } from "./tabletFooter.style";

import homeButton from './../../../../public/home.svg';
import pencilButton from './../../../../public/pencil.svg';
import searchButton from './../../../../public/search.svg';
import avatarButton from './../../../../public/avatar.jpg';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@shared/model/routes";

export const TabletFooter = () => {
    const navigate = useNavigate()

    return (
        <Box {...tabletFooterBoxStyle}>
            <Box {...footerItemStyle} onClick={()=>navigate(ROUTES.MAIN)}>
                <Image src={homeButton} alt="home" {...footerIconStyle} />
                <Text {...footerTextStyle}>Главная</Text>
            </Box>
            <Box {...footerItemStyle}>
                <Image src={searchButton} alt="search" {...footerIconStyle} />
                <Text {...footerTextStyle}>Поиск</Text>
            </Box>
            <Box {...footerItemStyle}>
                <Image src={pencilButton} alt="create" {...footerIconStyle} />
                <Text {...footerTextStyle}>Записать</Text>
            </Box>
            <Box {...footerItemStyle}>
                <Image
                    src={avatarButton}
                    alt="profile"
                    borderRadius="full"
                    boxSize="24px"
                    mb="4px"
                />
                <Text {...footerTextStyle}>Мой профиль</Text>
            </Box>
        </Box>
    );
};
