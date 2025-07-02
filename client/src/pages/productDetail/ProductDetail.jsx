import { useLocation } from "react-router-dom";
import ProductDetailItem from "../../components/productDetailItem/ProductDetailItem";
import useProducts from "../../customHooks/useProducts";
import useCartProduct from "../../customHooks/useCartProduct";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/productSlice";
import { addToCart, removeFromCart } from "../../features/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useProducts();
  const cartData = useCartProduct();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productId = pathname.split("/").pop();
  const detail = product?.data?.data?.find((item) => item._id === productId);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  const handleRemoveFromCart = (_id) => {
    dispatch(removeFromCart({ _id }));
  };

  const isInCart = (id) => {
    return cartData?.data?.some((item) => item._id === id);
  };

  return (
    <ProductDetailItem
      title={detail?.title}
      image={detail?.image}
      price={detail?.price}
      description={detail?.description}
      addTocart={() => handleAddToCart(detail)}
      isInCart={isInCart(detail?._id)}
      removeFromCart={() => handleRemoveFromCart(detail?._id)}
    />
  );
};
export default ProductDetail;
