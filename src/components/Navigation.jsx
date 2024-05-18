import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Navigation({ count }) {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/">Awesome shop</Link></li>
          <li><Link to="#">Men</Link></li>
          <li><Link to="#">Women</Link></li>
          <li><Link to="#">Jewelery</Link></li>
          <li><Link to="#">Electronics</Link></li>
          <li><Link to="/cart">Cart <span>{count}</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  count: PropTypes.number.isRequired,
}