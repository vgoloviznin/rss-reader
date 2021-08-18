import express from 'express';
import cors, { CorsOptions } from 'cors';

import routes from './controllers/index';
import { errorMiddleware } from './middlewares/error';

const PORT = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:8080'];

const options: CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(options));
app.use(routes);

app.get('/', (_, res) => res.json('OK'));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Started on ${PORT}`));
