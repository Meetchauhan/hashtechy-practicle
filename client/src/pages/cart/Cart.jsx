import { useDispatch } from "react-redux";
import useCartProduct from "../../customHooks/useCartProduct";
import { removeFromCart } from "../../features/cartSlice";
import CartItem from "../../components/cartItem/CartItem";
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useCartProduct();

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (cartData?.data?.length) {
      const initialQuantities = {};
      cartData.data.forEach((item) => {
        initialQuantities[item._id] = 1;
      });
      setQuantities(initialQuantities);
    }
  }, [cartData?.data]);

  const handleRemoveFromCart = (_id) => {
    dispatch(removeFromCart({ _id }));
    setQuantities((prev) => {
      const copy = { ...prev };
      delete copy[_id];
      return copy;
    });
  };

  const handleIncrement = (_id, maxQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [_id]: Math.min((prev[_id] || 1) + 1, maxQuantity),
    }));
  };

  const handleDecrement = (_id) => {
    setQuantities((prev) => ({
      ...prev,
      [_id]: Math.max((prev[_id] || 1) - 1, 1),
    }));
  };

  const totalAmount = useMemo(() => {
    if (!cartData?.data?.length) return 0;
    return cartData.data.reduce((sum, item) => {
      const quantity = quantities[item._id] || 1;
      return sum + (item.price || 0) * quantity;
    }, 0);
  }, [cartData?.data, quantities]);

  return (
    <div className="relative min-h-[80vh] max-w-3xl mx-auto px-4 py-8 pb-32">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Your Cart
      </h1>

      {cartData?.data?.length > 0 ? (
        <div className="flex flex-col gap-6">
          {cartData.data.map((item) => (
            <CartItem
              key={item._id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              totalQuantity={item.quantity}
              quantity={quantities[item._id] || 1}
              removeFromCart={() => handleRemoveFromCart(item._id)}
              handleIncrement={() => handleIncrement(item._id, item.quantity)}
              handleDecrement={() => handleDecrement(item._id)}
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

      {/* Total Bar */}
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
