import { PropTypes } from "prop-types";
import { useState } from "react";

export default function Card({title, price, image, addToCart }) {
  const [ quantity, setQuantity ] = useState(1);

  function handleIncrement(e) {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  function handleDecrement(e) {
    e.preventDefault();
    setQuantity(quantity - 1);
  }

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="image-container">
        <img src={image} alt={title} width={150} />
      </div>
      <p className="price"><span>$</span>{price.toFixed(2)}</p>
      <form onSubmit={(e) => addToCart(e, image, title, price, quantity)}>
        <div className="quantity-wrapper">
          <label>
            <input className="quantity" type="number" name="quantity" min={1} value={quantity} onChange={(e) => handleChange(e)} />
            <button className="control increment" onClick={handleIncrement}>+</button>
            <button className="control decrement" onClick={handleDecrement}>-</button>
          </label>
        </div>

        <button className="add-to-cart" type="submit">Add to Cart</button>
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