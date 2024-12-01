import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";
const CategoryItem = ({ name, slug }) => {
  return (
    <div className="category-item">
      <p className="title">{name}</p>
      <Link to={`/category/${slug}`} className="view-products">
        View products 
      </Link>
    </div>
  );
};

export default CategoryItem;
