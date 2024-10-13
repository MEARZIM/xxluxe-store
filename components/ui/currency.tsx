"use client"

import React, { useEffect, useState } from 'react'

export const formatter = new Intl.NumberFormat("en-IN", {
    style: 'currency',
    currency: 'INR',
})

interface CurencyProps {
    value?: number | string;
}

const Currency = ({ value }: CurencyProps) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    
    return (
        <div className='font-semibold'>
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency
