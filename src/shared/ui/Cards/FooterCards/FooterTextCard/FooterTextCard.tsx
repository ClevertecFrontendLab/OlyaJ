import { Box, Text, Image} from "@chakra-ui/react";
import { footerTextCardStyle, titleDescriptionBoxStyle } from "./footerTextCard.style";
import { boxTextStyle, categoriesBoxStyle, categoryIconsBoxStyle, categoryStyle, iconLikeSaveBoxStyle, iconStyle, likeSaveIconsBox } from "../../NewRecipeDescktopCard/newRecipeDesktopCard.styles";
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
                <Text >{title}</Text>
                <Text>{description}</Text>
            </Box>

            {/*category + icons*/}
            <Box {...categoryIconsBoxStyle}>

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