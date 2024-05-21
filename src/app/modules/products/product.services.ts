import Product from './product.model';

const getAllProduct = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw error;
  }
};

export const ProductServices = {
  getAllProduct,
};
