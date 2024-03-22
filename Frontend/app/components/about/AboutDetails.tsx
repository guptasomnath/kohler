import React from "react";

interface IProps {
    text1 : string;
    text2 : string;
}

function AboutDetails({text1, text2} : IProps) {
  return (
    <div className="bg-[#FAFAFA] flexCenter rounded-3xl sm:bg-transparent">
      <div>
        <p className="text-2xl text-gray-800 font-semibold w-full">{text1}</p>
        <p className="text-xs text-gray-600 w-full">{text2}</p>
      </div>
    </div>
  );
}

export default AboutDetails;
