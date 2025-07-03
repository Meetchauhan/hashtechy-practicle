import { useSelector } from "react-redux";

const useCartProduct = () => {
  const cart = useSelector((state) => state?.cart);

  return cart;
};
export default useCartProduct;
