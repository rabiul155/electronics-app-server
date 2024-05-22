"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/products/product.routes");
const order_routes_1 = require("./app/modules/orders/order.routes");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//route handler
app.use('/api/products', product_routes_1.productRoute);
app.use('/api/orders', order_routes_1.orderRoute);
//Testing route
app.get('/', (req, res) => {
    res.send('Hello from server');
});
//Not found route handle
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route not found',
    });
});
exports.default = app;
