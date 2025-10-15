"use client"
import React from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'

import { useForm,Controller } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import  {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa"
import { motion } from 'framer-motion'

const info = [
  {
    icon:<FaPhoneAlt/>,
    title:"phone",
    description:"(+234) 913 727 3072"

  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"nwabuezegilbert@gmail.com"

  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"Nigeria"

  },

]



const formSchema = z.object({
  fname:z.string({message:"invalid name"}).min(1),
  lname:z.string({message:"invalid name"}).min(1),
  email:z.string({message:"invalid email"}).email(),
  num:z.string({message:"invalid invalid phone number"}).min(10,{message:"invalid phone number"}),
  neededFor:z.string(),
  message:z.string(),
  
})

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4, ease:"easeIn"}}}
    className='py-6'>
      <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* form  */}
              <div className="xl:w-[54%] order-2 xl:order-none">
                <form method="post" className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit((d)=>{
                  console.log(d)
                })}>
                  <h3 className="text-4xl text-accent">Let's work together</h3>
                  <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aspernatur quisquam officiis, assumenda omnis fuga. Placeat, aliquid.</p>
                   {/* input */}
                   <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                     <div className="">
                      <Input {...register("fname")} type='firstame' placeholder='Firstname'/>
                        {errors?.fname  && <p className="text-red-500">{errors?.fname.message as string}</p>}
                     </div>

                     <div className="">
                      <Input {...register("lname")} type='lastname' placeholder='lastname'/>
                        {errors?.lname  && <p className="text-red-500">{errors?.lname.message as string}</p>}
                     </div>
                     <div className="">
                      <Input {...register("email")} type='email' placeholder='Email Address'/>
                        {errors?.email  && <p className="text-red-500">{errors?.email.message as string}</p>}
                     </div>
                     <div className="">
                      <Input {...register("num")} type='phone' placeholder='Phone Number'/>
                        {errors?.num  && <p className="text-red-500">{errors?.num.message as string}</p>}
                     </div>
                   </div>

                   {/* select */}
                   <Controller  control={control} name="neededFor"
                   render={(({field})=>(

                    <Select  defaultValue='' {...field} onValueChange={field.onChange}>
                        <SelectTrigger className='w-full' >
                            <SelectValue placeholder="select a service"/>
                        </SelectTrigger>
                        

                        <SelectContent>
                          <SelectGroup >
                            <SelectLabel>Select A service</SelectLabel>
                            <SelectItem value='webdev' className=''>Web Development</SelectItem>
                            <SelectItem value='wsc' className=''>Web Scraping</SelectItem>
                            <SelectItem  value='pydev'className=''>Python Development</SelectItem>
                            <SelectItem  value='thesis'className=''>Msc/Phd thesis</SelectItem>


                          </SelectGroup>
                        </SelectContent>
                          {errors?.neededFor?.message  && <p className="text-red-500">{errors?.neededFor.message as string}</p>}
                    </Select>
                   ))}>

                   </Controller>



                   <Textarea {...register("message")} placeholder='Type Your Message Here'/>
                   <Button size={"md"} className='max-w-40'>Send Message</Button>
                   

                </form>
              </div>

               {/* info */}

              <div className="  flex-1 flex items-center xl:justify-end order-1
                  xl:order-none mb-8 xl:mb-0">
                  <ul className='flex flex-col gap-6'>
                    {
                      info.map((item,index)=>(
                        <li className='flex items-center gap-6' key={index}>
                           <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-accent rounded-md  flex items-center justify-center">
                              <div className="text-[28px]">{item.icon}</div>
                           </div>
                           <div className="flex-1">
                              <p className="text-white/60">{item.title}</p>
                              <h3 className="text-xl">{item.description}</h3>
                           </div>
                        </li>
                      ))
                    }
                  </ul>  
              </div>
         </div>
      </div>

    </motion.section>

  )

}

export default Contact