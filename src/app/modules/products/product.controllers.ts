import { Request, Response } from 'express';
import { productServices } from './product.services';
import { productValidationSchema } from './product.validation';

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const search = req.query.searchTerm as string;
    const products = await productServices.getAllProduct(search);
    res.status(200).json({
      success: true,
      message: search
        ? `Products matching search term '${search}' fetched successfully!`
        : 'Products fetched successfully!',
      data: products,
    });
  } catch (error: any) {
    console.error('Error fetching products:', error);
    res.status(400).json({
      success: false,
      message: 'Fail to get product',
      error: error.message,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const _id = req.params.productId;
    const product = await productServices.getSingleProduct(_id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: product,
    });
  } catch (error: any) {
    console.error('Error fetching product:', error);
    res.status(400).json({
      success: false,
      message: 'Fail to get product',
      error: error.message,
    });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    productValidationSchema.parse(data);
    const product = await productServices.createProduct(data);
    res.status(201).json({
      success: true,
      message: 'Products created successfully!',
      data: product,
    });
  } catch (error: any) {
    console.error('Error creating product:', error);
    res.status(400).json({
      success: false,
      message: 'Fail to create product',
      error: error.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const _id = req.params.productId;
    const product = await productServices.deleteProduct(_id);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    console.error('Error deleting product:', error);
    res.status(400).json({
      success: false,
      message: 'Fail to delete product',
      error: error.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const _id = req.params.productId;
    const data = req.body;
    productValidationSchema.parse(data);
    const product = await productServices.updateProduct(_id, data);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: product,
    });
  } catch (error: any) {
    console.error('Error updating product:', error);
    res.status(400).json({
      success: false,
      message: 'Fail to update product',
      error: error.message,
    });
  }
};

export const productController = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
