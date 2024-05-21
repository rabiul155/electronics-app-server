import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  productId: z.string(),
  price: z.number().positive({ message: 'Invalid price' }),
  quantity: z.number().int().min(1, { message: 'Invalid quantity' }),
});

export default orderValidationSchema;
