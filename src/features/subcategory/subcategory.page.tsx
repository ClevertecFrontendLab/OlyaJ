import { PageHeader } from "./../../widgets/PageHeader/PageHeader";
import { SubcategoryTabs } from "@shared/ui/Tabs/Tabs";
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi";
import { useParams } from "react-router-dom";
import { Box, Spinner, Text } from "@chakra-ui/react";

function SubcategoryPage() {
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery();
  const { categoryId } = useParams();

  if (isLoading) return <Spinner />;
  if (isError || !categories) return <Text>Ошибка загрузки категорий</Text>;

  const currentCategory = categories.find(cat => cat.category === categoryId);

  if (!currentCategory) return <Text>Категория не найдена</Text>;

  return (
    <Box>
      <PageHeader />
      <SubcategoryTabs subCategories={currentCategory.subCategories} />
    </Box>
  );
}

export const Component = SubcategoryPage;
