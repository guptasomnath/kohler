import React from "react";
import HomeActionsBtn from "./HomeActionsBtn";

import "@/app/animations/slidUp.css";

function BannerInfo() {
  return (
    <section className="absolute top-0 w-full h-[600px] sm:h-[350px] flex flex-col justify-center overflow-hidden sm:top-1">
      <div className="w-1/2 sm:hidden backdrop-blur-[2px] ml-10 rounded-[3rem] pl-24 sm:ml-0 sm:rounded-none pr-28 h-auto bg-[#00000067] flex flex-col justify-center relative sm:-bottom-20 sm:z-10 items-start py-12 sm:w-full sm:pl-4 sm:pr-4">
        <h2 className="text-white text-[50px] font-[400] leading-[55px] text-left pb-3 sm:text-[30px] sm:leading-[32px]">
          LUXURY REDEFINED, Premium Bathware
        </h2>
        <p className="text-white font-thin text-[14px] sm:text-[13px] slidUp">
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
