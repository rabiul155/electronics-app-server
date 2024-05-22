"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required for order '],
        trim: true,
    },
    productId: {
        type: String,
        required: [true, 'Order must have an product id'],
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
});
const Order = (0, mongoose_1.model)('order', orderSchema);
exports.default = Order;
