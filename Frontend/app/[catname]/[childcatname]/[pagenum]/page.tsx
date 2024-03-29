import { Suspense } from "react";
import Loading from "@/app/components/Loading";
import MobileFilterMenu from "@/app/components/MobileFilterMenu";
import MobileFilterBtn from "@/app/components/MobileFilterBtn";
import { BASE_URL } from "@/constant";
import { encodeUrl } from "@/utils/decodeUrl";
import { Metadata } from "next";
import SFilters from "../../components/SFilters";
import BreadCrumbNav from "../../components/BreadCrumbNav";
import SProductsList from "../../components/SProductsList";

const metadatas = [
  {key : "basin", title : "Get the best Modern Basins in Kolkata | Premium Bathware", description : "Upgrade your bathroom with our premium basins. Get Quote Today! Explore modern basin solutions for your bathroom in Kolkata with Premium Bathware."},
  {key : "faucets", title : "Get the best Modern Faucets in Kolkata | Premium Bathware ", description : "Upgrade your modern bathroom in Kolkata with the best quality faucets from Premium Bathware. Explore our range and get a quote today!"},
  {key : "bathroom-mirror-cabinets", title : "Best Modern Bathroom Mirrors in Kolkata | Premium Bathware", description : "Discover the best quality bathroom mirrors, cabinets, and more in Kolkata with Premium Bathware. Elevate your modern bathroom. Get Quote Today!"},
  {key : "bathroom-vanity", title : "Best Modern Bathroom Vanity in Kolkata | Premium Bathware", description : "Upgrade your bathroom with modern vanity, shelves, and more in Kolkata. Discover luxury solutions at Premium Bathware. Get Quote Today!"},
  {key : "basin-fittings", title : "Best Modern Basin Fittings in Kolkata | Premium Bathware", description : "Elevate your bathroom with modern basin fittings in Kolkata. Explore premium solutions at Premium Bathware. Get Quote Today!"},
  {key : "bathroom-accessories", title : "Best Modern Bathroom Accessories in Kolkata | Premium Bathware", description : "Elevate your bathroom with our modern accessories. Explore Premium Bathware in Kolkata for premium solutions. Get a quote today!"},

  {key : "showers", title : "Explore All Modern Showers in Kolkata | Premium Bathware", description : "Elevate your bathroom with modern showers from Premium Bathware in Kolkata. Explore our exquisite range and get a quote today!!"},
  {key : "hand-shower", title : "Explore All Hand Showers in Kolkata | Premium Bathware", description : "Explore modern hand showers for your bathroom in Kolkata with Premium Bathware. Elevate your bathroom area. Get Quote Today!"},
  {key : "diverters-trims", title : "Explore All Shower Diverters in Kolkata | Premium Bathware", description : "Explore our range of modern shower diverters, trims, and more for your bathroom in Kolkata with Premium Bathware. Get Quote Today!"},
  {key : "digital-showering", title : "Get All Digital Shower Products in Kolkata | Premium Bathware", description : "Elevate your bathroom with our range of smart and digital showers. Explore modern solutions at Premium Bathware in Kolkata. Get a quote today!"},
  {key : "shower-doors", title : "Explore All Types of Shower Doors in Kolkata | Premium Bathware", description : "Discover modern shower doors for your Kolkata bathroom at Premium Bathware. Elevate your space with our elegant selection. Get Quote Today!"},
  {key : "body-spray", title : "Explore All Body Spray Showers in Kolkata | Premium Bathware", description : "Transform your bathroom with modern body spray showers from Premium Bathware in Kolkata. Explore our collection and get a quote today for a refreshment!"},
  {key : "steam", title : "Explore All Bathroom Steams in Kolkata | Premium Bathware", description : "Discover modern steam showers and accessories for your Kolkata bathroom at Premium Bathware. Get a quote today for your perfect upgrade!"},
  {key : "shower-fitting", title : "", description : ""},
  {key : "bathroom-accessories", title : "Best Modern Bathroom Accessories in Kolkata | Premium Bathware", description : "Elevate your bathroom with our modern accessories. Explore Premium Bathware in Kolkata for premium solutions. Get a quote today!"},
  
  {key : "toilets", title : "", description : ""},
  {key : "toilet-seats", title : "", description : ""},
  {key : "smart-toilet", title : "", description : ""},
  {key : "cisterns-and-flushing", title : "", description : ""},
  {key : "bathroom-accessories", title : "Best Modern Bathroom Accessories in Kolkata | Premium Bathware", description : "Elevate your bathroom with our modern accessories. Explore Premium Bathware in Kolkata for premium solutions. Get a quote today!"},

  {key : "electronic-bidet-seats", title : "", description : ""},

  {key : "new-launches", title : "", description : ""},

  {key : "sensor-faucets", title : "", description : ""},
  {key : "urinals-sensors", title : "", description : ""},
  {key : "flush-faucets-valves", title : "", description : ""},
  {key : "shower-doors", title : "", description : ""},
  {key : "customized-mirror", title : "", description : ""},
  {key : "commercial-accessories", title : "", description : ""},

  {key : "bathtubs", title : "", description : ""},
  {key : "bathtub-fillers", title : "", description : ""},

  {key : "kitchen-faucet", title : "", description : ""}
];

export async function generateMetadata({
  params,
}: {
  params: { catname: string; childcatname: string; pagenum: string };
}): Promise<Metadata> {

  const datas = metadatas.filter((item) => item.key.toLowerCase() === params.childcatname.toLowerCase());

  return {
    title: datas[0].title,
    description : datas[0].description
  }
}

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

  const crumbListsItems = [
    { name: "Home", href: BASE_URL },
    { name: parentCatName, href: `${BASE_URL}/${encodeUrl(parentCatName)}` },
    {
      name: catName,
      href: `./${encodeUrl(catName)}`,
    },
  ];

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
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:pl-4">
              {parentCatName.includes("Kitchen")
                ? "Kitchen Products"
                : "Bathroom Products"}
            </h2>

            <div className="flex items-center">
              <MobileFilterBtn />
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-0">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <BreadCrumbNav crumbLists={crumbListsItems} />
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
