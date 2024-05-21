import ProductType from './product.interface';
import Product from './product.model';

const getAllProduct = async (search: string) => {
  try {
    if (search) {
      const products = await Product.find({
        $or: [
          { name: { $regex: search } },
          { category: { $regex: search } },
          { description: { $regex: search } },
        ],
      });
      return products;
    } else {
      const products = await Product.find();
      return products;
    }
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

const updateProduct = async (_id: string, data: ProductType) => {
  try {
    const product = await Product.findByIdAndUpdate(_id, data, { new: true });
    console.log({ product });
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
  updateProduct,
};
