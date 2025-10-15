"use client"

import React from 'react'
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from 'framer-motion';
import {SERVICES_RENDERED} from "@/constants"
import Link from 'next/link'


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-6'>
      <div className="container  mx-auto ">
        {/* mdiv */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            {
              SERVICES_RENDERED.map((service,index)=>(
                <div key={index} className='flex flex-col justify-center gap-6 group'>
                  <div className="w-full flex justify-between items-center">

                    <div className="text-5xl font-extrabold text-transparent text-outline
                    group-hover:text-outline-hover traansition-all duration-500">{service.num}</div>
                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                        transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                        <BsArrowDownRight className='text-primary text-xl'/>
                    
                    </Link>
                   
                  </div>
                     <h2 className='text-[42px] font-bold leading-none
                     text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                    <p className='text-white/60'>{service.description}</p>

                    <div className="border-b border-white/20 w-full"></div>

                </div>
              ))
            }


           {/* mdiv  */}
          </motion.div>
      </div>

    </section>
  )
}




export default Services