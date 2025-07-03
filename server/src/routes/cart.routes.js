import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addToCart, decrementCartItemQuantity, getCart, incrementCartItemQuantity, removeFromCart } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/addToCart", protect, addToCart);
router.post("/removeFromCart", protect, removeFromCart);
router.get("/getCart", protect, getCart);
router.post("/incrementCartItemQuantity", protect, incrementCartItemQuantity);
router.post("/decrementCartItemQuantity", protect, decrementCartItemQuantity)

export default router;
