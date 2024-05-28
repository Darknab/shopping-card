import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"
import { PropTypes } from "prop-types";
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import Hamburger from "./Hamburger";
import { useState } from 'react';

export default function Navigation({ count }) {
  const [ isMenuDisplayed, setIsMenuDisplayed ] = useState(false);

  function handleClick() {
    setIsMenuDisplayed(! isMenuDisplayed);
  }
  return (
    <>
      <Hamburger onClick={handleClick} isMenuDisplayed={isMenuDisplayed} />
      <header className={isMenuDisplayed ? "active" : null} >
        <nav >
          <ul className="nav-menu">
            <li className="nav-link" id="home-link"><Link to="/">Awesome shop</Link></li>
            <li className="nav-link"><HashLink to="/shop#men">Men</HashLink></li>
            <li className="nav-link"><HashLink to="/shop#women">Women</HashLink></li>
            <li className="nav-link"><HashLink to="/shop#jewelery">Jewelery</HashLink></li>
            <li className="nav-link"><HashLink to="/shop#electronics">Electronics</HashLink></li>
            <li id="cart-link"><Link to="/cart"><Icon className="icon" path={mdiCartOutline} size={1} /> <sub className="count" id={count === 0 ? "empty" : "full"}>{count}</sub></Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

Navigation.propTypes = {
  count: PropTypes.number.isRequired,
}