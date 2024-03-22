import Image from "next/image";
import React from "react";
import TilesImg from "@/public/tiles.jpg";
import SocialLinks from "./SocialLinks";
import FooterOptionsList from "./FooterOptionsListView";

function Footer() {
  return (
    <footer className="w-full relative backdrop-blur-md h-[450px] overflow-hidden mt-11 bg-[#030303e3] px-16 py-11 sm:px-4 sm:h-auto">
      <div className="w-full flex items-center justify-between sm:flex-col">
        <SocialLinks />
        <div className="flex flex-col items-start sm:mt-10 sm:px-9">
          <span className="text-white text-[.8rem] sm:text-[.6rem]">
            Sign up to receive email news, promotions, and information about
            Kohler.
          </span>
          <div className="border-2 border-gray-400 flex items-center py-2 px-3 mt-3 w-full">
            <input
              className="bg-transparent outline-none text-sm flex-grow text-white"
              type="text"
              placeholder="Your email"
            />
            <button className="px-2 h-full text-sm text-white">Submit</button>
          </div>
        </div>
      </div>
      <FooterOptionsList />
      <div className="border-t-[1px] border-[#333333] mt-20 flex items-center pt-9 justify-between font-[200] text-xs text-[#fff] sm:flex-col sm:text-center sm:gap-3">
         <span>© 2023 - 2024 Premium Bathware</span>
         <span>Digital Partner: OMM DIGITAL SOLUTION PVT. LTD</span>
      </div>
    </footer>
  );
}

export default Footer;
