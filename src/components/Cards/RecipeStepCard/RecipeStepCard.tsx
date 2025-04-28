import { Box, Image, Text } from '@chakra-ui/react';

type RecipeStepCardType = {
    image: string;
    step: string;
    description: string;
    withImage?: boolean;
};

export const RecipeStepCard = ({ image, step, description, withImage }: RecipeStepCardType) => {
    return (
        <Box
            display='flex'
            width='100%'
            height='100%'
            flexDirection='row'
            borderRadius='8px'
            border='1px solid rgba(0, 0, 0, 0.08)'
            overflow='hidden'
        >
            {withImage && (
                <Image
                    src={image}
                    width={{ base: '138px', md: '158px', xl: '346px' }}
                    height={{ base: '134px', md: '128px', xl: '224px' }}
                    objectFit='cover'
                />
            )}

            <Box
                display='flex'
                flexDirection='column'
                m={{ base: '8px', md: '8px', xl: '24px' }}
                gap={{ base: '12px', md: '12px', xl: '16px' }}
                maxHeight={{ base: '112px', md: '120px', xl: '208px' }}
                overflowY={{ base: 'auto' }}
            >
                <Box
                    height='24px'
                    bg='rgba(0, 0, 0, 0.06)'
                    px='8px'
                    width='fit-content'
                    borderRadius='4px'
                >
                    <Text fontSize='14px' fontWeight='400'>
                        {step}
                    </Text>
                </Box>

                <Text fontSize='14px'>{description}</Text>
            </Box>
        </Box>
    );
};
