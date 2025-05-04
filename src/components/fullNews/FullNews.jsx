import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FullNews = ({ news, id }) => {
  const [newsDetails, setNewsDetails] = useState({});
  const { title, image_url, details, category_id } = newsDetails;
  useEffect(() => {
    const filteredNews = news.find((singleNews) => singleNews.id === id);
    setNewsDetails(filteredNews);
  }, []);
  return (
    <div className="flex flex-col gap-5 border-1 border-gray-200 rounded-md p-3 m-7">
      <img src={image_url} alt="" />
      <h1 className="text-2xl font-bold my-2">{title}</h1>
      <p className="text-sm text-gray-500">{details}</p>
      <div>
        <Link
          className="btn btn-primary rounded-none"
          to={`/category/${category_id}`}
        >
          Back TO home page
        </Link>
      </div>
    </div>
  );
};

export default FullNews;
