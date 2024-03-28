import React from "react";
import FooterOptionItem from "./FooterOptionItem";
import { footerOptions } from "../datas/Footer";

function FooterOptionsList() {
  return (
    <div className="mt-11 flex items-center gap-20 sm:flex-col sm:gap-5">
      <div className="sm:w-full">
        <p className="text-white pb-1">Navigation</p>
        <FooterOptionItem options={footerOptions.navigation} />
      </div>
    </div>
  );
}

export default FooterOptionsList;
