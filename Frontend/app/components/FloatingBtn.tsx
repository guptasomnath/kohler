import React, { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import RoundedBtn from "./RoundedBtn";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import FormDialog from "../dialog/FormDialog";
import { setPopupDialog } from "../redux/slices/popupDialgo";

function FloatingBtn() {
  const dispatch = useDispatch();
  const [otherBtnVisibility, setOtherBtnVisibility] = useState(false);

  const onExpandBtnClick = () => {
    setOtherBtnVisibility(!otherBtnVisibility);
  };

  const onMsgBtnClick = () => {
    dispatch(setPopupDialog(<FormDialog />));
  };

  const onCallBtnClick = () => {
    window.open("tel:9831234910");
  };

  return (
    <div className="absolute bottom-14 right-20 z-10 flex flex-col gap-4 items-center sm:right-6">
      <h2
        className={`absolute w-32 px-5 text-[#1A1A1A] py-1 right-10 bottom-12 messageShape flex items-center justify-center font-semibold bg-[#34D399] ${
          otherBtnVisibility ? "scale-0" : "scale-1"
        } transition-all duration-300`}
      >
        Contact us
      </h2>
      <RoundedBtn
        title="Whatsapp Me Button"
        onClick={onCallBtnClick}
        className={`bg-blue-800 ${otherBtnVisibility ? "scale-1" : "scale-0"}`}
      >
        <IoCallSharp size={18} color="#fff" />
      </RoundedBtn>
      <RoundedBtn
        title="Message Button"
        onClick={onMsgBtnClick}
        className={`bg-green-700 ${otherBtnVisibility ? "scale-1" : "scale-0"}`}
      >
        <LuMessagesSquare color="#fff" />
      </RoundedBtn>
      <RoundedBtn
        title="Contact Us Button"
        className={`bg-gray-800 rounded`}
        onClick={onExpandBtnClick}
      >
        {otherBtnVisibility ? (
          <IoCloseOutline size={20} color="#fff" />
        ) : (
          <AiFillMessage color="#fff" />
        )}
      </RoundedBtn>
    </div>
  );
}

export default FloatingBtn;
