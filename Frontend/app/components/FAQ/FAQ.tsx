"use client";

import React, { useState } from "react";
import { FAQ_LIST } from "@/app/datas/FAQ_LIST";
import FAQ_ITEM from "./FAQ_ITEM";

interface IProps {
  keyname: string;
}

function FAQ({ keyname }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const FAQS = FAQ_LIST.filter((item) => item.key === keyname);

  const checkIsFloat = (num: number) => {
    const numtostr = num.toString();
    // console.log(numtostr)
    // console.log(numtostr.includes("."))
    return numtostr.includes(".");
  };

  return (
    <div className="w-full px-14 flex flex-col items-center sm:px-5">
      <h3 className="text-3xl font-semibold text-gray-500 pb-8 sm:pt-8 sm:text-xl">
        FREQUENTLY ASKED QUESTIONS
      </h3>
      <div className="w-full flex items-start justify-center gap-4 sm:flex-col">
        <ul className="grid grid-cols-1 gap-6">
          {FAQS[0].info?.map((item, index) =>
            checkIsFloat(index / 2) ? null : (
              <FAQ_ITEM key={index} index = {index} datas={item} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
            )
          )}
        </ul>

        <ul className="grid grid-cols-1 gap-6">
          {FAQS[0]?.info.map((item, index) =>
            checkIsFloat(index / 2) ? (
              <FAQ_ITEM key={index} index = {index} datas={item} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
