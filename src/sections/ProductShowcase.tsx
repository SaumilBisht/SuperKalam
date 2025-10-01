import productImage from "@/assets/product-image.png"
import pyrmaidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80]  bg-clip-text text-transparent mt-5">A more effectve way to track progress</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni beatae quod, aspernatur modi sapiente aliquam quis enim et laborum nisi. Obcaecati a ipsam omnis reprehenderit similique temporibus tempora quo!</p>
          
          <div className="relative">
            <Image src={productImage} alt="Product image" className="mt-10"/>
            <Image src={pyrmaidImage} alt="Pyramid image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32"/>
            <Image src={tubeImage} alt="Tube image" height={248} width={262} className="hidden md:block absolute bottom-24 -left-36"/>
          </div>
        </div>
      </div>
    </section>
  );
};
