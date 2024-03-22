"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IProducts } from "@/types/products";
import ProductsItem from "./ProductsItem";
import { API_BASE_URL } from "@/utils/API_BASE_URL";

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState<IProducts[]>([]);
  const [skip, setSkip] = useState(0);
  const limit = 16; // Assuming you want to load 10 items at a time
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [skip]);

  const fetchData = async () => {
    // try {
    //   //   const response = await axios.get(`http://localhost:8080/products?catname=basin&limit=${limit}&skip=${skip}`);
    //   const response = await axios.get(
    //     `http://localhost:8080/products?catname=basin&limit=${limit}&skip=${skip}`
    //   );
    //   const newData = response.data; // Assuming your API returns an array of items
    //   console.log(newData);
    //   setItems((prevItems) => [...prevItems, ...newData]);
    //   setHasMore(newData.length === limit); // If the number of items fetched is less than the limit, it means there are no more items to fetch
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  const loadMoreData = () => {
    setSkip((prevSkip) => prevSkip + limit);
  };

  return (
    <ul className="col-span-5 sm:col-span-6">
      <InfiniteScroll
        dataLength={items.length}
        className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8 sm:px-8"
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        // endMessage={<p>No more items to load.</p>}
      >
        {items.map((item) => (
          <ProductsItem key={item.id} productsInfo={item} />
        ))}
      </InfiniteScroll>
    </ul>
  );
};

export default InfiniteScrollComponent;
