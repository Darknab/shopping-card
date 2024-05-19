import {PropTypes} from "prop-types";
import Card from "./Card";

export default function Category({ id, products, addToCart, category }) {
  return (
    <section id={id}>
      <h2>{category}</h2>
      <div className="category">
      {products.map((item) => {
        return <Card 
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          addToCart={addToCart}
          id={item.id}
        />
      })}
      </div>
    </section>
  );
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
}