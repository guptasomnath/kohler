import React from "react";

interface IProps {
  className : string;
  text : string;
  description? : string;
  children? : React.ReactNode;
}

function Vision({className, description, text, children} : IProps) {
  return (
    <li className={`w-full h-full px-10 pt-11 pb-32 ${className}`}>
      <h2 className="text-2xl">{text}</h2>
      <div className="text-[14px] pt-2 leading-6">
        {children}
        {description}
      </div>
    </li>
  );
}

export default Vision;
