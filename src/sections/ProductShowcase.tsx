import productImage from "@/assets/product-image.png"
import pyrmaidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effectve way to track progress</h2>
          <p className="section-desc mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni beatae quod, aspernatur modi sapiente aliquam quis enim et laborum nisi. Obcaecati a ipsam omnis reprehenderit similique temporibus tempora quo!</p>
          
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
