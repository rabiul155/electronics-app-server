import OrderType from './order.interface';
import Order from './order.model';

const createOrder = async (data: OrderType) => {
  try {
    const order = await Order.create(data);
    return order;
  } catch (error) {
    throw error;
  }
};

const getOrder = async (email: string) => {
  try {
    if (email) {
      const order = await Order.find({ email });
      return order;
    } else {
      const order = await Order.find();
      return order;
    }
  } catch (error) {
    throw error;
  }
};

export const orderServices = {
  createOrder,
  getOrder,
};
