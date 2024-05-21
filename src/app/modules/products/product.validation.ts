import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string({
    required_error: 'Name is required',
  }),
  value: z.string({
    required_error: 'Name is required',
  }),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number({
      required_error: 'Quantity is required',
    })
    .min(0, { message: 'Quantity must be a positive integer' }),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(3, { message: 'Product name must be at least 3 characters' })
    .max(35, { message: 'Product name must not exceed 35 characters' }),

  description: z.string().optional(),
  price: z
    .number()
    .positive({ message: 'Product price must be a positive number' }),
  category: z.string({
    required_error: 'Category is required',
  }),
  tags: z.array(z.string()).nonempty({ message: 'Tags are required' }),
  variants: z
    .array(variantValidationSchema)
    .nonempty({ message: 'Variants are required' }),
  inventory: inventoryValidationSchema,
});
