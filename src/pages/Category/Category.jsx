import { CardItem } from "components";
import { getProductsByCategory } from "helper/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
const Category = () => {
  const [productsList, setProductsList] = useState([]);
  const { category_slug } = useParams();
  useEffect(() => {
    getProductsByCategory(category_slug).then((resp) => setProductsList(resp));
  }, []);
  return (
    <div className="category-page">
      <p className="category-page-title">
        Categories {`>`} <b>{category_slug}</b>
      </p>
      <div className="products-list">
        {productsList.map((el) => (
          <CardItem
            title={el.title}
            category={el.category}
            oldPrice={el.price}
            discountPercentage={el.discountPercentage}
            thumbnail={el.thumbnail}
            id={el.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
