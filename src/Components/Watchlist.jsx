import { useMovieContext } from "./MovieContent";

function Watchlist() {
  const { watchlist } = useMovieContext();

  return (
    <div className="page">
      <h1>🎬 My Watchlist</h1>

      {watchlist.length === 0 ? (
        <div className="card">
          <p>No movies added to your watchlist yet.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <div
              className="movie-card"
              key={movie.id}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h3
                style={{
                  marginTop: "10px",
                }}
              >
                {movie.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;