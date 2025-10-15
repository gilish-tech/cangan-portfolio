"use client"

import React from 'react'
import { Sheet,SheetContent,SheetTrigger,SheetDescription,SheetHeader,SheetTitle    } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import {LINKS} from "@/constants"
const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet >
      <SheetTrigger>
        <CiMenuFries className='text-accent text-3xl'/>
      </SheetTrigger>

      <SheetContent className='flex flex-col '>
            <div className="mt-32 mb-40 text-2xl text-center">
              <Link href=".">
                  <h1 className='text-4xl'>

                     Gilish<span className='text-accent'>_</span>Tech
                  </h1>
              </Link>
            </div>

               <nav className=" flex flex-col justify-center items-center gap-8">
                   {
                    LINKS.map((link,index)=>(
                      <Link key={index} href={link.path}
                      className={`translation-all hover:text-accent text-xl capitalize ${link.path == pathname && "text-accent border-b-2 border-accent "}`}>{link.name}</Link>

                    ))
                   }

               </nav>
      </SheetContent>

    </Sheet>
  )
}

export default MobileNav