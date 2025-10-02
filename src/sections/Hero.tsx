"use client"
import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from "@/assets/kalam.png"
import books from "@/assets/books.png"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";

export const Hero = () => {
  const heroRef=useRef(null);
  const {scrollYProgress}=useScroll({
    target:heroRef,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]"> 
            <div className="tag">
              SuperKalam is Here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold  tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Everything you need for UPSC Preparation</h1>
            <p className="text-xl text-[#010D3E] mt-6 tracking-tight">Your Personal AI Mentor that teaches, instantly evaluates Handwritten Answers & builds Daily Discipline</p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get started for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="w-5 h-5"></ArrowIcon>
              </button> 
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img src={cogImage.src} alt="cog" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            animate={{
              translateY:[-30,30],
            }}
            transition={{
              repeat:Infinity,
              repeatType:"mirror",
              duration:3,
              ease:"easeInOut"

            }}></motion.img>
            
            <motion.img src={books.src} alt="books" width={360} height={360}
            className="hidden lg:block absolute top-[274px] left-[380px] rotate-[30deg]" 
            style={{
              translateY: translateY
            }}/>
          </div>
        </div>
      </div>
    </section>
  );
};
