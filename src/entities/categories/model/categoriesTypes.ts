export type SubCategory = {
    title: string;
    category: string;
    rootCategoryId: string;
  };
  
  export type CategoryResponse = {
    _id: string;
    title: string;
    category: string;
    icon: string;
    description: string;
    subCategories: SubCategory[];
  };
  