import { CustomButton, CustomContainer, CustomTypography } from "@poizon/ui-kit";
import {api} from "@/shared/api";
import ProductCardList from "@/shared/ui/product-card-list/ProductCardList";

export default async function CatalogPage() {
    const popularProducts = await api.recommendations.getPopularRecommendations(4)

  return (
    <CustomContainer className='mt-10 mb-10'>
      <div className="flex items-center justify-between">
          <div className="flex">
              <div className='mr-4'>
                  <CustomButton size="sm" variant='outlined'>
                      Категория товара
                  </CustomButton>
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
              <CustomTypography variant="body" size="sm" className='text-primary-light mr-3'>
                СОРТИРОВАТЬ ПО:
              </CustomTypography>
              <CustomTypography variant="body" size="sm">
                ПОПУЛЯРНОСТИ
              </CustomTypography>
          </div>
      </div>
        <div className='mb-20 mt-20'>
            {Boolean(popularProducts.data.length) &&
                <ProductCardList
                    title='Популярные'
                    products={popularProducts.data.slice(0,4)}
                />
            }
        </div>
    </CustomContainer>
  );
} 