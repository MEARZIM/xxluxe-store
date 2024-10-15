"use client"

import React, { 
    useState,
    useEffect 
} from 'react'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'
import useCart from '@/hooks/use-cart'

const NavbarActions = () => {

    const cart = useCart();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if (!isMounted) {
        return null; 
    }

    return (
        <div className='ml-auto flex items-center gap-x-4'>
            <Button
                variant={"link"}
                className='flex items-center rounded-full bg-black px-4 py-2 transition hover:opacity-75'
                onClick={() => router.push("/cart")}
            >
                <ShoppingBag
                    size={20}
                    color='white'
                />
                <span className='ml-2 text-sm font-medium text-white'>
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions
