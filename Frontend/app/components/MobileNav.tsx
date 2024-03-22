import React from "react";
import NavDropDownItem from "./NavDropDownItem";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setMobileMenuVisibility } from "../redux/slices/mobileMenu";
import { RootState } from "../redux/store";
import { BASE_URL } from "@/constant";

function MobileNav() {
  const mobileMenu = useSelector((state: RootState) => state.mobileMenu);
  const NAV_ITEM_CSS =
    "hover:text-gray-500 transition-all duration-[.3s] cursor-pointer";

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setMobileMenuVisibility(false))}
      className={`hidden w-full h-full bg-[#0000005e] absolute top-0 bottom-0 z-40 ${
        mobileMenu ? "sm:block" : "hidden"
      }`}
    >
      <div className="relative h-full">
        <nav
          onClick={(e) => e.stopPropagation()}
          className="w-1/2 bg-white sm:h-full absolute right-0 border-l-2"
        >
          <ul className="flex flex-col gap-3 px-4 pt-8">
            <NavDropDownItem optionname="Bathroom" />
            <li className={NAV_ITEM_CSS}>Support</li>
            <li className={NAV_ITEM_CSS}>
              <Link href="/about">About us</Link>
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
      </div>
    </div>
  );
}

export default MobileNav;
