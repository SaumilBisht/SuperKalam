import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png"
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]"> 
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              SuperKalam is Here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold  tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to boost your Productivity</h1>
            <p className="text-xl text-[#010D3E] mt-6 tracking-tight">Bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos perspiciatis suscipit! Consequuntur reprehenderit, minima a placeat quos sed facere corporis unde ut ducimus ea laboriosam in illum modi magni.</p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="w-5 h-5"></ArrowIcon>
              </button> 
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} alt="cog" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"></Image>
            <Image src={cylinderImage} alt="cyclinder" width={220} height={220}
            className="hidden md:block -top-8 -left-32 md:absolute"></Image>
            <Image src={noodleImage} alt="noodle" width={220} height={220}
            className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]" >
            </Image>
          </div>
        </div>
      </div>
    </section>
  );
};
