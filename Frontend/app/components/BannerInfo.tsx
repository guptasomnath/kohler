import React from "react";
import HomeActionsBtn from "./HomeActionsBtn";

import "@/app/animations/slidUp.css";

function BannerInfo() {
  return (
    <section className="absolute top-0 w-full h-[600px] flex flex-col items-start overflow-hidden">
      <div className="w-[750px] backdrop-blur-sm pl-24 pr-28 h-full bg-[#000000b9] flex flex-col justify-center items-start pb-12 sm:w-full sm:pl-4 sm:pr-4">
        <h1 className="text-white text-[60px] font-[400] leading-[70px] text-left pb-3 sm:text-[30px] sm:leading-[32px]">
          LUXURY REDEFINED, Premium Bathware
        </h1>
        <p className="text-white font-thin text-[15px] sm:text-[13px] slidUp">
          Indulge in luxurious comfort with our premium bathroom products,
          meticulously crafted to elevate your daily routine to a new level of
          sophistication.
        </p>
        <HomeActionsBtn />
      </div>
    </section>
  );
}

export default BannerInfo;
