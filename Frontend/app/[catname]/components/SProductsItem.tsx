import React from "react";
import Image from "next/image";
import { IProducts } from "@/types/products";
import GetQuoteBtn from "./GetQuoteBtn";

interface IProps {
  productsInfo: IProducts;
}

function SProductsItem({ productsInfo }: IProps) {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className="bg-[#ffffff94] h-[240px] w-full lg:h-full lg:w-full">
          <Image
            height={1280}
            width={1280}
            src={productsInfo.productsimg}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-center mix-blend-multiply"
          />
        </div>
      </div>
      <h2 className="text-sm text-gray-700 pt-3">{productsInfo.title}</h2>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2 h-11">
        {productsInfo.subtitle}
      </p>
      <GetQuoteBtn />
    </>
  );
}

export default SProductsItem;
