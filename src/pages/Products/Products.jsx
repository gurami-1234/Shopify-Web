import { getProducts } from "helper/api";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts(30, 0).then((resp) => setProductList(resp));
  }, []);
  return (
    <div>
      <ol>
        {productList.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default Products;
