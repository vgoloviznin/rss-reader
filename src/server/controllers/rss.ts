import express, { Request, Response } from 'express';

import { getFeed } from '../services/rss';

// eslint-disable-next-line new-cap
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (req: Request<unknown, unknown, unknown, RSSQuery>, res: Response): Promise<Response> => {
  const { url } = req.query;

  const response = await getFeed(url);

  return res.json(response);
});

export default router;
