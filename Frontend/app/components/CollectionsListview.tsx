import React from "react";
import CollectionsList from "./CollectionsList";
import { BASE_URL } from "@/constant";
import ProductsCatList from "./overview/ProductsCatList";
import Link from "next/link";
import IntersectionObserverComponent from "./IntersectionObserverComponent";

function CollectionsListview() {
  const homeCarasulDatas = [
    {
      id: "1",
      img: BASE_URL + "/emphasis/design.jpg",
      title: "Design",
      subtitle:
        "We craft innovative designs for premium bathroom products, pushing the boundaries with creativity and functionality.",
      beforeAnimation: "-translate-y-8",
      afterAnimation: "translate-y-0",
    },

    {
      id: "2",
      img: BASE_URL + "/emphasis/sustanibility.jpg",
      title: "Sustainability",
      subtitle:
        "We craft premium bathroom products with sustainability at the core, ensuring eco-friendly luxury for discerning consumers.",
      beforeAnimation: "translate-y-8",
      afterAnimation: "translate-y-0",
    },
    {
      id: "3",
      img: BASE_URL + "/emphasis/confort.jpg",
      title: "Comfort",
      subtitle:
        "Indulge in unrivaled comfort with our premium bathroom products, elevating your daily routine to a luxurious experience.",
      beforeAnimation: "-translate-y-8",
      afterAnimation: "translate-y-0",
    },
    {
      id: "4",
      img: BASE_URL + "/emphasis/functionality.jpg",
      title: "Functionality",
      subtitle:
        "We elevate everyday experiences through cutting-edge functionality in top-tier bathroom products, tailored to your needs.",
      beforeAnimation: "translate-y-8",
      afterAnimation: "translate-y-0",
    },
  ];

  return (
    <>
      <div className="w-full min-h-[100vh] px-24 pt-10 sm:px-4">
        <IntersectionObserverComponent
          className="duration-[2s]"
          beforeAnimation="opacity-0"
          afterAnimation="opacity-1"
        >
          <h2 className="w-full text-center text-4xl text-emerald-800 sm:text-2xl">
            OUR COLLECTIONS
          </h2>
          <p className="w-full text-center text-slate-700 font-thin pt-[8px] text-[18px] sm:text-[13px] transition-all duration-700">
            Transform your bathroom into a lavish retreat with our exquisite
            range of premium products. Elevate luxury. Upgrade your bathroom
            today!
          </p>
        </IntersectionObserverComponent>
        <ul className="grid grid-cols-2 gap-6 mt-5 sm:grid-cols-1">
          <li>
            <IntersectionObserverComponent
              className="duration-[2s]"
              beforeAnimation="opacity-0"
              afterAnimation="focus-in-ani"
            >
              <ul>
                <CollectionsList
                  link={`${BASE_URL}/new-launches/new-launches`}
                  text="NEW LAUNCHES"
                  subText="Discover innovative bathroom products: sleek faucets, luxurious showerheads, eco-friendly toilets, and stylish bathroom solutions in our latest launches."
                  imageUrl={BASE_URL + "/newlaunches/image0_0.jpg"}
                />
              </ul>
            </IntersectionObserverComponent>
          </li>

          <li>
            <IntersectionObserverComponent
              className="duration-[2s]"
              beforeAnimation="opacity-0"
              afterAnimation="focus-in-ani"
            >
              <ul>
                <CollectionsList
                  link={`${BASE_URL}/basin-area/basin`}
                  text="BASIN PRODUCTS"
                  subText="Indulge in luxury with our fancy basin products. Elevate your bathroom and shop now for opulent style and sophistication!"
                  imageUrl={BASE_URL + "/basins/basin.jpg"}
                />
              </ul>
            </IntersectionObserverComponent>
          </li>

          <li>
            <IntersectionObserverComponent
              className="duration-[2s]"
              beforeAnimation="opacity-0"
              afterAnimation="focus-in-ani"
            >
              <ul>
                <CollectionsList
                  link={`${BASE_URL}/toilet-area/toilets`}
                  text="TOILET PRODUCTS"
                  subText="Upgrade your bathroom experience with our premium toilet products, ensuring ultimate comfort and cleanliness. Shop now for luxury and convenience!"
                  imageUrl={BASE_URL + "/toilet/image0_0.jpg"}
                />
              </ul>
            </IntersectionObserverComponent>
          </li>
          <li>
            <IntersectionObserverComponent
              className="duration-[2s]"
              beforeAnimation="opacity-0"
              afterAnimation="focus-in-ani"
            >
              <ul>
                <CollectionsList
                  link={`${BASE_URL}/kitchen-area/kitchen-faucet`}
                  text="KITCHEN PRODUCTS"
                  subText="Upgrade your kitchen with premium faucets for style and functionality. Elevate your space today."
                  imageUrl={BASE_URL + "/kitchen/image0_0.jpg"}
                />
              </ul>
            </IntersectionObserverComponent>
          </li>
        </ul>

        <h2 className="w-full text-center pt-10 text-4xl text-blue-600-800 sm:text-2xl">
          Our primary emphasis
        </h2>

        <p className="w-full text-center text-slate-700 font-thin pt-[8px] text-[18px] sm:text-[13px]">
          Our primary emphasis is crafting premium bathroom products with
          design, sustainability, functionality, and comfort.{" "}
          <Link className="text-blue-500 font-medium" href="/about-us">
            Learn more.
          </Link>
        </p>

        <ul className="w-full py-10 grid grid-cols-4 gap-6 sm:grid-cols-1 test">
          {homeCarasulDatas.map((item) => (
            <li key={item.id}>
              <IntersectionObserverComponent
                className={`duration-[1s]`}
                beforeAnimation={item.beforeAnimation}
                afterAnimation={item.afterAnimation}
              >
                <ul>
                  <ProductsCatList
                    hasLink={false}
                    className="w-auto"
                    parentCatName={"parentCatName"}
                    img={item.img}
                    subtitle={item.subtitle}
                    title={item.title}
                  />
                </ul>
              </IntersectionObserverComponent>
            </li>
          ))}
          {/* </Carousel> */}
        </ul>
      </div>
    </>
  );
}

export default CollectionsListview;
