import React from "react";

interface IProps {
  className?: string;
  heading: string;
  description?: string;
  children?: React.ReactNode;
}

function CollapsibleInfo({
  className,
  heading,
  description,
  children,
}: IProps) {
  return (
    <div className={className}>
      <h3 className="font-semibold">{heading}</h3>
      <p className={`text-sm pt-1 ${!description ? "hidden" : "block"}`}>{description}</p>
      <div className={`text-sm pt-1 ${!children ? "hidden" : "block"}`}>{children}</div>
    </div>
  );
}

export default CollapsibleInfo;
