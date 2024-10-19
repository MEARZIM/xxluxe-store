"use client"

import axios from 'axios';
import React, { MouseEventHandler } from 'react'
import { ShoppingCart, Zap } from 'lucide-react';

import { Product } from '@/types'
import { Button } from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import { Separator } from '@/components/ui/separator';
import useCart from '@/hooks/use-cart';

interface ProductDescriptionProps {
  data: Product;
}

const ProductDescription = ({
  data
}: ProductDescriptionProps) => {
  const cart = useCart();

  const onBuyNow = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productsIds: [data.id]
    })
    window.location = response.data.url;
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItems(data);
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>
        {data.name}
      </h1>
      <Separator className='my-5' />
      {/* Price */}
      <div className='mt-3 flex items-center justify-between'>
        <p className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </p>
      </div>

      <div className='flex flex-col gap-y-5 my-5'>
        {/* Size */}
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold test-black'>{"Size:"}</h3>
          <div>
            {data.size.name}
          </div>
        </div>
        {/* Color */}
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold test-black'>{"Color:"}</h3>
          <div className='flex gap-2 items-center'>
            {data.color.name}
            <div
              className='h-6 w-6 rounded-full border border-gray-600'
              style={{
                backgroundColor: data.color.value
              }}
            />
          </div>
        </div>
        {/* Buttons Section */}
        <div className='mt-10 flex flex-col items-start gap-3'>
          <Button
            variant={"default"}
            className="w-[50%] flex items-center gap-x-1 justify-center rounded-lg border border-transparent bg-blue-600 hover:bg-blue-800 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={onAddToCart}
          >
            <span className='px-2'> Add To Cart </span>
            <ShoppingCart size={20} />
          </Button>

          <Button
            onClick={onBuyNow}
            variant={"default"}
            className="w-[50%] flex items-center gap-x-1 justify-center rounded-lg border border-transparent bg-red-500 hover:bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-red-400"
          >
            <span className='px-2'> Buy Now </span>
            <Zap size={20} color={"yellow"} />
          </Button>
        </div>
      </div>

    </div>
  )
}

export default ProductDescription
