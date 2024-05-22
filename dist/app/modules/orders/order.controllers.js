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
exports.orderController = void 0;
const order_validation_1 = __importDefault(require("./order.validation"));
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        order_validation_1.default.parse(data);
        const product = yield order_services_1.orderServices.createOrder(data);
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: product,
        });
    }
    catch (error) {
        console.error('Error creating order:', error);
        res.status(400).json({
            success: false,
            message: error.message || 'Fail to create order',
            error: error,
        });
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const product = yield order_services_1.orderServices.getOrder(email);
        res.status(200).json({
            success: true,
            message: email
                ? 'Orders fetched successfully for user email!'
                : 'Orders fetched successfully!',
            data: product,
        });
    }
    catch (error) {
        console.error('Error finding order:', error);
        res.status(400).json({
            success: false,
            message: error.message || 'Fail to find order',
            error: error,
        });
    }
});
exports.orderController = {
    createOrder,
    getOrders,
};
