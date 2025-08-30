import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="font-sans pt-12 pb-6 relative">
      <div className="border-l border-r border-sub-border max-w-[1280px] w-full h-full top-0 left-1/2 -translate-x-1/2  absolute"></div>
      <Header />
      <main>
        <Hero />
        <span className="border-b border-sub-border w-full h-2 absolute"></span>
        <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between">
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
        </span>

        <Services />
        <span className="border-b border-sub-border w-full h-2 absolute"></span>
        <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between">
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
        </span>

        <Projects />
        <span className="border-b border-sub-border w-full h-2 absolute"></span>
        <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between">
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
        </span>

        <Contact />

        <span className="border-b border-sub-border w-full h-2 absolute"></span>
        <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between">
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
          <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
        </span>
      </main>
    </div>
  );
}
