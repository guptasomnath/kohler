"use client";

import React from "react";
import { navOptions } from "../datas/NavOptions";
import { IoMdArrowDropdown } from "react-icons/io";
import { BASE_URL } from "@/constant";

interface IProps {
  optionname: string;
}

function NavOptions({ optionname }: IProps) {
  const onAnyNavLinkClick = (title: string) => {
    if (title === "New Launches") {
      window.open(`${BASE_URL}/products/${title}/${title}`)
    } else {
      window.open(`${BASE_URL}/overview/${title}`);
    }
  };
  return (
    <>
      <IoMdArrowDropdown className={`group-hover:rotate-180 sm:hidden`} />
      <ul
        className={`hidden group-hover:block w-60 pt-5 top-5 sm:top-0 sm:pt-0 absolute sm:relative sm:shadow-none shadow-[rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px]`}
      >
        <div
          className={`bg-slate-50 border sm:border-none sm:border-b-2 sm:bg-transparent h-full w-full`}
        >
          {optionname === "Bathroom"
            ? navOptions.Bathroom.map((item, index) => {
                return (
                  <li
                    onClick={() => onAnyNavLinkClick(item.title)}
                    key={item.title}
                    className={`pl-4 py-2 px-2 sm:px-0 hover:bg-slate-200 flex justify-between relative`}
                  >
                    {/* <Link href={`${BASE_URL}/overview/${item.title}`}>{item.title}</Link> */}
                    {item.title}
                    {/* <GrFormNext />
                  <SubDropDown groupName={groupName} list={item.child} /> */}
                  </li>
                );
              })
            : navOptions.Kitchen.map((item, index) => {
                return (
                  <li
                    onClick={() => onAnyNavLinkClick(item.title)}
                    key={item.title}
                    className={`pl-4 py-2 px-2 sm:px-0 hover:bg-slate-200 flex justify-between relative`}
                  >
                    {/* <Link href={`${BASE_URL}/overview/${item.title}`}>{item.title}</Link> */}
                    {item.title}
                    {/* <GrFormNext />
                <SubDropDown groupName={groupName} list={item.child} /> */}
                  </li>
                );
              })}
        </div>
      </ul>
    </>
  );
}

export default NavOptions;
