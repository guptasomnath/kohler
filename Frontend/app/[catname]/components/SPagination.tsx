import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
import Link from "next/link";
import { BASE_URL } from "@/constant";

interface IProps {
  catName: string;
  currentPage: number;
  parentCatName : string;
}

function SPagination({ catName, currentPage, parentCatName }: IProps) {
  return (
    <div className="w-full flex items-center justify-center gap-6 mt-10">
      <Link href={`${BASE_URL}/${parentCatName?.replaceAll(" ", "-")}/${catName.replaceAll(" ", "-")}/${currentPage - 1}`}>
        <button
          className={`bg-white border-2 bg-opacity-50 text-gray-800 p-3 hover:bg-slate-100 rounded-full focus:outline-none`}
        >
          <GrPrevious />
        </button>
      </Link>

      {/* {totalPages} */}
      <Link href={`${BASE_URL}/${parentCatName?.replaceAll(" ", "-")}/${catName.replaceAll(" ", "-")}/${currentPage + 1}`}>
        <button
          className={`bg-white border-2 bg-opacity-50 text-gray-800 p-3 hover:bg-slate-100 rounded-full focus:outline-none`}
        >
          <GrNext />
        </button>
      </Link>
    </div>
  );
}

export default SPagination;
