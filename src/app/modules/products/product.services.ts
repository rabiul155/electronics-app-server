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

export const ProductServices = {
  getAllProduct,
  getSingleProduct,
};
