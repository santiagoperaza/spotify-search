export interface Artist {
  id?: string;
  name?: string;
  albums?: Album[];
  images?: string[];
}


export interface ArtistAPIResponse {
  artist: Artist;
  albums?: Album[];
}

export interface AlbumTracksAPIResponse {
  tracks: Track[];
}

export interface Album {
  id: string;
  name: string;
  popularity: number;
  images: AlbumImage[];
  release_year: number;
  tracks?: Track[];
}

export interface AlbumImage {
  url: string;
}

export interface Track {
  id: string;
  track_number: number;
  name: string;
  duration_ms: number;
  artists?: Artist[];
  href?: string;
}