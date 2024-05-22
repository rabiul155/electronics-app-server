import express from 'express';
import { productController } from './product.controllers';

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProduct)
  .post(productController.createProduct);

router
  .route('/:productId')
  .get(productController.getSingleProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export const productRoute = router;
