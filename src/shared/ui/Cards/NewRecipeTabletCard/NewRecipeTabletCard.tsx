import { Box, Image, Text} from "@chakra-ui/react"
import { imageRecipeBoxCardStyle, newRecipeBoxCardStyle, titleIconsBoxStyle, titleRecipeBoxStyle } from "./newRecipeTabletCard.style"
import { iconLikeSaveBoxStyle, iconStyle, likeSaveIconsBox } from "../NewRecipeDescktopCard/newRecipeDesktopCard.styles"
import saveIcon from './../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../public/heartEyes.svg'

type NewRecipeTabletCardProps = {
    image: string
    title: string
    likeCount?: number
    saveCount?:number
}

export const NewRecipeTabletCard = ({image, title, likeCount,saveCount}: NewRecipeTabletCardProps) => {
    return (
        <Box {...newRecipeBoxCardStyle}>
            <Image  src={image} alt="image" {...imageRecipeBoxCardStyle}/>

            <Box {...titleIconsBoxStyle}>
                <Box>
                <Text {...titleRecipeBoxStyle }>{title}</Text>
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