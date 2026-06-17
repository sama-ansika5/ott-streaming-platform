export default function LiveTV() {
  const channels = [
    "Star Sports",
    "Sony Sports",
    "Zee Telugu",
    "ETV Telugu",
    "Discovery",
    "National Geographic",
    "Cartoon Network",
    "HBO",
  ];

  return (
    <div className="page">
      <h1>📺 Live TV Channels</h1>

      <div className="movie-grid">
        {channels.map((channel) => (
          <div className="movie-card" key={channel}>
            <h3>{channel}</h3>
            <button>Watch Live</button>
          </div>
        ))}
      </div>
    </div>
  );
}