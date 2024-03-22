import React from 'react';

interface IProps {
    children : React.ReactNode;
}

const HorizontalScroll = ({children} : IProps) => {
  return (
    <div
      className="overflow-x-auto whitespace-no-wrap"
      style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex flex-nowrap">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
