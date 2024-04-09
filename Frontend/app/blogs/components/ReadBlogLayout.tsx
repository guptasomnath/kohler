import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

interface IProps {
  children: React.ReactNode;
  heading: string;
  author: string;
  date: string;
  catname: string;
  shortdescription: string;
  bannerimage: string;
}

function ReadBlogLayout(props: IProps) {
  return (
    <div className="w-full min-h-screen px-28 py-5 sm:px-5">
      <div className="w-[90%] mx-auto sm:w-full">
        <div className="flex items-center gap-5 sm:gap-3">
          <span className="text-sm">{props.catname}</span>{" "}
          <GoDotFill size={12} className="text-gray-500" />
          <span className="text-gray-700 text-sm">{props.author}</span>{" "}
          <GoDotFill size={12} className="text-gray-500" />
          <span className="text-xs text-gray-600">{props.date}</span>
        </div>

        <h1 className="text-3xl josefin-sans-568 text-emerald-700 pt-4">
          {props.heading}
        </h1>
        <p className="josefin-sans-350 text-justify text-[15px] w-[80%] sm:w-full">
          {props.shortdescription}
        </p>

        <Image
          src={props.bannerimage}
          alt="blog-img"
          width={1280}
          height={1280}
          className="w-[70%] mt-4 sm:w-full"
        />
        {props.children}
      </div>
    </div>
  );
}

export default ReadBlogLayout;
