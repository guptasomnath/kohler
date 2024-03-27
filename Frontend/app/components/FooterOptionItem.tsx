import Link from "next/link";
import React from "react";

interface IProps {
  options: {
    title: string;
    link: string | null;
  }[] | undefined;
}

const cssTxt = "text-gray-400 text-[14px] hover:translate-x-2 hover:transition-all"

function FooterOptionItem({ options }: IProps) {
  return (
    <ul className={``}>
      {options?.map((item) => (
        item.link ? (
        <Link key={item.title} href={item.link || ""}>
          <li className={cssTxt}>{item.title}</li>
        </Link>
        ) : <li key={item.title} className={cssTxt}>{item.title}</li>
      ))}
    </ul>
  );
}

export default FooterOptionItem;
