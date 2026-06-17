import { useState } from "react";

export default function Language() {
  const [selected, setSelected] =
    useState("");

  const languages = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Malayalam",
    "Kannada",
    "Marathi",
    "Bengali",
  ];

  return (
    <div className="page">
      <h1>Languages</h1>

      <div className="movie-grid">
        {languages.map((lang) => (
          <div
            key={lang}
            className="movie-card"
            onClick={() =>
              setSelected(lang)
            }
            style={{
              cursor: "pointer",
            }}
          >
            {lang}
          </div>
        ))}
      </div>

      {selected && (
        <h2>
          Selected Language:
          {" "}
          {selected}
        </h2>
      )}
    </div>
  );
}