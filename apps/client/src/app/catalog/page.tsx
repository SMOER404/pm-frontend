import { Button, CustomButton, Menu, MenuItem, Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from "@poizon/ui-kit";
import {api} from "@/shared/api";
import ProductCardList from "@/shared/ui/product-card-list/ProductCardList";

export default async function CatalogPage() {
    const popularProducts = await api.recommendations.getPopularRecommendations(4)

    const categories = await api.categories.getAllCategories()

    const categoriesList = categories.data.filter((category) => category.parentId)

    console.log(categoriesList)

  return (
    <div className='container mx-auto mt-10 mb-10'>
      <div className="flex items-center justify-between">
          <div className="flex">
              <div className='mr-4'>
              <Select>
                <SelectTrigger className="w-56">
                    <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" align="start" sideOffset={4}>
                    {categoriesList.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                        {category.name}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
              </div>
              <div className='mr-4'>
                  <CustomButton size="sm" variant='outlined'>
                      Бренд
                  </CustomButton>
              </div>
              <div className='mr-4'>
                  <CustomButton size="sm" variant='outlined'>
                      Размер
                  </CustomButton>
              </div>
              <div className='mr-4'>
                  <CustomButton size="sm" variant='outlined'>
                      Пол
                  </CustomButton>
              </div>
              <div className='mr-4'>
                  <CustomButton size="sm" variant='outlined'>
                      Цена
                  </CustomButton>
              </div>
          </div>
          <div className='flex items-center'>
              <CustomTypography type="body" size="sm" className='text-primary-light mr-3'>
                СОРТИРОВАТЬ ПО:
              </CustomTypography>
              <CustomTypography type="body" size="sm">
                ПОПУЛЯРНОСТИ
              </CustomTypography>
          </div>
      </div>
        {(() => {
            const popular = Array.isArray((popularProducts as any).data) ? (popularProducts as any).data as any[] : []
            return (
                <div className='mb-20 mt-20'>
                    {popular.length > 0 && (
                        <ProductCardList
                            title='Популярные'
                            products={popular.slice(0,4) as any}
                        />
                    )}
                </div>
            )
        })()}
    </div>
  );
} 