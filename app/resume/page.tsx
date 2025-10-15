"use client";

// import {
//   FaHtml5,
//   FaCss3,
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaJs,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiSolidity,
//   SiNextdotjs,
//   SiDjango,
//   SiTypescript,
//   SiSpringboot,
//   SiRust,
//   SiKubernetes,
//   SiAwslambda,
//   SiGooglecloud,
// } from "react-icons/si";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaAngular, FaVuejs, FaDocker, FaGitAlt, FaJenkins, FaEthereum } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiDjango, SiSolidity, SiRust, SiKubernetes, SiAwslambda, SiGooglecloud, SiMicrosoftazure, SiPytorch, SiPostgresql, SiMongodb, SiTypescript, SiSpringboot, SiFigma } from "react-icons/si";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ABOUT_ME } from "@/constants";
// import { FaAngular, FaDocker, FaVuejs } from "react-icons/fa6";
const EXPERIENCE = {
  icon: "/resume/badge.svg",
  title: "My Experience",
  description:
    "A comprehensive journey through diverse roles in software development, showcasing expertise in frontend and backend development, DevOps, blockchain, and machine learning.",
  items: [
    {
      company: "Gilish-Tech IT Consultancy and General Services",
      position: "Software Engineer",
      duration: "Jan 2024 - Present",
    },
    {
      company: "American District Telegraph (ADT)",
      position: "Back-End Developer",
      duration: "Jul 2020 - Sep 2023",
    },
    {
      company: "Paypluz FMH International HR Academy",
      position: "Front-End Developer",
      duration: "Jan 2018 - May 2020",
    },
    {
      company: "Smartware Solution",
      position: "Front-End Developer",
      duration: "Jul 2016 - Oct 2017",
    },
    {
      company: "CISCO System",
      position: "Software Engineer (Intern)",
      duration: "Nov 2016 - Jun 2017",
    },
  ],
};




const EDUCATION = {
  icon: "/resume/cap.svg",
  title: "My Education",
  description:
    "A diverse educational background combining formal university training with industry-recognized certifications and bootcamps, highlighting a strong foundation in computer science and software development.",
  items: [
    {
      institution: "Kwara State University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2013 - 2017",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Divine Computer School",
      degree: "Diploma in Graphic Design",
      duration: "2019",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2016 - 2018",
    },
    {
      institution: "CodeCademy",
      degree: "Frontend Development Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Foundations Course",
      duration: "2020 - 2021",
    },
  ],
};


const SKILLS = {
  title: "My Skills",
  description:
    "A diverse set of technical skills, ranging from frontend to backend development, blockchain, DevOps, and machine learning, with a focus on building efficient, scalable, and innovative solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <SiSolidity />,
      name: "Solidity",
    },
    {
      icon: <SiRust />,
      name: "Rust",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiAwslambda />,
      name: "AWS",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud",
    },
    {
      icon: <SiMicrosoftazure />,
      name: "Microsoft Azure",
    },
    // {
    //   icon: <FaTensorflow />,
    //   name: "TensorFlow",
    // },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <FaEthereum />,
      name: "Ethereum",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh]  flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto  ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            {/* experience  */}
            <TabsContent value="experience">
              <div>
                <h3 className="text-4xl font-bold">{EXPERIENCE.title}</h3>
                <p className="max-[600px] text-lg text-white/60 mx-auto xl:mx-0 mt-2">
                  {EXPERIENCE.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {EXPERIENCE.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center
                        lg:text-left">{item.position}</h3>

                        <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>

                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
            <div>
                <h3 className="text-4xl font-bold">{EDUCATION.title}</h3>
                <p className="max-[600px] text-lg text-white/60 mx-auto xl:mx-0 mt-2">
                  {EDUCATION.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {EDUCATION.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center
                        lg:text-left">{item.degree}</h3>

                        <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>

                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS  */}
            <TabsContent value="skills">
               <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-2 text-center xl:text-left">

                        <h3 className="text-4xl  ">{SKILLS.title}</h3>
                        <p className="max-w-[600px] text-white/60 font-bold ">{SKILLS.description}</p>
                    </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                     {SKILLS.skillList.map((skill,index)=>(

                        <li key={index}>
                          <TooltipProvider>
                             <Tooltip delayDuration={100}>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex
                                justify-center items-center group">
                                   <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                       {skill.icon}
                                   </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize text-sm">{skill.name}</p>
                                </TooltipContent>
                             </Tooltip>
                          </TooltipProvider>
                        </li>



                     ))}
                  </ul>

               </div>
            </TabsContent>
            {/* about  */}
            <TabsContent value="about">
                <div className="flex flex-col gap-[30px]">

                    <h3 className="text-4xl font-bold">{ABOUT_ME.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0">{ABOUT_ME.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  max-w-[620px]
                    mx-auto xl:mx-0">{ABOUT_ME.info.map((item,index)=>(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>

                      </li>

                    ))}</ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
