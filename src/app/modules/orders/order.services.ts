import ProductType from '../products/product.interface';
import { productServices } from '../products/product.services';
import OrderType from './order.interface';
import Order from './order.model';

const createOrder = async (data: OrderType) => {
  try {
    const productId = data.productId;
    const product = await productServices.getSingleProduct(productId);
    if (
      product?.inventory.inStock &&
      product?.inventory.quantity >= data.quantity
    ) {
      // updating product inventory data
      const quantity = product?.inventory.quantity - data.quantity;
      const inStock = quantity > 0 ? true : false;

      const inventory = {
        quantity,
        inStock,
      };

      await productServices.updateProductInventory(productId, inventory);

      //creating order
      const order = await Order.create(data);
      return order;
    } else {
      throw new Error('Insufficient quantity available in inventory');
    }
  } catch (error) {
    throw error;
  }
};

const getOrder = async (email: string) => {
  try {
    let orders;
    if (email) {
      orders = await Order.find({ email });
    } else {
      orders = await Order.find();
    }
    if (orders.length > 0) {
      return orders;
    } else {
      throw new Error('Order not found');
    }
  } catch (error) {
    throw error;
  }
};

export const orderServices = {
  createOrder,
  getOrder,
};
