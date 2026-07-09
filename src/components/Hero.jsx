import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";
import amanPhoto from "../assets/aman.jpeg";


// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient">{aboutMe.name}</span>
        </h1>
        <h1 className="font-poppins font-semibold ss:text-[28px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="text-gradient">{aboutMe.tagLine}</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {aboutMe.intro}
        </p>
        
        <div className="flex flex-row justify-between items-center w-full text-white">
          

          <div className="ss:flex hidden md:mr-8 mr-0 mt-28">
           <LetsConnect />
          </div>
        </div>

        
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="relative z-[5] flex justify-center items-center -ml-24">
  <img
    src={amanPhoto}
    alt="Aman Gupta"
    className="w-[360px] h-[500px] object-cover rounded-3xl shadow-2xl"
  />
</div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Hero;
