import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function RoundedBtn({ children, className, onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className={`h-12 w-12 flexCenter rounded-full cursor-pointer hover:scale-105 transition-all duration-500 ${className}`}
    >
      {children}
    </button>
  );
}

export default RoundedBtn;
