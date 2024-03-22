import Banner from "./components/Banner";
import BannerInfo from "./components/BannerInfo";
import CollectionsListview from "./components/CollectionsListview";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Banner />
        <BannerInfo />
      </div>
      <CollectionsListview />
    </main>
  );
}
