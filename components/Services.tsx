"use client";

import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "./shared/Button";
import { MoveRight } from "lucide-react";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const serviceBlocks = [
  {
    icon: "/images/paint-brush-02.png",
    title: "Design",
    items: [
      "UI / UX Design",
      "Redesign",
      "Visual Identity Design",
      "UX Design & Research",
    ],
    color: "bg-[#47c2ff]",
  },
  {
    icon: "/images/3rd-bracket-circle.png",
    title: "Develop",
    items: [
      "Website Development",
      "Mobile Applications",
      "Code Enhancement",
      "Data Management",
    ],
    color: "bg-[#fb3748]",
  },
  {
    icon: "/images/customer-service-01.png",
    title: "Consult",
    items: ["UX Consulting", "Design Consulting", "UX Training", "Discovery"],
    color: "bg-[#fa7319]",
  },
];

const ACTIVE_SERVICE_KEY = "activeService";

export const Services = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const bgRefs = useRef<any[]>([]);
  const iconRefs = useRef<any[]>([]);
  const contentRefs = useRef<any[]>([]);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const [activeService, setActiveServiceState] = useState<string | null>(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: "power2.out",
      delay: 1,
    });
    gsap.from(descRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.2,
    });
    gsap.from(bgRefs.current, {
      opacity: 0,
      scale: 0.7,
      duration: 0.5,
      stagger: 0.15,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(iconRefs.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.15,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(contentRefs.current, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.15,
      delay: 0.45,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, [pathname]);

  useEffect(() => {
    const onStorage = () => {
      const stored = localStorage.getItem(ACTIVE_SERVICE_KEY);
      if (stored) {
        setActiveServiceState(stored);
        setTimeout(() => {
          setActiveServiceState(null);
          localStorage.removeItem(ACTIVE_SERVICE_KEY);
        }, 3000);
      }
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("activeServiceChange", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("activeServiceChange", onStorage);
    };
  }, []);

  return (
    <section
      className="max-w-[1180px] mx-auto px-6 mt-20 pb-20 space-y-20"
      id="services"
    >
      <div ref={boxRef} className="space-y-4">
        <h3 ref={titleRef} className="font-medium text-5xl text-center">
          <span className="dark-text-gradient bg-clip-text text-transparent">
            In-depth
          </span>{" "}
          <span className="text-primary">Services</span>
        </h3>
        <p
          ref={descRef}
          className="text-sub-color text-lg font-normal text-center mx-auto"
        >
          Whether your project is large or small, we're here to assist you with
          every detail.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 w-full max-w-6xl mx-auto relative">
        {serviceBlocks.map((block, idx) => (
          <div
            key={block.title}
            className={`flex-1 flex flex-col items-center px-6 border-l border-r border-dashed border-gray-300
              ${idx === 0 ? "md:border-l-0" : ""}
              ${idx === serviceBlocks.length - 1 ? "md:border-r-0" : ""}
              ${idx !== serviceBlocks.length - 1 ? "md:border-r" : ""}
            `}
          >
            <div
              ref={(el) => {
                bgRefs.current[idx] = el;
              }}
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${block.color}`}
            >
              <img
                ref={(el) => {
                  iconRefs.current[idx] = el;
                }}
                src={block.icon}
                alt={block.title + " icon"}
                width={38}
                height={38}
              />
            </div>
            <div
              ref={(el) => {
                contentRefs.current[idx] = el;
              }}
              className={`text-foreground text-[24px] font-medium mb-3 text-center transition-colors duration-200 ${
                activeService === block.title ? "text-primary " : ""
              }`}
            >
              {block.title}
              <ul className="space-y-2 mt-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-[18px] font-normal text-center text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center" ref={buttonRef}>
        <Button iconPosition="right" icon={<MoveRight />}>
          Learn More
        </Button>
      </div>
    </section>
  );
};
