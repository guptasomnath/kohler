import React from "react";
import CollectionsList from "./CollectionsList";
import { IMG1, IMG2, IMG3 } from "../constant";
import { BASE_URL } from "@/constant";
import Carousel from "./Carousel";
import ProductsCatList from "./overview/ProductsCatList";
import Link from "next/link";

function CollectionsListview() {
  const homeCarasulDatas = [
    {
      id: "1",
      img: BASE_URL + "/emphasis/design.jpg",
      title: "Design",
      subtitle:
        "We craft innovative designs for premium bathroom products, pushing the boundaries with creativity and functionality.",
    },

    {
      id: "2",
      img: BASE_URL + "/emphasis/sustanibility.jpg",
      title: "Sustainability",
      subtitle:
        "We craft premium bathroom products with sustainability at the core, ensuring eco-friendly luxury for discerning consumers.",
    },
    {
      id: "3",
      img: BASE_URL + "/emphasis/confort.jpg",
      title: "Comfort",
      subtitle:
        "Indulge in unrivaled comfort with our premium bathroom products, elevating your daily routine to a luxurious experience.",
    },
    {
      id: "4",
      img: BASE_URL + "/emphasis/functionality.jpg",
      title: "Functionality",
      subtitle:
        "We elevate everyday experiences through cutting-edge functionality in top-tier bathroom products, tailored to your needs.",
    },
  ];

  return (
    <>
      <div className="w-full min-h-[100vh] px-24 pt-10 sm:px-4">
        <h1 className="w-full text-center text-4xl text-emerald-800 sm:text-2xl">
          OUR COLLECTIONS
        </h1>
        <p className="w-full text-center text-slate-700 font-thin pt-[8px] text-[18px] sm:text-[13px]">
          Transform your bathroom into a lavish retreat with our exquisite range
          of premium products. Elevate luxury. Upgrade your bathroom today!
        </p>
        <ul className="grid grid-cols-2 gap-6 mt-5 sm:grid-cols-1">
          <CollectionsList
            link={`${BASE_URL}/products/New Launches/New Launches`}
            text="NEW LAUNCHES"
            subText="Discover innovative bathroom products: sleek faucets, luxurious showerheads, eco-friendly toilets, and stylish bathroom solutions in our latest launches."
            imageUrl={BASE_URL + "/newlaunches/image0_0.jpg"}
          />
          <CollectionsList
            link={`${BASE_URL}/products/Basin Area/Basin`}
            text="BASIN PRODUCTS"
            subText="Indulge in luxury with our fancy basin products. Elevate your bathroom and shop now for opulent style and sophistication!"
            imageUrl={BASE_URL + "/basins/basin.jpg"}
          />

          <CollectionsList
            link={`${BASE_URL}/products/Toilet Area/Toilets`}
            text="TOILET PRODUCTS"
            subText="Upgrade your bathroom experience with our premium toilet products, ensuring ultimate comfort and cleanliness. Shop now for luxury and convenience!"
            imageUrl={BASE_URL + "/toilet/image0_0.jpg"}
          />
          {/* <CollectionsList
            text="BATHROOM PRODUCTS"
            subText="Elevate your bathroom experience with our premium products. From luxurious towels to sleek fixtures, discover the perfect blend of style and functionality. Upgrade now!"
            imageUrl={IMG3}
            infoLayoutClass="w-1/2 py-5 px-[3rem] space-y-3 sm:w-full sm:px-5 sm:space-y-0 sm:pt-2"
            className="col-span-2 sm:col-span-1"
          /> */}

          <CollectionsList
            link={`${BASE_URL}/products/Kitchen Faucet/Kitchen Faucet`}
            text="KITCHEN PRODUCTS"
            subText="Upgrade your kitchen with premium faucets for style and functionality. Elevate your space today."
            imageUrl={BASE_URL + "/kitchen/image0_0.jpg"}
          />
        </ul>

        <h1 className="w-full text-center pt-10 text-4xl text-blue-600-800 sm:text-2xl">
          Our primary emphasis
        </h1>

        <p className="w-full text-center text-slate-700 font-thin pt-[8px] text-[18px] sm:text-[13px]">
          Our primary emphasis is crafting premium bathroom products with
          design, sustainability, functionality, and comfort.{" "}
          <Link className="text-blue-500 font-medium" href="/about">
            Learn more.
          </Link>
        </p>

        <ul className="w-full py-10 sm:hidden grid grid-cols-4 gap-6">
          {/* <Carousel datasLength={3}> */}
          {homeCarasulDatas.map((item) => (
            <ProductsCatList
              className="w-auto"
              key={item.id}
              parentCatName={"parentCatName"}
              img={item.img}
              subtitle={item.subtitle}
              title={item.title}
            />
          ))}
          {/* </Carousel> */}
        </ul>
      </div>
    </>
  );
}

export default CollectionsListview;
