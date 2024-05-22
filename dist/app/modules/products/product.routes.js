"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
router
    .route('/')
    .get(product_controllers_1.productController.getAllProduct)
    .post(product_controllers_1.productController.createProduct);
router
    .route('/:productId')
    .get(product_controllers_1.productController.getSingleProduct)
    .put(product_controllers_1.productController.updateProduct)
    .delete(product_controllers_1.productController.deleteProduct);
exports.productRoute = router;
