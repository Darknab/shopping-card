import {PropTypes} from "prop-types";
import Card from "./Card";

export default function Category({ id, products }) {
  return (
    <section className="category" id={id}>
      {products.map((item) => {
        return <Card 
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      })}
    </section>
  );
}

Category.propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
}