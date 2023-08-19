import { Artist as ArtistType } from "./APIResponsesTypes";
import Album from "./Album";

const Results = ({ artist }: { artist: ArtistType }) => {
  return (
    <div className="results">
      {!artist.id ? (
        <h2 className="results-title">No Artist Found</h2>
      ) : <>
        <div>
          <h2 className="results-title">{artist.name}</h2>
          <h3>Top Albums</h3>
        </div>

      <div className="wrapper">
      {!artist.albums?.length ? (
        <h2 className="results-title">No Albums Found</h2>
      ) : (
        artist.albums.map((album) => {
          return (
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
            );
        })
      )}
    </div>
    </>
    }
    </div>
  );
};

export default Results;
