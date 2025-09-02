"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/905052720895";
const callUrl =
  process.env.NEXT_PUBLIC_CALL_URL ||
  "https://form.typeform.com/to/GLrLzhQ-call";

const footerBlocks = [
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

export const Footer = () => {
  const handleServiceClick = (service: string) => {
    localStorage.setItem(ACTIVE_SERVICE_KEY, service);
    window.dispatchEvent(new Event("activeServiceChange"));
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: "#services", offsetY: 0 },
      ease: "power2.out",
    });
  };

  return (
    <footer className="max-w-[1180px] mx-auto px-6 xl:mt-20 pb-5 z-50">
      <div className="bg-white shadow-lg rounded-4xl p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {footerBlocks.map((block) => (
          <div key={block.title} className="flex flex-col items-start gap-2">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${block.color}`}
            >
              <img
                src={block.icon}
                alt={block.title + " icon"}
                width={16}
                height={16}
              />
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">
              {block.title}
            </div>
            <ul className="space-y-1">
              {block.items.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="text-[15px] text-gray-700 hover:text-primary transition-colors text-left"
                    onClick={() => handleServiceClick(block.title)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-start gap-2 z-10">
          <div className="w-6 h-6 rounded-full flex items-center justify-center mb-2 bg-[#f6b51e]">
            <img
              src="/images/computer-video-call.png"
              alt="Get in touch icon"
              width={16}
              height={16}
            />
          </div>
          <div className="text-lg font-semibold text-foreground mb-2">
            Get in touch
          </div>
          <ul className="space-y-1">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-gray-700 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/the-ux-people"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-gray-700 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-[15px] text-gray-700">Send an Email</span>
              </Link>
            </li>
            <li>
              <a
                href={callUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-gray-700 hover:text-primary transition-colors"
              >
                Call us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
