import { BASE_URL } from "@/constant";
import Link from "next/link";
import React from "react";
import ShimmerImage from "../ShimmerImage";

interface IProps {
  hasLink?: boolean;
  className?: string;
  parentCatName: string;
  img: string;
  title: string;
  subtitle: string;
  imgLayoutHeight?: string;
}

function ProductsCatList({
  className,
  parentCatName,
  img,
  title,
  subtitle,
  imgLayoutHeight,
  hasLink,
}: IProps) {
  return (
    <li>
      <Link
        href={`${
          hasLink
            ? `${BASE_URL}/${parentCatName
                .toLowerCase()
                .replaceAll(" ", "-")}/${title
                .replaceAll(" ", "-")
                .toLowerCase()}`
            : null
        }`}
      >
        <div
          className={`carouselShdow flex-shrink-0 group border w-[300px] sm:w-full cursor-pointer ${className}`}
        >
          <div
            className={`w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 group-hover:cursor-pointer lg:h-80 ${imgLayoutHeight}`}
          >
            {/* <Image
            src={img}
            alt="Front of men&#039;s Basic Tee in black."
            className={`h-[250px] w-full object-cover object-center lg:h-full lg:w-full ${imgLayoutHeight}`}
            height={1200}
            width={1200}
          /> */}
            <ShimmerImage
              imageClass="h-full"
              src={img}
              alt="products-images"
              className={`h-[250px] w-full object-cover object-center lg:h-full lg:w-full ${imgLayoutHeight}`}
              height={1200}
              width={1200}
            />
          </div>
          <div className="px-5 pb-4">
            <h2 className="font-semibold text-lg pt-4 line-clamp-1 sm:text-sm sm:font-bold">
              {title}
            </h2>
            <p className="text-sm text-gray-700 line-clamp-4 text-justify -tracking-[0.03em] sm:text-xs">
              {subtitle}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductsCatList;
