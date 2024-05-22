import express from 'express';
import { orderController } from './order.controllers';

const router = express.Router();

router
  .route('/')
  .get(orderController.getOrders)
  .post(orderController.createOrder);

export const orderRoute = router;
