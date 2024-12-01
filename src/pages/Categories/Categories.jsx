import { getAllCategories } from "helper/api";
import React, { useEffect, useState } from "react";
import CategoryItem from "./components/CategoryItem";
import "./Categories.css";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((resp) => setCategories(resp));
  }, []);
  return (
    <div className="category-page">
      <p className="page-title">Categories</p>
      <div className="categories-list">
        {categories.map((el) => (
          <CategoryItem name={el.name} slug={el.slug} key={el.slug} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
