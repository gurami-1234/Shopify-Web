import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
const CardItem = ({
  title,
  category,
  oldPrice,
  discountPercentage,
  thumbnail,
  id,
}) => {
  const newPrice = oldPrice - oldPrice * (discountPercentage / 100);
  return (
    <div className="card-item">
      <div className="image-place">
        <img src={thumbnail} alt="" className="image" />
      </div>

      <div className="textures">
        <span className="category">{category}</span>
        <p className="title">
          {/* <Link to={"/product/" + id}>{title}</Link> */}
          <Link to={`/product/${id}`}>{title}</Link>
        </p>
        <div className="price-add">
          <div className="price">
            <p className="new-price">${newPrice.toFixed(2)}</p>
            <p className="price-percentage">
              <span className="old-price">
                <del>{oldPrice}</del>
              </span>
              <span className="percentage">-{discountPercentage}%</span>
            </p>
          </div>

          <div className="add-to-cart">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
