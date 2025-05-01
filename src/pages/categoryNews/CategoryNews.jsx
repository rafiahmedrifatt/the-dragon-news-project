import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryNewsCard from "../../components/categoryNewsCard/CategoryNewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == 0) {
      setCategoryNews(data);
      return;
    } else if (id == 1) {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(breakingNews);
      return;
    }
    const filteredNews = data.filter((news) => news.category_id == id);
    setCategoryNews(filteredNews);
  }, [data, id]);
  return (
    <div>
      <h1 className="text-xl font-bold text-center">
        {categoryNews.length} news is found
      </h1>
      <div className="grid grid-cols-1 gap-3 mx-5">
        {categoryNews.map((news) => (
          <CategoryNewsCard news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
