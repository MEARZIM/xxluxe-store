"use client"

import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Color, Size } from '@/types'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

import Filter from './filter'

interface MobileFiltersProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilters = ({
    sizes,
    colors
}: MobileFiltersProps) => {


    return (
        <>

            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant={"outline"}
                        className='flex items-center gap-x-2 lg:hidden'
                    >
                        Filters
                        <Plus size={20} />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Filters</DialogTitle>
                        <DialogDescription>
                            Filter out products of your choice.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='p-4'>
                        <Filter
                            valueKey="sizeId"
                            name="Sizes"
                            data={sizes}
                        />
                        <Filter
                            valueKey="colorId"
                            name="Colors"
                            data={colors}
                        />
                    </div>
                
                </DialogContent>
            </Dialog>
        </>
    )
}

export default MobileFilters
