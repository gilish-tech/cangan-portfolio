

import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
       <div className=" container max-auto flex justify-between items-center">

       <Link href="/">
           <h1 className="text-4xl font-semibold">CYNTHIA<span className='text-accent'>_</span>CANGAN</h1>
       </Link>

       {/* desktop nav */}
       <div className="hidden xl:flex gap-3 justify-center items-center">
            <Nav/>
            <Link  href={"https://wa.me/+2349069318407"} target='_blank'>
              <Button className='flex items-center gap-1' >
                 <FaWhatsapp className='text-[18px]' />
                  Hire Me
              </Button>
            </Link>

       </div>

       {/* mobile nav  */}
       <div className="flex xl:hidden">
        <MobileNav/>
       </div>
       </div>
    </header>
  )
}

export default Header