import { CardItem } from "components";
import { getProducts } from "helper/api";
import ProductsLayout from "layouts/ProductsLayout/ProductsLayout";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  let skipN = 10;
  let limit = 8;
  let skip = 0;
  useEffect(() => {
    getProducts(limit, skip).then((resp) => setTrendingProducts(resp));
    getProducts(limit, skipN).then((resp) => setNewArrivalProducts(resp));
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <ProductsLayout title={"Trending Products"}>
        {trendingProducts.map((el) => (
          <CardItem
            key={el.id}
            id={el.id}
            title={el.title}
            category={el.category}
            oldPrice={el.price}
            discountPercentage={el.discountPercentage}
            thumbnail={el.thumbnail}
          />
        ))}
      </ProductsLayout>
      <hr />
      <hr />
      <hr />
      <hr />
      <ProductsLayout title={"New Feature"}>
        {newArrivalProducts.map((el) => (
          <CardItem
            key={el.id}
            title={el.title}
            category={el.category}
            oldPrice={el.price}
            discountPercentage={el.discountPercentage}
            thumbnail={el.thumbnail}
          />
        ))}
      </ProductsLayout>
    </div>
  );
};

export default Home;
