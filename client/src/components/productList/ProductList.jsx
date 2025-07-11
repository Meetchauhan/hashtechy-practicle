import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../productItem/productItem";
import { useEffect, useMemo } from "react";
import { getProducts } from "../../features/productSlice";
import useProducts from "../../customHooks/useProducts";
import Filter from "../filter/Filter";
import Loader from "../loader/Loader";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useProducts();
  const getCategory = useSelector((state) => state?.filter?.category);
  const loading = product?.pending;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!product) return [];
    if (getCategory === "All") return product?.data?.data;
    return product?.data?.data?.filter((item) => item.category === getCategory);
  }, [product, getCategory]);

  return (
    <div className="min-h-[80vh] h-full max-w-7xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800 tracking-tight">
        All Products
      </h1>
      <Filter />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts?.map((item) => (
            <div key={item?._id} className="flex flex-col h-full">
              <ProductItem
                _id={item?._id}
                title={item?.title}
                image={item?.image}
                description={item?.description}
                price={item?.price}
                quantity={item?.quantity}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
