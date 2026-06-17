import { useState } from "react";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>

        {isSignup && (
          <input
            type="text"
            placeholder="Username"
          />
        )}

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          {isSignup ? "Create Account" : "Login"}
        </button>

        <p
          onClick={() => setIsSignup(!isSignup)}
          style={{
            cursor: "pointer",
            marginTop: "15px",
            color: "#ff4d4d"
          }}
        >
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>

      </div>
    </div>
  );
}

export default Login;