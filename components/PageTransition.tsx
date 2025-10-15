"use client"

import React from 'react'
import {AnimatePresence,motion} from "framer-motion"
import { usePathname } from 'next/navigation'
const PageTransition = ({children}:{children:React.ReactNode}) => {
    const pathname = usePathname()
  return (
            <AnimatePresence >
                <div key={pathname}>
                    <motion.div 
                    className='fixed top-0 bg-primary w-screen h-screen pointer-events-none'
                    initial={{opacity:1}} animate={{opacity:0}} transition={{delay:1,duration:0.4,ease:"easeInOut" }}>
                    </motion.div>
                            {children}
      
                </div>
            </AnimatePresence>

  )
}

export default PageTransition