import Link from "next/link";
import React from "react";

interface IProps {
  className?: string;
  content: string;
}

function H2({ className, content }: IProps) {
  return (
    <h2
      id={content.replaceAll(" ", "-")}
      className={`font-semibold mt-6 sm:w-full ${className}`}
    >
      {content}
    </h2>
  );
}

export default H2;
