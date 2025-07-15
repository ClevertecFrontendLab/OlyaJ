import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    VStack,
    Text,
    Icon,
    Link,
    Spinner,
} from '@chakra-ui/react';
import { useGetAllCategoriesQuery } from '../../../entities/categories/api/categoriesApi';
import { rightSidebarStyles } from './rightSidebar.styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';


export const RightSidebar = () => {
    const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
    const navigate = useNavigate()

    return (
        <Box {...rightSidebarStyles}>

            {isLoading && <Spinner />}
            {error && <Text color="red.500">Ошибка загрузки</Text>}

            {categories && (
                <Accordion allowMultiple w="100%">
                    {categories
                        .filter((cat) => cat.subCategories && cat.subCategories.length > 0)
                        .map((cat) => (
                            <AccordionItem key={cat._id} border="none">
                                <AccordionButton
                                    px="0"
                                    _hover={{ bg: 'gray.50' }}
                                    onClick={() => {
                                        const firstSubcategory = cat.subCategories?.[0]
                                        if (firstSubcategory) {
                                            navigate(`/${cat.category}/${firstSubcategory.category}`)
                                        }
                                    }}
                                >

                                    <Box flex="1" textAlign="left">
                                        {cat.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel px="0" py={2}>
                                    <VStack align="start" spacing={1}>
                                        {cat.subCategories.map((sub) => (
                                            <RouterLink to={ROUTES.SUBCATEGORY} key={sub.category} color="gray.600">
                                                {sub.title}
                                            </RouterLink>
                                        ))}
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                </Accordion>
            )}



            {/* Нижняя часть: футер и "выйти" */}
            <Box fontSize="xs" color="gray.400" mt={8}>
                <Text mb={2}>Версия программы 03.25</Text>
                <Text mb={4}>
                    Все права защищены, ученический файл,<br />
                    ©Клевер Технолоджи, 2025
                </Text>

                <Link display="flex" alignItems="center" gap="2" fontSize="sm" color="black" cursor="pointer">
                    <Icon />
                    Выйти
                </Link>
            </Box>
        </Box>
    );
};
