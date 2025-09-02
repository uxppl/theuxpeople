"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "./shared/Button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
import { projectItems } from "@/consts/projects";

export const Projects = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentProject = projectItems[activeIdx];

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
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIdx]);

  const handleChangeProject = (nextIdx: number) => {
    if (isAnimating || nextIdx === activeIdx) return;
    setIsAnimating(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setActiveIdx(nextIdx);
          setTimeout(() => setIsAnimating(false), 400);
        },
      });
    } else {
      setActiveIdx(nextIdx);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  return (
    <section
      className="max-w-[1180px] mx-auto px-6 mt-20 pb-20 space-y-10"
      id="projects"
    >
      <div className="space-y-4 mt-10">
        <h3 ref={titleRef} className="font-medium text-5xl text-center">
          <span className="dark-text-gradient bg-clip-text text-transparent">
            Our Best
          </span>{" "}
          <span className="text-primary">Projects</span>
        </h3>
        <p
          ref={descRef}
          className="text-sub-color text-lg font-normal text-center mx-auto"
        >
          Take a look at some of our best work, we are truly proud!
        </p>
      </div>
      <div
        ref={cardRef}
        className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center justify-between h-full xl:h-[480px] w-full bg-white rounded-4xl shadow-lg p-6 md:p-16"
        style={{ pointerEvents: isAnimating ? "none" : "auto" }}
      >
        <div className="space-y-2">
          <Image
            alt="Project Logo"
            priority
            quality={100}
            width={155}
            height={34}
            src={currentProject.logo}
            className="object-contain h-10"
          />
          <p className="font-medium text-xl">{currentProject.comment}</p>
          <div className="flex gap-2 flex-wrap py-4">
            {currentProject.badges.map((badge, i) => (
              <div
                key={badge.title}
                className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-sub-color border border-[#ebebeb] bg-[#f7f7f7]"
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center ${badge.color}`}
                >
                  <Image
                    src={badge.icon}
                    alt={badge.title + " icon"}
                    width={12}
                    height={12}
                    className="object-contain"
                  />
                </span>
                <span>{badge.title}</span>
              </div>
            ))}
          </div>
          <ul className="space-y-2 pb-4">
            {currentProject.stacks.map((stack, i) => (
              <li
                key={stack}
                className="flex items-center gap-2 text-[14px] font-normal text-sub-color"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8.5L7 11.5L12 5.5"
                    stroke="#a3a3a3"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {stack}
              </li>
            ))}
          </ul>
          <Button
            light
            iconPosition="right"
            icon={<MoveRight />}
            onClick={() => {
              if (currentProject.url) window.open(currentProject.url, "_blank");
            }}
          >
            View Showcase
          </Button>
        </div>
        <Image
          alt="Project Main"
          priority
          quality={100}
          width={478}
          height={262}
          src={currentProject.image}
          className="object-contain"
        />
      </div>
      <div className="flex w-full justify-between ">
        <Button
          onClick={() =>
            window.open("https://www.behance.net/mazenzoor", "_blank")
          }
        >
          View All Projects
        </Button>
        <div className="flex gap-3">
          <Button
            light
            icon={<ArrowLeft />}
            onClick={() =>
              handleChangeProject(
                activeIdx === 0 ? projectItems.length - 1 : activeIdx - 1
              )
            }
            disabled={isAnimating}
          >
            Back
          </Button>
          <Button
            light
            iconPosition="right"
            icon={<ArrowRight />}
            onClick={() =>
              handleChangeProject(
                activeIdx === projectItems.length - 1 ? 0 : activeIdx + 1
              )
            }
            disabled={isAnimating}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};
