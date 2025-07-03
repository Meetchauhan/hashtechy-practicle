import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import productRouter from "./routes/product.routes.js";
import userLoginRouter from "./routes/userLogin.routes.js";
import cartRouter from "./routes/cart.routes.js"
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
const PORT = process.env.PORT ?? 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRouter);
app.use("/api", userLoginRouter);
app.use("/api", cartRouter)

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running", PORT);
});
