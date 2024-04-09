"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setMobileMenuVisibility } from "../redux/slices/mobileMenu";
import { FaPhone } from "react-icons/fa6";

import Link from "next/link";
import NavDropDownItem from "./NavDropDownItem";
import LOGO from "@/public/Premium-Bathware.svg";
import { BASE_URL } from "@/constant";
import SearchField from "./Navbar/SearchField";
import { MdOutlineCall } from "react-icons/md";

const NAV_ITEM_CSS =
  "hover:text-gray-500 transition-all duration-[.3s] cursor-pointer";

function Navbar() {
  const [searchIconVisibility, setSearchIconVisibility] = useState(true);
  const dispatch = useDispatch();

  const onMobileMenuBtnClick = () => {
    dispatch(setMobileMenuVisibility(true));
  };

  return (
    <header className="w-[100%] bg-[#ffffff] fixed h-[60px] mx-auto z-10 px-20 sm:px-2">
      <div className="w-full relative h-[60px] flex items-center">
        <div className="sm:flex-grow">
          <Link
            className={`${
              searchIconVisibility ? "sm:block" : "sm:hidden"
            } sm:pl-3`}
            href="/"
          >
            <div className="hidden sm:block">
              <Image
                className="z-10"
                src={LOGO}
                alt="website logo"
                height={165}
                width={165}
              />
            </div>
            <div className="sm:hidden">
              <Image
                className="z-10"
                src={LOGO}
                alt="website logo"
                height={265}
                width={265}
              />
            </div>
          </Link>
        </div>
        <nav className="flex-grow sm:hidden">
          <ul className="flex gap-7 items-center justify-center text-sm relative">
            <li className={NAV_ITEM_CSS}>
              <Link href="/">Home</Link>
            </li>
            <NavDropDownItem optionname="Bathroom" />
            <NavDropDownItem optionname="Kitchen" />
            <li className={NAV_ITEM_CSS}>
              <Link href="/about-us">About us</Link>
            </li>
            <li className={NAV_ITEM_CSS}>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className={NAV_ITEM_CSS}>
              <Link
                href={BASE_URL + "/Kohler-Retail-Book-2022.pdf"}
                target="_blank"
              >
                Download Catalogue
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="tel:9831234910" className="sm:hidden">
          {/* <div className="flex items-center gap-2">
            <FaPhone size={13} color="#474646" />{" "}
            <span className="text-sm text-[#474646]">9831234910</span>
          </div> */}
          <button className="text-sm relative hover:bg-gray-400 text-white shadow-lg rounded-md bg-gray-500 flex items-center gap-2 px-5 py-[8px] transition-all duration-500">
            {/* <span className="animate-ping absolute inline-flex h-full w-full bg-gray-400 opacity-75"></span> */}
            <MdOutlineCall />
            <span>Call Now</span>
          </button>
        </Link>

        <SearchField
          onMobileMenuClicked={onMobileMenuBtnClick}
          searchIconVisibility={searchIconVisibility}
          setSearchIconVisibility={setSearchIconVisibility}
        />
      </div>
    </header>
  );
}

export default Navbar;
