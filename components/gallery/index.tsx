"use client"

import React from 'react'
import Image from 'next/image';
import { Image as ImageType } from '@/types'
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import GalleryTab from './gallery-tab'

interface GalleryProps {
    images: ImageType[]
}

const Gallery = ({
    images
}: GalleryProps) => {
    return (
        <TabGroup>

            <TabPanels className="aspect-square w-full">
                {
                    images.map((image) => (
                        <TabPanel key={image.id}>
                            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden '>
                                <Image
                                    fill
                                    src={image.url}
                                    alt='Product Image'
                                    className='object-cover object-center'
                                />
                            </div>
                        </TabPanel>
                    ))
                }
            </TabPanels>
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                <TabList className="grid grid-cols-6 gap-6">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </TabList>
            </div>
        </TabGroup>
    )
}

export default Gallery
