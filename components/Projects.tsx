"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "./shared/Button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const projectItems = [
  {
    logo: "/images/markit.png",
    comment: "The food marketplace we all love, redesigned.",
    url: "https://www.behance.net/gallery/224818987/Markit-Project-Showcase",
    image: "/images/bento.png",
    stacks: [
      "Revamped application design",
      "Fresh company branding and vision",
      "Redesigned user flows",
      "Rewritten frontend and backend code",
    ],
    badges: [
      {
        icon: "/images/paint-brush-02.png",
        color: "bg-[#47c2ff]",
        title: "UI/UX Redesign",
      },
      {
        icon: "/images/3rd-bracket-circle.png",
        color: "bg-[#fb3748]",
        title: "Codebase Rewrite",
      },
    ],
  },

  {
    logo: "/images/toothpick.png",
    comment: "Revolutionizing the dental industry.",
    url: "https://www.behance.net/gallery/154345327/Toothpick",
    image: "/images/toothpick-showcase.png",
    stacks: [
      "Implemented new features",
      "Revamped application design",
      "Redesigned user flows",
      "Complete project development",
    ],
    badges: [
      {
        icon: "/images/paint-brush-02.png",
        color: "bg-[#47c2ff]",
        title: "UI/UX Redesign",
      },
      {
        icon: "/images/3rd-bracket-circle.png",
        color: "bg-[#fb3748]",
        title: "Website & Application Development",
      },
    ],
  },

  {
    logo: "/images/padelista.png",
    comment: "Bringing the most beloved game to Spain.",
    url: "https://www.behance.net/gallery/213833939/Padelista-UIUX-Project",
    image: "/images/padelista-showcase.png",
    stacks: [
      "New user interface",
      "Simple drop shipping shop",
      "Android & iOS development",
      "Published project to all platforms",
    ],
    badges: [
      {
        icon: "/images/paint-brush-02.png",
        color: "bg-[#47c2ff]",
        title: "UI/UX Redesign",
      },
      {
        icon: "/images/3rd-bracket-circle.png",
        color: "bg-[#fb3748]",
        title: "Website & Application Development",
      },
    ],
  },
];

export const Projects = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const stacksRef = useRef<HTMLUListElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
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
        once: true,
      },
    });
    gsap.from(descRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, {});

  useGSAP(() => {
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, scale: 0.95, x: -40 },
        { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
    }
    if (badgesRef.current) {
      gsap.fromTo(
        badgesRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    }
    if (stacksRef.current) {
      gsap.fromTo(
        stacksRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }
      );
    }
  }, [activeIdx]);

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
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 justify-between h-full xl:h-[480px] w-full bg-white rounded-4xl shadow-lg p-6 md:p-16">
        <div className="space-y-2" ref={infoRef}>
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
          <div className="flex gap-2 flex-wrap py-4" ref={badgesRef}>
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
          <ul className="space-y-2 pb-4" ref={stacksRef}>
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
          ref={imageRef}
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
              setActiveIdx((idx: number) =>
                idx === 0 ? projectItems.length - 1 : idx - 1
              )
            }
          >
            Back
          </Button>
          <Button
            light
            iconPosition="right"
            icon={<ArrowRight />}
            onClick={() =>
              setActiveIdx((idx: number) =>
                idx === projectItems.length - 1 ? 0 : idx + 1
              )
            }
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};
