import { Album, Artist } from '../APIResponsesTypes.js';
import { getAuth } from '../modules/auth.js';
import { saveSearch } from './history.js';
import axios from 'axios';
import config from '../config/config.js';
import ApiError from './api-error.js';

const api = axios.create({
  baseURL: config.spotifyBaseUrl,
 });

export const searchArtist = async (artistName: string): Promise<Artist | unknown> => {
  let token = await getAuth();
  try {
    const searchUrl = `/search?q=${artistName}&type=artist`;
    await saveSearch(searchUrl);

    const response = await api.get(searchUrl, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    const artist = response?.data?.artists?.items[0] as Artist;
    if (artist) {
      const albums = await getAlbums(artist.id);
      return {
        id: artist.id,
        name: artist.name,
        images: artist.images,
        albums
      }
    } else {
      console.log(`No artist found with name ${artistName}`);
      return {};
    }
  } catch (error) {
    if (error.response?.status === 401) {
      token = await getAuth(); // TODO: call api again after refreshing the token
      throw new ApiError('401 Unauthorized', 401);
    } else {
      throw new ApiError(`Failed searching artist with name ${artistName}`, error.response?.status);
    }
  }
}

const getAlbums = async (id: string): Promise<Album[]> => {
  let token = await getAuth();
  try {
    const searchUrl = `artists/${id}/albums`;
    const response = await api.get(searchUrl, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    const albums = response?.data?.items as Album[];

    const results: Album[] = albums.map((result) => {
      return {
        id: result.id,
        name: result.name,
        release_year: +result.release_date?.split('-')[0],
        images: result.images
      }
    })
    return results;
  } catch (error) {
    if (error.response?.status === 401) {
      token = await getAuth(); // TODO: call api again after refreshing the token
      throw new ApiError('401 Unauthorized', 401);
    } else {
      throw new ApiError(`Failed getting albums of artist with id ${id}`, error.response?.status);
    }
  }
}