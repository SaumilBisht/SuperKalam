"use client"
import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "GS modules for 100% syllabus",
      "Daily Current Affairs",
      "AI mentorship & doubt resolution",
      "Detailed Progress Report",
      "Daily Leaderboard",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 3999,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "GS modules for 100% syllabus",
      "Daily Current Affairs",
      "AI mentorship & doubt resolution",
      "Unlimited MCQ Practice on any topic",
      "Unlimited Prelims PYQ Practice",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 5699,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited Mains Evaluation",
      "AI mentorship & doubt resolution",
      "Unlimited MCQ Practice on any topic",
      "Unlimited Prelims and Mains PYQ Practice",
      "For GS, Ethics, Essay & Optional",
      "GS modules for 100% syllabus",
      "Daily Current Affairs",
      "Get Model Answer",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc mt-5">Free forever . upgrade for unlimited class. better security</p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({title,monthlyPrice,buttonText,inverse,popular,features,})=>(
            <div className={twMerge("card",inverse===true && 'border-black bg-black text-white')}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50",inverse===true && "text-white")}>{title}</h3>
                {
                  popular===true && <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  <motion.span animate={{
                    backgroundPositionX:"100%"
                  }} transition={{ 
                    duration:1,
                    repeat:Infinity,
                    ease:"linear",
                    repeatType:"loop"
                  }} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#DDCD92,#71C2EF,#3BFFFF,#DD7DDF,#DDCD92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                    Popular</motion.span>
                </div>
                }
              </div>
              
              <div className=" flex items-baseline gap-4 mt-[30px]">
                <span className="text-4xl text-bold tracking-tight leading-none">Rs{monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]",inverse===true && "bg-white text-black")}>{buttonText}</button>
              <ul className="flex-col flex gap-5 mt-8">
                
                {features.map((feature) =>(
                  <li className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6"/>
                    <span>{feature}</span>
                  </li>
                ))}
              
              </ul>
            </div>
          )
          )}
          
        </div>
      </div>
    </section>
  );
};
