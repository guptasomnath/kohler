import React from "react";
import Image from "next/image";

function ProductsListview() {
  const data = [1, 2, 3, 4, 5];

  let number = 0;
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-1">
      {data.map((item, index) => {
        number = index % 2;
        return (
          <li key={item} className={`flex flex-col h-[30rem] items-center py-8 gap-3 ${number === 0 ? "bg-[#EEEEEE]" : "bg-white"}`}>
            <Image
              className="mix-blend-multiply"
              src="https://premiumbathware.com/wp-content/uploads/2022/06/Category_Template-28.jpg"
              alt=""
              height={250}
              width={250}
            />
            <p className="text-xs">Bathroom</p>
            <h1 className="font-semibold text-[14px]">CONTAIN YOUR TIME</h1>
            <p className="font-semibold text-gray-800 text-[13px]">$250</p>
            <button className="w-[150px] py-[8px] text-[12px] bg-[#F0D9B9] hover:bg-[#e4d9cb]">
              Buy Now
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsListview;
