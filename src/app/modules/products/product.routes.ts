import express from 'express';
import { ProductController } from './product.controllers';

const router = express.Router();

router.route('/').get(ProductController.getAllProduct).post();

router
  .route('/:productId')
  .get(ProductController.getSingleProduct)
  .put()
  .delete();

export const ProductRoute = router;
