"use client";

import React from "react";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Page() {
  const ref = useRef(null);
  const controls1 = useAnimation();
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
  return (
    <div>
      <div className="bg-yellow-200 h-screen">page</div>
      <div className="bg-red-200 h-screen">page</div>
      <div className="bg-yellow-200 h-screen">page</div>
      <ul className="bg-emerald-200 h-screen flex justify-center items-center"></ul>
    </div>
  );
}

export default Page;
