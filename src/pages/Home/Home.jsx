import { CardItem } from "components";
import { getProducts } from "helper/api";
import ProductsLayout from "layouts/ProductsLayout/ProductsLayout";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  let limit = 8;
  let skip = 0;
  useEffect(() => {
    getProducts(limit, skip).then((resp) => setTrendingProducts(resp));
  }, []);

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

      <ProductsLayout title={"New Feature"} />
    </div>
  );
};

export default Home;
