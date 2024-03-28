import React from "react";

interface IProps {
  message?: string;
  className?: string;
}

function ShowMessage({ message, className }: IProps) {
  return (
    <h1
      className={`font-semibold text-2xl text-center text-gray-700 w-full ${className}`}
    >
      {!message ? "No data avilable" : message}
    </h1>
  );
}

export default ShowMessage;
