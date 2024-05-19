import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import { PropTypes } from "prop-types";

export default function Navigation({ count }) {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li className="nav-link" id="home-link"><Link to="/">Awesome shop</Link></li>
          <li className="nav-link"><HashLink to="/shop#men">Men</HashLink></li>
          <li className="nav-link"><HashLink to="/shop#women">Women</HashLink></li>
          <li className="nav-link"><HashLink to="/shop#jewelery">Jewelery</HashLink></li>
          <li className="nav-link"><HashLink to="/shop#electronics">Electronics</HashLink></li>
          <li className="nav-link" id="cart-link"><Link to="/cart">Cart <span>{count}</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  count: PropTypes.number.isRequired,
}