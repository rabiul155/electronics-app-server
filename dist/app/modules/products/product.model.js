"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        min: [3, 'Product name must be at least 3 character'],
        max: [35, 'Product name not more than 35 character'],
        required: [true, 'Product name is required'],
        unique: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Product Price is required'],
    },
    category: {
        type: String,
        required: [true, 'Product must have an category'],
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [variantSchema],
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
