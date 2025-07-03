import { Cart } from "../model/cart.model.js";
import { Product } from "../model/product.model.js";

export const addToCart = async (req, res) => {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        let cart = await Cart.findOne({ userId });

        const itemData = {
            productId,
            quantity,
            title: product.title,
            category: product.category,
            price: product.price,
            image: product.image,
            description: product.description,
            maxQuantity: product.quantity,
        };

        if (cart) {
            const existingItem = cart.items.find(
                (item) => item.productId.toString() === productId
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push(itemData);
            }

            await cart.save();
        } else {
            cart = new Cart({
                userId,
                items: [itemData],
            });
            await cart.save();
        }

        res.status(200).json({ message: "Item added to cart", cart });
    } catch (error) {
        res.status(500).json({ message: "Failed to add to cart", error });
    }
};

export const removeFromCart = async (req, res) => {
    const userId = req.user.userId;
    const { productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(
            (item) => item.productId.toString() !== productId
        );

        await cart.save();
        res.status(200).json({ message: "Item removed from cart", cart });
    } catch (error) {
        res.status(500).json({ message: "Failed to remove from cart", error });
    }
};

export const getCart = async (req, res) => {
    const userId = req.user.userId;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart || cart.items.length === 0) {
            return res.status(200).json({ message: "Cart is empty", items: [] });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch cart", error });
    }
};


export const incrementCartItemQuantity = async (req, res) => {
    const userId = req.user.userId;
    const { productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const item = cart.items.find(
            (item) => item.productId.toString() === productId
        );

        if (!item) return res.status(404).json({ message: "Item not in cart" });

        if (item.quantity >= product.quantity) {
            return res.status(400).json({ message: "Reached maximum stock limit" });
        }

        item.quantity += 1;
        await cart.save();

        res.status(200).json({ message: "Quantity increased", cart });
    } catch (error) {
        res.status(500).json({ message: "Failed to increase quantity", error });
    }
};

export const decrementCartItemQuantity = async (req, res) => {
    const userId = req.user.userId;
    const { productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const item = cart.items.find(
            (item) => item.productId.toString() === productId
        );

        if (!item) return res.status(404).json({ message: "Item not in cart" });

        if (item.quantity <= 1) {
            return res.status(400).json({ message: "Minimum quantity is 1" });
        }

        item.quantity -= 1;
        await cart.save();

        res.status(200).json({ message: "Quantity decreased", cart });
    } catch (error) {
        res.status(500).json({ message: "Failed to decrease quantity", error });
    }
};
