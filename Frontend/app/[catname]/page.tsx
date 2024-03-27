import Image from "next/image";
import React from "react";
import OverviewCarousel from "../components/overview/OverviewCarousel";
import datas from "@/public/datas.json";
import { notFound } from "next/navigation";

export default function page({ params }: { params: { catname: string } }) {
  const pCatName = params.catname.toLowerCase().replaceAll("-", " ");

  const mydata = datas.filter(
    (eachItem) => eachItem.title.toLowerCase() === decodeURI(pCatName)
  );

  if(mydata.length === 0) return notFound();


  return (
    <>
      {/* <PageAnime> */}
        <div className="h-full w-full relative fadeIn">
          <Image
            className="w-full sm:object-cover sm:h-[600px]"
            src={mydata[0]?.bannerbackground}
            alt="background img"
            height={1500}
            width={1500}
          />
          <div className="absolute bottom-40 bg-[#29282891] w-[645px] ml-16 px-8 py-8 space-y-4 rounded-lg sm:w-[90%] sm:ml-3 sm:py-8">
            <h1 className="text-4xl text-white font-semibold">
              {mydata[0]?.title}
            </h1>
            <p className="text-white font-semibold">{mydata[0]?.subtitle}</p>
            {/* <button className="border-b-white border-b-2 text-white">
            Shop all Products
          </button> */}
          </div>
        </div>
        <OverviewCarousel
          categoriesInfo={mydata[0]?.categories}
          parentCatName={pCatName}
        />
      {/* </PageAnime> */}
    </>
  );
}
// const page = () => {
//   const pathname = location.pathname;
//   const splitPathname = pathname.split("/");
//   const catName = decodeURI(splitPathname[splitPathname.length - 1])

//   const mydata = datas.filter((eachItem) => eachItem.title === catName);

//   return (
//     <>
//       <div className="h-full w-full relative">
//         <Image
//           className="w-full sm:h-full sm:object-cover sm:object-center"
//           src={mydata[0]?.bannerbackground}
//           alt="background img"
//           height={1500}
//           width={1500}
//         />
//         <div className="absolute bottom-40 bg-[#29282891] w-[645px] ml-16 px-8 py-8 space-y-4 rounded-lg sm:w-full sm:ml-0 sm:py-8">
//           <h1 className="text-4xl text-white font-semibold">{mydata[0]?.title}</h1>
//           <p className="text-white font-semibold">
//           {mydata[0]?.subtitle}
//           </p>
//           <button className="border-b-white border-b-2 text-white">
//             Shop all Products
//           </button>
//         </div>
//       </div>
//       <OverviewCarousel categoriesInfo={mydata[0]?.categories} parentCatName = {catName}/>
//     </>
//   );
// };

// export default page;
