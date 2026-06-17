import "./Home.css";

function Home() {
  const trending = ["Pushpa 2", "Salaar", "Animal", "Leo"];
  const recommended = ["RRR", "KGF 2", "Kantara", "Vikram"];

  return (
    <div className="home">
      <div className="hero">
        <h1>Unlimited Movies, TV Shows & Sports</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <button>Start Watching</button>
      </div>

      <section>
        <h2>🔥 Trending Now</h2>
        <div className="movie-row">
          {trending.map((movie, index) => (
            <div className="movie-card" key={index}>
              <h3>{movie}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>⭐ Recommended For You</h2>
        <div className="movie-row">
          {recommended.map((movie, index) => (
            <div className="movie-card" key={index}>
              <h3>{movie}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;