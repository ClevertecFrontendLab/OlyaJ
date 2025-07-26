import { Box, Button, Image, Text } from '@chakra-ui/react';
import {
    buttonBoxStyle,
    categoriesVerticalBoxStyle,
    cookButtonStyle,
    saveButtonStyle,
    verticalCardBoxStyle,
    verticalCardDescriptionStyle,
    verticalCardImageStyle,
    verticalCardTitleStyle,
} from './verticalDesktopCard.styles';
import {
    boxTextStyle,
    categoryStyle,
    descriptionStyle,
    iconLikeSaveBoxStyle,
    iconStyle,
    likeSaveIconsBox,
    titleDescriptionStyle,
} from '../../NewRecipeDescktopCard/newRecipeDesktopCard.styles';
import saveIcon from './../../../../../../public/bookmarkHeart.svg';
import likeIcon from './../../../../../../public/heartEyes.svg';
import { Link, href } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';

export type VerticalDesktopCardProps = {
    image: string;
    title: string;
    description: string;
    category: string[];
    likeCount?: number;
    saveCount?: number;
    categoryId: string | undefined;
    subcategoryId: string | undefined;
    recipeId: string | undefined;
};

export const VerticalDesktopCard = ({
    image,
    title,
    description,
    category,
    likeCount,
    saveCount,
    categoryId,
    subcategoryId,
    recipeId,
}: VerticalDesktopCardProps) => {
    return (
        <Box {...verticalCardBoxStyle}>
            <Image src={image} alt='image' {...verticalCardImageStyle} />

            <Box {...verticalCardDescriptionStyle}>
                {/*category + icons*/}
                <Box {...categoriesVerticalBoxStyle}>
                    <Box>
                        {category?.map((catTitle) => (
                            <Box {...boxTextStyle}>
                                <Text {...categoryStyle}>{catTitle}</Text>
                            </Box>
                        ))}
                    </Box>

                    <Box {...likeSaveIconsBox}>
                        <Box {...iconLikeSaveBoxStyle}>
                            <Image src={saveIcon} alt='icon' {...iconStyle} />
                            <Text>{saveCount}</Text>
                        </Box>

                        <Box {...iconLikeSaveBoxStyle}>
                            <Image src={likeIcon} alt='icon' {...iconStyle} />
                            <Text>{likeCount}</Text>
                        </Box>
                    </Box>
                </Box>

                {/*title + description*/}
                <Box {...titleDescriptionStyle}>
                    {categoryId && subcategoryId && recipeId ? (
                        <Link to={href(ROUTES.RECIPE, { categoryId, subcategoryId, recipeId })}>
                            <Text {...verticalCardTitleStyle}>{title}</Text>
                        </Link>
                    ) : (
                        <Text {...verticalCardTitleStyle}>{title}</Text>
                    )}

                    <Text
                        {...descriptionStyle}
                        sx={{ WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                    >
                        {description}
                    </Text>
                </Box>

                {/*buttons*/}
                <Box {...buttonBoxStyle}>
                    <Button {...saveButtonStyle}>Сохранить</Button>

                    {categoryId && subcategoryId && recipeId ? (
                        <Link
                            to={href(ROUTES.RECIPE, { categoryId, subcategoryId, recipeId })}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <Button {...cookButtonStyle}>Готовить</Button>
                        </Link>
                    ) : (
                        <Button {...cookButtonStyle} isDisabled>
                            Готовить
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
