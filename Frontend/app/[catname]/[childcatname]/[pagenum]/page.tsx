import { Suspense } from "react";
import Loading from "@/app/components/Loading";
import SFilters from "../../components/SFilters";
import SProductsList from "../../components/SProductsList";
import MobileFilterMenu from "@/app/components/MobileFilterMenu";
import MobileFilterBtn from "@/app/components/MobileFilterBtn";

export default function Page({
  params,
}: {
  params: { catname: string; childcatname: string; pagenum: string };
}) {
  const parentCatName = decodeURI(
    params.catname.toLowerCase().replaceAll("-", " ")
  );
  const catName = decodeURI(params.childcatname.toLowerCase());
  const pageNum: number = parseInt(params.pagenum ?? "1");

  const LoadingComp = () => {
    return (
      <div className="w-full flex items-center justify-center">
        <Loading />
      </div>
    );
  };

  return (
    <div className="bg-white fadeIn">
      <div>
        <MobileFilterMenu parentCatName={parentCatName} catName={catName}>
          <div className="hidden sm:block w-full px-4 py-3">
            <SFilters catName={catName} parentCatName={parentCatName} />
          </div>
        </MobileFilterMenu>
        <main className="mx-auto max-w-7xl px-8 sm:px-3">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:pl-4">
              {parentCatName.includes("Kitchen")
                ? "Kitchen Products"
                : "Bathroom Products"}
            </h1>

            <div className="flex items-center">
              <MobileFilterBtn />
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-6 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="sm:hidden">
                <SFilters catName={catName} parentCatName={parentCatName} />
              </div>

              {/* Product grid */}
              <div className="col-span-5 sm:col-span-6">
                <Suspense fallback={<LoadingComp />}>
                  <SProductsList
                    catName={catName}
                    pageNum={pageNum}
                    parentCatName={parentCatName}
                  />
                </Suspense>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
