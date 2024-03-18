"use client";
import HeroSection from "@/components/HeroSection";
import StepByStepByGuide from "@/components/StepByStepByGuide";
import { useEffect } from "react";
import Documentation from "@/components/Documentation";
export default function Home() {
  useEffect(() => {
    async function connectDB() {
      try {
        await fetch("/api/connection", {
          method: "GET",
        });
      } catch (error) {
        console.log("error occured when connecting db");
      }
    }
    connectDB();
  }, []);

  return (
    <div className="p-20 bg-black">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="step">
        <StepByStepByGuide />
      </div>
      <div id="documentation">
        <Documentation />
      </div>
    </div>
  );
}
