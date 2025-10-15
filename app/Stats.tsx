"use client"
import Countup from "react-countup"
import React from 'react'



const stats = [
    {
        num:9,
        text:"Years of experience"
    },
    {
        num:30,
        text:"projects completed"
    },
    {
        num:8,
        text:"Technologies maastered"
    },
    {
        num:3000,
        text:"Code Commits"
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 xl:mb-4" >
        <div className="container mx-auto">

        <div className="flex flex-wrap gap-6 max-w-[88vw] max-auto xl:max-w-none">
        {   


            stats.map((item,index)=>(
                <div className="flex-1 flex gap-4 items-center justify-center" key={index}  >

                <div className="flex text-4xl xl:text-6xl font-extrabold">
                    <Countup end={item.num} duration={5} delay={2}  />
                    <p>+</p>
                </div>
                <p className={`${ item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                leading-snug text-white/80`}>{item.text}</p>
                </div>

            ))
        }

        </div>
        </div>
    </section>
  )
}

export default Stats