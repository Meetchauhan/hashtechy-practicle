import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                    min: 1,
                },
                maxQuantity: {
                    type: Number,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                category: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Cart = mongoose.model("Cart", cartSchema);
