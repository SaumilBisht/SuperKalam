"use client"
import productImage from "@/assets/product-image.png"
import pyrmaidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
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
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effectve way to track progress</h2>
          <p className="section-desc mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni beatae quod, aspernatur modi sapiente aliquam quis enim et laborum nisi. Obcaecati a ipsam omnis reprehenderit similique temporibus tempora quo!</p>
          
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
