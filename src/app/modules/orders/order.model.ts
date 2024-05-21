import { Schema, model } from 'mongoose';
import OrderType from './order.interface';

const orderSchema = new Schema<OrderType>({
  email: {
    type: String,
    required: [true, 'Email is required for order '],
    trim: true,
  },
  productId: {
    type: String,
    required: [true, 'Order must have an product id'],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Order = model<OrderType>('order', orderSchema);

export default Order;
