// Define an interface for the Order model
interface OrderType {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

export default OrderType;
