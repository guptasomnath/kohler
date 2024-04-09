import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function StepsLayout({ className, children }: IProps) {
  return (
    <div className={`space-y-10 my-10 w-[70%] text-justify sm:w-full ${className}`}>
      {children}
    </div>
  );
}

export default StepsLayout;
