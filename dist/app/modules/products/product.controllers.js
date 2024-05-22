"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_services_1 = require("./product.services");
const product_validation_1 = require("./product.validation");
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.searchTerm;
        const products = yield product_services_1.productServices.getAllProduct(search);
        res.status(200).json({
            success: true,
            message: search
                ? `Products matching search term '${search}' fetched successfully!`
                : 'Products fetched successfully!',
            data: products,
        });
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(400).json({
            success: false,
            message: 'Fail to get product',
            error: error.message,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.productId;
        const product = yield product_services_1.productServices.getSingleProduct(_id);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: product,
        });
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(400).json({
            success: false,
            message: 'Fail to get product',
            error: error.message,
        });
    }
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        product_validation_1.productValidationSchema.parse(data);
        const product = yield product_services_1.productServices.createProduct(data);
        res.status(201).json({
            success: true,
            message: 'Products created successfully!',
            data: product,
        });
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(400).json({
            success: false,
            message: 'Fail to create product',
            error: error.message,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.productId;
        yield product_services_1.productServices.deleteProduct(_id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(400).json({
            success: false,
            message: 'Fail to delete product',
            error: error.message,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.productId;
        const data = req.body;
        product_validation_1.productValidationSchema.parse(data);
        const product = yield product_services_1.productServices.updateProduct(_id, data);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: product,
        });
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(400).json({
            success: false,
            message: 'Fail to update product',
            error: error.message,
        });
    }
});
exports.productController = {
    getAllProduct,
    getSingleProduct,
    createProduct,
    deleteProduct,
    updateProduct,
};
