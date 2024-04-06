"use client";

import React from "react";
import { navOptions } from "../datas/NavOptions";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";

import { BASE_URL } from "@/constant";

interface IProps {
  optionname: string;
}

function NavOptions({ optionname }: IProps) {
  const router = useRouter();
  const onAnyNavLinkClick = (title: string) => {
    if (title.toLowerCase() === "new launches") {
      router.push(
        `${BASE_URL}/${title.toLowerCase().replaceAll(" ", "-")}/${title
          .toLowerCase()
          .replaceAll(" ", "-")}`
      );
    } else {
      router.push(`${BASE_URL}/${title.toLowerCase().replaceAll(" ", "-")}`);
    }
  };
  return (
    <>
      <IoMdArrowDropdown className={`group-hover:rotate-180 sm:hidden`} />
      <ul
        className={`hidden group-hover:block w-60 pt-5 top-5 sm:list-disc sm:top-0 sm:pt-0 absolute sm:relative sm:shadow-none shadow-[rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px]`}
      >
        <li
          className={`bg-slate-50 border sm:border-none sm:list-disc sm:border-b-2 sm:bg-transparent h-full w-full`}
        >
          {optionname === "Bathroom"
            ? navOptions.Bathroom.map((item, index) => {
                return (
                  <li
                    onClick={() => onAnyNavLinkClick(item.title)}
                    key={item.title}
                    className={`pl-4 py-2 px-2 sm:px-2 hover:bg-slate-200 flex items-center gap-3 relative`}
                  >
                    <GoDotFill className="hidden sm:block" />
                    {item.title}
                  </li>
                );
              })
            : navOptions.Kitchen.map((item, index) => {
                return (
                  <li
                    onClick={() => onAnyNavLinkClick(item.title)}
                    key={item.title}
                    className={`pl-4 py-2 px-2 sm:px-2 hover:bg-slate-200 flex items-center gap-3 relative`}
                  >
                    <GoDotFill className="hidden sm:block" />
                    {item.title}
                  </li>
                );
              })}
        </li>
      </ul>
    </>
  );
}

export default NavOptions;
