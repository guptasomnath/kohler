import React from "react";
import NavOptions from "./NavOptions";
import { IoMdArrowDropdown } from "react-icons/io";

interface IProps {
  optionname: string;
}

function NavDropDownItem({ optionname }: IProps) {
  return (
    <li className="flex items-center justify-between gap-1 cursor-pointer relative group sm:flex-col sm:items-start">
      <ul className="sm:flex items-center gap-2 sm:justify-between sm:w-full">
        <li className="hover:text-gray-500 transition-all duration-[.3s] cursor-pointer">
          {optionname}
        </li>
        <li>
          <IoMdArrowDropdown
            className={`group-hover:rotate-180 hidden sm:block sm:size-5`}
          />
        </li>
      </ul>
      <NavOptions optionname={optionname} />
    </li>
  );
}

export default NavDropDownItem;
