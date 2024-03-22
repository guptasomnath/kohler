"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import EnquerySlider from "../components/EnquerySlider";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";
import SearchDialog from "../components/SearchDialog";
import Footer from "../components/Footer";
import PopupDialogLayout from "../dialog/PopupDialogLayout";
import FormDialog from "../dialog/FormDialog";
import MobileNav from "../components/MobileNav";

export function MyProvider({ child }: any) {
  const pathname = usePathname();
  return (
    <Provider store={store}>
      <div className="w-full h-[100vh] overflow-hidden overflow-y-scroll">
        <MobileNav />
        <PopupDialogLayout />
        <SearchDialog />
        <Navbar />
        <div className="w-full pt-[60px]">
          {child}
        </div>
        <Footer />
      </div>
    </Provider>
  );
}
