import React from "react";
import Carousel from "../Carousel";
import ProductsCatList from "./ProductsCatList";

interface IProps {
  parentCatName : string;
  categoriesInfo : {img : string, title : string, subtitle : string}[]
}

function OverviewCarousel({parentCatName, categoriesInfo} : IProps) {
  return (
    <>
      <div className="w-full py-10 px-12 sm:hidden">
        <Carousel datasLength={categoriesInfo?.length}>
          {categoriesInfo?.map((item) => (
            <ProductsCatList key={item.title} parentCatName = {parentCatName} img={item.img} subtitle={item.subtitle} title={item.title}/>
          ))}
        </Carousel>
      </div>

      <ul className="hidden sm:grid grid-cols-1 gap-8 px-4 sm:pt-7">
        {categoriesInfo?.map((item, index) => (
          <ProductsCatList key={index} img={item.img} parentCatName = {parentCatName} subtitle={item.subtitle} title={item.title}/>
        ))}
      </ul>
    </>
  );
}

export default OverviewCarousel;
