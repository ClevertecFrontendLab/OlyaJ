import { Box, Image, Text} from "@chakra-ui/react"
import { imageRecipeBoxCardStyle, newRecipeBoxCardStyle, titleIconsBoxStyle, titleRecipeBoxStyle } from "./newRecipeTabletCard.style"
import { iconLikeSaveBoxStyle, iconStyle, likeSaveIconsBox } from "../NewRecipeDescktopCard/newRecipeDesktopCard.styles"
import saveIcon from './../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../public/heartEyes.svg'
import { Link, href } from "react-router-dom"
import { ROUTES } from "@shared/model/routes"

type NewRecipeTabletCardProps = {
    image: string
    title: string
    likeCount?: number
    saveCount?:number
    recipeId?: string;
    categoryId?: string;
    subcategoryId?: string;
}

export const NewRecipeTabletCard = ({image, title, likeCount,saveCount, recipeId, categoryId, subcategoryId}: NewRecipeTabletCardProps) => {
    return (
        <Box {...newRecipeBoxCardStyle}>
            <Image  src={image} alt="image" {...imageRecipeBoxCardStyle}/>

            <Box {...titleIconsBoxStyle}>
                <Box>
                {categoryId && subcategoryId && recipeId && (
                        <Link to={href(ROUTES.RECIPE, {
                            categoryId,
                            subcategoryId,
                            recipeId
                        }
                        )}>

                            <Text {... titleRecipeBoxStyle}>{title}</Text>
                        </Link>
                    )}
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