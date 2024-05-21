import express from 'express';
import cors from 'cors';

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello form mobile app server');
});

export default app;
