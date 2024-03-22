"use client";

import React, { useEffect, useState } from "react";
import Input from "./Input";
import { IoCloseOutline } from "react-icons/io5";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setContactUsSlideVisibility } from "../redux/slices/contactUsSlider";

function EnquerySlider() {
  const dispatch = useDispatch();

  const contactUssliderVisibility = useSelector(
    (state: RootState) => state.contactUsSlider
  );
  const handleContactFormCloseBtnClick = () => {
    dispatch(setContactUsSlideVisibility(false));
  };
  const blackBackgroundOnClick = () => {
    dispatch(setContactUsSlideVisibility(false));
  };

  useEffect(() => {
    if (contactUssliderVisibility === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [contactUssliderVisibility]);

  const onFormClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={blackBackgroundOnClick}
      className={`absolute w-full bg-[#00000038] z-20 flex items-center justify-end overflow-hidden ${
        contactUssliderVisibility ? `block` : "hidden"
      }`}
    >
      <form
        onClick={onFormClick}
        className={`h-full bg-white w-[500px] sm:w-full pt-5 px-12 sm:px-3 sm:py-5 enqueryFormShdow ${
          contactUssliderVisibility ? `slideFromRight` : "slideToLeft"
        }`}
      >
        <div className="w-full flex items-center justify-end">
          <IoCloseOutline
            onClick={handleContactFormCloseBtnClick}
            className="cursor-pointer fadeInAnimation"
            size={25}
          />
        </div>
        <h3
          className={`text-4xl font-[600] text-[#524646] w-[380px] sm:w-full py-5 sm:pb-2 sm:text-[2rem] fadeInAnimation`}
        >
          Send Us A Message
        </h3>
        <Input placeholder="Full name" className="fadeInAnimation" />
        <Input placeholder="Email address" className="fadeInAnimation" />
        <Input
          placeholder="Phone number"
          type="number"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          className="fadeInAnimation"
        />
        <textarea
          placeholder="Message"
          className="px-3 outline-none py-2 border-2 w-full mt-5 text-sm sm:mt-4 fadeInAnimation"
          cols={30}
          rows={10}
        ></textarea>
        <button className="px-4 py-2 w-full bg-blue-400 text-white font-medium mt-5 text-sm fadeInAnimation">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EnquerySlider;
