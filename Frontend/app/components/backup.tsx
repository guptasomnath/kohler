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
import Pagination from "@/app/newcomponents/Pagination";

export default function Page({
  params,
}: {
  params: { parentcatname: string; catname: string };
}) {
  const parentCatName = decodeURI(params.parentcatname);
  const catName = decodeURI(params.catname);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useDispatch();

  const [selectedCatNames, setSelectedCatNames] = useState<string[]>([catName]);

  const callAndSetData = (categoryNames: string[]) => {
    // const productsInfo = dataInfo[0].categories.map((item) => {
    //   if (catNames.includes(item.title)) {
    //     return item;
    //   }
    // });

    // const finalProducts: IProducts[] = [];

    // for (var i = 0; i < productsInfo.length; i++) {
    //   const productsLength = productsInfo[i]?.products?.length;

    //   if (productsLength) {
    //     for (var j = 0; j < productsLength; j++) {
    //       const perProductsInfo = productsInfo[i]?.products?.[j];
    //       if (perProductsInfo) {
    //         finalProducts.push(perProductsInfo);
    //       }
    //     }
    //   }
    // }

    // setProducts(finalProducts);
    getProducts(categoryNames);
  };

  const onCheckBoxChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const map = new Map<string, string>();
    selectedCatNames?.forEach((item) => {
      map.set(item, item);
    });

    const value = event.currentTarget.value;
    const isChecked = event.currentTarget.checked;

    if (map.has(value)) {
      if (isChecked === false) {
        map.delete(value);
      }
    } else {
      if (isChecked !== false) {
        map.set(value, value);
      }
    }

    setSelectedCatNames(Array.from(map.values()));
    callAndSetData(Array.from(map.values()));
  };

  useEffect(() => {
    getProducts([catName]);
  }, []);

  const getProducts = async (fetchCatNames: string[], limit = 16, skip = 0) => {
    dispatch(setPopupDialog(<Loading />));
    setIsLoading(true);

    let tableNames = "";
    fetchCatNames.map((item) => {
      tableNames += item.replaceAll(" ", "").replaceAll("%26", "") + " ";
    });

    try {
      const res = await fetch(
        `${API_BASE_URL}/products/?catname=${tableNames}&skip=${skip}&limit=${limit}`
      );
      const data = await res.json();
      console.log(res.ok);
      if (res.ok) {
        setProducts(data);
        setError(null);
      } else {
        setError(data);
        setProducts(null);
      }
    } catch (error) {
      const err = error as Error;
      alert(err.message);
      setProducts(null);
    }

    setIsLoading(false);
    dispatch(setPopupDialog(null));
  };

  // function createUrl(fetchCatNames: string[], limit = 16, skip = 0) {
  //   let tableNames = "";
  //   fetchCatNames.map((item) => {
  //     tableNames += item.replaceAll(" ", "").replaceAll("%26", "") + " ";
  //   });

  //   return `${API_BASE_URL}/products/?catname=${tableNames}&skip=${skip}&limit=${limit}`;
  // }

  return (
    <div className="bg-white">
      <div>
        {/* <MobileFilterMenu
          filters={filters}
        /> */}
        <main className="mx-auto max-w-7xl px-8 sm:px-3">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Bathroom Products
            </h1>

            <div className="flex items-center">
              {/* <SortMenu /> Now Using now */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-2 hidden sm:block"
                // onClick={() => setMobileFiltersOpen(true)}
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

            {isLoading ? (
              <div className="w-full flex items-center justify-center">
                <Loading />
              </div>
            ) : error ? (
              <ShowMessage message={error.message} />
            ) : (
              <div className="grid grid-cols-6 gap-x-8 gap-y-10 lg:grid-cols-4">
                <Filters
                  parentCatName={parentCatName}
                  catName={catName}
                  // onCheckBoxChanged={onCheckBoxChanged}
                />

                {/* Product grid */}
                <div className="col-span-5 sm:col-span-6">
                  {/* <ProductsListview products={products} /> */}
                  {/* <Pagination totalPages={5} page={currentPage} /> */}
                </div>
                {/* <InfiniteScrollComponent /> */}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
