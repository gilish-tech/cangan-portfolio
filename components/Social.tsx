import React from 'react'
import {FaGithub,FaLinkedin,}  from "react-icons/fa"
import Link from 'next/link'

const socials = [
  {
    icon:<FaGithub/>,
    path:"https://github.com/gilish-tech"
  },
  {
    icon:<FaLinkedin/>,
    path:" "
  }
]

type SocialProps = {
  containerStyles?:React.ComponentProps<'div'>["className"],
  iconstyles?:React.ComponentProps<'a'>["className"]

}


const Social = ({containerStyles,iconstyles}: SocialProps ) => {
  return (
    <div className={containerStyles}>
      {
        socials.map((social,index)=>{
          return (
            <Link key={index} href={social.path} className={iconstyles}>
                {social.icon}
            </Link>
          )
        })
      }


    </div>
  )
}

export default Social