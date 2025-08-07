import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { CustomContainer, CustomTypography } from "@poizon/ui-kit";

export default function SubCategoryPage({ params }: { params: { categorySlug: string; subCategorySlug: string } }) {
  const { categorySlug, subCategorySlug } = params;

  return (
    <CustomContainer>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: categorySlug, href: `/catalog/${categorySlug}` },
        { label: subCategorySlug }
      ]} />
      <CustomTypography variant="h1" className="mt-6 mb-4">
        Подкатегория: {subCategorySlug}
      </CustomTypography>
      <CustomTypography variant="body" size="md">
        Здесь будет список брендов.
      </CustomTypography>
    </CustomContainer>
  );
} 