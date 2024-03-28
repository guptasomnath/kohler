"use client";

import React, { useEffect, useState } from "react";
import Banner1 from "@/public/banner1.png";
import Banner2 from "@/public/banner2.png";
import Banner3 from "@/public/banner3.png";
import Banner4 from "@/public/banner4.png";
import Banner5 from "@/public/banner5.png";
import Banner6 from "@/public/banner6.png";

import MBanner1 from "@/public/banner-mobile1.png";
import MBanner2 from "@/public/banner-mobile2.png";
import MBanner3 from "@/public/banner-mobile3.png";
import MBanner4 from "@/public/banner-mobile4.png";
import MBanner5 from "@/public/banner-mobile5.png";
import MBanner6 from "@/public/banner-mobile6.png";
import Image from "next/image";

function Banner() {
  const bannerList = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  const mBannerList = [MBanner1, MBanner2, MBanner3, MBanner4, MBanner5, MBanner6];

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
      className={`overflow-hidden h-[600px] sm:h-[350px] w-full relative banner ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="sm:hidden">
        {bannerList.map((imageUrl, index) => (
            <Image
              key={index}
              height={1500}
              width={1500}
              src={imageUrl}
              alt={`Banner ${index + 1}`}
              className={`img ${
                index === currentIndex ? "active" : ""
              } sm:h-[350px] sm:object-cover`}
            />
        ))}
      </div>

      <div className="hidden sm:block">
        {mBannerList.map((imageUrl, index) => (
            <Image
              key={index * 10}
              height={1500}
              width={1500}
              src={imageUrl}
              alt={`Banner ${index + 1}`}
              className={`img ${
                index === currentIndex ? "active" : ""
              } sm:h-[350px] sm:object-cover`}
            />
        ))}
      </div>
    </div>
  );
}

export default Banner;
