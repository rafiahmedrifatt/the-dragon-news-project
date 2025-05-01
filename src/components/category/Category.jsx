import React, { use } from "react";
import { NavLink } from "react-router";

const categoryProvider = fetch("categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoryProvider);

  return (
    <div className="text-center">
      <h1>All Category</h1>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="btn bg-white border-0 hover:bg-base-200"
            to={`category/:${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
