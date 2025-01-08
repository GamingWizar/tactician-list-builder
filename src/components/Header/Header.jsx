import { Link } from "react-router-dom";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="header page__section">
      <div className="header__content">
        <Link to="/" className="header__logo">
          Tactician
        </Link>
        <div className="header__section">
          <button
            className="header__log-in"
            onClick={() => {
              props.handleOpenModal("logIn");
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}
