"use client";

import { useEffect, useRef, useState } from "react";

interface IntersectionObserverProps {
  onIntersect?: () => void;
  onNotIntersect?: () => void;
  beforeAnimation?: string;
  afterAnimation?: string;
  children: React.ReactNode;
  className? : string;
}

const IntersectionObserverComponent: React.FC<IntersectionObserverProps> = ({
  onIntersect,
  onNotIntersect,
  beforeAnimation,
  afterAnimation,
  children,
  className
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Change threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        if (onIntersect) {
          onIntersect();
        }
      } else {
        if (onNotIntersect) {
          onNotIntersect();
        }
      }
    }, observerOptions);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [onIntersect, onNotIntersect]);

  return (
    <div ref={observerRef}>
      <div className={`${isIntersecting ? afterAnimation : beforeAnimation} transition-all duration-500 test ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default IntersectionObserverComponent;
