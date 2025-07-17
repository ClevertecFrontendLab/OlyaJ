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
  Image,
} from '@chakra-ui/react';
import { useGetAllCategoriesQuery } from '../../../entities/categories/api/categoriesApi';

import { Link as RouterLink, href, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { getLeftSidebarStyles } from './leftSidebar.styles';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';


type SidebarVariant = 'desktop' | 'mobile'

export type LeftSidebarProps = {
  variant?: SidebarVariant;
  onClose?: () => void
}

export const LeftSidebar = ({ variant = 'desktop', onClose }: LeftSidebarProps) => {
  const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box {...getLeftSidebarStyles(variant)}
    >
      {isLoading && <Spinner />}
      {error && <Text color="red.500">Ошибка загрузки</Text>}

      {categories && (
        <Accordion w="100%">
          {variant === 'mobile' && (
            <Box mb={4}>
              <Breadcrumbs />
            </Box>
          )}

          {categories
            .filter((cat) => cat.subCategories && cat.subCategories.length > 0)
            .map((cat) => {
              const isCategoryOpen = currentPath.includes(`/${cat.category}/`);

              return (
                <AccordionItem key={cat._id} border="none">
                  <AccordionButton
                    px="0"
                    _hover={{ bg: '#E9FDD2' }}
                    bg={isCategoryOpen ? '#E9FDD2' : 'transparent'}
                    onClick={() => {
                      const firstSubcategory = cat.subCategories?.[0];
                      if (firstSubcategory) {
                        navigate(
                          href(ROUTES.SUBCATEGORY, {
                            categoryId: cat.category,
                            subcategoryId: firstSubcategory.category,
                          })
                        );
                      }
                    }}
                  >
                    <Box flex="1" textAlign="left" display="flex" alignItems="center" gap={2}>
                      {cat.icon && (
                        <Image
                          src={`https://training-api.clevertec.ru${cat.icon}`}
                          alt={cat.title}
                          w='24px'
                          h='24px'
                          objectFit="contain"
                        />
                      )}
                      {cat.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel px="0" py={2}>
                    <VStack align="start" spacing={1}>
                      {cat.subCategories.map((sub) => {
                        const path = href(ROUTES.SUBCATEGORY, {
                          categoryId: cat.category,
                          subcategoryId: sub.category,
                        });

                        const isActive = currentPath === path;

                        return (
                          <RouterLink
                            to={path}
                            key={sub.category}
                            style={{ width: '100%' }}
                          >
                            <Box
                              fontWeight={isActive ? 'bold' : 'normal'}
                              pl="2"
                              borderLeft={
                                isActive
                                  ? '4px solid #9BEA23'
                                  : '3px solid transparent'
                              }
                              color={isActive ? 'black' : 'gray.600'}
                              py="1"
                              transition="all 0.2s ease"
                            >
                              {sub.title}
                            </Box>
                          </RouterLink>
                        );
                      })}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
      )}

      {/* Нижняя часть: футер и "выйти" */}
      <Box fontSize="xs" color="gray.400" mt={8}>
        <Text mb={2}>Версия программы 03.25</Text>
        <Text mb={4}>
          Все права защищены, ученический файл,
          <br />
          ©Клевер Технолоджи, 2025
        </Text>

        <Link
          display="flex"
          alignItems="center"
          gap="2"
          fontSize="sm"
          color="black"
          cursor="pointer"
        >
          <Icon />
          Выйти
        </Link>
      </Box>
    </Box>
  );
};
