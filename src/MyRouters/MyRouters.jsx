import { MainLayout } from "layouts";
import { 
  Home, 
  Categories, 
  Category, 
  Product, 
  Products 
} from "pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MyRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product_id" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category_slug" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default MyRouters;
