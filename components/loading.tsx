import React, { useEffect, useState, useRef } from "react";
import { Marque } from "./Marque";

function Loading() {
  return (
    <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-black/50 text-white gap-4 sm:text-4xl">
      <div className="overflow-hidden absolute -z-10 scale-150 blur-md h-[50%] top-[30%] flex items-center w-[99%] invert">
        <Marque />
      </div>
      <span
        className={`rounded-full p-2 flex gap-4 items-center justify-center font-normal max-sm:text-2xl`}
      >
        <span>Hammad</span>
        <span className="font-bold text-fuchsia-700 sm:text-5xl">Wasi</span>
        <span className="text-3xl">|</span>
      </span>
      <p>Portfolio</p>
    </div>
  );
}

export default Loading;
