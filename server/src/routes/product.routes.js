import express from "express";
import {
  createProduct,
  getProducts,
} from "../controller/product.controller.js";

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getProducts", getProducts);

export default router;
