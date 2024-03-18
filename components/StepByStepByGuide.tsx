"use client";
import React, { useState } from "react";
// import Card from "@/components/Card";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const steps = [
  {
    step: 1,
    title: "Connect Wallet",
    content:
      "Click on the 'Connect Wallet' button and connect your metamask wallet to the app.",
  },
  {
    step: 2,
    title: "Check Availability",
    content:
      "Select a unique ENS name and check it's availability in the pool. If available you're lucky",
  },
  {
    step: 3,
    title: "Register you're ENS",
    content:
      "if you're ENS name is available make the payment and Tadaa! you're customized ENS is ready",
  },
];

const StepByStepByGuide = () => {
  const [progress1, setProgress1] = React.useState(33);
  const [activeStep, setActiveStep] = useState<number>(1);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress1(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="my-32">
      <div>
        <h1 className="font-ibm text-3xl font-bold text-center text-white">
          Steps to own an ENS name
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {steps.map((ele, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-ibm">
                        Step {ele.step}
                      </CardTitle>
                      <CardTitle className="font-ibm">{ele.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="font-ibm text-black">
                      {ele.content}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default StepByStepByGuide;
