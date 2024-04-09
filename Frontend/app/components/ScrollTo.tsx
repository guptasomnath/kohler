"use client";

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { RootState } from "../redux/store";

import { testMap } from "../redux/testMap";

interface IProps {
  children: React.ReactNode;
  className?: string;
  scrollName: string;
}

function ScrollTo({ children, className, scrollName }: IProps) {
  // const scrollToName = useSelector((state: RootState) => state.scrollTo);
  const divRef = useRef<HTMLDivElement>(null);

  // const scrollToPosition 

  useEffect(() => {
    testMap.set(scrollName, divRef);
  }, []);

  // useEffect(() => {
  //   console.log(scrollToName)
  //   scroller.scrollTo("blog-1-scroll-top", {
  //     duration: 800,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // }, [scrollToName]);

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
}

export default ScrollTo;
