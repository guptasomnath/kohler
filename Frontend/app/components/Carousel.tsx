"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

interface IProps {
  children: React.ReactNode;
  datasLength: number;
  className? : string;
}

const Carousel = ({ children, datasLength, className }: IProps) => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const scrollRef = useRef<HTMLUListElement | null>(null);

  let scrollCurrentPosition = 0;

  const scroll = (
    position: number,
    ref: MutableRefObject<HTMLUListElement | null>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      ref.current.scrollLeft = position;
    }
  };

  const getTotalLayoutWidth = () => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollLeft)
      return scrollRef.current.scrollWidth;
    }

    return 0;
  };

  const goToNextSlide = () => {
    const positionToScroll = scrollCurrentPosition + 348;
    console.log(positionToScroll)
    if (positionToScroll >= getTotalLayoutWidth()) return false;
    console.log(getTotalLayoutWidth())

    scroll(positionToScroll, scrollRef);
    scrollCurrentPosition = positionToScroll;
    // setCurrentPosition(positionToScroll);
    return true;
  };

  const goPrevSlide = () => {
    const positionToScroll = scrollCurrentPosition - 348;
    if (positionToScroll < 0) return false;

    scroll(positionToScroll, scrollRef);
    // setCurrentPosition(positionToScroll);
    scrollCurrentPosition = positionToScroll;
    return true;
  };

  useEffect(() => {
    // const timerId = setInterval(() => {
    //   let isGoesNext = goToNextSlide();
    //   if (!isGoesNext) {
    //     scrollCurrentPosition = 0;
    //     scroll(scrollCurrentPosition, scrollRef);
    //   }
    // }, 2500);

    // setIntervalId(timerId);

  
    // const timerId = setInterval(() => {

    //   console.log(scrollCurrentPosition, getTotalLayoutWidth())

    //   if(scrollCurrentPosition + 300 >= getTotalLayoutWidth()){
    //     scrollCurrentPosition = 0;
    //     scroll(scrollCurrentPosition, scrollRef)
    //   }else {
    //     goToNextSlide();
    //   }

    // }, 2500)
  }, []);

  const onPrevBtnClicked = () => {

    if (intervalId) {
      clearInterval(intervalId);
    } else {
      goPrevSlide();
    }
  };

  const onNextBtnClicked = () => {

    if (intervalId) {
      clearInterval(intervalId);
    } else {
      goToNextSlide();
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden relative w-full">
        <ul
          ref={scrollRef}
          className="flex transition-transform duration-300 ease-in-out overflow-x-scroll gap-12 flex-nowrap"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {children}
        </ul>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-5 rounded-full focus:outline-none"
        onClick={onPrevBtnClicked}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-5 rounded-full focus:outline-none"
        onClick={onNextBtnClicked}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Carousel;

