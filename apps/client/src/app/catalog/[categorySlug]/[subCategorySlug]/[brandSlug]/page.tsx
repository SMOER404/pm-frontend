import { Breadcrumbs } from "../../../../../shared/ui/Breadcrumbs";
import { CustomContainer, CustomTypography } from "@poizon/ui-kit";

export default function BrandPage({ params }: { params: { categorySlug: string; subCategorySlug: string; brandSlug: string } }) {
  const { categorySlug, subCategorySlug, brandSlug } = params;

  return (
    <CustomContainer>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: categorySlug, href: `/catalog/${categorySlug}` },
        { label: subCategorySlug, href: `/catalog/${categorySlug}/${subCategorySlug}` },
        { label: brandSlug }
      ]} />
      <CustomTypography variant="h1" className="mt-6 mb-4">
        Бренд: {brandSlug}
      </CustomTypography>
      <CustomTypography variant="body" size="md">
        Здесь будет список товаров бренда.
      </CustomTypography>
    </CustomContainer>
  );
} 