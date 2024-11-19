import React from "react";
import "./ProductsLayout.css";
const ProductsLayout = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <div className="children-structure">{children}</div>
    </div>
  );
};

export default ProductsLayout;
