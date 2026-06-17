export default function HotAndNew() {
  const trending = [
    "Pushpa 2",
    "Squid Game",
    "Wednesday",
    "Stranger Things",
    "Salaar",
    "Animal",
    "Money Heist",
    "The Family Man",
  ];

  return (
    <div className="page">
      <h1>🔥 Hot & New Releases</h1>

      <div className="movie-grid">
        {trending.map((item) => (
          <div className="movie-card" key={item}>
            <h3>{item}</h3>
            <button>Watch Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}