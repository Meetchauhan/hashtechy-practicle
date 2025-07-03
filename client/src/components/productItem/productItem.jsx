import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getCart } from "../../features/cartSlice";

const ProductItem = ({ title, image, price, description, _id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: _id, quantity: 1 })).then(() =>
      dispatch(getCart())
    );
  };
  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full h-full flex flex-col max-w-sm mx-auto transition-transform hover:scale-105 min-h-[480px]">
      <Link
        to={`/product/${_id}`}
        className="h-64 overflow-hidden flex items-center justify-center bg-gray-100 group"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </Link>
      <div className="flex-1 p-4 space-y-2 flex flex-col justify-between">
        <div>
          <Link to={`/product/${_id}`} className="hover:underline">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </Link>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
          <span className="font-bold text-lg text-green-600">
            &#8377;{price}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
