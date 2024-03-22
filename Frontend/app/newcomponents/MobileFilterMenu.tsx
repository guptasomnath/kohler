import { IFilter } from "@/types/products";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, Dispatch, useState } from "react";
import React, { Fragment, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import datas from "@/public/datas.json";

interface IProps {
  mobileFiltersOpen: boolean;
  catName: string;
  parentCatName: string;
  setMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileFilterMenu({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  catName,
  parentCatName,
}: IProps) {
  const dispatch = useDispatch<any>();

  const [selectedCatNames, setSelectedCatNames] = useState<string[]>([catName]);

  function createFetchProductsUrl(catNames: string[], limit = 16, skip = 0) {
    let tableNames = "";
    catNames?.map((item) => {
      tableNames +=
        " " +
        item
          .replaceAll("&", "")
          .replaceAll(" ", "_")
          .replaceAll("__", "_")
          .toLowerCase();
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
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 "
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {filters?.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            onChange={() => console.log("Discloser changed")}
                            className="pt-6"
                          >
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    onChange={(e) => onCheckBoxChanged(e)}
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    checked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default MobileFilterMenu;
