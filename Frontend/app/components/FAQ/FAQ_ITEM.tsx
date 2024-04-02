"use client";

import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

interface IProps {
  datas: { question: string; answer: string };
  index: number;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

function FAQ_ITEM({ datas, index, currentIndex, setCurrentIndex }: IProps) {
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
        className={`w-[550px] sm:w-full bg-gray-200 px-6 py-3 overflow-hidden cursor-pointer`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{datas.question}</h3>
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
