import mongoose from "mongoose";
import Product from "./productModel.js";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, required: true, default: 'Order Placed' },
    paymentMethod: { type: String, required: true },
    payment: { type: Boolean, required: true, default: false },
    date: { type: Number, required: true },
});

orderSchema.post('save', async function () {
    const order = this;

    try {
        for (const item of order.items) {
            // Check if productId is present
            if (!item.productId) {
                console.warn(`Product ID is missing for an item in order ${order._id}. Skipping this item.`);
                continue;
            }

            const productId = new mongoose.Types.ObjectId(item.productId);

            console.log(`Checking product existence for ID: ${productId}`);

            const product = await Product.findById(productId);
            if (!product) {
                console.warn(`Product not found in database: ${productId}. Skipping quantity update.`);
                continue;
            }

            console.log(`Product found: ${product.name}, current quantity: ${product.quantity}. Updating by -${item.quantity}`);

            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                { $inc: { quantity: -item.quantity } },
                { new: true }
            );

            if (updatedProduct) {
                console.log(`Successfully updated ${product.name}. New quantity is ${updatedProduct.quantity}`);
            } else {
                console.warn(`Failed to update quantity for product ID: ${productId}`);
            }
        }
    } catch (error) {
        console.error("Error updating product quantity:", error);
    }
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;
