import Image from "next/image";
import React from "react";
import TilesImg from "@/public/tiles.jpg";
import SocialLinks from "./SocialLinks";
import FooterOptionsList from "./FooterOptionsListView";
import FooterOptionItem from "./FooterOptionItem";
import { footerOptions } from "../datas/Footer";
import Link from "next/link";
import { navOptions } from "../datas/NavOptions";
import { BASE_URL } from "@/constant";

function Footer() {
  return (
    <footer className="w-full relative backdrop-blur-md h-auto overflow-hidden mt-11 bg-[#030303e3] px-16 py-11 sm:px-4 sm:h-auto">
      <div className="w-full grid grid-cols-3 sm:grid-cols-1 sm:gap-10">
        <div className="">
          <p className="text-white pb-1">PREMIUM BATHWARE</p>
          <p className="text-gray-400 text-sm w-[80%] sm:w-full text-justify">
            Premium Bathware offers high-quality bathroom and kitchen products,
            ranging from elegant faucets to luxurious bath accessories. Elevate
            your space with our premium selections for ultimate comfort and
            style.
          </p>
        </div>

        <div className="w-96 h-full flex items-start gap-9 sm:gap-14">
          <div>
            <p className="text-white pb-1">Bathroom</p>
            <ul>
              {navOptions.Bathroom.map((item) => (
                <li className="text-gray-400 pb-2 text-sm">
                  <Link href={BASE_URL + "/" + item.title.replaceAll(" ", "-").toLowerCase()}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white">Kitchen</p>
            <ul>
              {navOptions.Kitchen.map((item) => (
                <li className="text-gray-400 pb-2 text-sm">
                  <Link href={BASE_URL + "/" + item.title}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <SocialLinks />
          <div className="sm:w-full">
            <p className="text-white pb-1">Address</p>
            <FooterOptionItem options={footerOptions.address} />
          </div>
          <p className="text-yellow-400 text-xs">
            <Link href="https://ommdigitalsolution.com/">
              Digital Partner: OMM DIGITAL SOLUTION PVT. LTD
            </Link>
          </p>
        </div>
      </div>
      {/* <div className="border-t-[1px] border-[#333333] mt-20 flex items-center pt-9 justify-between font-[200] text-xs text-[#fff] sm:flex-col sm:text-center sm:gap-3">
        <span>© 2023 - 2024 Premium Bathware</span>
        <span>Digital Partner: OMM DIGITAL SOLUTION PVT. LTD</span>
      </div> */}
    </footer>
  );
}

export default Footer;
