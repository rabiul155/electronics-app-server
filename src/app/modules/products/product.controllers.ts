import { Request, Response } from 'express';
import { ProductServices } from './product.services';
import { productValidationSchema } from './product.validation';

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const search = req.query.searchTerm as string;
    const products = await ProductServices.getAllProduct(search);
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
    const product = await ProductServices.getSingleProduct(_id);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
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
    console.log(data);
    productValidationSchema.parse(data);
    const product = await ProductServices.createProduct(data);
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
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const _id = req.params.productId;
    const product = await ProductServices.deleteProduct(_id);
    res.status(200).json({
      success: true,
      message: 'Products deleted successfully!',
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
    const product = await ProductServices.updateProduct(_id, data);
    res.status(200).json({
      success: true,
      message: 'Products updated successfully!',
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

export const ProductController = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
