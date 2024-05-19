import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import { PropTypes } from "prop-types";

export default function Navigation({ count }) {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/">Awesome shop</Link></li>
          <li><HashLink to="/shop#men">Men</HashLink></li>
          <li><HashLink to="/shop#women">Women</HashLink></li>
          <li><HashLink to="/shop#jewelery">Jewelery</HashLink></li>
          <li><HashLink to="/shop#electronics">Electronics</HashLink></li>
          <li><Link to="/cart">Cart <span>{count}</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  count: PropTypes.number.isRequired,
}