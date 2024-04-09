import React from "react";
import BlogItems from "./components/BlogItems";
import { IBlogsItem } from "@/types/blogs";
import { BASE_URL } from "@/constant";

export const blogs : IBlogsItem[] = [
  {
    id : 0,
    title: "The Ultimate Guide to Designing Your Dream Luxury Bathroom",
    route : "ultimate-guide-designing-dream-luxury-bathroom",
    description:
      "Discover the secrets to creating your ideal luxury bathroom with our comprehensive guide. From opulent fixtures to innovative layouts, unlock the key elements to design your dream sanctuary of relaxation and indulgence.",
    bannerimg: BASE_URL + "/blog1image.webp",
    date : "09 APR 2024",
    catgory : "BATHROOM DESIGN",
    author : "AUTHOR",
    tags : ["BATHROOM DESIGN"]
  },
];

function page() {
  return (
    <div className="min-h-[100vh] pt-10">
      <h2 className="w-full text-center font-semibold text-3xl">BLOGS</h2>
      <ul className="w-full grid grid-cols-3 gap-8 px-8 pt-5 sm:grid-cols-1">
        {blogs.map((item) => (
          <BlogItems key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  );
}

export default page;
