import Input from "../components/Input";
import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setPopupDialog } from "../redux/slices/popupDialgo";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { MdMarkEmailRead } from "react-icons/md";
import { sendMail } from "@/api/sendMail";

function FormDialog() {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleContactFormCloseBtnClick = () => {
    dispatch(setPopupDialog(null));
  };

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const numberRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const onFormSubmit = async (event: any) => {
    setSuccessMsg("");
    setError("");
    event.preventDefault();
    setIsSubmitting(true);

    const result = await sendMail(
      fullNameRef.current?.value,
      emailRef.current?.value,
      numberRef.current?.value,
      messageRef.current?.value
    );
    setSuccessMsg("Mail has sended successfully");
    setIsSubmitting(false);
  };

  return (
    <form
      className={`h-full overflow-hidden dialogComingAnime overflow-y-scroll bg-white w-[450px] sm:w-full sm:mx-3 py-8 rounded-2xl px-12 sm:px-8 enqueryFormShdow`}
    >
      <div className="w-full flex items-center justify-end">
        <h2
          className={`text-2xl font-[600] text-[#524646] w-[380px] sm:w-full py-0 sm:pb-0 sm:text-[1.5rem] fadeInAnimation`}
        >
          Send Us A Message
        </h2>
        <IoCloseOutline
          onClick={handleContactFormCloseBtnClick}
          className="cursor-pointer fadeInAnimation"
          size={25}
        />
      </div>
      <Input
        name="full_name"
        referal={fullNameRef}
        placeholder="Full name"
        className="fadeInAnimation sm:text-sm"
      />
      <Input
        referal={emailRef}
        name="email"
        placeholder="Email address"
        className="fadeInAnimation sm:text-sm"
      />
      <Input
        referal={numberRef}
        placeholder="Phone number"
        type="number"
        name="number"
        inputMode="numeric"
        pattern="[0-9\s]{13,19}"
        className="fadeInAnimation sm:text-sm"
      />
      <textarea
        ref={messageRef}
        placeholder="Message"
        name="message"
        className="px-3 outline-none py-2 border-2 w-full mt-5 text-sm sm:mt-4 fadeInAnimation sm:text-sm"
        cols={20}
        rows={5}
      ></textarea>
      <button
        onClick={onFormSubmit}
        disabled={isSubmitting}
        type="submit"
        className={`px-4 py-2 w-full bg-blue-400 text-white font-medium mt-5 text-sm fadeInAnimation ${
          isSubmitting ? "bg-blue-200" : "bg-blue-400"
        }`}
      >
        Submit
      </button>
      <p
        className={`text-red-500 text-xs pt-1 w-full text-center ${
          error !== "" ? "block" : "hidden"
        }`}
      >
        {error}
      </p>
      <p
        className={`text-green-500 text-xs pt-1 w-full text-center ${
          successMsg !== "" ? "block" : "hidden"
        }`}
      >
        {successMsg}
      </p>
      <div className="mt-5 flex items-center justify-center gap-5">
        <Link href="tel:9831234910" className="flex items-center gap-1">
          <IoCall size={13} className="text-gray-500" />
          <span className="text-xs text-gray-500">9831234910</span>
        </Link>

        <Link
          href="mailto:subrata.ash@gmail.com"
          className="flex items-center gap-1"
        >
          <MdMarkEmailRead size={13} className="text-gray-500" />
          <span className="text-xs text-gray-500">subrata.ash@gmail.com</span>
        </Link>
      </div>
    </form>
  );
}

export default FormDialog;
