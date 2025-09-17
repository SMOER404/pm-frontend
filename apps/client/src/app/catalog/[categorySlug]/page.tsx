
export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const { categorySlug } = params;

  return (
      <div>category page</div>
    // <CustomContainer>
    //   <Breadcrumbs items={[
    //     { label: "Каталог", href: "/catalog" },
    //     { label: categorySlug }
    //   ]} />
    //   <CustomTypography variant="h1" className="mt-6 mb-4">
    //     Категория: {categorySlug}
    //   </CustomTypography>
    //   <CustomTypography variant="body" size="md">
    //     Здесь будет список подкатегорий.
    //   </CustomTypography>
    // </CustomContainer>
  );
} 