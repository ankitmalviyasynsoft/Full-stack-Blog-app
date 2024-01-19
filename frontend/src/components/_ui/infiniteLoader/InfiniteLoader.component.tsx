import { useEffect, useRef } from 'react';
import { InfiniteLoaderProps } from './InfiniteLoader.type';



const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({ onLoadMore }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onLoadMore();
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    const targetElement = document.getElementById('intersection-target');

    if (targetElement) {
      observerRef.current.observe(targetElement as Element);
    }

    // Cleanup when the component unmounts
    return () => {
      observerRef.current?.disconnect();
    };
  }, [onLoadMore]);

  return <div id="intersection-target" />;
};



export default InfiniteLoader;
