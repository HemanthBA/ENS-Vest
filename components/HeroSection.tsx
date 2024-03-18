import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div>
      <div className="text-5xl text-white font-ibm font-bold">One Address</div>
      <div className="text-4xl mt-5 font-ibm font-bold text-[#c25eff]">
        <Typewriter
          words={["Countless Possibilities...."]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="text-lg font-medium font-ubuntu text-white mt-12">
        ENS Simplified Navigating the Ethereum blockchain has never been this
        user-friendly. Secure your unique ENS domain effortlessly with{" "}
        <span className="font-ibm text-md rounded-lg text-[#D2A8FF] p-1 bg-[#262626]">
          ENS Vest
        </span>{" "}
        . No more memorizing lengthy strings of characters – just a single,
        memorable name for all your transactions.
      </div>

      <div className="flex mt-5 gap-5">
        <div>
          <img className="h-6 w-6 cursor-pointer" src="/github.png" />
        </div>
        <div>
          <img className="h-6 w-6 cursor-pointer" src="/outline.png" />
        </div>
        <div>
          <img className="h-6 w-6 cursor-pointer" src="/web.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
