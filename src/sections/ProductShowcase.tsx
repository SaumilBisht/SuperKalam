"use client"
import productImage from "@/assets/dashpage.png"
import pyrmaidImage from "@/assets/tablet.png"
import tubeImage from "@/assets/laptop.png"
import Image from "next/image";
import {motion, useScroll,useTransform} from "framer-motion"
import { useRef } from "react";

export const ProductShowcase = () => {

  const sectionRef=useRef(null)
  const {scrollYProgress}=useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Your Learning Journey</div>
          </div>
          <h2 className="section-title mt-5">Cover 100% Prelims & Mains syllabus</h2>
          <p className="section-desc mt-5">
            Stay on top of your goals with SuperKalam’s personalized learning dashboard. Our AI-driven insights help you understand your strengths, identify areas for growth, and keep you motivated with real-time feedback.
          </p>
          
          <div className="relative">
            <motion.img src={productImage.src} alt="Product image" className="mt-10"/>
            <motion.img src={pyrmaidImage.src} alt="Pyramid image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32" style={{
              translateY:translateY
            }}/>
            <motion.img src={tubeImage.src} alt="Tube image" height={248} width={248} className="hidden md:block absolute bottom-24 -left-36" style={{
              translateY:translateY
            }}/>
          </div>
        </div>
      </div>
    </section>
  );
};
