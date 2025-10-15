"use client"

import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'
const StairEffects = () => {
  const pathname = usePathname()
  return (
    <>
    <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className="fixed flex  w-screen h-screen top-0 left-0 right-0 z-40  pointer-events-none  ">
            <Stairs/>

          </div>

          <motion.div className="w-screen h-screen fixed bg-red-600 top-0 pointer-events-none"
          initial={{opacity:1}} animate={{opacity:0, transition:{delay:0, duration:0.4, ease:"easeInOut"}}}>
            
          </motion.div>
        </div>
    </AnimatePresence>
    </>
  )
}

export default StairEffects