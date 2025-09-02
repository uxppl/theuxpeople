"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { Button } from "./shared/Button";
import { AtSign, Menu } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isPinned, setIsPinned] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const y =
        el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      gsap.to(window, {
        duration: 1,
        scrollTo: y,
        ease: "power2.inOut",
      });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < 120) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);

      if (window.scrollY > 60 && !isPinned) {
        setIsPinned(true);
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            duration: 0.4,
            top: 40,
            ease: "power2.out",
          });
        }
      } else if (window.scrollY <= 60 && isPinned) {
        setIsPinned(false);
        if (headerRef.current) {
          gsap.to(headerRef.current, {
            duration: 0.4,
            top: 80,
            ease: "power2.out",
          });
        }
      }
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [isPinned]);

  return (
    <header
      ref={headerRef}
      className={`flex items-center justify-between fixed left-1/2 -translate-1/2 mx-auto pl-6 pr-0.5 bg-white border border-[#f7f7f7] h-12 max-w-[95vw] lg:max-w-[807px] w-full rounded-full transition-all duration-400 z-50`}
      style={{
        top: isPinned ? 40 : 80,
        boxShadow: `0px 1px 3px -1.5px #33333316,
                   0px 5px 5px -2.5px #33333308,
                   0px 12px 6px -6px #33333302,
                   0px 16px 8px -8px #33333301,
                   0px 0px 0px 1px #33333304,
                   0px -0.5px 0.5px 0px #33333308`,
      }}
    >
      <Image
        alt="The UX People"
        src={"/images/logo.png"}
        width={144}
        height={24}
        priority
        quality={100}
      />
      <nav className="hidden md:flex gap-7 font-medium text-sm">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => handleScroll(section.id)}
            className={`transition-colors duration-200 ease-in-out px-2 py-1 rounded-md cursor-pointer ${
              activeSection === section.id
                ? "text-black underline"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
      <div className="hidden md:flex">
        <Link href="/contact">
          <Button icon={<AtSign />}>Contact Us</Button>
        </Link>
      </div>
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label="Open menu"
      >
        <Menu className="text-sub-color" size={20} />
      </button>

      <div
        aria-expanded={mobileMenuOpen}
        className={`bg-white left-0 right-0 z-50 top-14 absolute rounded-4xl shadow max-w-[95vw] md:max-w-full mx-auto h-auto flex flex-col pt-2 pb-6 transition-opacity duration-300 md:hidden md:pointer-events-none ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 100 }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => handleScroll(section.id)}
            className={`font-medium text-sm py-3 px-4 rounded-full text-center transition-colors duration-200 ${
              activeSection === section.id
                ? "text-black underline"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            {section.label}
          </button>
        ))}
        <div className="w-fit self-center mt-4">
          <Button icon={<AtSign />}>Contact Us</Button>
        </div>
      </div>
    </header>
  );
};
