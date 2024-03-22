import Image from "next/image";
import React from "react";

const IMGLINK =
  "https://s7d1.scene7.com/is/image/kohlergbhcloudprod/Moodboard-Medium-Card-aaf19526:Moodboard-Medium-Card-MP-Max?wid=392&hei=393&dpr=off";

const data = [1, 2, 3, 4];

interface IProps {
    searchIconVisibility : boolean;
}

function SearchAutoComplete({searchIconVisibility} : IProps) {
  return (
    <ul className={`absolute bg-stone-50 border w-full top-10 ${searchIconVisibility ? "hidden" : "block"}`}>
      {data.map((item) => (
        <li key={item} className="flex items-start gap-3 hover:bg-slate-100 p-3 cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <Image src={IMGLINK} alt="" height={50} width={50} />
          </div>
          <div>
            <h1 className="text-xs font-semibold">Product Name This is {item}</h1>
            <p className="text-[0.60rem]">
              This is a sample product what is your thinking {item}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchAutoComplete;
