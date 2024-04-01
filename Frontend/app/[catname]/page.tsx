import Image from "next/image";
import React from "react";
import OverviewCarousel from "../components/overview/OverviewCarousel";
import datas from "@/public/datas.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { htmlContentList } from "../datas/htmlContentList";
import { BASE_URL } from "@/constant";
import ShimmerImage from "../components/ShimmerImage";
import CollapsibleMenu from "../components/Collapsible/CollapsibleMenu";

const metadatas = [
  {
    key: "basin-area",
    title: "Explore Basin Area Products in Kolkata | Premium Bathware",
    description:
      " Upgrade your basin area with premium faucets, mirrors, vanity fittings, and accessories in Kolkata. Explore our range at Premium Bathware. Get Quote Today!",
  },
  {
    key: "showering-area",
    title: "Discover Showering Area Products in Kolkata | Premium Bathware",
    description:
      "Elevate your showering experience with hand showers, digital showers, fittings, and accessories in Kolkata. Explore now at Premium Bathware. Get Quote Today!",
  },
  {
    key: "toilet-area",
    title: "Get Modern Toilet Area Products in Kolkata | Premium Bathware",
    description:
      "Upgrade your toilet area with premium toilet seats, smart toilets, cisterns, and accessories in Kolkata. Explore now at Premium Bathware. Get Quote Today!",
  },
  {
    key: "smart-products",
    title: "Get Smart Bathroom Products in Kolkata | Premium Bathware",
    description:
      "Upgrade to smart toilets and electronic bidet seats in Kolkata with Premium Bathware. Get Quote Today! Experience luxury and innovation with our modern solutions.",
  },
  { key: "new-launches", title: "", description: "" },
  {
    key: "commercial",
    title: "Get Commercial Bathroom Products in Kolkata | Premium Bathware",
    description:
      "Explore sensor faucets, urinal sensors, flush valves, shower doors, accessories, and customized mirrors in Kolkata with Premium Bathware. Get Quote Today!",
  },
  {
    key: "wellness",
    title: "Explore Bathroom Wellness Products in Kolkata | Premium Bathware",
    description:
      "Transform your bathroom into a wellness retreat with steam systems, bathtubs, and fillers in Kolkata. Get a Quote Today! Elevate your space with Premium Bathware.",
  },

  {
    key: "kitchen-area",
    title: "Explore Modern Kitchen Accessories in Kolkata | Premium Bathware",
    description:
      "Discover modern kitchen faucets in Kolkata with Premium Bathware. Elevate your kitchen with our exquisite range. Get Quote Today!",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { catname: string };
}): Promise<Metadata> {
  const datas = metadatas.filter(
    (item) => item.key.toLowerCase() === params.catname.toLowerCase()
  );

  if (datas.length === 0) return notFound();

  return {
    title: datas[0].title,
    description: datas[0].description,
    alternates: {
      canonical: BASE_URL + "/" + params.catname,
    },
  };
}

