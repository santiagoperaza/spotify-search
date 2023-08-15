import { QueryFunction } from "@tanstack/react-query";
import { ArtistAPIResponse } from "./APIResponsesTypes";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:3000/api';

const fetchArtist: QueryFunction<ArtistAPIResponse, ["search", string]> = async ({
  queryKey,
}) => {
  const artist = queryKey[1];

  if (!artist) return {};

  const apiRes = await fetch(`${API_URL}/search?artist=${artist}`);

  if (!apiRes.ok) {
    throw new Error(`search artist ${artist} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchArtist;
