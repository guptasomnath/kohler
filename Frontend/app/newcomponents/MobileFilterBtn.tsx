"use client";

import { FunnelIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMobileFilterVisibility } from "../redux/slices/mobileFilter";

function MobileFilterBtn() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-2 hidden sm:block"
      onClick={() => dispatch(setMobileFilterVisibility(true))}
    >
      <span className="sr-only">Filters</span>
      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default MobileFilterBtn;
