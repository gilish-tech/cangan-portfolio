import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "./Stats";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
          <div className="flex  flex-col xl:flex-row items-center  justify-between xl:pt-8 xl:pb-24">

            {/* text  */}
            <div className="text-center xl:text-left order-2 xl:order-none">
               <span>Software  Developer</span>
                <h1 className="h1">
                   Hello I'm <br/> <span className="text-accent">CYNTHIA CANGAN</span>
                </h1>

                <p className="max-w-[500px] mb-9 text-white">
                I specialize in building intelligent, scalable web applications that combine modern frontend design with high-performance backend systems. With expertise in Next.js, FastAPI, LangGraph, and LangChain, I develop full-stack solutions that integrate AI automation, responsive design, and seamless API workflows to deliver real-world impact for users and businesses.
                  </p>
                {/* <div className="flex flex-col  justify-center xl:items-start  items-center gap-8">
                    <Button variant={"outline"} size={"lg"} className="flex items-center gap-2">
                      <span>Download CV </span>
                      <FiDownload className="text-xl " />
                    </Button>
                    <div>
                       <Social containerStyles="flex gap-6" iconstyles="flex w-9  h-9
                       border rounded-full border-accent justify-center items-center text-accent
                       text-base hover:bg-accent hover:text-primary transition-all duration-500"/>
                    </div>
                </div> */}
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>

          </div>
            <div className="">
                <Stats/>
            </div>

      </div>

     
    </section>
  );
}
