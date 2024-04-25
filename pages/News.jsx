"use client";

import { useEffect, useState } from "react";
import HeadTitle from "@/components/HeadTitle";
import { newsData } from "@/constants";
import NewsCard from "@/components/NewsCard";

function News() {
  const [windowWidthSize, setWidthWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidthWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <section id="news" className="my-[100px] px-[10px] sm:px-[50px]">
      <HeadTitle>Latest News</HeadTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        {newsData.map((item, index) => {
          if (windowWidthSize > 768 || windowWidthSize < 375) {
            if (index < 3) {
              return (
                <NewsCard
                  key={index}
                  imageUrl={item.imageUrl}
                  type={item.type}
                  title={item.title}
                  date={item.date}
                />
              );
            }
          } else {
            return (
              <NewsCard
                key={index}
                imageUrl={item.imageUrl}
                type={item.type}
                title={item.title}
                date={item.date}
              />
            );
          }
        })}
      </div>
      <button className="bg-[#0A1F35] text-lg p-2 rounded-md cursor-pointer relative left-[50%] translate-x-[-50%] mt-[30px]">
        View More
      </button>
    </section>
  );
}

export default News;
