import React from "react";
import HomeActionsBtn from "./HomeActionsBtn";

import "@/app/animations/slidUp.css";

function BannerInfo() {
  return (
    <section className="absolute top-0 w-full h-[600px] sm:h-[350px] flex flex-col justify-center overflow-hidden sm:top-1">
      {/* <div className="w-1/2 backdrop-blur-sm ml-10 rounded-3xl pl-24 sm:ml-0 sm:rounded-none pr-28 h-auto bg-[#000000b9] flex flex-col justify-center items-start py-12 sm:w-full sm:pl-4 sm:pr-4">
        <h1 className="text-white text-[50px] font-[400] leading-[55px] text-left pb-3 sm:text-[30px] sm:leading-[32px]">
          LUXURY REDEFINED, Premium Bathware
        </h1>
        <p className="text-white font-thin text-[14px] sm:text-[13px] slidUp">
          Indulge in luxurious comfort with our premium bathroom products,
          meticulously crafted to elevate your daily routine to a new level of
          sophistication.
        </p>
        <HomeActionsBtn />
      </div> */}

      <div className="w-1/2 sm:hidden backdrop-blur-sm ml-10 rounded-3xl pl-24 sm:ml-0 sm:rounded-none pr-28 h-auto bg-[#000000b9] flex flex-col justify-center relative sm:-bottom-20 sm:z-10 items-start py-12 sm:w-full sm:pl-4 sm:pr-4">
        <h1 className="text-white text-[50px] font-[400] leading-[55px] text-left pb-3 sm:text-[30px] sm:leading-[32px]">
          LUXURY REDEFINED, Premium Bathware
        </h1>
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
