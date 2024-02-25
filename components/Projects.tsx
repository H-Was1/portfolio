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
import { projects } from "@/constant";

interface Props {
  name: string;
  description: string;
  isDeployed: boolean;
  logoUrls: string[];
  previewUrl: string;
  path: string;
  id: string;
  isOpen: string;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}

function Project({
  name,
  description,
  isDeployed,
  logoUrls,
  isOpen,
  setIsOpen,
  path: webPath,
  id,
  previewUrl,
}: Props) {
  const { ref, inView, entry } = useInViewr({
    onChange: () => {
      inView ? setIsOpen(id) : "";
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
          {logoUrls.length >= 1 ? (
            logoUrls.map((logoUrl) => (
              <Image
                data-state={isOpen === id ? "open" : "closed"}
                src={logoUrl}
                width={35}
                height={20}
                alt={logoUrl}
                key={logoUrl}
                className="data-[state=open]:invert"
              ></Image>
            ))
          ) : (
            <Image src={logoUrls[0]} width={35} height={20} alt="logo"></Image>
          )}
        </span>
        <p className="text-xl border-l-2 pl-3 border-black">{name}</p>
        <p className="max-xl:hidden">{description}</p>
      </div>
      <div
        className={`absolute ${
          id === "1" || id === "2" ? "-top-28" : "bottom-4"
        } z-[1] data-[state=closed]:hidden w-full h-[16rem] grid grid-cols-12`}
        data-state={isOpen === id ? "open" : "closed"}
      >
        <span className="w-[18rem] bg-slate-300/20 backdrop-blur-lg h-full rounded-xl 3xl:col-start-6 3xl:col-end-7 col-start-5 col-end-6"></span>
      </div>
      <Link
        target="_blank"
        href={webPath}
        className="shadow-md border border-black rounded-xl w-[10.3rem] py-2 text-sm bg-slate-100/90 text-black flex items-center justify-center gap-2"
      >
        <Image src={"/frontend.svg"} width={20} height={20} alt="logo"></Image>
        {isDeployed ? "Explore the Website!" : "Explore the Code!"}
      </Link>
    </motion.div>
  );
}
function Projects() {
  const ref1 = useRef(null);
  const [isOpen, setIsOpen] = useState("");
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
        {projects.map((project, id) => (
          <Project
            name={project.name}
            key={id}
            id={(id + 1).toString()}
            description={project.description} //
            path={project.url}
            isDeployed={project.isDeployed}
            logoUrls={project.logoUrls}
            previewUrl={project.previewUrl}
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
    <div className="md:hidden h-screen py-3 flex flex-col gap-5">
      <h1 className="text-4xl">Js for Webflow</h1>
      <div className="h-[85vh] bg-purple-500 rounded-xl"></div>
    </div>
  );
}

export default Projects;
