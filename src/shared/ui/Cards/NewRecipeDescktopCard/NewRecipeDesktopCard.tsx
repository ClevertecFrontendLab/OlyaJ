import { Box, Image, Text } from "@chakra-ui/react"
import saveIcon from './../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../public/heartEyes.svg'
import { categoryIconsBoxStyle, categoryStyle, descriptionBoxStyle, descriptionStyle, iconCategoryStyle, iconLikeSaveBoxStyle, iconStyle, imageDesktopStyle, likeSaveIconsBox, newRecipeDesktopCardStyle, titleDescriptionStyle, titleStyle } from "./newRecipeDesktopCard.styles"
import { Link, href } from "react-router-dom"
import { ROUTES } from "@shared/model/routes"


export type NewRecipeCardProps = {
    image: string
    title: string
    description: string
    category?: string
    icon?: string
    likeCount?: number
    saveCount?: number
    categoryId: string
    subcategoryId: string
    recipeId: string
  }
  

export const NewRecipeDesktopCard = ({ image, title, description, category, icon, likeCount, saveCount, categoryId, subcategoryId, recipeId}: NewRecipeCardProps) => {

    return (
        <Box {...newRecipeDesktopCardStyle}>
            <Image src={image} alt="image" {...imageDesktopStyle} />

            <Box {...descriptionBoxStyle}>

                {/*title + description*/}
                <Box {...titleDescriptionStyle}>
                    <Link to={href(ROUTES.RECIPE, {categoryId, subcategoryId, recipeId})}>
                    <Text {...titleStyle}>{title}</Text>
                    </Link>
                    <Text {...descriptionStyle}>{description}</Text>
                </Box>

                {/*category + icons*/}
                <Box {...categoryIconsBoxStyle}>

                    <Box {...iconCategoryStyle} >
                        <Image src={icon} alt="icon" {...iconStyle} />
                        <Text {...categoryStyle}>{category}</Text>
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

