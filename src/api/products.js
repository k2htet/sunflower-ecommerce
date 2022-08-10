import axios from "./axios";

export const getProducts = async (token, page, size) => {
  const response = await axios.get(`/api/products?page=${page}&size=${size}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });

  return response.data;
};
