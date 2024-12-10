import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import connectDb from './config/connectDb.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import menuRouter from './routes/menu.route.js';

const app = express();

const PORT = process.env.PORT || 4000;

connectDb();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/v1', menuRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
