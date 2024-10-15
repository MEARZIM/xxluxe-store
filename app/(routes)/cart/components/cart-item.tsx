"use client"

import React from 'react'
import { X } from 'lucide-react'
import Image from "next/image"
import { Toast } from 'react-hot-toast'

import { Product } from '@/types'
import useCart from '@/hooks/use-cart'
import { Button } from '@/components/ui/button'
import Currency from '@/components/ui/currency'

interface CartItemProps {
    data: Product
}

const CartItem = ({
    data
}: CartItemProps) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItems(data.id);
    }

    return (
        <li className='flex py-1 my-2 border-b '>
            <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
                <Image
                    fill
                    src={data.images[0].url}
                    alt="Product Image"
                    className='object-cover object-center'
                />
            </div>
            <div className='relative lt-4 flex flex-1 flex-col justify-between ml-4 sm:ml-6'>
                <div className='absolute z-10 right-0 top-0'>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        onClick={onRemove}
                    >
                        <X size={15}/>
                    </Button>
                </div>
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold text-black'>
                            {data.name}
                        </p>
                    </div>
                    <div className='mt-1 flex text-sm '>
                        <p className='text-gray-500'>{data.color.name}</p>
                        <p className='text-gray-500 ml-4 border-l border-gray-200 pl-4'>{data.size.name}</p>
                    </div>
                    <Currency value={data.price}/>
                </div>
            </div>
        </li>
    )
}

export default CartItem
