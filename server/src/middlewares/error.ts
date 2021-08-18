import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (err: Error | AxiosError, _: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500);

  const axiosError = err as AxiosError;
  if (axiosError.isAxiosError) {
    return res.json(axiosError.response?.data);
  }

  return res.json(<RSSResponse>{ status: 'error', message: 'error' });
};

export default { errorMiddleware };
