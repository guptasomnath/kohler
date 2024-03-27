import React, { Suspense, useEffect, useRef } from "react";
import ShowMessage from "@/app/components/ShowMessage";
import ProductsItem from "@/app/newcomponents/ProductsItem";
import { IProducts } from "@/types/products";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
// import { fetchProducts } from "../redux/slices/productsSlice";
import Loading from "@/app/components/Loading";
// import Pagination from "./Shared/Pagination";
import { getTotalPageNumber } from "@/utils/getTotalPageNumber";
import Pagination from "@/app/newcomponents/Pagination";
import SProductsItem from "./SProductsItem";
import SPagination from "./SPagination";
import { notFound } from "next/navigation";

interface IProps {
  // products: IProducts[] | null;
  catName: string;
  pageNum: number;
  parentCatName: string;
}

interface IApiResponse {
  message: string;
  status: number;
  success: boolean;
  data: {
    products: IProducts[];
    pages: number;
  };
}

async function SProductsList({ catName, pageNum, parentCatName }: IProps) {
  //   const topDivRef = useRef<HTMLDivElement | null>(null);

  function createFetchProductsUrl(catNames: string[]) {
    let tableNames = "";
    catNames?.map((item) => {
      tableNames +=
        " " +
        item
          .trim()
          .replaceAll("&", "")
          .replaceAll(" ", "_")
          .replaceAll("__", "_")
          .replaceAll("-", "_")
          .toLowerCase();
    });

    return `${API_BASE_URL}/products/?catname=${tableNames.trim()}&page=${pageNum}`;
  }

  let results: IApiResponse | null = null;
  let error: IApiResponse | Error | null = null;
  try {
    const response = await fetch(createFetchProductsUrl([catName]), {
      next: { revalidate: 360 },
    });
    const result = (await response.json()) as IApiResponse;
    results = result;
    if (!response.ok) {
      error = result as IApiResponse;
    }
  } catch (error) {
    const err = error as Error;
    error = err;
  }

  const datalength = results?.data.products.length || 0;
  const totalPages = results?.data.pages || 1;

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
            {results?.data?.products?.map((item, index) => (
              <SProductsItem key={index} productsInfo={item} />
            ))}
          </ul>
        )}
      </div>

      {/* {results?.data.pages === 1 ? null : ( */}
      <p>
        {totalPages === 1 ? null : (
          <SPagination
            catName={catName}
            currentPage={pageNum}
            parentCatName={parentCatName}
          />
        )}
      </p>

      {/* )} */}
    </>
  );
}

export default SProductsList;
