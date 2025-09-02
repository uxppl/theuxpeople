import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Phases } from "@/components/Phase";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <span className="border-b border-sub-border w-full h-2 absolute pointer-events-none"></span>
      <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between pointer-events-none">
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
      </span>

      <Services />
      <span className="border-b border-sub-border w-full h-2 absolute pointer-events-none"></span>
      <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between pointer-events-none">
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
      </span>

      <Phases />
      <span className="border-b border-sub-border w-full h-2 absolute pointer-events-none"></span>
      <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between pointer-events-none">
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
      </span>

      <Projects />
      <span className="border-b border-sub-border w-full h-2 absolute"></span>
      <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between pointer-events-none">
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
      </span>

      <Process />
      <span className="border-b border-sub-border w-full h-2 absolute"></span>
      <span className="max-w-[1285px] w-full h-2 left-1/2 -translate-x-1/2 absolute flex justify-between pointer-events-none">
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full -translate-x-1"></span>
        <span className="flex w-3 h-3 border border-sub-border bg-white shadow rounded-full translate-x-1"></span>
      </span>

      <Contact />
    </main>
  );
};

export default Home;
