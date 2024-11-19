import { getSingleProduct } from "helper/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { product_id } = useParams();
  const [productData, setProductData] = useState({});
  useEffect(() => {
    getSingleProduct(product_id).then((resp) => setProductData(resp));
  }, []);
  return (
    <div>
      <div>
        <h1>Product ID is: {product_id}</h1>
      </div>
      <div>
        <img src={productData.thumbnail} alt="" />
      </div>
      <div>
        <h3>{productData.title}</h3>
      </div>
      <div>
        <p>{productData.description}</p>
      </div>
    </div>
  );
};

export default Product;
