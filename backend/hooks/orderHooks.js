import mongoose from "mongoose";
import Product from "../models/productModel.js";

// Define a post-save hook to update product quantities
export const postSaveUpdateProductQuantities = async function () {
    const order = this;

    try {
        for (const item of order.items) {
            if (!item._id) {
                console.warn(`Product ID is missing for an item in order ${order._id}. Skipping this item.`);
                continue;
            }

            const productId = new mongoose.Types.ObjectId(item._id);
            const product = await Product.findById(productId);

            if (!product) {
                console.warn(`Product not found in database: ${productId}. Skipping quantity update.`);
                continue;
            }

            // Update the quantity
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                { $inc: { quantity: -item.quantity } },
                { new: true }
            );
        }
    } catch (error) {
        console.error("Error updating product quantity:", error);
    }
};
