import { IFilter } from "@/types/products";
// import { Disclosure } from "@headlessui/react";
// import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, useEffect, useState } from "react";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import datas from "@/public/datas.json";

interface IProps {
  parentCatName: string;
  catName: string;
}

function Filters({ catName, parentCatName }: IProps) {
  const dispatch = useDispatch<any>();

  const [selectedCatNames, setSelectedCatNames] = useState<string[]>([catName]);

  function createFetchProductsUrl(catNames: string[], limit = 16, skip = 0) {
    let tableNames = "";
    catNames?.map((item) => {
      tableNames +=  " " + item.replaceAll("&", "").replaceAll(" ", "_").replaceAll("__", "_").toLowerCase();
    });

    return `${API_BASE_URL}/products/?catname=${tableNames.trim()}&skip=${skip}&limit=${limit}`;
  }

  const onCheckBoxChanged = (event: ChangeEvent<HTMLInputElement>) => {
    // const map = new Map<string, string>();
    // selectedCatNames?.forEach((item) => {
    //   map.set(item, item);
    // });

    const value = event.currentTarget.value;
    const isChecked = event.currentTarget.checked;

    // if (map.has(value)) {
    //   if (isChecked === false) {
    //     map.delete(value);
    //   }
    // } else {
    //   if (isChecked !== false) {
    //     map.set(value, value);
    //   }
    // }

    setSelectedCatNames([value]);
    dispatch(fetchProducts(createFetchProductsUrl([value])));
  };

  const filters: IFilter[] = [
    {
      id: "categories",
      name: "Categories",
      options: [],
    },
  ];

  datas.map((item) => {
    if (item.title === parentCatName) {
      item.categories.map((eachItem) => {
        // const catNames = catName.split("_");
        filters[0].options.push({
          value: eachItem.title,
          label: eachItem.title,
          checked: eachItem.title === selectedCatNames[0],
        });
      });
    }
  });

  return (
    <>
      {/* Filters */}
      <form className="sm:hidden">
        {filters?.map((section) => (
          <div key={section.id} className="space-y-4">
            {section.options.map((option, optionIdx) => (
              <div key={option.value} className="flex items-center">
                <input
                  onChange={(e) => onCheckBoxChanged(e)}
                  id={`filter-${section.id}-${optionIdx}`}
                  name={`${section.id}[]`}
                  value={option.value}
                  type="checkbox"
                  checked={option.checked}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={`filter-${section.id}-${optionIdx}`}
                  className="ml-3 text-sm text-gray-600"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        ))}
      </form>
    </>
  );
}

export default Filters;
