"use client";

import { Button } from "./shared/Button";
import { User, AtSign, PhoneIcon } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const callUrl =
  process.env.NEXT_PUBLIC_CALL_URL || "https://form.typeform.com/to/GLrLzhQr";

export const Hero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);
  const topBarRef = useRef(null);

  useGSAP(() => {
    gsap.from(topBarRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.from(titleRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });
    gsap.from(descRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: 0.6,
      ease: "power2.out",
    });
    gsap.from(btnLeftRef.current, {
      opacity: 0,
      x: -60,
      duration: 0.7,
      delay: 0.9,
      ease: "power2.out",
    });
    gsap.from(btnRightRef.current, {
      opacity: 0,
      x: 60,
      duration: 0.7,
      delay: 1.1,
      ease: "power2.out",
    });
  }, {});

  return (
    <section
      ref={sectionRef}
      className="pb-20 pt-28 md:pt-44 space-y-5 max-w-[1180px] mx-auto px-6"
      id="home"
    >

<div
        ref={topBarRef}
        className="flex items-center gap-4 w-fit mx-auto border border-sub-border md:py-0.5 md:pl-0.5 md:pr-4 rounded-full"
      >
<div className="flex items-center gap-2 px-4 py-1 h-10 bg-gray-200 rounded-full bg-gray-100 text-gray-900 text-sm font-medium">
          <User className="w-5 h-5" />
          user-first
        </div>
        <span className="text-base md:text-[16px] font-normal text-sub-color">
          Give your customers the experience they deserve
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-[64px] font-semibold text-center leading-tight"
        >
          Building your business
          <br />
          <span className="theme-text-gradient bg-clip-text text-transparent">
            user-experience
          </span>{" "}
          <span className="dark-text-gradient bg-clip-text text-transparent">
            first apps
          </span>
        </h1>
      </div>
      <div>
        <p
          ref={descRef}
          className="text-sub-color text-lg font-normal text-center max-w-2xl mx-auto"
        >
          Great businesses deserve exceptional apps, featuring seamless business
          operations and captivating user experiences.
        </p>
      </div>
      <div className="space-x-6 flex w-full justify-center mt-16">
        <span ref={btnLeftRef}>
          <a
            href={callUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-gray-700 hover:text-primary transition-colors"
          >
            <Button light icon={<PhoneIcon />}>
              Book a Call
            </Button>
          </a>
        </span>
        <span ref={btnRightRef}>
          <Link href="/contact">
            <Button icon={<AtSign />}>Contact Us</Button>
          </Link>
        </span>
      </div>
    </section>
  );
};
