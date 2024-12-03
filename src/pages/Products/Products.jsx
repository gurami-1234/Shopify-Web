import { CardItem } from "components";
import { getProducts } from "helper/api";
import ProductsLayout from "layouts/ProductsLayout/ProductsLayout";
import React, { useEffect, useState } from "react";
import "./Products.css";
const Products = () => {
  const [productList, setProductList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(28);

  useEffect(() => {
    getProducts(limit, skip).then((resp) => setProductList(resp));
  }, [skip]);

  const changePage = (e) => {
    let page = (e.target.value - 1) * limit;
    setSkip(page);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    console.log(window);
  };
  return (
    <div>
      <ProductsLayout title="Products">
        {productList.map((el) => (
          <CardItem
            key={el.id}
            title={el.title}
            category={el.category}
            oldPrice={el.price}
            discountPercentage={el.discountPercentage}
            thumbnail={el.thumbnail}
            id={el.id}
          />
        ))}
      </ProductsLayout>
      <div className="page-btns">
        <button className="page-btn" value={1} onClick={changePage}>
          1
        </button>
        <button className="page-btn" value={2} onClick={changePage}>
          2
        </button>
        <button className="page-btn" value={3} onClick={changePage}>
          3
        </button>
        <button className="page-btn" value={4} onClick={changePage}>
          4
        </button>
      </div>
    </div>
  );
};

export default Products;
