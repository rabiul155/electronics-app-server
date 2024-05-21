import express from 'express';
import { ProductController } from './product.controllers';

const router = express.Router();

router
  .route('/')
  .get(ProductController.getAllProduct)
  .post(ProductController.createProduct);

router
  .route('/:productId')
  .get(ProductController.getSingleProduct)
  .put()
  .delete(ProductController.deleteProduct);

export const ProductRoute = router;
