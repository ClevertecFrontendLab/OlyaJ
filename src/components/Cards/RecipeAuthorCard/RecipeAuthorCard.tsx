import { Box, Image, Text, Button } from '@chakra-ui/react';

type RecipeAuthorCardType = {
    avatar: string;
    name: string;
    email: string;
    isFollowing?: number;
};

export const RecipeAuthorCard = ({ avatar, name, email, isFollowing }: RecipeAuthorCardType) => {
    return (
        <Box
            display='flex'
            flexDirection='row'
            width={{ base: '328px', md: '604px', xl: '668px' }}
            borderRadius='8px'
            bg='#C4FF61'
            p={{ base: '12px', md: '12px', xl: '24px' }}
            justifyContent='space-between'
            mt={{ base: '24px', md: '24px', xl: '40px' }}
        >
            {/* Левая часть — аватар + имя + кнопка + "Автор рецепта" (на мобилке) */}
            <Box display='flex' flexDirection='row' gap='12px'>
                <Image src={avatar} width='96px' height='96px' borderRadius='50%' />

                <Box display='flex' flexDirection='column' width='240px'>
                    {/* Автор рецепта — только на mobile */}
                    <Text
                        fontSize='12px'
                        fontWeight='500'
                        color='black'
                        display={{ base: 'block', md: 'none' }}
                        alignSelf='flex-end'
                    >
                        Автор рецепта
                    </Text>

                    <Box display='flex' flexDirection='column' justifyContent='space-between'>
                        <Text
                            fontSize={{ base: '18px', md: '24px' }}
                            fontWeight={{ base: '600', md: '700' }}
                        >
                            {name}
                        </Text>
                        <Text fontSize='14px' color='gray.700'>
                            {email}
                        </Text>

                        <Box
                            display='flex'
                            flexDirection='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Button
                                mt='8px'
                                width='114px'
                                height='28px'
                                bg='rgba(0, 0, 0, 0.92)'
                                borderRadius='6px'
                                fontSize='12px'
                                color='#FFF'
                                gap='4px'
                            >
                                <Image src={'/subscribe.png'} width='12px' height='12px' />
                                Подписаться
                            </Button>
                            <Box
                                display={{ base: 'flex', md: 'none', xl: 'none' }}
                                flexDirection='row'
                                alignItems='center'
                                gap='4px'
                            >
                                <Image src={'/people.svg'} />
                                <Text fontSize='12px' color='#2DB100'>
                                    {isFollowing}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Правая часть — Автор рецепта + подписчики (на десктопе) */}
            <Box
                display={{ base: 'none', md: 'flex' }}
                flexDirection='column'
                justifyContent='space-between'
                alignItems='flex-end'
            >
                <Text>Автор рецепта</Text>
                <Box display='flex' flexDirection='row' alignItems='center' gap='4px'>
                    <Image src={'/people.svg'} />
                    <Text fontSize='12px' color='#2DB100'>
                        {isFollowing}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};
