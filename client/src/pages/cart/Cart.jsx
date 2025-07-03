import { useDispatch } from "react-redux";
import useCartProduct from "../../customHooks/useCartProduct";
import { getCart } from "../../features/cartSlice";
import CartItem from "../../components/cartItem/CartItem";
import { Link } from "react-router-dom";
import { useMemo, useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useCartProduct();

  const totalAmount = useMemo(() => {
    if (!cartData?.data?.items?.length) return 0;

    return cartData?.data?.items?.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartData?.data]);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="relative min-h-[80vh] max-w-3xl mx-auto px-4 py-8 pb-32">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Your Cart
      </h1>

      {cartData?.data?.items?.length > 0 ? (
        <div className="flex flex-col gap-6">
          {cartData?.data?.items?.map((item) => (
            <CartItem
              key={item._id}
              _id={item.productId}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              maxQuantity={item.maxQuantity}
            />
          ))}
        </div>
      ) : (
        <div className="my-10 bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </p>
          <p className="text-lg text-gray-500">
            To add products to your cart, click{" "}
            <Link
              className="text-cyan-600 underline hover:text-cyan-800"
              to="/"
            >
              here
            </Link>
          </p>
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-full flex justify-center z-30">
        <div className="max-w-3xl w-full bg-white border-t border-gray-200 shadow-lg px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-700">
            Total Amount:
          </span>
          <span className="text-2xl font-bold text-cyan-600">
            ₹ {totalAmount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
