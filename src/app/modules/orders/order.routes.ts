import express from 'express';
import { orderController } from './order.controllers';

const router = express.Router();

router.route('/').get().post(orderController.createOrder);

export const OrderRoute = router;
