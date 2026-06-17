export default function Fallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>⚠ Something Went Wrong</h1>

      <p>
        Sorry, an unexpected error occurred.
      </p>

      <button
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}