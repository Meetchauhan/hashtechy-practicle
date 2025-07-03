import { useLocation } from "react-router-dom";
import ProductDetailItem from "../../components/productDetailItem/ProductDetailItem";
import useProducts from "../../customHooks/useProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/productSlice";
import { addToCart } from "../../features/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useProducts();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productId = pathname.split("/").pop();
  const detail = product?.data?.data?.find((item) => item._id === productId);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <ProductDetailItem
      title={detail?.title}
      image={detail?.image}
      price={detail?.price}
      description={detail?.description}
      addTocart={() => handleAddToCart(detail)}
      _id={detail?._id}
    />
  );
};
export default ProductDetail;
