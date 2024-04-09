import React from "react";

interface IProps {
  className?: string;
  content: string;
}

function P({ content, className }: IProps) {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: content }}
      className={`w-[70%] text-justify sm:w-full ${className}`}
    ></p>
  );
}

export default P;
