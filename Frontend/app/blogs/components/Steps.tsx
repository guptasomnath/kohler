import React from "react";

interface IProps {
  number: string;
  text: string;
  className?: string;
}

function Steps({ number, text, className }: IProps) {
  return (
    <ul>
      <li className={`relative flex items-center mt-3 ${className}`}>
        <span className="text-[64px] text-[#cfcfcf] extra-stretch absolute -z-[9]">
          {number}
        </span>
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          className="text-[16px] text-justify leading-[26px] josefin-sans-400-italic"
        ></p>
      </li>
    </ul>
  );
}

export default Steps;
