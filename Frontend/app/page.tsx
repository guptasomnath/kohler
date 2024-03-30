import Banner from "./components/Banner";
import BannerInfo from "./components/BannerInfo";
import CollapsibleMenu from "./components/Collapsible/CollapsibleMenu";
import CollectionsListview from "./components/CollectionsListview";
import HomeActionsBtn from "./components/HomeActionsBtn";

export default function Home() {
  return (
    <main className="fadeIn">
      <div className="relative group/hero">
        <Banner />
        <BannerInfo />
        <div className="hidden sm:flex w-1/2 backdrop-blur-sm ml-10 rounded-3xl pl-24 sm:ml-0 sm:rounded-none pr-28 h-auto bg-[#000000b9] flex-col justify-center relative items-start py-12 sm:w-full sm:pl-4 sm:pr-4">
          <h2 className="text-white text-[50px] font-[400] leading-[55px] text-left pb-3 sm:text-[30px] sm:leading-[32px]">
            LUXURY REDEFINED, Premium Bathware
          </h2>
          <p className="text-white font-thin text-[14px] sm:text-[13px] slidUp">
            Indulge in luxurious comfort with our premium bathroom products,
            meticulously crafted to elevate your daily routine to a new level of
            sophistication.
          </p>
          <HomeActionsBtn />
        </div>
      </div>
      <CollectionsListview />
      <CollapsibleMenu />
    </main>
  );
}
