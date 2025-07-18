import { Box, useBreakpointValue } from "@chakra-ui/react"
import { newRecipeCardStyle } from "./newRecipeCard.styles"

export type NewRecipeCardProps = {
    image: string
    title: string
    description: string
    category: string
    icon: string
    likeCount?: number
    saveCount?: number
}

export const NewRecipeCard = ({image, title, description, category, icon, likeCount, saveCount}: NewRecipeCardProps)=>{
    const isDesktop = useBreakpointValue({base:false, md: false, lg:true})

    return(
        <Box {...newRecipeCardStyle}>
            <Box >{image}</Box>
        </Box>

    )
}