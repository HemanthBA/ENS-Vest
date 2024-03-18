"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ConnectWalletModal from "./ConnectWalletModal";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div className="z-[20] bg-black flex items-center p-5 justify-between border-b border-b-gray-800  top-0 sticky">
      {/* <div className="text-xl font-bold">Logo</div> */}
      <div className="flex gap-10 items-center font-ibm ">
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-md hover:scale-75 transition-all delay-75 cursor-pointer text-slate-300"
        >
          Home
        </h1>
        <h1
          onClick={() => scrollToSection("step")}
          className="text-md hover:scale-75 transition-all delay-75 cursor-pointer text-slate-300"
        >
          Guide
        </h1>
        <h1
          onClick={() => scrollToSection("documentation")}
          className="text-md hover:scale-75 transition-all delay-75 cursor-pointer text-slate-300"
        >
          Documentation
        </h1>
      </div>
      <div className="flex gap-10 items-center">
        <div></div>
        <ConnectWalletModal />
      </div>
    </div>
  );
};

export default NavBar;
