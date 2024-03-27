import { IFilter } from "@/types/products";
import { API_BASE_URL } from "@/utils/API_BASE_URL";
import datas from "@/public/datas.json";
import Link from "next/link";
import { BASE_URL } from "@/constant";

interface IProps {
  parentCatName: string;
  catName: string;
  fromClassName? : string
}

function SFilters({ catName, parentCatName, fromClassName }: IProps) {
  const filters: IFilter[] = [
    {
      id: "categories",
      name: "Categories",
      options: [],
    },
  ];

  datas.map((item) => {
    if (item.title.toLowerCase() === parentCatName.toLowerCase()) {
      item.categories.map((eachItem) => {
        // const catNames = catName.split("_");
        filters[0].options.push({
          value: eachItem.title,
          label: eachItem.title,
          checked: eachItem.title.toLowerCase() === catName.toLowerCase().replaceAll("-", " "),
        });
      });
    }
  });

  return (
    <>
      {/* Filters */}
      <form className={`${fromClassName}`}>
        {filters?.map((section) => (
          <div key={section.id} className="space-y-4">
            {section.options.map((option, optionIdx) => (
              <div key={option.value} className="flex items-center">
                <Link href={`${BASE_URL}/${parentCatName.replaceAll(" ", "-").toLowerCase()}/${option.label.replaceAll(" ", "-").toLowerCase()}/1`}>
                  <input
                    //   onChange={(e) => onCheckBoxChanged(e)}
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
                </Link>
              </div>
            ))}
          </div>
        ))}
      </form>
    </>
  );
}

export default SFilters;