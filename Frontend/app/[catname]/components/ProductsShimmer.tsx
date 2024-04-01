import React from "react";
import GetQuoteBtn from "./GetQuoteBtn";

function ProductsShimmer() {
  const parr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <ul className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8 sm:px-8">
      {parr.map((item, index) => (
        <li key={index}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <div className="bg-[#ffffff94] animate-pulse h-[240px] w-full lg:h-full lg:w-full"></div>
          </div>
          <div className="text-sm animate-pulse bg-slate-300 w-[50%] h-4 pt-3 mt-2"></div>
          <div className="mt-4 animate-pulse text-sm bg-slate-300 text-gray-500 line-clamp-2 w-full h-3"></div>
          <div className="mt-1 animate-pulse text-sm bg-slate-300 text-gray-500 line-clamp-2 w-[80%] h-3"></div>
          <div className="mt-8 animate-pulse text-sm bg-slate-300 text-gray-500 line-clamp-2 w-[90px] h-8"></div>
        </li>
      ))}
    </ul>
  );
}

export default ProductsShimmer;
