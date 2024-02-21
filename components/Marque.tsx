import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Marque() {
  return (
    <motion.div
      initial={{ translateX: 1000, scale: 2 }}
      animate={{ translateX: -10500 }}
      transition={{
        duration: 50,
        repeat: Infinity,
        repeatDelay: -7,
        repeatType: "loop",
        // type: "linear",
      }}
      className="flex gap-24 w-full select-none"
    >
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
      <Image
        draggable="false"
        src={"/banner.svg"}
        width={2000}
        height={2000}
        alt="Banner"
      ></Image>
    </motion.div>
  );
}

export function SkillsMarque() {
  return (
    <div className="skill rounded-xl bg-black relative z-10">
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: -6000, opacity: 1 }}
        transition={{
          duration: 23,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: -8,
        }}
        className="h-full flex text-white gap-8 text-[6.4rem] select-none items-center justify-between"
      >
        {/* Frontend */}
        <h1>Framer</h1>
        <h1>
          Next<span className="text-3xl">.js</span>
        </h1>
        <h1>RadixUI</h1>
        <h1>TypeScript</h1>
        <h1>JavaScript</h1>
        <h1>
          Tailwind<span className="text-3xl">css</span>
        </h1>
        {/* Backend */}
        <h1>
          Node<span className="text-3xl">.js</span>
        </h1>
        <h1>MongoDB</h1>
        <h1>
          Express<span className="text-3xl">.js</span>
        </h1>
        <h1>Prisma</h1>
        {/* Cloud */}
        <h1>Docker</h1>
        <h1>Kubernetes</h1>
        <h1>AWS</h1>
        {/* WebScraping */}
        <h1>BrightData</h1>
        {/* Misce.... */}
        <h1>NextAuth</h1>
        <h1>Clerk</h1>
        <h1>CronJobs</h1>
      </motion.div>
    </div>
  );
}
