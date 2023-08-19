import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import fetchArtist from "../fetchArtist";
import { useLocation } from 'react-router-dom';
import LoadingDots from "./LoadingDots";

const Search = () => {
  const location = useLocation();
  const [searchArtist, setSearchArtist] = useState(location.state?.artist ?? ''); // cache artist
  const results = useQuery(["search", searchArtist], fetchArtist);
  const artist = results?.data ?? {};
  if (results.isLoading) {
    return <LoadingDots />;
  }
  if (results.isError) {
    return (
        <h2>Failed to load data</h2>
    );
  }

  return (
    <div>
      <div className="search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const artist = formData.get("artist")?.toString() ?? "";
            setSearchArtist(artist);
          }}
          >
          <input id="artist" name="artist" placeholder="Artist" />
          <button type="submit">Search</button>
        </form>
      </div>
      {searchArtist !== '' ? <Results artist={artist} /> : null}

      
    </div>
  );
};

export default Search;
