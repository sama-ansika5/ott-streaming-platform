import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { MovieProvider } from "./Components/MovieContent";

import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Premium from "./Components/Premium";
import LiveTV from "./Components/LiveTV";
import Sports from "./Components/Sports";
import HotAndNew from "./Components/HotAndNew";
import Reviews from "./Components/Reviews";
import Language from "./Components/Language";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Watchlist from "./Components/Watchlist";

import ProtectedRoute from "./Components/ProtectedRoute";
import ErrorBoundary from "./Components/ErrorBoundary";

import "./App.css";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter basename="/ott-streaming-platform">
        <div className="app">

          <nav className="navbar">
            <h2 className="logo">OTT STREAM</h2>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/livetv">Live TV</Link>
               <Link to="/sports">Sports</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/watchlist">Watchlist</Link>
              <Link to="/hotnew">Hot & New</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/premium">Premium</Link>
              <Link to="/language">Language</Link>
      
            </div>
          </nav>

          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/premium"
                element={<Premium />}
              />

              <Route
                path="/livetv"
                element={<LiveTV />}
              />

              <Route
                path="/sports"
                element={<Sports />}
              />

              <Route
                path="/hotnew"
                element={<HotAndNew />}
              />

              <Route
                path="/reviews"
                element={<Reviews />}
              />

              <Route
                path="/watchlist"
                element={<Watchlist />}
              />

              <Route
                path="/language"
                element={<Language />}
              />

              <Route
                path="/movies"
                element={<Movies />}
              />

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="*"
                element={
                  <div className="page">
                    <h1>404 - Page Not Found</h1>
                  </div>
                }
              />
            </Routes>
          </ErrorBoundary>

          {/* Floating Profile Icon */}
          <div className="floating-profile">
            <Link to="/profile" className="profile-link">
              👤
            </Link>
          </div>

        </div>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;