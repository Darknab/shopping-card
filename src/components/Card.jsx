import { PropTypes } from "prop-types";

export default function Card({ id, title, price, image, addToCart }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{price}</p>
      <form onSubmit={(e) => addToCart(e, id)}>
        <label>
          <input type="number" name="quantity" defaultValue={1} />
        </label>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
}