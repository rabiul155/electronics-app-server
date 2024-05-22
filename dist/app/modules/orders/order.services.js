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
exports.orderServices = void 0;
const product_services_1 = require("../products/product.services");
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = data.productId;
        const product = yield product_services_1.productServices.getSingleProduct(productId);
        if ((product === null || product === void 0 ? void 0 : product.inventory.inStock) &&
            (product === null || product === void 0 ? void 0 : product.inventory.quantity) >= data.quantity) {
            // updating product inventory data
            const quantity = (product === null || product === void 0 ? void 0 : product.inventory.quantity) - data.quantity;
            const inStock = quantity > 0 ? true : false;
            const inventory = {
                quantity,
                inStock,
            };
            yield product_services_1.productServices.updateProductInventory(productId, inventory);
            //creating order
            const order = yield order_model_1.default.create(data);
            return order;
        }
        else {
            throw new Error('Insufficient quantity available in inventory');
        }
    }
    catch (error) {
        throw error;
    }
});
const getOrder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let orders;
        if (email) {
            orders = yield order_model_1.default.find({ email });
        }
        else {
            orders = yield order_model_1.default.find();
        }
        if (orders.length > 0) {
            return orders;
        }
        else {
            throw new Error('Order not found');
        }
    }
    catch (error) {
        throw error;
    }
});
exports.orderServices = {
    createOrder,
    getOrder,
};
