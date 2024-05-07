"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { previews, projects } from "@/constant";
import Link from "next/link";

const HeroCarousel = () => {
  return (
    <div className="hero-carousel py-8">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        // interval={2000}
        showArrows={false}
        showStatus={false}
        className="h-full"
      >
        {projects.map((project, i) => (
          <Link href={project.url} key={project.name}>
            <Image
              src={previews[i]}
              alt="null"
              width={484}
              height={14}
              className="object-cover"
            />
          </Link>
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
