import { NextFunction, Request, Response } from 'express';
import { searchArtist as serviceSearch } from '../services/search.js';

export const searchArtist = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const artist = req.query.artist as string;
    const response = await serviceSearch(artist);
    res.json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
}