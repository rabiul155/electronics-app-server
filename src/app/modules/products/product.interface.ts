export interface VariantType {
  type: string;
  value: string;
}

export interface InventoryType {
  quantity: number;
  inStock: boolean;
}

interface ProductType {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: VariantType[];
  inventory: InventoryType;
}

export default ProductType;
