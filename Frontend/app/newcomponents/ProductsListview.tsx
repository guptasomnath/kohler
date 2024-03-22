import React, { useEffect, useRef } from "react";
import ShowMessage from "../components/ShowMessage";
import ProductsItem from "./ProductsItem";
import { IProducts } from "@/types/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
import { fetchProducts } from "../redux/slices/productsSlice";
import Loading from "../components/Loading";
// import Pagination from "./Shared/Pagination";
import { getTotalPageNumber } from "@/utils/getTotalPageNumber";
import Pagination from "@/app/newcomponents/Pagination";

interface IProps {
  // products: IProducts[] | null;
  catName: string;
}

function ProductsListview({ catName }: IProps) {
  const dispatch = useDispatch<any>();
  const topDivRef = useRef<HTMLDivElement | null>(null);
  const { error, isLoading, response } = useSelector(
    (state: RootState) => state.products
  );

  function createFetchProductsUrl(catNames: string[], limit = 16, skip = 0) {
    let tableNames = "";
    catNames?.map((item) => {
      tableNames +=
        " " +
        item
          .replaceAll("&", "")
          .replaceAll(" ", "_")
          .replaceAll("__", "_")
          .toLowerCase();
    });

    return `${API_BASE_URL}/products/?catname=${tableNames.trim()}&skip=${skip}&limit=${limit}`;
  }

  useEffect(() => {
    dispatch(fetchProducts(createFetchProductsUrl([catName])));
  }, []);

  return (
    <>
      <div ref={topDivRef} className="w-full min-h-[28rem]">
        {isLoading ? (
          <div className="w-full flex items-center justify-center">
            <Loading />
          </div>
        ) : error ? (
          <ShowMessage message={error.message} />
        ) : response?.products?.length === 0 ? (
          <ShowMessage message="There is no products" />
        ) : (
          <ul className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8 sm:px-8">
            {response?.products?.map((item, index) => (
              <ProductsItem key={index} productsInfo={item} />
            ))}
          </ul>
        )}
      </div>
      <Pagination topDivRef={topDivRef} catName={catName} />
    </>
  );
}

export default ProductsListview;
