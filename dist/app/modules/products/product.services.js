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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const getAllProduct = (search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (search) {
            const products = yield product_model_1.default.find({
                $or: [
                    { name: { $regex: search } },
                    { category: { $regex: search } },
                    { description: { $regex: search } },
                ],
            });
            return products;
        }
        else {
            const products = yield product_model_1.default.find();
            return products;
        }
    }
    catch (error) {
        throw error;
    }
});
const getSingleProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.findById(_id);
        return product;
    }
    catch (error) {
        throw error;
    }
});
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.create(data);
        return product;
    }
    catch (error) {
        throw error;
    }
});
const deleteProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.findByIdAndDelete(_id);
        return product;
    }
    catch (error) {
        throw error;
    }
});
const updateProduct = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.findByIdAndUpdate(_id, data, { new: true });
        return product;
    }
    catch (error) {
        throw error;
    }
});
const updateProductInventory = (_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.findByIdAndUpdate(_id, {
            $set: {
                'inventory.quantity': data.quantity,
                'inventory.inStock': data.inStock,
            },
        }, { new: true });
        return product;
    }
    catch (error) {
        throw error;
    }
});
exports.productServices = {
    getAllProduct,
    getSingleProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    updateProductInventory,
};
