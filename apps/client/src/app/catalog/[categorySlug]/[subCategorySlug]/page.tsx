import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";

export default function SubCategoryPage({ params }: { params: { categorySlug: string; subCategorySlug: string } }) {
  const { categorySlug, subCategorySlug } = params;

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: categorySlug, href: `/catalog/${categorySlug}` },
        { label: subCategorySlug }
      ]} />
      <h1>Подкатегория: {subCategorySlug}</h1>
      <p>Здесь будет список брендов.</p>
    </div>
  );
} 