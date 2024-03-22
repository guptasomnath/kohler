"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setMobileMenuVisibility } from "../redux/slices/mobileMenu";

import Link from "next/link";
import NavDropDownItem from "./NavDropDownItem";
import SearchField from "./Navbar/SearchField";
import WebSiteLogo from "@/public/BLOK_LOGO.svg";
import { BASE_URL } from "@/constant";

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
            } sm:pl-5`}
            href="/"
          >
            <Image
              className="z-10 sm:size-[90px]"
              src={WebSiteLogo}
              alt="website logo"
              height={120}
              width={120}
            />
          </Link>
        </div>
        <nav className="flex-grow sm:hidden">
          <ul className="flex gap-7 items-center justify-center text-sm relative">
            <NavDropDownItem optionname="Bathroom" />
            <NavDropDownItem optionname="Kitchen" />
            <li className={NAV_ITEM_CSS}>
              <Link href="/about">About us</Link>
            </li>
            <li className={NAV_ITEM_CSS}>
              <Link href={BASE_URL + "/Kohler-Retail-Book-2022.pdf"} target="_blank">
                Download Catalogue
              </Link>
            </li>
          </ul>
        </nav>

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
