"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "./shared/Button";
import { AtSign, MessageCircle, UsersRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/905052720895";
const callUrl =
  process.env.NEXT_PUBLIC_CALL_URL || "https://form.typeform.com/to/GLrLzhQr";

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
    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: buttonsRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(infoRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

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
        className="flex items-center flex-row flex-wrap justify-center gap-8 pt-10"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            icon={
              <Image
                src="/images/WhatsApp.png"
                alt="icon"
                width={20}
                height={20}
                priority
              />
            }
          >
            Send WhatsApp
          </Button>
        </a>
        <Link href="/contact">
          <Button light icon={<AtSign />}>
            Send Email
          </Button>
        </Link>
        <a href={callUrl} target="_blank" rel="noopener noreferrer">
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
