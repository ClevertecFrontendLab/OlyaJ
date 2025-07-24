import { Box, Button, Image, Text } from "@chakra-ui/react";
import { buttonVerticalCardStyle, buttonVerticalCardTabletStyle, imageVerticalCardTabletStyle, titleIconsStyle, titleStyle, verticalCardTabletStyles, verticalCardTitleStyle } from "./verticalTabletCard.styles";
import { iconLikeSaveBoxStyle, iconStyle, likeSaveIconsBox } from "../../NewRecipeDescktopCard/newRecipeDesktopCard.styles";
import saveIcon from './../../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../../public/heartEyes.svg'
import saveButton from "./../../../../../../public/saveButton.png"

type VerticalTabletCardProps = {
    image: string;
    title: string;
    likeCount?: number;
    saveCount?: number;
    categoryId?: string;
    subcategoryId?: string; 
    recipeId?: string
}

export const VerticalTabletCard = ({image, title, likeCount, saveCount}: VerticalTabletCardProps)=>{
    return (
    <Box {...verticalCardTabletStyles}>
        <Image src={image} alt="image" {...imageVerticalCardTabletStyle}/>

        <Box {...verticalCardTitleStyle }>
             
            <Box {...titleIconsStyle}>
                <Box {...likeSaveIconsBox}>
                        <Box {...iconLikeSaveBoxStyle}>
                            <Image src={saveIcon} alt="icon" {...iconStyle} />
                            <Text >{saveCount}</Text>
                        </Box>

                        <Box {...iconLikeSaveBoxStyle}>
                            <Image src={likeIcon} alt="icon" {...iconStyle} />
                            <Text >{likeCount}</Text>
                        </Box>
                </Box>

                <Box>
                    <Text {...titleStyle}>{title}</Text>
                </Box>

            </Box>


                <Box {...buttonVerticalCardStyle}>
                    <Image src={saveButton} alt="save" w="24px" h="24px"/>
                    <Button {...buttonVerticalCardTabletStyle}>
                    Готовить 
                </Button>
                </Box>
        </Box>

        
    </Box>
)}