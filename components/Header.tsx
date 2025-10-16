

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
            {/* <Link  href={""} target='_blank'> */}
            <Link  href={"mailto:cangancynthia@gmail.com?subject=Hiring%20Inquiry%20for%20[Your%20Name]&body=Hello%20%2D%20I%27m%20interested%20in%20hiring%20you.%20Please%20reply%20with%20your%20availability%20and%20rates.%0A%0AThanks%2C%0A%5BClient%20Name%5D"} target='_blank'>
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