import axios from "axios";
export const fetchProductList = async () => {
  const { data } = await axios.get(
    "https://api.github.com/repos/tannerlinsley/react-query"
  );
  return data;
};
