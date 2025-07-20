import { Box, Image, Text } from "@chakra-ui/react"
import saveIcon from './../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../public/heartEyes.svg'
import { categoriesBoxStyle, categoryIconsBoxStyle, categoryStyle, descriptionBoxStyle, descriptionStyle, iconStyle, iconLikeSaveBoxStyle, imageDesktopStyle, likeSaveIconsBox, newRecipeDesktopCardStyle, titleDescriptionStyle, titleStyle, boxTextStyle } from "./newRecipeDesktopCard.styles"
import { Link, href } from "react-router-dom"
import { ROUTES } from "@shared/model/routes"


export type NewRecipeCardProps = {
    image: string;
    title: string;
    description: string;
    category?: string[];
    icon?: string[];
    likeCount?: number;
    saveCount?: number;
    recipeId?: string;
    categoryId?: string;
    subcategoryId?: string;
}


export const NewRecipeDesktopCard = ({ image, title, description, category, likeCount, saveCount, recipeId, categoryId, subcategoryId }: NewRecipeCardProps) => {

    return (
        <Box {...newRecipeDesktopCardStyle}>
            <Image src={image} alt="image" {...imageDesktopStyle} />

            <Box {...descriptionBoxStyle}>

                {/*title + description*/}
                <Box {...titleDescriptionStyle}>
                            <Text {...titleStyle}>{title}</Text>
                    <Text {...descriptionStyle}>{description}</Text>
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
        </Box>
    )
}

