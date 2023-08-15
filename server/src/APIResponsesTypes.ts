export interface Artist {
  id: string;
  name: string;
  albums: Album[];
  images: string[];
}

export interface Album {
  id: string;
  name: string;
  images: string[];
  popularity?: number;
  release_year?: number;
  release_date?: string;
  tracks?: Track[];
}

export interface Track {
  id: string;
  name: string;
  duration_ms: number;
  track_number: number;
  artists?: Artist[];
  href?: string;
}