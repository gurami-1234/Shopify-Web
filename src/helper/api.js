import axios from "assets/axios";

export const getProducts = async (limit, skip) => {
  const resp = await axios.get("products", {
    params: {
      limit,
      skip,
    },
  });
  return resp.data.products;
};

export const getSingleProduct = async (id) => {
  const resp = await axios.get(`products/${id}`);
  return resp.data;
};

export const getAllCategories = async () => {
  const resp = await axios.get("products/categories");
  return resp.data;
};

export const getProductsByCategory = async (category_slug) => {
  const resp = await axios.get(`products/category/${category_slug}`);
  return resp.data.products;
};

export const getAccessTokenFromAPI = async (body) => {
  const resp = await axios.post("auth/login", body);
  return resp.data.accessToken;
};

export const loginUsingAccessToken = async (accToken) => {
  const resp = await axios.get("auth/me", {
    headers: {
      Authorization: `Bearer ${accToken}`,
    },
  });
  return resp;
};
