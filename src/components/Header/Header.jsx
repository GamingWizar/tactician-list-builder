import { Link } from "react-router-dom";

import "./Header.css";

export default function Header(props) {
  return (
    <header className="header page__section">
      <div className="header__content">
        <Link to="/" className="header__logo">
          Tactician
        </Link>
        {props.isLoggedIn ? (
          <div className="header__section">
            <button
              className="header__rosters header__button"
              onClick={() => {}}
            >
              Rosters
            </button>
            <button
              className="header__log-out header__button"
              onClick={props.handleLogOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="header__section">
            <Link
              className="header__create-army header__button"
              to="/rosters/create"
            >
              Create Roster
            </Link>
            <button
              className="header__log-in header__button"
              onClick={() => {
                props.handleOpenModal("logIn");
              }}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
