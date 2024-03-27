import React from "react";

type BTN_TYPES = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends BTN_TYPES {
    text : string;
}

function Button(attributes: IProps) {
  return (
    <button
      {...attributes}
      className="text-white border px-4 py-2 mt-6 hover:bg-[#d8d6d6] hover:font-medium hover:text-[#000] font-extralight sm:text-sm"
    >
      {attributes.text}
    </button>
  );
}

export default Button;
