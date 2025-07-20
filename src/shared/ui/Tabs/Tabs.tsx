import {
    Tabs,
    TabList,
    Tab,
} from '@chakra-ui/react';
import { SubCategory } from './../../../entities/categories/model/categoriesTypes'
import { Link, href, useParams } from 'react-router-dom';
import { ROUTES } from '@shared/model/routes';
import { tabListStyle } from './tabsStyles';

type Props = {
    subCategories: SubCategory[];
};

export const SubcategoryTabs = ({ subCategories }: Props) => {
    const { subcategoryId, categoryId } = useParams()


    return (
        <Tabs index={subCategories.findIndex(subCat => subCat.category === subcategoryId)} variant="unstyled" colorScheme="green" mt={6}>
            <TabList
                {...tabListStyle}
                sx={{
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {subCategories.map((sub) => (
                    <Tab
                        key={sub.title}
                        as={Link}
                        to={href(ROUTES.SUBCATEGORY, { categoryId: categoryId!, subcategoryId: sub.category })}
                        _selected={{
                            color: 'green.600',
                            borderBottom: '2px solid green',
                            fontWeight: 'semibold',
                        }}
                        _focus={{ boxShadow: 'none', outline: 'none' }}
                        whiteSpace="nowrap"
                    >
                        {sub.title}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};
