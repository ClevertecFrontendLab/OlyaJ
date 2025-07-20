import {
    Tabs,
    TabList,
    Tab,
    Box,
    Text,
  } from '@chakra-ui/react';
  import { SubCategory } from './../../../entities/categories/model/categoriesTypes'
  
  type Props = {
    subCategories: SubCategory[];
  };
  
  export const SubcategoryTabs = ({ subCategories }: Props) => {
    if (!subCategories || subCategories.length === 0) {
      return <Box mt={4}><Text>Подкатегории не найдены.</Text></Box>;
    }
  
    return (
      <Tabs variant="unstyled" colorScheme="green" mt={6}>
        <TabList gap={4} borderBottom="1px solid #e2e8f0" overflowX="auto">
          {subCategories.map((sub) => (
            <Tab
              key={sub.title}
              _selected={{
                color: 'green.600',
                borderBottom: '2px solid green',
                fontWeight: 'semibold',
              }}
              whiteSpace="nowrap"
            >
              {sub.title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    );
  };
  