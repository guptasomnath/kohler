"use client";

import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

interface IProps {
  oneLine?: boolean;
  className? : string;
  datas: { question: string; answer: string };
  index: number;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

function FAQ_ITEM({ datas, oneLine, index, currentIndex, setCurrentIndex, className }: IProps) {
  const [isCollapse, setIsCollapse] = useState(false);
  // const expendOrCollapseClick = () => {
  //   if (isCollapse) {
  //     collaps();
  //   } else {
  //     expand();
  //   }
  // };

  const expand = () => {
    setCurrentIndex(index);
    setIsCollapse(true);
  };
  const collaps = () => {
    setCurrentIndex(index);
    setIsCollapse(false);
  };

  return (
    <>
      <li
        // onClick={expendOrCollapseClick}
        className={`bg-gray-200 px-6 py-3 overflow-hidden cursor-pointer ${oneLine ? "w-[750px] sm:w-full" : "w-[550px] sm:w-full"}`}
      >
        <div className={`flex items-center justify-between ${oneLine ? "gap-6" : "gap-3"}`}>
          <h2 className={`font-semibold ${className}`}>{datas.question}</h2>
          <IoAdd
            onClick={expand}
            className={`cursor-pointer ${
              index === currentIndex && isCollapse ? "hidden" : "block"
            }`}
            size={23}
          />
          <FiMinus
            onClick={collaps}
            className={`cursor-pointer  ${
              index === currentIndex && isCollapse ? "block" : "hidden"
            }`}
            size={23}
          />
        </div>
        <p
          className={`pt-2 text-[13px] " ${
            index === currentIndex
              ? isCollapse
                ? "block"
                : "hidden"
              : "hidden"
          } transition-all duration-500 text-justify`}
        >
          {datas.answer}
        </p>
      </li>
    </>
  );
}

export default FAQ_ITEM;
