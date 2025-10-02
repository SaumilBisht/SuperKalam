import logo from "@/assets/logosaas.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialLi from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-insta.svg"
import SocialYT from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer className="text-sm bg-black text-[#BCBCBC] py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
          <Image className="relative" src={logo} alt="Kalam" height={40}/>
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX/>
          <SocialLi/>
          <SocialPin/>
          <SocialYT/>

        </div>
        <p className="mt-6">&copy; 2025 Your Company Inc, All rights are reserved</p>
      </div>
    </footer>
  );
};
