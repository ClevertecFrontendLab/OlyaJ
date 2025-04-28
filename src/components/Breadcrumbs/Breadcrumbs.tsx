import { Link as RouterLink, useParams, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink as ChakraLink, Box } from '@chakra-ui/react';
import { useBreadcrumb } from '~/utils/BreadcrumbsContext';
import { menuItems } from '../Sidebar/Sidebar';

export const Breadcrumbs = () => {
    const { breadcrumb } = useBreadcrumb();
    const { category, subcategory, id } = useParams();
    const location = useLocation();
    const { accordion, subItem, tab, title } = breadcrumb;

    const getFirstSubcategorySlug = (categorySlug: string) => {
        const found = menuItems.find((item) => item.slug === categorySlug);
        return found?.subItems?.[0]?.slug;
    };

    const isMostJuicy = location.pathname === '/the-juiciest';

    return (
        <Box px={4} py={2} data-test-id='breadcrumbs'>
            <Breadcrumb spacing='8px' separator='>'>
                {isMostJuicy ? (
                    <BreadcrumbItem isCurrentPage>
                        <ChakraLink as={RouterLink} to='/the-juiciest'>
                            Самое сочное
                        </ChakraLink>
                    </BreadcrumbItem>
                ) : (
                    <Box
                        display='flex'
                        flexDirection={{ base: 'column', md: 'column', xl: 'row' }}
                        gap={{ base: '4px', md: '4px', xl: '10px' }}
                    >
                        <Box display='flex' flexDirection='row' gap='6px'>
                            <BreadcrumbItem>
                                <ChakraLink as={RouterLink} to='/'>
                                    Главная
                                </ChakraLink>
                            </BreadcrumbItem>

                            {accordion && (
                                <BreadcrumbItem>
                                    <ChakraLink
                                        as={RouterLink}
                                        to={
                                            category && getFirstSubcategorySlug(category)
                                                ? `/${category}/${getFirstSubcategorySlug(category)}`
                                                : '/the-juiciest'
                                        }
                                    >
                                        {accordion}
                                    </ChakraLink>
                                </BreadcrumbItem>
                            )}
                        </Box>

                        {subItem && (
                            <BreadcrumbItem isCurrentPage>
                                <ChakraLink as={RouterLink} to={`/${category}/${subcategory}`}>
                                    {subItem}
                                </ChakraLink>
                            </BreadcrumbItem>
                        )}

                        {tab && (
                            <BreadcrumbItem isCurrentPage>
                                <ChakraLink>{tab}</ChakraLink>
                            </BreadcrumbItem>
                        )}

                        {title && id && (
                            <BreadcrumbItem isCurrentPage>
                                <ChakraLink>{title}</ChakraLink>
                            </BreadcrumbItem>
                        )}
                    </Box>
                )}
            </Breadcrumb>
        </Box>
    );
};
