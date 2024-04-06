"use client";

import React from "react";
import { GrClose } from "react-icons/gr";
import { VscMenu } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

interface IProps {
  onMobileMenuClicked : () => void,
  searchIconVisibility : boolean;
  setSearchIconVisibility : React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchField({onMobileMenuClicked, searchIconVisibility, setSearchIconVisibility} : IProps) {

  const mobileMenuVisibility = useSelector((state : RootState) => state.mobileMenu);

  return (
    <div className="relative">
      <button
        title="Mobile Menu Button"
        className={`${
          searchIconVisibility ? "flex" : "hidden"
        } items-center gap-3 h-[2.2rem] sm:gap-6`}
      >
        {
          mobileMenuVisibility ? <GrClose className="sm:size-[20px] sm:mr-4"/> : <VscMenu onClick={onMobileMenuClicked} className="hidden sm:block sm:size-[25px] mr-4" />
        }
        <GrClose className="hidden" />
      </button>
    </div>
  );
}
