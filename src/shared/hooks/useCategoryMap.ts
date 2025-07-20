import { useMemo } from "react";
import { useGetAllCategoriesQuery } from "./../../entities/categories/api/categoriesApi"

export const useCategoryMap = () => {
  const { data: categories, ...rest } = useGetAllCategoriesQuery();

  const categoryMap = useMemo(() => {
    const map: Record<string, string> = {};
    categories?.forEach(({ _id, title, subCategories }) => {
      map[_id] = title;
      subCategories?.forEach(({ _id: subId, title: subTitle }) => {
        map[subId] = subTitle;
      });
    });
    return map;
  }, [categories]);

  return { categoryMap, categories, ...rest };
};
