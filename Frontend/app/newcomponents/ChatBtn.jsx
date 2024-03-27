import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setPopupDialog } from "../redux/slices/popupDialgo";
import FormDialog from "../dialog/FormDialog";

function ChatBtn() {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(setPopupDialog(<FormDialog />))} className="p-4 w-auto bg-green-700 rounded-full absolute bottom-14 right-20 z-10 cursor-pointer hover:scale-105 transition-all duration-500 sm:right-6">
      <LuMessagesSquare color="#fff" size={22} />
    </div>
  );
}

export default ChatBtn;
