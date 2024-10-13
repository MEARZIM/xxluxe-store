import React from 'react'

import { Billboard as BillboardTypes } from '@/types'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface BillboaradProps {
    data: BillboardTypes;
}

const Billboard = ({
    data
}: BillboaradProps) => {
    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
            <div
                className='rounded-xl relative aspect-video md:aspect-[2.4/1] overflow-hidden bg-cover'
                style={{
                    backgroundImage: `url(${data?.imageUrl})`
                }}
            >
                <div className='h-full w-full flex flex-col justify-center items-center text-center gap-x-8'>
                    <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
                        <TextGenerateEffect words={data.label} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Billboard
