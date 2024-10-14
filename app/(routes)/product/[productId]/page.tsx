import React from 'react'

import Gallery from '@/components/gallery';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products'
import Container from '@/components/ui/container';
import ProductList from '@/components/product-list';
import { Separator } from "@/components/ui/separator"
import ProductDescription from '@/components/product-description';

const SingleProductPage = async ({
  params
}: {
  params: {
    productId: string,
  }
}) => {

  const product = await getProduct(params.productId);

  const suggestedProduct = await getProducts({
    categoryId: product.category.id,
  })

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <div>
              <Gallery images={product.images} />
            </div>

            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              <ProductDescription data={product}/>
            </div>
          </div>
          <Separator className='my-10' />

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-6">
            <ProductList
              title={'Suggested Products'}
              description={'Explore more handpicked products tailored just for you!'}
              items={suggestedProduct}
            />
          </div>

        </div>
      </Container>
    </div>
  )
}

export default SingleProductPage
