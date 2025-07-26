import { Box, Button, Image, Text } from '@chakra-ui/react';
import {
    buttonVerticalCardStyle,
    buttonVerticalCardTabletStyle,
    imageVerticalCardTabletStyle,
    titleIconsStyle,
    titleStyle,
    verticalCardTabletStyles,
    verticalCardTitleStyle,
} from './verticalTabletCard.styles';
import {
    iconLikeSaveBoxStyle,
    iconStyle,
    likeSaveIconsBox,
} from '../../NewRecipeDescktopCard/newRecipeDesktopCard.styles';
import saveIcon from './../../../../../../public/bookmarkHeart.svg';
import likeIcon from './../../../../../../public/heartEyes.svg';
import saveButton from './../../../../../../public/saveButton.png';
import { Link, href } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';

type VerticalTabletCardProps = {
    image: string;
    title: string;
    likeCount?: number;
    saveCount?: number;
    categoryId?: string;
    subcategoryId?: string;
    recipeId?: string;
};

export const VerticalTabletCard = ({
    image,
    title,
    likeCount,
    saveCount,
    recipeId,
    categoryId,
    subcategoryId,
}: VerticalTabletCardProps) => {
    return (
        <Box {...verticalCardTabletStyles}>
            <Image src={image} alt='image' {...imageVerticalCardTabletStyle} />

            <Box {...verticalCardTitleStyle}>
                <Box {...titleIconsStyle}>
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

                    <Box>
                        {categoryId && subcategoryId && recipeId ? (
                            <Link
                                to={href(ROUTES.RECIPE, { categoryId, subcategoryId, recipeId })}
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <Text {...titleStyle}>{title}</Text>
                            </Link>
                        ) : (
                            <Text {...titleStyle}>{title}</Text>
                        )}
                    </Box>
                </Box>

                <Box {...buttonVerticalCardStyle}>
                    <Image src={saveButton} alt='save' w='24px' h='24px' />

                    {categoryId && subcategoryId && recipeId ? (
                        <Link
                            to={href(ROUTES.RECIPE, { categoryId, subcategoryId, recipeId })}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <Button {...buttonVerticalCardTabletStyle}>Готовить</Button>
                        </Link>
                    ) : (
                        <Button {...buttonVerticalCardTabletStyle} isDisabled>
                            Готовить
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};
