"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const phaseBlocks = [
  {
    image: "/images/ui-phase-1.png",
    desc: (
      <>
        <span>
          When building a digital product, it’s tempting to jump straight into
          development. But without clear UI design first, developers risk
          building the wrong thing, which costs more time and money to fix
          later.
        </span>
      </>
    ),
  },
  {
    image: "/images/ui-phase-2.png",
    desc: (
      <>
        <span>
          UI design is like the blueprint of a house. Before construction
          begins, you need to see the layout, flow, and look of the rooms. In
          the same way, UI shows exactly how a product will work and feel for
          users before any code is written.
        </span>
      </>
    ),
  },
  {
    image: "/images/ui-phase-3.png",
    desc: (
      <>
        <span className="">By designing first:</span>
        <ul className="space-y-1.5 mt-2">
          {[
            "Clear vision before development.",
            "Developers follow a clear plan.",
            "Product is intuitive and enjoyable.",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-lg">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-100 bg-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8.5L7 11.5L12 5.5"
                    stroke="#5c5c5c"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-normal text-lg text-nowrap">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

export const Phases = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imgRefs = useRef<any[]>([]);
  const descRefs = useRef<any[]>([]);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: "power2.out",
      delay: 1,
    });
    gsap.from(imgRefs.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(descRefs.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      className="max-w-[1180px] mx-auto px-6 mt-20 pb-20 space-y-20"
      id="services"
    >
      <div ref={boxRef} className="space-y-4">
        <h3 ref={titleRef} className="font-medium text-5xl text-center">
          <span className="dark-text-gradient bg-clip-text text-transparent">
            Design First. Develop Later.
          </span>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 w-full max-w-6xl mx-auto relative">
        {phaseBlocks.map((block, idx) => (
          <div
            key={idx}
            className={`flex-1 flex flex-col items-center px-6 border-l border-r border-dashed border-gray-300
              ${idx === 0 ? "md:border-l-0" : ""}
              ${idx === phaseBlocks.length - 1 ? "md:border-r-0" : ""}
              ${idx !== phaseBlocks.length - 1 ? "md:border-r" : ""}
            `}
          >
            <img
              ref={(el) => {
                imgRefs.current[idx] = el;
              }}
              src={block.image}
              alt="Phase visual"
              width={273}
              height={273}
              className="rounded-xl mb-6 object-cover"
            />
            <div
              ref={(el) => {
                descRefs.current[idx] = el;
              }}
              className="text-lg max-w-sm text-sub-color font-normal space-y-4 tracking-tight leading-6"
            >
              {block.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
