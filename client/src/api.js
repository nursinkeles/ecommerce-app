import axios from "axios";

export const fetchProductList = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

// export const fetchProduct = async (input) => {
//   const { data } = await axios.post(
//     "https://jsonplaceholder.typicode.com/posts/auth/register",input
//   );
//   return data;
// };
