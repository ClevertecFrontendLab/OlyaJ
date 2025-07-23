import { Box, Text, Image} from "@chakra-ui/react";
import { categoryIconsFooterBoxStyle, descriptionFooterStyle, footerTextCardStyle, titleDescriptionBoxStyle, titleFooterStyle } from "./footerTextCard.style";
import { boxTextStyle, categoriesBoxStyle, categoryStyle, iconLikeSaveBoxStyle, iconStyle, likeSaveIconsBox } from "../../NewRecipeDescktopCard/newRecipeDesktopCard.styles";
import saveIcon from './../../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../../public/heartEyes.svg'

export type FooterTextCardProps = {
    title: string;
    description: string;
    category?: string[];
    likeCount?: number;
    saveCount?: number;
}

export const FooterTextCard = ({ title, description, category, likeCount, saveCount }: FooterTextCardProps) => {
    
    return (
        <Box {...footerTextCardStyle}>
            <Box {...titleDescriptionBoxStyle}>
                <Text {...titleFooterStyle}>{title}</Text>
                <Text {...descriptionFooterStyle} sx={{ WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{description}</Text>
            </Box>

            {/*category + icons*/}
            <Box {...categoryIconsFooterBoxStyle }>

                <Box {...categoriesBoxStyle}>
                    {category?.map((catTitle) => (
                        <Box {...boxTextStyle}>
                            <Text {...categoryStyle}>{catTitle}</Text>
                        </Box>
                    ))}
                </Box>


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
            </Box>
        </Box>
    )
}