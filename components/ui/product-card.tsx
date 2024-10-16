"use client"

import React, { MouseEventHandler, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Expand, ShoppingBag } from 'lucide-react'

import { Product } from '@/types'
import useCart from '@/hooks/use-cart'
import { Button } from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import { usePreviewModal } from '@/hooks/use-preview-modal'

interface ProductCardProps {
    data: Product
}

const ProductCard = ({
    data
}: ProductCardProps) => {
    const router = useRouter();
    const cart = useCart();
    const previewModal = usePreviewModal();

    const handelClick = () => {
        router.push(`/product/${data.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItems(data);
    }

    return (
        <>

            <div
                className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-100 shadow-md"
                onClick={handelClick}
            >
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
                    <img
                        className="peer absolute top-0 right-0 h-full w-full object-cover"
                        src={data.images[0].url}
                        alt="product image"
                    />
                    {/* <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" /> */}
                    <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                        <div className='flex gap-x-6 justify-center'>
                            <Button
                                variant={"secondary"}
                                onClick={onPreview}
                            >
                                <Expand size={22} className='text-black' />
                            </Button>
                            <Button
                                variant={"secondary"}
                                onClick={onAddToCart}
                            >
                                <ShoppingBag size={22} className='text-black' />
                            </Button>
                        </div>
                    </div>
                    {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-black">39% OFF</span> --> */}
                </div>
                <div className="mt-4 px-5 pb-5">

                    <h5 className="text-lg font-semibold lg:text-xl tracking-tight text-black">
                        {data.name}
                    </h5>
                    <p className='text-sm text-gray-500'>
                        {data.category.name}
                    </p>

                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-lg font-bold text-black">
                                <Currency value={data.price} />
                            </span>
                            {/* <span className="text-sm text-black line-through">$699</span> */}
                        </p>
                    </div>
                    <Button
                        className="hover:border-white/40 w-full flex items-center gap-x-1 justify-center rounded-md border border-transparent bg-blue-600 hover:bg-blue-800 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={onAddToCart}
                    >
                        <ShoppingBag size={15} />
                        <span>
                            Add to cart
                        </span>
                    </Button>
                </div>
            </div>


        </>
    )
}

export default ProductCard
