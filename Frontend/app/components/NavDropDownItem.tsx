import React from "react";
import NavOptions from "./NavOptions";
import { IoMdArrowDropdown } from "react-icons/io";

interface IProps {
  optionname: string;
}

function NavDropDownItem({ optionname }: IProps) {
  return (
    <div className="flex items-center justify-between gap-1 cursor-pointer relative group sm:flex-col sm:items-start">
      <div className="sm:flex items-center gap-2 sm:justify-between sm:w-full">
        <li className="hover:text-gray-500 transition-all duration-[.3s] cursor-pointer">
          {optionname}
        </li>
        <IoMdArrowDropdown className={`group-hover:rotate-180 hidden sm:block sm:size-5`} />
      </div>
      <NavOptions optionname={optionname}/>
    </div>
  );
}

export default NavDropDownItem;
