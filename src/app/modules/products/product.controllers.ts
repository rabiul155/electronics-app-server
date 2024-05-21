import { Request, Response } from 'express';
import { ProductServices } from './product.services';

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductServices.getAllProduct();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      message: 'Fail to get product',
      error: error,
    });
  }
};

export const ProductController = {
  getAllProduct,
};
