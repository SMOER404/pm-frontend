import { Breadcrumbs } from "../../../shared/ui/Breadcrumbs";

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const { categorySlug } = params;

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: categorySlug }
      ]} />
      <h1>Категория: {categorySlug}</h1>
      <p>Здесь будет список подкатегорий.</p>
    </div>
  );
} 