import { links } from "@/constant";
import React from "react";
import { LinkComponent } from "./LinkComponent";
import Time from "./Time";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col gap-16">
      <span className="inline-block py-8 px-4 border-2 border-black rounded-xl select-none">
        <Image
          draggable="false"
          src={"/banner.svg"}
          width={1300}
          height={400}
          alt="name"
        ></Image>
      </span>
      <div className="flex flex-wrap text-2xl justify-between items-baseline gap-4">
        <div className="flex flex-col gap-8 font-semibold flex-wrap max-xl:w-full justify-center">
          <div className="flex justify-center items-center flex-wrap">
            Made with love and{" "}
            <div className="mx-4 flex gap-6 select-none">
              <Image
                draggable="false"
                src={"/next.svg"}
                width={100}
                height={40}
                alt="next"
              ></Image>
              +
              <Image
                draggable="false"
                src={"/framer.svg"}
                width={30}
                height={40}
                alt="framer"
              ></Image>
            </div>{" "}
            in Lahore, Pakistan.
          </div>
          <div className="font-bold flex max-xl:justify-center gap-3 max-sm:text-2xl sm:text-5xl">
            <span className="text-gray-500/80">Local time</span>
            <span className="text-gray-500/80">-</span>
            <Time />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-[36vw] max-xl:w-full relative">
          {links.map((link) => (
            <LinkComponent
              link={link}
              key={link.name}
              containerStyles=""
              childStyles="4.1rem"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
