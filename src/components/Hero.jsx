import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <h1>Awesome Shop</h1>
      <Link to="#">
        <button>Shop now</button>
      </Link>
    </section>
  );
}