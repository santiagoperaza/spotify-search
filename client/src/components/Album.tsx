import { AlbumImage, Track } from "./APIResponsesTypes";
import { Link } from "react-router-dom";
import albumCover from '../assets/default-album-cover.png';

interface IProps {
  artist?: string;
  name: string;
  popularity: number;
  id: string;
  images: AlbumImage[];
  tracks: Track[];
  release_year: number;
}

const Album = (props: IProps) => {
  const { artist, id, name, images, release_year } = props;

  let image = { url: albumCover };
  if (images?.length) {
    image = images[0];
  }

  return (
    <Link to={`/albums/${id}/tracks`} state={{ artist, album: props }}>
      <figure>
        <img src={image.url} alt="album cover"/>
        <figcaption>
          <h3>{name}</h3>
          <p>{release_year}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Album;
