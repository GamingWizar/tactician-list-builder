import "./Header.css";

export default function Header(props) {
  return (
    <header className="header page__section">
      <div className="header__content">
        <p className="header__logo">Tactician</p>
        <div className="header__section">
          <button className="header__log-in">Log In</button>
        </div>
      </div>
    </header>
  );
}
