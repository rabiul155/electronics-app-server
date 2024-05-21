import ProductType from './product.interface';
import Product from './product.model';

const getAllProduct = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw error;
  }
};

const getSingleProduct = async (_id: string) => {
  try {
    const product = await Product.findById(_id);
    return product;
  } catch (error) {
    throw error;
  }
};

const createProduct = async (data: ProductType) => {
  try {
    const product = await Product.create(data);
    return product;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (_id: string) => {
  try {
    const product = await Product.findByIdAndDelete(_id);
    return product;
  } catch (error) {
    throw error;
  }
};

export const ProductServices = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  deleteProduct,
};
