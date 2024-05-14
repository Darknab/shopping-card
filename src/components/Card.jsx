import { PropTypes } from "prop-types";

export default function Card({ title, price, image }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{price}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}