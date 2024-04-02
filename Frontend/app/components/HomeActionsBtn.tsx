"use client";

import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setPopupDialog } from "../redux/slices/popupDialgo";
import FormDialog from "../dialog/FormDialog";

function HomeActionsBtn() {
  const dispatch = useDispatch();
  const handleContactUsBtnClick = () => {
    dispatch(setPopupDialog(<FormDialog />));
  };
  return (
    <div className="flex items-center gap-4 slidUp">
      {/* <button
        onClick={handleContactUsBtnClick}
        className="text-white border px-4 py-2 mt-6 hover:bg-[#d8d6d6] hover:font-medium hover:text-[#000] transition-all duration-500 font-extralight sm:text-sm"
      >
        Contact us
      </button> */}

      <button
        onClick={handleContactUsBtnClick}
        className="text-white border px-10 py-2 rounded-lg mt-6 hover:bg-[#d8d6d6]  hover:text-[#000] transition-all duration-500 sm:text-sm"
      >
        Contact us
      </button>
    </div>
  );
}

export default HomeActionsBtn;
