import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    orderValidationSchema.parse(data);
    const product = await orderServices.createOrder(data);
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: product,
    });
  } catch (error: any) {
    console.error('Error creating order:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Fail to create order',
      error: error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const product = await orderServices.getOrder(email);
    res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: product,
    });
  } catch (error: any) {
    console.error('Error finding order:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Fail to find order',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrders,
};
