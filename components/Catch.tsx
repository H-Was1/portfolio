import { email } from "@/constant";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import { redirect } from "next/navigation";

function Catch() {
  const [isOpen, setIsOpen] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };
  const ref2 = useRef(null);
  const useVariants = (ref: React.MutableRefObject<null>) => {
    let mouseXPosition = 0;
    let mouseYPosition = 0;
    const mouse = useMouse(ref, {
      enterDelay: 100,
      leaveDelay: 100,
    });
    if (mouse.clientX !== null) {
      mouseXPosition = mouse.clientX;
    }

    if (mouse.clientY !== null) {
      mouseYPosition = mouse.clientY;
    }
    return {
      default: {
        x: mouseXPosition > 0 ? mouseXPosition - 230 : mouseXPosition + 500,
        y: mouseYPosition > 0 ? mouseYPosition - 175 : mouseYPosition + 300,
        transition: {
          duration: 1.3,
          delay: 0.01,
        },
      },
    };
  };

  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = useVariants(ref2);

  return (
    <div
      className="bg-slate-50 bg-cover border-b shadow-lg shadow-gray-700/20 border-slate-500/80 rounded-b-2xl grid-catch flex items-center justify-center max-md:hidden"
      id="catchme"
      ref={ref2}
    >
      <div className="h-screen rounded-xl border border-transparent bg-white bg-grid invert w-[94vw] flex items-center justify-end px-16 absolute right-0 overflow-hidden">
        <h1 className="absolute left-10 text-8xl xl:leading-[1.3] leading-[1] w-[55%] selection:bg-pink-400/50">
          Excited to<span className="text-violet-800"> code</span>,
          <span className="text-emerald-300"> create</span>, and
          <span className="text-orange-700"> contribute</span> to your
          team&apos;s
          <span className="text-lime-400"> triumphs</span>.
        </h1>
        <motion.div
          animate={cursorVariant}
          variants={variants}
          transition={spring}
          className="cursor absolute inset-0 w-80 h-44 bg-graffiti bg-cover border border-gray-600 rounded-xl flex items-center justify-center invert"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <h1
            className="text-6xl text-white backdrop-blur-sm font-semibold data-[state=open]:hidden"
            data-state={isOpen ? "open" : "closed"}
          >
            Catch Me
          </h1>
          <Link
            onClick={() => redirect(`mailto:${email}`)}
            onDrag={() => redirect(`mailto:${email}`)}
            href={`mailto:${email}`}
            className="text-white text-3xl font-bold w-60 text-center h-16 bg-black border hidden data-[state=open]:flex data-[state=open]:justify-center data-[state=open]:items-center border-gray-700 rounded-xl"
            data-state={isOpen ? "open" : "closed"}
          >
            Ping a message
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Catch;
