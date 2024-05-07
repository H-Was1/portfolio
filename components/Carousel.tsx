"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { projects } from "@/constant";

const HeroCarousel = () => {
  return (
    <div className="hero-carousel h-full bg-slate-300">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        // interval={2000}
        showArrows={false}
        showStatus={false}
        className="h-full"
      >
        {projects.map((image) => (
          <Image
            src={"/pexels-pacific-3783385.jpg"}
            alt="null"
            width={484}
            height={904}
            className="object-cover"
            key={image.alt}
          />
        ))}
      </Carousel>
      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
