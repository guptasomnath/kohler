import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { GrNext } from "react-icons/gr";
import TagItems from "./TagItems";
import { IBlogsItem } from "@/types/blogs";
import Link from "next/link";

interface IProps {
  item: IBlogsItem;
}

function BlogItems({ item }: IProps) {
  return (
    <li className="w-full cursor-pointer">
      <Link href={"./blogs/" + item.route}>
        <Image src={item.bannerimg} alt="blog-img" width={1280} height={1280} />
        <h2 className="font-semibold text-xl text-gray-700 text-justify pt-3">
          {item.title}
        </h2>

        <ul className="w-full flex items-center my-2 gap-3 flex-wrap">
          {item.tags.map((eachTag, index) => (
            <TagItems key={index} tagName={eachTag} />
          ))}
        </ul>

        <div className="flex items-center text-[0.8rem] text-gray-600 pt-1 space-x-2">
          <span>{item.date}</span>
          <GoDotFill size={8} className="text-slate-300" />
          <span className="font-medium">{item.author}</span>
        </div>

        <p className="text-[0.9rem] pt-1 text-gray-600 blurFadeLayout">
          {item.description}
        </p>
        <button
          title="Read More Button"
          className="flex items-center gap-2 text-[0.79rem] font-semibold text-red-800 mt-5"
        >
          <span>Read More</span>
          <GrNext />
        </button>
      </Link>
    </li>
  );
}

export default BlogItems;
