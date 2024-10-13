import React from 'react'

import { Product } from '@/types'
import Heading from '@/components/ui/heading';
import NoResults from '@/components/ui/no-result';
import ProductCard from './ui/product-card';

interface ProductListProps {
    title: string;
    description: string;
    items: Product[];
}

const ProductList = ({
    title,
    description,
    items
}: ProductListProps) => {
    return (
        <>
            <Heading
                title={title}
                description={description}
            />
            {
                items.length === 0 && <NoResults />
            }
            <div className='grid mx-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {items.map((item) =>(
                    <ProductCard key={item.id} data={item}/>
                ))}
            </div>
        </>
    )
}

export default ProductList
