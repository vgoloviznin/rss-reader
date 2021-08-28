import express from 'express';
import cors, { CorsOptions } from 'cors';

import routes from './controllers/index';
import { errorMiddleware } from './middlewares/error';

const PORT = process.env.PORT || 3000;
const allowedOrigins = ['http://localhost:8080', 'http://localhost:8000', 'app://localhost'];

const options: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(options));
app.use(routes);

app.get('/', (_, res) => res.json('OK'));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Started on ${PORT}`));
