"use client";

import React, { useState, useRef } from "react";

import { IoChevronDown } from "react-icons/io5";
import IntersectionObserverComponent from "../IntersectionObserverComponent";

interface IProps {
  children?: React.ReactNode;
  heading: string;
}

function CollapsibleMenu({ children, heading }: IProps) {
  const [hasCollaps, setHasCollaps] = useState(true);
  const collapseRef = useRef<HTMLDivElement>(null);

  //${hasCollaps ? "h-0 transition-all duration-500" : "h-auto transition-all duration-1000"}

  const getContentHeight = (): number => {
    if (collapseRef.current) {
      return collapseRef.current.scrollHeight;
    }
    return 0;
  };

  return (
    <div className="w-full px-24 sm:px-3 mt-8">
      <div className="px-7 py-4 pb-3">
        <div className="flex justify-center gap-10 sm:gap-0 sm:justify-between items-center">
          <IntersectionObserverComponent className="duration-1000" beforeAnimation="opacity-0" afterAnimation="focus-in-expand">
            <h2 onClick={() => setHasCollaps(!hasCollaps)} className="text-3xl font-semibold text-gray-500 sm:text-xl cursor-pointer">
              {heading}
            </h2>
          </IntersectionObserverComponent>
          <IoChevronDown
            onClick={() => setHasCollaps(false)}
            size={23}
            className={`cursor-pointer ${hasCollaps ? "block" : "hidden"}`}
          />
          <IoChevronDown
            onClick={() => setHasCollaps(true)}
            size={23}
            className={`cursor-pointer rotate-180 transition-all duration-500  ${
              hasCollaps ? "hidden" : "block"
            }`}
          />
          {/* <input type="checkbox" className="toggle" /> */}
        </div>
        {/* Content */}

        <div
          className={`overflow-hidden ${
            hasCollaps ? "h-0 text-sm" : `h-auto text-base`
          } transition-all duration-500`}
        >
          <div ref={collapseRef} className={`pt-2 flex flex-col gap-5`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleMenu;
