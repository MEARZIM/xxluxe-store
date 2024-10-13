"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/libs/utils'
import { Category } from '@/types'

interface MainNavProps {
    data: Category[]
}

const MainNav = ({
    data
}: MainNavProps) => {
    const pathname = usePathname();

    const routes = data.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <div className='mx-6 items-center space-x-4 lg:space-x-6'>
            {
                routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-black",
                            route.active ? "text-black" : "text-neutral-500"
                        )}
                    >
                        {route.label}
                    </Link>
                ))
            }
        </div>
    )
}

export default MainNav
