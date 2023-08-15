import { NextFunction, Request, Response } from 'express';
import { getAlbumTracks as serviceGetAlbumTracks } from '../services/albums.js';

export const getAlbumTracks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const response = await serviceGetAlbumTracks(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
}