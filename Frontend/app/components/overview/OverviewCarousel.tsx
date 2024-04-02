import React from "react";
import Carousel from "../Carousel";
import ProductsCatList from "./ProductsCatList";
import IntersectionObserverComponent from "../IntersectionObserverComponent";

interface IProps {
  parentCatName: string;
  categoriesInfo: { img: string; title: string; subtitle: string }[];
}

function OverviewCarousel({ parentCatName, categoriesInfo }: IProps) {
  return (
    <>
      <div className="w-full py-10 px-12 sm:hidden">
        <Carousel datasLength={categoriesInfo?.length}>
          {categoriesInfo?.map((item) => (
            <IntersectionObserverComponent
              key={item.title}
              className={`duration-[1s]`}
              beforeAnimation={"blur-sm opacity-0"}
              afterAnimation={"blur-none opacity-1"}
            >
              <ProductsCatList
                hasLink={true}
                parentCatName={parentCatName}
                img={item.img}
                subtitle={item.subtitle}
                title={item.title}
              />
            </IntersectionObserverComponent>
          ))}
        </Carousel>
      </div>

      <ul className="hidden sm:grid grid-cols-2 gap-2 px-4 sm:pt-7">
        {categoriesInfo?.map((item, index) => (
          <ProductsCatList
            hasLink={true}
            imgLayoutHeight="sm:h-[150px]"
            key={index}
            img={item.img}
            parentCatName={parentCatName}
            subtitle={item.subtitle}
            title={item.title}
          />
        ))}
      </ul>
    </>
  );
}

export default OverviewCarousel;
