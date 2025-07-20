import { Box, Image, Text } from "@chakra-ui/react"
import saveIcon from './../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../public/heartEyes.svg'
import { categoryIconsBoxStyle, categoryStyle, descriptionBoxStyle, descriptionStyle, iconCategoryStyle, iconLikeSaveBoxStyle, iconStyle, imageDesktopStyle, likeSaveIconsBox, newRecipeDesktopCardStyle, titleDescriptionStyle, titleStyle } from "./newRecipeDesktopCard.styles"


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



export const NewRecipeDesktopCard = ({ image, title, description, category, icon, likeCount, saveCount, recipeId, categoryId, subcategoryId }: NewRecipeCardProps) => {

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

                    <Box {...iconCategoryStyle}>
                        {category?.map((catTitle, index) => (
                            <Box>
                                {icon?.[index] && (
                                    <Image src={icon[index]} alt="icon" {...iconStyle} />
                                )}
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