export default function page({ params }: { params: { catname: string } }) {
  const pCatName = params.catname.toLowerCase().replaceAll("-", " ");

  const mydata = datas.filter(
    (eachItem) => eachItem.title.toLowerCase() === decodeURI(pCatName)
  );

  if (mydata.length === 0) return notFound();

  const htmlContent =
    htmlContentList.filter((item) => item.key === params.catname)?.[0]
      ?.content || "";

  return (
    <>
      <div className="h-full w-full relative fadeIn">
        {/* <Image
          className="w-full sm:object-cover sm:h-[600px]"
          src={mydata[0]?.bannerbackground}
          alt="background img"
          height={1500}
          width={1500}
        /> */}
        <ShimmerImage
          className="w-full sm:object-cover sm:h-[600px]"
          src={mydata[0]?.bannerbackground}
          alt="background img"
          height={1500}
          width={1500}
        />
        <div className="absolute bottom-40 bg-[#29282891] w-[645px] ml-16 px-8 py-8 space-y-4 rounded-lg sm:w-[90%] sm:ml-3 sm:py-8">
          <h2 className="text-4xl text-white font-semibold">
            {mydata[0]?.title}
          </h2>
          <p className="text-white font-semibold">{mydata[0]?.subtitle}</p>
        </div>
      </div>
      <OverviewCarousel
        categoriesInfo={mydata[0]?.categories}
        parentCatName={pCatName}
      />

      <CollapsibleMenu heading={`READ MORE ABOUT ${pCatName.toUpperCase()}`}>

      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="w-full px-[3.2rem] sm:px-5 sm:py-5 text-sm text-gray-700 leading-7"
      />

      </CollapsibleMenu>
      {/* About products area */}
      {/* <div className="w-full px-52 flex items-start gap-9 mt-10">
        <ShimmerImage
          imageClass="h-full"
          className="w-[25rem] h-96 imageShdow overflow-hidden"
          src={BASE_URL + "/basins/basin.jpg"}
          alt="products about"
          height={1200}
          width={1200}
        />

        <div>
          <h3 className="text-3xl font-semibold text-gray-600">Basin Area</h3>
          <p className="w-[450px] text-justify text-sm pt-2">
            As we provide the best kind of accessories and premium quality
            bathware products, it helps you to make your bathroom more creative
            and luxurious. With our services of premium designer products,
            installation of the{" "}
            <span className="animate-pulse text-blue-600 cursor-pointer">
              basin
            </span>{" "}
            becomes susceptible. Stylish{" "}
            <span className="animate-pulse text-blue-600 cursor-pointer">
              faucet
            </span>{" "}
            design and modulation are provided to you with the support of our
            experts. Proper design of the bathroom and its accessories are
            delivered to you depending on your preferences as we tend to give
            you luxury with the aesthetic value of the products. Our basin
            designs are made for your comfort and are meticulously crafted for
            extensive sophistication.
          </p>
        </div>
      </div> */}

      {/* <div className="w-full px-16 flex items-start flex-row-reverse mt-32">
        <ShimmerImage
          imageClass="h-full"
          className="w-[25rem] h-96 imageShdow overflow-hidden rounded-2xl"
          src={BASE_URL + "/basins/basin.jpg"}
          alt="products about"
          height={1200}
          width={1200}
        />

        <div className="">
          <h3 className="text-3xl font-semibold text-gray-600">Basin Area</h3>
          <p className="w-[450px] text-justify text-sm pt-2">
            As we provide the best kind of accessories and premium quality 
            bathware products, it helps you to make your bathroom more creative
            and luxurious. With our services of premium designer products,
            installation of the <span className="animate-pulse text-blue-600 cursor-pointer">basin</span> becomes susceptible. Stylish <span className="animate-pulse text-blue-600 cursor-pointer">faucet</span> design
            and modulation are provided to you with the support of our experts.
            Proper design of the bathroom and its accessories are delivered to
            you depending on your preferences as we tend to give you luxury with
            the aesthetic value of the products. Our basin designs are made for
            your comfort and are meticulously crafted for extensive
            sophistication.
          </p>
        </div>
      </div> */}

      {/* <div className="w-full px-52 flex items-start gap-9 mt-20">
        <div>
          <h3 className="text-3xl font-semibold text-gray-600">Basin Area</h3>
          <p className="w-[450px] text-justify text-sm pt-2">
            As we provide the best kind of accessories and premium quality
            bathware products, it helps you to make your bathroom more creative
            and luxurious. With our services of premium designer products,
            installation of the{" "}
            <span className="animate-pulse text-blue-600 cursor-pointer">
              basin
            </span>{" "}
            becomes susceptible. Stylish{" "}
            <span className="animate-pulse text-blue-600 cursor-pointer">
              faucet
            </span>{" "}
            design and modulation are provided to you with the support of our
            experts. Proper design of the bathroom and its accessories are
            delivered to you depending on your preferences as we tend to give
            you luxury with the aesthetic value of the products. Our basin
            designs are made for your comfort and are meticulously crafted for
            extensive sophistication.
          </p>
        </div>

        <ShimmerImage
          imageClass="h-full"
          className="w-[25rem] h-96 imageShdow overflow-hidden"
          src={BASE_URL + "/basins/basin.jpg"}
          alt="products about"
          height={1200}
          width={1200}
        />
      </div> */}
    </>
  );
}
