import Link from "next/link";
import React from "react";

interface IProps {
  crumbLists: {
    name : string,
    href : string
  }[];
}

function BreadCrumbNav({ crumbLists }: IProps) {
  return (
    <div className="flex items-center gap-2 text-gray-700 sm:px-4">
      {crumbLists.map((item, index) => {
        if (index !== crumbLists.length - 1) {
          return (
            <>
              <h2
                key={index}
                className="py-4 text-sm cursor-pointer hover:text-gray-500"
              >
                <Link href={`${item.href}`}>{item.name}</Link>
              </h2>{" "}
              <span className="text-[0.75rem]">{"/"}</span>
            </>
          );
        } else {
          return (
            <h2
              key={index}
              className="py-4 text-sm cursor-pointer hover:text-gray-500"
            >
              <Link href={`./${item.href}`}>{item.name}</Link>
            </h2>
          );
        }
      })}
    </div>
  );
}

export default BreadCrumbNav;
