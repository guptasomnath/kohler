import React from "react";

interface IProps {
    tagName : string;
}


function TagItems({tagName} : IProps) {
  return (
    <li className="px-3 w-auto py-1 border text-[10px] hover:bg-gray-300 transition-all duration-300 font-semibold cursor-pointer">
      {tagName}
    </li>
  );
}

export default TagItems;
