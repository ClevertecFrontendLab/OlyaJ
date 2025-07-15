import { useParams } from 'react-router-dom';

function SubcategoryPage() {
    const { categoryId, subcategoryId } = useParams();

  return (
    <div>
      <h1>Категория: {categoryId}</h1>
      <h2>Подкатегория: {subcategoryId}</h2>
    </div>
  );
}

export const Component = SubcategoryPage;
