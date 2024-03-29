import React from "react";

interface IProps {
  message?: string;
  className?: string;
}

function ShowMessage({ message, className }: IProps) {
  return (
    <h2
      className={`font-semibold text-2xl text-center text-gray-700 w-full ${className}`}
    >
      {!message ? "No data avilable" : message}
    </h2>
  );
}

export default ShowMessage;
