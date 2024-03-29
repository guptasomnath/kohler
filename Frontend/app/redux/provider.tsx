"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopupDialogLayout from "../dialog/PopupDialogLayout";
import MobileNav from "../components/MobileNav";
import FloatingBtn from "../components/FloatingBtn";

export function MyProvider({ child }: any) {
  return (
    <Provider store={store}>
      <div className="w-full h-[100vh] overflow-hidden overflow-y-scroll">
        <FloatingBtn />
        <MobileNav />
        <PopupDialogLayout />
        <Navbar />
        <div className="w-full pt-[60px]">{child}</div>
        <Footer />
      </div>
    </Provider>
  );
}
