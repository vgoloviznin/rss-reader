import { Request, Response } from 'express';

export const errorMiddleware = (err: Error, _: Request, res: Response): void => {
  console.error(err);
  res.status(500);

  res.json(<RSSResponse>{ status: 'error', message: 'error' });
};

export default { errorMiddleware };
