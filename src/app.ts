import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import { productRoute } from './app/modules/products/product.routes';
import { orderRoute } from './app/modules/orders/order.routes';

const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

//route handler
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

//Not found route handle
app.all('*', (req, res) => {
  res.status(400).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
