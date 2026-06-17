import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="avatar">👤</div>

        <h2>Ansika Reddy</h2>

        <div className="profile-info">
          <p><strong>Email:</strong> ansika@gmail.com</p>
          <p><strong>Plan:</strong> Premium</p>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Watchlist:</strong> 12 Movies</p>
          <p><strong>Password:</strong> ********</p>
        </div>

        <button className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;