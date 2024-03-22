"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { FunnelIcon } from "@heroicons/react/20/solid";
import datas from "@/public/datas.json";
import { IFilter, IProducts } from "@/types/products";
import MobileFilterMenu from "@/app/newcomponents/MobileFilterMenu";
import ProductsListview from "@/app/newcomponents/ProductsListview";
import Filters from "@/app/newcomponents/Filters";
import SortMenu from "@/app/newcomponents/SortMenu";
import InfiniteScrollComponent from "@/app/newcomponents/InfiniteScrollComponent ";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
import { setPopupDialog } from "@/app/redux/slices/popupDialgo";
import { useDispatch } from "react-redux";
import Loading from "@/app/components/Loading";
import { useQuery } from "@/hook/useQuery";
import ShowMessage from "@/app/components/ShowMessage";
import Pagination from "@/app/newcomponents/Shared/Pagination";

export default function Page({
  params,
}: {
  params: { parentcatname: string; catname: string };
}) {
  const parentCatName = decodeURI(params.parentcatname);
  const catName = decodeURI(params.catname);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        <MobileFilterMenu
          parentCatName={parentCatName}
          setMobileFiltersOpen={setMobileFiltersOpen}
          catName={catName}
          mobileFiltersOpen={mobileFiltersOpen}
        />
        <main className="mx-auto max-w-7xl px-8 sm:px-3">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:pl-4">
              {parentCatName.includes("Kitchen") ? "Kitchen Products" : "Bathroom Products"}
            </h1>

            <div className="flex items-center">
              {/* <SortMenu /> Now Using now */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-2 hidden sm:block sm:pr-4"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-6 gap-x-8 gap-y-10 lg:grid-cols-4">
              <Filters parentCatName={parentCatName} catName={catName} />

              {/* Product grid */}
              <div className="col-span-5 sm:col-span-6">
                <ProductsListview catName={catName} />
              </div>
              {/* <InfiniteScrollComponent /> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
