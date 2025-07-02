import { useSelector } from "react-redux";

const useCartProduct = () => {
  const products = useSelector((state) => state?.cart);
  return products;
};
export default useCartProduct;
