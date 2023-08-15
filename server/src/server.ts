import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router.js';
import ApiError from './services/api-error.js';

const app = express();
app.use(cors())
app.use(morgan('dev'));

app.use('/api', router);

// For every other route, send 404
app.get('*', (_req: Request, res: Response) => res.sendStatus(404));

// Global error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: ApiError, _req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500;
  res.status(status).json(err.message);
})

export default app;