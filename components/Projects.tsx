import React, { useEffect, useRef, useState } from "react";
import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

let projects = [
  {
    name: "Price Wise",
    description: "self-serve product and growth analytics",
    url: "https://price-wise-opal.vercel.app/",
    isDeployed: true,
    logoUrls: ["/data.svg", "/backend.svg"],
    previewUrl: "http://www.example1.com/preview.png",
    path: "/path/to/project1",
  },
  {
    name: "Price Wise",
    description: "self-serve the product and growth analytics",
    url: "https://price-wise-opal.vercel.app/",
    isDeployed: false,
    logoUrls: ["/data.svg", "/backend.svg"],
    previewUrl: "http://www.example1.com/preview.png",
    path: "/path/to/project1",
  },
];

interface Props {
  name: string;
  description: string;
  isDeployed: boolean;
  logoUrls: string[];
  previewUrl: string;
  path: string;
}

function Projects() {
  const ref = useRef(null);
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
      console.log(inView);
    }, [controls, inView]);
    return [controls];
  };
  useInViewAnimation(ref, "-40px", controls1);
  return (
    <div
      className="grid-projects relative bg-slate-50 px-3 max-md:shadow-lg border-b border-b-black"
      id="projects"
    >
      <div className="sticky h-[21vh] top-0 border-b border-black" ref={ref}>
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
                  duration: 1,
                  delay: 0.1 * i,
                  type: "spring",
                }}
              >
                {e}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="projects-container py-6">
        {projects.map((project) => (
          <Project
            key={project.description}
            name={project.name} //
            description={project.description} //
            path={project.url}
            isDeployed={project.isDeployed}
            logoUrls={project.logoUrls}
            previewUrl={project.previewUrl}
          />
        ))}
        <MobileProject />
      </div>
    </div>
  );
}

function MobileProject() {
  return (
    <div className="2xl:hidden border-b border-black h-screen py-3 flex flex-col gap-5">
      <h1 className="text-4xl">Js for Webflow</h1>
      <div className="h-[85vh] bg-purple-500 rounded-xl"></div>
    </div>
  );
}

export default Projects;
function Project({
  name,
  description,
  isDeployed,
  logoUrls,
  previewUrl,
  path: webPath,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className="data-[state=open]:bg-black data-[state=open]:text-white py-6 px-4 border-b border-black flex justify-between items-center max-2xl:hidden "
    >
      <div className="flex items-center justify-center gap-3">
        <span className="flex gap-3">
          {logoUrls.length > 1 ? (
            logoUrls.map((logoUrl) => (
              <Image
                src={logoUrl}
                width={35}
                height={20}
                alt={logoUrl}
                key={logoUrl}
              ></Image>
            ))
          ) : (
            <Image src={logoUrls[0]} width={35} height={20} alt="logo"></Image>
          )}
        </span>
        <p className="text-xl border-l-2 pl-3 border-black">{name}</p>
        <p className="max-md:hidden">{description}</p>
      </div>
      <Link
        target="_blank"
        href={webPath}
        className="shadow-md border border-black rounded-xl w-[10.3rem] py-2 text-sm bg-slate-300/20 text-black flex items-center justify-center gap-2"
      >
        <Image src={"/frontend.svg"} width={20} height={20} alt="logo"></Image>
        {isDeployed ? "Explore the Website" : "Explore the Code!"}
      </Link>
    </div>
  );
}
