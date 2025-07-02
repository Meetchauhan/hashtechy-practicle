const CartItem = ({
  title,
  image,
  price,
  description,
  totalQuantity,
  quantity,
  removeFromCart,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-[1.01] max-w-4xl mx-auto border border-gray-200">
      <div className="md:w-1/3 h-52 md:h-auto flex items-center justify-center bg-gray-50 p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between text-base text-gray-700 mb-2">
          <div className="text-cyan-600 text-xl font-bold">₹ {price}</div>
          <div className="text-xs text-gray-500">Stock: {totalQuantity}</div>
        </div>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center border rounded-lg px-2 py-1 bg-gray-100">
            <button
              onClick={handleDecrement}
              className="px-2 py-1 text-gray-700 hover:text-black disabled:opacity-50 font-bold text-lg"
              disabled={quantity <= 1}
            >
              −
            </button>
            <span className="px-4 text-lg font-medium">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-2 py-1 text-gray-700 hover:text-black font-bold text-lg"
              disabled={quantity === totalQuantity}
            >
              +
            </button>
          </div>
          <button
            onClick={removeFromCart}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-base font-medium shadow"
          >
            Remove
          </button>
        </div>
        {quantity === totalQuantity && (
          <p className="text-red-600">You reached maximum quantity</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
