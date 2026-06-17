import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    const exists = watchlist.find(
      (item) => item.id === movie.id
    );

    if (!exists) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist,
        addToWatchlist
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () =>
  useContext(MovieContext);