import { RootState } from "../redux/store";
import React from "react";
import { useSelector } from "react-redux";


function PopupDialogLayout() {
  const popupDialog = useSelector((state: RootState) => state.popupDialog);
  return (
    <div
      className={`absolute top-0 bottom-0 py-14 sm:py-20 right-0 left-0 bg-[#00000046] h-full w-full z-20 ${
        popupDialog ? "flex" : "hidden"
      } items-center justify-center`}
    >
      {popupDialog}
    </div>
  );
}

export default PopupDialogLayout;
