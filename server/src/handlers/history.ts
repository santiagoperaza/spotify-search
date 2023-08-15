import { NextFunction, Request, Response } from 'express';
import { getAll as serviceGetAll } from '../services/history.js';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await serviceGetAll();
    res.json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
}