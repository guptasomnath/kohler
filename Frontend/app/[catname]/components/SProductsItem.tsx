import React from "react";
import Image from "next/image";
import { IProducts } from "@/types/products";
import GetQuoteBtn from "./GetQuoteBtn";

interface IProps {
  productsInfo: IProducts;
}

function SProductsItem({ productsInfo }: IProps) {
  return (
    <li>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          height={1280}
          width={1280}
          src={productsInfo.productsimg}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-[240px] w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <h3 className="text-sm text-gray-700">{productsInfo.title}</h3>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2 h-11">
        {productsInfo.subtitle}
      </p>
      <GetQuoteBtn />
    </li>
  );
}

export default SProductsItem;
