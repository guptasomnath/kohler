import React from "react";
import { LiaAddressBook } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import ContactLists from "../components/ContactLists";
import peoplesImg from "@/public/peoples.svg";
import Image from "next/image";
import AboutDetails from "../components/about/AboutDetails";

function page() {
  return (
    <div className="flex items-center h-[80vh] px-48 gap-2 pt-3 sm:px-0 sm:flex-col sm:h-auto sm:w-full">
      <div className="w-1/2 h-full cardShdow rounded-xl px-5 py-4 space-y-4 sm:w-full sm:space-y-2 sm:shadow-none">
        <p className="font-semibold text-[#FF8A4E]">How it started</p>
        <h1 className="text-5xl font-semibold leading-[50px] text-gray-800 pt-2 sm:text-3xl sm:leading-[30px]">
          Our Dream is Global Learning Transformation
        </h1>
        <p className="text-sm text-gray-600 pt-3 px-2 sm:text-xs pb-5">
          At Kohler, outstanding design, innovation, and a respect for fine
          materials and craftsmanship are all things we are passionate about.
        </p>

        <ContactLists
          text="BA-46, Saltlake, Sector -1, Kolkata : 700064"
          icon={<LiaAddressBook />}
        />
        <ContactLists text="+91 9073688488" icon={<FiPhoneCall />} />
        <ContactLists
          text="kohler.saltlake@gmail.com"
          icon={<HiOutlineMail />}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col sm:w-full">
        <div className="h-1/2 rounded-xl flex items-center justify-center">
          <Image
            src={peoplesImg}
            alt="Peoples image"
            className="size-80 sm:hidden"
            height={800}
            width={800}
          />
        </div>
        <div className="h-1/2 cardShdow rounded-xl grid grid-cols-2 py-4 px-4 gap-4 sm:shadow-none sm:rounded-none sm:border-t-2">
          <AboutDetails text1="3.5" text2="Years of exprience"/>
          <AboutDetails text1="1000+" text2="Products"/>
          <AboutDetails text1="4.3" text2="Google Ratings"/>
        </div>
      </div>
    </div>
  );
}

export default page;
