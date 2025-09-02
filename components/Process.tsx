"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { Search, ArrowRight, ArrowLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { processItems } from "@/consts/process";

gsap.registerPlugin(ScrollTrigger);

export const Process = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(descRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const steps = [
    { name: "Discover", image: "/images/discover-icon.png" },
    { name: "Design", image: "/images/design-icon.png" },
    { name: "Develop", image: "/images/develop-icon.png" },
    { name: "Test & Deploy", image: "/images/test-icon.png" },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const prevStepRef = useRef<number>(0);

  useGSAP(() => {
    if (contentRef.current) {
      const direction = activeStep > prevStepRef.current ? 60 : -60;
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: direction },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
      prevStepRef.current = activeStep;
    }
  }, [activeStep]);

  return (
    <section className="max-w-[1180px] h-full mx-auto px-6 mt-20 pb-20 space-y-10">
      <div className="space-y-4 mt-10">
        <h3 ref={titleRef} className="font-medium text-5xl text-center">
          <span className="dark-text-gradient bg-clip-text text-transparent">
            Our
          </span>{" "}
          <span className="text-primary">Process</span>
        </h3>
        <p
          ref={descRef}
          className="text-sub-color text-lg font-normal text-center mx-auto"
        >
          The way we work with our clients, for any project scale.
        </p>
      </div>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <div className="w-full overflow-x-auto z-20">
          <div className="flex min-w-[52rem] max-w-2xl w-full justify-between items-center mx-auto pb-2">
            {steps.map((step, idx) => (
              <div
                key={step.name}
                className="flex-1 flex flex-col items-center relative cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                <div
                  className={`h-10 text-sm font-medium w-fit px-4 rounded-full z-10 flex items-center justify-center gap-2 ${
                    activeStep === idx
                      ? "bg-white border-2  border-[#25B5AE66] text-foreground"
                      : "bg-[#ebebeb] border-1 border-sub-border  text-sub-color "
                  }`}
                >
                  <Image
                    width={17}
                    height={17}
                    alt={step.name}
                    src={step.image}
                    style={{
                      filter:
                        activeStep === idx
                          ? "invert(41%) sepia(98%) saturate(355%) hue-rotate(135deg) brightness(95%)"
                          : "grayscale(1) brightness(0.7)",
                    }}
                  />
                  {step.name}
                </div>

                {idx < steps.length - 1 && (
                  <div className="absolute top-5 right-[-50%] w-full h-[1px] text-[#b8b8b8] bg-[#e0e0e0] z-0 flex items-center">
                    <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-sub-border bg-white p-0.5">
                      <ChevronsRight size={12} />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Image
          src={"/images/process-sub-border.png"}
          width={664}
          height={54}
          quality={100}
          alt="sub-border"
          className="mb-4 pt-2"
        />

        <div className="w-full mx-auto bg-white rounded-3xl shadow-lg p-12 mb-10 ">
          <div
            className="h-full xl:h-[800px] flex flex-col items-center justify-between"
            ref={contentRef}
          >
            <div className="w-full h-full gap-8 flex flex-col">
              <h4 className="text-3xl text-foreground font-medium mb-4">
                {processItems[activeStep]?.title}
              </h4>
              <ul className="space-y-12 mb-6">
                {processItems[activeStep]?.scope?.map((item, idx) => (
                  <li key={item.title} className="">
                    <div className="text-xl font-medium mb-2 text-foreground">
                      <span className="text-[#a3a3a3] pr-2">{idx + 1}/ </span>
                      {item.title}
                    </div>
                    <div className="text-sub-color text-lg font-normal tracking-tight">
                      {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
                <div className="font-medium text-xl ml-4 text-foreground w-64">
                  You'll get
                </div>
                <div className="flex justify-between w-full flex-wrap gap-3">
                  {processItems[activeStep]?.stack?.map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex flex-col items-center"
                    >
                      <span
                        className="rounded-full flex items-center justify-center w-10 h-10 mb-2"
                        style={{
                          background:
                            processItems[activeStep]?.color || "#525866",
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-base text-center text-foreground  max-w-[120px]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between items-center text-sm  text-sub-color font-medium z-50 mt-10">
              <button
                className={`flex items-center gap-2 cursor-pointer hover:text-primary transition-colors duration-200 ${
                  activeStep === 0 ? "opacity-0 cursor-not-allowed" : ""
                }`}
                onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
              >
                <ArrowLeft size={16} /> Back:{" "}
                {activeStep > 0 ? steps[activeStep - 1].name : steps[0].name}
              </button>
              <button
                className={`flex items-center gap-2 cursor-pointer hover:text-primary transition-colors duration-200 ${
                  activeStep === steps.length - 1
                    ? "opacity-0 cursor-not-allowed"
                    : ""
                }`}
                onClick={() =>
                  activeStep < steps.length - 1 && setActiveStep(activeStep + 1)
                }
              >
                Next:{" "}
                {activeStep < steps.length - 1
                  ? steps[activeStep + 1].name
                  : steps[steps.length - 1].name}{" "}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
