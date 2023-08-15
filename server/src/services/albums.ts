import { Track } from '../APIResponsesTypes';
import { getAuth } from '../modules/auth.js';
import axios from 'axios';
import config from '../config/config.js';
import ApiError from './api-error.js';

let token = await getAuth();

const api = axios.create({
  baseURL: config.spotifyBaseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  }
 });

export const getAlbumTracks = async (id: string): Promise<Track[]> => {
  try {
    const response = await api.get(`albums/${id}/tracks`);
    const tracks = response?.data?.items as Track[];
    const results: Track[] = tracks.map((track) => {
      return {
        id: track.id,
        name: track.name,
        duration_ms: track.duration_ms,
        track_number: track.track_number,
        artists: track.artists,
        href: track.href
      };
    })
    return results;
    } catch (error) {
      if (error.response?.status === 401) {
        token = await getAuth(); // TODO: call api again after refreshing the token
        throw new ApiError('401 Unauthorized', 401);
      } else {
        throw new ApiError(`Failed getting tracks of album with id ${id}`, error.response?.status);
      }
  }
}