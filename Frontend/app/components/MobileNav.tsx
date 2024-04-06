import React from "react";
import NavDropDownItem from "./NavDropDownItem";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setMobileMenuVisibility } from "../redux/slices/mobileMenu";
import { RootState } from "../redux/store";
import { BASE_URL } from "@/constant";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";

function MobileNav() {
  const mobileMenu = useSelector((state: RootState) => state.mobileMenu);
  const NAV_ITEM_CSS =
    "hover:text-gray-500 transition-all duration-[.3s] cursor-pointer";

  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setMobileMenuVisibility(false))}
      className={`hidden w-full absolute top-0 bottom-0 z-40 ${
        mobileMenu ? "sm:block" : "hidden"
      }`}
    >
      <div className="relative h-full">
        <nav
          onClick={(e) => e.stopPropagation()}
          className="w-[70%] bg-white absolute right-0 top-[3.8rem] shdow border pb-4"
        >
          <ul className="flex flex-col gap-3 px-4 pt-4">
            <li className={NAV_ITEM_CSS}>
              <Link href="/">Home</Link>
            </li>
            <NavDropDownItem optionname="Bathroom" />
            <NavDropDownItem optionname="Kitchen" />
            <li
              onClick={() => dispatch(setMobileMenuVisibility(false))}
              className={NAV_ITEM_CSS}
            >
              <Link href="/about-us">About us</Link>
            </li>
            <li className={NAV_ITEM_CSS}>
              <Link
                href={BASE_URL + "/Kohler-Retail-Book-2022.pdf"}
                target="_blank"
              >
                Download Catalogue
              </Link>
            </li>
            <Link href="tel:9831234910">
              {/* <div className="flex items-center gap-2">
                <FaPhone size={13} color="#474646" />{" "}
                <span className="text-sm text-[#474646]">9831234910</span>
              </div> */}
              <button className="text-sm relative hover:bg-gray-400 text-white shadow-lg rounded-md bg-gray-600 flex items-center gap-2 px-5 py-[8px] transition-all duration-500">
                <MdOutlineCall />
                <span>Call Now</span>
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileNav;
