"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ImageProps } from "next/image";

type NextImgProps = ImageProps;

interface IProps extends ImageProps {
  imageClass? : string;
}

function ShimmerImage(props: IProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoadingComplete = () => {
    console.log("Loaded");
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div
      className={`bg-gray-200 h-25 w-25 ${props.className} ${
        isLoaded ? "" : "leading-relaxed animate-pulse"
      }`}
    >
      <Image
        onLoad={handleLoadingComplete}
        onError={handleError}
        {...props}
        className={`${
          isLoaded ? "opacity-1" : "opacity-0"
        } transition-all duration-500 ${props.imageClass}`}
      />
    </div>
  );
}

export default ShimmerImage;
