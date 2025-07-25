import { Breadcrumbs } from "../../../../../shared/ui/Breadcrumbs";

export default function BrandPage({ params }: { params: { categorySlug: string; subCategorySlug: string; brandSlug: string } }) {
  const { categorySlug, subCategorySlug, brandSlug } = params;

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: categorySlug, href: `/catalog/${categorySlug}` },
        { label: subCategorySlug, href: `/catalog/${categorySlug}/${subCategorySlug}` },
        { label: brandSlug }
      ]} />
      <h1>Бренд: {brandSlug}</h1>
      <p>Здесь будет список товаров бренда.</p>
    </div>
  );
} 