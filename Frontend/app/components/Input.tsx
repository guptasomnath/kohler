import React from "react";

type InputTypes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface IProps extends InputTypes {
  referal?: React.LegacyRef<HTMLInputElement> | undefined;
}

const inputCss = "px-3 outline-none py-2 border-2 w-full mt-5 text-sm sm:mt-4";

function Input(options: IProps) {
  return <input ref={options.referal} {...options} className={inputCss} />;
}

export default Input;
