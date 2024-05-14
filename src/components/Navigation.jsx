import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/">Awesome shop</Link></li>
          <li><Link to="#">Men</Link></li>
          <li><Link to="#">Women</Link></li>
          <li><Link to="#">Jewelery</Link></li>
          <li><Link to="#">Electronics</Link></li>
          <li><Link to="#">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}