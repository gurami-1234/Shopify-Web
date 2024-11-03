import React from "react";
import image from "images/thumbnail.png";
import "./CardItem.css";
const CardItem = () => {
  return (
    <div className="card-item">
      <div className="image-place">
        <img src={image} alt="" className="image" />
      </div>

      <div className="textures">
        <span className="category">beauty</span>
        <p className="title">
          <a href="#">Eyeshadow Palette with Mirror</a>
        </p>
        <div className="price-add">
          <div className="price">
            <p className="new-price">$18.89</p>
            <p className="price-percentage">
              <span className="old-price">
                <del>$19.99</del>
              </span>
              <span className="percentage">-5.5%</span>
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
