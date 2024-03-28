import React from "react";
import ShowMessage from "@/app/components/ShowMessage";
import SProductsItem from "./SProductsItem";
import SPagination from "./SPagination";
import { notFound } from "next/navigation";
import { getProducts } from "@/api/getProducts";

interface IProps {
  catName: string;
  pageNum: number;
  parentCatName: string;
}

async function SProductsList({ catName, pageNum, parentCatName }: IProps) {
  const { isSuccess, error, response } = await getProducts(catName, pageNum);

  const datalength = response?.data.products.length || 0;
  const totalPages = response?.data.pages || 1;

  if (datalength === 0) return notFound();

  return (
    <>
      <div className="w-full min-h-[28rem]">
        {error ? (
          <ShowMessage message={error.message} />
        ) : datalength === 0 ? (
          <ShowMessage message="No data available" />
        ) : (
          <ul className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8 sm:px-8">
            {response?.data.products.map((item, index) => (
              <SProductsItem key={index} productsInfo={item} />
            ))}
          </ul>
        )}
      </div>
      <p>
        {totalPages === 1 ? null : (
          <SPagination
            catName={catName}
            currentPage={pageNum}
            parentCatName={parentCatName}
          />
        )}
      </p>
    </>
  );
}

export default SProductsList;
