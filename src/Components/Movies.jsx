import { useState } from "react";
import "./Movies.css";

function Movies() {
  const moviesList = [
    "Pushpa 2",
    "Salaar",
    "Animal",
    "Leo",
    "RRR",
    "KGF 2",
    "Kantara",
    "Vikram",
    "Jawan",
    "Pathaan",
    "Devara",
    "Sita Ramam",
  ];

  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    if (!watchlist.includes(movie)) {
      setWatchlist([...watchlist, movie]);
      alert(`${movie} added to Watchlist`);
    }
  };

  const watchMovie = (movie) => {
    alert(`Now Playing: ${movie}`);
  };

  const filteredMovies = moviesList.filter((movie) =>
    movie.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movies-page">
      <h1>Movies</h1>

      <input
        type="text"
        placeholder="Search Movies..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movies-grid">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <h3>{movie}</h3>

            <div className="buttons">
              <button
                className="watch-btn"
                onClick={() => watchMovie(movie)}
              >
                ▶ Watch Movie
              </button>

              <button
                className="watchlist-btn"
                onClick={() => addToWatchlist(movie)}
              >
                + Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;