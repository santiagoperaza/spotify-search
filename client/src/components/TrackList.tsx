import { useQuery } from "@tanstack/react-query";
import { fetchAlbumTracks } from "../fetchAlbum";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import moment from "moment";
import LoadingDots from "./LoadingDots";
import Album from "./Album";

const TrackList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const results = useQuery(["tracks", id || ''], fetchAlbumTracks);
  const artist = location.state.artist;
  const album = location.state.album;
  const albumTracks = results?.data ?? [];
  if (results.isLoading) {
    return <LoadingDots />;
  }
  return (
  <div>
    <section className="tracklist">
      <Album
        artist={artist.name}
        id={album.id}
        name={album.name}
        key={album.id}
        popularity={album.popularity}
        images={album.images}
        tracks={album.tracks || []}
        release_year={album.release_year}
      />
      <table>
        <tr>
          <th>Track</th>
          <th>Song</th>
          <th>Time</th>
        </tr>
        {!albumTracks.length ? (
          <h2>No Tracks Found</h2>
          ) : (
            albumTracks.map((track) => {
              return (
                <tr>
                  <td>{track.track_number}</td>
                  <td>{track.name}</td>
                  <td>{moment(track.duration_ms).format('m:ss')}</td>
                </tr>
              );
            })
            )}
      </table>
    </section>
    <button onClick={() => navigate('/', { state: { artist }})}>Back</button>
  </div>
  )
}

export default TrackList;