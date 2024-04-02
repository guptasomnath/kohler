import React from "react";

import Image from "next/image";
import Link from "next/link";
import ShimmerImage from "./ShimmerImage";

interface IProps {
  text?: string;
  subText?: string;
  imageUrl: string;
  className?: string;
  infoLayoutClass?: string;
  link?: any;
}

function CollectionsList({
  text,
  subText,
  className,
  imageUrl,
  infoLayoutClass,
  link,
}: IProps) {
  return (
    <li className={`relative ${className} overflow-hidden group/collectionitem`}>
      <ShimmerImage
        src={imageUrl}
        alt="item"
        height={720}
        width={1000}
        className="w-full"
      />
      <div className={`absolute bottom-0 w-full bg-[#0c0c0c80] space-y-3 translate-y-[8.3rem] group-hover/collectionitem:translate-y-0 sm:translate-y-0 transition-all duration-500`}>
        <div className={`px-5 py-8 sm:py-3 ${infoLayoutClass}`}>
          <h2 className="font-semibold text-2xl sm:text-lg text-yellow-50">
            {text}
          </h2>
          <p className="text-[13px] text-gray-300 sm:text-[12px] pt-4 group-hover/collectionitem:pt-0 sm:pt-0 transition-all duration-500">{subText}</p>
          <button className="text-white border text-xs px-4 py-2 mt-8 hover:bg-[#0000009a] hover:rounded-[3rem] transition-all duration-500 font-extralight sm:mt-2 sm:text-xs">
            <Link href={link || ""}>Explore the collections</Link>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CollectionsList;
