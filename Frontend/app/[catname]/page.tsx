import React from "react";
import OverviewCarousel from "../components/overview/OverviewCarousel";
import datas from "@/public/datas.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { htmlContentList } from "../datas/htmlContentList";
import { BASE_URL } from "@/constant";
import ShimmerImage from "../components/ShimmerImage";
import CollapsibleMenu from "../components/Collapsible/CollapsibleMenu";
import FAQ from "../components/FAQ/FAQ";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";
import Head from "next/head";

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

  const htmlContent = htmlContentList.filter(
    (item) => item.key === params.catname
  )?.[0];

  const jsonLd: WithContext<FAQPage> = htmlContent.script;

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="h-full w-full relative fadeIn">
        <ShimmerImage
          imageClass="sm:object-cover sm:h-[600px]"
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

      <FAQ keyname={params.catname} />

      <CollapsibleMenu heading={`READ MORE`}>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent.content }}
          className="w-full px-[3.2rem] sm:px-5 sm:py-5 text-sm text-gray-700 leading-7"
        />
      </CollapsibleMenu>
    </>
  );
}
