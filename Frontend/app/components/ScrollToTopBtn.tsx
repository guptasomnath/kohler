"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setScrollTo } from "../redux/slices/scrollTo";

function ScrollToTopBtn() {
  const dispatch = useDispatch();
  return (
    <button
      className="absolute bottom-0 right-0"
      onClick={() => dispatch(setScrollTo("blog-1-scroll-top"))}
      title="Scroll To Top Button"
    >
      ScrollToTopBtn
    </button>
  );
}

export default ScrollToTopBtn;
