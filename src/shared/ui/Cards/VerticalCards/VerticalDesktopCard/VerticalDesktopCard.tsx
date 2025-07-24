import { Box, Button, Image, Text } from "@chakra-ui/react";
import { buttonBoxStyle, categoriesVerticalBoxStyle, cookButtonStyle, saveButtonStyle, verticalCardBoxStyle, verticalCardDescriptionStyle, verticalCardImageStyle, verticalCardTitleStyle } from "./verticalDesktopCard.styles";
import { boxTextStyle, categoryStyle, descriptionStyle, iconLikeSaveBoxStyle, iconStyle, likeSaveIconsBox, titleDescriptionStyle } from "../../NewRecipeDescktopCard/newRecipeDesktopCard.styles";
import saveIcon from './../../../../../../public/bookmarkHeart.svg'
import likeIcon from './../../../../../../public/heartEyes.svg'
import { href, useNavigate } from "react-router-dom";
import { ROUTES } from "@shared/model/routes";


export type VerticalDesktopCardProps = {
    image: string;
    title: string;
    description: string;
    category?: string[];
    likeCount?: number;
    saveCount?: number;
    categoryId?: string;
    subcategoryId?: string; 
    recipeId: string
}


export const VerticalDesktopCard = ({ image, title, description, category, likeCount, saveCount,categoryId,subcategoryId,recipeId }: VerticalDesktopCardProps) => {
    
    const navigate = useNavigate()

    return (
        <Box {...verticalCardBoxStyle}>
            <Image src={image} alt="image" {...verticalCardImageStyle} />

            <Box {...verticalCardDescriptionStyle}>

                {/*category + icons*/}
                <Box {...categoriesVerticalBoxStyle}>
                    <Box >
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

                {/*title + description*/}
                <Box {...titleDescriptionStyle}>
                    <Text {...verticalCardTitleStyle}>{title}</Text>
                    <Text {...descriptionStyle} sx={{ WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{description}</Text>
                </Box>

                {/*buttons*/}
                <Box {...buttonBoxStyle}>
                    <Button {...saveButtonStyle}>
                        Сохранить
                    </Button>

                    <Button 
                        {...cookButtonStyle } 
                        onClick = {()=>{
                            window.scrollTo(0,0)
                            navigate(href(ROUTES.RECIPE, {categoryId,subcategoryId, recipeId}))}}
                    >
                        Готовить
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}