"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string({
        required_error: 'Name is required',
    }),
    value: zod_1.z.string({
        required_error: 'Name is required',
    }),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z
        .number({
        required_error: 'Quantity is required',
    })
        .min(0, { message: 'Quantity must be a positive integer' }),
    inStock: zod_1.z.boolean(),
});
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: 'Name is required',
    })
        .min(3, { message: 'Product name must be at least 3 characters' })
        .max(35, { message: 'Product name must not exceed 35 characters' }),
    description: zod_1.z.string().optional(),
    price: zod_1.z
        .number()
        .positive({ message: 'Product price must be a positive number' }),
    category: zod_1.z.string({
        required_error: 'Category is required',
    }),
    tags: zod_1.z.array(zod_1.z.string()).nonempty({ message: 'Tags are required' }),
    variants: zod_1.z
        .array(variantValidationSchema)
        .nonempty({ message: 'Variants are required' }),
    inventory: inventoryValidationSchema,
});
