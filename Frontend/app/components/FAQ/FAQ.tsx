"use client";

import React, { useState } from "react";
import { FAQ_LIST } from "@/app/datas/FAQ_LIST";
import FAQ_ITEM from "./FAQ_ITEM";

interface IProps {
  className?: string;
  oneLine?: boolean;
  keyname: string;
}

function FAQ({ className, keyname, oneLine }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const FAQS = FAQ_LIST.filter((item) => item.key === keyname);

  const checkIsFloat = (num: number) => {
    const numtostr = num.toString();
    return numtostr.includes(".");
  };

  return (
    <div
      className={`w-full px-14 flex flex-col sm:px-5 items-center ${className}`}
    >
      <h2 className="text-3xl font-semibold text-gray-500 pb-8 sm:pt-8 sm:text-xl">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      {!oneLine ? (
        <div className={`w-full flex items-start gap-4 justify-center sm:flex-col`}>
          <ul className="grid grid-cols-1 gap-6">
            {FAQS[0].info?.map((item, index) =>
              checkIsFloat(index / 2) ? null : (
                <FAQ_ITEM
                  oneLine={false}
                  key={index}
                  index={index}
                  datas={item}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )
            )}
          </ul>

          <ul className="grid grid-cols-1 gap-6">
            {FAQS[0]?.info.map((item, index) =>
              checkIsFloat(index / 2) ? (
                <FAQ_ITEM
                oneLine={false}
                  key={index}
                  index={index}
                  datas={item}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              ) : null
            )}
          </ul>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6">
          {FAQS[0].info?.map((item, index) => (
            <FAQ_ITEM
              oneLine={true}
              key={index}
              index={index}
              datas={item}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FAQ;
