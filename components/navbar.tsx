import React from 'react'
import Link from 'next/link'

import MainNav from './main-nav'
import NavbarActions from './navbar-actions'
import Container from '@/components/ui/container'
import getCategories from '@/actions/get-categories'

const Navbar = async () => {
    const catgories = await getCategories();

    return (
        <>
            <nav className='border-b'>
                <Container>
                    <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                        <Link href={"/"} className='ml-4 flex lg:ml-0 gap-x-2'>
                            <p className='font-bold text-xl'>
                                STORE
                            </p>
                        </Link>
                        <MainNav data={catgories}/>
                        <NavbarActions />
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar
