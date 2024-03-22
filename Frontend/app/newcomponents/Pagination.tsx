"use client";

import React, { MutableRefObject, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchProducts } from "../redux/slices/productsSlice";
import { API_BASE_URL } from "@/utils/API_BASE_URL";

interface IProps {
  topDivRef: MutableRefObject<HTMLDivElement | null>;
  catName: string;
}

function Pagination({ topDivRef, catName }: IProps) {
  const [skip, setSkip] = useState(0);

  const { error, isLoading, response } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<any>();

  const totalPages = response.pages;
  const page = 1;

  function createFetchProductsUrl(catNames: string[], skip: number) {
    let tableNames = "";
    catNames?.map((item) => {
      tableNames += item + " ";
    });

    return `${API_BASE_URL}/products/?catname=${tableNames}&skip=${skip}&limit=16`;
  }

  const onPrevBtnClicked = () => {
    dispatch(fetchProducts(createFetchProductsUrl([catName], skip - 16)));
    setSkip((preState) => preState + 16);
    if (topDivRef.current) {
      topDivRef.current.scrollIntoView({ behavior: "smooth" });
      topDivRef.current.scrollTop = 0;
    }
  };
  const onNextBtnClicked = () => {
    dispatch(fetchProducts(createFetchProductsUrl([catName], skip + 16)));
    setSkip((preState) => preState + 16);
    if (topDivRef.current) {
      topDivRef.current.scrollIntoView({ behavior: "smooth" });
      topDivRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-6 mt-10">
      <button
        className={`bg-white border-2 bg-opacity-50 text-gray-800 p-3 hover:bg-slate-100 rounded-full focus:outline-none`}
        onClick={onPrevBtnClicked}
      >
        <GrPrevious />
      </button>
      {/* {totalPages} */}
      <button
        className={`bg-white border-2 bg-opacity-50 text-gray-800 p-3 hover:bg-slate-100 rounded-full focus:outline-none`}
        onClick={onNextBtnClicked}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default Pagination;
