import React, { useEffect, useRef, useState } from "react";
import { useInView as useInViewr } from "react-intersection-observer";
import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { previews, projects } from "@/constant";
import HeroCarousel from "./Carousel";

interface Props {
  name: string;
  url: string;
  description: string;
  isDeployed: boolean;
  id: string;
  isOpen: string;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}

function Project({
  name,
  description,
  isDeployed,
  url,
  isOpen,
  setIsOpen,
  id,
}: Props) {
  const { ref, inView } = useInViewr({
    onChange: () => {
      if (inView) setIsOpen(id);
    },
    threshold: 0,
    rootMargin: "-600px 0px -700px 0px",
  });

  return (
    <motion.div
      data-state={isOpen === id ? "open" : "closed"}
      className="data-[state=open]:bg-black relative data-[state=open]:text-white py-6 px-3 border-b border-black flex justify-between items-center max-md:hidden"
    >
      <div className="flex items-center justify-center gap-3" id={id} ref={ref}>
        <span className="flex gap-3">
          <Image
            src={"/data.svg"}
            width={35}
            height={20}
            alt="logo"
            data-state={isOpen === id ? "open" : "closed"}
            className="data-[state=open]:invert"
            loading="lazy"
          />
        </span>
        <p className="text-xl border-l-2 pl-3 border-black">{name}</p>
        <p className="max-xl:hidden">{description}</p>
      </div>

      <Link
        target="_blank"
        href={url}
        className="shadow-md border border-black rounded-xl w-[10.3rem] py-2 text-sm bg-slate-100/90 text-black flex items-center justify-center gap-2"
      >
        <Image
          src={"/frontend.svg"}
          width={20}
          height={20}
          alt="logo"
          loading="lazy"
        />
        {isDeployed ? "Explore the Website!" : "Explore the Code!"}
      </Link>
    </motion.div>
  );
}

function Projects() {
  const ref1 = useRef(null);
  const [isOpen, setIsOpen] = useState<string>("1");
  const [Current, setCurrent] = useState<number>(0);

  useEffect(() => {
    setCurrent(Number(isOpen) - 1);
  }, [isOpen]);

  const controls1 = useAnimation();
  const useInViewAnimation = (
    ref: any,
    margin: string,
    controls: AnimationControls
  ) => {
    const inView = useInView(ref, { margin });
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return [controls];
  };

  useInViewAnimation(ref1, "-40px", controls1);

  return (
    <>
      <div
        className="sticky z-30 h-[21vh] top-0 border-b border-black"
        ref={ref1}
      >
        <div className="bg-slate-50 flex justify-start gap-4 sm:text-7xl text-5xl font-bold items-center h-full">
          <motion.span
            initial={{ translateY: -40, opacity: 0 }}
            animate={controls1}
            variants={{
              visible: { translateY: 0, opacity: 1 },
              hidden: { translateY: -40, opacity: 0 },
            }}
            transition={{
              delay: 0.1,
              type: "spring",
            }}
          >
            ⤵
          </motion.span>
          <motion.ul className="flex justify-center items-center">
            {"Projects".split("").map((e, i) => (
              <motion.li
                key={i}
                initial={{ translateY: 40, opacity: 0 }}
                animate={controls1}
                variants={{
                  visible: { translateY: 0, opacity: 1 },
                  hidden: { translateY: 40, opacity: 0 },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.058 * i,
                  type: "spring",
                }}
              >
                {e}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="flex gap-28 w-full h-[20rem] pt-6 pb-3 max-md:hidden">
        <div className="flex flex-col gap-5">
          <h1>TIMEFRAME</h1>
          <div className="flex gap-1.5 items-center justify-center flex-wrap  font-bold text-sm">
            <span>YEAR</span>
            <span>2023-24</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1>DISCIPLINE</h1>
          <div className="flex flex-col gap-1.5 font-semibold text-sm">
            <span>Full Stack Development</span>
            <span>Data Scraping</span>
            <span>Optimization & Scalability</span>
            <span>Containerization</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1>OVERVIEW</h1>
          <div className="flex flex-col gap-1.5 font-semibold text-sm">
            <span>Next.js</span>
            <span>TailwindCSS</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Docker - Kubernetes</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1>INDUSTRY</h1>
          <div className="flex gap-2 flex-wrap">
            <span className="py-1 px-1.5 border rounded-xl">#TECH</span>
            <span className="py-1 px-1.5 border rounded-xl">#WEBDEV</span>
            <span className="py-1 px-1.5 border rounded-xl">#FINTECH</span>
            <span className="py-1 px-1.5 border rounded-xl">#MERN</span>
            <span className="py-1 px-1.5 border rounded-xl">#CREATIVE</span>
          </div>
        </div>
      </div>

      <div className="projects-container py-3">
        <div
          className={`z-10 left-0 bottom-0 w-[75%] h-[65%] grid grid-cols-12 absolute max-md:hidden`}
        >
          <span className="md:w-[25rem] w-[20rem] bg-slate-300/20 backdrop-blur-lg h-72 rounded-xl 3xl:col-start-7 3xl:col-end-8 col-start-6 col-end-7 sticky top-48 shadow-lg">
            <Image
              src={previews[Current]}
              fill
              alt="project"
              className="rounded-xl"
              loading="lazy"
            />
          </span>
        </div>
        {projects.map((project, id) => (
          <Project
            name={project.name}
            key={project.id} // Ensure `project.id` is unique
            id={(id + 1).toString()}
            description={project.description}
            url={project.url}
            isDeployed={project.isDeployed}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
        <MobileProject />
      </div>
    </>
  );
}

function MobileProject() {
  return (
    <div className="md:hidden pt-16">
      <div className="rounded-xl">
        <HeroCarousel />
      </div>
    </div>
  );
}

export default Projects;