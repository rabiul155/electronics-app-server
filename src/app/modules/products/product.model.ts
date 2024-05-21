import { Schema, model } from 'mongoose';
import ProductType, { InventoryType, VariantType } from './product.interface';

const variantSchema = new Schema<VariantType>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<InventoryType>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<ProductType>({
  name: {
    type: String,
    min: [3, 'Product name must be at least 3 character'],
    max: [35, 'Product name not more than 35 character'],
    required: [true, 'Product name is required'],
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Product Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product must have an category'],
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

const Product = model<ProductType>('Product', productSchema);

export default Product;
