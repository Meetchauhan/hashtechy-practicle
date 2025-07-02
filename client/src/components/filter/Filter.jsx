import { useState, useMemo } from "react";
import useProducts from "../../customHooks/useProducts"; // Adjust path if needed
import { useDispatch } from "react-redux";
import { getCategory } from "../../features/filterSlice";

const Filter = () => {
  const dispath = useDispatch();
  const {
    data: { data: products },
  } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    if (!products) return [];
    const unique = [...new Set(products.map((item) => item.category))];
    return ["All", ...unique];
  }, [products]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <label className="text-gray-700 font-semibold mr-3">
          Filter by Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            dispath(getCategory(e.target.value));
          }}
          className="border px-4 py-2 rounded shadow-sm focus:ring-2 focus:ring-cyan-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
