import { PropTypes} from 'prop-types';

export default function Hamburger({ onClick, isMenuDisplayed }) {
  return (
    <div className={isMenuDisplayed ? "hamburger displayed" : "hamburger"} onClick={onClick}>
      <span className="first line"></span>
      <span className="second line"></span>
      <span className="third line"></span>
    </div>
  );
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuDisplayed: PropTypes.bool.isRequired,
}

