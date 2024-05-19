import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
      <div className="hero-content">
        <h1 className="site-title">Awesome Shop</h1>
        <Link to="/shop">
          <button className="shop">Shop now</button>
        </Link>
      </div>
      </div>
    </section>
  );
}