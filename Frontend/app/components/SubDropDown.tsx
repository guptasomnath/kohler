import React from "react";
import { NAV_OPTIONS_CSS } from "@/app/constant";

interface IProps {
  groupName: string;
  list: { title: string; link: string }[];
}

function SubDropDown({ groupName, list }: IProps) {
  
  return (
    <ul
      className={`absolute hidden group-hover/${groupName}:block top-0 -right-[15.150rem] w-60 bg-slate-50`}
    >
      {list.map((item) => (
        <li key={item.title} className={NAV_OPTIONS_CSS}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default SubDropDown;
