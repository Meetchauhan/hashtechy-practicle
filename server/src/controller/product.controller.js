import { Product } from "../model/product.model.js";

export const createProduct = async (req, res) => {
  const { title, image, description, price, category, quantity } = req.body;
  try {
    const product = new Product({
      title,
      image,
      description,
      price,
      category,
      quantity,
    });
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (e) {
    res.status(500).json({ success: false, message: "Server error", error: e });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ _id: -1 });
    res.status(200).json({ success: true, data: products });
  } catch (e) {
    res.status(500).json({ success: false, Message: "Server error", error: e });
  }
};
