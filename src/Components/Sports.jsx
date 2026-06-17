export default function Sports() {
  const sports = [
    "🏏 Cricket",
    "⚽ Football",
    "🏸 Badminton",
    "🎾 Tennis",
    "🤼 Kabaddi",
    "🏀 Basketball",
    "🏑 Hockey",
    "🏎 Formula 1",
  ];

  return (
    <div className="page">
      <h1>🏆 Sports Streaming</h1>

      <div className="movie-grid">
        {sports.map((sport) => (
          <div className="movie-card" key={sport}>
            <h3>{sport}</h3>
            <button>Watch Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}