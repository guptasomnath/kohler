"use client";

import React, { useEffect, useState } from "react";
import Banner1 from "@/public/banner1.webp";
import Banner2 from "@/public/banner2.webp";
import Banner3 from "@/public/banner3.webp";
import Image from "next/image";

function Banner() {
  const bannerList = [Banner1, Banner2, Banner3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Delay before starting the animation

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerList.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [bannerList]);

  return (
    <div
      className={`overflow-hidden h-[600px] w-full relative banner ${
        loaded ? "loaded" : ""
      }`}
    >
      {bannerList.map((imageUrl, index) => (
        <Image
          key={index}
          height={1500}
          width={1500}
          src={imageUrl}
          alt={`Banner ${index + 1}`}
          className={`img ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default Banner;
