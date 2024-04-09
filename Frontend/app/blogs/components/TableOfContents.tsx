import Link from "next/link";
import React from "react";
import { GoDot } from "react-icons/go";

interface IProps {
  contents_list: {text : string, link : string}[];
}

function TableOfContents({ contents_list }: IProps) {
  return (
    <div className="w-[70%] overflow-hidden sm:w-full">
    <table
      border={1}
      cellPadding={0}
      cellSpacing={0}
      width={"100%"}
      className="border-2 w-full mt-4"
    >
      <tbody className="w-full">
        <tr className="w-full">
          <td className="w-full px-5 py-4">
            <p>
              <strong>Table of contents</strong>
            </p>
            <ul className="space-y-1">
              {contents_list.map((item, index) => (
                <li key={index} className="text-[14px] text-[#0086f8] hover:underline">
                  <a rel="noopener" href={item.link.replaceAll(" ", "-")} className="w-full flex items-center gap-2">
                    <GoDot />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default TableOfContents;
