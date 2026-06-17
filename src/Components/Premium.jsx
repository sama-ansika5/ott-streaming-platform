export default function Premium() {
  const plans = [
    {
      name: "Mobile",
      price: "₹149/month",
      quality: "720p",
    },
    {
      name: "Super",
      price: "₹299/month",
      quality: "1080p",
    },
    {
      name: "Premium",
      price: "₹499/month",
      quality: "4K + Dolby Atmos",
    },
  ];

  return (
    <div className="page">
      <h1>Premium Subscription Plans</h1>

      <div className="plan-container">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.name}>
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <p>{plan.quality}</p>

            <button>
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}