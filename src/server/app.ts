import express from 'express';

import routes from './controllers';
import { errorMiddleware } from './middlewares/error';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(routes);

app.get('/', (_, res) => res.json('OK'));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Started on ${PORT}`));
