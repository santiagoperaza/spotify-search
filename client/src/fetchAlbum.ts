import { QueryFunction } from "@tanstack/react-query";
import { Track } from "./APIResponsesTypes";

const API_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const fetchAlbumTracks: QueryFunction<Track[], ["tracks", string]> = async ({
  queryKey,
}) => {
  const albumId = queryKey[1];

  if (!albumId) return {};

  const apiRes = await fetch(`${API_URL}/albums/${albumId}/tracks`);

  if (!apiRes.ok) {
    throw new Error(`get album tracks of ${albumId} fetch not ok`);
  }

  return apiRes.json();
};

export { fetchAlbumTracks };
