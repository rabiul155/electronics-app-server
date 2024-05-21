import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import { ProductRoute } from './app/modules/products/product.routes';

const app: Application = express();

//middleware
app.use(express.json());
app.use(cors());

//route handler
app.use('/api/products', ProductRoute);

//base route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello form mobile app server');
});

export default app;
