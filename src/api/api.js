import axios from "axios";

export async function productsData() {
  const products = await axios.get("https://dummyjson.com/products");
  return products;
}
