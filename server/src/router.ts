import { Router } from 'express';
import { searchArtist } from './handlers/search.js';
import { getAll } from './handlers/history.js';
import { getAlbumTracks } from './handlers/albums.js';

const router = Router();

/*
 * Search
 */
router.get('/search', searchArtist);

/*
 * History
 */
router.get('/history', getAll);

/*
 * Albums
 */
router.get('/albums/:id/tracks', getAlbumTracks);

export default router;