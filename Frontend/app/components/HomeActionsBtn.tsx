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
      <Button onClick={handleContactUsBtnClick} text="Contact us" />
    </div>
  );
}

export default HomeActionsBtn;
