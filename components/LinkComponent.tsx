"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { redirect } from "next/navigation";

export function LinkComponent({
  link,
  containerStyles,
  childStyles,
}: {
  link: { url: string; name: string };
  containerStyles: string;
  childStyles: string;
}) {
  const [isHover, setIsHover] = useState("false");

  return link.name === "Resume / CV" ? (
    <Tooltip
      content={"Discover My Skills and Experience – Download My Resume!"}
      className="p-3 bg-black/30 backdrop-blur-lg w-70 border border-black/20 shadow-md rounded-xl text-white"
    >
      <Link
        onClick={() => redirect(link.url)}
        href={link.url}
        onMouseEnter={() => setIsHover("true")}
        onMouseLeave={() => setIsHover("false")}
        className={`hover:text-white ${containerStyles}`}
      >
        <div className="relative z-10 overflow-hidden">
          <motion.span
            initial={{ translateY: 5 }}
            animate={isHover}
            variants={{ true: { height: childStyles, translateY: 0 } }}
            // transition={}
            className={`absolute top-0 bg-black w-full ${childStyles} -z-10 rounded-xl`}
          ></motion.span>
          <div className="flex relative max-md:text-sm justify-between border border-black gap-3 px-3 py-4 rounded-xl hover:px-8 transition-all duration-700">
            <span>{link.name}</span>
            <p>↗</p>
          </div>
        </div>
      </Link>
    </Tooltip>
  ) : (
    <Link
      href={link.url}
      target="_blank"
      onMouseEnter={() => setIsHover("true")}
      onMouseLeave={() => setIsHover("false")}
      className={`hover:text-white ${containerStyles}`}
    >
      <div className="relative z-10 overflow-hidden">
        <motion.span
          initial={{ translateY: 5 }}
          animate={isHover}
          variants={{ true: { height: childStyles, translateY: 0 } }}
          // transition={}
          className={`absolute top-0 bg-black w-full ${childStyles} -z-10 rounded-xl`}
        ></motion.span>
        <div className="flex relative max-md:text-sm justify-between border border-black gap-3 px-3 py-4 rounded-xl hover:px-8 transition-all duration-700">
          <span>{link.name}</span>
          <p>↗</p>
        </div>
      </div>
    </Link>
  );
}
