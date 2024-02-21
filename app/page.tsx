"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, stagger } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import { links, name, overview, pronouns, sections } from "@/constant";
import { Marque } from "@/components/Marque";
import { LinkTree } from "@/components/LinkTree";
import SkillComponent from "@/components/SkillComponent";
import Projects from "@/components/Projects";
import Catch from "@/components/Catch";
import Contact from "@/components/Contact";
import Loading from "@/components/loading";

export default function Home() {
  //loading window
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  //in View animation
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const useInViewAnimation = (ref: any, margin: string, controls: any) => {
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
  useInViewAnimation(ref, "-200px", controls1);
  useInViewAnimation(ref2, "-250px", controls2);
  useInViewAnimation(ref3, "-260px", controls3);

  return (
    <ReactLenis root options={{ duration: 2 }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className="w-screen h-screen flex justify-center items-center fixed data-[state=open]:hidden bg-black/90 backdrop-blur-3xl z-50"
      >
        <Loading />
      </div>
      <main className="main-grid relative selection:bg-emerald-400/60">
        <section className="bg-grid bg-cover bg-slate-300/20 grid-hero sticky top-0 z-0">
          <LinkTree />
          <div className="flex justify-center">
            <div className="overflow-hidden absolute h-[50%] top-[30%] flex items-center w-[99%]">
              <Marque />
            </div>
            <Image
              draggable="false"
              className="absolute bottom-0"
              src={"/6392099811d7727f54b99e1d_Group 89-min-p-1080.png"}
              width={880}
              height={900}
              alt="hero"
            ></Image>
            <div className="justify-between gap-3 items-center absolute max-sm:hidden max-md:bottom-36 bottom-7 left-5 flex">
              <div className="border px-[.6rem] py-2 border-black rounded-xl flex justify-center">
                <motion.p
                  animate={{
                    translateY: [-16, 0, 0, 6],
                    opacity: [0, 1, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    type: "tween",
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 0.7,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    draggable="false"
                    src={"/arrowdown.svg"}
                    width={16}
                    height={60}
                    alt="logo"
                  ></Image>
                </motion.p>
              </div>
              <span className="text-md">Scroll down</span>
            </div>
          </div>
        </section>
        <motion.div
          initial={{ translateY: 200 }}
          animate={controls1}
          variants={{
            visible: { translateY: 0 },
            hidden: { translateY: 200 },
          }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "backOut",
          }}
          className="fixed w-screen z-30 bottom-5 flex justify-center max-md:hidden"
        >
          <div className="flex justify-center items-center w-screen">
            <div className="backdrop-blur-2xl flex items-center justify-between w-[23rem] px-4 gap-8 border border-gray-400/20 rounded-xl py-[9px] bg-black/50">
              <Link href={"/"}>
                <Image
                  draggable="false"
                  src={"/logo.svg"}
                  width={50}
                  height={60}
                  alt="logo"
                ></Image>
              </Link>

              {sections.map((section) => (
                <Link
                  href={section.url}
                  key={section.url}
                  className="text-sm text-white"
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="section-grid relative">
          <div
            className="grid-static bg-slate-300/20  max-md:text-center flex flex-col  relative z-10  "
            ref={ref}
          >
            <div className="middle-grid">
              <div
                id="about"
                className="px-6 overflow-hidden h-full rounded-t-xl items-center justify-center py-4 flex flex-wrap bg-black gap-6 text-white w-full"
              >
                <motion.ol
                  className="max-lg:text-5xl lg:text-7xl sticky font-bold flex"
                  animate={controls3}
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                >
                  {"About".split("").map((el, i) => (
                    <motion.li
                      ref={ref3}
                      key={i}
                      initial={{ translateY: 40, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{
                        // delay: stagger,
                        type: "spring",
                      }}
                    >
                      {el}
                    </motion.li>
                  ))}
                </motion.ol>
                <motion.p
                  ref={ref2}
                  initial={{ opacity: 0, translateX: 200 }}
                  animate={controls2}
                  variants={{
                    visible: { opacity: 1, translateX: 0 },
                    hidden: { opacity: 0, translateX: 200 },
                  }}
                  transition={{ duration: 2.6, type: "spring" }}
                  className="px-4 text-3xl max-sm:text-xl md:leading-10 md:tracking-widest md:max-w-[60vw] font-medium"
                >
                  {name}
                  <span className="text-xl font-thin">{pronouns}</span>
                  {overview}
                </motion.p>
              </div>
              <SkillComponent />
              <Catch />
              <Projects />
            </div>
          </div>
          <section
            ref={ref}
            className="bg-slate-50 grid-footer sticky bottom-0 flex justify-center items-center px-6"
          >
            <Contact />
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}
