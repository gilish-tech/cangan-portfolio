"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger  } from '@/components/ui/tooltip';
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion';
import { Swiper as sp } from 'swiper/types';
import WorkSlideBtn from "@/components/WorkSlideBtn"



const projects=[
  {
    num:"01",
    category:"frontend",
    title:"Furniture Web app",
    description:"This website is inspired by the captivating design of Zentry. It showcases scroll-triggered animations, geometric transitions, and engaging video storytelling.This project serves as a learning resource, demonstrating techniques to achieve a luxurious, modern user experience with smooth responsiveness.",
    stack: [{name:"React"},{name:"Tailwind CSS"},{name:"GSAP"}],
    image:"/work/animation-stuff.png",
    github:"https://github.com/gilish-tech/animation-zentry-",
    live:"https://ticketbooking-int.netlify.app"

  },
  {
    num:"02",
    category:"frontend",
    title:"Furniture Web app",
    description:"This creative home solution reimagines furniture with simplicity and elegance at its core. Designed to bring harmony to living spaces, it offers sleek, multifunctional pieces that blend seamlessly into any aesthetic while maximizing utility. Each piece is crafted with minimalism in mind, focusing on clean lines, neutral tones, and space-saving designs that elevate both functionality and style. Whether it’s a modular sofa that transforms for guests, a foldable dining set for compact living, or shelves that double as artistic decor, this approach simplifies furniture without compromising on comfort or beauty. It’s more than just furniture—it’s a lifestyle choice that celebrates modern, clutter-free living",
    stack: [{name:"HTML 5"},{name:"CSS 3"},{name:"JAVASCRIPT"}],
    image:"/work/thumb1.png",
    github:"",
    live:""

  },
  {
    num:"03",
    category:"WEB3",
    title:"NFT MARKET PLACE",
    description:"This a blockchain-based website designed to simplify interaction with an on-chain marketplace deployed on the Sepolia testnet. It aims to provide an intuitive experience for non-Web3 and non-technical users",
    stack: [{name:"Next js"},{name:"Solidity"},{name:"Wagmi"}],
    image:"/work/blockchain-web3.PNG",
    github:"https://github.com/gilish-tech",
    live:"https://gilish-market.vercel.app/"

  },
  {
    num:"04",
    category:"FULL STACK DEVELOPMENT",
    title:"SOCIAL MEDIA APP",
    description:"This social media app connects users through creative expression, letting them share high-quality images with captions, tags, and filters. It features friend requests, real-time notifications, and engaging stories with customizable videos or images. The app offers a modern, user-friendly way to share and stay connected.",
    stack: [{name:"Next js"},{name:"Clerk"},{name:"Cloudinary"}],
    image:"/work/social-media.png",
    github:"https://github.com/gilish-tech/Social-Networking--app-",
    live:""

  },
  {
    num:"05",
    category:"FULL STACK DEVELOPMENT",
    title:"ECommerce WebAPP (Flipkart Webscraping)",
    description:"This e-commerce platform is a cutting-edge solution designed to revolutionize online shopping by leveraging advanced web scraping technology. It seamlessly extracts product data from Flipkart, including details such as pricing, descriptions, reviews, and images, and integrates it into a visually appealing and user-friendly interface.",
    stack: [{name:"Django"},{name:"React"},{name:"Material UI"}],
    image:"/work/ecom-image.png",
    github:"#",
    live:"https://gilish-tech.netlify.app/"

  },
  {
    num:"06",
    category:"FULL STACK DEVELOPMENT",
    title:"Gilish tech blog",
    description:"Gilish Tech Blog is a simple yet powerful project designed with SEO in mind. It leverages Next.js for the frontend and FastAPI for the backend to create a seamless and efficient blogging platform. The blog combines the capabilities of web scraping, specifically from Gistlover, to curate content dynamically. This scraped content is processed and optimized for SEO, ensuring better visibility and ranking on search engines.",
    stack: [{name:"FastApi"},{name:"NEXT JS"},{name:"Tailwind Css"}],
    image:"/work/gilish-blog.png",
    github:"#",
    live:"https://gilish-tech-blog.vercel.app/"

  }
]





const Work = () => {
  const [project,setProject] = useState(projects[0])
  const handleSwipeChange =  (swiper:sp)=>{
      const currentIndex = swiper.activeIndex
      setProject(projects[currentIndex])
    
  }
  return (
     <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4, ease:"easeIn"}}}
        className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-6 '>
       <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row xl:gap-[30px] " >
            <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col
              xl:justify-between order-2 xl:order-none">
              <div className='flex flex-col gap-[30px]  h-1/2'>
                 {/* outline-num */}
                 <div className="text-8xl leading-none font-extrabold
                   text-transparent text-outline">
                      {project.num}
                  </div>
                  <h2 className='text-[42px] font-bold leading-none text-white
                    group-hover:text-accent transition-all duration-500 capitalize'>{project.category}
                  </h2>
                  {/* project description  */}
                  <p className='text-white/60'>{project.description}</p>
                  <ul className='flex gap-4'>
                     {project.stack.map((proj,index)=>(
                       <li key={index} className='text-xl text-accent'>{proj.name}
                          {index !== project.stack.length -1 && ','}
                       </li>
                        
                     ))}
                  </ul>
                  
                  <div className="border  border-white/20"></div>
                  <div className="flex gap-2">
                     <Link href={project.live} target='_blank'>
                        <TooltipProvider delayDuration={100}>
                             <Tooltip>
                                 <TooltipTrigger className='flex justify-center items-center group w-[70px] h-[70px] rounded-full  bg-white/10'>
                                     <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                                 </TooltipTrigger> 
                                 <TooltipContent>
                                     <p>Live Project</p>

                                 </TooltipContent>
                             </Tooltip>
                        </TooltipProvider>
                       
                     </Link>
                     <Link href={project.live} target='blank'>
                        <TooltipProvider delayDuration={100}>
                             <Tooltip>
                                 <TooltipTrigger className='flex justify-center items-center group w-[70px] h-[70px] rounded-full  bg-white/10'>
                                     <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                                 </TooltipTrigger> 
                                 <TooltipContent>
                                     <p>Github Repo</p>

                                 </TooltipContent>
                             </Tooltip>
                        </TooltipProvider>
                       
                     </Link>
                  </div>

              </div>

             </div>
            <div className="w-full xl:w-1/2">
                 <Swiper spaceBetween={30} slidesPerView={1} className=' xl:h-[520px] mb-12 relative -z-50'
                   onSlideChange={handleSwipeChange}
                   >
                   {projects.map((project,index)=>(
                       <SwiperSlide key={index}>
                          <div className="h-[460px] relative group flex justify-center 
                                items-center bg-green-50/20">
                              <div className="absolute top-0 bottom-0 w-full h-full bg-black/30 "></div>
                              <div className=" relative w-full h-full">
                                 <Image alt="img" src={project.image}  fill className='object-cover'/>
                              </div>

                          </div>
                           {
                             
                          }
                       </SwiperSlide>



                   ))} 
                    
                  <WorkSlideBtn containerStyles='bg-green-900 container  flex gap-2 right-0 z-50 absolute
                  w-full justify-between xl:w-max xl:justify-none'
                  btnStyles='bg-accent hover:bg-acent-hover text-primary text-[22px] size-[44px]
                  flex justify-center items-center transition-all'/>
                   
                   
                 </Swiper>



            </div>
         </div>

         {/* <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12 relative -z-50">
             <h1 className='text-5xl text-white'>hello</h1>
         </Swiper> */}

       

       </div>

                   
       
         
     </motion.section>
  )
}

export default Work