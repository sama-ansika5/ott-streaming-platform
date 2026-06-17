import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      user: "Rahul",
      movie: "Pushpa 2",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Amazing movie with excellent action scenes!",
    },
    {
      user: "Priya",
      movie: "Salaar",
      rating: "⭐⭐⭐⭐",
      comment: "Great performances and powerful story.",
    },
    {
      user: "Kiran",
      movie: "Animal",
      rating: "⭐⭐⭐⭐⭐",
      comment: "One of the best movies I watched recently.",
    },
  ];

  return (
    <div className="reviews-page">
      <h1>User Reviews</h1>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.movie}</h3>
            <p><strong>User:</strong> {review.user}</p>
            <p>{review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;