"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "./shared/Button";
import { AtSign, MessageCircle, UsersRound } from "lucide-react";

export const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLParagraphElement | null>(null);

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
    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: buttonsRef.current,
        start: "top 80%",
        once: true,
      },
    });
    gsap.from(infoRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, {});

  return (
    <section
      className="max-w-[1180px] mx-auto px-6 mt-20 pb-20 space-y-8"
      id="contact"
    >
      <div className="space-y-4 mt-10">
        <h3 ref={titleRef} className="font-medium text-5xl text-center">
          <span className="dark-text-gradient bg-clip-text text-transparent">
            Let's
          </span>{" "}
          <span className="text-primary">Communicate</span>
        </h3>
        <p
          ref={descRef}
          className="text-sub-color text-lg font-normal text-center mx-auto"
        >
          Feel free to reach out with any questions—we're always here to chat!
        </p>
      </div>
      <div
        ref={buttonsRef}
        className="flex flex-col items-center md:flex-row justify-center gap-8 pt-10"
      >
        <a
          href="https://wa.me/905052720895"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<MessageCircle fill="#ffffff" />}>Send WhatsApp</Button>
        </a>
        <Button light icon={<AtSign />}>
          Send Email
        </Button>
        <a
          href="https://form.typeform.com/to/GLrLzhQr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button light icon={<UsersRound />}>
            Request a Call
          </Button>
        </a>
      </div>
      <p
        ref={infoRef}
        className="text-xs font-normal text-sub-color text-center"
      >
        Your information will remain confidential and only be used by
        TheUXPeople team, ensuring your privacy.
      </p>
    </section>
  );
};
