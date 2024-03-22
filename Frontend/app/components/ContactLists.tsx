import React from "react";

interface IProps {
  icon: React.ReactNode;
  text: string;
}

function ContactLists({ icon, text }: IProps) {
  return (
    <div className="w-full flex items-center space-x-1 pl-2">
      {icon}
      <span className="text-xs sm:text-[10px]">
        {text}
      </span>
    </div>
  );
}

export default ContactLists;
