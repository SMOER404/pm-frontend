import { Breadcrumbs } from "../../../shared/ui/Breadcrumbs";
import { CustomContainer, CustomTypography } from "@poizon/ui-kit";

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const { categorySlug } = params;

  return (
    <CustomContainer>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: categorySlug }
      ]} />
      <CustomTypography variant="h1" className="mt-6 mb-4">
        Категория: {categorySlug}
      </CustomTypography>
      <CustomTypography variant="body" size="md">
        Здесь будет список подкатегорий.
      </CustomTypography>
    </CustomContainer>
  );
} 