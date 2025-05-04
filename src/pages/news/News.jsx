import React from "react";
import Header from "../header/Header";
import RightAside from "../rightAside/RightAside";
import FullNews from "../../components/fullNews/FullNews";
import { useLoaderData, useParams } from "react-router";

const News = () => {
  const news = useLoaderData();
  const { id } = useParams();
  console.log(news, id);
  return (
    <div className="w-10/12 mx-auto">
      <Header />
      <section className="grid grid-cols-12">
        <aside className="col-span-9">
          <FullNews news={news} id={id} />
        </aside>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </section>
    </div>
  );
};

export default News;
