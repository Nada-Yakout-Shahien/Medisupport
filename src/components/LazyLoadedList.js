import React, { useState, useEffect, useRef } from 'react';

const LazyLoadedList = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prevItems => [...prevItems, entry.target]);
        }
      });
    });

    const items = document.querySelectorAll('.lazy-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lazy-list" ref={containerRef}>
      {data.map((item, index) => (
        <div key={index} className="lazy-item">
          {visibleItems.includes(item) && <div>{item}</div>}
        </div>
      ))}
    </div>
  );
};

export default LazyLoadedList;
