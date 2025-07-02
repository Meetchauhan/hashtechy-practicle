const ProductDetailItem = ({
  title,
  image,
  price,
  description,
  addTocart,
  removeFromCart,
  isInCart,
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mt-10">
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl p-4 min-h-[320px]">
        <img
          src={image}
          alt={title}
          className="object-contain max-h-72 w-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-cyan-700">₹ {price}</span>
          {isInCart ? (
            <button
              onClick={removeFromCart}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={addTocart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
