import React from "react";
import SocialLinks from "./SocialLinks";
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
            <p className="text-white pb-1">BATHROOM</p>
            <ul>
              {navOptions.Bathroom.map((item, index) => (
                <li key={index} className="text-gray-400 pb-2 text-sm">
                  {item.title.includes("New Launches") ? (
                    <Link
                      href={
                        BASE_URL +
                        "/" +
                        item.title.replaceAll(" ", "-").toLowerCase() +
                        "/" +
                        item.title.replaceAll(" ", "-").toLowerCase()
                      }
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <Link
                      href={
                        BASE_URL +
                        "/" +
                        item.title.replaceAll(" ", "-").toLowerCase()
                      }
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white">KITCHEN</p>
            <ul>
              {navOptions.Kitchen.map((item, index) => (
                <li key={index} className="text-gray-400 pb-2 text-sm">
                  <Link href={BASE_URL + "/" + item.title.replaceAll(" ", "-").toLowerCase()}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <SocialLinks />
          <div className="sm:w-full">
            <p className="text-white pb-1">ADDRESS</p>
            <FooterOptionItem options={footerOptions.address} />
          </div>
          <p className="text-yellow-400 text-xs">
            <Link href="https://ommdigitalsolution.com/" target="_blank">
              Digital Partner: OMM DIGITAL SOLUTION PVT. LTD
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
