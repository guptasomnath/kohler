"use client"

import FormDialog from "@/app/dialog/FormDialog";
import { setPopupDialog } from "@/app/redux/slices/popupDialgo";
import React from "react";
import { useDispatch } from "react-redux";

function GetQuoteBtn() {
  const dispatch = useDispatch();
  const handleOnQuatBtnClicked = () => {
    dispatch(setPopupDialog(<FormDialog />));
  };
  return (
    <button
      className="px-3 py-1 border text-sm mt-4 hover:bg-slate-400 transition-all duration-300 hover:text-white hover:font-semibold"
        onClick={handleOnQuatBtnClicked}
    >
      Get Quote
    </button>
  );
}

export default GetQuoteBtn;
