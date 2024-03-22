"use client";

import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";
import SearchAutoComplete from "./SearchAutoComplete";

interface IProps {
  onMobileMenuClicked : () => void,
  searchIconVisibility : boolean;
  setSearchIconVisibility : React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchField({onMobileMenuClicked, searchIconVisibility, setSearchIconVisibility} : IProps) {
  const handelSearchIcon = () => {
    setSearchIconVisibility(!searchIconVisibility);
  };

  return (
    <div className="relative">
      <button
        className={`${
          searchIconVisibility ? "flex" : "hidden"
        } items-center gap-3 h-[2.2rem] sm:gap-6`}
      >
        {/* <span className="text-xs sm:hidden">Search</span> */}
        {/* <RiSearch2Line onClick={handelSearchIcon} size={18} className="sm:size-[25px]" /> */}
        <VscMenu onClick={onMobileMenuClicked} className="hidden sm:block sm:size-[25px] mr-4" />
        <GrClose className="hidden" />
      </button>

      {/* <div
        className={`${
          searchIconVisibility ? "hidden" : "flex"
        } items-center h-[2.2rem] overflow-hidden sm:w-[100vw] sm:justify-center`}
      >
        <input
          className="outline-none border px-3 h-[2.2rem] text-[14px]"
          type="text"
          placeholder="Search.."
        />
        <button className="bg-[#3d3c3c] h-full px-2 flexCenter cursor-pointer">
          <RiSearch2Line fill="white" size={18} />
        </button>
      </div>
      <SearchAutoComplete searchIconVisibility = {searchIconVisibility}/> */}
    </div>
  );
}
