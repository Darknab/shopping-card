import { PropTypes } from "prop-types";
import { useState } from "react";

export default function Card({title, price, image, addToCart }) {
  const [ quantity, setQuantity ] = useState(1);

  function handleIncrement(e) {
    e.preventDefault();
    if (quantity < 3) setQuantity(prevquantity => prevquantity + 1);
  }

  function handleDecrement(e) {
    e.preventDefault();
    if (quantity > 1) setQuantity(prevquantity => prevquantity - 1);
  }

  function handleChange(e) {
    e.preventDefault();
    const input = Math.max(1, Number(e.target.value));
    setQuantity(input);
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
            <input className="quantity" type="number" name="quantity" min={1} max={3} value={quantity} onChange={(e) => handleChange(e)} />
            <button type="button" className="control increment" onClick={handleIncrement}>+</button>
            <button type="button" className="control decrement" onClick={handleDecrement}>-</button>
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