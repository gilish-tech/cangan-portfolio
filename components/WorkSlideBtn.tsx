"use client"

import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"


import React from 'react'


interface WorkSlideBtnProps{
    containerStyles?:React.ComponentProps<'div'>["className"],
    btnStyles?:React.ComponentProps<'button'>["className"],
    iconStyles?:React.ComponentProps<'h1'>["className"],

}

const WorkSlideBtn = ({containerStyles,btnStyles,iconStyles}:WorkSlideBtnProps) => {
    const swiper = useSwiper()
  return (
    
        <div className={containerStyles}>
            <button className={btnStyles}>
                 <PiCaretLeftBold className={iconStyles} onClick={()=>swiper.slidePrev()}/>

            </button>
            <button className={btnStyles}>
                 <PiCaretRightBold className={iconStyles} onClick={()=>swiper.slideNext()}/>

            </button>

        </div>

    
  )
}

export default WorkSlideBtn